import { addToCart } from "../components/cart.js";
import { addToModal } from "./addToModal.js";

export const createProduct = (name, image, price) => {
  const divImage = document.createElement('div');
  divImage.setAttribute('class', 'product__image');

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', image);
  imgElement.setAttribute('alt', 'Producto 1');

  divImage.appendChild(imgElement);

  const divContent = document.createElement('div');
  divContent.setAttribute('class', 'product__content');

  const divContentInfo = document.createElement('div');
  divContentInfo.setAttribute('class', 'product__content-info');

  const h3Element = document.createElement('h3');
  h3Element.setAttribute('class', 'product__title');
  h3Element.textContent = name;

  const spanPrice = document.createElement('span');
  spanPrice.setAttribute('class', 'product__price');
  spanPrice.textContent = '$' + price;

  const divFooter = document.createElement('div');
  divFooter.setAttribute('class', 'product__footer');

  const spanShirt = document.createElement('span');
  spanShirt.textContent = 'shirt';

  const spanAvailable = document.createElement('span');
  spanAvailable.textContent = 'Disponibles 3';

  divFooter.appendChild(spanShirt);
  divFooter.appendChild(spanAvailable);

  divContentInfo.appendChild(h3Element);
  divContentInfo.appendChild(spanPrice);
  divContentInfo.appendChild(divFooter);

  const divActions = document.createElement('div')
  divActions.setAttribute('class', 'product__actions')
  const buttonDetails = document.createElement('button')
  const buttonCart = document.createElement('button')
  buttonDetails.addEventListener('click', () => {
    addToModal(name)
  })
  buttonCart.addEventListener('click', () => {
    addToCart(name)
  })
  buttonDetails.textContent = 'Detalles'
  buttonCart.textContent = 'Agregar'
  divActions.appendChild(buttonDetails)
  divActions.appendChild(buttonCart)

  const divDetails = document.createElement('div');
  divDetails.setAttribute('class', 'product__details');

  const pMeasurements = document.createElement('p');
  pMeasurements.textContent = 'Medidas';

  const spanMedidas = document.createElement('span')
  spanMedidas.textContent = 'XS, S, M, L, XL, XXL'

  const pColors = document.createElement('p');
  pColors.textContent = 'Colores';

  const divColorsContainer = document.createElement('div');
  divColorsContainer.setAttribute('class', 'product__colors__container');

  for (let i = 0; i < 4; i++) {
    const divColor = document.createElement('div');
    divColorsContainer.appendChild(divColor);
  }

  divDetails.appendChild(pMeasurements);
  divDetails.appendChild(spanMedidas);
  divDetails.appendChild(pColors);
  divDetails.appendChild(divColorsContainer);

  const article = document.createElement('article');
  article.setAttribute('class', 'product');

  article.appendChild(divActions  )
  article.appendChild(divImage);
  article.appendChild(divContent);
  divContent.appendChild(divContentInfo);
  divContent.appendChild(divDetails);

  return article
}