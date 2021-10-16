// script.js
const cartItems = []

class CartItem {
  constructor(size, color, quantity) {
    this.size = size
    this.color = color
    this.quantity = quantity
  }
}

function addItemToCart() {
  let sizeSel = document.getElementsByName("size")
  var size = ""
  for (let i=0; i<4; i++) {
    if (sizeSel[i].checked) {
      size = sizeSel[i].value
    }
  }
  let colorSel = document.getElementsByName("color")
  var color = ""
  for (let i=0; i<4; i++) {
    if (colorSel[i].checked) {
      color = colorSel[i].value
    }
  }
  let quantSel = document.getElementById("quantity")
  var quantity = quantSel.options[quantSel.selectedIndex].value
  console.log("Size: " + size + ", Color: " + color + ", Quantity: " + quantity)
  const cartItem = new CartItem(size, color, quantity)
  cartItems.push(cartItem)
}

function displayCartPopUp() {

}

function displayCartNotification() {
  let numItems = cartItems.length
  let cart = document.getElementById("cart")
  let x = -5
  let y = 0
  console.log("x: " + x, " y: " + y)
  const notification = document.createElement("div")
  notification.classList.add("cart-notification")
  notification.innerHTML = numItems.toString()
  notification.style.top = y.toString() + "px"
  notification.style.left = x.toString() + "px"
  cart.append(notification)
}

function displayAddToCartAfter() {
  displayCartPopUp()
  displayCartNotification()
}

function addToCart() {
  addItemToCart()
  displayCartNotification()
}