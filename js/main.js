function newTab(url) {
	window.open(url, "_blank");
}

window.onload = function() {
	const title = document.getElementById('title');
	const about = document.getElementById('about');
	let mouseX = window.innerWidth / 2;
	let mouseY = window.innerHeight / 2;

	const elemPara = [
		{
			element: title,
			x: 0,
			y: 0,
			z: 10
		}
	];

	function update() {
		for(i in elemPara) {
			elemPara[i].element.style.left = elemPara[i].element.offsetLeft - (elemPara[i].element.offsetLeft - window.innerWidth / 2 + (mouseX - window.innerWidth / 2) * 0.01 * elemPara[i].z - elemPara[i].x) * .1 + 'px';
			elemPara[i].element.style.top = elemPara[i].element.offsetTop - (elemPara[i].element.offsetTop - window.innerHeight / 2 + (mouseY - window.innerHeight / 2) * 0.01 * elemPara[i].z - elemPara[i].y) * .1 + 'px';
		}
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

	title.onclick = function(e) {
		about.scrollIntoView({behavior: 'smooth'});
	}
}