class ChangeBusinessPhoneNumToString < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :phone_number, :string
  end
end
