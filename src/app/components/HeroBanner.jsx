import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-rose-50 to-purple-50 py-16 md:py-24" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-gray-900">
              Find the Perfect Gift for Every Occasion
            </h1>
            <p className="text-gray-600 text-lg">
              Discover thoughtful gifts that bring smiles to your loved ones. From birthdays to anniversaries, we have something special for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition">
                Shop Now
              </button>
              <button className="border border-rose-500 text-rose-500 px-8 py-3 rounded-lg hover:bg-rose-50 transition">
                View Collections
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] md:h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764183298040-6859fef0b24b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY2VsZWJyYXRpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjczNjE1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Gift celebration"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
