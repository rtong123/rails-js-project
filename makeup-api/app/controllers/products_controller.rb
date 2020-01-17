class ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products
  end

  # implement code for create (POST) endpoint
  def create
    @product = Product.new(product_params)
    @product.save
    render json: @product
  end

  def edit
    @product = Product.find_by(id: @product.id)
  end

  private
  def product_params
    params.permit(:name,:brand,:price,:category)
  end

end
