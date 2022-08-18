class ErrorsController < ApplicationController
  def error404
    render status: 404
  end
end
