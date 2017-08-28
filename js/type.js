// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    var c = document.getElementById("myCanvas");

    var colorDSNT = [
        ["#BB5E97", "#F38AB2", "#E85D7A", "#F0A997"],
        ["#A2447E", "#EE5C94", "#E23055", "#EA846A"],
        ["D", "S"]
    ];
    var colorOSNT = [
        ["#EF8760", "#FBCBA7", "#F4AC52", "#FEDC94"],
        ["#EA6432", "#F9AE76", "#F19522", "#FECB61"],
        ["O", "S"]
    ];
    var colorORNT = [
        ["#A2C52B", "#BDD78D", "#71B352", "#8ECBAC"],
        ["#809B22", "#A7CA67", "#5A9240", "#6BBB92"],
        ["O", "R"]
    ];
    var colorDRNT = [
        ["#3F96B2", "#93B3DA", "#4D70A6", "#AB9AC4"],
        ["#32768C", "#6D98CD", "#3D5883", "#907AB1"],
        ["D", "R"]
    ];

    function drawStriangle(context, x1, y1, x2, y2, x3, y3, color) {

        context.fillStyle = color;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.closePath();
        context.strokeStyle = color;
        context.lineWidth = 0.2;
        context.fill();
        context.stroke();

    }

    function drawSquare(context, x0, y0, x, y, color) {
        context.fillStyle = color;
        context.fillRect(x0, y0, x, y);
        context.strokeStyle = color;
    }

    function drawLine(context, x1, y1, x2, y2, color) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = color;
        context.lineWidth = 3;
        context.fill();
        context.stroke();
    }

    function drawFont(context, string1, string2) {
        context.font = "bold 100px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = "#fefefe";
        context.fillText(string1, 150, 150);
        context.fillText(string2, 250, 250);
    }

    function step1(context, color) {
        var theta1 = 0;
        var step1 = setInterval(function() {
            var ym1 = Math.sin((2 * Math.PI / 360) * theta1) * 100;
            theta1 += 5;
            context.clearRect(0, 0, context.width, context.height);

            drawStriangle(context, 200, 200, 300, 200, 300, 200 - ym1, color[1][0]);
            drawStriangle(context, 200, 200, 300, 200, 200, 200 + ym1, color[1][1]);

            if (theta1 === 90) {
                clearInterval(step1);
                step2(context, color);
            }
        }, 3.5);
    }

    function step2(context, color) {
        var theta2 = -90;
        var step2 = setInterval(function() {

            var xm2 = Math.sin((2 * Math.PI / 360) * theta2) * 50;
            var ym2 = Math.sin((2 * Math.PI / 360) * theta2) * 50;
            theta2 += 5;

            context.clearRect(0, 0, context.width, context.height);
            drawStriangle(context, 200, 200, 300, 200, 300, 100, color[0][0]);
            drawStriangle(context, 200, 200, 300, 200, 200, 300, color[0][1]);
            drawLine(context, 299, 200, 299, 102, color[1][0]);
            drawLine(context, 202, 200, 202, 298, color[1][1]);

            drawStriangle(context, 200, 200, 300, 100, 250 - xm2, 150 - ym2, color[1][0]);
            drawStriangle(context, 200, 300, 300, 200, 250 + xm2, 250 + ym2, color[1][1]);

            if (theta2 === 90) {
                clearInterval(step2);
                step3(context, color);

            }
        }, 1.4);

    }

    function step3(context, color) {
        var theta3 = -90;
        var step3 = setInterval(function() {
            var xm3 = Math.sin((2 * Math.PI / 360) * theta3) * 100;
            theta3 += 5;

            context.clearRect(0, 0, context.width, context.height);

            drawStriangle(context, 200, 200, 200, 100, 200 - xm3, 100, color[1][2]);
            drawStriangle(context, 300, 300, 300, 200, 300 + xm3, 300, color[1][3]);

            drawSquare(context, 200, 100, 100, 100, color[0][0]);
            drawSquare(context, 200, 200, 100, 100, color[0][1]);
            drawLine(context, 299, 200, 299, 102, color[1][0]);
            drawLine(context, 202, 200, 202, 298, color[1][1]);

            drawLine(context, 200, 100, 299, 100, color[1][0]);
            drawLine(context, 200, 299, 300, 299, color[1][1]);

            if (theta3 === 90) {
                clearInterval(step3);
                step4(context, color);
            }

        }, 1.5);
    }

    function step4(context, color) {
        var theta4 = -90;

        var step4 = setInterval(function() {
            var xm4 = Math.sin((2 * Math.PI / 360) * theta4) * 50;
            var ym4 = Math.sin((2 * Math.PI / 360) * theta4) * 50;

            theta4 += 5;

            context.clearRect(0, 0, context.width, context.height);

            drawSquare(context, 200, 100, 100, 100, color[0][0]);
            drawSquare(context, 200, 200, 100, 100, color[0][1]);
            drawLine(context, 299, 200, 299, 102, color[1][0]);
            drawLine(context, 202, 200, 202, 298, color[1][1]);

            drawLine(context, 200, 100, 299, 100, color[1][0]);
            drawLine(context, 200, 299, 300, 299, color[1][1]);

            drawStriangle(context, 200, 200, 200, 100, 100, 100, color[0][2]);
            drawStriangle(context, 300, 300, 300, 200, 400, 300, color[0][3]);

            drawLine(context, 100, 100, 200, 100, color[1][2]);
            drawLine(context, 300, 299, 400, 299, color[1][3]);

            drawStriangle(context, 200, 200, 100, 100, 150 - xm4, 150 + ym4, color[1][2]);
            drawStriangle(context, 300, 200, 400, 300, 350 + xm4, 250 - ym4, color[1][3]);

            if (theta4 === 90) {
                clearInterval(step4);
                step5(context, color);
            }

        }, 3.6);
    }

    function step5(context, color) {
        context.clearRect(0, 0, context.width, context.height);

        drawSquare(context, 200, 100, 100, 100, color[0][0]);
        drawSquare(context, 200, 200, 100, 100, color[0][1]);
        drawLine(context, 299, 200, 299, 102, color[1][0]);
        drawLine(context, 202, 200, 202, 298, color[1][1]);

        drawLine(context, 200, 100, 299, 100, color[1][0]);
        drawLine(context, 200, 299, 300, 299, color[1][1]);

        drawSquare(context, 100, 100, 100, 100, color[0][2]);
        drawSquare(context, 300, 200, 100, 100, color[0][3]);

        drawLine(context, 100, 100, 200, 100, color[1][2]);
        drawLine(context, 300, 299, 400, 299, color[1][3]);

        drawLine(context, 101, 100, 101, 200, color[1][2]);
        drawLine(context, 399, 200, 399, 300, color[1][3]);

        drawLine(context, 101, 200, 200, 200, color[1][2]);
        drawLine(context, 300, 200, 399, 200, color[1][3]);

        drawSquare(context, 107, 107, 88, 86, color[1][2]);
        drawSquare(context, 207, 206, 88, 86, color[1][1]);

        drawFont(context, color[2][0], color[2][1]);

    }
    if (myCanvas.getContext) {

        var context = c.getContext("2d");
        var lo = location.href;
        if (lo.charAt(lo.length - 9) === "d" && lo.charAt(lo.length - 8) === "s") {
            step1(context, colorDSNT);
        } else if (lo.charAt(lo.length - 9) === "o" && lo.charAt(lo.length - 8) === "s") {
            step1(context, colorOSNT);
        } else if (lo.charAt(lo.length - 9) === "o" && lo.charAt(lo.length - 8) === "r") {
            step1(context, colorORNT);
        } else if (lo.charAt(lo.length - 9) === "d" && lo.charAt(lo.length - 8) === "r") {
            step1(context, colorDRNT);
        }
    }

    $(function() {
        var tBefore = $(window).scrollTop();
        $(window).scroll(function() {
            var tAfter = $(window).scrollTop();
            if (tAfter - tBefore > 3) {
                $("#navbar-down").removeClass("is-hidden").addClass("is-shown");
            } else if (tBefore - tAfter > 3) {
                $("#navbar-down").removeClass("is-shown").addClass("is-hidden");
            }
            tBefore = tAfter;
        })
    })

    document.onselectstart = function() {
        return false;
    }
    document.oncopy = function() {
        return false;
    }
}());