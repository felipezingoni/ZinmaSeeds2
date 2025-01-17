class ApplicationController < ActionController::Base
  before_action :set_locale
  before_action :verify_domain, if: -> { Rails.env.production? }


  private
  def verify_domain
    return unless request.host == "zinmaseeds.com"
    redirect_to "https://zinmaseeds.com#{request.original_fullpath}",
        status: :moved_permanently
  end

  def default_url_options
      {locale: I18n.locale}
  end

  def set_locale
    I18n.locale = extract_locale || I18n.default_locale
  end

  def extract_locale
    parsed_locale = params[:locale]
    I18n.available_locales.map(&:to_s).include?(parsed_locale) ?
      parsed_locale.to_sym :
      nil
  end
end
