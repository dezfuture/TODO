// Check off specific todos by clicking

// This you cvan do cut or activate li

// $("li").click(function(){
    
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css("color", "black");
//         $(this).css("textDecoration", "none");
//     }else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// });

// The more easy way of doing the above is through class

$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});

// Click on X to delete todo

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropogation();
});

$("input[type= 'text").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
    }
}); 

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});