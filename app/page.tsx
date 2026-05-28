"use client";

import Link from "next/link";
import type { CSSProperties, FormEvent } from "react";
import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { RevealObserver } from "./components/RevealObserver";
import { SiteHeader } from "./components/SiteHeader";
import { contact, servicePages } from "./content";

type CSSVars = CSSProperties & Record<`--${string}`, string>;

const delay = (ms: number): CSSVars => ({ "--delay": `${ms}ms` });
const progressValue = (value: string): CSSVars => ({ "--value": value });

const stats = [
  { value: "20+", label: "Rokov skúseností" },
  { value: "100%", label: "Kvalita služieb" },
  { value: "24h", label: "Dodanie dielov" },
  { value: "Shell", label: "Partner" },
];

const diagnostics = [
  {
    number: "1",
    title: "Komplexná kontrola",
    text: "Diagnostika riadenia motora, bezpečnostných systémov, AIR BAG, ASR, ESP a klimatizácie.",
  },
  {
    number: "2",
    title: "Mechanické práce",
    text: "Opravy častí riadenia, pruženia, brzdovej sústavy a výfukovej sústavy.",
  },
  {
    number: "3",
    title: "Príprava na STK",
    text: "Úspešná príprava vozidla na technickú a emisnú kontrolu.",
  },
];

const progressRows = [
  { label: "Záručné prehliadky", value: "Áno" },
  { label: "Rýchlosť servisu", value: "Pohotová" },
];

const projects = [
  {
    title: "Servisné prehliadky",
    text: "Pre nové vozidlá v záruke",
    image: "/project1.jpg",
    delay: 0,
  },
  {
    title: "Generálka motora",
    text: "Kompletné opravy a výmena rozvodu",
    image: "/project2.jpg",
    delay: 80,
  },
  {
    title: "Výmena pneumatík",
    text: "Pre osobné autá a SUV",
    image: "/project3.jpg",
    delay: 160,
  },
];

const features = [
  {
    title: "Otváracie hodiny",
    text: "Po - Pi: 9:00 - 16:00",
    delay: 240,
  },
  {
    title: "Kontakt",
    text: `Tel: ${contact.phones.join(", ")}`,
    delay: 320,
  },
];

function track(event: string, props?: Record<string, string>) {
  const plausible = (window as Window & {
    plausible?: (name: string, options?: { props?: Record<string, string> }) => void;
  }).plausible;

  plausible?.(event, props ? { props } : undefined);
}

function phoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.89.66 2.78a2 2 0 0 1-.45 2.11L8.09 9.84a16 16 0 0 0 6.07 6.07l1.23-1.23a2 2 0 0 1 2.11-.45c.89.31 1.82.53 2.78.66A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    let scrollMarks = [25, 50, 75, 100];
    const timers = [
      window.setTimeout(() => track("Time30s"), 30000),
      window.setTimeout(() => track("Time60s"), 60000),
      window.setTimeout(() => track("Time120s"), 120000),
    ];

    const onScroll = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = (window.scrollY / docHeight) * 100;
      scrollMarks = scrollMarks.filter((mark) => {
        if (pct >= mark) {
          track("Scroll", { depth: `${mark}%` });
          return false;
        }

        return true;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <SiteHeader />
      <RevealObserver />

      <main>
        <section className="hero" id="home" aria-label="Úvod">
          <div className="hero-media" aria-hidden="true">
            <img src="/hero.jpg" alt="" />
          </div>
          <div className="section-inner hero-inner">
            <div className="hero-content">
              <p className="kicker reveal">Od roku 2003</p>
              <h1 className="reveal" style={delay(80)}>
                Kvalitný servis pre váš automobil
              </h1>
              <p className="hero-copy reveal" style={delay(160)}>
                Komplexný autoservis a pneuservis s dôrazom na kvalitu. Opravy,
                diagnostika, pneumatiky a náhradné diely s rýchlym dodaním.
              </p>
              <div className="hero-actions reveal" style={delay(240)}>
                <Link className="btn btn-primary" href="/kontakt">
                  Objednať sa na servis
                </Link>
                <Link className="btn btn-light" href="/sluzby/autoservis">
                  Zistiť viac
                </Link>
              </div>
            </div>
            <div className="hero-stats reveal" style={delay(320)} aria-label="Prehľad servisu">
              <div className="hero-stat">
                <strong>2003</strong>
                <span>Rok založenia</span>
              </div>
              <div className="hero-stat">
                <strong>Shell partner</strong>
                <span>Kvalitné oleje</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-inner">
            <div className="section-heading">
              <p className="kicker reveal">Naše služby</p>
              <h2 className="reveal" style={delay(80)}>
                Komplexná starostlivosť o vozidlo
              </h2>
              <p className="lead reveal" style={delay(160)}>
                Päť hlavných služieb z pôvodného webu sme rozšírili do samostatných stránok
                s kompletným textom a obrázkami.
              </p>
            </div>

            <div className="service-grid is-five">
              {servicePages.map((service, index) => (
                <Link
                  key={service.slug}
                  className={`service-card reveal${service.slug === "nahradne-diely" ? " is-red" : ""}`}
                  href={service.href}
                  style={delay((index + 1) * 70)}
                >
                  <img className="service-bg-img" src={service.cardImage} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="section-inner split">
            <div className="about-art reveal">
              <div className="about-main-img">
                <img src="/legacy/o_firme.jpg" alt="R-SERVICE: Odbornosť a dôvera" />
              </div>
              <div className="about-small-img">
                <img src="/legacy/servisak.jpg" alt="R-SERVICE: Odbornosť a dôvera" />
              </div>
            </div>
            <div className="about-copy">
              <p className="kicker reveal">O firme</p>
              <h2 className="reveal" style={delay(80)}>
                R-SERVICE: Odbornosť a dôvera
              </h2>
              <p className="accent-line reveal" style={delay(160)}>
                Kvalita za rozumnú cenu
              </p>
              <p className="lead reveal" style={delay(220)}>
                Firma vznikla v roku 2003. Venujeme sa službám pre motoristov a kladieme
                dôraz na vysokú odbornosť, osobitý prístup a neustále vzdelávanie tímu.
              </p>
              <ul className="check-list reveal" style={delay(300)}>
                <li>Servisné a záručné prehliadky pre nové vozidlá</li>
                <li>Vysoká odbornosť a osobitý prístup</li>
                <li>Rýchle dodanie náhradných dielov</li>
              </ul>
              <Link className="btn btn-primary reveal" style={delay(380)} href="/profil-firmy">
                Profil firmy
              </Link>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Čísla servisu">
          <div className="section-inner stats-grid">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-card reveal" style={delay(index * 80)}>
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="diagnostic">
          <div className="section-inner diagnostic-grid">
            <div className="diagnostic-panel reveal">
              <h2>Diagnostika a údržba</h2>
              <div className="diagnostic-list">
                {diagnostics.map((item) => (
                  <div className="diagnostic-item" key={item.title}>
                    <span className="mini-icon" aria-hidden="true">
                      {item.number}
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-copy">
              <p className="kicker reveal">Prečo my</p>
              <h2 className="reveal" style={delay(80)}>
                Dôvera zákazníkov
              </h2>
              <p className="lead reveal" style={delay(160)}>
                Nechceme byť najlacnejší a za každú cenu predať, ale preferujeme kvalitu,
                ktorá vám ušetrí čas a peniaze v dlhodobom horizonte.
              </p>
              <div className="progress-list reveal" style={delay(240)}>
                {progressRows.map((row) => (
                  <div className="progress-row" key={row.label}>
                    <div className="progress-label">
                      <span>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                    <div className="progress-bar">
                      <span style={progressValue(row.value)} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="phone-row reveal" style={delay(320)}>
                <span className="phone-icon" aria-hidden="true">
                  {phoneIcon()}
                </span>
                <div>
                  <span>Nonstop linka</span>
                  <strong>{contact.phones[0]}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-inner">
            <div className="section-heading">
              <p className="kicker reveal">Realizácie</p>
              <h2 className="reveal" style={delay(80)}>
                Naše práce
              </h2>
            </div>
            <div className="project-strip">
              {projects.map((project) => (
                <article key={project.title} className="project-card reveal" style={delay(project.delay)}>
                  <img src={project.image} alt={project.title} />
                  <div>
                    <strong>{project.title}</strong>
                    <span>{project.text}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="capabilities">
          <div className="section-inner capability-grid">
            <div className="capability-box reveal">
              <p className="kicker">Špecializácie</p>
              <h2>Čo ponúkame</h2>
              <p className="lead">
                Predaj pneumatík VRANÍK s výhodnými rabatmi, široký sortiment
                náhradných dielov a olejov, certifikovaná montáž ťažných zariadení a
                strešných nosičov.
              </p>
              <div className="faq-list">
                {servicePages.map((service) => (
                  <Link className="faq-item" href={service.href} key={service.slug}>
                    <span>{service.title}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="reveal" style={delay(120)}>
              <div className="rating-card">
                <div className="stars">★★★★★</div>
                <strong>Shell partner</strong>
              </div>

              <div className="capability-image" role="img" aria-label="Čo ponúkame">
                <img src="/legacy/r-service-final.png" alt="R-SERVICE" />
              </div>
            </div>
          </div>
        </section>

        <section className="quote-features" id="contact">
          <div className="quote-panel">
            <img className="quote-bg-img" src="/quoteBg.jpg" alt="" aria-hidden="true" />
            <h2 className="reveal">Kontaktujte nás</h2>
            <form className="quote-form reveal" style={delay(100)} onSubmit={submitQuote}>
              <input type="text" name="name" placeholder="Meno" aria-label="Meno" />
              <input type="tel" name="phone" placeholder="Telefón" aria-label="Telefón" />
              <input type="email" name="email" placeholder="Email" aria-label="Email" />
              <input
                type="text"
                name="vehicle"
                placeholder="Značka a model auta"
                aria-label="Značka a model auta"
              />
              <textarea
                name="message"
                placeholder="Popíšte problém alebo požadovaný servis"
                aria-label="Popíšte problém alebo požadovaný servis"
              />
              <button className="btn btn-dark" type="submit">
                Odoslať požiadavku
              </button>
            </form>
          </div>
          <div className="contact-dark">
            <p className="kicker reveal">Otváracie hodiny</p>
            <h2 className="reveal" style={delay(80)}>
              Navštívte nás vo Veľkom Krtíši
            </h2>
            <p className="lead reveal" style={delay(160)}>
              Tešíme sa na vašu návštevu. Ponúkame výhodné rabaty pri nákupe pneumatík.
            </p>
            <div className="feature-list">
              {features.map((feature) => (
                <div className="feature-item reveal" style={delay(feature.delay)} key={feature.title}>
                  <span className="mini-icon" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <strong>{feature.title}</strong>
                    <span>{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="cta-inner">
            <h2>Potrebujete servis?</h2>
            <Link className="btn btn-light" href="/kontakt">
              Zavolajte nám
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
