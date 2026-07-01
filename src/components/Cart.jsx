import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const totalItems = cartItems?.reduce((sum, item) => sum + (item?.quantity || 1), 0);

    const totalAmount = cartItems?.reduce((sum, item) => {
        const price = item?.price || item?.defaultPrice || 0;
        return sum + price * (item?.quantity || 1);
    }, 0);

    const clearCartItems = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <button className="clear-cart" onClick={clearCartItems}>Clear Cart</button>
            {cartItems?.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-list">
                        {cartItems?.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="cart-summary">
                        <span>Total Items: {totalItems}</span>
                        <span>Total: ₹{(totalAmount / 100).toFixed(2)}</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;