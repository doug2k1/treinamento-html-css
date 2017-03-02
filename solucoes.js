$(function () {
    navigator.geolocation.getCurrentPosition(function(position) {
        $.get('http://api.openweathermap.org/data/2.5/weather', {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            units: 'metric',
            lang: 'pt',
            appid: 'b9f58017a4b55c89272a5913a9dac715'
        }).done(function (data) {
            var info = [
                'Condição atual: ' + data.weather[0].description,
                'Temperatura: ' + data.main.temp + '°C'
            ]
            $('section.about h2').text(data.name);
            $('section.about .content').html('<p>' + info.join('</p><p>') + '</p>');
        })
    });


    $('.fa-twitter').parent().on('click', function (event) {
        event.preventDefault();

        var $desc = $('h2.desc');

        // dispara ajax
        $desc.text('Carregando...');

        $.get('https://randomuser.me/api/')
            .done(function (data) {
                var info = data.results[0];

                $('h1').text(info.name.first + ' ' + info.name.last);
                $('.profile-image').attr('src', info.picture.large);
                $desc.text(info.email);
            });
    });


    $('.nav-tabs a').on('click', function (event) {
        event.preventDefault();

        var $this = $(this);
        var href = $this.attr('href');
        var $conteudo = $(href);

        $this.parent().addClass('active').siblings().removeClass('active');
        $conteudo.addClass('active').siblings().removeClass('active');
    });

    $('#contactMessageInput').on('keyup', function (event) {
        var $this = $(this);
        var valor = $this.val();
        var $contador = $this.next().find('span');

        $contador.text(valor.length);
    });
});
