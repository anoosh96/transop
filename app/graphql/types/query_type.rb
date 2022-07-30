module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :description, String, null: false, description: "Transparent politics description"
    field :current_user, UserType, null: false, description: "Get currently signed in user"

    def description
      "Transparent Politics is live"
    end

    def current_user
      byebug
      context[:current_user]
    end
  end
end
