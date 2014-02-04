var AboutController = function(){};

AboutController.prototype = {
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