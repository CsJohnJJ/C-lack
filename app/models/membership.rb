# == Schema Information
#
# Table name: memberships
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  memberable_id   :integer          not null
#  memberable_type :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Membership < ApplicationRecord
    validates :user_id, :memberable_id, :memberable_type, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
        
    belongs_to :memberable,
        polymorphic: :true
     
end
  