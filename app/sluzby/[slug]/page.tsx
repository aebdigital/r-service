import { notFound } from "next/navigation";
import type { ServicePage } from "../../content";
import { servicePages } from "../../content";
import { SubpageShell } from "../../components/SubpageShell";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  return {
    title: service ? `${service.title} | R-SERVICE` : "Služby | R-SERVICE",
    description: service?.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <SubpageShell
      activeHref={service.href}
      kicker="Služby"
      summary={service.summary}
      title={service.title}
    >
      <ServiceContent service={service} />
    </SubpageShell>
  );
}

function ServiceContent({ service }: { service: ServicePage }) {
  if (service.slug === "autoservis") {
    return (
      <>
        <div className="content-intro">
          <div>
            <p className="kicker">Autoservis</p>
            <h2>Vykonávame</h2>
            <p className="lead">
              Kompletná starostlivosť od pravidelných prehliadok cez mechanické práce až
              po diagnostiku, autoelektriku a prípravu na STK/EK.
            </p>
          </div>
          <img src={service.heroImage} alt={service.title} />
        </div>
        <ul className="detail-list">
          {service.highlights?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="detail-grid">
          {service.detailItems?.map((item) => (
            <article className="detail-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </>
    );
  }

  if (service.slug === "pneuservis") {
    return (
      <>
        <div className="content-intro">
          <img src={service.heroImage} alt={service.title} />
          <div>
            <p className="kicker">Pneuservis</p>
            <h2>Ponúkame pneuservis pre</h2>
            <div className="pill-list">
              {service.audiences?.map((audience) => (
                <span key={audience}>{audience}</span>
              ))}
            </div>
          </div>
        </div>
        <h2>Vykonávame</h2>
        <ul className="detail-list">
          {service.highlights?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }

  if (service.slug === "nahradne-diely") {
    return (
      <>
        <div className="content-intro">
          <div>
            <p className="kicker">Náhradné diely</p>
            <h2>Rýchle diely a oleje</h2>
            {service.paragraphs?.slice(0, 2).map((paragraph) => (
              <p className="lead" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <img src="/legacy/parts/motor.jpg" alt="Náhradné diely" />
        </div>
        <div className="parts-grid">
          {service.parts?.map((part) => (
            <article className="part-card" key={part.title}>
              <img src={part.image} alt={part.title} />
              <h3>{part.title}</h3>
              <p>{part.text}</p>
            </article>
          ))}
        </div>
        <div className="note-panel">
          {service.paragraphs?.slice(2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <img src="/legacy/shell_logo.jpg" alt="Shell partner" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="content-intro">
        <div>
          <p className="kicker">{service.title}</p>
          <h2>{service.title}</h2>
          {service.paragraphs?.map((paragraph) => (
            <p className="lead" key={paragraph}>
              {paragraph}
            </p>
          ))}
          {"pdfHref" in service && service.pdfHref ? (
            <a className="btn btn-primary" href={service.pdfHref} target="_blank" rel="noreferrer">
              Otvoriť PDF katalóg
            </a>
          ) : null}
        </div>
        {"pdfHref" in service && service.pdfHref ? (
          <a className="image-link" href={service.pdfHref} target="_blank" rel="noreferrer">
            <img src={service.heroImage} alt={service.title} />
          </a>
        ) : (
          <img src={service.heroImage} alt={service.title} />
        )}
      </div>
    </>
  );
}
