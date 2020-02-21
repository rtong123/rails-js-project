let review = new Review("","","")
let product = new Product("","","","",review)


document.addEventListener("DOMContentLoaded", function(){
  product.getProducts()
  //so when they refresh it wont disappear
  document.getElementById('product-form').style.display = 'none';
  document.getElementById('about').style.display = 'none';

})


function showAbout(){
  document.getElementById('about').style.display = 'block';
  document.getElementById('products-container').style.display = 'none';
  document.getElementById('product-form').style.display = 'none';
  document.getElementById('review-form').style.display = 'none';
}


function showProductForm(){
  document.getElementById('product-form').style.display = 'block';
  document.getElementById('about').style.display = 'none';
  document.getElementById('products-container').style.display = 'none';
  document.getElementById('review-form').style.display = 'none';

}


function showAllProducts(){
  document.getElementById('products-container').style.display = 'block';
  document.getElementById('product').style.display = 'block';
  document.getElementById('about').style.display = 'none;'
  document.getElementById('product-form').style.display = 'none';
  document.getElementById('review-form').style.display = 'none';

}
