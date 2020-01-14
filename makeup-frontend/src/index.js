function submitProduct(){
  const name = document.getElementById("name").value
  const price = document.getElementById("price").value
  const data = {
    name: name,
    brand: brand,
    price: price,
    category: category
  }

  //next steps:
  // implement backend code for CREATE products
  fetch('http://localhost:3000/products', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
