import { createContext, useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    

    const addItem = (itemToAdd) => {
        const isInCart = cart.findIndex(prod => prod.id === itemToAdd.id);
        if (isInCart === -1) {setCart(prev => [...prev, itemToAdd])}
        else {
            cart[isInCart].quantity += itemToAdd.quantity 
            setCart([...cart])
        }       
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        return (
            cart.reduce((accum, prod) => 
            accum + prod.quantity * prod.price, 0)
        )
    }
    

    const total = getTotal()

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}