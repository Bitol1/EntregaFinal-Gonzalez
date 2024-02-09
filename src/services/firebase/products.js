import { createProductAdaptedFromFirestore } from "../../adapters/createProductAdaptedFromFirestore";
import { db } from "./firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";


export const getProducts = (categoryId) => {

    const productsCollection = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    return getDocs(productsCollection)
    .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => {
        return createProductAdaptedFromFirestore(doc)
    })
        return productsAdapted
    })
    
}
