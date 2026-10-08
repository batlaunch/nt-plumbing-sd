import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD. "Home" is added
 * automatically; pass the rest of the trail ending with the current page.
 */
export default function PageBreadcrumb({ trail, className = "max-w-4xl" }: { trail: Crumb[]; className?: string }) {
  const crumbs: Crumb[] = [{ name: "Home", path: "/" }, ...trail];
  return (
    <div className="border-b bg-muted/40 px-4 py-3">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb className={`mx-auto ${className}`}>
        <BreadcrumbList>
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <Fragment key={c.path}>
                <BreadcrumbItem>
                  {last ? (
                    <BreadcrumbPage>{c.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={c.path}>{c.name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!last && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
