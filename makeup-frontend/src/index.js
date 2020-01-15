function submitProduct(){
  const name = document.getElementById("name").value
  const price = document.getElementById("price").value
  const data = {
    name: name,
    brand: brand,
    price: price,
    category: category
  }
}
//saving everything as an object.
  // next steps:
  // implement backend code for CREATE productsi
  function showProduct(){
  fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(myJson => console.log(myJson[0]))
}

  // fetch('http://localhost:3000/products', {
  //   method: 'POST', // or 'PUT'
  //   body: JSON.stringify(data),
  // })
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log('Success:', data);
  //   //append to the dom?
  //   console.log(@products)
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

  //when they click submit, they can see all the products







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
