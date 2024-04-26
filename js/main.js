$(document).ready(function() {
    $('#form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: 'Por gentileza, insira seu nome',
            email: 'Por gentileza, insira seu E-mail',
            message: 'Por gentileza, insira sua mensagem'
        }
    });
});
