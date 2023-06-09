// Get form elements and pizza preview elements
const pizzaForm = document.getElementById('pizza-form');
const pizzaImage = document.getElementById('pizza-image');
const pizzaPrice = document.getElementById('pizza-price');

// Add event listener to form submit
pizzaForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get selected options
  const selectedToppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(topping => topping.value);
  const selectedCrust = document.querySelector('input[name="crust"]:checked').value;
  const selectedSauce = document.querySelector('input[name="sauce"]:checked').value;

  // Calculate total price based on selected options
  let totalPrice = 10.00; // Base price
  totalPrice += selectedToppings.length * 1.50; // Each topping costs $1.50 extra

  // Update pizza image and price display
  pizzaImage.src = `sausage-perps-onion.jpg`; // Use the appropriate image based on selections
  pizzaPrice.textContent = `$${totalPrice.toFixed(2)}`;
});

//function for changing the curser to crosshair when over the image
function changeCursor(){
  var theImage = document.getElementById("pizza-image");
  theImage.style.cursor = 'crosshair'
  }

  document.getElementById("pizza-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get selected toppings
    const selectedToppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked'))
      .map(checkbox => checkbox.value);
  
    // Get selected crust
    const selectedCrust = document.querySelector('input[name="crust"]:checked').value;
  
    // Get selected sauce
    const selectedSauce = document.querySelector('input[name="sauce"]:checked').value;
  
    // Calculate the total price based on selected options
    const totalPrice = calculatePrice(selectedToppings, selectedCrust, selectedSauce);
  
    // Display order confirmation message
    const confirmationMessage = `Thank you for your order!\n\nSelected Toppings: ${selectedToppings.join(", ")}\nCrust: ${selectedCrust}\nSauce: ${selectedSauce}\nTotal Price: $${totalPrice.toFixed(2)}`;
    alert(confirmationMessage);
  
   
  
  });
  
  // Function to calculate the price based on selected options
  function calculatePrice(toppings, crust, sauce) {
    
    // Assign prices for toppings, crust, and sauce
    const toppingPrice = 1.5; // Example price for each topping
    const crustPrice = 10; // Example price for each crust type
    const saucePrice = 0; // Example price for each sauce type
  
    // Calculate the total price based on the number of selected toppings, crust, and sauce
    const totalPrice = (toppingPrice * toppings.length) + crustPrice + saucePrice;
    return totalPrice;
  }
  document.getElementById("pizza-form").addEventListener("change", function(event) {
    // Check if the changed element is a topping checkbox
    if (event.target.name === "toppings") {
      updatePizzaImage();
    }
  });
  
  // Function to update the pizza image based on selected toppings
  function updatePizzaImage() {
    // Get all selected toppings
    const selectedToppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked'))
      .map(checkbox => checkbox.value);
  
    // Create the image URL based on selected toppings
    const imageURL = `pepperoni.jpg?toppings=${selectedToppings.join(",")}`;
  
    // Update the pizza image source
    const pizzaImage = document.getElementById("pizza-image");
    pizzaImage.src = imageURL;
  }
  