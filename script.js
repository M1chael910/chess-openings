// This changes the images back and fourth when the user clicks the images

const myImage = document.querySelector("img#heading-logo");
const myButton = document.querySelector("button");

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
