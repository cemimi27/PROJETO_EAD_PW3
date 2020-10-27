/* VALIDAÇÕES DE LOGIN */
$(function () {
    $('#login').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                if (data == "ErroUsuario") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Campo usuário vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }
                if (data == "ErroSenha") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Campo senha vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000',
                    });
                }

                if (data == "SucessoADM") {

                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Login efetuado com sucesso!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }
                
                if (data == "SucessoFunc") {

                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Login efetuado com sucesso!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }
                if (data == "SucessoCliente") {

                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Login efetuado com sucesso!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }
                if (data == "ErroLogin") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro!',
                        text: 'Usuário ou senha inválidos!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000',
                    });
                }
            }
        })
        return false;
    })
}

);

/* VALIDAÇÕES DE CADASTRO*/
$(function () {
    $('#cadastro').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                if (data == "ErroNome") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Campo nome vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }
                
                if (data == "ErroUsuario") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Campo usuário vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroUsuarioExiste") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Usuário já cadastrado!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroEmail") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Campo email vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }

                if (data == "ErroEmailExiste") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Email já cadastrado!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }

                if (data == "ErroCpf") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Campo CPF vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroTamanhoCpf") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'O campo CPF deve conter 11 digitos!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }

                if (data == "ErroCpfExiste") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'CPF já cadastrado!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                
                if (data == "ErroSenha") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Campo senha vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }

                if (data == "ErroConfSenha") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'Campo confirmar senha vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }

                if (data == "SenhaNaoConfere") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro ao preencher campos!',
                        text: 'As senhas não conferem!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }

                if (data == "Sucesso") {

                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Cadastro efetuado com sucesso!',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.value) {
                            window.location.replace('TelaLogin')
                        }
                    } );
                }

                if (data == "ErroCadastro") {

                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: 'Não foi possível cadastrar!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
            }
        })
        return false;
    })
}

);

/* VALIDAÇÕES DE CADASTRO ADM */
$(function () {
    $('#cadastroAdm').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                if (data == "ErroNome") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Nome!',
                        text: 'O campo Nome está vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }
                if (data == "ErroCpf") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro CPF!',
                        text: 'O campo CPF está vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroCpfExiste") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro CPF!',
                        text: 'CPF já cadastrado!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroTipo") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Cargo!',
                        text: 'Selecione um Cargo!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroUsuario") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Usuário!',
                        text: 'O campo usuário está vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroUsuarioExiste") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Usuário!',
                        text: 'Usuário já cadastrado!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroEmail") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Email!',
                        text: 'O campo email está vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroEmailExiste") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Email!',
                        text: 'Email já cadastrado!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroSenha") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Senha!',
                        text: 'O campo senha está vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroConfSenha") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Senha!',
                        text: 'As senhas são diferentes!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "ErroBanco") {

                    Swal.fire({
                        icon: 'error',
                        title: 'Erro ao cadastar!',
                        text: 'Não foi possível cadastrar!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "Sucesso") {

                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Cadastro efetuado com sucesso!',
                        confirmButtonText: 'OK'
                    });
                }

            }
        })
        return false;
    })
}

);

/* VALIDAÇÕES DE CADASTRO DE PRODUTO*/
$(function () {
    $('#cadastroproduto').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                if (data == "ErroCodigo") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Código!',
                        text: 'O Código de Barras está vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    })
                }

                if (data == "ErroTamanhoCodigo") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Código!',
                        text: 'O Código de Barras deve ter 13 digítos!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }

                if (data == "ErroCodBarrasExiste") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Código!',
                        text: 'Código de Barras já cadastrado!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }

                if (data == "ErroProduto") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Produto!',
                        text: 'Digite o nome do Produto!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }
                if (data == "ErroDescricao") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Descrição!',
                        text: 'O campo Descrição está vazio!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }
                if (data == "ErroPreco") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Preço',
                        text: 'Digite um valor!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }
                if (data == "ErroEstoque") {

                    Swal.fire({
                        icon: 'warning',
                        title: 'Erro Estoque!',
                        text: 'Digite a quantidade!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });
                }

                if (data == "ErroBanco") {

                    Swal.fire({
                        icon: 'error',
                        title: 'Erro ao cadastar',
                        text: 'Não foi possível cadastrar!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ff0000'
                    });

                }
                if (data == "SucessoProduto") {

                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Produto cadastrado com sucesso!',
                        confirmButtonText: 'OK'
                    })
                }
            }
        })
        return false;
    })
}

);

