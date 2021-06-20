
function update(){

    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}



$(".togglebutton").hover(function(){
    $(this).addClass("highlightedButton");
}, function() {
    $(this).removeClass("highlightedButton");
});

$(".togglebutton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    var panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");

    var numberOfActivePanels = $(".hidden").length;
    
    $(".panel").width(($(window).width()/(4 - numberOfActivePanels)) - 10);
});

$("textarea").height($(window).height()-$("#header").height()+1);

$(".panel").width(($(window).width()/2)-10);

update();


$("textarea").on('change keyup paste',function(){
    update();

});