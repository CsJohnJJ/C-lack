json.extract! message, :id, :user_id, :body, :messageble_id, :messageble_type, :created_at, :updated_at

json.display_name message.user.display_name