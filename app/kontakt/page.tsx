import { SubpageShell } from "../components/SubpageShell";
import { contact } from "../content";

export const metadata = {
  title: "Kontakt | R-SERVICE",
  description: "Prevádzka, otváracie hodiny, fakturačné údaje a mapa R-SERVICE.",
};

export default function ContactPage() {
  return (
    <SubpageShell
      activeHref="/kontakt"
      kicker="Kontakt"
      summary="Prevádzka, otváracie hodiny, fakturačné údaje a mapa."
      title="Kontakt"
    >
      <div className="contact-page-grid">
        <section className="contact-card">
          <h2>Prevádzka</h2>
          {contact.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <div className="contact-actions">
            {contact.phones.map((phone) => (
              <a className="btn btn-primary" href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>
                {phone}
              </a>
            ))}
            <a className="btn btn-dark" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
        </section>
        <section className="contact-card">
          <h2>Otváracie hodiny</h2>
          <table className="hours-table">
            <tbody>
              {contact.hours.map(([day, from, to]) => (
                <tr key={day}>
                  <th>{day}</th>
                  <td>
                    {from} - {to}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      <img className="map-image" src="/legacy/mapa.png" alt="Mapa k prevádzke R-SERVICE" />
      <div className="contact-page-grid">
        <section className="contact-card">
          <h2>Fakturačné údaje</h2>
          {contact.billing.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </section>
        <section className="contact-card">
          <h2>Údaje firmy</h2>
          <dl className="company-details">
            <div>
              <dt>IČO</dt>
              <dd>{contact.companyId}</dd>
            </div>
            <div>
              <dt>DIČ</dt>
              <dd>{contact.taxId}</dd>
            </div>
            <div>
              <dt>IČ DPH</dt>
              <dd>{contact.vatId}</dd>
            </div>
          </dl>
          <p>sme platcami DPH</p>
        </section>
      </div>
    </SubpageShell>
  );
}
