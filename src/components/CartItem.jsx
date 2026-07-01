const CartItem = ({ item }) => {
    const { name, category, description, price, defaultPrice } = item || {};
    const displayPrice = (price || defaultPrice || 0) / 100;

    return (
        <div className="cart-item-row">
            <div className="cart-item-info">
                <h3>{name}</h3>
                <p className="cart-item-category">{category}</p>
                <p className="cart-item-description">{description}</p>
            </div>
            <div className="cart-item-price">₹{displayPrice.toFixed(2)}</div>
        </div>
    );
};

export default CartItem;