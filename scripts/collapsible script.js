var collapse = document.getElementsByClassName("collapsible");
var viewport = window.innerWidth;
var i;

// For each element with the collapsible class, listen for one to be
// clicked, then toggle it to open or close
for (i = 0; i < collapse.length; i++) {
	// Listen for one of the collapsible elements to be clicked
  	collapse[i].addEventListener("click", function() {
  		// Set the element to be active or inactive
    	//this.classList.toggle("active");
    	// Get the element's next sibling, which are the sub-sidebar sections
    	var content = this.nextElementSibling;
    	// If the links are already displayed, hide them
    	if (content.style.maxHeight) {
    	  	content.style.maxHeight = null;
    	// Otherwise, show the links
    	} else {
      		content.style.maxHeight = content.scrollHeight + "px";
    	}
  	});
}

// Check that the viewport is not mobile
if (viewport >= 800) {
  // Get the collapsible with the default id and click it so it's open by default
  document.getElementById("default").click();
}