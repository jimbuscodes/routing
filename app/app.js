const homeContent = `<h1>HOME PAGE</h1>`;
const aboutContent = `<h1>ABOUT PAGE</h1>`;
const productsContent = `<h1>PRODUCTS PAGE</h1>`;
const contactContent = `<h1>CONTACT PAGE</h1>`;

function initListeners() {}

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageContent = pageID + "Content";
  $("#app").html(eval(pageContent));
  console.log("ROUTING TO: " + pageID);
}

function initRouting() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initRouting();
  initListeners();
});
