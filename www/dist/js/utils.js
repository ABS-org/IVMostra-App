var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var upload_foto;

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;

      $(".btnCompartilhar").hide();
      $(".loading-upload").show();
      $.post('http://imagens.app.dev.atencaobasica.org.br/upload.php',{imagem: imageData},function(data){
          //alert(data)
         upload_foto = data;
         $(".btnCompartilhar").show();
         $(".loading-upload").hide();
      })
    }

  function capturePhotoEdit() {

      if(window.localStorage.getItem('facebook_accessToken') === "null" ||window.localStorage.getItem('facebook_accessToken') === "") {
          alert("Realize o Login no Facebook!");
          return false;
      }

      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }


    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }

function postFace(face,foto) {

  if(!face.isFacebookLogged()){
    alert("Realize o Login no Facebook");
    return false;
  }
 
  var photo = foto;
  
  var a = {message: 'Olá! Estou na IV Mostra Nacional de Experiências em Atenção Básica/Saúde da Família. #IVMostra #MostraSaúde',
  link: 'http://www.mostrasaude.net/',
  picture: foto,
  name: 'IV Mostra',
  caption: 'http://www.mostrasaude.net/',
  description: 'Valorizando a experiência, estimulando o protagonismo local.'};

  face.onFacebookPostFeed(a);
  face.onFacebookLogout();
  
  var smallImage = document.getElementById('smallImage');
  smallImage.src = "data:image/jpeg;base64,";

  alert('Compartilhado com Sucesso! ;-)')

}


$("#social").bind('pageshow', function() {

  window.localStorage.setItem('facebook_accessToken', null);
  if(facebook.isFacebookLogged()){
      $('#facebook_login').addClass("logoff");
      $('#facebook_login').click(facebook.onFacebookLogout);

  }else{ //NAO TIVER LOGADO
      $('#facebook_login').removeClass("logoff");
      $('#facebook_login').click(facebook.onFacebookLogin);
  }

});
