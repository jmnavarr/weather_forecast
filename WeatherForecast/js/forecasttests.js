QUnit.config.autostart = false;
QUnit.config.reorder = false;
QUnit.testStart(function () {

});

asyncTest("Weather forecast for Chicago, IL should return results from OpenWeatherMap API", function () {
    $("#citybox").val("Chicago, IL");

    $("#citybox").trigger({ type: 'keyup', which: 13, keyCode: 13 });

    setTimeout(function () {
        var results = $(".table tr").length;

        ok(results > 0, "Weather forecast for Chicago, IL should return results. Actual: " + results);
        QUnit.start();
    }, 2000);
});

test("Clicking primary theme button should change the theme", function () {
    $(".btn-primary").click();

    var hasPrimaryTheme = $("body").hasClass("primary-theme");

    ok(hasPrimaryTheme, "Theme for body tag should have changed. Change flag: " + hasPrimaryTheme);
});

test("Clicking default theme button should change the theme", function () {
    $(".btn-default").click();

    var hasDefaultTheme = $("body").hasClass("default-theme");

    ok(hasDefaultTheme, "Theme for body tag should have changed. Change flag: " + hasDefaultTheme);
});