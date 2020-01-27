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
    // next steps:
    // implement backend code for CREATE products

    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    })
    .then((response) => response.json())
    .then((product) => {
      console.log('Success'), currentProduct(product)
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

  showProductForm(){
    document.getElementById('form').style.display = 'block';
  }


  showHomePage(){
    document.getElementById('form').style.display = 'none';
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
//glonal variable so that the functions can use this in the method

document.addEventListener("DOMContentLoaded", function(){
product.getProducts()
})



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

// set route to be products
// show form

// when click home button
// set route to Home
// hide Form
// show something else


//doing all products pagewhen they click a button.
