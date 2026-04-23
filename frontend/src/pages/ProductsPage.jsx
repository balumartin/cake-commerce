import { useProducts } from "../hooks/useProducts.js";

export default function ProductsPage() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div>
      {data.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}