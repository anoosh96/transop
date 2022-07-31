module Mutations
  class SignInUser < BaseMutation
    null true

    argument :credentials, Types::AuthProviderCredentialsInput, required: false

    field :token, String, null: true
    field :user, Types::UserType, null: true

    def resolve(credentials: nil)
      user = User.find_for_database_authentication(email: credentials[:email])

      if user.present?
        if user.valid_password?(credentials[:password])
          token = Warden::JWTAuth::UserEncoder.new.call(user, :users, nil)[0]

          context[:session][:token] = token
          context[:current_user] = user
          { user: user, token: token }
        else
          GraphQL::ExecutionError.new("Incorrect Email/Password")
        end
      else
        GraphQL::ExecutionError.new("User not registered on this application")
      end
    end
  end
end