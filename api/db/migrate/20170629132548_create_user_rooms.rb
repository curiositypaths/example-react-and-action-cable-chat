class CreateUserRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :user_rooms do |t|
      t.integer :room_id
      t.integer :user_id
    end
  end
end
