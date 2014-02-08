
(function(window) {

    // Page load object
    var PageLoad = window.PageLoad = {
        ajxHandle: null
    };

    // Load ajax 
    PageLoad.load = function(page) {
        PageLoad.ajxHandle = $.get("pages/" + page, PageLoad.success);
    };
    // Sucess load
    PageLoad.success = function(content) {
        // Add content in #page
        IVMostra.$content.html(content);

        // Scroll
        IVMostra.$content.height(window.innerHeight - IVMostra.$headerApp.height());
        IVMostra.myScroll = new IScroll(IVMostra.elContent, {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true
        });

        Transition.hideMenu();
        IVMostra.$content.removeClass(Transition.class);
    };


})(window);