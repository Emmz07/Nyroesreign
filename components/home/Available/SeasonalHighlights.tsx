import ProductCard from "./ProductCard";

const products = [
  {
    name: "Queen Anato Crest",
    price: 69,
    originalPrice: 35,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80",
  },
  {
    name: "Bowie Tee",
    price: 79,
    originalPrice: 35,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
  },
  {
    name: "The Trucker",
    price: 32,
    originalPrice: 35,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
    discount: "9%"
  }
];

export default function SeasonalHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}