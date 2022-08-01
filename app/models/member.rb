class Member < ApplicationRecord
	belongs_to :user
	belongs_to :community

	validates :role, presence: true, inclusion: { in: ['member', 'admin'] }
	# todo validation only one admin per community allowed
end
