class Api::V1::SessionsController < ApplicationController
  HMAC_SECRET = 'The key is here just for demo purposes'
  def create
    @user = User.find_by(name:params['user']['name'])
    if @user.authenticate(params['user']['password'])
      jwt_token = generate_jwt_token
      render json: {
        jwt: jwt_token,
        user: {id: @user.id, name: @user.name}
      }
    end
  end

  private
  def generate_jwt_token
    payload = {:user_id => @user.id}
    token = JWT.encode payload, HMAC_SECRET, 'HS256'
  end
end
