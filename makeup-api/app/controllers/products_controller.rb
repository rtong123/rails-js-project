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

  def update
    @product = Product.find_by(id: params[:id])
    @product.update(product_params)
  end

  private
  def product_params
    params.permit(:name,:brand,:price,:category)
  end

end
