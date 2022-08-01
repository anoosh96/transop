class Community < ApplicationRecord
	# TODO:
	# =>  has one admin, enforced
	has_many :members
	has_many :users, through: :members
end