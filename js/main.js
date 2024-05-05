$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask("00000-000")

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cidade: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            telefone: 'Por favor, insira o seu telefone',
            cpf: 'Por favor, insira o seu cpf',
            endereço:'Por favor, insira o seu endereço',
            cidade: 'Por favor, insira a sua cidade',
            cep: 'Por favor, insira o seu cep' 
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalideHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfIvalids();
            console.log(camposIncorretos)
        }
    })
})