Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  namespace :api, defaults: {format: "json"} do
    resources :users, only: [:create, :index, :show] do
      resources :channels, only: [:create, :index, :show, :destroy] do
        resources :messages, only: [:create, :index, :show, :update]
      end

      resources :dms, only: [:create, :index, :show] do
        resources :messages, only: [:create, :index, :show, :update]
      end
    end 
    
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"

  mount ActionCable.server, at: '/cable'
end
