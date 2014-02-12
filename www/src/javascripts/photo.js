function uploadPhoto(imageURI) {
   var options = new FileUploadOptions(); 
   options.fileKey="file"; 
   options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
   options.mimeType="image/jpg";
   var params = new Object();
   params.headers={'headerParam':'headerValue'};
   options.params = params;
   options.chunkedMode = false;
   var ft = new FileTransfer();
   ft.upload(imageURI, "http://webservice.updigital.me/uploader/list/";, win, fail, options); 
}

function win(file) {
  var reader = new uploadPhoto();
  reader.onloadend = function (evt) {
    console.log("read success");
    console.log(evt.target.result);
  };
  reader.readAsDataURL(file);
};

var fail = function (error) {
  console.log(error.code);
};