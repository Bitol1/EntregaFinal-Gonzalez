import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Button, Card } from 'react-bootstrap';

const CartView = () => {
    const { cart, total, totalQuantity, removeItem, clearCart } = useCart();

    return (
        <>
            <h1 className="mb-4">Tus vinilos</h1>
            <section>
            {cart.map(prod => (
                <Card key={prod.id} className="mb-4">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={prod.img} alt={prod.name} style={{ maxWidth: '100px', marginRight: '10px' }} />
                            <div>
                                <h3>{prod.name}</h3>
                                <h5>Cantidad: {prod.quantity}</h5>
                                <h5>Precio por unidad: ${prod.price}</h5>
                                <h5>Subtotal: ${prod.quantity * prod.price}</h5>
                            </div>
                        </div>
                        <Button variant="danger" onClick={() => removeItem(prod.id)}>Remover</Button>
                    </Card.Body>
                </Card>
            ))}
            </section>
            <section>
                <h1>Total de Ítems: {totalQuantity}</h1>
            </section>
            <section>
                <h1>Total: ${total}</h1>
            </section>
            <section>
                <Button variant="danger" onClick={clearCart}>Vaciar Carrito</Button>
                <Link to='/checkout' className="btn btn-primary ml-3">Checkout</Link>
            </section>
        </>
    );
};

export default CartView;