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