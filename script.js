// This changes the images back and forth when the user clicks the images

const myImage = document.querySelector("img#heading-logo");


//TODO
//Setup buttons to cycle through images

// const next_move_btn = document.querySelector("next_move_btn");
// const prev_move_btn = document.querySelector("prev_move_btn");
// var imageArray = [];
// next_move_btn.onclick = () => {

// };

myImage.onclick = () => {
  // This is an anonymous function
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/chess-logo.jpeg") {
    myImage.setAttribute("src", "images/Chess-img2.jpeg");
  } else {
    myImage.setAttribute("src", "images/chess-logo.jpeg");
    myImage.setAttribute("height", "300");
    myImage.setAttribute("width", "300");
  }
};
