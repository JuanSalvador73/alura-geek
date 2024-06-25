import { servicesProducts } from "../services/product.service.js";

const productContainer = document.querySelector("[data-product]");

const form = document.querySelector("[data-form]");

// FUNCTION CREATE CARD
function createCard (name, price, image, id){
    const card = document.createElement("card");
    card.classList.add("card")

    card.innerHTML = `
                    <div class="img-container">
                            <img src="${image}" alt="${name}">
                    </div>

                    <div class="card-container--info">
                        <p>${name}</p>
                        <div class="card-container--value">
                            <p>${price}</p>
                            <button class="delete-button" data-id="${id}">
                                    <img src="./images/delete.png" alt="Eliminar">
                            </button>
                        </div>
                    </div>
    `

    // FUNCTION DELETE CARD
    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        servicesProducts.deleteProducto(id).then(() => {
            card.remove();
        }).catch((err) => console.log(err));
    }); 


    productContainer.appendChild(card);
    return card
}

const render = async ()=> {
    try{
        const listProducts = await servicesProducts.productList();
        console.log(listProducts);

        listProducts.forEach(producto => {
            productContainer.appendChild(
                createCard(
                    producto.name,
                    producto.price,
                    producto.image,
                    producto.id
                )
            )
        });


    }catch(error){
        console.log(error)
    }
};

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    console.log(name, price, image);

    servicesProducts
    .createProducts(name, price, image)
    .then((res)=> console.log(res))
    .catch((err) => console.log(err));

})

render();