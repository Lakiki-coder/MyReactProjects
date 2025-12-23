// we import useDispatch from react-redux to dispatch actions to the Redux store
// dispatch means to send an action to the Redux store to update the state
import {useDispatch} from 'react-redux';

// we import the addToCart action from the cart slice
import {addToCart} from './MyProduct';

// we import Link from react-router-dom to navigate to the product details page
import {Link} from 'react-router-dom';

// we define the ProductCard component that takes a product as a prop
const ProductCard = ({product}) => {

    // we create a dispatch function to dispatch actions to the Redux store
    const dispatch = useDispatch();

    return (

  
        // we create a card to display the product details
        //card is a bordered box with some padding and shadow
        <div className="border p-4 rounded shadow">

            {/* // thumbnail is the image of the product */}
            <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover" />

            <h3 className="font-bold mt-2">{product.title} </h3>
            <p className="text-gray-600">${product.price}</p>

            <div className="flex justify-between mt-2">
                <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
                    View Details
                </Link>
                <button
                    // when the button is clicked, we dispatch the addToCart action with the product as a payload
                    //payload is the data that we send to the Redux store to update the state
                    onClick={() => dispatch(addToCart(product))}

                    //  className="bg-black text-white px-3 py-1"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
// we export the ProductCard component as the default export
export default ProductCard;