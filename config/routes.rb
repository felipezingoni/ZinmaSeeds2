Rails.application.routes.draw do
  get 'send/index'

  scope '(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
    get 'products/alfalfa'
    get 'products/sorgo'
    get 'products/pasturas'
    get 'products/cultivos'
    get 'pages/aboutus'
    # get 'pages/contact'
    resources :contacts, only: [:create, :new]
    root 'pages#home'
  end
end
