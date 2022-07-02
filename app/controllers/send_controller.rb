class SendController < ApplicationController
  def index
  end

  # def create
  #   flash[:notice]= "formulario enviado"
  #   redirect_to send_path
  # end

  def create
    @params = params
    ContactMailer.contact_send(params).deliver
    flash[:notice] = 'mensaje enviado'
    redirect_to pages_contact_path
  end

  def contact_send(params)
    @parameters = params.mail(to: 'tuemail@example.com', subject: @parameters[:subject])
  end
end
