
//slider section
window.addEventListener("load", () => {

  const slider = document.getElementById("slider");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  const cards = document.querySelectorAll(".card");
  const visibleCards = 1;   
  const gap = 20;

  let index = 0;
  let autoSlide;

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + gap;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  function nextSlide() {
    if (index >= cards.length - visibleCards) {
      index = 0; 
    } else {
      index++;
    }
    updateSlider();
  }

  function prevSlide() {
    if (index <= 0) {
      index = cards.length - visibleCards;
    } else {
      index--;
    }
    updateSlider();
  }

  next.addEventListener("click", () => {
    nextSlide();
    resetAuto();
  });

  prev.addEventListener("click", () => {
    prevSlide();
    resetAuto();
  });

  function startAuto() {
    autoSlide = setInterval(nextSlide, 3000); 
  }

  function resetAuto() {
    clearInterval(autoSlide);
    startAuto();
  }

  startAuto(); 

});


//testimonial section
const testimonials = [
  {
    title: "Placerat feugiat senectus",
    text: "Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.",
    name: "Jane Doe",
    role: "Senior Designer",
    img: "images/User Thumb (6).png"
  },
  {
    title: "Amazing Experience",
    text: "Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.",
    name: "John Smith",
    role: "UI Developer",
    img: "images/User Thumb (7).png"
  },
  {
    title: "Highly Recommended",
    text: "Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.",
    name: "Sarah Lee",
    role: "Product Manager",
    img: "images/User Thumb (8).png"
  }
];

let index = 0;
let autoSlide;

const card = document.getElementById("testimonialCard");

function updateCard() {
  card.innerHTML = `
    <h3>${testimonials[index].title}</h3>
    <p>${testimonials[index].text}</p>
    <div class="user">
      <img src="${testimonials[index].img}">
      <div>
        <h4>${testimonials[index].name}</h4>
        <span>${testimonials[index].role}</span>
      </div>
    </div>
  `;
}

function nextSlide() {
  index = (index + 1) % testimonials.length;
  updateCard();
  resetAuto();
}

function prevSlide() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateCard();
  resetAuto();
}

function startAuto() {
  autoSlide = setInterval(() => {
    index = (index + 1) % testimonials.length;
    updateCard();
  }, 2000);
}

function resetAuto() {
  clearInterval(autoSlide);
  startAuto();
}

updateCard();
startAuto();

//faq section

const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {

    items.forEach(i => {
      if(i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // change icon
  if(navMenu.classList.contains("active")){
    menuToggle.textContent = "✕";
  }else{
    menuToggle.textContent = "☰";
  }
});
  