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