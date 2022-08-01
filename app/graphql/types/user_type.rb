# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :email, String, null: false
    field :token, String, null: true
    field :profile_picture, String, null: true
    field :address, String, null: true
    field :description, String, null: true
    field :phone_number, String, null: true
    field :social_media_links, GraphQL::Types::JSON, null: true
  end
end
