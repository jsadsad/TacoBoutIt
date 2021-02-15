Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :businesses, only: [:index, :show, :create] do
      resources :reviews, only: [:index, :create, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end
end