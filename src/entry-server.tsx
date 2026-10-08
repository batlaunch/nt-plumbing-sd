// Build-time render entry, compiled with `vite build --ssr` and driven by
// scripts/prerender.mjs. Renders one route to an HTML string plus the <head>
// tags react-helmet-async collected for it — no browser required.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import AppRoutes from "@/AppRoutes";

export { getSiteRoutes, NOT_FOUND_PATH } from "@/routes";

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );
  const h = helmetContext.helmet!;
  const head = [h.title, h.meta, h.link, h.script].map((t) => t.toString()).join("\n");
  return { html, head };
}
