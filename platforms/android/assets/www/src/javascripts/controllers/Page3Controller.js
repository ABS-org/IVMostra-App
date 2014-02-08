var Page3Controller = function(){};

Page3Controller.prototype = {
     initialize:function(){
         
     },
     destroy: function(){
         // unset events
         // stop ajax
         // destroy components
         IVMostra.scroll = null;
         PageLoad.ajxHandle = null;
     }
};