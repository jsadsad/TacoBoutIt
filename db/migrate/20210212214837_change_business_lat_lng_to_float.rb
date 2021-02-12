class ChangeBusinessLatLngToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :lat, :float
    change_column :businesses, :lng, :float
  end
end
