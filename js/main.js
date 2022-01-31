window.onload = function() {
	const title = document.getElementById('title');
	const cover = document.getElementById('cover');
	const layer1 = document.getElementById('layer1');
	const layer2 = document.getElementById('layer2');
	const layer3 = document.getElementById('layer3');
	const layer4 = document.getElementById('layer4');
	const layer5 = document.getElementById('layer5');
	let mouseX = window.innerWidth / 2, titleX = mouseX, layer1X = mouseX, layer2X = mouseX, layer3X = mouseX, layer4X = mouseX, layer5X = mouseX;
	let mouseY = window.innerHeight / 2, titleY = mouseY, layer1Y = mouseY, layer2Y = mouseY, layer3Y = mouseY, layer4Y = mouseY, layer5Y = mouseY;

	function update() {
		titleX += ((mouseX - window.innerWidth / 2) * .08 + window.innerWidth / 2 - titleX) * 0.1;
		titleY += ((mouseY - window.innerHeight / 2) * .08 + window.innerHeight / 2 - titleY) * 0.1;
		layer1X += ((mouseX - window.innerWidth / 2) * .06 + window.innerWidth / 2 - layer1X) * 0.1;
		layer1Y += ((mouseY - window.innerHeight / 2) * .06 + window.innerHeight / 2 - layer1Y) * 0.1;
		layer2X += ((mouseX - window.innerWidth / 2) * .05 + window.innerWidth / 2 - layer2X) * 0.1;
		layer2Y += ((mouseY - window.innerHeight / 2) * .05 + window.innerHeight / 2 - layer2Y) * 0.1;
		layer3X += ((mouseX - window.innerWidth / 2) * .04 + window.innerWidth / 2 - layer3X) * 0.1;
		layer3Y += ((mouseY - window.innerHeight / 2) * .04 + window.innerHeight / 2 - layer3Y) * 0.1;
		layer4X += ((mouseX - window.innerWidth / 2) * .03 + window.innerWidth / 2 - layer4X) * 0.1;
		layer4Y += ((mouseY - window.innerHeight / 2) * .03 + window.innerHeight / 2 - layer4Y) * 0.1;
		layer5X += ((mouseX - window.innerWidth / 2) * .02 + window.innerWidth / 2 - layer5X) * 0.1;
		layer5Y += ((mouseY - window.innerHeight / 2) * .02 + window.innerHeight / 2 - layer5Y) * 0.1;
		title.style.left = titleX + 'px';
		title.style.top = titleY + 'px';
		layer1.style.left = layer1X + 'px';
		layer1.style.top = layer1Y + 'px';
		layer2.style.left = layer2X + 'px';
		layer2.style.top = layer2Y + 'px';
		layer3.style.left = layer3X + 'px';
		layer3.style.top = layer3Y + 'px';
		layer4.style.left = layer4X + 'px';
		layer4.style.top = layer4Y + 'px';
		layer5.style.left = layer5X + 'px';
		layer5.style.top = layer5Y + 'px';
		requestAnimationFrame(update);
	}
	update();

	window.onmousemove = function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	};

	window.onresize = function() {
		mouseX = window.innerWidth / 2;
		mouseY = window.innerHeight / 2;
		console.log(cover.style['transform-origin'] = window.innerWidth / 2 + 'px ' + window.innerHeight / 2 + 'px');
	}
}