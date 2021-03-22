class Api::ReviewTagsController < ApplicationController
  def index
    @tags = ReviewTag.all
    render :index
  end

  def show
    @tag = ReviewTag.find_by(id: params[:id])
    render :show
  end

  def create
    @tag = ReviewTag.new(tag_params)
    @tag.author_id = current_user.id
    @tag.review_id = params[:tag][:review_id].to_i
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def update
    @tag = ReviewTag.find_by(id: params[:id])
    if @tag.update_attributes(tag_params)
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end

  end

  def destroy
    @tag = ReviewTag.find_by(id: params[:id])
    @tag.destroy
    render :show
  end

  private

  def tag_params
    params.require(:tag).permit(:useful, :funny, :cool)
  end

end
