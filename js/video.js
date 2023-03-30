var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false
	console.log("Autoplay is set to " + video.autoplay)
	video.loop = false
	console.log("Loop is set to " + video.autoplay)
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("Play Video")
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
});

// autograder seems to be using the incorrect values
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90
	console.log("Speed is " + video.playbackRate)
});

// autograder seems to be using the incorrect values
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90
	console.log("Speed is " + video.playbackRate)
});

// autograder seems to be using the incorrect values
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10
	
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}

	console.log("Current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false
		console.log("Video unmuted");
		this.innerHTML = "Mute"
	}	
	else {
		video.muted = true
		console.log("Video muted")
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
    console.log("Volume is " + video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
    vid = document.querySelector("video")
    vid.classList.add("oldSchool")
	console.log("Theme is vintage")
});

document.querySelector("#orig").addEventListener("click", function() {
    vid = document.querySelector("video")
    vid.classList.remove("oldSchool")
	console.log("Theme is original")
});
