/**
 * Created by alex on 19/04/14.
 */
setInterval(function () { flipMinuteSecondDigit() }, 1000);

function flipMinuteSecondDigit() {
    $("body").removeClass("play");
    var aa = $("ul.minuteSecondDigit li.active");

    if (aa.html() === undefined) {
        aa = $("ul.minuteSecondDigit li").eq(0);
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

        flipMinuteFirstDigit();
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

function flipMinuteFirstDigit() {
    $("body").removeClass("play");
    var aa = $("ul.minuteFirstDigit li.active");

    if (aa.html() === undefined) {
        aa = $("ul.minuteFirstDigit li").eq(0);
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

        flipHourSecondDigit();
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


function flipHourSecondDigit() {
    $("body").removeClass("play");
    var aa = $("ul.hourSecondDigit li.active");

    if (aa.html() === undefined) {
        aa = $("ul.hourSecondDigit li").eq(0);
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

        flipHourFirstDigit();
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

function flipHourFirstDigit() {
    $("body").removeClass("play");
    var aa = $("ul.hourFirstDigit li.active");

    if (aa.html() === undefined) {
        aa = $("ul.hourFirstDigit li").eq(0);
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