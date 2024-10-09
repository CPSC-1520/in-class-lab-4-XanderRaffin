
// Enter your code below.
let form = document.querySelector("#new-order-form");


form.addEventListener('submit', (event)=>
{
  event.preventDefault();
  let isFormValid = true;

  let orderItemName = event.target.elements["order-item-name"];
  if(isValueNotEmpty(orderItemName.value)){
    orderItemName.classList.remove('is-invalid');
  }
  else{
    orderItemName.classList.add('is-invalid');
    isFormValid = false;
  }

  let orderItemPrice = event.target.elements["order-item-price"];

  if(isValueNotEmpty(orderItemPrice.value) && isGreaterThanFive(orderItemPrice.value)){

    orderItemPrice.classList.remove("is-invalid");
  }
  else{

    orderItemPrice.classList.add("is-invalid");
    isFormValid = false;
  }

  let orderSize = event.target.elements["order-size"];
  if(isValueNotEmpty(orderSize.value)){

    orderSize.classList.remove('is-invalid');

  }
  else{
    orderSize.classList.add('is-invalid');
    isFormValid = false
  }

  if(isFormValid === true){
    addOrderItem(orderItemName.value, orderItemPrice.value, orderSize.value);
  }
})

// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
      
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}