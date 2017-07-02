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
}());
var q = {
    oily: [{
        quesId: "ques100",
        num: "1",
        question: "在洗完脸后先不要使用任何的保湿霜、防晒霜、柔肤水、粉或者其他产品，过2~3小时后，在明亮的灯光下照镜子，额头和脸颊会出现或感觉：",
        optionA: "粗糙、易脱皮、或肤色苍白",
        optionB: "皮肤紧绷",
        optionC: "皮肤很水润，在灯光下没有反射",
        optionD: "在灯光下会有反射光",
    }, {
        quesId: "ques101",
        num: "2",
        question: "拍照时，照片上你的皮肤看起来油光发亮吗？",
        optionA: "从来没有，或者你从未注意",
    }, {
        quesId: "ques102",
        num: "3",
        question: "使用粉底但不用遮盖粉，2~3小时后，你的粉底会表现",
        optionA: "在皱纹处起皮或层片状",
        optionB: "光滑",
        optionC: "有光泽",
        optionD: "形成条痕并有光泽",
        optionE: "我从来不用粉底",
    }, {
        quesId: "ques103",
        num: "4",
        question: "当你在干燥的环境中，如果不适用保湿霜或防晒霜，你的面部皮肤会：",
        optionA: "感觉很干或干裂",
        optionB: "感觉很紧绷",
        optionC: "感觉很正常",
        optionD: "看起来很光亮，或者我从来没有感觉到自己需要保湿霜",
        optionE: "我不知道",
    }, {
        quesId: "ques104",
        num: "5",
        question: "通过放大镜观察时，面部有多少粗大的毛孔直径超过大头针?",
        optionA: "没有",
        optionB: "只有T区（额头和鼻子）有一些",
        optionC: "有很多",
        optionD: "非常多",
        optionE: "仔细观察后仍不能确定",
    }, {
        quesId: "ques105",
        num: "6",
        question: "你会怎样描述自己的面部皮肤，如：",
        optionA: "干的",
        optionB: "正常的",
        optionC: "混合性的",
        optionD: "油性的",
    }, {
        quesId: "ques106",
        num: "7",
        question: "当你使用肥皂泡沫、泡沫乳、泡沫丰富的洁面乳洁面时，会感觉面部皮肤：",
        optionA: "干或干裂",
        optionB: "轻微的干但是没有干裂",
        optionC: "感觉正常",
        optionD: "油油的",
        optionE: "不用肥皂或者其他泡沫洁面乳（如果不用的原因是因为很干，请选A）",
    }, {
        quesId: "ques107",
        num: "8",
        question: "如果没有使用保湿霜，你会感到面部皮肤紧绷吗？",
        optionA: "经常",
        optionB: "有时会",
        optionC: "很少",
        optionD: "从来不会",
    }, {
        quesId: "ques108",
        num: "9",
        question: "你有毛孔堵塞（黑头或白头）吗？",
    }, {
        quesId: "ques109",
        num: "10",
        question: "T区（额头和鼻子）会出油吗？",
    }, {
        quesId: "ques110",
        num: "11",
        question: "使用保湿霜2~3小时后，你会感觉脸颊：",
        optionA: "非常粗糙，起屑或呈灰白色",
        optionB: "平滑",
        optionC: "轻度油光发亮",
        optionD: "光滑油亮，或者根本不用保湿霜",
    }],

    sensitive: [{
        quesId: "ques200",
        num: "1",
        question: "您脸上出现红色的斑块吗？",
        optionC: "每月至少会出现一次",
        optionD: "每周至少出现一次",
    }, {
        quesId: "ques201",
        num: "2",
        question: "护肤产品（包括洁面乳、保湿霜、柔肤水和化妆品）会使面部出现发红、发痒或刺痛吗？",
        optionE: "我不在脸上使用护肤品",
    }, {
        num: "3",
        quesId: "ques202",
        question: "你曾经被诊断为有痤疮或玫瑰痤疮（红斑痤疮、酒糟鼻）吗？",
        optionB: "朋友或熟人说我有",
        optionC: "是的，被诊断有",
        optionD: "是的，并且症状严重",
        optionE: "不确定",
    }, {
        num: "4",
        quesId: "ques203",
        question: "如果你佩戴的首饰不是14k金（或更高含金量饰品）时，你的皮肤会多长时间出现皮疹？",
        optionE: "不确定",
    }, {
        num: "5",
        quesId: "ques204",
        question: "使用防晒霜时，皮肤会出现发痒、刺痛、发红或出现皮疹？",
        optionE: "从不使用防晒霜",
    }, {
        num: "6",
        quesId: "ques205",
        question: "你曾被诊断有异位性皮炎（特应性皮炎）、湿疹或接触性皮炎吗？",
        optionA: "没有",
        optionB: "朋友或熟人说我有",
        optionC: "是的，曾被诊断有",
        optionD: "是的，并且症状严重",
        optionE: "不确定",
    }, {
        num: "7",
        quesId: "ques206",
        question: "你佩戴戒指的部位会出现过敏或皮疹吗？",
        optionE: "从来不戴戒指",
    }, {
        num: "8",
        quesId: "ques207",
        question: "使用有香味的泡泡浴、按摩油或体乳后，你的皮肤会感觉干燥和发痒吗？",

        optionE: "从来不用这类产品（如果不用的原因是会感觉干燥和发痒，请选D）",
    }, {
        num: "9",
        quesId: "ques208",
        question: "当时用过酒店或宾馆提供的洁面或沐浴产品后，会出现不适感吗？",
        optionA: "不会出现",
        optionB: "大多数情况下没有什么反应",
        optionC: "会，使用后我的皮肤会出现皮疹或发红发痒",
        optionD: "我不会使用酒店提供的产品，使用后皮肤会出现严重不适",
        optionE: "我自己会带洁面和沐浴产品，所有不确定",
    }, {
        num: "10",
        quesId: "ques209",
        question: "你的家人曾被确诊过有异位性皮炎（特应性皮炎）、湿疹、哮喘或其他过敏症吗？",
        optionA: "没有",
        optionB: "据我所知有一位",
        optionC: "有几位",
        optionD: "很多家人异位性皮炎（特应性皮炎）、湿疹、哮喘或其他过敏症",
        optionE: "不确定",
    }, {
        num: "11",
        quesId: "ques210",
        question: "如果使用添加香料的洗涤剂清洗床单，或床单经过防静电处理，你会感觉：",
        optionA: "皮肤没有不适感",
        optionB: "皮肤感觉有点干",
        optionC: "会发痒",
        optionD: "会引起皮疹或发红发痒",
        optionE: "不确定，或我从来没有使用过这样的产品处理床单",
    }, {
        num: "12",
        quesId: "ques211",
        question: "受到压力或愤怒等强烈情感刺激时，或经过适度运动后，你的脸部或颈部会变红吗？",
    }, {
        num: "13",
        quesId: "ques212",
        question: "喝酒后，你的脸部会变红吗？",
        optionD: "总是会，或因为这个原因我不喝酒",
        optionE: "我从不喝酒",
    }, {
        num: "14",
        quesId: "ques213",
        question: "在吃完辛辣或很烫的食物或饮料后，你的脸部皮肤会发红吗？",
        optionE: "我从来不吃辛辣或很烫的食物（如果不吃的原因是吃完后脸部会变红，请选D）",
    }, {
        num: "15",
        quesId: "ques214",
        question: "你的脸上和鼻子上有很多（或在治疗前有很多）扩张的红色或蓝色血管吗？",
        optionA: "没有",
        optionB: "很少（整个面部包括鼻子共有1~3根）",
        optionC: "有一些（整个面部包括鼻子共有4~6根）",
        optionD: "很多（整个面部包括鼻子共有7根以上）",
    }, {
        num: "16",
        quesId: "ques215",
        question: "在照片上，您的脸看起来总是发红吗？",
        optionA: "从来没有，或我没有注意过",
    }, {
        num: "17",
        quesId: "ques216",
        question: "即使没有晒太阳，别人也会问你是不是被晒伤了？",
        optionA: "从来没有人这样问",
        optionB: "有时会",
        optionC: "经常有人这样问",
        optionD: "总是会有人这样问",
        optionE: "我经常被晒伤",
    }, {
        num: "18",
        quesId: "ques217",
        question: "在使用过化妆品、防晒霜或护肤品后，你的脸部会出现水肿、发红或发痒吗？",
        optionE: "我使用这些产品（如果不用的原因是因为使用后会水肿或发红发痒，请选D）",
    }, {
        num: "19",
        quesId: "ques218",
        question: "你曾被医生诊断为痤疮、玫瑰痤疮（红斑痤疮、酒糟鼻）、接触性皮炎或湿疹吗？",
        optionA: "没有被医生确诊过",
        optionB: "我被其他科的医生确诊过",
        optionC: "我被皮肤科医生确诊过",
        optionD: "null",

        pointA: 0,
        pointB: 2,
        pointC: 5,
    }]

};


