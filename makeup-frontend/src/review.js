class Review{
  constructor(title,content,category){
    this.title = title
    this.content = content
    this.category = category
  }

submitReview(product){
  const title = document.getElementById("title").value
  const content = document.getElementById("content").value
  const category = document.getElementById("category").value
  const productid = document.getElementById('product_id').value

  const data1 = {
    title: title,
    content: content,
    category: category,
    product_id: productid
  }


  fetch('http://localhost:3000/reviews', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data1),
    })
  .then((response) => response.json())
  .then((data1) => {
    console.log('Success'), alert("Thanks for submitting your review!")
    console.log(data1)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }


totalReview(product){
fetch("http://localhost:3000/reviews")
.then(function(response) {
  return response.json();
})
.then(function(json){
  json.map(review => {
    if (product.id === review.product_id){
        const reviews = document.getElementById("reviews-container")
        const unlisted = document.createElement('ul')
        const reviewTitle = document.createElement('li')
        const reviewContent = document.createElement('li')
        const reviewCategory = document.createElement('li')
        reviewTitle.innerHTML = "Title: " + review.title
        reviewContent.innerHTML = "Content: " + review.content
        reviewCategory.innerHTML = "Category" + review.category

        unlisted.append(reviewTitle,reviewContent,reviewCategory)
        reviews.append(unlisted)
        // spo when they click reviews, show the.....review and clear everything elsE?
        // show what produc tthey clicked and fetch request for that.
    }

  })
  const reviewProduct = document.getElementById("review-product-container")
  const reviewProductName = document.createElement('li')
  reviewProductName.innerHTML = "Name: " + product.name
  reviewProduct.append(reviewProductName)
  document.getElementById('products-container').style.display = 'none';
  document.getElementById('product').style.display = 'none';//shows only the reviews
  //need to SHOW ONLY THAT PRODUCT THEN ERASE THE OTHERS
})
}


}
