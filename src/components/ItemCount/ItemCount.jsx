import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount(count < stock ? count + 1: count)
    }

    const decrement = () => {
        setCount(count > initial ? count - 1: count)
    }

    const handleAddToCart = () => {
      onAdd(count); // Llama a la función onAdd con el valor actual del contador
      setCount(initial); // Restablece el contador al valor inicial después de agregar al carrito
    };

    return (
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <p>Stock: {stock}</p>
              <p>Elegida: {count}</p>
            </div>
            <div className="col-md-8">
              <div className="btn-group" role="group" aria-label="Contador">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={decrement}
                  disabled={count === 1}
                >
                  -
                </button>
                <button type="button" className="btn btn-light" disabled>
                  {count}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={increment}
                  disabled={count === stock}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button 
                className="btn btn-primary mt-2" 
                onClick={handleAddToCart}
                disabled={stock < count}
            >
                {stock < count ? 'Agregar al carrito' : 'Agregar al Carrito'}
            </button>
        </div>
      );
    };

    export default ItemCount;

