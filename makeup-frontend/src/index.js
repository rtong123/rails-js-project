function submitButton(){
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
