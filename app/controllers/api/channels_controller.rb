class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.all
        render :index
    end

    def show
        debugger
        @channel = Channel.find(params[:id])
        if @channel
            render :show
        else
            render json: ['Channel does not exist'], status 404
        end
    end

    def create
        @channel = Channel.new(channel_params)
        @channel.admin_id = current_user.id

        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find(params[:id])
        if @channel
            @channel.destroy
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end

    end

    private
    def channel_params
        params.require(:channel).permit(:name, :description, :is_private)
    end

end
