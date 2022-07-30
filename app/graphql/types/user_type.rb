# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :email, String, null: false
    field :virtual, String, null: false

    def virtual
      "none database field here"
    end
  end
end
