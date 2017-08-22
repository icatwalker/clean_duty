/**
 * Created by Administrator on 2017/5/17.
 */
/**
 * Created by Administrator on 2017/4/28.
 */
//页面结构设置
(function selSuit(){
    var html=document.getElementsByTagName("html")[0];
    var cw=document.documentElement.clientWidth;
    //ch 单页面应用 设置其高度为 竖屏高度。
    var ch=document.documentElement.clientHeight;
    //设置html的 fontsize 全宽为10rem; 因为chrome,font-size 不能小于10；
    html.style.fontSize=parseFloat(cw/10)+"px";
    //设置左中右布局的高度
    window.onresize=selSuit;
    var child_element=document.body.children;
    var child_count=document.body.children.length;
    for(var i=0;i<child_count;i++){
        //body 下的一个元素设置全宽。 如果不是单页面切换 BODY下只有一个元素
        child_element[i].style.width=cw+"px";
          child_element[i].style.overflowY="hidden";//如果是单页面 取消注释,表示
    }
})();