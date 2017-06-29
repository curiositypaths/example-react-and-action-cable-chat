class AddPasswordDigestToUser < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.column(:password_digest,:string)
    end
  end
end
