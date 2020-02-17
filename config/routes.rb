Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  namespace :api, defaults: {format: "json"} do

    # # Testing different routes
    # resources :users, only: [:create, :index, :show] do
    #   resources :channels, only: [:index, :show, :create, :destroy] do
    #     resources :messages, only: [:index, :show, :create, :update]
    #   end

    #   resources :dms, only: [:index, :show, :create, :destroy] do
    #     resources :messages, only: [:index, :show, :create, :update]
    #   end
    # end 
    # # Testing different routes end

    resources :users, only: [:create, :index, :show]
    resources :channels, only: [:index, :show, :create, :destroy]
    resources :dms, only: [:index, :show, :create, :destory]
    resources :messages, only: [:index, :show, :create, :update]
    resources :memberships, only: [:index, :show, :create, :destroy]

    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"

  mount ActionCable.server, at: '/cable'
end
