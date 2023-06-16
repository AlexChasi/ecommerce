import showMenu from "./components/ShowMenu.js";
import { productList } from './helpers/productList.js'
import { createProduct } from './helpers/createProduct.js'

const container = document.querySelector('.products__container')

for (const product of productList) {
  const articleEl = createProduct(product.name, product.image, product.price)

  container.appendChild(articleEl)
}

/* UI Element*/

/*Hidden loader*/

/*Hidden loader*/
showMenu()

/*End UI Elements*/
/*Products*/

/*Products*/

/* Cart */