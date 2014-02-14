![alt text](https://raw.github.com/danielfeelfine/ivmostra-app/master/icon.png "IV Mostra") IV Mostra
============
### [Iniciando](#iniciando)  &nbsp; [Como testar](#como-testar)  &nbsp; [Reportar Bugs](https://github.com/ABS-org/ivmostra-app/search?q=&type=Issues)

> Aplicativo Mobile da 4º edição da Mostra de Atenção Básica à Saúde.


| **Devices**            | **Inches**    | **Resolution**  | **PPI** | **Ok?** |
| ---------------------- |:-------------:| ---------------:|--------:|--------:|
| iPhone 5               | 4             | 640 x 1136      | 326     | X       |
| iPhone 4               | 3.5           | 640 x 960       | 326     | X       |
| Galaxy SIII            | 4.8           | 720 x 1280      | 306     | X       |
| LG Nexus 4 E960        | 4.7           | 768 x 1280      | 318     | X       |

*Veja [aqui](http://mobile.smashingmagazine.com/2013/03/21/responsive-web-design-with-physical-units/) o tamanho de tela do seu device e adicione-o!*


## Iniciando

1. Instale os pacotes do [Node.js](http://nodejs.org/)
2. Instale as dependências do [Bower](http://bower.io/)
3. Compile as sources com o [Grunt](http://gruntjs.com/)

```
$ npm install
$ bower install
$ grunt
```

*Após qualquer modificação nas sources, é feita compilação automática e refresh com LiveRealod.*


## Como testar

É possível renderizar o App direto no browser, executando o ```www/index.html```
Para testar no device, é preciso antes fazer o ```build``` para a plataforma desejada.


Adicione os plugins:

[Geolocation](https://cordova.apache.org/docs/en/3.0.0/cordova_geolocation_geolocation.md.html)
```cordova plugin add org.apache.cordova.geolocation```

[Camera](https://cordova.apache.org/docs/en/3.0.0/cordova_camera_camera.md.html)
```cordova plugin add org.apache.cordova.camera```

[InAppBrowser](http://cordova.apache.org/docs/en/3.0.0/cordova_inappbrowser_inappbrowser.md.html)
```cordova plugin add org.apache.cordova.inappbrowser```

Exemplo de build para iOS:

```phonegap build ios```

para Android:

```phonegap build android```

#### QR Code
![alt text](https://raw.github.com/danielfeelfine/ivmostra-app/master/QRCode.png "QR Code")

gerado em: [Phonegap Build](https://build.phonegap.com/apps/765810/builds)

## Copyright

ABS-org © 2014 - IV Mostra
