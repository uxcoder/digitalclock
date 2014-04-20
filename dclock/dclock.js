/**
 * Created by alex on 19/04/14.
 */
var currentDate = new Date();
var currentMin = currentDate.getMinutes();

setCurrentTime();

setInterval(function () {
    checkMinuteChange();
}, 2000);

function setCurrentTime() {
    $("ul.minuteSecondDigit li").eq(currentDate.getMinutes() % 10).addClass("current");
    $("ul.minuteFirstDigit li").eq(currentDate.getMinutes() / 10 >> 0).addClass("current");
    $("ul.hourSecondDigit li").eq(currentDate.getHours() % 10).addClass("current");
    $("ul.hourFirstDigit li").eq(currentDate.getHours() / 10 >> 0).addClass("current");
}

function checkMinuteChange() {
    var tempDate = new Date();
    var tempMinutes = tempDate.getMinutes();
    if (tempMinutes != currentMin) {
        currentMin = tempMinutes;
        minuteSecondDigit();
    }
}

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
        aa = $("ul.minuteSecondDigit li").eq(0);
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
        aa = $("ul.minuteFirstDigit li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
        hourSecondDigit();
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

function hourSecondDigit() {
    $("body").removeClass("play");
    var aa = $("ul.hourSecondDigit li.active");

    if (aa.html() == undefined) {
        aa = $("ul.hourSecondDigit li").eq(currentDate.getHours() % 10);
        aa.addClass("before")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
    else if (aa.is(":last-child")) {
        $("ul.hourSecondDigit li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.hourSecondDigit li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
        hourFirstDigit();
    }
    else {
        $("ul.hourSecondDigit li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
}

function hourFirstDigit() {
    $("body").removeClass("play");
    var aa = $("ul.hourFirstDigit li.active");

    if (aa.html() == undefined) {
        aa = $("ul.hourFirstDigit li").eq(currentDate.getHours() / 10 >> 0);
        aa.addClass("before")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
    else if (aa.is(":last-child")) {
        $("ul.hourFirstDigit li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.hourFirstDigit li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.hourFirstDigit li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
}