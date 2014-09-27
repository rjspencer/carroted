class CreateBehaviors < ActiveRecord::Migration
  def change
    create_table :behaviors do |t|
      t.integer :group_id
      t.integer :student_id
      t.string :action
      t.string :status

      t.timestamps
    end
  end
end
