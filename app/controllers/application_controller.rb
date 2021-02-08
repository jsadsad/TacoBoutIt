class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[session_token])
    end
    
    def require_logged_in
        redirect_to new_session_url unless logged_in?
    end 

    def login
    end

    def logout
    end

    def logged_in?
        !!current_user
    end

end
