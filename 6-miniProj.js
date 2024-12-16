//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
// const heading = document.querySelector("h1");
const spans = document.querySelector("span");
const arr = ["red", "green", "blue", "black", "yellow", "brown"];
setInterval(() => {
  const random1 = Math.floor(Math.random() * arr.length);
  spans.style.color = arr[random1];
}, 1000);
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red
const listItems = document.querySelectorAll("ul li");
listItems.forEach((li) => {
  if (li.textContent.includes("Done")) {
    li.style.backgroundColor = "green";
  } else if (li.textContent.includes("Ongoing")) {
    li.style.backgroundColor = "yellow";
  } else if (li.textContent.includes("Coming")) {
    li.style.backgroundColor = "red";
  }
});
