
(function(window) {
    // IVMostra object
    var IVMostra = window.IVMostra = {
        myScroll: null,
        currentController:null,
        elContent: "#content", //set here content app
        first: true,
        $menu: null,
        $content: null,
        $headerApp: null,
    };
    // Init project
    IVMostra.init = function() {
        IVMostra.setDomElements();
        this.addEventListeners();
        this.definitions();
        PageLoad.load('home.html');
    };
    // Set IVMostra elements
    IVMostra.setDomElements = function() {
        IVMostra.$menu = $("#menu");
        IVMostra.$content = $(IVMostra.elContent);
        IVMostra.$headerApp = $('#header-app');
    }
    // Set definitions project
    IVMostra.definitions = function() {
        //fastclick, performance library of mouse events to touch events
        FastClick.attach(document.body);
        //block drag "navegator box"
        $(document).on('touchmove', function(event) {
            event.preventDefault();
        });
    };
    // Set IVMostra listeners
    IVMostra.addEventListeners = function() {
        // load internal pages
        $("#page").on('click', '.botoes-app', Navigator.loadPage);
        // listener end transition
        IVMostra.$content.on("webkitTransitionEnd transitionend MSTransitionEnd", Transition.End);
        // listener menu button
        $("#page").on('click', "#menu-button", Transition.toggleMenu);
        // listener swipe events
        Hammer(document).on("swipeleft", Transition.toggleMenu);
        Hammer(document).on("swiperight", Transition.toggleMenu);
        // history # listener
        History.bind('popstate', function() {
            if (IVMostra.first) {
                IVMostra.first = false;
                return;
            }
            Navigator.currentPage = location.href
                    .split('/').pop();

            if (Navigator.currentPage.indexOf('.html') < 0) {
                return false;
            }

            Navigator.isBack = true;

            Transition.control = true;
            Transition.class = Transition.getClassAnimation(Navigator.currentPage);
            Transition.start();
        });
    };
})(window);