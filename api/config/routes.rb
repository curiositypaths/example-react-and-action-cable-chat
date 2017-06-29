Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'sessions/new', to: 'sessions#new'
    end
  end
end
