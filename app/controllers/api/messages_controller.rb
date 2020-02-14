class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all
        render :index
    end

    def show
        @message = Message.find(params[id])
        render :show
    end

    def create
        # Dont need, Action Cable will take over creating messages
    end

    # def update
    #     @message = Message.find(params[:id])

    # end

    private
    # def message_params
    #     params.require(:message).permit(:body, :user_id, :messageble_id, :messageble_type)
    # end
end
