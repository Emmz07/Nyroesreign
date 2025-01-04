import { CollectionCard } from './CollectionCard';
import { collections } from './data';

export function Collections() {
  return (
    <section id="collections" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Collections</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.title} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
}