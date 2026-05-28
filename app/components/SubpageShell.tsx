import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { companyPages, servicePages } from "../content";
import { Footer } from "./Footer";
import { RevealObserver } from "./RevealObserver";
import { SiteHeader } from "./SiteHeader";

type SubpageShellProps = {
  activeHref?: string;
  children: ReactNode;
  kicker: string;
  summary: string;
  title: string;
};

export function SubpageShell({ activeHref, children, kicker, summary, title }: SubpageShellProps) {
  const delay80 = { "--delay": "80ms" } as CSSProperties & Record<`--${string}`, string>;
  const delay120 = { "--delay": "120ms" } as CSSProperties & Record<`--${string}`, string>;
  const delay160 = { "--delay": "160ms" } as CSSProperties & Record<`--${string}`, string>;

  return (
    <>
      <SiteHeader />
      <RevealObserver />
      <main>
        <section className="subpage-hero">
          <div className="section-inner subpage-hero-inner">
            <p className="kicker reveal">{kicker}</p>
            <h1 className="reveal" style={delay80}>
              {title}
            </h1>
            <p className="hero-copy reveal" style={delay160}>
              {summary}
            </p>
          </div>
        </section>

        <section className="subpage-content">
          <div className="section-inner service-layout">
            <aside className="service-sidebar reveal" aria-label="Navigácia služieb">
              <div className="sidebar-group">
                <h2>Služby</h2>
                <div className="sidebar-links">
                  {servicePages.map((service) => (
                    <Link
                      className={activeHref === service.href ? "sidebar-link is-active" : "sidebar-link"}
                      href={service.href}
                      key={service.slug}
                    >
                      <span>{service.navLabel}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="sidebar-group">
                <h2>Firma</h2>
                <div className="sidebar-links">
                  {companyPages.map((page) => (
                    <Link
                      className={activeHref === page.href ? "sidebar-link is-active" : "sidebar-link"}
                      href={page.href}
                      key={page.slug}
                    >
                      <span>{page.title}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
            <div className="content-panel reveal" style={delay120}>
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
