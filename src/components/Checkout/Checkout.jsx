import OrderForm from "../OrderForm/OrderForm";
import { useCart } from "../../context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const {cart, total, clearCart} = useCart()

    const createOrder = async (userData) =>{
        const objOrder = {
            buyer: userData,
            items: cart,
            total
        }
    
    const batch = writeBatch(db)
    const outOfStock = []

    const ids = cart.map(prod => prod.id)
    const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

    // getDocs(productsCollection).then(querySnapshot => {})
    const querySnapshot = await getDocs(productsCollection)
    const {docs} = querySnapshot

    docs.forEach(doc => {
        const fields = doc.data()
        const stockDb = fields.stock

        const productsAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productsAddedToCart.quantity

        if(stockDb >= prodQuantity) {
            batch.update(doc.ref, {stock : stockDb - prodQuantity})
        } else {
            outOfStock.push({id: doc.id, ...fields})
        }
    })

        if (outOfStock.length === 0){
            batch.commit()

            const orderCollection = collection(db, 'orders')

            const {id}  = await addDoc(orderCollection, objOrder)
            setOrderId(id);
            clearCart();
        } else {
            <h1>No hay productos en stock</h1>
        }
    }  

    return (
        <div className="text-center">
            {orderId ? (
                <>
                    <h1>El ID de la compra es {orderId}</h1>
                    <Link to='/'>
                        <button className="btn btn-primary mt-2">Ir a la página de inicio</button>
                    </Link>
                </>
            ) : (
                <>
                    <h1>Checkout</h1>
                    <OrderForm onSubmit={createOrder}/>
                </>
            )}
        </div>   
    );
}
export default Checkout;