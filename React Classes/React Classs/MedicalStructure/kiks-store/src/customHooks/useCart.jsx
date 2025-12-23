import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from '../component/cart/cartSlice';

const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const add = (product) => dispatch(addToCart(product));
  const remove = (id) => dispatch(removeFromCart(id));
  const update = (id, quantity) =>
    dispatch(updateQuantity({ id, quantity }));

  return { items, add, remove, update };
};

export default useCart;
