(function () {
    "use strict";

    window.Menu = function() {

        var activeMenuClass = "nav__item--active",
            navItems = $(document).find('nav[data-role="navbar"] .nav__item'),
            setActiveMenuItem;

        this.setActiveMenuItem = function(){
            var activeItem = $.mobile.activePage[0].id;

            $.each(navItems, function () {
                $(this).removeClass(activeMenuClass);

                if ($(this).attr('data-link') == activeItem) {
                    $(this).addClass(activeMenuClass);
                }
            });
        };

        this.nextPage = function(event){
            var nextPage;

            if (event.handled !== true) {
                nextPage = $.mobile.activePage.next('[data-role="page"]');
                if (nextPage.length > 0) {
                    $.mobile.changePage(nextPage, {transition: "slide", reverse: false}, true, true);
                    this.setActiveMenuItem();
                }
                event.handled = true;
            }
            return false;
        };

        this.prevPage = function(event){
            var prevPage;

            if (event.handled !== true) {
                prevPage = $.mobile.activePage.prev('[data-role="page"]');
                if (prevPage.length > 0) {
                    $.mobile.changePage(prevPage, {transition: "slide", reverse: true}, true, true);
                    this.setActiveMenuItem();
                }
                event.handled = true;
            }
            return false;
        };

        this.navigateTo = function (pageIndex) {
            event.preventDefault();
            if ($.mobile.activePage.attr('data-page-index') < pageIndex) {
                this.nextPage(event);
            } else {
                this.prevPage(event);
            }


        };

        return this;
    }
})();