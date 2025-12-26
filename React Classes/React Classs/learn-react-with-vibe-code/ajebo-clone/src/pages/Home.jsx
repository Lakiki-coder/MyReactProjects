import { useState } from 'react';
import { useGetAllProductsQuery, useSearchProductsQuery } from '../features/api/productsApi';
import Header from '../component/Header';
import ProductCard from '../component/ProductCardNew';
import Loading from '../component/Loading';
import Error from '../component/Error';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const { data: products = [], isLoading: isLoadingProducts, error: productsError } = useGetAllProductsQuery(30);
  const { data: searchResults = [], isLoading: isLoadingSearch, error: searchError } = useSearchProductsQuery(searchTerm, {
    skip: !searchTerm,
  });

  const displayProducts = showSearch ? searchResults : products;
  const isLoading = showSearch ? isLoadingSearch : isLoadingProducts;
  const error = showSearch ? searchError : productsError;

  const handleSearch = (term) => {
    setSearchTerm(term);
    setShowSearch(true);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowSearch(false);
  };

  if (error) return <Error error={error} />;

  // Style categories for browsing
  const styleCategories = [
    { name: 'Casual', icon: '👕' },
    { name: 'Formal', icon: '🎩' },
    { name: 'Party', icon: '🎉' },
    { name: 'Gym', icon: '💪' }
  ];

  // Testimonials
  const testimonials = [
    { name: 'Sarah D.', rating: 5, text: 'Amazing quality and fast delivery!' },
    { name: 'Mike J.', rating: 5, text: 'Perfect fit and great prices!' },
    { name: 'Emma K.', rating: 5, text: 'Love the variety and customer service!' }
  ];

  return (
    <>
      <Header onSearch={handleSearch} />
      <main className="bg-white">
        
        {!showSearch && (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
              <div className="container-wrapper">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                  </h1>
                  <p className="text-gray-300 mb-8 text-lg">
                    Browse through our exclusive collection of clothing items curated just for you.
                  </p>
                  <button 
                    onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-gray-900 px-8 py-3 font-bold rounded hover:bg-gray-100 transition"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </section>

            {/* Brand Showcase */}
            <section className="py-12 bg-gray-50 border-y border-gray-200">
              <div className="container-wrapper">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                  {['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'].map((brand) => (
                    <div key={brand} className="text-gray-600 font-bold text-sm md:text-base hover:text-gray-900 transition cursor-pointer">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* New Arrivals */}
            <section className="container-wrapper py-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">NEW ARRIVALS</h2>
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  View All <span>→</span>
                </a>
              </div>
              {isLoading ? (
                <Loading />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {displayProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </section>

            {/* Top Selling */}
            <section className="container-wrapper py-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">TOP SELLING</h2>
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  View All <span>→</span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayProducts.slice(4, 8).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* Browse by Style */}
            <section className="container-wrapper py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">BROWSE BY DRESS STYLE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {styleCategories.map((category) => (
                  <div 
                    key={category.name}
                    className="bg-gray-100 rounded-lg p-8 text-center hover:bg-gray-200 transition cursor-pointer group"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-50 py-16 border-t border-gray-200">
              <div className="container-wrapper">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">WHAT OUR CUSTOMERS SAY</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">{testimonial.text}</p>
                      <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Products Grid */}
        <section className="container-wrapper py-16" id="products">
          {showSearch && (
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Search results for "{searchTerm}"
              </h2>
              <button
                onClick={clearSearch}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Clear Search
              </button>
            </div>
          )}

          {isLoading ? (
            <Loading />
          ) : displayProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
