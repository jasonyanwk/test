function showProducts(product) {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    var productCards = document.getElementsByClassName(product);
    for (var j = 0; j < productCards.length; j++) {
       productCards[j].style.display = "block";
    }
}

function showAllProducts() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
    }
}

// Insert the newly added product card at the front of the container
var container = document.querySelector(".container");
var newCard = document.querySelector(".card.jersey:last-child");
container.prepend(newCard);








function addToCart() {
    var badge = document.querySelector('.badge');
    var count = parseInt(badge.textContent); // get products count
  
    count++;
  
    // refresh the count of cart
    badge.textContent = count;
  
    var modal = document.getElementById("successModal");
    modal.style.display = "block";
  
    // time of chat
    setTimeout(function() {
      modal.style.display = "none";
    }, 2000);
  }
  
  function closeModal() {
    // close buy chat 
    var modal = document.getElementById("successModal");
    modal.style.display = "none";
  }







  function openNewPage(event) {
    event.preventDefault(); // Prevent default link behavior
  
    // Create a new div element as the new page
    var newPage = document.createElement('div');
    newPage.setAttribute('id', 'newPage');
  
    // Create a close button element
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function() {
      newPage.remove(); // Remove cart page
    });
  
    //Add close button to cart page
    newPage.appendChild(closeButton);

   // The new page of the shopping cart 
   //(requires 1/3 of the position and does not need to jump to a new page)
    newPage.style.position = 'fixed';
    newPage.style.top = '0';
    newPage.style.right = '0'; 
    newPage.style.width = '33.33%'; // Occupies 1/3 of the width of the current page
    newPage.style.height = '100%';
    newPage.style.backgroundColor = 'rgba(255,255, 255, 0.8)';
    newPage.style.display = 'flex';
    newPage.style.justifyContent = 'center';
    newPage.style.alignItems = 'center';

    //Add the new page to the body element of the current page
    document.body.appendChild(newPage);

  }
  