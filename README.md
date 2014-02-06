![alt text](https://raw.github.com/danielfeelfine/ivmostra-app/master/icon.png "IV Mostra") IV Mostra
============
### [Iniciando](#iniciando)  &nbsp; [Como testar](#como-testar)  &nbsp; [Reportar Bugs](https://github.com/ABS-org/ivmostra-app/search?q=&type=Issues)

> Aplicativo Mobile da 4º edição da Mostra de Atenção Básica à Saúde.


| **Devices Suportados** | **Potrait**   | **Landscape**  |
| ---------------------- |:-------------:| --------------:|
| iPhone 5C              | 320 x 548     | 568 x 300      |
| iPhone 4               | --- x ---     | --- x ---      |
| Galaxy SIII            | --- x ---     | --- x ---      |



## Iniciando

1. Instale os pacotes do ```node```
2. Instale as dependências do ```bower```
3. Compile as sources com o [Grunt](http://gruntjs.com/):
4. (opcional) Rode o comando ```grunt``` para observar as mudanças nas sources (com Livereload).

```
$ npm install
$ bower install
$ grunt dist-stylesheets && grunt dist-javascripts
```


## Como testar

É possível renderizar o App direto no browser. Para testar no device, é preciso antes fazer o ```build``` para a plataforma desejada.

Exemplo de build para iOS:

```phonegap build ios```

para Android:

```phonegap build android```



## Copyright

ABS-org © 2014 - IV Mostra
