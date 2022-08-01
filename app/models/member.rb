class Member < ApplicationRecord
	belongs_to :member
	belongs_to :community

	validates :role, presence: true, inclusion: { in: ['member', 'admin'] }
end
