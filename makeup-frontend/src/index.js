
class Product {
  constructor(name,price,brand,category){
    this.name = name
    this.price = price
    this.brand = brand
    this.category = category
  }

 submitProduct(){
    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const brand = document.getElementById("brand").value
    const category = document.getElementById("category").value
    // saving everything as an object.
    const data = {
      name: name,
      brand: brand,
      price: price,
      category: category
    }
    // implement backend code for CREATE products

    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success'), this.addProduct(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  addProduct(product){
    const products = document.querySelector('#products-container');
    const productName = document.createElement('li')
    const productBrand = document.createElement('li')
    const productPrice = document.createElement('li')
    const productCategory = document.createElement('li')
    //list item - name, product, category, price
        productName.innerHTML = "Name:" + product.name
        productBrand.innerHTML = "Brand:" + product.brand
        productPrice.innerHTML = "Product:" + product.price
        productCategory.innerHTML = "Category:" + product.category
  products.append(productName,productBrand,productPrice,productCategory)
  }


  getProducts(){
    fetch("http://localhost:3000/products")
    .then(resp => resp.json())
    .then((products) => {
      console.log('Success');
      products.map(product => this.addProduct(product))
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }

}

const product = new Product("","","","")



document.addEventListener("DOMContentLoaded", function(){
  product.getProducts()
})
//only want this to show in products home page.


function showProductForm(){
  document.getElementById('form').style.display = 'block';
}


function showHomePage(){
  document.getElementById('form').style.display = 'none';
}


// class Review{
//   showReviewForm(){
//     document.getElementById('form').style.display = 'block';
//   }
//
//
//   showHomePage(){
//     document.getElementById('form').style.display = 'none';
//   }
// }




//doing all products pagewhen they click a button.
