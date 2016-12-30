var watchID = null;

function onLoad(){
 document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
 startWatch();
}

function startWatch() {
 var options = { frequency: 1000 };
 watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}
function onSuccess(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};



