json.extract! dm, :id

msgs = []
dm.messages.each do |msg|
    msgs.push(message.id)
end
json.message_ids = msgs

users = []
dml.users.each do |user|
    users.push(user.id)
end
json.users_ids = users