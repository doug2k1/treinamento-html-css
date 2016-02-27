# CSS3

## Seletores

```css
/* último filho */
p:last-child { ... }
/* enésimo filho */
p:nth-child(2) { ... }
/* elemento sem conteúdo */
p:empty { ... }
/* nega um seletor */
p:not(.xpto) { ... }
/* desabilitado */
input:disabled { ... }
/* checkbox/radio selecionado */
input:checked { ... }
```

Exemplo: [01-selectors.html](/css3/examples/01-selectors.html)

## Cantos arrendondados

```css
div {
    border-radius: 10px;
    border-radius: 5px 6px 7px 8px; /* top-left, top-right, bottom-right, bottom-left */
    border-radius: 10px 20px; /* top-left bottom-right, top-right bottom-left */
}
```
Exemplo: [02-border-radius.html](/css3/examples/02-border-radius.html)

## Sombras

```css
div {
    /* horizontal, vertical, blur, spread, cor */
    box-shadow: 3px 3px 5px 10px rgba(255, 0, 0, 0.5);

    /* sombra interna */
    box-shadow: inset 3px 3px 5px 10px rgba(255, 0, 0, 0.5);

    /* sombra em texto */
    /* horizontal, vertical, blur, color */
    text-shadow: 3px 3px 5px #000;

    /* é possível ter multiplas sombra em um mesmo elemento */
    text-shadow: 3px 3px 5px #000, 4px 4px 0 #ccc;
}
```
Exemplo: [03-shadows.html](/css3/examples/03-shadows.html)

## Web fonts

Melhor compatibilidade:

```css
@font-face {
    font-family: 'MyWebFont';
    src: url('webfont.eot'); /* IE9 Compat Modes */
    src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
        url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
        url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
```

Compatibilidade razoável (IE9, Safari 5.1, Android 4.4):

```css
@font-face {
    font-family: 'MyWebFont';
    src: url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
}
```

Usando a fonte:

```css
body {
    font-family: 'MyWebFont', Arial, sans-serif;
}
```

Ferramenta para geração de webfonts: [Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator)

Exemplo: [04-webfonts.html](/css3/examples/04-webfonts.html)

### Google Fonts

https://www.google.com/fonts

## Transições

```css
div {
    /* propriedade, duração, timming function, delay */
    transition: background-color 0.5s ease 1s;

    /* propriedades separadas */
    transition-property: width;
    transition-duration: 500ms;
    transition-timing-function: ease-in; /* ease, linear, ease-in, ease-out, ease-in-out, step-start, step-end */
    transition-delay: 1s;
}
```

**Unidades de tempo**: segundos `2s` ou milisegundos `500ms`

Propriedades "transitáveis": [MDN - CSS animated properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

Exemplo: [05-transitions.html](/css3/examples/05-transitions.html)

## Transformações

```css
div {
    transform: [funções de transformação];
    transform-origin: 50% 50%; /* número, porcentagem ou keywords (center top bottom left right) */
}
```

### Escala

```css
div {
    transform: scale(2); /* proporcionalmente */
    transform: scale(2, 3); /* horizontal e vertical */
    transform: scaleX(0.5) scaleY(3); /* horizontal e vertical separados */
    transform: scaleX(-1); /* pode ser negativo: vai inverter o elemento */
}
```

### Skew

```css
div {
    transform: skewX(30deg); /* "entorta" para a direita ou esquerda */
    transform: skewY(25deg); /* "entorta" para cima ou para baixo */
}
```

**Unidade de ângulo**: graus `45deg` (existem outras, mas graus é a mais fácil de trabalhar)

### Translação

```css
div {
    transform: translate(10px 10px);
    transform: translateX(10px) translateY(10px);
}
```

### Rotação

```css
div {
    transform: rotate(30deg); /* se negativo gira no sentido anti-horário */
}
```

Exemplo: [06-transform.html](/css3/examples/06-transform.html)

## Animação
