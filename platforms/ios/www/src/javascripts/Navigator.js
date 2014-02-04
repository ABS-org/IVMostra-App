
(function(window) {
    // Navigator object
    var Navigator = window.Navigator = {
        control: true,
        currentPage: '',
        isBack: false
    };
    // Load page
    Navigator.loadPage = function() {
        Transition.control = true;
        Navigator.currentPage = $(this).data("url");

        if (IVMostra.currentController != null){
            // unset everything in the previous controller
            // prevent memory leaks
            IVMostra.currentController.destroy();
        }

        // Create new controller
        switch(Navigator.currentPage){
            case 'home.html':
                IVMostra.currentController = new HomeController();
            break;
            case 'about.html':
                IVMostra.currentController = new AboutController();
            break;
            case 'page1.html':
                IVMostra.currentController = new Page1Controller();
            break;
            case 'page2.html':
                IVMostra.currentController = new Page2Controller();
            break;
            case 'page3.html':
                IVMostra.currentController = new Page3Controller();
            break;
            case 'page4.html':
                IVMostra.currentController = new Page4Controller();
            break;
            case 'page5.html':
                IVMostra.currentController = new Page5Controller();
            break;
            default:
                alert('No controller found.');
            break;
        }

        // once new controller created, initialize it
        if (IVMostra.currentController != null){
            IVMostra.currentController.initialize();
        }

        Transition.class = Transition.getClassAnimation(Navigator.currentPage);
        Transition.start();
    };


})(window);