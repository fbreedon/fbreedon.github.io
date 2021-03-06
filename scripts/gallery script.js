// Initialize variables for the html elements
var imgIndex = 1;
var gallery = document.getElementsByClassName("gallery-container")[0];
var grid = document.getElementsByClassName("gallery-grid-container")[0];
var meta = document.getElementsByClassName("meta-panel")[0];
var x = document.getElementsByClassName("gallery-img");
var info = document.getElementsByClassName("info");
var curr = gallery;

// Listen for screen size changes and run the script when necessary
var size = window.matchMedia("(max-width: 800px)");
scriptListener(size);
size.addListener(scriptListener);

// Display the images depending on screen size
function scriptListener(size) {
	switch (size.matches) {
		case true:
			mobileImgs();
			break;
		case false:
			showImgs(imgIndex);
			break;
	}
}

// Take in an integer and increase the image index that many times
// Used to scroll through the images with timed animations
function plusImg(n) {
	fadeOut();
	fadeIn(imgIndex += n);
	showInfo();
	setTimeout(hideImgs, 200);
}

// Take in an integer and set the image index equal to it
// Used to jump to an image
function currentImg(n) {
	curr = gallery;
	showImgs(imgIndex = n);
}

// Show the responsive image grid when clicking on the center control
// overlay and hide the image gallery
function showGrid() {
	curr = grid;
	gallery.style.display = "none";
	meta.style.display = "none";
	grid.style.display = "block";
}

// Take in an integer for the image index. Set the image index, clear all
// the images and infos, then show the correct image and info by the index
function showImgs(n) {
	var i;

	// Display the current view
	if (curr === gallery) {
		gallery.style.display = "block";
		meta.style.display = "block";
		grid.style.display = "none";
	} else if (curr === grid) {
		gallery.style.display = "none";
		meta.style.display = "none";
		grid.style.display = "block";
	}

	// Loop back to the first image when clicking next on the last image
	if (n > x.length) {imgIndex = 1;}

	// Loop forward to the last image when clicking prev on the first image
	if (n < 1) {imgIndex = x.length;}

	// Hide all the images and clear their animations
	for (i = 0; i < x.length; i++) {
		x[i].style.visibility = "hidden";
		x[i].className = x[i].className.replace(" fade-in", "");
		x[i].className = x[i].className.replace(" fade-out", "");
	}

	// Call the showInfo function to display the image's information
	showInfo();

	// Make the current image visible
	x[imgIndex-1].style.visibility = "visible";
}

// Helper function to display the current image's meta information
function showInfo () {
	// Set the display value for each info to "none"
	if(info.length > 0) {
		for (i = 0; i < info.length; i++) {
			info[i].style.display = "none";
		}
	}
	
	// Check that there is info, then display the current image's info
	if(info.length > 0) {info[imgIndex-1].style.display = "block";}
}

// Undo the showImgs and showGrid functions
// Used to get rid of the gallery when switching to mobile from desktop
function mobileImgs() {
	var i;

	// Set the gallery container to display if it has been hidden by the grid
	// and hide the grid
	if(gallery.style.display === "none") {
		gallery.style.display = "block";
		grid.style.display = "none";
	}
	
	// Always hide the meta panel
	meta.style.display = "none";

	// Make all the images visible for the mobile view
	for (i = 0; i < x.length; i++) {
		x[i].style.visibility = "visible";
	}
}

// Animation helper function for plusImg(n)
// Makes the current image fade out for the new image
function fadeOut() {
	// Clear all images of old fade in animations
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" fade-in", "");
	}

	// Add the fade out animation to the current image
	x[imgIndex-1].className += " fade-out";
}

// Animation helper function for plusImg(n)
// Determines the image index and makes the new image fade in
function fadeIn(n) {
	// Loop back to the first image when clicking next on the last image
	if (n > x.length) {imgIndex = 1;}

	// Loop forward to the last image when clicking prev on the first image
	if (n < 1) {imgIndex = x.length;}

	// Make the current image visible and add the fade in animation
	x[imgIndex-1].style.visibility = "visible";
	x[imgIndex-1].className += " fade-in";
}

// Animation helper function for plusImg(n)
// After the animations are done, hide all images except the current one,
// and clear all images of old fade out animations
function hideImgs() {
	var i;

	// Make all the images before the current image hidden
	for (i = 0; i < imgIndex-1; i++) {
		x[i].style.visibility = "hidden";
	}

	// Make all the images after the current image hidden
	for (i = imgIndex; i < x.length; i++) {
		x[i].style.visibility = "hidden";
	}

	// Clear all images of old fade out animations
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" fade-out", "");
	}
}