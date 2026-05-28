import { SubpageShell } from "../components/SubpageShell";

export const metadata = {
  title: "Profil firmy | R-SERVICE",
  description: "Profil firmy R-SERVICE, predmet činnosti a autoservisné služby.",
};

export default function CompanyProfilePage() {
  return (
    <SubpageShell
      activeHref="/profil-firmy"
      kicker="O firme"
      summary="R-SERVICE vznikol v roku 2003 a venuje sa službám pre motoristov."
      title="Profil firmy"
    >
      <div className="content-intro">
        <div>
          <p className="lead">
            Firma R-SERVICE vznikla v roku 2003. Venujeme sa službám pre motoristov. V našej firme kladieme dôraz na vysokú odbornosť, osobitý prístup a neustále vzdelávanie R-SERVICE tímu, aby sme mohli pohotovo reagovať na zvyšujúce sa nároky zákazníkov a inovácie na automobilovom trhu.
          </p>
          <p className="lead">
            Nechceme byť najlacnejší a za každú cenu predať, ale preferujeme kvalitu za rozumnú cenu, ktorá Vám v konečnom dôsledku ušetrí čas a peniaze.
          </p>
        </div>
        <img src="/legacy/o_firme.jpg" alt="R-SERVICE profil firmy" />
      </div>
      <h2>Predmet činnosti</h2>
      <div className="profile-grid">
        <section>
          <h3>Predaj</h3>
          <ul className="detail-list">
            <li>náhradných dielov</li>
            <li>olejov</li>
            <li>pneumatík</li>
            <li>plechových a hliníkových diskov</li>
            <li>ťažných zariadení</li>
            <li>strešných nosičov a boxov</li>
          </ul>
        </section>
        <img src="/legacy/servisak.jpg" alt="Servisný pracovník" />
      </div>
      <h2>Autoservis</h2>
      <ul className="detail-list columns">
        <li>servisné prehliadky vozidiel</li>
        <li>výmena oleja</li>
        <li>mechanické práce</li>
        <li>GO podvozkov, bŕzd</li>
        <li>kompletné motorárske práce vrátane generálok motorov</li>
        <li>bežná údržba vozidiel</li>
        <li>automobilová diagnostika</li>
        <li>autoelektrika</li>
        <li>digitálna geometria</li>
        <li>čistenie klimatizácií</li>
        <li>príprava na STK a EK</li>
        <li>kompletný pneuservis pre osobné vozidlá, SUV, off road a ľahké úžitkové vozidlá do 3,5t</li>
        <li>montáž ťažných zariadení</li>
      </ul>
    </SubpageShell>
  );
}
