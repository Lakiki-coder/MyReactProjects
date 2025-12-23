   
// import redux helpers
import { useDispatch, useSelector } from 'react-redux';

// import cart actions
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from '../component/MyProduct';

// custom hook to hide redux logic
const useCart = () => {
  // get dispatch function
  const dispatch = useDispatch();

  // get cart items from redux state
  const items = useSelector((state) => state.cart.items);

  // add product to cart
  const add = (product) => {
    dispatch(addToCart(product));
  };

  // remove product by id
  const remove = (id) => {
    dispatch(removeFromCart(id));
  };

  // update quantity safely
  const update = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  // expose what components need
  return { items, add, remove, update };
};

// export hook
export default useCart;
