var AppController = function(){};

AppController.prototype = {
     initialize:function(){
      	console.log("Bem vindo a IV Mostra.");
     },
     destroy: function(){
         // unset events
         // stop ajax
         // destroy components
         IVMostra.scroll = null;
         PageLoad.ajxHandle = null;
     }
};