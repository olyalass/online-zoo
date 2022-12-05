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

const exit = document.querySelector(".popup-exit");
const miniCards = document.querySelectorAll(".testimonial_card");




function popUpOpen (card, background, exit) {
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
    if (isSmallScreen) {
        card.addEventListener("click", () => {
            
            if (card.classList.contains("testimonial_card")) {
                card.classList.remove("testimonial_card");
                card.classList.add("popup-border");
                background.style.display = "block";
                exit.style.display = "block";
                exit.style.zIndex = "19";
                console.log('open');
            }
        });
    };
};

function close(card) {
    
        card.classList.remove("popup-border");
        card.classList.add("testimonial_card");
        card.style.display = "block";
        background.style.display = "none";
        exit.style.display = "none";
        console.log("close");
    
}

function popUpClose (card, exit, background) {
    exit.addEventListener("click", () => {
        close(card);
    });
    background.addEventListener("click", () => {
        close(card);
    });
};

for (let card of miniCards) {
    popUpOpen (card, background, exit);
    popUpClose (card, exit, background);};

    const containerElement = document.querySelector(".pets");
const leftArrowElement = document.querySelector(".arrow-button.left");
const rightArrowElement = document.querySelector(".arrow-button.right");

let canUseButton = true;

const animals = [
  {
    src: "../../assets/images/pandas.jpg",
    title: "giant Pandas",
    description: "Native to Southwest China",
    hiddenText: "The giant panda lives in a few mountain ranges in central China, mainly in Sichuan, and also in neighbouring Shaanxi and Gansu. As a result of farming, deforestation, and other development, the giant panda has been driven out of the lowland areas where it once lived.",
    type: "plant",
  },
  {
    src: "../../assets/images/eagle.jpg",
    title: "Eagles",
    description: "Native to South America",
    hiddenText: "The beak is typically heavier than that of most other birds of prey. Eagles' eyes are extremely powerful. It is estimated that the martial eagle, whose eyes are more than two times larger than the human eye, has a visual acuity up to 8 times that of humans.",
    type: "meat",
  },
  {
    src: "../../assets/images/gorilla.jpg",
    title: "Gorillas",
    description: "Native to Congo",
    hiddenText: "Gorillas are the largest living primates, reaching heights between 1.25 and 1.8 metres, weights between 100 and 270 kg, and arm spans up to 2.6 metres, depending on species and sex. They tend to live in troops, with the leader being called a silverback.",
    type: "plant",
  },
  {
    src: "../../assets/images/sloth.jpg",
    title: "Two-toed Sloth",
    description: "Mesoamerica, South America",
    hiddenText: "Two-toed sloths spend most of their lives hanging upside down from trees. They cannot walk, so they pull hand-over-hand to move around, which is at an extremely slow rate. Being predominantly nocturnal, their fur, which grows greenish algae to blend in, is their main source of protection.",
    type: "plant",
  },
  {
    src: "../../assets/images/cheetas.jpg",
    title: "cheetahs",
    description: "Native to Africa",
    hiddenText: "The cheetah lives in three main social groups: females and their cubs, male coalitions, and solitary males. While females lead a nomadic life searching for prey in large home ranges, males are more sedentary and instead establish much smaller territories in areas with plentiful prey and access to females.",
    type: "meat",
  },
  {
    src: "../../assets/images/penguin.jpg",
    title: "Penguins",
    description: "Native to Antarctica",
    hiddenText: "Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming. Most penguins feed on krill, fish, squid and other forms of sea life which they catch with their bills and swallow it whole while swimming. A penguin has a spiny tongue and powerful jaws to grip slippery prey.",
    type: "meat",
  },
  {
    src: "../../assets/images/wolf.jpg",
    title: "Wolf",
    description: "Native to Antarctica",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "meat",
  },
  {
    src: "../../assets/images/aligator.jpg",
    title: "Aligator",
    description: "Native to Antarctica",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "meat",
  },
  {
    src: "../../assets/images/giraff.jpg",
    title: "Giraffe",
    description: "Mesoamerica, South America",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "plant",
  },
  {
    src: "../../assets/images/monkey.jpg",
    title: "Monkey",
    description: "Mesoamerica, South America",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "plant",
  },
  {
    src: "../../assets/images/fox.jpg",
    title: "Red Fox",
    description: "Native to Antarctica",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "meat",
  },
  {
    src: "../../assets/images/wombat.jpg",
    title: "Wombat",
    description: "Mesoamerica, South America",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "plant",
  },
  {
    src: "../../assets/images/zebra.jpg",
    title: "Zebra",
    description: "Mesoamerica, South America",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "plant",
  },
  {
    src: "../../assets/images/bear.jpg",
    title: "Bear",
    description: "Mesoamerica, South America",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "meat",
  },
  {
    src: "../../assets/images/alpaca.jpg",
    title: "Alpaca",
    description: "Mesoamerica, South America",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "plant",
  },
  {
    src: "../../assets/images/manoel.jpg",
    title: "Manul",
    description: "Mesoamerica, South America",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "meat",
  },
  {
    src: "../../assets/images/koala.jpg",
    title: "Koala",
    description: "Mesoamerica, South America",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "plant",
  },
  {
    src: "../../assets/images/racoon.jpg",
    title: "Racoon",
    description: "Mesoamerica, South America",
    hiddenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "meat",
  },
];

