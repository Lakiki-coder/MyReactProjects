import {
  useGetProductsQuery,
  useGetProductByIdQuery,
} from "../apis/ProductApi";
export const useProducts = () => {
  const query = useGetProductsQuery();
  return query;
};

export const useProduct = (id) => {
  return useGetProductByIdQuery(id);
};
