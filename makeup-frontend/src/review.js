class Review{
  constructor(title,content,rating){
    this.title = title
    this.content = content
    this.rating = rating
  }

  submitReview(product){
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value
    const rating = document.getElementById("rating").value
    const productid = document.getElementById('product_id').value
    console.log(productid)
    const data1 = {
      title: title,
      content: content,
      rating: rating,
      product_id: productid
    }


    fetch('https://elegant-turing-385673.netlify.app/reviews', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data1),
    })
    .then((response) => response.json())
    .then((data1) => {
      console.log('Success'), alert("Thanks for submitting your review!")
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    document.getElementById('review-form').reset();

  }



  totalReview(product){
    document.getElementById('buttonForSort').style.display = 'none';

    fetch("https://makeup-journal.herokuapp.com/reviews")
    .then(resp => resp.json())
    .then((reviews) => {

      reviews.map(review => {

        if (product.id === review.product_id){

          document.getElementById('review-product-container').style.display = 'block';

          const reviews = document.getElementById("reviews-container")
          const reviewTitle = document.createElement('li')
          const reviewContent = document.createElement('li')
          const reviewRating = document.createElement('li')
          reviewTitle.innerHTML = "Title: " + review.title
          reviewContent.innerHTML = "Content: " + review.content
          reviewRating.innerHTML = "Rating: " + review.rating

          const editReviewBtn = document.createElement('BUTTON')
          editReviewBtn.innerHTML = "Edit review"
          editReviewBtn.onclick = this.review.editReview.bind(this,review)
          editReviewBtn.setAttribute("data-reviewid",review.id)
          document.getElementById('edit-review-form').style.display = 'none';

          reviews.append(reviewTitle,reviewContent,reviewRating,editReviewBtn)
        }
      })
      const reviewProduct = document.getElementById("review-product-container")
      const reviewProductName = document.createElement('li')
      reviewProductName.innerHTML = "Name: " + product.name
      reviewProduct.append(reviewProductName)
      document.getElementById('products-container').style.display = 'none';
      document.getElementById('product').style.display = 'none';
    })
    .catch(error => {
      console.error('Error:', error);

    })
  }

  editReview(review){
    const reviewid = document.getElementById('review_id1')
    reviewid.value = review.id
    const productid = document.getElementById('product_id1')
    productid.value = review.product_id
    document.getElementById('reviews-container').style.display = 'none';
    document.getElementById('edit-review-form').style.display = 'block';
    document.getElementById("title1").defaultValue = review.title;
    document.getElementById("content1").defaultValue = review.content;
    document.getElementById("rating1").defaultValue = review.rating;

  }

  submitEditReview(review){
    const newTitle = document.getElementById("title1").value
    const newContent = document.getElementById("content1").value
    const newRating = document.getElementById("rating1").value
    const reviewid = document.getElementById('review_id1').value
    const productid = document.getElementById('product_id1').value

    const newData1 = {
      title: newTitle,
      content: newContent,
      rating: newRating,
      product_id: productid
    }

    fetch(`https://elegant-turing-385673.netlify.app/reviews/${reviewid}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData1),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success'), console.log(newData1), alert("Thanks for submitting your review!");
    })
    .catch((error) => {
      console.error('Error:', error)
    })
    document.getElementById('edit-review-form').reset();

  }

}
