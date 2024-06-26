const productList = ()=>{
    return fetch("https://my-json-server.typicode.com/JuanSalvador73/alura-geek-api/products")
        .then((res)=>res.json())
        .catch((err)=> console.assert.log(err));
};


// CREATE PRODUCTS
const createProducts = (name, price, image)=>{
    return fetch("https://my-json-server.typicode.com/JuanSalvador73/alura-geek-api/products", {
        method: "POST",
        headers: {
            "Content-Type": "applications/json",
        },
        body: JSON.stringify({
            name,
            price,
            image
        })
    }).then((res) => res.json()).catch((err) => console.log(err))
}

// DELETE PRODUCTS
const deleteProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/JuanSalvador73/alura-geek-api/products/${id}`, {
        method: "DELETE",
    }).catch((err) => console.log(err));
}; 


// EXPORT FUNCTIONS
export const servicesProducts = {
    productList, 
    createProducts,
    deleteProducto,
}

/*

1 linea:
http://localhost:3000/products

2 linea:
http://localhost:3000/products

3 linea:
http://localhost:3000/products/

*/