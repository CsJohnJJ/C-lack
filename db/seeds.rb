# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(username: 'demouser', display_name: 'Demo User', email: 'demo@email.com', password: 'password')

user1 = User.create(username: 'johnd2020', display_name: 'John Doe', email: 'johnfakesmith@email.com', password: 'hunter2')

user2 = User.create(username: 'JaneDoe', display_name: 'Jane Doe', email: 'janexoxo@yahoo.com', password: 'hunter2')

user3 = User.create(username: 'greg', display_name: 'Greg, the TA', email: 'gregh@ta.com', password: 'hunter2')

user4 = User.create(username: 'Test', display_name: 'Tester', email: 'test@gemail.com', password: 'hunter2')

user5 = User.create(username: 'appacademy', display_name: 'App Academy', email: 'appacademy@email.com', password: 'hunter2')

