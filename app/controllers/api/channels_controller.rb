class Api::ChannelsController < ApplicationController
    def index
        #  
        @channels = Channel.all.includes(:messages, :users)
        render :index
    end

    def show
        #   
        @channel = Channel.find(params[:id]).includes(:messages)
        if @channel
            render :show
        else
            render json: ['Channel does not exist'], status: 404
        end
    end

    def create
        @channel = Channel.new(channel_params)
        @channel.admin_id = current_user.id

        if @channel.save
            @channel.memberships << Membership.create!(user_id: @channel.admin_id, memberable_id: @channel.id, memberable_type: 'Channel')

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
