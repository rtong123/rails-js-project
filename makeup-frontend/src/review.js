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
.then(resp => resp.json())
.then((reviews) => {

  reviews.map(review => {

    if (product.id === review.product_id){

        const reviews = document.getElementById("reviews-container")
        const unlisted = document.createElement('ul')
        const reviewTitle = document.createElement('li')
        const reviewContent = document.createElement('li')
        const reviewCategory = document.createElement('li')
        reviewTitle.innerHTML = "Title: " + review.title
        reviewContent.innerHTML = "Content: " + review.content
        reviewCategory.innerHTML = "Category" + review.category

        const editReviewBtn = document.createElement('BUTTON')
        editReviewBtn.innerHTML = "Edit review"
        editReviewBtn.onclick = this.review.editReview.bind(this,review)
        editReviewBtn.setAttribute("data-reviewid",review.id)
        document.getElementById('edit-review-form').style.display = 'none';


        //when they click edit review, allows them to see form.
        unlisted.append(reviewTitle,reviewContent,reviewCategory,editReviewBtn)
        reviews.append(unlisted)

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

.catch(error => {
  console.error('Error:', error);

})
}

editReview(review){
  // console.log(review)
  //able to get review object.
  document.getElementById('reviews-container').style.display = 'none';
  document.getElementById('edit-review-form').style.display = 'block';
}

submitEditReview(review){
  const newTitle = document.getElementById("title1").value
  const newReview = document.getElementById("price1").value
  const newCategory = document.getElementById("category1").value
  const reviewid = document.getElementById('review_id').value
  console.log(reviewid)// review id is blank.....
  //need to find review id to match up for the patch


  const newData1 = {
    title: newTitle,
    review: newReview,
    category: newCategory
  }
//
//  fetch(`http://localhost:3000/products/${productid}`, {
//     method: 'PATCH',
//      headers: {
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify(newData),
//      })
//    .then((response) => response.json())
//    .then((data) => {
//      console.log('Success'), console.log(newData), alert("Thanks for submitting your product!");
//      })
//      .catch((error) => {
//     console.error('Error:', error)
//     })
//   //do a fcorm for editing
//   //save this new value and be abke to push it into database.
// }

}


}
