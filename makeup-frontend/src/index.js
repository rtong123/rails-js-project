class Product {
  constructor(name,price,brand,category,review){
    this.name = name
    this.price = price
    this.brand = brand
    this.category = category
    this.review = review
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
  const allReviewsBtn = document.createElement('BUTTON')
  allReviewsBtn.innerHTML = "Reviews"
  createReviewBtn.innerHTML = "Review"
  createReviewBtn.setAttribute("data-productid", product.id)
  createReviewBtn.onclick = this.clickReview.bind(this, product)
  allReviewsBtn.onclick = this.review.totalReview.bind(this,product)
  //review bind.
  // why isnt this button working and cant be clicked.
  //maybe i should move the buttons to a product container.
  products.append(createReviewBtn)
  products.append(allReviewsBtn)
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
        const productid = document.getElementById('product_id')
        productid.value = product.id
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
//clicking tabs so they would hide each thing



class Review{
  constructor(title,content,category){
    this.title = title
    this.content = content
    this.category = category
  }
//when they click review. allow them to go to review form.
//show all reviews.
submitReview(){
  const title = document.getElementById("title").value
  const content = document.getElementById("content").value
  const category = document.getElementById("category").value
  // const product_id = document.getElementById("product-id").value
  const data1 = {
    title: title,
    content: content,
    category: category,
    product_id: product.id
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
    console.log(data1)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }

  addReview(review){
    const reviews = document.getElementById("reviews-container")
    // [review]setAttribute("data-productid", review.id)
  }

  totalReview(product){
    console.log(product)
}

}


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


function showAllProducts(){
  product.getProducts;
  document.getElementById('products-container').style.display = 'block';
  document.getElementById('product').style.display = 'block';
  document.getElementById('about').style.display = 'none;'
  document.getElementById('product-form').style.display = 'none';
}


const review = new Review("","","")
const product = new Product("","","","",review)
//allows me to call functions inside review
document.addEventListener("DOMContentLoaded", function(){
  product.getProducts()
  //so when they refresh it wont disappear
  //hides the product form.
  document.getElementById('product-form').style.display = 'none';
  document.getElementById('about').style.display = 'none';

})
