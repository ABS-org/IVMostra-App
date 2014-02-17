
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
