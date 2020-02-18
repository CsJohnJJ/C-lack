# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  admin_id    :integer          not null
#  is_private  :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
    validates :name, :admin_id, :is_private, presence: true
    validates :name, uniqueness: true
    validates :is_private, inclusion: { in: [ 'true', 'false' ] }


    debugger
    
    belongs_to :admin,
        primary_key: :id,
        foreign_key: :admin_id,
        class_name: :User

    has_many :memberships,
        as: :memberable,
        dependent: :destroy 

    has_many :users,
        through: :memberships

    has_many :messages, 
        as: :messageble, 
        dependent: :destroy
        
end
