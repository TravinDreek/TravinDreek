function NewTab(url) {
	window.open(url, "_blank");
}

window.onload = function() {
	const title = document.getElementById('title');
	const about = document.getElementById('about');
	const backbtn = document.getElementById('backbtn');
	const socialsnav = document.getElementById('socialsnav');
	let targetX = window.innerWidth / 2;
	let targetY = window.innerHeight / 2;
	
	let titleX = targetX;
	let titleY = targetY;

	let aboutPage = false;
	
	function update() {
		titleX = titleX + (targetX - titleX) * .1;
		titleY = titleY + (targetY - titleY) * .1;
		title.style.left = titleX + "px";
		title.style.top = titleY + "px";
		requestAnimationFrame(update);
	}
	update();
	
	window.onmousemove = function(e) {
		if(!aboutPage) {
			targetX = window.innerWidth / 2 + (window.innerWidth / 2 - e.clientX) * 0.05;
			targetY = window.innerHeight / 2 + (window.innerHeight / 2 - e.clientY) * 0.05;
		}
	};

	window.onresize = function(e) {
		if(!aboutPage) {
			targetX = window.innerWidth / 2;
			targetY = window.innerHeight / 2;
		}
	}

	title.onclick = function() {
		if(!aboutPage) {
			targetY = 0 - title.offsetHeight;
			about.style.top = '0';
			socialsnav.style.opacity = '0';
			aboutPage = true;
		}
	}

	backbtn.onclick = function() {
		if(aboutPage) {
			targetY = window.innerHeight / 2;
			about.style.top = '100%';
			socialsnav.style.opacity = '1';
			aboutPage = false;
		}
	}
}