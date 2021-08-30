function NewTab(url) {
	window.open(url, "_blank");
}

window.onload = function() {
	const title = document.getElementById('title');
	const about = document.getElementById('about');
	let targetX = window.innerWidth / 2;
	let targetY = window.innerHeight / 2;
	let titleX = targetX;
	let titleY = targetY;

	function update() {
		titleX = titleX + (targetX - titleX) * .1;
		titleY = titleY + (targetY - titleY) * .1;
		title.style.left = titleX + 'px';
		title.style.top = titleY + 'px';
		requestAnimationFrame(update);
	}
	update();
	
	window.onmousemove = function(e) {
		targetX = window.innerWidth / 2 + (window.innerWidth / 2 - e.clientX) * .05;
		targetY = window.innerHeight / 2 + (window.innerHeight / 2 - e.clientY) * .05;
	};

	window.onresize = function(e) {
		targetX = window.innerWidth / 2;
		targetY = window.innerHeight / 2;
	}

	title.onclick = function(e) {
		about.scrollIntoView({behavior: 'smooth'});
	}
}