# JS no Browser

## O objeto window

É o objeto global que contém toda a API do JS, bem como as variáveis do programa.

A palavra `window` pode ser omitida. Ex:

```javascript
window.Math.PI;
Math.PI;
  
var x = 'Meu valor';
window.x; // 'Meu valor';
```

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

## Selecionando e manipulando elementos

```javascript
// IE9+
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


jQuery
Ajax

ES6

