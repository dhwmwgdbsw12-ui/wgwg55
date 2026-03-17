$(".on .play").click(function(){
$(".on").find("audio").get(0).play();
$(".on").find(".imgbox").addClass("active");
$(".on").find(".imgbox").removeClass("stop");    
})
$(".on .pause").click(function(){
$(".on").find("audio").get(0).pause();
$(".on").find(".imgbox").addClass("stop");     
})
$(".on .reload").click(function(){
$(".on").find("audio").get(0).load();    
$(".on").find(".imgbox").removeClass("active");
$(".on").find(".imgbox").removeClass("stop"); 
})
//선택.eq(0) ==tjsxorwk:nth_child(1) 

let num=0;
let eq=0 //0~7
$(".btn_next").click(function(){
num++ //1씩증가 num=num+1;
$(".contents").css({"transform":"rotate(" + (-45 * num) + "deg)"})
eq=eq==7?0:eq+1
$(".box").eq(eq).addclass("on");
$(".box").eq(eq).siblings().removeClass("on")
})
$(".btn_prev").click(function(){
num-- //1씩증가 num=num+1;
$(".contents").css({"transform":"rotate(" + (-45 * num) + "deg)"})
eq=eq==0?7:eq-1
$(".box").eq(eq).addclass("on");
$(".box").eq(eq).siblings().removeClass("on")
})
