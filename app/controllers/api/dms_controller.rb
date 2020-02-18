class Api::DmsController < ApplicationController
#     def index
#         @dms = Dm.all
#         render :index
#     end

#     def show
#         @dm = Dm.find(params[:id])
#         if @dm
#             render :show
#         else
#             render json: ['Direct message does not exist'], status: 404
#         end
#     end

    # def create
    #     # @dm = Dm.new(dm_params)

    #     # if @dm.save
    #     #     render :show
    #     # else
    #     #     render json: @dm.errors.full_messages, status: 422
    #     # end
    # end

#     def destroy
#         @dm = Dm.find(params[:id])
#         if @dm
#             @dm.destroy
#             render :show
#         else
#             render json: @dm.errors.full_messages, status: 422
#         end

#     end

#     private
#     def dm_params
#         params.require(:dm).permit(:name, :description, :is_private)
#     end
    
end
