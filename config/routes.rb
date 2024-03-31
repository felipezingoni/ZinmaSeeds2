Rails.application.routes.draw do
  constraints(host: 'zinmaseeds-app.herokuapp.com') do
    match '*path', to: redirect { |_p, request| "https://zinmaseeds.com#{request.original_fullpath}" }, via: :all, status: :moved_permanently
  end
  get 'send/index'
  get '/404', to: 'errors#error404'

  scope '(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
    get 'products/index', to: 'products#index'

    get 'pages/aboutus'
    get 'pages/contact'
    get 'contacts/message'
    resources :contacts, only: [:create, :new]
    root 'pages#home'
  end
end
