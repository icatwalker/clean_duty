﻿Function.prototype.addFunction = function (name, fn) {// 基于jquery 引用时候放到 jquery 后
    this.prototype[name] = fn;
    return this;//链式添加方法；
};
var Mxjfn = new Function();
Mxjfn//类库
    .addFunction("showItem", function (selector) {//点击 有样式变化， 下拉框 
        $(selector).on("click", function () {
            $(this)
                .toggleClass("active")
                .next().toggle("slow");
        });
        return this;
    })
    .addFunction("key_home", function (selector, key) {//触发的按键，和 按键code 元素中要有onclick
        $("body").bind('keypress', function (event) {
            if (event.keyCode == key) { $(selector).click() }
        });
        return this;
    })
    .addFunction("selectAll", function (faSel,childSel) {// 点击复选框 ， 用的时候复制一份 faSel有唯一标示 ,子元素有统一class 或标示
        function doCheck() {
            var ch = $(childSel);
            if ($(faSel).prop("checked")==true) {
                $.each(ch, function (i, item) {
                    item.checked = true;
                });
            } else {
                $.each(ch, function (i, item) {
                    item.checked = false;
                });
            }
        }
        $(faSel).click(function () {
            doCheck();
        });
        return this;
    })
    .addFunction("rd_color", function (min_color,max_color,opacity) {//随即颜色
        var r= Math.floor(Math.random()*(max_color-min_color)+min_color);
        var g= Math.floor(Math.random()*(max_color-min_color)+min_color);
        var b= Math.floor(Math.random()*(max_color-min_color)+min_color);
        if(arguments.length==2){
            return "rgba("+r+","+g+","+b+",1)";
        }
        if(arguments.length==3){
            return "rgba("+r+","+g+","+b+","+opacity+")";
        }
        return this;
    })



    .addFunction("aaa", function () {//标准格式， 用的时候复制一份
        return this;
    });

//原型继承 方法
Date.prototype.Format = function (fmt) { //author: yyyy-mm-dd hh-mm-ss 各种格式都行。
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
