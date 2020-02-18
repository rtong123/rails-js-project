class Review{
  constructor(title,content,category){
    this.title = title
    this.content = content
    this.category = category
//should the product id be attached to each review.
  }
//when they click review. allow them to go to review form.
//show all reviews.
submitReview(){
  const title = document.getElementById("title").value
  const content = document.getElementById("content").value
  const category = document.getElementById("category").value
  // const product_id = document.getElementById("product-id").value
  const data1 = {
    title: title,
    content: content,
    category: category
  }
  //cuurently cant save the review.

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

  addReview(review){
    const reviews = document.getElementById("reviews-container")
    // [review]setAttribute("data-productid", review.id)
  }

  totalReview(product){
    console.log(product)
    //there arent any reviews for the product.......
}

}


//need to match product id --to review -- need ti place reviews
//need to append reviews to revewiew container
