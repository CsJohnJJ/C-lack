debugger
json.extract! channel, :id, :name, :description, :admin_id, :is_private

msgs = []
channel.messages.each do |msg|
    msgs.push(message.id)
end
json.message_ids = msgs
debugger

users = []
channel.users.each do |user|
    users.push(user.id)
end
json.users_ids = users
    