const animalsIndexes = animals.map((_ , i) => i);

let prevSlideIndexes = [];

function createSliderCard({ src, description, title, type, hiddenText }) {
  return `
    <div class="card">
        <div class="img-barrier"><img class="card-img" src="${src}" /></div>
        <div class="card-description">
        <p class="card-title"><b>${title}</b></p>
        <p class="card-text">${description}</p>
        <p class="card-hidden-text">${hiddenText}</p>
        ${
          type === "plant"
            ? `
                <div class="banana-bamboo">
                    <img src="../../assets/images/banana-bamboo_icon.png" />
                </div>
            `
            : `
                <div class="meat-fish">
                    <img src="../../assets/images/meet-fish_icon.png" />
                </div>
            `
        }
        </div>
    </div>
    `;
}

const animalsCardsElements = animals.map(createSliderCard)

function shuffle(length) {
    const result = [];
  
    while (result.length < length) {
      const number = Math.floor(Math.random() * length);
  
      if (!result.includes(number)) {
        result.push(number);
      }
    }
  
    return result;
  }
  
  function shuffleArray(array) {
      const shuffledIndexes = shuffle(array.length);
      return shuffledIndexes.map(index => array[index]);
  }

function createSlideElement(animalsCardsElements) {
    const frameElement = document.createElement("div");
    frameElement.classList.add("frame");

    animalsCardsElements.forEach((animal) => {
        frameElement.insertAdjacentHTML("beforeend", animal);
    });

    return frameElement;
}

function createNewSlide(itemsPerSlide) {
    const notUsedIndexes = animalsIndexes.filter(index => !prevSlideIndexes.includes(index));
    const slideIndexes = shuffleArray(notUsedIndexes).slice(0, itemsPerSlide);

    prevSlideIndexes = slideIndexes;

    return createSlideElement(slideIndexes.map(index => animalsCardsElements[index]))
}

function moveFrame(currentFrameElement, nextFrameElement, direction) {
  containerElement.append(nextFrameElement);

  if (direction === "right") {
    nextFrameElement.classList.add("animation-right-to-center");
    currentFrameElement.classList.add("animation-center-to-left");
  } else {
    nextFrameElement.classList.add("animation-left-to-center");
    currentFrameElement.classList.add("animation-center-to-right");
  }

  setTimeout(() => {
    currentFrameElement.classList.remove("animation-right-to-center");
    currentFrameElement.classList.remove("animation-center-to-left");
    currentFrameElement.classList.remove("animation-left-to-center");
    currentFrameElement.classList.remove("animation-center-to-right");
    nextFrameElement.classList.remove("animation-right-to-center");
    nextFrameElement.classList.remove("animation-center-to-left");
    nextFrameElement.classList.remove("animation-left-to-center");
    nextFrameElement.classList.remove("animation-center-to-right");
    currentFrameElement.remove();
    canUseButton = true;
  }, 1000);

  return nextFrameElement;
}

function slider() {
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
    const itemsPerSlide = isSmallScreen ? 4 : 6;

    let currentSlide = createNewSlide(itemsPerSlide);

    containerElement.append(currentSlide);

    leftArrowElement.addEventListener("click", () => {
        if (canUseButton) {
            canUseButton = false;
            currentSlide = moveFrame(currentSlide, createNewSlide(itemsPerSlide), "left");
        }
    })

    rightArrowElement.addEventListener("click", () => {
        if (canUseButton) {
            canUseButton = false;
            currentSlide = moveFrame(currentSlide, createNewSlide(itemsPerSlide), "right");
        }
    })
}

slider();

const range = document.querySelector('.t-slider');
const slide = document.querySelector(".testimonials__slider");

function tSlide (range, slide) {
    
    range.addEventListener('input', (event) => {
        let value = event.target.value;
        const isSmallScreen = window.matchMedia("(max-width: 1000px)").matches;
        if (isSmallScreen) {
            value=value*320;}
        else {
            value=value*250;
        }
        slide.style.transform=`translateX(-${value}px)`;
        
    });
};

tSlide (range, slide);