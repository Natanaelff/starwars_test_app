# starwars_test_app
----------------

## 📚 Requisitos:
.Ter Git instalado.<br>
.Ter o node instalado.<br>
.ter o expo instalado.<br>

## 🚀 Clone este repositório:
$ git clone https://github.com/Natanaelff/starwars_test_app.git

## 📂 Entrar no diretório:
$ cd starwars_test_app

## 💾 Instalar as dependências:
$ yarn

## 📲 Intalando as dependências do ios:
$ cd ios && pod install && cd ..

## 📱 Rodar a aplicação:
$ expo start 

<br>
<br>
<br>

## Conjunto de teste usado foi
. teste E2E - Detox

## Como executar o teste
. no terminal você executa o comando - $ yarn detox build -c android.emu.debug - para ser gerado a pasta build do android <br>
<br>
: depois do expo start abra dois terminais:<br>
. o 1 você executa yarn start<br>
. e no segundo você executa o teste - $ yarn detox test -c android.emu.debug
<br>
. Para o teste funcionar precisa estar rodando no emulador do android no modelo Pixel 3a XL API 29<br>
. e também o projeto startwars_test_app esteja buildado no emulador.
<br>
<br>
<br>
## Como fazer teste usando o git-flow
. executa no terminal o seguinte comando<br>
$ git flow release start 1.0<br>
. e para finalizar<br>
$ git flow release finish 1.0<br>

## E por fim, se divirtam no App.
