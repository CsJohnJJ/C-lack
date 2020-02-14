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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
