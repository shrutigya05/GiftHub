import { ProductCard } from './ProductCard.jsx';

const products = [
  {
    id: 1,
    name: 'Elegant Gift Box Set',
    price: 49.99,
    originalPrice: 69.99,
    rating: 5,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1637590957181-8893af2a8344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmFwcGVkJTIwZ2lmdCUyMGJveHxlbnwxfHx8fDE3NjczNjE1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Sale',
  },
  {
    id: 2,
    name: 'Luxury Jewelry Collection',
    price: 129.99,
    rating: 5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1702374114954-9029a74a8add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY3MzMyNjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Bestseller',
  },
  {
    id: 3,
    name: 'Scented Candle Set',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1633179437236-f2284a40b0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBjYW5kbGVzfGVufDF8fHx8MTc2NzM2MTU5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Smart Tech Bundle',
    price: 199.99,
    rating: 5,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1678852524356-08188528aed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0c3xlbnwxfHx8fDE3NjcyNTgyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'New',
  },
  {
    id: 5,
    name: 'Birthday Celebration Pack',
    price: 39.99,
    rating: 5,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NzM1OTkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Designer Accessories',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY3MzU2NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Sale',
  },
  {
    id: 7,
    name: 'Wedding Ring Set',
    price: 299.99,
    rating: 5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3N8ZW58MXx8fHwxNzY3MzQxNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Premium',
  },
  {
    id: 8,
    name: 'Gift Wrap Collection',
    price: 24.99,
    rating: 4,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1637590957181-8893af2a8344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmFwcGVkJTIwZ2lmdCUyMGJveHxlbnwxfHx8fDE3NjczNjE1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ProductsSection({ onProductClick, onAddToCart }) {
  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked gifts that are sure to make any occasion memorable
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product}
              onClick={() => onProductClick(product)}
              onAddToCart={() => onAddToCart({ ...product, quantity: 1 })}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

// Export products so they can be used for search
export { products };