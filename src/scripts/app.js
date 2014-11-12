$(function () {
    window.menu = new Menu();

    $("#sidebar").panel();
    $("[data-role='header']").toolbar();

    setTimeout(function () {
        menu.setActiveMenuItem();
    }, 100);


    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        menu.nextPage(event);
    });

    $( document ).on( "swiperight", ".ui-page", function( event ) {
        menu.prevPage(event);
    });
});

