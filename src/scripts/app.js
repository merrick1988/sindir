$(function () {
    window.menu = new Menu();
    window.picturesSwipe = new PicturesSwipe();

    $("#sidebar").panel();
    $("[data-role='header']").toolbar();

    setTimeout(function () {
        menu.setActiveMenuItem();
        picturesSwipe.getPictures();
    }, 100);

    $(document).on("pageshow","#pictures",function(){
        setTimeout(function () {
            picturesSwipe.getPictures();
        }, 100);
    });

    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        menu.nextPage(event);
    });

    $( document ).on( "swiperight", ".ui-page", function( event ) {
        menu.prevPage(event);
    });
});

