class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
	validates :name, presence: true
  validates :email, presence: true, uniqueness: true

  has_many :members
  has_many :communities, through: :members
  has_one_attached :profile_picture
  
  def jwt_payload
    { 'custom_token_data' => 'todo' }
  end
end
