export function About() {
    return (
      <section id="about" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2024, LUXE emerged from a vision to create timeless pieces that transcend seasonal trends. 
                Our commitment to sustainable fashion and ethical manufacturing sets us apart in the industry.
              </p>
              <p className="text-gray-600 mb-6">
                Every piece in our collection is thoughtfully designed and crafted with attention to detail, 
                ensuring both quality and style that lasts.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-gray-600">Artisans</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">100%</h3>
                  <p className="text-gray-600">Sustainable</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">20+</h3>
                  <p className="text-gray-600">Countries</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80"
                alt="Behind the scenes"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }