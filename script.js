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
}

