const productList = ()=>{
    return fetch("http://localhost:3000/products")
        .then((res)=>res.json())
        .catch((err)=> console.assert.log(err));
};


// CREATE PRODUCTS
const createProducts = (name, price, image)=>{
    return fetch("http://localhost:3000/products", {
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
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
    }).catch((err) => console.log(err));
}; 


// EXPORT FUNCTIONS
export const servicesProducts = {
    productList, 
    createProducts,
    deleteProducto,
}