# == Schema Information
#
# Table name: messages
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  body            :string           not null
#  messageble_id   :integer
#  messageble_type :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  parent_id       :integer
#

class Message < ApplicationRecord
    validates :user_id, :body, :messageble_id, :messageble_type, presence: true
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :messageable, 
        polymorphic: :true

end
