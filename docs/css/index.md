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

## Unidades

cores (name, hex, rgb, rgba)
medidas: px, %, em

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

## Display

block, inline, inline-block, none, visibility, opacity

## Box Model

![ilustração box model](/css/css_box_model.gif "")

```css
div {
    width: 100px; /* largura */
    height: 100px; /* altura */
    padding: 10px; /* espaço entre as bordas e o conteúdo */
    border: 1px solid red; /* espessura, estilo e cor das bordas */
    margin: 5px; /* espaço do lado de fora das bordas */
}
```

Exemplo: [01-box-model.html](/css/examples/01-box-model.html)

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

## Posicionamento

position, float

## Pseudo classes

hover, focus, active

## Exercício

Estilizar o HTML do exercício anterior (pode modificar o HTML).
