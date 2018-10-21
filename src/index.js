$(function () {
    var attr = [
        {
            name: '南瓜',
            color: '黄色',
            state: 'none'
        },
        {
            name: '大葱',
            color: '绿色',
            state: 'none'
        },
        {
            name: '柠檬',
            color: '黄色',
            state: 'none'
        },
        {
            name: '梨',
            color: '黄色',
            state: 'none'
        },
        {
            name: '樱桃',
            color: '红色',
            state: 'none'
        },
        {
            name: '玉米',
            color: '黄色',
            state: 'none'
        },
        {
            name: '白菜',
            color: '绿色',
            state: 'none'
        },
        {
            name: '芒果',
            color: '黄色',
            state: 'none'
        },
        {
            name: '苹果',
            color: '红色',
            state: 'none'
        },
        {
            name: '草莓',
            color: '红色',
            state: 'none'
        },
        {
            name: '菠菜',
            color: '绿色',
            state: 'none'
        },
        {
            name: '菠萝',
            color: '黄色',
            state: 'none'
        },
        {
            name: '萝卜',
            color: '红色',
            state: 'none'
        },
        {
            name: '西瓜',
            color: '绿色',
            state: 'none'
        },
        {
            name: '西红柿',
            color: '红色',
            state: 'none'
        },
        {
            name: '豌豆',
            color: '绿色',
            state: 'none'
        },
        {
            name: '辣椒',
            color: '红色',
            state: 'none'
        },
        {
            name: '香蕉',
            color: '黄色',
            state: 'none'
        },
        {
            name: '黄瓜',
            color: '绿色',
            state: 'none'
        },
        {
            name: '黄豆',
            color: '黄色',
            state: 'none'
        },
    ]

    // 获取坐标范围
    var bodyList1left = $('#bodyList1').offset().left;
    var bodyList2left = $('#bodyList2').offset().left;
    var bodyList3left = $('#bodyList3').offset().left;
    var bodyListTop = $('#bodyList3').offset().top;
    var bodyListBottom = $('.footer').offset().top;
    var clientWidth = $(window).width();
    console.log(clientWidth)
    $(window).resize(function () {
        bodyList1left = $('#bodyList1').offset().left;
        bodyList2left = $('#bodyList2').offset().left;
        bodyList3left = $('#bodyList3').offset().left;
        bodyListTop = $('#bodyList3').offset().top;
        bodyListBottom = $('.footer').offset().top;
        clientWidth = $(window).width();
        // console.log(111)
    })
    // 范围
    $(".imgContain").draggable({
        create: function (event, ui) { },
        drag: function (event, ui) {
            console.log(event, ui)
            var left = ui.offset.left;
            var top = ui.offset.top;
            // console.log(bodyList1left, bodyList2left, "滚滚滚", left, top)
            console.log(bodyList1left < left < bodyList2left)
            if (bodyList1left < left && left < bodyList2left) {
                if (bodyListTop < top && top < bodyListBottom) {
                    // console.log("在红色范围")
                    for (var i = 0; i < attr.length; i++) {
                       console.log($(event.target).children('img'),event.target.alt,attr[i].name)
                        if ($(event.target).children('img')[0].alt == attr[i].name) {
                            if (attr[i].color == "红色") {
                                attr[i].state = true
                                console.log(attr[i].state,'1')
                            } else {
                                attr[i].state = false
                            }
                        }
                    }
                }
            }
            if (bodyList2left < left && left < bodyList3left) {
                if (bodyListTop < top && top < bodyListBottom) {
                    // console.log("在黄色范围")
                    for (var i = 0; i < attr.length; i++) {
                        if (event.target.alt == attr[i].name) {
                            if (attr[i].color == "黄色") {
                                attr[i].state = true
                            } else {
                                attr[i].state = false
                            }
                        }
                    }
                }
            }
            if (bodyList3left < left && left < clientWidth) {
                if (bodyListTop < top && top < bodyListBottom) {
                    // console.log("在绿色范围")
                    for (var i = 0; i < attr.length; i++) {
                        if (event.target.alt == attr[i].name) {
                            if (attr[i].color == "绿色") {
                                attr[i].state = true
                            } else {
                                attr[i].state = false
                            }
                        }
                    }
                }
            }
        },
        start: function (event, ui) { },
        stop: function (event, ui) { }
    });
    $('.click').on('click', function () {
        console.log(attr, "结果")
        var node = $(".imgContain").children('img')
        console.log(node)
        for (var i = 0; i < attr.length; i++) {
            if (node[i].alt == attr[i].name) {
                console.log(node[i].alt,attr[i].name)
                console.log(attr[i].state)
                if(attr[i].state==true){
                    $(node[i]).parents().children('.imgInfo').children('#true').show()
                }else{
                    $(node[i]).parents().children('.imgInfo').children('#false').show()
                }

             }
        }
    })
});