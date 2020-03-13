let review = new Review("","","")
let product = new Product("","","","",review)


document.addEventListener("DOMContentLoaded", function(){
  product.getProducts()
  document.getElementById('product-form').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('edit-product-form').style.display = 'none';
  document.getElementById('edit-review-form').style.display = 'none';
  document.getElementById('review-form').style.display = 'none';
  let sorting = document.getElementById('sortButton')
  sorting.addEventListener('click', function(){
    fetch("http://localhost:3000/products")
    .then(resp => resp.json())
    .then( products => {
      products.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
      console.log(products)
      let productsbox = document.getElementById('products-container')
      productsbox.innerHTML = ""
      products.map(product => {
        let newProduct = new Product("","","","",review)
        newProduct.addProduct(product)
      })
    })
  })
})




function showAbout(){
  document.getElementById('about').style.display = 'block';
  document.getElementById('products-container').style.display = 'none';
  document.getElementById('product-form').style.display = 'none';
  document.getElementById('review-form').style.display = 'none';
  document.getElementById('reviews-container').style.display = 'none';
  document.getElementById('edit-product-form').style.display = 'none';
  document.getElementById('edit-review-form').style.display = 'none';
  document.getElementById('review-product-container').style.display = 'none';

}


function showProductForm(){
  document.getElementById('product-form').style.display = 'block';
  document.getElementById('about').style.display = 'none';
  document.getElementById('products-container').style.display = 'none';
  document.getElementById('review-form').style.display = 'none';
  document.getElementById('reviews-container').style.display = 'none';
  document.getElementById('edit-product-form').style.display = 'none';
  document.getElementById('edit-review-form').style.display = 'none';
  document.getElementById('review-product-container').style.display = 'none';


}



function showAllProducts(){
  document.getElementById('products-container').innerHTML =
  `<h2> All Products </h2>`
  product.getProducts()

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
