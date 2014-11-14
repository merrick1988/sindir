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