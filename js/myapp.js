/**
 * Created by Administrator on 2017/8/21.
 */
//var myChart=echarts.init(document.getElementById('main'));
//myChart.setOption({
//    title:{text:"值日安排表"},
//    series : [
//        {
//            name: '访问来源',
//            type: 'pie',
//            radius: '55%',
//            data:[
//                {value:1, name:'a'},
//                {value:1, name:'b'},
//                {value:1, name:'c'},
//                {value:1, name:'d'}
//
//            ]
//        }
//    ]
//});
//面向对象
var CleanDuty={
    init_data:[["Dr","Lmf","Mxj","Zp"],["Zp","Dr","Lmf","Mxj"],["Mxj","Zp","Dr","Lmf"],["Lmf","Mxj","Zp","Dr"]],
    init_mon:"",
    init_date:"2017/8/21 00:00:00", //起始周的任意一天。
    day_during:24*3600*1000,
    now_date:new Date(),
    weeks:"",
    No:"",//执行第几组 数据 。
    get_init_mon: function () {
        var init_date=new Date(this.init_date);
        var init_date_time=init_date.getTime();
        var weekday=init_date.getDay();
        var during=(weekday-1)*this.day_during;
        var monDate=new Date(init_date_time-during);
        this.init_mon=monDate;
        return this;
    },
    get_during_weeks:function(){
       var  now_date_time=this.now_date.getTime();
        var init_mon_time=this.init_mon.getTime();
        //计算起始周 到  “今天” 过了多少天，从何能算出过了多少周
        this.weeks=parseInt((now_date_time-init_mon_time)/this.day_during/7);
        this.No=this.weeks%4;//因为有4组数据；
        console.log(this.weeks);
        return this;
    },
    updateData:function(){
        for( var i=0;i<=$(".name").length;i++){
            $( $(".name")[i]).html("").html(this.init_data[this.No][i]);
            switch ($( $(".name")[i]).html()){
                case "Dr":$( $(".name")[i]).css("background","red"); break;
                case "Lmf":$( $(".name")[i]).css("background","green");break;
                case "Mxj":$( $(".name")[i]).css({"background":"yellow","transform":"rotate(360000deg)","transition":"transform 8640s linear"});break;//相当于转好多圈
                case "Zp":$( $(".name")[i]).css("background","#0f0");break;
            }
        }
            //$(item).html(this.init_data[this.No][i]);
        return this;
    }
};

CleanDuty.get_init_mon().get_during_weeks().updateData();//调下 才能获得星期一；

$("#time").html("星期"+new Date().getDay()+" "+new Date().Format("hh:mm:ss"));
setInterval(function(){
    $("#time").html("星期"+new Date().getDay()+" "+new Date().Format("hh:mm:ss"));
    if(new Date().getHours()==0&&new Date().getMinutes()==0&&new Date().getSeconds()==0){
        CleanDuty.get_init_mon().get_during_weeks().updateData();
    }
},1000);
if(new Date().getDay()==6){
    setInterval(function(){
        $("#time").toggleClass("active");
    },3000);
}
$("ul>li").click(function(){
    $(this).children(".detail").toggleClass("active").parent("li").siblings().children(".detail").removeClass("active");
});
