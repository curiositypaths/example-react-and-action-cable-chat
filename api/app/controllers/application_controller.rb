class ApplicationController < ActionController::API
  HMAC_SECRET = 'The key is here just for demo purposes'
  JWT_ALGORITHM = 'HS256'

  def authenticate_user
    user_id = JWT.decode(request.headers['HTTP_AUTHORIZATION'],HMAC_SECRET,JWT_ALGORITHM)[0]['user_id'] if request.headers['HTTP_AUTHORIZATION']
    if user_id
      @user = User.find(user_id)
    else
      render json: {
        errors: ["Unauthorized"],
        status: 401
      }
    end
  end
end
