import { useGetProductsQuery } from '../apis/ProductApi.jsx';
import ProductCard from '../component/ProductCard';

const Home = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;