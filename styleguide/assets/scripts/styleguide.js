console.log('Hello introduction module. This is an example of how to use Javascript in a module.');


$(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })

});


$(function() {
    var splitBtn = $('.x-split-button');

    $('button.x-button-drop').on('click', function() {
      if (!splitBtn.hasClass('open'))
          splitBtn.addClass('open');
    });

    $('.x-split-button').click(function(event){
        event.stopPropagation();
    });

    $('html').on('click',function() {
       if (splitBtn.hasClass('open'))
          splitBtn.removeClass('open');
    });
});
