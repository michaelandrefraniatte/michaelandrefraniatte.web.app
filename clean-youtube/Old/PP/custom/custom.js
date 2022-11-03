
function handleFiles(files) {
	getAsText(files[0]);
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	reader.onload = loadHandler;
	reader.onerror = errorHandler;   
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var file = event.target.result;
	processData(file);             
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function processData(file) {
	var newScript = document.createElement("script");
	var inlineScript = document.createTextNode(file);
	newScript.appendChild(inlineScript); 
	document.getElementById('page-top').appendChild(newScript);
	document.getElementById('Input').style.display = 'none';
	document.getElementById('Script').style.display = 'none';
}

