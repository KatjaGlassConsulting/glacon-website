
function toggleSmallMenu() {
    $("#smallSubmenu").toggleClass("slideup slidedown");
}

function toggleSmallSubMenu() {
    $("#smallSubSubMenu").toggleClass("slideup slidedown");
    $("#smallSubMenuArrow").toggleClass("fa-caret-right fa-caret-down");
}

function toggleVisibilty(item, itemArrow){
    $(item).toggleClass("slideup slidedownflex");
    $(itemArrow).toggleClass("fa-caret-right fa-caret-down");
}

$(document).ready(function () {
    $('.ui.dropdown').dropdown();
});
