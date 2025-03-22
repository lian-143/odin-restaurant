import homePage from "./homepage";
import aboutPage from "./about";
import menuPage from "./menu";

const createTabs = () => {
  //   get the id of all buttons
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const menu = document.querySelector("#menu");

  home.addEventListener("click", () => {
    clearContents();
    homePage();
  });

  about.addEventListener("click", () => {
    clearContents();
    aboutPage();
  });

  menu.addEventListener("click", () => {
    clearContents();
    menuPage();
  });
};

function clearContents() {
  const content = document.querySelector("#content");

  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
}

export default createTabs;
