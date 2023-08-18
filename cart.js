let i = 0;
let priceTotal = 0;
function addItemToCart(clickEvent) {

  // console.log(clickEvent.parentElement.parentElement.children[0].innerText);

  // console.log(clickEvent.parentElement.parentElement.children[2].children[0].innerText);

  const cartContainer = document.getElementById('cart-container');
  const cartItems = document.getElementById('cart-items');
  const cartUl = document.getElementById('cart-ul');
  const li = document.createElement('li');
  li.innerText = `${++i}. ${clickEvent.parentElement.parentElement.children[0].innerText}`;
  cartUl.appendChild(li);

  priceTotal += parseFloat(clickEvent.parentElement.parentElement.children[2].children[0].innerText);
  console.log(priceTotal);

  document.getElementById('cart-price-total').innerText = priceTotal;
}