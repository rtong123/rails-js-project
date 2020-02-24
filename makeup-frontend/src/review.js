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
    console.log('Success'), this.addReview(data1), alert("Thanks for submitting your review!")
    console.log(data1)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }

  addReview(review){
    // need id to match to add review in each database

  }

  totalReview(product){
//     const productid = document.getElementById('product_id').value
//     console.log(productid)
//      if (review.product_id === productid){
//     const reviews = document.getElementById("reviews-container")
//     const reviewTitle = document.createElement('li')
//     const reviewContent = document.createElement('li')
//     const reviewCategory = document.createElement('li')
//     reviewTitle.innerHTML = "Title: " + review.title
//     reviewContent.innerHTML = "Content: " + review.content
//     reviewCategory.innerHTML = "Category" + review.category
// reviews.append(reviewTitle,reviewContent,reviewCategory)
//     }


fetch("http://localhost:3000/reviews")
.then(function(response) {
  return response.json();
})
.then(function(json){
  json.map(review =>{
    if (product.id === review.product_id){
        const reviews = document.getElementById("reviews-container")
        const reviewTitle = document.createElement('li')
        const reviewContent = document.createElement('li')
        const reviewCategory = document.createElement('li')
        reviewTitle.innerHTML = "Title: " + review.title
        reviewContent.innerHTML = "Content: " + review.content
        reviewCategory.innerHTML = "Category" + review.category
        reviews.append(reviewTitle,reviewContent,reviewCategory)
    }
  }) //why are the reviews not being appended on to the dom
})
}


}
