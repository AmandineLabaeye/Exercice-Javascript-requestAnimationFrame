var catEl = document.getElementById("cat");

var startTime = new Date().getTime();

var walkTheCat = function() {

    var currTime = new Date().getTime();

    var secondsElapsed = ((currTime - startTime)/1000);

    var left = secondsElapsed * 100;

    catEl.style.left = left + "px";

    catEl.style.top = "200px";

    if (left < 1180) {

    requestAnimationFrame(walkTheCat);

    } else {

        alert("Ouuuuuutch le muuuur !")
        location.reload();
    }



};

requestAnimationFrame(walkTheCat);

