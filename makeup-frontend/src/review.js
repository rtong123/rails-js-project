class Review{
  constructor(title,content,category){
    this.title = title
    this.content = content
    this.category = category
  }
//when they click review. allow them to go to review form.
//show all reviews.
submitReview(product){


  const title = document.getElementById("title").value
  const content = document.getElementById("content").value
  const category = document.getElementById("category").value
  const productid = document.getElementById('product_id').value
  // need to submit a review with a product id!
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
