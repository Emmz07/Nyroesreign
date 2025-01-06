import { AiOutlineArrowRight } from "react-icons/ai"; 
import { Button } from "@/components/ui/button";
export function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
          alt="Fashion hero"
          className="w-full h-full object-cover inset-0 opacity-30"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Redefining Modern <span className="text-blue-500">Elegance</span></h1>
          <p className="text-xl mb-8">Discover a world where cutting-edge design and sustainable practices come together, redefining fashion with purpose and elegance.</p>
          <div className="space-x-4">
          <Button variant="outline" className="mt-4">More Collections</Button>
          <Button className="text-sm pb-2">Learn More <AiOutlineArrowRight /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}