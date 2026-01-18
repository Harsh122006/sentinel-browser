const address = document.getElementById("address");
const view = document.getElementById("view");

address.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let url = address.value.trim();
    if (!url.startsWith("http")) {
      url = "https://" + url;
    }
    view.src = url;
  }
});
