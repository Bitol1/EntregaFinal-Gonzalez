import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { useAsync } from '../../hooks/useAsync';
import { createProductAdaptedFromFirestore } from '../../adapters/createProductAdaptedFromFirestore';

const ItemDetailContainer = () => {
    const { productId } = useParams();

    const getProductById = async () => {
        const productDocument = doc(db, 'products', productId);
        const queryDocumentSnapshot = await getDoc(productDocument);
        
        const productAdapted = createProductAdaptedFromFirestore(queryDocumentSnapshot);
        return productAdapted;
    };

    const { data: product, loading } = useAsync(getProductById, [productId]);

    return (
        <div className="container mt-4">
            <h1>Detalle del producto</h1>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    );
};

export default ItemDetailContainer;