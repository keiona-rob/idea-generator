const ideas = [
  { text: 'Paint something using only 3 colors.', image: "https://images.unsplash.com/photo-1730212239673-e404f5005317?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxwYWludHxlbnwwfDJ8MHx8fDA%3D"},
  { text: "Write a haiku about your breakfast.", image: "https://images.unsplash.com/photo-1585693907431-69d82bdced6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGUlMjAlMjBicmVha2Zhc3R8ZW58MHwyfDB8fHww"},
  {text: "Take a pic of something regular and make it look epic.", image: "https://images.unsplash.com/photo-1489423561257-34e31d8836b2?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {text: "Write a 2-minute monologue for a fictional villain.", image: "https://images.unsplash.com/photo-1627487603068-289eb7ebf5c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdyaXRlJTIwdmlsbGFufGVufDB8MnwwfHx8MA%3D%3D"}
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
displayArea.style.fontFamily = "savate";
displayArea.style.color = "#cd7ed3";
displayArea.style.background = "rgb(64, 150, 229, 0.2)";
displayArea.style.filter = "drop-shadow(5px 5px 3px black)";
document.querySelector('.animateMe').classList.add('animate__fadeIn', 'animate__animated');
    setTimeout(function() {
        document.querySelector('.animateMe').classList.remove('animate__fadeIn', 'animate__animated');
    }, 1000);;
  
});

