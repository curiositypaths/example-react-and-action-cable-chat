class User < ApplicationRecord
  has_secure_password
  has_many :owned_rooms, class_name: "Room", foreign_key: "user_id"
  has_many :user_rooms
  has_many :rooms, through: :user_rooms
end
