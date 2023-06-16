import { deleteFromCart } from "../components/cart.js";

export function createCartProduct({ name, price, image }) {
  // Crear el elemento <article> con la clase "cart__product"
  const article = document.createElement("article");
  article.className = "cart__product";

  // Crear el elemento <div> con la clase "image__container"
  const imageContainer = document.createElement("div");
  imageContainer.className = "image__container";

  // Crear la imagen <img> con el atributo src y alt
  const img = document.createElement("img");
  img.src = image;
  img.alt = name;

  // Crear el elemento <span> para el precio
  const priceSpan = document.createElement("span");
  priceSpan.textContent = `$${price}`;

  // Agregar la imagen y el span de precio al contenedor de imagen
  imageContainer.appendChild(img);
  imageContainer.appendChild(priceSpan);

  // Crear el elemento <div> con la clase "product__info"
  const productInfo = document.createElement("div");
  productInfo.className = "product__info";

  // Crear el elemento <div> con la clase "info"
  const infoDiv = document.createElement("div");
  infoDiv.className = "info";

  // Crear el elemento <h4> para el nombre del producto
  const productName = document.createElement("h4");
  productName.textContent = name;

  // Crear el botón <button> con el icono
  const button = document.createElement("button");
  const icon = document.createElement("i");
  icon.className = "bx bx-trash";

  button.addEventListener('click', () => {
    deleteFromCart(name)
  })

  button.appendChild(icon);

  // Agregar el nombre del producto y el botón al div de información
  infoDiv.appendChild(productName);
  infoDiv.appendChild(button);

  // Crear el elemento <div> con la clase "footer"
  const footerDiv = document.createElement("div");
  footerDiv.className = "footer";

  // Crear el elemento <span> para la disponibilidad
  const availabilitySpan = document.createElement("span");
  availabilitySpan.textContent = "5 disponibles";

  // Crear el elemento <h5> para el precio
  const priceH5 = document.createElement("h5");
  priceH5.textContent = "$25";

  // Agregar la disponibilidad y el precio al div del pie de página
  footerDiv.appendChild(availabilitySpan);
  footerDiv.appendChild(priceH5);

  // Agregar el contenedor de imagen, el div de información y el div del pie de página al elemento <article>
  article.appendChild(imageContainer);
  article.appendChild(productInfo);
  productInfo.appendChild(infoDiv);
  productInfo.appendChild(footerDiv);

  // Retornar el elemento <article> completo
  return article;
}