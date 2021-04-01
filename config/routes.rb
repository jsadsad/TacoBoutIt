Rails
  .application
  .routes
  .draw do
    root to: 'static_pages#root'

    namespace :api, defaults: { format: :json } do
      resources :users, only: %i[index create]
      resources :businesses, only: %i[index show create] do
        resources :reviews, only: %i[index create update destroy] do
          resources :review_tags, only: [:index]
        end
      end
      resources :review_tags, only: %i[show create destroy update]
      resource :session, only: %i[create destroy]
    end
  end
