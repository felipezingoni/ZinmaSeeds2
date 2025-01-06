Rails.application.routes.draw do
  constraints(host: 'zinmaseeds-app.herokuapp.com') do
    match '*path', to: redirect { |_p, request| "https://zinmaseeds.com#{request.fullpath}" }, via: :all, status: :moved_permanently
  end
  get 'send/index'
  get '/404', to: 'errors#error404'

  scope '(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
    resources :products, only: [:index, :show], param: :slug

    get 'about-us', to: 'pages#aboutus', as: :about_us
    get 'contact', to: 'pages#contact', as: :contact
    get 'contacts/message'
    resources :contacts, only: [:create, :new]
    root 'pages#home'
  end
end
