import Icon from "./salad.png";

const homePage = () => {
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
  header.innerText = "The Culinary Haven!";
  description.innerText = `Welcome to The Culinary Haven! Your home for exquisite dining, where tradition meets innovation. At The Culinary Haven, we believe in creating memorable experiences with every meal. 

  Explore our menu filled with flavors that will excite your taste buds.`;
  image.src = Icon;

  //   add classList to element
  container.classList.add("container");
  contentContainer.classList.add("header");
  imageContainer.classList.add("image-container");
  //  append elements in div
  content.appendChild(container);
  container.appendChild(contentContainer);
  container.appendChild(imageContainer);
  imageContainer.appendChild(image);
  contentContainer.appendChild(header);
  contentContainer.appendChild(description);
};

export default homePage;
