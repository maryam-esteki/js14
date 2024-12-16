//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops
const image = document.querySelectorAll("img")

for (let i = 0; i < image.length; i++) {
    if(i%2===0){
        image[i].style.border = "2px solid red"
    }else if(i % 2 !==0 ){
        image[i].style.border = "2px dashed green"
    }
    
}