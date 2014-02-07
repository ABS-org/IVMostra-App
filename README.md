![alt text](https://raw.github.com/danielfeelfine/ivmostra-app/master/icon.png "IV Mostra") IV Mostra
============
### [Iniciando](#iniciando)  &nbsp; [Como testar](#como-testar)  &nbsp; [Reportar Bugs](https://github.com/ABS-org/ivmostra-app/search?q=&type=Issues)

> Aplicativo Mobile da 4º edição da Mostra de Atenção Básica à Saúde.


| **Devices Suportados** | **Potrait**   | **Landscape**  |
| ---------------------- |:-------------:| --------------:|
| iPhone 5C              | 320 x 548     | 568 x 300      |
| iPhone 4               | --- x ---     | --- x ---      |
| Galaxy SIII            | --- x ---     | --- x ---      |

*Check [here](http://viewportsizes.com/mine/) your device viewport size and add it!*


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

É possível renderizar o App direto no browser. Para testar no device, é preciso antes fazer o ```build``` para a plataforma desejada.

Exemplo de build para iOS:

```phonegap build ios```

para Android:

```phonegap build android```



## Copyright

ABS-org © 2014 - IV Mostra
