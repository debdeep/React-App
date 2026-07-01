import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const totalItems = cartItems.reduce((sum, item) => sum + (item?.quantity || 1), 0);
    const totalAmount = cartItems.reduce((sum, item) => {
        const price = item?.price || item?.defaultPrice || 0;
        return sum + price * (item?.quantity || 1);
    }, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>

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