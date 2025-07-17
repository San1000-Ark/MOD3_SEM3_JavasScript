//get all products to the javascript doc
fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => console.log("available products", data))
  .catch((error) => console.error("Error finding the products...", error));

//create new dates to the serv collection
const newProduct = { id: 4, name: "screen", price: 200 };

fetch("http://localhost:3000/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newProduct),
})
  .then((response) => response.json())
  .then((data) => console.log("Product added", data))
  .catch((error) => console.error("Error to add the product...", error));

//update product and dates

const updateProduct = { name: "mouse", price: 30 };

fetch("http://localhost:3000/products/2", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updateProduct),
})
  .then((response) => response.json())
  .then((data) => console.log("Product updated...", data))
  .catch((error) => console.error("Error to updated the product...", error));

//delete the product

const productId = 4;
let deletedProduct = null;

// 1. get the product before that eliminate
fetch(`http://localhost:3000/products/${productId}`)
  .then((response) => {
    if (!response.ok) throw new Error("Product not found");
    return response.json();
  })
  .then((product) => {
    deletedProduct = product; // save the product
    // now eliminate
    return fetch(`http://localhost:3000/products/${productId}`, {
      method: "DELETE",
    });
  })
  .then(() => {
    console.log(" Product eliminated:", deletedProduct);
  })
  .catch((error) => {
    console.error(" Error eliminating the product:", error);
  });

/*fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => console.log("available products", data))
  .catch((error) => console.error("Error finding the products...", error));
*/

//validations and management of errors

function validations(product) {
  if (!product.name || typeof product.price !== "number") {
    console.error("Dates of the product not valid...");
    return false;
  }
  return true;
}
