import Image from "next/image";
import Link from "next/link";
import AboutSection from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury restaurant interior"
          fill
          className="object-cover brightness-50 transform scale-110 hover:scale-100 transition-transform duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 animate-fade-in">
            Welcome to <span className="text-amber-500">Gourmet</span> Haven
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
            Where every dish tells a story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link
              href="/reservation"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Make a Reservation
            </Link>
            <Link
              href="/menu"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section with Hover Effects */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Our Specialties
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="Italian Pizza"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300 rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-500 transition-colors duration-300">Italian Cuisine</h3>
              <p className="text-gray-600">Authentic Italian dishes crafted with passion and tradition</p>
            </div>
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="Fresh Juices"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300 rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-500 transition-colors duration-300">Fresh Juices</h3>
              <p className="text-gray-600">Natural, vitamin-rich juices made from fresh fruits</p>
            </div>
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Dessert presentation"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300 rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-500 transition-colors duration-300">Desserts</h3>
              <p className="text-gray-600">Sweet creations that will delight your senses</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Our Gallery
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Gourmet dish"
                width={400}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View More
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Chef preparing food"
                width={400}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View More
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Restaurant atmosphere"
                width={400}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View More
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Wine selection"
                width={400}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View More
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Dessert presentation"
                width={400}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View More
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Cocktail bar"
                width={400}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View More
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Fresh juices and smoothies"
                width={400}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            What Our Guests Say
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xl">
                    {item}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Guest Name</h4>
                    <p className="text-gray-500">Regular Customer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"The food was absolutely amazing! The service was impeccable, and the atmosphere was perfect for our anniversary dinner."</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Parallax */}
      <section className="relative py-32 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Call to action background"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join us for a culinary journey that will delight your senses</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
            >
              Book a Table
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
