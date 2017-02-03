# JavaScript

JavaScript é uma linguagem interpretada, de tipagem dinâmica, desenvolvida por Brendan Eich, na Netscape, em 1995. 
Atualmente está na versão 6/2015 (EcmaScript 6, ES6, ES2015), mas a maioria dos browsers tem suporte completo até o ES5.

JS roda em browsers (client-side) ou no servidor (server-side) através do Node.js.

## Executando JS no Dev Tools

Você pode interagir com o JS de uma página ou executar um JS qualquer na aba console do Dev Tools (F12).

## Incluindo JS em uma página web

```html
<!-- inline -->
<script>
  // isto é js
  var hello = 'Hello';
  console.log(hello)
</script>

<!-- externo -->
<script src="script.js"></script>
```

## Variáveis, tipos de dados e operadores

### Declaração de variável

```javascript
var x = 1, // inteiro
    y = 2.75; // decimal (float)
var nome = 'Fulano'; // string
var aprovado = true; // booleano
var nota = null; // nulo
var cpf; // undefined
```

### Operadores

```javascript
x = a + b; // soma números ou concatena strings: 'java' + 'script' => 'javascript'
x = a - b;
x = a * b;
x = a / b;
x = 10 % 3; // 1

x += 1; // x = x + 1
x -= 1;
x *= 1;
x /= 1;
x %= 1;

a++; // incrementa
b--; // decrementa
```

## Arrays

### Declaração

```javascript
// literal
var a = []; // declara array vazio
var b = [1, 2, 3]; // array com elementos
var c = [1, 'Nome', false]; // pode misturar tipos

// classe Array
var d = new Array(); // array vazio
var e = new Array(3); // array com 3 elementos undefined
```

### Manipulação

```javascript
var c = [1, 'Nome', false];

// acessar elemento
var d = c[0]; // 1

// adicionar no final
c.push(10); // [1, 'Nome', false, 10]
// remover do final
c.pop(); // 10
// adicionar no início
c.unshift(10); // [10, 1, 'Nome', false]
// remover do início
c.shift(); // 10
```

Mais info:  
<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array>


## Funções

```javascript
function soma (a, b) {
    return a + b;
}

var x = soma(3, 5);
```

```javascript
var soma = function (a, b) {
    return a + b;
};

var x = soma(3, 5);
```

## Objetos

```javascript
var produto = {
    nome: 'Preisteixu',
    preco: 4000,
    detalhes: {
        hd: 500,
        bluray: sim
    }
};

var n = produto.nome;
var n2 = produto['nome'];
var hd = produto.detalhes.hd;
var hd2 = produto['detalhes']['hd'];

var chavesString = {
    'nome do cara': 'João',
    'cidade-natal': 'Campinas'
};

var n3 = chavesString['nome do cara'];
```

if, if ternário, switch, for, while
operadores boleanos e de comparação
"classes"

Browser
objeto window
DOM
eventos

jQuery
Ajax

ES6

