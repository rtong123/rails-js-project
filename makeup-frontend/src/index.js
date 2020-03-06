let review = new Review("","","")
let product = new Product("","","","",review)


// document.getElementById('products-container').style.display = 'none';
//trying to show products container when pressing all products

document.addEventListener("DOMContentLoaded", function(){
  product.getProducts()
  document.getElementById('product-form').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('edit-product-form').style.display = 'none';
  document.getElementById('edit-review-form').style.display = 'none';


  // so when they refresh it wont disappear

})


 function showAbout(){
   document.getElementById('about').style.display = 'block';
   document.getElementById('products-container').style.display = 'none';
   document.getElementById('product-form').style.display = 'none';
   document.getElementById('review-form').style.display = 'none';
   document.getElementById('reviews-container').style.display = 'none';
   document.getElementById('edit-product-form').style.display = 'none';
   document.getElementById('edit-review-form').style.display = 'none';



 }


 function showProductForm(){
   document.getElementById('product-form').style.display = 'block';
   document.getElementById('about').style.display = 'none';
   document.getElementById('products-container').style.display = 'none';
   document.getElementById('review-form').style.display = 'none';
   document.getElementById('reviews-container').style.display = 'none';
   document.getElementById('edit-product-form').style.display = 'none';
   document.getElementById('edit-review-form').style.display = 'none';


 }


 function showAllProducts(){
   document.getElementById('edit-product-form').style.display = 'none';
   document.getElementById('products-container').style.display = 'block';
   document.getElementById('reviews-container').style.display = 'block';
   document.getElementById('product').style.display = 'none';
   document.getElementById('about').style.display = 'none';
   document.getElementById('product-form').style.display = 'none';
   document.getElementById('review-form').style.display = 'none';
   document.getElementById("review-product-container").innerHTML = "";
   document.getElementById('reviews-container').innerHTML = "";
   document.getElementById('edit-review-form').style.display = 'none';




 }
