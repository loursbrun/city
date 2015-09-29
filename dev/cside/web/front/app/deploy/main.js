!function () {

    if (typeof window.console == "undefined") window.console = {};
    if (typeof window.console.log == "undefined") window.console.log = function () {};

    if (!window.isIE8) {
        require.config({
            shim: {},
            paths: {}
        }), require(["app/vendors"],
            function () {
                return require(["app/app"],
                    function (t) {
                        if (typeof BBSVERSION != "undefined") console.log('%cCAPSULE VERSION ' + BBSVERSION, 'background: #444; color: #b5cdf1');
                        return t.initialize()
                    }
                );
            }
        );

    }
    else {
        var envJSON = JSON.parse(DigitalServices.env.animationLocalized);
        location.href = envJSON.redirections.IE8;

    }
}.call(this);