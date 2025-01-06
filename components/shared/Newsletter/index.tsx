import { Button } from '@/components/ui/button';

export function Newsletter() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Stay updated with our latest collections, behind-the-scenes content, and exclusive insights 
          into the world of fashion.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full text-black"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}