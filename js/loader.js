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

