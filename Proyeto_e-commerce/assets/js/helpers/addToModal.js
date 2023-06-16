import { productList } from './productList.js'
const modalContainer = document.querySelector('.modal-container')

export const closeModal = () => {
  modalContainer.innerHTML = ''
}

const html = document.querySelector('html')

const onKeyDown = (e) => {
  if (e.key === 'Escape') closeModal()
}

html.addEventListener('keydown', onKeyDown)


export const addToModal = (name) => {
  const itemIndex = productList.findIndex(el => el.name === name)
  if (itemIndex === -1) return

  const item = productList[itemIndex]

  const background = document.createElement('div')

  background.addEventListener('click', () => {
    closeModal()
  })

  background.setAttribute('class', 'modal__background')
  const imagen = document.createElement('img')
  imagen.setAttribute('src', item.image)
  imagen.setAttribute('alt', name)
  background.appendChild(imagen)

  modalContainer.appendChild(background)
}