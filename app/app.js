function initListeners() {}

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID === "") {
    $.get("pages/home.html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      Swal.fire({
        title: "PAGE NOT FOUND",
        text: "That thing is still around?",
        icon: "error",
      });
    });
  } else {
    $.get("pages/" + pageID + ".html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      Swal.fire({
        title: "PAGE NOT FOUND",
        text: `Page ${pageID} not found.`,
        icon: "error",
      });
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
