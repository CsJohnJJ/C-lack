class Api::MembershipsController < ApplicationController
      def index
        @memberships = Membership.all
        render :index
    end

    def show
        @membership = Membership.find(params[:id])
        if @membership
            render :show
        else
            render json: ['Membership does not exist'], status 404
        end
    end

    def create
        @membership = Membership.new(membership_params)

        if @membership.save
            render :show
        else
            render json: @membership.errors.full_messages, status: 422
        end
    end

    def destroy
        @membership = Membership.find(params[:id])
        if @membership
            @membership.destroy
        end
    end

    private
    def membership_params
        params.require(:membership).permit(:user_id, :memberable_id, :memberable_type)
    end
end
