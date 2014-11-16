$(function () {
    window.menu = new Menu();
    window.picturesSwipe = new PicturesSwipe();
    window.user = new User();

//    $("#sidebar").panel();
//    $("[data-role='header']").toolbar();

    setTimeout(function () {
        user.initEvents();
//        menu.setActiveMenuItem();
//        picturesSwipe.getPictures();
        $( "input[type='radio']#male" ).prop( "checked", true ).checkboxradio( "refresh").trigger("change");
    }, 100);

    $(document).on("pageshow","#pictures",function(){
        setTimeout(function () {
//            picturesSwipe.getPictures();
        }, 100);
    });

    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        menu.nextPage(event);
    });

    $( document ).on( "swiperight", ".ui-page", function( event ) {
        menu.prevPage(event);
    });
});

