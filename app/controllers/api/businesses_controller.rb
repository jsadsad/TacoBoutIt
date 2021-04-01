class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.all
    render :index
  end

  def show
    @business = Business.find_by(id: params[:id])
    if @business
      render :show
    else
      render json: ['Business does not exist']
    end
  end

  def create
    @business = Business.new(business_params)
    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 401
    end
  end

  private

  def business_params
    params
      .require(:business)
      .permit(
        :name,
        :category,
        :address,
        :city,
        :state,
        :zip_code,
        :phone_number,
        :lat,
        :lng,
      )
  end
end
