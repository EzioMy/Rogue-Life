const isLogged =
  new URLSearchParams(window.location.search).get("isLogged") === "true";

if (isLogged) {
  fetch("modules/header-logged.html")
  .then((response) => {
    if (!response.ok) throw new Error("Header failed to load");
    return response.text();
  })
  .then((data) => {
    console.log("Header HTML:", data); // ✅ See what’s being returned
    document.getElementById("header").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading header:", error);
  });

} else {
  fetch("modules/header.html")
    .then((response) => {
      if (!response.ok) throw new Error("Header failed to load");
      return response.text();
    })
    .then((data) => {
      console.log("Header HTML:", data); // ✅ See what’s being returned
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
}
