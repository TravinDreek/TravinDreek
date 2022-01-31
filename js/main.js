window.onload = function() {
	const title = document.getElementById('title');
	const bgpiece = document.getElementById('bg');
	let mouseX = window.innerWidth / 2;
	let mouseY = window.innerHeight / 2;
	let titleX = mouseX;
	let titleY = mouseY;
	let bgX = mouseX;
	let bgY = mouseY;

	function update() {
		titleX += ((mouseX - window.innerWidth / 2) * .05 + window.innerWidth / 2 - titleX) * 0.1;
		titleY += ((mouseY - window.innerHeight / 2) * .05 + window.innerHeight / 2 - titleY) * 0.1;
		bgX += ((mouseX - window.innerWidth / 2) * .03 + window.innerWidth / 2 - bgX) * 0.1;
		bgY += ((mouseY - window.innerHeight / 2) * .03 + window.innerHeight / 2 - bgY) * 0.1;
		title.style.left = titleX + 'px';
		title.style.top = titleY + 'px';
		bgpiece.style.left = bgX + 'px';
		bgpiece.style.top = bgY + 'px';
		requestAnimationFrame(update);
	}
	update();

	window.onmousemove = function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	};

	window.onresize = function(e) {
		mouseX = window.innerWidth / 2;
		mouseY = window.innerHeight / 2;
	}
}