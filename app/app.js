function initListeners() {}

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageContent = pageID + "Content";
  console.log("ROUTING TO: " + pageID);

  if (pageID === "") {
    $.get("pages/home.html", (data) => {
      $("#app").html(data);
    });
  } else {
    $.get("pages/" + pageID + ".html", (data) => {
      $("#app").html(data);
    });
  }
}

function initRouting() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initRouting();
  initListeners();
});
