# JS no Browser

## DOM

**Document Object Model**: é a representação em JS do HTML da página, em forma de árvore.

```
html
  |- head
    |- title
  |- body
    |- div.main
    |- div.footer
```

## jQuery

Biblioteca JS que oferece funções para busca e manipulação no DOM, tratamento de eventos, Ajax.

<http://www.jquery.com>

## Selecionando e manipulando elementos

```javascript
// IE9+
// retorna o primeiro elemento
var title = document.querySelector('h1');
  
// retorna todos os elementos encontrados
var footerLinks = document.querySelectorAll('.footer a');
  
footerLinks.forEach(function (link) {
    link.className = 'new-class';
});
```

Com jQuery:

```javascript
var footerLinks = $('.footer a');
  
footerLinks.addClass('new-class');
```

## Eventos

Em JS você pode executar alguma ação quando algo acontece na página, geralmente resultado da ação do usuário.

```javascript
var logo = document.querySelector('#logo');
  
logo.addEventListener('click', function (event) {
    // tratamento do evento aqui
});
```

Com jQuery:

```javascript
var logo = $('#logo');
  
logo.on('click', function (event) {
    // tratamento do evento aqui
});
```

Alguns eventos que podem ser tratados:

```javascript
focus, blur, change, 
submit, 
resize, scroll, 
keydown, keyup, 
mouseenter, mouseleave, click
```

### Exercícios

1. Validar campo de e-mail (no change verifica o valor, se estiver errado, adiciona uma classe)
2. Limitador de caracteres em textarea (mostrar contador)
3. Abas (exibir conteúdo correspondente ao clicar na aba)


## Ajax

Asynchronous JavaScript And XML. Código JS que faz uma requisição assíncrona ao servidor, 
e trata o retorno desta requisição, sem ocasionar um recarregamento da página.

```javascript
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);
  
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
  } else {
    // We reached our target server, but it returned an error
  
  }
};
  
request.onerror = function() {
  // There was a connection error of some sort
};
  
request.send();
```

Com jQuery:

```javascript
$.get('/my/url')
    .done(function () {
        // Success!
        var resp = request.responseText;
    })
    .fail(function () {
        // error
    });
```
