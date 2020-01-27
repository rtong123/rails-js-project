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

  def edit
    @review= Review.find_by(id: @review.id)
  end

  private
  def review_params
    params.permit(:name,:brand,:price,:category)
  end
end
