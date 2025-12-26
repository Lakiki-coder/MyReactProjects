import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1,
      })
    );
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-gray-100 flex-grow relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discountPercentage && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            -{product.discountPercentage.toFixed(0)}%
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <Link to={`/product/${product.id}`} className="text-gray-900 hover:text-gray-600 transition">
          <h3 className="font-semibold text-sm line-clamp-2 mb-2 leading-snug">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.round(product.rating || 0)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-600">
            ({product.reviews?.length || 0})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4 mt-auto">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.discountPercentage && (
            <span className="text-sm text-gray-500 line-through">
              ${((product.price) / (1 - product.discountPercentage / 100)).toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gray-900 text-white py-2.5 rounded font-semibold text-sm hover:bg-black transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
