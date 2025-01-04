import { Button } from '@/components/ui/button';

interface CollectionCardProps {
  title: string;
  image: string;
  description: string;
}

export function CollectionCard({ title, image, description }: CollectionCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 opacity-100 transition-opacity">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-center">{description}</p>
        <Button variant="outline" className="mt-4">View Collection</Button>
      </div>
    </div>
  );
}