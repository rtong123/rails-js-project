class Product {
  constructor(name,price,brand,category){
    this.name = name
    this.price = price
    this.brand = brand
    this.category = category
    //creating constructor for this object
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
    // saving it to the database.

    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success'), this.addProduct(data), alert("Thanks for submitting your product!");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  addProduct(product) {
    const products = document.querySelector('#products-container');
    // const productSection = document.createElement('div')
    // productSection.id = product.id
    const productName = document.createElement('li')
    const productBrand = document.createElement('li')
    const productPrice = document.createElement('li')
    const productCategory = document.createElement('li')
    //list item - name, product, category, price
        productName.innerHTML = "Name: " + product.name
        productBrand.innerHTML = "Brand: " + product.brand
        productPrice.innerHTML = "Price: $ " + product.price
        productCategory.innerHTML = "Category: " + product.category
  products.append(productName,productBrand,productPrice,productCategory)
  // products.append(productSection)
//appends it and shows the list of products.
  const createReviewBtn = document.createElement('BUTTON')
  createReviewBtn.innerHTML = "Review"
  createReviewBtn.setAttribute("data-productid", product.id)
  createReviewBtn.onclick = this.clickReview.bind(this, product)
  products.append(createReviewBtn)
  }

  clickReview(product){
    // go thrugh all products and compare with the product i want to review
      // if product doesnt match
        // hide it
        // show only that product id/ -div show the div containter
        document.getElementById('review-form').style.display = 'block';
        document.getElementById('product-form').style.display = 'none';
        document.getElementById('about').style.display = 'none';
        document.getElementById('products-container').style.display = 'none';
      const onlyProduct = document.querySelector("#product")
      const productName1 = document.createElement('li')
      const productBrand1= document.createElement('li')
      const productPrice1 = document.createElement('li')
      const productCategory1 = document.createElement('li')
      productName1.innerHTML = "Name: " + product.name
      productBrand1.innerHTML = "Brand: " + product.brand
      productPrice1.innerHTML = "Price: $ " + product.price
      productCategory1.innerHTML = "Category: " + product.category
      onlyProduct.append(productName1,productBrand1,productPrice1,productCategory1)

  }

  getProducts(){
    fetch("http://localhost:3000/products")
    .then(resp => resp.json())
    .then((products) => {
      console.log('Success'),
      showAllProducts(),
      products.map(product => this.addProduct(product))
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
  //shows all products & adds it to eh list.
}

const product = new Product("","","","")
document.addEventListener("DOMContentLoaded", function(){
  product.getProducts()
  //so when they refresh it wont disappear
  //hides the product form.
  document.getElementById('product-form').style.display = 'none';
  document.getElementById('about').style.display = 'none';

})

//clicking tabs so they would hide each thing



class Review{
  constructor(title,comment){
    this.title = title,
    this.comment = comment
  }
//when they click review. allow them to go to review form.
//show all reviews.
submitReview(){
  const title = document.getElementById("title").value
  const comment = document.getElementById("comment").value
  const data1 = {
    title: title,
    comment: comment
  }

  fetch('http://localhost:3000/reviews', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data1),
    })
  .then((response) => response.json())
  .then((data1) => {
    console.log('Success'), alert("Thanks for submitting your review!")
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }


}
const review = new Review("","","","")
//need to match product id --to review -- need ti place reviews
-//need to append reviews to revewiew container 


function showReviewForm(){
  //if the review id equals to data id -hide everything else
}

//only want this to show in products home page.
function showAbout(){
  document.getElementById('about').style.display = 'block';
  document.getElementById('products-container').style.display = 'none';
  document.getElementById('product-form').style.display = 'none';
}


function showProductForm(){
  document.getElementById('product-form').style.display = 'block';
  document.getElementById('about').style.display = 'none';
  document.getElementById('products-container').style.display = 'none';
}




function showHomePage(){
  document.getElementById('product-form').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('products-container').style.display = 'none';
  document.getElementById('product').style.display = 'none';
}

function showAllProducts(){
  product.getProducts;
  document.getElementById('products-container').style.display = 'block';
  document.getElementById('product').style.display = 'block';
  document.getElementById('about').style.display = 'none;'
  document.getElementById('product-form').style.display = 'none';
}
