class Api::UsersController < ApplicationController
    def index
    @users = User.all
    render "api/users/index"
    end

    def create
        @user = User.new(user_params)

        if @user.save
            @user.channels << Channel.find_by(name: "General")
            @user.channels << Channel.find_by(name: "App Academy")
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :display_name, :email, :password)
    end
end
