class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render json: @reviews
  end

  # implement code for create (POST) endpoint
  def create
    @review = Review.new(review_params)
    @review.save
    render json: @review
  end

  def update
    @review = Review.find_by(id: params[:id])
    @review.update(review_params)
    render json: @review
  end


  private
  def review_params
    params.permit(:title,:content,:rating,:product_id)
  end

end
