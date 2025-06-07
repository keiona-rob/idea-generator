const ideas = [
  "Paint something using only 3 colors.",
  "Write a haiku about your breakfast.",
  "Take a photo of something ordinary and make it look epic.",
  "Write a 2-minute monologue for a fictional villain."
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



button.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * ideas.length);
  const randomItem = ideas[randomNumber];
  displayArea.textContent = randomItem;
    div = document.getElementById('bottom');
  div.style.display = 'none';
   button = document.getElementById('bigButton');
  button.style.display = 'block';
  
  
});