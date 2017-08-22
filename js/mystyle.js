/**
 * Created by Administrator on 2017/4/12.
 */
//°´Å¥js
$(".btn").on("mousedown",function(){
    console.log("1");
    console.log(this);
    $(this).toggleClass("active");
});
$(".btn").on("mouseup",function(){
    console.log("1");
    console.log(this);
    $(this).removeClass("active");
});