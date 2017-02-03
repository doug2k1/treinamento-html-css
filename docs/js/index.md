# JavaScript

JavaScript é uma linguagem interpretada, de tipagem dinâmica, desenvolvida por Brendan Eich, na Netscape, em 1995. 
Atualmente está na versão 6/2015 (EcmaScript 6, ES6, ES2015), mas a maioria dos browsers tem suporte completo até o ES5.

JS roda em browsers (client-side) ou no servidor (server-side) através do Node.js.

## Executando JS no Dev Tools

Você pode interagir com o JS de uma página ou executar um JS qualquer na aba console do Dev Tools (F12).

Logar informações no console:
```javascript
console.log(info);
```

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
var name = 'Fulano'; // string
var approved = true; // booleano
var rate = null; // nulo
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

Percorrer os elementos de um array (IE10+):

```javascript
// forEach
var a = [1, 2, 3];
var sum = 0;

a.forEach(function (element) {
   sum += element; 
});

// sum = 6
```

```javascript
// map
var a = [1, 2, 3];

var b = a.map(function (element) {
   return element * 2; 
});
// b = [2, 4, 6]
```

Mais info:  
<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array>


## Funções

```javascript
function add (a, b) {
    return a + b;
}
  
var x = add(3, 5);
```

```javascript
var add = function (a, b) {
    return a + b;
};
  
var x = add(3, 5);
```

## Objetos

```javascript
var product = {
    name: 'Preisteixu',
    price: 4000,
    details: {
        hd: 500,
        bluray: true
    },
    publish: function () {
        // function code
    }
};

var n = product.name;
var n2 = product['name'];
var hd = product.details.hd;
var hd2 = product['details']['hd'];
product.publish();
  
var stringKeys = {
    'person name': 'João',
    'birth-city': 'Campinas'
};

var n3 = stringKeys['person name'];
```

## Estruturas de controle

```javascript
// if, else
if (product.active) {
    product.publish();
}
  
if (paid) {
    generateInvoice();
} else {
    cancelOrder();
}
```

```javascript
// if ternário
var message = valid ? 'Ok' : 'Invalid';
```

```javascript
// switch
switch (level) {
    case 'high':
        receiveBonus();
        break;
    case 'medium':
        normalPay();
        break;
    case 'low':
        noPay();
        break;
    default:
        error();
        break;
}
```

## Estruturas de repetição

```javascript
// while
while (pending) {
    proccessOrder();
}
```

```javascript
// for
for (var i = 0; i < 10; i++) {
    console.log(i);
}
```

## Operadores booleanos

```javascript
1 == '1' // true: compara fazendo conversão de tipo
1 === '1' // false: deve ser do mesmo valor e mesmo tipo
a > b // maior
a >= b // maior ou igual
a < b // menor
a <= b // menor ou igual
a && b // E: true se a E b são verdadeiros
a || b // OU: true se a OU b é verdadeiro
!a // inverte (true vira false, false vira true)
  
// Ex:
if (price > 5000 && client.hasNoDebts()) {
    discount(0.1)
}
```
