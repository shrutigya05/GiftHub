import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  {
    id: 1,
    name: 'Jewelry & Accessories',
    image: 'https://images.unsplash.com/photo-1702374114954-9029a74a8add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY3MzMyNjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    itemCount: 245,
  },
  {
    id: 2,
    name: 'Home & Decor',
    image: 'https://images.unsplash.com/photo-1633179437236-f2284a40b0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBjYW5kbGVzfGVufDF8fHx8MTc2NzM2MTU5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    itemCount: 189,
  },
  {
    id: 3,
    name: 'Tech Gadgets',
    image: 'https://images.unsplash.com/photo-1678852524356-08188528aed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0c3xlbnwxfHx8fDE3NjcyNTgyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    itemCount: 312,
  },
  {
    id: 4,
    name: 'Fashion & Style',
    image: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY3MzU2NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    itemCount: 428,
  },
];

export function CategorySection() {
  return (
    <section className="py-16 bg-white" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our curated collections and find the perfect gift for any occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-square">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              
              {/* Category Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-gray-200 text-sm">
                  {category.itemCount} items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
