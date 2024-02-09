import React from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/products";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = ({ message }) => {
    const { categoryId } = useParams();

    // Define la función asíncrona que obtiene los productos
    const asyncFunction = () => getProducts(categoryId);

    // Utiliza el hook useAsync para manejar la carga de datos
    const { data: products, loading } = useAsync(asyncFunction, [categoryId]);

    // Muestra un texto de "Cargando..." si los datos están aún cargando
    if (loading) {
        return (
            <div className="spinner-container">
                <span>Cargando...</span>
            </div>
        );
    }

    // Renderiza el componente ItemList con los productos una vez que están disponibles
    return (
        <div className="container mt-4">
            <h2>{message}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;