$(document).ready(function() {

    //build
    function inheritPrototype(subType, superType) {
        var prototype = Object.create(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    }
    String.prototype.temp = function(obj) {
        return this.replace(/\$\w+\$/gi, function(matchs) {
            var returns = obj[matchs.replace(/\$/g, "")];
            return (returns + "") == "undefined" ? "" : returns;
        });
    };

    function BuildTestQues(ques) {
        ques = ques || {};
        this.quesId = ques.quesId;
        this.num = ques.num;
        this.question = ques.question;

        this.optionA = ques.optionA || "从来没有";
        this.optionB = ques.optionB || "很少，偶尔";
        this.optionC = ques.optionC || "经常";
        this.optionD = ques.optionD || "总是这样，一直如此";
        this.optionE = ques.optionE || "";

        this.pointA = ques.pointA || 1;
        this.pointB = ques.pointB || 2;
        this.pointC = ques.pointC || 3;
        this.pointD = ques.pointD || 4;
        this.pointE = ques.pointE || 2.5;
    }

    function BuildOily() {
        this.category = "oily";
        this.nextCategory = "sensitive";
        BuildTestQues.apply(this, arguments);
    }
    inheritPrototype(BuildOily, BuildTestQues);

    function BuildSensitive() {
        this.category = "sensitive";
        // this.nextCategory = "pigmented";
        this.nextCategory = "";
        BuildTestQues.apply(this, arguments);
    }
    inheritPrototype(BuildSensitive, BuildTestQues);

    BuildTestQues.prototype.build = function() {
        var template = document.getElementById("template-" + this.category).value;
        var product = '';
        product += template.temp(this);
        var div = document.createElement("div");
        div.className = "row question";
        div.id = this.quesId;
        div.innerHTML = product;
        $("#" + this.category).append(div);

        if (this.optionE == "") {
            $("#" + this.quesId + " li:last-child").remove();
            if (this.optionD == "null") {
                $("#" + this.quesId + " li:last-child").remove();
            }
        }

        var li = document.createElement("li");
        li.id = "n" + this.quesId;
        li.innerHTML = "<a>" + this.num + "</a>";
        $("#li-" + this.category).append(li);

        window.scrollTo(0, 0);
    }
    for (var i = 0; i < q.oily.length; i++) {
        q.oily[i] = new BuildOily(q.oily[i]);
        q.oily[i].build();
    }
    for (var i = 0; i < q.sensitive.length; i++) {
        q.sensitive[i] = new BuildSensitive(q.sensitive[i]);
        q.sensitive[i].build();
    }
    //scroll 
    var half = $(window).height() * 0.5 - 30;
    var p = $('#test-body')[0].offsetHeight - $('.row')[0].offsetHeight - 600;
    var top;
    var timer = 0;
    $(window).scroll(function() {
        if (!timer) {
            timer = setTimeout(function() {
                top = $(window).scrollTop();
                checkScrollPosition();
                timer = 0;
            }, 250);
        }
    }).scroll();

    $(window).resize(function() {
        half = $(window).height() * 0.5;
        p = $('#test-body')[0].offsetHeight - $('.row')[0].offsetHeight - 600;

    })

    function checkScrollPosition() {
        $('.question').removeClass("focus").addClass("ready");
        $('.ques-list > li').removeClass("active");
        $('.question').filter(function() {

            return this.getBoundingClientRect().top < half && this.getBoundingClientRect().top + this.offsetHeight > half;

        }).removeClass("ready").addClass("focus");

        if ($('.focus').length > 0) {
            $('#n' + $('.focus')[0].id).addClass("active");

        }

    }

    $(".question li").click(function() {
        var id = this.id.slice(0, 7);
        var div = document.getElementById(id);
        if (div.className == "row question focus") {
            $("#" + id + " li").removeClass("green");
            $("#" + this.id).addClass("green");
            $("#n" + id).addClass("ok");
            setAnswer(id);
            scrollToNext(id);
        }
    });
    $(".question").click(function() {
        if (this.className == "row question ready") {
            var h = this.offsetTop + 70 + p - half + this.offsetHeight * 0.5;
            $("body,html").animate({ scrollTop: h + "px" }, 350);
        }
    });

    function setAnswer(id) {
        var category = id.slice(4, 5);

        if (category == "1") {
            var greenNum = document.getElementsByClassName("green");
            if (greenNum.length == 11) {
                $("#set-oily").removeClass("gone");
                submit("oily");
            }
        } else if (category == "2") {
            var greenNum = document.getElementsByClassName("green");
            if (greenNum.length == 30) {
                $("#set-sensitive").removeClass("gone");
                submit("sensitive");
            }
        }
    }

    function scrollToNext(id) {
        var i = id.slice(5, 7) - 0;
        var category = id.slice(4, 5);
        var h;
        if (category == "1" && i != 11) {
            h = $(".question")[i+1].offsetTop + 70 + p - half + $(".question")[i+1].offsetHeight * 0.5;
        } else if (category == "2" && i != 18) {
            h = $(".question")[i + 12].offsetTop + 70 + p - half + $(".question")[i + 12].offsetHeight * 0.5;
        }
        $("body,html").animate({ scrollTop: h + "px" }, 400);
    }

    var pointOily = 0;
    var pointSensitive = 0;

    function submit(category) {
        switch (category) {
            case "oily":
                $("#set-oily").click(function() {
                    $("#oily").addClass("gone");
                    $("#sensitive").removeClass("gone");
                    $("#li-oily").addClass("gone");
                    $("#li-sensitive").removeClass("gone");
                    $("#set-oily").addClass("gone");
                    window.scrollTo(0, 0);
                });
                break;
            case "sensitive":
                $("#set-sensitive").click(function() {
                    for (var i = 0; i < 11; i++) {
                        pointOily += $(".green")[i].value;
                    }
                    for (var i = 11; i < 30; i++) {
                        pointSensitive += $(".green")[i].value;
                    }
                    calulation(pointOily, pointSensitive);
                });
                break;
            default:
                // statements_def
                break;
        }
    }

    function calulation(pointOily, pointSensitive) {

        if (pointOily < 27 && pointSensitive < 30) {
            window.open("dr--.html");
            // alert("dry,resistant");
        } else if (pointOily >= 27 && pointSensitive < 30) {
            window.open("or--.html");
            // alert("oily,resistant");
        } else if (pointOily < 27 && pointSensitive >= 30) {
            window.open("ds--.html");
            // alert("dry,sensitive");
        } else if (pointOily >= 27 && pointSensitive >= 30) {
            window.open("os--.html");
            // alert("oily,sensitive");
        }
    }
});

document.onselectstart = function() {
    return false;
}
document.oncopy = function() {
    return false;
}
