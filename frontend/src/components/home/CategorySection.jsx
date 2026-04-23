import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Torták", slug: "cakes" },
  { name: "Esküvői torták", slug: "wedding-cakes" },
  { name: "Sütemények", slug: "pastries" },
  { name: "Egyedi torták", slug: "custom" },
];

export default function CategorySection() {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <h2 className="text-2xl mb-8 text-center">Kategóriák</h2>

      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            onClick={() => navigate(`/products?category=${cat.slug}`)}
            className="p-6 border cursor-pointer hover:bg-gray-100"
          >
            {cat.name}
          </div>
        ))}
      </div>
    </section>
  );
}