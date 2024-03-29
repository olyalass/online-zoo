const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
const background = document.querySelector(".dark-background");

function menu(burgerButton, burgerMenu, background) {
  burgerButton.addEventListener("click", () => {
      if (burgerButton.classList.contains("burger-button")) {
        burgerMenu.style.display = "block";
        burgerButton.classList.remove("burger-button");
        burgerButton.classList.add("cross-button");
        background.style.display = "block";
      } else {
        burgerMenu.style.display = "none";
        burgerButton.classList.remove("cross-button");
        burgerButton.classList.add("burger-button");
        background.style.display = "none";
      }
  });
  background.addEventListener("click", () => {
      if (burgerButton.classList.contains("cross-button")) {
        burgerMenu.style.display = "none";
        burgerButton.classList.remove("cross-button");
        burgerButton.classList.add("burger-button");
        background.style.display = "none";
      }
  });
}

menu(burgerButton, burgerMenu, background);


const buttons = document.querySelectorAll(".button-area");
const number = document.querySelector(".input-price");
const len  = buttons.length;
// const basicActive = buttons[2];
// basicActive.classList.add("active-point");

number.defaultValue = "100";

let prevValue = "100";

const valueButtonsElements = {};

buttons.forEach(button => {
    const value = button.dataset.price;
    valueButtonsElements[value] = button;
})


function deleteActive(activeNow, number, priceRange) {
    let isEqual = false;
    
    for (let index of priceRange) {
        if (number.value===String(index)) {
            isEqual = true;
            break;
        }};
    
    if (isEqual === false && activeNow){
        activeNow.classList.remove("active-point");
    }
};

function makeActive(activeElement, numberInputValue) {
    const element = valueButtonsElements[numberInputValue];

    if (element) {
        if (activeElement) {
            activeElement.classList.remove("active-point");
        }

        element.classList.add("active-point");
    }
}


function valueCheck (number) {
    
    number.oninput = function (event) {
        const currentValue = event.target.value;

        if (currentValue.length < 5) {
            prevValue = currentValue;
        }

        number.value = prevValue;
        const active = document.querySelector(".active-point");
        const isMediumScreen = window.matchMedia("(max-width: 1200px)").matches;
        const isSmallScreen = window.matchMedia("(max-width: 950px)").matches;
        let priceRange = [5000, 2000, 1000, 500, 250, 100, 50, 25];

        if (isMediumScreen) {
            priceRange.splice(0, 1);
        }
        else if (isSmallScreen) {
            priceRange.splice(0, 3);
        }
        
        deleteActive(active, number, priceRange);
        makeActive(active, number.value)
    };
};

function pick (button, number) {
    let buttonValue = button.dataset.price;
    

    button.addEventListener("click", () => {
        const active = document.querySelector(".active-point");
        active.classList.remove("active-point");
        button.classList.add("active-point");
        number.value = buttonValue;
    });

    
};


for (let button of buttons) { pick (button, number)};
valueCheck (number);