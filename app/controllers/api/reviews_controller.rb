class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, except: [:index]

    def index
        @reviews = Review.all
    end

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def edit
        @review = Review.find(params[:id])
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review.author_id == current_user.id && @review.update(review_params)
            render :show
        else
            render json: ["Cannot update review"]
        end 
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.destroy
            render :show
        else
            render json: ["Review cannot be deleted"], status: 422
        end
    end
    
    private
    def review_params
        params.require(:review).permit(:content, :rating, :business_id)
    end
end
