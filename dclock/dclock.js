/**
 * Created by alex on 19/04/14.
 */
var currentDate = new Date();

var currentMin = currentDate.getMinutes().toString();
if (currentMin.length < 2) currentMin = "0" + currentMin;
//    this.hr = t.getHours();

//console.log(currentDate);


setInterval(function () {
    minuteSecondDigit();
}, 1000);

function minuteSecondDigit() {
    $("body").removeClass("play");
    var aa = $("ul.minuteSecondDigit li.active");

    if (aa.html() == undefined) {
        aa = $("ul.minuteSecondDigit li").eq(currentDate.getMinutes() % 10);
        aa.addClass("before")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
    else if (aa.is(":last-child")) {
        $("ul.minuteSecondDigit li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.minuteSecondDigit li").eq(currentDate.getMinutes() % 10);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
        minuteFirstDigit();
    }
    else {
        $("ul.minuteSecondDigit li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
}

function minuteFirstDigit() {
    $("body").removeClass("play");
    var aa = $("ul.minuteFirstDigit li.active");

    if (aa.html() == undefined) {
        aa = $("ul.minuteFirstDigit li").eq(currentDate.getMinutes() / 10 >> 0);
        aa.addClass("before")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
    else if (aa.is(":last-child")) {
        $("ul.minuteFirstDigit li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.minuteFirstDigit li").eq(currentDate.getMinutes() / 10 >> 0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.minuteFirstDigit li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
}