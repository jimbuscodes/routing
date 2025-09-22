export function changePage(pageName) {
  console.log(`Changing page to ${pageName}`);

  if (pageName === "") {
    $.get("pages/home.html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      Swal.fire({
        title: "PAGE NOT FOUND",
        text: `Page ${pageName} not found.`,
        icon: "error",
      });
    });
  } else {
    $.get("pages/" + pageName + ".html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      Swal.fire({
        title: "PAGE NOT FOUND",
        text: `Page ${pageName} not found.`,
        icon: "error",
      });
    });
  }
}
