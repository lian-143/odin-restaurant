import Spaghetti from "./Spaghetti.jpg";
import Steak from "./Steak.jpg";
import Sandwich from "./sandwich.jpg";

const menuPage = () => {
  //   get the id of content
  const content = document.querySelector("#content");
  //  creating element
  const header = document.createElement("h1");
  const contentContainer = document.createElement("div");
  const imageContainer = document.createElement("div");
  const imageContainer1 = document.createElement("div");
  const imageContainer2 = document.createElement("div");
  const imageContainer3 = document.createElement("div");
  const image1 = document.createElement("img");
  const image2 = document.createElement("img");
  const image3 = document.createElement("img");

  //   menu description
  const menuDescriptionContainer = document.createElement("div");
  const spaghettiContainer = document.createElement("div");
  const beefContainer = document.createElement("div");
  const sandwichContainer = document.createElement("div");
  //   title of menu
  const spaghettiTitle = document.createElement("p");
  const beefTitle = document.createElement("p");
  const sandwichTitle = document.createElement("p");
  //   description of menu
  const spaghettiDescription = document.createElement("p");
  const beefDescription = document.createElement("p");
  const sandwichDescription = document.createElement("p");

  // innertext
  header.innerText = "Our Special Menu";
  spaghettiTitle.innerText = "Spaghetti Bolognese";
  spaghettiDescription.innerText =
    "A classic Italian dish featuring rich, savory bolognese sauce served over perfectly cooked pasta.";
  beefTitle.innerText = "Special Beef Steak";
  beefDescription.innerText =
    "Juicy, tender beef steak grilled to perfection and served with savory sides.";
  sandwichTitle.innerText = "Baked Italian Sandwich";
  sandwichDescription.innerText =
    "A warm and delicious sandwich, filled with premium ingredients and baked to perfection.";

  //   add classList to element
  contentContainer.classList.add("content-container");
  header.classList.add("header-menu");

  //   images
  imageContainer.classList.add("image-container");
  imageContainer1.classList.add("images");
  imageContainer2.classList.add("images");
  imageContainer3.classList.add("images");
  image1.src = Spaghetti;
  image2.src = Steak;
  image3.src = Sandwich;

  //   classList of menu description
  menuDescriptionContainer.classList.add("menu-container");
  spaghettiContainer.classList.add("menu-description-container");
  beefContainer.classList.add("menu-description-container");
  sandwichContainer.classList.add("menu-description-container");
  //   classlist of menu title and description
  spaghettiTitle.classList.add("menu-title");
  spaghettiDescription.classList.add("menu-description");
  beefTitle.classList.add("menu-title");
  beefDescription.classList.add("menu-description");
  sandwichTitle.classList.add("menu-title");
  sandwichDescription.classList.add("menu-description");

  //  append elements in div
  content.appendChild(header);
  content.appendChild(contentContainer);
  contentContainer.appendChild(imageContainer);
  imageContainer.appendChild(imageContainer1);
  imageContainer1.appendChild(image1);
  imageContainer.appendChild(imageContainer2);
  imageContainer2.appendChild(image2);
  imageContainer.appendChild(imageContainer3);
  imageContainer3.appendChild(image3);
  contentContainer.appendChild(menuDescriptionContainer);

  //   menu description append
  //   spaghetti
  menuDescriptionContainer.appendChild(spaghettiContainer);
  spaghettiContainer.appendChild(spaghettiTitle);
  spaghettiContainer.appendChild(spaghettiDescription);
  //   beef
  menuDescriptionContainer.appendChild(beefContainer);
  beefContainer.appendChild(beefTitle);
  beefContainer.appendChild(beefDescription);
  // sandwich
  menuDescriptionContainer.appendChild(sandwichContainer);
  sandwichContainer.appendChild(sandwichTitle);
  sandwichContainer.appendChild(sandwichDescription);
};

export default menuPage;
