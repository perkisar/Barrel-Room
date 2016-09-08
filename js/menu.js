function populateMenu() {
    var container = $('.tab-content');

    // if lunch tab (default)

    // if dinner tab

    // if happy hour tab

    // if wine tab

    // if cocktail tab
};


function menuToggle(id) {

    console.log(id.childNodes);

    p = $(id.childNodes[3]);
    tab = $(id.childNodes[5]);
    if (p.hasClass("hidden")) {
        p.removeClass("hidden");
        tab.removeClass("hidden");
    }
    else {
        p.addClass("hidden");
        tab.addClass("hidden");
    }

};