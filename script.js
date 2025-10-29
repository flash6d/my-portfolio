// A simple welcome message
console.log("Welcome to my first interactive website!");

// Example: when the button is clicked
function contactMe() {
  const name = prompt("Hi there! What’s your name?");
  if (name) {
    alert(`Nice to meet you, ${name}! I’ll be in touch soon 😊`);
  } else {
    alert("No worries! Maybe next time 👋");
  }
}// Fade-in animation when scrolling
const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", revealSection);

// Run on load
revealSection();


