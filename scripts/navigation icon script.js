function clickIcon() {
	// Get the sidebar navigation element by its id
  var nav = document.getElementById("navigation-id");
  // If the navigation is closed, open it
  if (nav.className === "sidebar-navigation" ||
  	  nav.className === "homepage-navigation") {
    nav.className += " responsive";
  // Otherwise, close it
  } else if (nav.className === "sidebar-navigation responsive") {
    nav.className = "sidebar-navigation";
  } else if (nav.className === "homepage-navigation responsive") {
    nav.className = "homepage-navigation";
  }
}