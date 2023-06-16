import { createCartProduct } from "../helpers/createCartProduct.js"
import { productList } from "../helpers/productList.js"

const cartEl = document.querySelector('.cart')
const cartInfo = document.querySelector('.cart__info')
const cartPrice = document.querySelector('.cart__prices h3')
const cartBtn = document.querySelector('.btn--cart')
const closeBtn = document.querySelector('.close__btn')
const notif = document.querySelector('.notif')

cartEl.addEventListener('click', e => {
  e.stopPropagation()
})
const openCart = () => {
  cartEl.classList.add('visible')
  printCart()
  localStorage.setItem('notif', 0)
  notif.textContent = 0
  notif.classList.remove('visible')
}
closeBtn.addEventListener('click', closeCart)

cartBtn.addEventListener('click', openCart)

function closeCart () {
  cartEl.classList.remove('visible')
}

const showNotif = () => {
  const notifCount = parseInt(localStorage.getItem('notif') || 0)
  if (notifCount !== null && notifCount > 0) {
    notif.textContent = notifCount
    notif.classList.add('visible')
  }
}
showNotif()


function printCart () {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartInfo.innerHTML = ''
  let count = 0
  cart.forEach(el => { count += el.price })
  cartPrice.textContent = `TOTAL $${count}`

  if (cart.length <= 0) {
    cartInfo.innerHTML = '<span>No hay elementos en tu carrito</span>'
    return
  }

  for (const product of cart) {
    const article = createCartProduct(product)
    cartInfo.appendChild(article)
  }
  
}

export const addToCart = (name) => {
  const item = productList.find(el => el.name === name)
  if (item === undefined) return

  let notifCount = JSON.parse(localStorage.getItem('notif')) || 0;
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  cart.push(item);

  if (!cartEl.classList.contains('visible')) {
    console.log(notifCount)
    notifCount += 1
    localStorage.setItem('notif', notifCount)
    showNotif()
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  printCart()
}

export function deleteFromCart(name) {
  const carrito = JSON.parse(localStorage.getItem('cart')) || [];

  const index = carrito.findIndex(function(item) {
    return item.name === name;
  });

  if (index === -1) return

  carrito.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(carrito));

  printCart()
}
