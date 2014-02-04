var Page4Controller = function(){};

Page4Controller.prototype = {
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