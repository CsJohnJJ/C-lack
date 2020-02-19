class ChatChannel < ApplicationCable::Channel
  def subscribed
    #  
    @channel = Channel.find(params[:id])
    stream_for @channel
  end

  def speak(data)
    message = @channel.messages.new(body: data['message'])
    message.user_id = current_user.id  #author of the message
       debugger
    if message.save!
      socket = { message: message.to_json, type: 'message' }
      #  debugger
      ChatChannel.broadcast_to(@channel, socket)
    end
  end

  def load
    #  
    messages = @channel.message.all.collect(&:body)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
