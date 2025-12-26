import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from '../features/cart/cartSlice';

const Cart = ({ onSearch }) => {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const handleCheckout = () => {
    if (items.length === 0) return;
    alert('Thank you for your purchase! Order placed successfully.');
    dispatch(clearCart());
  };

  return (
    <>
      <Header onSearch={onSearch} />
      <main className="bg-white">
        {items.length === 0 ? (
          <div className="container-wrapper py-20">
            <div className="text-center">
              <svg
                className="mx-auto w-20 h-20 text-gray-400 mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Add some items to get started!</p>
              <Link to="/" className="inline-block bg-gray-900 text-white px-8 py-3 rounded font-semibold hover:bg-black transition">
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="container-wrapper py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-10">YOUR CART</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <h2 className="font-bold text-gray-800">
                    {totalQuantity} Item{totalQuantity !== 1 ? 's' : ''} in Cart
                  </h2>
                </div>

                <div className="divide-y">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 flex gap-6 border-b hover:bg-gray-50 transition items-center"
                    >
                      {/* Product Image */}
                      <Link
                        to={`/product/${item.id}`}
                        className="flex-shrink-0 w-28 h-28 bg-gray-100 rounded-lg overflow-hidden"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform"
                        />
                      </Link>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-lg font-semibold text-gray-900 hover:text-gray-700 block mb-2 line-clamp-2"
                        >
                          {item.title}
                        </Link>
                        <p className="text-gray-900 font-bold text-lg mb-4">
                          ${item.price.toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() => dispatch(decreaseQuantity(item.id))}
                              className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition font-bold"
                            >
                              −
                            </button>
                            <span className="px-4 py-1 text-center font-semibold min-w-12">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => dispatch(increaseQuantity(item.id))}
                              className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition font-bold"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="text-gray-600 hover:text-red-600 font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="text-right">
                        <p className="text-gray-600 text-sm mb-2">Subtotal</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ${item.totalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/" className="text-gray-600 hover:text-gray-900 mt-6 inline-block font-medium">
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 h-fit">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Discount</span>
                    <span className="font-semibold text-red-600">-${(totalAmount * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="font-semibold text-gray-900">$0</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-semibold text-gray-900">${(totalAmount * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t-2 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Total</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${(totalAmount - totalAmount * 0.1 + totalAmount * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-gray-900 text-white py-3 rounded font-bold hover:bg-black transition mb-3"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => dispatch(clearCart())}
                  className="w-full border-2 border-gray-300 text-gray-900 py-3 rounded font-bold hover:bg-gray-50 transition"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Cart;
