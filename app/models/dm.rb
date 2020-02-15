# == Schema Information
#
# Table name: dms
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Dm < ApplicationRecord
    has_many :memberships, 
        as: :memberable, 
        dependent: :destroy

    has_many :messages, 
        as: :messageble, 
        dependent: :destroy

    has_many :users, 
        through: :memberships

end
