//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
const firstP = document.querySelector("p");
console.log(firstP);
//todo3. Get each of the paragraph using document.querySelector(#id)
const id = document.querySelector("#para");
console.log(id);
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
const tagAll = document.querySelectorAll("p");
console.log(tagAll);
//todo5. Loop through the nodeList and get the text content of each paragraph
// for (let i = 0; i < tagAll.length; i++) {
//     console.log(tagAll[i].textContent)
// }
//todo6. Set a text content to the fourth paragraph
document.querySelector(".param").textContent = "emshi shoshe rebak relilone";
//todo7. Set id and class attribute for all the paragraphs using different methods
tagAll.forEach((para, index) => {
  para.setAttribute("id", `para-${index + 1}`);
  para.className = `class-${index + 1}`;
  // para.setAttribute("class",`para-${index+1}`)
});
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
firstP.style.backgroundColor = "rgb(0,0,0)";
firstP.style.fontSize = "2rem";

//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

for (let i = 0; i < tagAll.length; i++) {
  if (i === 0 || i === 2) {
    tagAll[i].style.color = "rgb(0,150,0)";
  } else if (i === 1 || i === 3) {
    tagAll[i].style.color = "rgb(150,0,0)";
  }
}
