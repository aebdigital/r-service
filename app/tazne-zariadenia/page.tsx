import { SubpageShell } from "../components/SubpageShell";

export const metadata = {
  title: "Ťažné zariadenia | R-SERVICE",
  description: "Certifikované montážne stredisko na všetky typy ťažných zariadení.",
};

export default function TowBarPage() {
  return (
    <SubpageShell
      activeHref="/tazne-zariadenia"
      kicker="Doplnkové služby"
      summary="Certifikované montážne stredisko na všetky typy ťažných zariadení."
      title="Ťažné zariadenia"
    >
      <div className="content-intro">
        <div>
          <h2>Predaj a montáž</h2>
          <p className="lead">
            Certifikované montážne stredisko na všetky typy ťažných zariadení, predaj ťažných zariadení.
          </p>
        </div>
        <img src="/legacy/tazne.jpg" alt="Ťažné zariadenie" />
      </div>
    </SubpageShell>
  );
}
