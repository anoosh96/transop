class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
	validates :name, presence: true
  validates :email, presence: true, uniqueness: true

  # TODO:
  #   => has_one community
  #   => is_admin?

  
  def jwt_payload
    { 'expiry_date' => 'todo' }
  end
end
