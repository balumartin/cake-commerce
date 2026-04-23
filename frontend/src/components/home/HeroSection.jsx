import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Tervezd meg saját tortádat
      </h1>
      <p className="mb-6">
        Egyedi sütemények bármilyen alkalomra
      </p>

      <button
        onClick={() => navigate("/custom-cake")}
        className="px-6 py-3 bg-black text-white"
      >
        Egyedi rendelés
      </button>
    </section>
  );
}