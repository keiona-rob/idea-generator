# idea-generator
Build a “Stuck? Try this!” webpage—a simple, beautiful, creative idea generator. The idea is to make a page someone could visit when they’re feeling creatively blocked, bored, or uninspired.

## Part 1: Structure the Idea Generator (HTML + Semantics)

### Create a single-page HTML layout that includes:

- header: Site name/logo and nav links (e.g., “Home”, “How It Works”, “About”)

- hero: A bold heading and a subheading that explains the purpose (“Feeling stuck? Here’s your creative spark.”)

**Main Content:**

- A **>section<** or **>article<** with placeholder idea(s). Use **>h2<** + a paragraph to describe the type of ideas you’ll eventually show.

- Maybe a few prewritten examples of ideas (inside **>div<s** or **>ul<**) so you have structure to replace with JS later.

- CTA section: A big friendly button that doesn’t do anything yet—this will be wired up with JavaScript next week.

- footer: Your name or brand + copyright

## Part 2: Style the Experience (CSS + Flexbox + Box Model)
Your Task:
- Make your site visually engaging and clean to navigate.

- **Link a CSS file** and style it from scratch.

Show off:

- Box model with padding, margin, border

- Fixed widths or responsive containers

- RGBA color for transparent backgrounds (use it in your hero or CTA)

- A reset/override of browser default styles (e.g., normalize **>ul<**, style your **>button<**)

- **Use Flexbox** in at least one section:

- Horizontally align nav links

- Vertically center your hero content

- Lay out example ideas side by side

### Submission
- Deploy on GitHub Pages and grab the link.

Submit:

- GitHub repo link

- GitHub Pages link


💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡



Bring Your Idea Generator to Life with JavaScript
Objective
Use JavaScript to add interactivity to your previously built project.

Practice using arrays, DOM manipulation, and event listeners.

Lay the groundwork for more advanced features like animations and state next week.

The Challenge
Your “Stuck? Try this!” page needs a brain! This week, you’ll add JavaScript so that when a user clicks the big button, a random creative idea appears.

Part 1: Setup & Data
Tasks
Create a new script.js file and link it to your index.html.

Store your idea data in one of the following ways:

As a JavaScript array inside script.js

OR in a separate ideas.json file and fetch it

Example data format (in JS):

const ideas = [
  "Paint something using only 3 colors.",
  "Write a haiku about your breakfast.",
  "Take a photo of something ordinary and make it look epic.",
  "Write a 2-minute monologue for a fictional villain."
];
Part 2: Make It Interactive
Tasks
Add a click event listener to the CTA button.

When clicked:

Pick a random idea from your list

Display it inside a designated container on the page (e.g., an empty <div id="idea-box">)

 
Part 3: Add Some Flair (Optional but Encouraged)
Pick one or more enhancements:

Add a fade-in or slide-in animation when a new idea appears

Prevent repeats until all ideas have been shown

Include a “Save this idea” or “❤️” button to favorite ideas

Store favorites in localStorage

✅ Submission Checklist
Your button shows a new idea when clicked

You used JavaScript (no hardcoded idea-swapping in HTML)

Your project still looks clean and styled

You used Git properly with ACP commits

Submission
Submit:

GitHub repo link

GitHub Pages live link





