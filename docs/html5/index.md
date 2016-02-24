# HTML5

## Can I use?

Verificar compatibilidade de navegadores no site [Can I use](http://caniuse.com).
Exemplo de busca no Google: "caniuse html5 tags"

## Tags semânticas

```html
<header>
    [cabeçalho]
    <nav>[navegação]</nav>
</header>
<main>
    <section>...</section>
    <article>...</article>
</main>
<footer>[rodapé]</footer>
```

## Vídeo

```html
<video src="video.mp4">
    Seu navegador não suporta vídeo HTML5
</video>

<video poster="poster.png" autoplay loop controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogv" type="video/ogg">
</video>
```

Exemplo: [01-video.html](/html5/examples/01-video.html)

## Áudio

```html
<audio src="audio.mp3">
    Seu navegador não suporta áudio HTML5
</audio>

<audio autoplay loop controls>
    <source src="audio.mp3" type="audio/mp3">
    <source src="audio.ogg" type="audio/ogg">
</audio>
```

Exemplo: [02-audio.html](/html5/examples/02-audio.html)

## Formulários

### Novos atributos

```html
<form novalidate>
    <input type="text" placeholder="Seu e-mail" required autofocus>
    <input type="text" placeholder="Estado" pattern="[A-Z]{2}">
    <input type="submit">
</form>
```

Exemplo: [03-form-attributes.html](/html5/examples/03-form-attributes.html)

### Novos tipos de campos

```html
<input type="email">
<input type="url">
<input type="number">
<input type="range">
<input type="search">
```

Outros tipos ainda pouco suportados pelos navegadores: `color`, `date`, `datetime`

Exemplo: [04-input-types.html](/html5/examples/04-input-types.html)
