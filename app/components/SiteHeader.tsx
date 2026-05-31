"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavItems, contact } from "../content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("is-locked", menuOpen);

    return () => {
      document.body.classList.remove("is-locked");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav section-inner" aria-label="Hlavná navigácia">
        <Link className="brand" href="/" aria-label="R-SERVICE domov" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true" />
          <span>R-SERVICE</span>
        </Link>
        <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="navLinks">
          {mainNavItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;

            return (
              <Link
                key={item.href}
                className={isActive ? "is-active" : undefined}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <a
          className="nav-towing"
          href={`tel:${contact.towing.number.replaceAll(" ", "")}`}
        >
          <span className="nav-towing-label">{contact.towing.label}</span>
          <span className="nav-towing-number">{contact.towing.number}</span>
        </a>
        <Link className="nav-cta" href="/kontakt">
          Kontakt
        </Link>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          id="menuToggle"
          type="button"
          aria-label="Otvoriť menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        />
      </nav>
    </header>
  );
}
