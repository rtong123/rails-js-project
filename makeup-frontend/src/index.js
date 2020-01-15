function submitProduct(){
  const name = document.getElementById("name").value
  const price = document.getElementById("price").value
  const data = {
    name: name,
    brand: brand,
    price: price,
    category: category
  }
//saving everything as an object.
  // next steps:
  // implement backend code for CREATE products
  // fetch('http://localhost:3000/products')
  // .then(response => response.json())
  // .then(myJson => myJson)


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

  //when they click submit, they can see all the products
  document.getElementById("button").attachEvent(function() { /* do stuff here*/
  console.log('hi')
  });
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
