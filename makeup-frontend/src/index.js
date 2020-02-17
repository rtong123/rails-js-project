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
