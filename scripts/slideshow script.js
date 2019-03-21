var slideIndex = 1;
var slides = document.getElementsByClassName("slide-img");
first();
setTimeout(slideShow, 4500);

// Helper function for the first time the script is called on the page
// Displays the first slide without an animation
function first() {
	var i;
	// Hide all the images and clear their animations
	for (i = 0; i < slides.length; i++) {
		slides[i].style.visibility = "hidden";
		slides[i].className = slides[i].className.replace(" fade-in", "");
		slides[i].className = slides[i].className.replace(" fade-out", "");
	}

	// Make the current image visible
	slides[slideIndex-1].style.visibility = "visible";
}

// Plays a slideshow of the labeled slide images with image transitions
function slideShow() {
	var i;

	// Clear all images of old fade in animations
	for (i = 0; i < slides.length; i++) {
		slides[i].className = slides[i].className.replace(" fade-in", "");
	}

	// Add the fade out animation to the current image
	slides[slideIndex-1].className += " fade-out";

	// Increment the slideshow
	slideIndex++;

	// Loop back to the first image after reaching the last image
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	// Make the current image visible and add the fade in animation
	slides[slideIndex-1].style.visibility = "visible";
	slides[slideIndex-1].className += " fade-in";

	// Make all the images before the current image hidden
	for (i = 0; i < slideIndex-1; i++) {
		slides[i].style.visibility = "hidden";
	}

	// Make all the images after the current image hidden
	for (i = slideIndex; i < slides.length; i++) {
		slides[i].style.visibility = "hidden";
	}

	// Clear all images of old fade out animations
	for (i = 0; i < slides.length; i++) {
		slides[i].className = slides[i].className.replace(" fade-out", "");
	}

	// Change the image every 4.5 seconds
	setTimeout(slideShow, 4500);
}