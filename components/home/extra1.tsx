import Image from 'next/image';
import Link from 'next/link';

export default function Xtra() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 gap-6 my-8">
        {/* Women Category */}
        <Link href="/women" className="relative group overflow-hidden rounded-lg">
          <div className="relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95"
              alt="Women's Fashion"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-pink-500">WOMEN</span> CLOTHES
              </h2>
              <p className="text-xl text-gray-200">NEW ARRIVALS</p>
            </div>
          </div>
        </Link>

        {/* Men Category */}
        <Link href="/men" className="relative group overflow-hidden rounded-lg">
          <div className="relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
              alt="Men's Fashion"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-blue-500">MEN</span> CLOTHES
              </h2>
              <p className="text-xl text-gray-200">NEW ARRIVALS</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Discount Banner */}
      <div className="relative my-12 rounded-lg overflow-hidden">
        <div className="relative h-[300px] bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[200px] font-bold text-gray-200 select-none">
              DISCOUNT
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4">
                50% OFF ON <span className="text-blue-600 italic">ALL PRODUCTS</span>
              </h2>
              <p className="text-xl text-gray-600">
                All the discounts you love, right in your pocket
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}