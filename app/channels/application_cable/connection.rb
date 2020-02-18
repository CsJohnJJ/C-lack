module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      # debugger
      self.current_user = find_verified_user
    end

    private
    def find_verified_user
      # debugger
      verified_user = User.find_by(session_token: request.session.fetch('session_token', nil))
    end
  end
end

