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
    console.log('Success:', data);
    //append to the dom?
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  //showing the Products. append to the DOM
  fetch('http://localhost:3000/products')
  .then(resp => resp.json())
  .then(json => showAllProducts(json));

  function showAllProducts(json){
    console.log(json)
    //json is currently an array, need to do it by property.
    const products = document.querySelector('#products-container');
    const productName = document.createElement('li')
    const productBrand = document.createElement('li')
    const productPrice = document.createElement('li')
    const productCategory = document.createElement('li')
    //list item - name, product, category, price
    for(var i=0; i < json.length; i++){
        productName.innerHTML = json[i].name
    }
    products.append(productName)
  }
}








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
  // });
