# Design Responsivo

Design que se adapta a diferentes tamanhos de telas.

Exemplos: <http://mediaqueri.es/>

## Layout fluido

Usar medidas em %.

## Meta viewport

```html
    <meta name="viewport" content="width=device-width, initial-scale=1">
```

## Media queries

```css
    @media screen and (max-width: 800px) {
        #nav {
            display: none;
        }
    }

    @media screen and (min-width: 300px) {
        .mini-nav {
            display: block;
        }
        .container {
            width: 100%;
        }
    }
```
