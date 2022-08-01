class AddAttributesToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :description, :string
    add_column :users, :phone_number, :string
    add_column :users, :address, :string
    add_column :users, :social_media_links, :json
  end
end
