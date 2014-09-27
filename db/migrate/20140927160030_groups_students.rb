class GroupsStudents < ActiveRecord::Migration
  def change
    create_table :groups_students, id: false do |t|
      t.belongs_to :group
      t.belongs_to :student
    end
  end
end
