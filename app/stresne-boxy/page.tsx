import { SubpageShell } from "../components/SubpageShell";

export const metadata = {
  title: "Strešné boxy | R-SERVICE",
  description: "Certifikované montážne stredisko strešných nosičov, boxov a nosičov bicyklov.",
};

export default function RoofBoxesPage() {
  return (
    <SubpageShell
      activeHref="/stresne-boxy"
      kicker="Doplnkové služby"
      summary="Certifikované montážne stredisko strešných nosičov, boxov a nosičov bicyklov."
      title="Strešné boxy"
    >
      <div className="content-intro">
        <div>
          <h2>Nosiče, boxy a bicykle</h2>
          <p className="lead">
            Certifikované montážne stredisko strešných nosičov, boxov, nosičov bicyklov.
          </p>
        </div>
        <img src="/legacy/nosic_bicyklov.jpg" alt="Nosič bicyklov" />
      </div>
      <div className="legacy-media-grid">
        <img src="/legacy/box.jpg" alt="Strešný box" />
        <img src="/legacy/stresny_nosic.jpg" alt="Strešný nosič" />
      </div>
    </SubpageShell>
  );
}
