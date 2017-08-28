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
    var typeintro = {
        intro: [{
            href: "dr--.html",
            classname1: "col-xs-offset-1 DRPT13",
            h2: "DRPT",
            h1: "13",
            h6: "Dry&nbsp;|&nbsp;Resistant<br />Pigmented&nbsp;|&nbsp;Tight",
            classname2: "DRPT13",
            h4: "干性|耐受<br />色素沉积|紧致",
            h5: "“我喜欢护肤，为什么不把自然母亲赋予你的皮肤照顾到最好呢？”"
        }, {
            href: "dr--.html",
            classname1: "DRNT14",
            h2: "DRNT",
            h1: "14",
            h6: "Dry&nbsp;|&nbsp;Resistant<br />Non-Pigmented&nbsp;|&nbsp;Tight",
            classname2: "DRNT14",
            h4: "干性|耐受<br />非色素沉积|紧致",
            h5: "“我认为美丽是源自内在的，我只做最简单的护理并把我的精力投入到其他事情上。”"
        }, {
            href: "ds--.html",
            classname1: "col-xs-offset-1 DSPT01",
            h2: "DSPT",
            h1: "01",
            h6: "Dry&nbsp;|&nbsp;Sensitive<br />Pigmented&nbsp;|&nbsp;Tight",
            classname2: "DSPT01",
            h4: "干性|敏感<br />色素沉积|紧致",
            h5: "“脱皮、发红、黑眼圈--当皮肤痒的时候我几乎要发疯，因为瘙抓只能使它更严重。”"
        }, {
            href: "ds--.html",
            classname1: "DSNT02",
            h2: "DSNT",
            h1: "02",
            h6: "Dry&nbsp;|&nbsp;Sensitive<br />Non-Pigmented&nbsp;|&nbsp;Tight",
            classname2: "DSNT02",
            h4: "干性|敏感<br />非色素沉积|紧致",
            h5: "“我的皮肤实在是太干了！眼皮脱皮、嘴唇开裂。无论用什么皮肤都有烧灼感，仿佛生活在沙漠里。”"
        }, {
            href: "dr--.html",
            classname1: "col-xs-offset-1 DRPW15",
            h2: "DRPW",
            h1: "15",
            h6: "Dry&nbsp;|&nbsp;Resistant<br />Pigmented&nbsp;|&nbsp;Wrinkled",
            classname2: "DRPW15",
            h4: "干性|耐受<br />色素沉积|皱纹",
            h5: "“以前我皮肤从没出现什么问题，所以不需要在护肤上花费精力。现在脸上却出现了皱纹和黑斑。”"
        }, {
            href: "dr--.html",
            classname1: "DRNW16",
            h2: "DRNW",
            h1: "16",
            h6: "Dry&nbsp;|&nbsp;Resistant<br />Non-Pigmented&nbsp;|&nbsp;Wrinkled",
            classname2: "DRNW16",
            h4: "干性|耐受<br />非色素沉积|皱纹",
            h5: "“我的皮肤一直很好，但早上会变得很干燥，几乎每次照镜子都会发现新的皱纹。”"
        }, {
            href: "ds--.html",
            classname1: "col-xs-offset-1 DSPW03",
            h2: "DSPW",
            h1: "03",
            h6: "Dry&nbsp;|&nbsp;Sensitive<br />Pigmented&nbsp;|&nbsp;Wrinkled",
            classname2: "DSPW03",
            h4: "干性|敏感<br />色素沉积|皱纹",
            h5: "“我的皮肤对于所有东西都有反应，用在脸上的产品我特别谨慎，几乎就像‘寻宝’。”"
        }, {
            href: "ds--.html",
            classname1: "DSNW04",
            h2: "DSNW",
            h1: "04",
            h6: "Dry&nbsp;|&nbsp;Sensitive<br />Pigmented&nbsp;|&nbsp;Wrinkled",
            classname2: "DSNW04",
            h4: "干性|敏感<br />非色素沉积|皱纹",
            h5: "“我的皮肤如此多变，有些季节我看着还好，但是不知道什么时候就会对某些东西起反应。”"
        }, {
            href: "or--.html",
            classname1: "col-xs-offset-1 ORPT09",
            h2: "ORPT",
            h1: "09",
            h6: "Oily&nbsp;|&nbsp;Resistant<br />Pigmented&nbsp;|&nbsp;Tight",
            classname2: "ORPT09",
            h4: "油性|耐受<br />色素沉积|紧致",
            h5: "“我对我的皮肤非常满意，为了看上去更棒，我可以再做点什么吗？”"
        }, {
            href: "or--.html",
            classname1: "ORNT10",
            h2: "ORNT",
            h1: "10",
            h6: "Oily&nbsp;|&nbsp;Resistant<br />Non-Pigmented&nbsp;|&nbsp;Tight",
            classname2: "ORNT10",
            h4: "油性|耐受<br />非色素沉积|紧致",
            h5: "“我总是因我的皮肤受到称赞，可老实说，我家族的女性皮肤都很好，我想我只是幸运而已。”"
        }, {
            href: "os--.html",
            classname1: "col-xs-offset-1 OSPT05",
            h2: "OSPT",
            h1: "05",
            h6: "Oily&nbsp;|&nbsp;Sensitive<br />Pigmented&nbsp;|&nbsp;Tight",
            classname2: "OSPT05",
            h4: "油性|敏感<br />色素沉积|紧致",
            h5: "“我的脸上总是痤疮、暗斑挥之不去，我真羡慕那些皮肤上什么都没有的人！”"
        }, {
            href: "os--.html",
            classname1: "OSNT06",
            h2: "OSNT",
            h1: "06",
            h6: "Oily&nbsp;|&nbsp;Sensitive<br />Non-Pigmented&nbsp;|&nbsp;Tight",
            classname2: "OSNT06",
            h4: "油性|敏感<br />非色素沉积|紧致",
            h5: "“我已经30多了，皮肤依然会长青春痘，而且还会像小孩一样脸红，这让我太尴尬了！”"
        }, {
            href: "or--.html",
            classname1: "col-xs-offset-1 ORPW11",
            h2: "ORPW",
            h1: "11",
            h6: "Oily&nbsp;|&nbsp;Resistant<br />Pigmented&nbsp;|&nbsp;Wrinkled",
            classname2: "ORPW11",
            h4: "油性|耐受<br />色素沉积|皱纹",
            h5: "“每天早上照镜子都会看到脸上的黄褐斑、皱纹、黑头粉刺、毛孔扩张，皮肤保养一点用都没有！”"
        }, {
            href: "or--.html",
            classname1: "ORNW12",
            h2: "ORNW",
            h1: "12",
            h6: "Oily&nbsp;|&nbsp;Resistant<br />Non-Pigmented&nbsp;|&nbsp;Wrinkled",
            classname2: "ORNW12",
            h4: "油性|耐受<br />非色素沉积|皱纹",
            h5: "“我没有花费很多精力皮肤一直都很棒，只是最近我发现有些皱纹。”"
        }, {
            href: "os--.html",
            classname1: "col-xs-offset-1 OSPW07",
            h2: "OSPW",
            h1: "07",
            h6: "Oily&nbsp;|&nbsp;Sensitive<br />Pigmented&nbsp;|&nbsp;Wrinkled",
            classname2: "OSPW07",
            h4: "油性|敏感<br />色素沉积|皱纹",
            h5: "“我爱太阳，我觉得日晒有助于我的粉刺，我觉得人们总是喜欢在防晒上小题大做。”"
        }, {
            href: "os--.html",
            classname1: "OSNW08",
            h2: "OSNW",
            h1: "08",
            h6: "Oily&nbsp;|&nbsp;Sensitive<br />Non-Pigmented&nbsp;|&nbsp;Wrinkled",
            classname2: "OSNW08",
            h4: "油性|敏感<br />非色素沉积|皱纹",
            h5: "“在太阳下晒上半个小时，我的皮肤就会红得像蒸熟的龙虾。”",

        }]
    };


    String.prototype.temp = function(obj) {
        return this.replace(/\$\w+\$/gi, function(matchs) {
            var returns = obj[matchs.replace(/\$/g, "")];
            return (returns + "") == "undefined" ? "" : returns;
        });
    };

    var template = document.getElementById("template").value;
    var product = '';
    typeintro.intro.forEach(function(object) {
        product += template.temp(object);
    });
    document.getElementById("row-type").innerHTML = product;

    function drawStriangle(context, x1, y1, x2, y2, x3, y3, color) {
        context.fillStyle = color;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.closePath();
        context.strokeStyle = "#000000";
        context.lineWidth = 2;
        context.fill();
        context.stroke();
    }

    function drawQuad(context, x1, y1, x2, y2, x3, y3, x4, y4, color) {
        context.fillStyle = color;
        context.strokeStyle = "#000000";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.lineTo(x4, y4);
        context.closePath();
        context.fill();
        context.stroke();

    }

    var centerCat = document.getElementById("cats");
    if (centerCat.getContext) {
        var cCat = centerCat.getContext("2d");
        //center
        drawStriangle(cCat, 350, 100, 400, 150, 350, 200, "#BB5E97");
        drawStriangle(cCat, 450, 100, 400, 150, 450, 200, "#F38AB2");
        drawQuad(cCat, 400, 150, 350, 200, 400, 250, 450, 200, "#BDD78D");
        drawStriangle(cCat, 400, 250, 470.7, 320.7, 329.3, 320.7, "#8ECBAC");
        drawStriangle(cCat, 470.7, 320.7, 329.3, 320.7, 329.3, 462.1, "#F0A997");
        drawStriangle(cCat, 470.7, 320.7, 470.7, 462.1, 329.3, 462.1, "#F4AC52");
        drawQuad(cCat, 329.3, 462.1, 400, 462.1, 329.3, 532.8, 258.6, 532.8, "#3F96B2");
        //left
        drawStriangle(cCat, 50, 150, 100, 200, 50, 250, "#A2C52B");
        drawStriangle(cCat, 150, 150, 100, 200, 150, 250, "#FEDC94");
        drawQuad(cCat, 100, 200, 50, 250, 100, 300, 150, 250, "#FBCBA7");
        drawStriangle(cCat, 100, 300, 200, 400, 0, 400, "#F38AB2");
        drawStriangle(cCat, 100, 300, 241.4, 300, 241.4, 441.4, "#E85D7A");
        drawStriangle(cCat, 241.4, 300, 312.1, 370.7, 241.4, 441.4, "#93B3DA");
        drawQuad(cCat, 241.4, 300, 241.4, 200, 291.4, 250, 291.4, 350, "#EF8760");
        //right
        drawStriangle(cCat, 600, 200, 550, 250, 500, 200, "#BB5E97");
        drawStriangle(cCat, 650, 150, 600, 200, 650, 250, "#93B3DA");
        drawQuad(cCat, 600, 200, 550, 250, 600, 300, 650, 250, "#FEDC94");
        drawStriangle(cCat, 600, 300, 600, 500, 500, 400, "#A2C52B");
        drawStriangle(cCat, 600, 300, 600, 500, 700, 400, "#71B352");
        drawStriangle(cCat, 700, 400, 600, 500, 700, 500, "#AB9AC4");
        drawQuad(cCat, 700, 500, 770.7, 429.3, 770.7, 358.6, 700, 429.3, "#4D70A6");

    }


}());