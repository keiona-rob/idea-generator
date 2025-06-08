const ideas = [
  { text: 'Paint something using only 3 colors.', image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  { text: "Write a haiku about your breakfast.", image: "https://plus.unsplash.com/premium_photo-1661301044600-8856088002c7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGV8ZW58MHx8MHx8fDA%3D"},
  {text: "Take a photo of something ordinary and make it look epic.", image: "light-bulb.png"},
  {text: "Write a 2-minute monologue for a fictional villain.", image: "light-bulb.png"}
]

// addEventListener.button onclick run getRandomFunction and display in card 

// array of cards with picture and ideas, doesn't have to be a card, could just fill the page or be a p tag

// let idea = document.getElementById("newIdea");
//     changeBackgroundButton1.addEventListener("click", () => {
//         idea.innerHTML = getRandomFunction;
//       });

//       if idea is displayed, move to "displayed" array

    

//       function handleShowIdea(e){
//         e.preventDefault();



// newIdea.

// let idea = {
//   <h4></h4>: "Idea #1",
//   <p></p>: "",
//   <img src=: "Renton, WA",
  
// };

// if arrar includes random number remove from array

// const button = document.getElementById('bigButton');

// const displayArea = document.getElementById('ideas-div');


// function getRandomInt(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
// }

// function getRandomIdea(){
//  const randomNumber = getRandomInt(0, ideas.length) 

//  const randomIdea = ideas[ideas.random]
//  displayArea.textContent = randomItem;
// }

// getRandomIdea()


// button.addEventListener('click' , handleShowIdea)


//  function handleShowIdea(e){
//         e.preventDefault();
//   function getRandomInt(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
//   const randomIdea = ideas[ideas.random]

//   displayArea.textContent = handleShowIdea;
// }}




const button = document.getElementById('bigButton');
const displayArea = document.getElementById('ideasDiv');
const itemImage = document.getElementById('itemImage');
const itemWord = document.getElementById('itemWord');



button.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * ideas.length);
  const randomItem = ideas[randomNumber];
  // displayArea.textContent = randomItem;
  itemImage.src = randomItem.image;
itemText.textContent = randomItem.text;

    div = document.getElementById('bottom');
  div.style.display = 'none';
displayArea.style.fontFamily = "savate"

  
});