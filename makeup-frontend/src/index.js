function submitProduct(){
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
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success'), currentProduct(data)
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  function currentProduct(data){
    const products = document.querySelector('#products-container');
    const productName = document.createElement('li')
    const productBrand = document.createElement('li')
    const productPrice = document.createElement('li')
    const productCategory = document.createElement('li')
    //list item - name, product, category, price
        productName.innerHTML = data.name
        productBrand.innerHTML = data.brand
        productPrice.innerHTML = data.price
        productCategory.innerHTML = data.category
  products.append(productName,productBrand,productPrice,productCategory)
  }
}

function showForm(){
  if(a==1)
       document.getElementById("asd").style.display="none";
   else
       document.getElementById("asd").style.display="block";

}


//doing all products pagewhen they click a button.

//showing the Products. append to the DOM
// fetch('http://localhost:3000/products')
// .then(resp => resp.json())
// .then(data => showAllProducts(data));



  // fetch('http://localhost:3000/products', {
  //   method: 'POST', // or 'PUT'
  //   body: JSON.stringify(data),
  // })
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log('Success:', data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // })
