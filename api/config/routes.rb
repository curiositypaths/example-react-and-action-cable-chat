Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'sessions', to: 'sessions#create'
      post 'rooms', to: 'rooms#create'
    end
  end
end
