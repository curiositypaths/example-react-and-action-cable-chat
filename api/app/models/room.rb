class Room < ApplicationRecord
  belongs_to :user
  has_many :user_rooms
  has_many :users, through: :user_rooms
end
