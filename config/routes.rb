Rails.application.routes.draw do
  get 'send/index'

  scope '(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
    get 'products/index'
    get 'pages/aboutus'
    get 'pages/contact'
    root 'pages#home'
  end
end
