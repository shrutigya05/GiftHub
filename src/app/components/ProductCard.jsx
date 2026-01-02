import { Star, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductCard({ 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  tag,
  onClick,
  onAddToCart
}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
      {/* Image Container */}
      <div 
        className="relative overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        )}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-50"
        >
          <ShoppingCart className="w-5 h-5 text-rose-500" />
        </button>
      </div>

      {/* Content */}
      <div 
        className="p-4 space-y-2 cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-gray-900 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-rose-600">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}