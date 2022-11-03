
document.addEventListener('DOMContentLoaded',function(){
	var imgs = document.querySelectorAll('img');
	imgs.forEach((img) => {
  		img.style.display = "block";
	});
	document.getElementById('title').style.display = "block";
})

var count = 0;

var title = document.getElementById('title');

slideAuto();

var refreshInterval = setInterval(slideAuto, 5000);

function slideAuto() {
	count++;
	if (count == 1) {
		document.getElementById('slidelabel1').click();
		title.innerHTML = 'Airmouse Joycon Left';
	}
	if (count == 2) {
		document.getElementById('slidelabel2').click();
		title.innerHTML = 'Joycon Left';
	}
	if (count == 3) {
		document.getElementById('slidelabel3').click();
		title.innerHTML = 'Joycon Rignt';
		count = 0;
	}
}

document.getElementById('slidelabel1').onclick = function(){
	count = 1;
    title.innerHTML = 'Airmouse Joycon Left';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}

document.getElementById('slidelabel2').onclick = function(){
	count = 2;
    title.innerHTML = 'Joycon Left';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}

document.getElementById('slidelabel3').onclick = function(){
	count = 3;
    title.innerHTML = 'Joycon Rignt';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}