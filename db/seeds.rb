# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Channel.destroy_all
Message.destroy_all
Dm.destroy_all
Membership.destroy_all


demo = User.create!(username: 'demouser', display_name: 'Demo User', email: 'demo@email.com', password: 'password')
god = User.create!(username: 'The', display_name: 'Creator', email: 'of@app.com', password: 'C-lack')
user1 = User.create!(username: 'johnd2020', display_name: 'John Doe', email: 'johnfakesmith@email.com', password: 'hunter2')
user2 = User.create!(username: 'JaneDoe', display_name: 'Jane Doe', email: 'janexoxo@yahoo.com', password: 'hunter2')
user3 = User.create!(username: 'greg', display_name: 'Greg, the TA', email: 'gregh@ta.com', password: 'hunter2')
user4 = User.create!(username: 'Test', display_name: 'Tester', email: 'test@gemail.com', password: 'hunter2')
user5 = User.create!(username: 'appacademy', display_name: 'App Academy', email: 'appacademy@email.com', password: 'hunter2')
user6 =User.create!(username: 'beauty', display_name: 'Beauty', email: 'nope@fakeemail.com', password: 'beast')
user7 =User.create!(username: 'beast', display_name: 'Beast', email: 'yep@fakeemail.com', password: 'beauty')
user8 =User.create!(username: 'player1', display_name: 'Player One', email: 'player1@fakeemail.com', password: 'insertcoin')
user9 =User.create!(username: 'ironman', display_name: 'Iron Man', email: 'ironman@avengers.io', password: 'iamironman')
user10 =User.create!(username: 'captainamerica', display_name: 'Captain America', email: 'cap@avengers.io', password: 'iamcap')


ch1 = Channel.create!(name: 'General', description: "Welcome to C-lack", admin_id: god.id, is_private: false)
ch2 = Channel.create!(name: 'App Academy', description: "Welcome all cohort", admin_id: god.id, is_private: false)
ch3 = Channel.create!(name: 'Random', description: "ercvtybunmid,cduhedfdd34ref", admin_id: demo.id, is_private: false)
ch4 = Channel.create!(name: 'Avengers', description: "Avengers, assemble!!!", admin_id: user10.id, is_private: true)

msg1 = Message.create!(body: 'Welcome to C-lack, clone of Slack', user_id: god.id, messageable_id: ch1.id,  messageable_type: Channel)
msg2 = Message.create!(body: 'I am Iron Man', user_id: user9.id, messageable_id: ch4.id,  messageable_type: Channel )
msg3 = Message.create!(body: 'Avengers, assemble!', user_id: user10.id, messageable_id: ch4.id,  messageable_type: Channel )
msg4 = Message.create!(body: 'Testing1', user_id: demo.id, messageable_id: ch1.id,  messageable_type: Channel )
msg5 = Message.create!(body: 'datz ez', user_id: user3.id,, messageable_id: ch2.id,  messageable_type: Channel )

dm1 = Dm.create!()
dm2 = Dm.create!()
dm3 = Dm.create!()

Membership.create!(user_id: demo.id, memberable_id: ch1.id, memberable_type: Channel)
Membership.create!(user_id: demo.id, memberable_id: ch2.id, memberable_type: Channel)
Membership.create!(user_id: demo.id, memberable_id: ch3.id, memberable_type: Channel)
Membership.create!(user_id: demo.id, memberable_id: ch4.id, memberable_type: Channel)
Membership.create!(user_id: god.id, memberable_id: ch1.id, memberable_type: Channel)
Membership.create!(user_id: god.id, memberable_id: ch2.id, memberable_type: Channel)
Membership.create!(user_id: god.id, memberable_id: ch3.id, memberable_type: Channel)
Membership.create!(user_id: god.id, memberable_id: ch4.id, memberable_type: Channel)
Membership.create!(user_id: user3.id, memberable_id: ch1.id, memberable_type: Channel)
Membership.create!(user_id: user3.id, memberable_id: ch2.id, memberable_type: Channel)
Membership.create!(user_id: user3.id, memberable_id: ch3.id, memberable_type: Channel)
Membership.create!(user_id: user9.id, memberable_id: ch4.id, memberable_type: Channel)
Membership.create!(user_id: user10.id, memberable_id: ch4.id, memberable_type: Channel)

