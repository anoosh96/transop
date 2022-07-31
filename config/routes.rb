Rails.application.routes.draw do
  devise_for :users, only: []
  post "/graphql", to: "graphql#execute"
end
