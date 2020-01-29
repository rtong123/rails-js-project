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
//appends it and shows the list of products.
  const createReviewBtn = document.createElement('BUTTON')
  createReviewBtn.innerHTML = "Review"
  products.append(createReviewBtn)
  //add evenlistener when review is clicked.
  // BUTTON.addEventListener("click", function showReviewForm(){
  // })

  document.addEventListener("DOMContentLoaded", function(){
    this.getProducts()
    })
  //so when they refresh it wont disappear

document.getElementById('form').style.display = 'none';
  //hides the product form.
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
  //shows all products & adds it to eh list.
}

const product = new Product("","","","")


//clicking tabs so they would hide each thing

function showReviewForm(){
  console.log('hi')
}

//only want this to show in products home page.
function showAbout(){
  document.getElementById('about').style.display = 'block';

}


function showProductForm(){
  document.getElementById('form').style.display = 'block';
  document.getElementById('about').style.display = 'none';
  // document.getElementById('products-container').style.display = 'none';
}




function showHomePage(){
  document.getElementById('form').style.display = 'none';
  document.getElementById('about').style.display = 'none';
}

function showAllProducts(){
  document.getElementById('form').style.display = 'none';
    // document.getElementById('products-container').style.display = 'block';
}




class Review{

}
