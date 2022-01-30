window.onload = function() {
	const title = document.getElementById('title');
	const body = document.getElementById('body');
	let mouseX = window.innerWidth / 2;
	let mouseY = window.innerHeight / 2;
	let titleX = mouseX;
	let titleY = mouseY;
	let backgroundX = mouseX;
	let backgroundY = mouseY;

	function update() {
		titleX = titleX * .9 + (window.innerWidth / 2 + (window.innerWidth / 2 - mouseX) * .05) * .1;
		titleY = titleY * .9 + (window.innerHeight / 2 + (window.innerHeight / 2 - mouseY) * .05) * .1;
		title.style.left = titleX + 'px';
		title.style.top = titleY + 'px';
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

	/* this is temporarily deprecated cuz it didn't work as i expected
	const elemPara = [
		{
			element: document.getElementById('123'),
			x: 0,
			y: 0,
			depth: 6
		},
		{
			element: document.getElementById('peaksol'),
			x: 0,
			y: 0,
			depth: -6
		}
		{
			element: document.getElementById('p'),
			x: -750,
			y: Math.random() * 300 - 150,
			depth: Math.random() * 8 + 2
		},
		{
			element: document.getElementById('e'),
			x: -500,
			y: Math.random() * 300 - 150,
			depth: Math.random() * 8 + 2
		},
		{
			element: document.getElementById('a'),
			x: -250,
			y: Math.random() * 300 - 150,
			depth: Math.random() * 8 + 2
		},
		{
			element: document.getElementById('k'),
			x: 0,
			y: Math.random() * 300 - 150,
			depth: Math.random() * 8 + 2
		},
		{
			element: document.getElementById('s'),
			x: 250,
			y: Math.random() * 300 - 150,
			depth: Math.random() * 8 + 2
		},
		{
			element: document.getElementById('o'),
			x: 500,
			y: Math.random() * 300 - 150,
			depth: Math.random() * 8 + 2
		},
		{
			element: document.getElementById('l'),
			x: 750,
			y: Math.random() * 300 - 150,
			depth: Math.random() * 8 + 2
		}

	];

	document.getElementById('peaksol').hidden = true;
	document.getElementById('letters').hidden = false;

	for(i in elemPara) {
		elemPara[i].element.style.left = elemPara[i].element.offsetLeft + 'px';
		elemPara[i].element.style.top = elemPara[i].element.offsetTop + 'px';
	}

	function update() {
		for(i in elemPara) {
			elemPara[i].element.style.left = parseInt(elemPara[i].element.style.left, 10) - (parseInt(elemPara[i].element.style.left, 10) - window.innerWidth / 2 + (mouseX - window.innerWidth / 2) * 0.01 * elemPara[i].depth - elemPara[i].x) * .1 + 'px';
			elemPara[i].element.style.top = parseInt(elemPara[i].element.style.top, 10) - (parseInt(elemPara[i].element.style.top, 10) - window.innerHeight / 2 + (mouseY - window.innerHeight / 2) * 0.01 * elemPara[i].depth - elemPara[i].y) * .1 + 'px';
		}
		requestAnimationFrame(update);
	}
	update();

	*/