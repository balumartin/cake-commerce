export default function InfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto grid gap-6">
        <div>
          <h3 className="font-semibold">Helyszíni átvétel</h3>
          <p>Vedd át személyesen cukrászdánkban.</p>
        </div>

        <div>
          <h3 className="font-semibold">Házhozszállítás</h3>
          <p>Gyors és biztonságos kiszállítás.</p>
        </div>

        <div>
          <h3 className="font-semibold">Születésnapok</h3>
          <p>Egyedi torták különleges alkalmakra.</p>
        </div>
      </div>
    </section>
  );
}