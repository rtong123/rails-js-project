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
    console.log(review)
    const reviews = document.getElementById("reviews-container")
    const reviewTitle = document.createElement('li')
    const reviewContent = document.createElement('li')
    const reviewCategory = document.createElement('li')
    //maybe if statement?
    reviewTitle.innerHTML = "Title: " + review.title
    reviewContent.innerHTML = "Content: " + review.content
    reviewCategory.innerHTML = "Category" + review.category
reviews.append(reviewTitle,reviewContent,reviewCategory)

  }

  totalReview(product){
    console.log(product)
    //need to find reviews for this product
  }

}
