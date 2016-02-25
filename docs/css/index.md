# CSS

## Formas de inserção

Inline:

```html
<p style="color: red">Texto em vermelho</p>
```

Via tag `<style>`, geralmente no `<head>`:

```html
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
```

Via arquivo separado: (Recomendado!)

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

## Sintaxe

```css
seletor {
    atributo: valor;
}

p {
    color: red;
    font-size: 13px;
    margin: 10px;
}
```

## Seletores

### Tag

Exemplo, mudar a cor de todos os parágrafos para vermelho:

```css
p {
     color: red;
}
```
### Classe

Exemplo, mudar a cor de todos os elementos que contenham o atributo `class="destaque"` para vermelho:

```css
.destaque {
     color: red;
}
```

Exemplo, mudar a cor de todos os elementos que contenham ambas as classes 'destaque' e 'erro':

```css
.destaque.erro {
     color: red;
}
```

### ID

Exemplo, mudar a cor apenas do elemento que contém o atributo `id="erro"` para vermelho:

```css
#erro {
     color: red;
}
```

### Atributo

Afeta todos os `<input type="text">`:

```css
input[type="text"] {
    color: blue;
}
```

**NOTA:** Estilos aplicados a um elemento afetam todos os elementos filhos. Ex:

```css
p {
    color: red;
}
span {
    font-weight: bold;
}
```

```html
<p> Este texto é vermelho, <span>esté é vermelho e negrito</span>.</p>
```

### Descendentes

```css
/* todo <span> dentro de <p>, mesmo que descendente indireto */
p span {
    color: red;
}
```

```css
/* apenas <span> que seja descendente direto de <p> */
p > span {
    color: red;
}
```

### Pseudo classes

```css
/* ponteiro do mouse sobre o elemento */
a:hover {
    color: red;
}

/* elemento com foco */
input:focus {
    color: red;
}

/* elemento é o primeiro filho do elemento pai */
li:first-child {
    color: red;
}
```

Exemplo: [04-selectors.html](/css/examples/04-selectors.html)

## Especificidade

Define a ordem de prioridade quando um elemento é afetado por mais de uma regra.

Ordem: inline > id > classe/pseudo classe/atributo > elemento

Exemplo:

```html
<!-- 1000 -->
<div id="myId">
    <p class="my-class" style="color: red">teste</p>
</div>
```

```css
/* 0110 */
#myId .my-class {
    color: orange;
}
/* 0100 */
#myId {
    color: blue;
}
/* 0010 */
.my-class {
    color: green;
}
/* 0001 */
p {
    color: yellow;
}

```

## !important

Tem prioridade máxima. Não recomendado.

```css
    p {
        color: red !important;
    }
```

## Unidades

Cores:

```css
p {
    color: red; /* nome da cor - deprecated */
    color: #FF0000; /* hexadecimal (red = FF, green = 00, blue = 00) */
    color: #f00; /* hexadecimal - versão reduzida */
    color: rgb(255, 0, 0); /* rgb */
}
```

Medidas:

```css
p {
    width: 100%; /* porcentagem em relação ao elemento pai */
    width: 500px; /* pixels */
    width: 0; /* 0 não precisa de unidade */

    font-size: 1.5em; /* relação ao tamanho de font do elemento pai */
}
```

## Textos

Fontes, tamanhos e cores:

```css
p {
    font-family: Arial, Helvetica, sans-serif; /* família de fontes - usa a primeira da lista que encontrar */
    font-size: 13px; /* tamanho */
    font-weight: bold; /* bold (negrito), normal */
    font-style: italic; /* italic, normal */
    color: #f00; /* cor do texto*/
    line-height: 15px; /* altura da linha */

    /* forma abreviada */
    /* weight style size/line-height family */
    font: bold italic 13px/15px Arial, Helvetica, sans-serif;
}
```

Alinhamento:

```css
p {
    text-align: center; /* center, left, right, justify */
}
```

Decoration, transform:

```css
p {
    text-decoration: underline; /* underline, overline, line-through, none */
    text-transform: uppercase; /* uppercase, lowercase, capitalize, none */
}
```
Exemplo: [03-texts.html](/css/examples/03-texts.html)

## Box Model

![ilustração box model](/css/css_box_model.gif "")

```css
div {
    width: 100px; /* largura */
    height: 100px; /* altura */
    padding: 10px; /* espaço entre as bordas e o conteúdo */
    border: 1px solid red; /* espessura, estilo e cor das bordas */
    margin: 5px; /* espaço do lado de fora das bordas - pode ser nagativo */
}
```

É possível definir margens, bordas e paddings diferentes em cada lado do elemento:

```css
div {
    /***************************** padding */
    padding-top: 1px; /* cima */
    padding-right: 2px; /* direita */
    padding-bottom: 3px; /* baixo */
    padding-left: 4px; /* esquerda */

    /* ou de forma abreviada: */
    padding: 1px 2px 3px 4px; /* sentido horário: cima, direita, baixo, esquerda */

    /* ou ainda: */
    padding: 5px 10px; /* cima e baixo com 5px, direita e esquerda com 10px */


    /***************************** margin: */
    margin-top: 1px;
    margin-right: 2px;
    margin-bottom: 3px;
    margin-left: 4px;

    margin: 1px 2px 3px 4px;

    margin: 5px 10px;


    /***************************** border */
    border-top: 1px solid red;
    border-right: 1px dotted blue;
    border-bottom: 1px dashed green;
    border-left: 1px double black;

    border-width: 1px 2px 3px 4px;
    border-width: 5px 10px;

    border-color: red green blue black;
    border-color: red green;

    border-style: solid dashed dotted double;
    border-style: solid dashed;

    /* pode combinar lados (top, right, bottom, left) com atributo (width, style, color): */
    border-left-color: red;
    border-top-width: 2px;
    border-bottom-style: solid;
}
```

Exemplo: [01-box-model.html](/css/examples/01-box-model.html)

## box-sizing: border-box

Adicionando `box-sizing: border-box` a largura (width) do elemento engloba padding e bordas, ao contrário do box model padrão onde a largura considera apenas a área dentro do padding.

Exemplo: [02-box-sizing.html](/css/examples/02-box-sizing.html)

Recomendação em novos projetos: aplicar `box-sizing: border-box` em todos os elementos, da seguinte forma:

```css
html {
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}
```

[Paul Irish recomendando border-box](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)

## Display

```css
p {
    display: block; /* block, inline, inline-block, none */
}
```

Exemplo: [05-display.html](/css/examples/05-display.html)

## Visibilidade e opacidade

```css
p {
    visibility: hidden; /* elemento invisível, mas ocupa espaço na página */
    opacity: 0.5; /* 0 a 1 */
}
```

Exemplo: [06-visibility-opacity.html](/css/examples/06-visibility-opacity.html)

## Posicionamento

```css
p {
    position: absolute; /* static (padrão), absolute, relative, fixed */
    float: left; /* left, right, none (padrão) */
}
```

Exemplo: [07-position-float.html](/css/examples/07-position-float.html)

## Background

color, image, position, repeat, shorthand

## Exercício

Estilizar o HTML do exercício anterior (pode modificar o HTML).
