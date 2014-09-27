# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Group.destroy_all
Student.destroy_all

Group.create(name: "P1 - Algebra 1")
Group.create(name: "P2 - Geometry")
Group.create(name: "P3 - Pre-Calculus")
Group.create(name: "P4 - Geometry")
Group.create(name: "P5 - Algebra 1")
Group.create(name: "P6 - Algebra 2")

Group.all.each do |group|
  20.times do
    group.students << Student.create(name: Faker::Name.name)
  end
end