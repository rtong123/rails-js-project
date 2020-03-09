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
    const data = {
      name: name,
      brand: brand,
      price: price,
      category: category
    }

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
    const productName = document.createElement('li')
    const productBrand = document.createElement('li')
    const productPrice = document.createElement('li')
    const productCategory = document.createElement('li')
        productName.innerHTML = "Product Name: " + product.name
        productBrand.innerHTML = "Brand: " + product.brand
        productPrice.innerHTML = "Price: $ " + product.price
        productCategory.innerHTML = "Category: " + product.category
  products.append(productName,productBrand,productPrice,productCategory)

//appends it and shows the list of products.
  const createEditProductBtn = document.createElement('BUTTON')
  const createReviewBtn = document.createElement('BUTTON')
  const allReviewsBtn = document.createElement('BUTTON')
  allReviewsBtn.innerHTML = "All Reviews"
  createReviewBtn.innerHTML = "Create Review"
  createEditProductBtn.innerHTML = "Edit Product"
  createReviewBtn.setAttribute("data-productid", product.id)
  allReviewsBtn.setAttribute("data-productid", product.id)
  createEditProductBtn.setAttribute("data-productid",product.id)
  createReviewBtn.onclick = this.clickReview.bind(this, product)
  allReviewsBtn.onclick = this.review.totalReview.bind(this,product)
  createEditProductBtn.onclick = this.showEditProducts.bind(this,product)
  products.append(createReviewBtn,allReviewsBtn,createEditProductBtn)

  }

  clickReview(product){
        document.getElementById('review-form').style.display = 'block';
        document.getElementById('product-form').style.display = 'none';
        document.getElementById('about').style.display = 'none';
        document.getElementById('reviews-container').style.display = 'none';
        document.getElementById('products-container').style.display = 'none';
        //hide thes other products.
      
        const singleProduct = document.getElementById('review-product-container')
        const productNameReview = document.createElement('p')
        productNameReview.innerHTML = "Product Name: " + product.name
        singleProduct.append(productNameReview)

  }

productBox(product){
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
      products.map(product => this.addProduct(product))
      document.getElementById('products-container').style.display = 'none';
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }

   showEditProducts(product){
     const productid = document.getElementById('product_id')
     productid.value = product.id
     //assigning the value here
    //problem is it keeps appending. each makeup object.
    // console.log(product)
    const editProduct = document.getElementById("review-product-container")
    const editProductName = document.createElement('li')
    editProductName.innerHTML = "Name: " + product.name
    editProduct.append(editProductName)
      document.getElementById('product').style.display = 'block';
     document.getElementById('edit-product-form').style.display = 'block';
     document.getElementById('products-container').style.display = 'none';

}



   submitEditProducts(product){
     //need to find id of product. in order to attach to PATCH
     const newName = document.getElementById("name1").value
     const newPrice = document.getElementById("price1").value
     const newBrand = document.getElementById("brand1").value
     const newCategory = document.getElementById("category1").value
     const productid = document.getElementById('product_id').value
     console.log(productid)
     //able to gt value now

     const newData = {
       name: newName,
       brand: newBrand,
       price: newPrice,
       category: newCategory
     }

    fetch(`http://localhost:3000/products/${productid}`, {
       method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newData),
        })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success'), console.log(newData), alert("Thanks for submitting your product!");

        })
        .catch((error) => {
       console.error('Error:', error)
       })
     //do a fcorm for editing
     //save this new value and be abke to push it into database.
   }


}
