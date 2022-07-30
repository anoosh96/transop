module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :description, String, null: false, description: "Transparent politics description"
    field :users, [UserType], null: false, description: "List all users"

    def description
      "Transparent Politics is live"
    end

    def users
      User.all
    end
  end
end
