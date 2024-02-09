import React from "react";
import { useCart } from "../../context/CartContext";


const CartWidget = ({ onClick }) => {
    const { totalQuantity } = useCart();

    return (
        <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={onClick}>
                <div className="d-flex align-items-center">
                    <i className="bi bi-cart-fill me-2"></i>
                    <span>Carrito</span>
                        <span className="badge bg-danger ms-2">
                            {totalQuantity}
                        </span>
                    
                </div>
            </button>
        </li>
    );
};

export default CartWidget;