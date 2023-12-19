$(document).ready(function(){

    $('.data-button').click(function(){
        
        var code = $('[data-input]').val();
        
        if ( code.length !== 4 ) { return false };

        $(this).addClass('disabled');
        $('.isLoading').removeClass('hidden');

        var datas = JSON.stringify(code)

        $.ajax({
            type: 'POST',
            url: `controllers/auth.php`,
            data: { data : datas  },
            success: function(response) {
                switch (response) {
                    case '1' :
                        setTimeout (() => {
                            window.location.href = "../app/"
                        }, 1000);
                        Swal.fire({
                            icon: "success",
                            title: "Verificado!",
                            text: "Você será redirecionado em alguns instantes...",
                        });
                        break;
                    case '0' : 
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "O código é inválido!",
                            footer: '<a href="#">Esqueceu o código?</a>'
                        });
                        break;
                    default :
                        Swal.fire({
                            icon: "error",
                            title: "500",
                            text: "Estamos em manutenção!",
                        });
                        break;
                };
            },
            error: function(error) {
                console.error('Erro na solicitação AJAX: ' + error);
            },
            complete: function() {
                $('.data-button').removeClass('disabled');
                $('.isLoading').addClass('hidden');
            }
        });

    });
});