function initListeners() {}

function route() {
  let hashTag = window.location.hash;
  console.log(hashTag);
}

function initRouting() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initRouting();
  initListeners();
});
