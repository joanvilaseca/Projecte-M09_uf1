/*----------------------
     BURGER MENU
----------------------*/
MobileMenu = {
    init: function () {
        $(".mobile-menu-btn").click(function () {
            $(".mobile-menu").toggleClass("menu-open");
            $(".mobile-menu-btn").toggleClass("menu-open");
        })


    }
};

/*----------------------
      DATE PICKER
----------------------*/
DatePicker = {
    init: function () {
        $(function () {
            $('[type="date"].min-today').prop('min', function () {
                return new Date().toJSON().split('T')[0];
            });
        });
    }
};

$(document).ready(function () {
    MobileMenu.init();
    DatePicker.init();
});


