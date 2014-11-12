$(function () {
    window.menu = new Menu();

    $(document).on("pageinit", function () {
        $("#sidebar").panel();
        $("[data-role='header']").toolbar();
    });

    $(document).on("pageshow", function () {
        menu.setActiveMenuItem();
    });

    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        menu.nextPage(event);
    });

    $( document ).on( "swiperight", ".ui-page", function( event ) {
        menu.prevPage(event);
    });
});

