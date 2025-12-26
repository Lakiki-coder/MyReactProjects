import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetProductByIdQuery } from '../features/api/productsApi';
import { addToCart } from '../features/cart/cartSlice';
import Header from '../component/Header';
import Loading from '../component/Loading';
import Error from '../component/Error';

const ProductDetail = ({ onSearch }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
          quantity,
        })
      );
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!product) return <Error error={{ message: 'Product not found' }} />;

  return (
    <>
      <Header onSearch={onSearch} />
      <main className="bg-white">
        <div className="container-wrapper py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Images */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.thumbnail || product.images?.[0]}
                  alt={product.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(0, 4).map((img, idx) => (
                    <div key={idx} className="bg-gray-100 rounded overflow-hidden cursor-pointer hover:opacity-75 transition">
                      <img
                        src={img}
                        alt={`Product ${idx + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < Math.round(product.rating || 0)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating?.toFixed(1) || 'N/A'} ({product.reviews?.length || 0} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.discountPercentage && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      ${((product.price) / (1 - product.discountPercentage / 100)).toFixed(2)}
                    </span>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      -{product.discountPercentage.toFixed(0)}%
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Colors</h3>
                <div className="flex gap-3">
                  {['#000000', '#FFFFFF', '#8B4513', '#4169E1'].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-900 transition"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
                <div className="flex gap-3">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-gray-300 rounded hover:border-gray-900 hover:bg-gray-50 transition font-medium text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stock */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Stock Available:</strong> {product.stock} items
                </p>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-900">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-l border-r border-gray-300 py-2 focus:outline-none font-medium"
                      min="1"
                      max={product.stock}
                    />
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`w-full py-3 rounded font-bold text-white transition ${
                    product.stock === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gray-900 hover:bg-black'
                  }`}
                >
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>

                {added && (
                  <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center font-medium">
                    ✓ Added to cart successfully!
                  </div>
                )}
              </div>

              {/* Additional Info */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Brand:</span>
                  <span className="font-semibold text-gray-900">{product.brand || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Category:</span>
                  <span className="font-semibold text-gray-900">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">SKU:</span>
                  <span className="font-semibold text-gray-900">{product.sku || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="border-t pt-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
              <div className="space-y-6">
                {product.reviews.slice(0, 5).map((review, idx) => (
                  <div key={idx} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-900">{review.reviewerName}</h4>
                        <p className="text-sm text-gray-600">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* You Might Also Like */}
          {product.images && (
            <div className="border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">YOU MIGHT ALSO LIKE</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {product.images.slice(0, 4).map((img, idx) => (
                  <div key={idx} className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
                    <img
                      src={img}
                      alt={`Related ${idx + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
