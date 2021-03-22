Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index,:create]
    resources :businesses, only: [:index, :show, :create] do
      resources :reviews, only: [:index, :create, :update, :destroy] do 
         resources :review_tags, only: [:index]
      end
    end
    resources :review_tags, only: [:show, :create, :destroy, :update]
    resource :session, only: [:create, :destroy]
  end
end