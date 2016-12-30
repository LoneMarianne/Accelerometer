var watchID = null;

function onLoad(){
 document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
 document.getElementById("test").innerHTML = " OK";
 startWatch();
 
}

function startWatch() {
	 document.getElementById("test").innerHTML = " start";
 var options = { frequency: 1000 };
 watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}
function onSuccess(heading) {
	document.getElementById("test").innerHTML = " onSuccess";
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};



