class DmChannel < ApplicationCable::Channel
#   def subscribed
#     @dm = Dm.find(params[:id])
#     stream_for @dm
#   end

#   def speak(data)
#     message = @dm.messages.new(body: data['message'])
#     message.user_id = current_user.id

#     if message.save!
#       socket = { message: message.to_json, type: 'message' }
#       DmChannel.broadcast_to(@dm, socket)
#     end
#   end

#   def unsubscribed
#     # Any cleanup needed when channel is unsubscribed
#   end
end
