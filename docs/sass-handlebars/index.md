# SASS / Handlebars

[products-store.zip](products-store.zip)

[products-store-v2.zip](products-store-v2.zip)

## Sugestão de tarefas

* Alterar o tema (cores do layout) para não ficar com "cara de Bootstrap" - [exemplo](new-layout.png)
* Novo Produto (botão, modal, formulário)
* Coluna ações (editar, remover)
* Tendência de vendas (high, medium, low)
* Dashboard (4 cards + 4 gráficos 2x2) - [exemplo de cards](cards.png)
* Indicador de loading

```css
/* color pallete */
$color-primary: #3F51B5;
$color-primary-light: #C5CAE9;
$color-primary-dark: #1A237E;
$color-secondary: #607D8B;
$color-secondary-light: #CFD8DC;
$color-secondary-dark: #263238;

/* Bootstrap */
$icon-font-path: 'node_modules/bootstrap-sass/assets/fonts/bootstrap/';
$navbar-inverse-bg: $color-primary;
$navbar-inverse-border: transparent;
$navbar-inverse-color: $color-primary-light;
$navbar-inverse-link-color: #fff;
$label-primary-bg: $color-secondary-dark;

$thumbnail-width: 50px;
$thumbnail-height: $thumbnail-width;
```
