const address = document.getElementById("address");
const view = document.getElementById("view");

address.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let url = address.value.trim();

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    view.loadURL(url);
  }
});

// Update address bar when navigation happens
view.addEventListener("did-navigate", (e) => {
  address.value = e.url;
});
