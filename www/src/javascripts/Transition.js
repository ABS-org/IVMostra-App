
(function(window) {

    // Transition object
    var Transition = window.Transition = {
        control: false,
        class: 'transitionApp1'
    };

    /* effects, for select one effect, create or view effects in transitions.css */
    Transition.animations = {
        'home.html': 'transitionApp1',
        'about.html': 'transitionApp1',
        'page1.html': 'transitionApp1',
        'page2.html': 'transitionApp2',
        'page3.html': 'transitionApp3',
        'page4.html': 'transitionApp4',
        'page5.html': 'transitionApp5'
    }
    // Get current class for page
    Transition.getClassAnimation = function(page) {
        if (Transition.animations.hasOwnProperty(page)) {
            return Transition.animations[page];
        }
        return Transition.class;
    }

    // Start transition
    Transition.start = function() {
        IVMostra.$content.addClass(Transition.class);
    };
    // End transition with listener
    Transition.End = function() {
        if (Transition.control) {
            PageLoad.load(Navigator.currentPage);

            Transition.control = false;
            if (!Navigator.isBack) {
                window.History.pushState(null, null, Navigator.currentPage);
            }
        }
    };
    // toggleMenu
    Transition.toggleMenu = function() {
        if (!IVMostra.$menu.hasClass("transitionMenuAppStart")) {
            Transition.showMenu();
        } else {
            Transition.hideMenu();
        }
    };
    // Hide panel menu
    Transition.hideMenu = function() {
        IVMostra.$menu.removeClass("transitionMenuAppStart");
        IVMostra.$content.removeClass("transitionContentAppStart");
        IVMostra.$headerApp.removeClass("transitionContentAppStart");
    };
    // Show panel menu
    Transition.showMenu = function() {
        IVMostra.$menu.addClass("transitionMenuAppStart");
        IVMostra.$content.addClass("transitionContentAppStart");
        IVMostra.$headerApp.addClass("transitionContentAppStart");
    };

})(window);