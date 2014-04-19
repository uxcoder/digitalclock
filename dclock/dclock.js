/**
 * Created by alex on 19/04/14.
 */
setInterval(function () {
    counter()
}, 1000);

function counter() {
    $("body").removeClass("play");
    var aa = $("ul.counter li.active");

    if (aa.html() == undefined) {
        aa = $("ul.counter li").eq(0);
        aa.addClass("before")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
    else if (aa.is(":last-child")) {
        $("ul.counter li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.counter li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.counter li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
}