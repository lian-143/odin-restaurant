import Restaurant from "./restaurant.jpg";

const aboutPage = () => {
  //   get the id of content
  const content = document.querySelector("#content");
  //  creating element
  const container = document.createElement("div");
  const contentContainer = document.createElement("div");
  const imageContainer = document.createElement("div");
  const description = document.createElement("p");
  const header = document.createElement("h1");
  const image = document.createElement("img");

  // innertext of element
  header.innerText = "About Our Restaurant";
  description.innerText = `At The Culinary Haven, we believe dining is an experience to remember. Our talented chefs craft each dish with passion, using only the freshest, locally-sourced ingredients to create flavors that will delight your senses.

We are committed to sustainability and supporting local farmers, ensuring that every meal is both delicious and responsible. Whether you're here for a special occasion or a casual meal, we promise an unforgettable dining experience with exceptional service and a warm atmosphere.

Join us today and enjoy a culinary journey like no other.`;
  image.src = Restaurant;

  //   add classList to element
  container.classList.add("container");
  contentContainer.classList.add("header");
  imageContainer.classList.add("restaurant");
  //  append elements in div
  content.appendChild(container);
  container.appendChild(contentContainer);
  container.appendChild(imageContainer);
  imageContainer.appendChild(image);
  contentContainer.appendChild(header);
  contentContainer.appendChild(description);
};

export default aboutPage;
