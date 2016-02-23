# HTML

HTML é uma linguagem de marcação, usada para estruturar o conteúdo de uma página.

## Sintaxe

```html
<!-- tag com conteúdo -->
<tag atributo="valor">conteúdo</tag>

<!-- tag sem conteúdo -->
<tag>
```

## DOCTYPE e html

O `DOCTYPE` diz para o navegador que o documento é um HTML. Vem antes de qualquer outra tag no documento.
A tag `<html>` engloba todo o documento.

```html
<!DOCTYPE html>
<html>

</html>
```

## Tags head e body

No `<head>` ficam metadados da página, informações não visíveis ao usuário (exceto o título).
No `<body>` fica o conteúdo que será apresentado ao usuário.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Título da página</title>
    </head>
    <body>
        <p>Um parágrafo de texto.</p>
    </body>
</html>
```

## Textos

Cabeçalhos e parágrafos.

```html
<h1>Cabeçalho de nível 1 - O principal do documento</h1>
<h2>Cabeçalho nível 2</h2>
<h3>...</h3>
...
<h6>...</h6>

<p>Parágrafo de texto</p>
<p>Parágrafo com quebra de linha <br>forçada.</p>
```

Exemplo: [01-text.html](/html/examples/01-text.html)

## Links

```html
<p>Procure no <a href="http://www.google.com">Google</a><p>

<p>Link para <a href="/pagina/interna.html">página interna</a>
```

## Imagens

```html
<img src="logo.jpg" alt="Logo da empresa">

<p>Imagens também podem ser links: <a href="/pagina/interna.html"><img src="icone.jpg" alt="Ícone"></a></p>
```

Exemplo: [02-links-images.html](/html/examples/02-links-images.html)

## Listas

Lista não ordenada:

```html
<ul>
    <li>HTML</li>
    <li>CSS
        <ul>
            <li>SASS</li>
            <li>LESS</li>
        </ul>
    </li>
    <li>JavaScript</li>
</ul>
```

Lista ordenada:

```html
<ol>
    <li>HTML</li>
    <li>CSS
        <ol>
            <li>SASS</li>
            <li>LESS</li>
        </ol>
    </li>
    <li>JavaScript</li>
</ol>
```

Exemplo: [03-lists.html](/html/examples/03-lists.html)

## Tabelas

```html
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Preço</th>
        </tr>
    </tead>
    <tbody>
        <tr>
            <td>1</td>
            <td>TV LED 42"</td>
            <td>R$ 1.999,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Sony PlayStation 4</td>
            <td>R$ 3.999,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Apple iPhone 6</td>
            <td>R$ 2.999,00</td>
        </tr>
    </tbody>
</table>
```

Exemplo: [04-tables.html](/html/examples/04-tables.html)


## Formulários

```html
<form action="submit.php" method="post">
    <label>Campo de texto simples</label>
    <input type="text" name="userName">

    <label>Campo de texto de múltiplas linhas</label>
    <textarea name="userBio"></textarea>

    <label>Checkbox <input type="checkbox" name="agreeTerms"></label>

    <label>Radio opção 1 <input type="radio" name="gender" value="m"></label>
    <label>Radio opção 2 <input type="radio" name="gender" value="f"></label>

    <label>Dropdown</label>
    <select name="city">
        <option value="1">Belo Horizonte</option>
        <option value="2">Campinas</option>
        <option value="3">São Paulo</option>
    </select>

    <input type="submit" value="Enviar">
</form>
```

Exemplo: [05-forms.html](/html/examples/05-forms.html)


## Tags div e span

`<div>` e `<span>` são tags sem valor semântico, mas muito úteis para subdividir o documento em partes para facilitar a estilização com CSS.

## Atributos class e id

Classifica e identifica elementos. `id` deve ser único na página. `class` pode se repetir e é muito usado para estilizar os elementos com CSS.

```html
    <div id="header">
        <a class="nav-link" href="/">Home</a>
    </div>
```

## Exercício

Estruturar o HTML a partir de um layout (sem CSS).
