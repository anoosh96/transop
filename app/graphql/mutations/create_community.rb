module Mutations
  class CreateCommunity < BaseMutation
    argument :name, String, required: true
    argument :description, String, required: true

    type Types::CommunityType

    def resolve(name: nil, description: nil)
      user = context[:current_user]
      return nil unless user
      
      community = Community.create!(
        name: name,
        description: description
      )

      { id: community.id, name: community.name, description: community.description }
    end
  end
end