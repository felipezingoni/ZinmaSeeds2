class PagesController < ApplicationController
  def home
    @title = "Zinma Seeds | Productor de semillas forrajeras."
    @meta_description = "Somos una empresa enfocada en el bredding, producción y marketing de semillas forrajeras. Especializándonos en especies como alfalfas, sorgos, cultivos de servicios y gramíneas perennes incluyendo rye grasses y festucas."
    @canonical_url = request.original_url
  end

  def aboutus
    @title = "Sobre Zinma Seeds | Innovación en semillas forrajeras"
    @meta_description = "Conoce a Zinma Seeds: una empresa global especializada en semillas forrajeras, alfalfa, gramíneas y sorgos. Proveemos soluciones innovadoras desde Estados Unidos y Argentina."
    @canonical_url = request.original_url
  end

  def contact
  end
end
