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
  console.log(data)
  // next steps:
  // implement backend code for CREATE products
//   fetch('http://localhost:3000/products')
//   .then(response => response.json())
//   .then(myJson => console.log(myJson))
// }

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
}
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
