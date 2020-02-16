class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find(params[:id])
    stream_for @channel
  end

  def speak(data)
    message = @channel.messages.new(body: data['message'])
    message.user_id = current_user.id

    if message.save!
      socket = { message: message.to_json, type: 'message' }
      ChatChannel.broadcast_to(@channel, socket)
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
