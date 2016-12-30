function onLoad(){
document.addEventListener("deviceready", onDeviceReady, false);
}

function onSuccess(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};

var options = {
    frequency: 3000
}; // Update every 3 seconds

var watchID = navigator.compass.watchHeading(onSuccess, onError, options);