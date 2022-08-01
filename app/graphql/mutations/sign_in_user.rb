module Mutations
  class SignInUser < BaseMutation
    null true

    argument :credentials, Types::AuthProviderCredentialsInput, required: false

    field :user, Types::UserType, null: true

    def resolve(credentials: nil)
      user = User.find_for_database_authentication(email: credentials[:email])

      if user.present?
        if user.valid_password?(credentials[:password])
          token = Warden::JWTAuth::UserEncoder.new.call(user, :users, nil)[0]

          context[:session][:token] = token
          context[:current_user] = user
          return {
            user: { 
              id: user.id,
              email: user.email,
              name: user.name,
              token: token,
              address: nil,
              description: nil,
              profile_picture: nil,
              phone_number: nil,
              social_media_links: nil,
            }
          }
        else
          GraphQL::ExecutionError.new("Incorrect Email/Password")
        end
      else
        GraphQL::ExecutionError.new("User not registered on this application")
      end
    end
  end
end