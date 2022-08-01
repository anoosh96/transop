module Mutations
  class CreateCommunity < BaseMutation
    argument :name, String, required: true
    argument :description, String, required: true

    type Types::CommunityType

    def resolve(name: nil, description: nil)
      user = context[:current_user]
      return nil unless user
      
      # todo manage validation errors
      community = Community.create!(name: name, description: description)
      Member.create!(user_id: user.id, community_id: community.id, role: 'admin')

      { id: community.id, name: community.name, description: community.description }
    end
  end
end