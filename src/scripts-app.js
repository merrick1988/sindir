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


(function () {
    "use strict";

    window.Menu = function() {

        var activeMenuClass = "nav__item--active",
            indicatorClass = ".nav__line__indicator",
            navItems = $(document).find('nav[data-role="navbar"] .nav__item'),
            setActiveMenuItem;

        this.setActiveMenuItem = function(){
            var activeItem = $.mobile.activePage[0].id;

            $.each(navItems, function () {
                $(this).removeClass(activeMenuClass);

                if ($(this).attr('data-link') == activeItem) {
                    $(this).addClass(activeMenuClass);

                    $(indicatorClass).offset({left: parseInt($(this).offset().left)});
                    $(indicatorClass).width(parseInt($(this).outerWidth()));
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
            var page;

            if (event.handled !== true) {
                page = $.mobile.activePage.parent().find('[data-page-index="' + pageIndex + '"]');
                if (page.length > 0) {
                    $.mobile.changePage(page, {transition: "slide", reverse: true}, true, true);
                    this.setActiveMenuItem();
                }
                event.handled = true;
            }
            return false;
        };

        return this;
    }
})();
(function () {
    "use strict";

    window.PicturesSwipe = function() {

        var loadingPicturesElement = "#picturesSwipeLoadingId",
            picturesListEmptyElement = "#picturesSwipeEmptyId",
            picturesListErrorElement = "#picturesSwipeErrorId",
            picturesListElement = "#picturesSwipeListId",
            pictureClass = ".picture",
            picturesSwipeLoading = false,
            picturesURL = "";

        this.getPictures = function(){
            var $loadingPicturesElement = $(loadingPicturesElement),
                $picturesContainerEmptyElement = $(picturesListEmptyElement),
                $picturesContainerErrorElement = $(picturesListErrorElement),
                $picturesContainerElement = $(picturesListElement),
                $picturesList = $(pictureClass),
                pictures = [];

            if (!picturesSwipeLoading) {
                picturesSwipeLoading = true;
                $picturesContainerEmptyElement.hide();
                $picturesContainerErrorElement.hide();
                $picturesContainerElement.hide();
                $loadingPicturesElement.show();
                setTimeout(function(){
                    pictures = [{
                        img: "images/1.jpg",
                        name: "Oleg",
                        age: "27"
                    },{
                        img: "images/2.jpg",
                        name: "Oleg 2",
                        age: "27 2"
                    },{
                        img: "images/3.jpg",
                        name: "Oleg 3",
                        age: "27 3"
                    }];
                    $picturesList.each(function(index, item){
                        var picture =  $(item)
                        picture.find("img").attr("src", pictures[index].img);
                        picture.find(".picture__text").text(pictures[index].name + ", " + pictures[index].age);
                        $loadingPicturesElement.hide();
                        picturesSwipeLoading = false;
//                    $picturesContainerEmptyElement.show(); // when response is empty array
//                    $picturesContainerErrorElement.show(); // when response is error
                        $picturesContainerElement.show(); // when response is success
                    })
                }, 1000)
            }
        };

        return this;
    }
})();
(function () {
    "use strict";

    window.User = function() {
        var isLoggedIn = false;

        this.logIn = function(){
            isLoggedIn = true;
        };

        this.logOut = function(){
            isLoggedIn = false;
        };

        this.initEvents = function(){
            $("input[name=gender]:radio").bind( "change", function(event, ui) {
                $(".registration-box").hide();
                $("#" + $(this).val() + "Registration").show();
            });
        };

        return this;
    }
})();