import Link from "next/link";
import { contact, servicePages } from "../content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true" />
              <span>R-SERVICE</span>
            </Link>
            <p>Autoservis a pneuservis s dôrazom na kvalitu a rýchlosť.</p>
          </div>
          <div>
            <h3>Služby</h3>
            <div className="footer-links">
              {servicePages.map((service) => (
                <Link key={service.slug} href={service.href}>
                  {service.navLabel}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3>Kontakt</h3>
            <div className="footer-contact">
              <span>{contact.address.slice(1).join(", ")}</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phones[0].replaceAll(" ", "")}`}>{contact.phones[0]}</a>
            </div>
          </div>
        </div>
        <div className="copyright">© 2024 R-SERVICE. Všetky práva vyhradené.</div>
      </div>
    </footer>
  );
}
