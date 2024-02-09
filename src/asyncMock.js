const products = [
    {
        id: '1',
        name: 'Kali Uchis - Orquídeas',
        price: 33000,
        category: 'Importados',
        img: 'https://m.media-amazon.com/images/I/71AKm6BtyrL._AC_UY327_FMwebp_QL65_.jpg',
        stock: 50,
        description: 'Último lanzamiento de Kali Uchis, importado de Estados Unidos'
    },
    
    {id: '2', 
    name: 'Lali - Lali Deluxe', 
    price: 35000, 
    category: 'Nacionales', 
    img:'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ef/f1/87/eff187cf-da2c-7235-a629-fa9591a24fd5/196871681094.jpg/600x600bf-60.jpg',
    stock: 20,
    description: 'Edición deluxe, incluye Disciplina y Diva'
    },

    {id: '3', 
    name: 'Púa - Ortofon', 
    price: 106209, 
    category: 'Accesorios', 
    img: 'https://f.fcdn.app/imgs/174c6f/www.palaciodelamusica.com.uy/pmusuy/cc2f/original/catalogo/5705796013887-5705796013887_1/2000-2000/pack-pastilla-y-pua-ortofon-introduct-pack-pastilla-y-pua-ortofon-introduct.jpg',
    stock: 0,
    description: 'Púa Ortofon, incluye pastilla'
    },
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
    }

    export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.filter(prod => prod.category === categoryId))
            }, 1000)
        })
    }

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}