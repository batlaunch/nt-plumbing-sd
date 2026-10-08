// Tiny Markdown subset for long-form content (service pages, city pages, blog
// posts) so copy can live in plain data files instead of hand-written JSX.
//
// Blocks (separated by blank lines):  "## " h2, "### " h3, "- " bullet list,
// "1. " numbered list, anything else = paragraph.
// Inline: [text](/internal-or-https-link), **bold**, {{TODO: ...}}.
//
// {{TODO: ...}} renders as a highlighted placeholder so missing client info is
// impossible to miss on a preview — every one is tracked in TODO-CLIENT.md.
import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";

const INLINE = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\{\{TODO:[^}]*\}\})/g;

export function Todo({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-yellow-200 px-1 font-mono text-[0.85em] text-yellow-950" data-todo="client">
      {"{{"}TODO: {children}
      {"}}"}
    </mark>
  );
}

export function Inline({ text }: { text: string }) {
  const parts = text.split(INLINE);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={i} to={href}>
              {label}
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          );
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i}>{bold[1]}</strong>;
        const todo = part.match(/^\{\{TODO:\s*([^}]*)\}\}$/);
        if (todo) return <Todo key={i}>{todo[1].trim()}</Todo>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export default function RichText({ source }: { source: string }) {
  const blocks = source
    .trim()
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <>
      {blocks.map((block, i) => {
        if (block.startsWith("### ")) return <h3 key={i}><Inline text={block.slice(4)} /></h3>;
        if (block.startsWith("## ")) return <h2 key={i}><Inline text={block.slice(3)} /></h2>;
        const lines = block.split("\n").map((l) => l.trim());
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}><Inline text={l.slice(2)} /></li>
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(lines[0]) && lines.every((l) => /^\d+\.\s/.test(l) || l.startsWith("- "))) {
          // Numbered list; "- " lines nest under the preceding item.
          const items: { text: string; sub: string[] }[] = [];
          for (const l of lines) {
            if (l.startsWith("- ")) items[items.length - 1].sub.push(l.slice(2));
            else items.push({ text: l.replace(/^\d+\.\s/, ""), sub: [] });
          }
          return (
            <ol key={i}>
              {items.map((item, j) => (
                <li key={j}>
                  <Inline text={item.text} />
                  {item.sub.length > 0 && (
                    <ul>
                      {item.sub.map((s, k) => (
                        <li key={k}><Inline text={s} /></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          );
        }
        return <p key={i}><Inline text={lines.join(" ")} /></p>;
      })}
    </>
  );
}

/** Plain-text word count of a RichText source (for reporting). */
export function wordCount(source: string): number {
  return source
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}
