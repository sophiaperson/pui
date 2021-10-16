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
  let notification = document.getElementById("cart-notification")
  notification.innerHTML = numItems.toString()
  notification.style.visibility = "visible"
}

function displayAddToCartAfter() {
  displayCartPopUp()
  displayCartNotification()
}

function addToCart() {
  addItemToCart()
  displayCartNotification()
}

function hoverSize(size){
  let selSize = document.getElementById("selected-size")
  selSize.innerHTML = size
}

function hoverColor(color) {
  let selColor = document.getElementById("selected-color")
  selColor.innerHTML = color
}

function mouseOutSize() {
  let sizeSel = document.getElementsByName("size")
  var size = ""
  for (let i=0; i<4; i++) {
    if (sizeSel[i].checked) {
      size = sizeSel[i].value
    }
  }
  size = size.charAt(0).toUpperCase() + size.slice(1)
  document.getElementById("selected-size").innerHTML = size
}

function mouseOutColor() {
  let colorSel = document.getElementsByName("color")
  var color = ""
  for (let i=0; i<4; i++) {
    if (colorSel[i].checked) {
      color = colorSel[i].value
    }
  }
  color = color.charAt(0).toUpperCase() + color.slice(1)
  document.getElementById("selected-color").innerHTML = color
}