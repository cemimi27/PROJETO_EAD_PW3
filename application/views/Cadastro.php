<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link href="<?php echo base_url('assets/css/bootstrap.css'); ?>" rel="stylesheet" />
    <link href="<?php echo base_url('assets/css/estilo.css'); ?>" rel="stylesheet" />
</head>

<body>
    <div class="ContainerCadastro mx-auto">
        <form action="<?php echo base_url('index.php/ValidarCadastros/validarCadUsuario'); ?>" method="POST" id="cadastro">
            <div class="form-row">
                <div class="form-group col-7">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" id="nome" name="nome">
                </div>
                <div class="form-group col-5">
                    <label for="userName">Nome de Usuário</label>
                    <input type="text" class="form-control" id="userName" name="userName">
                </div>
                <div class="form-group col-6">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email">
                </div>
                <div class="col-1"></div>
                <div class="form-group col-5">
                    <label for="cpf">CPF</label>
                    <input type="text" class="form-control" id="cpf" name="cpf">
                </div>
                <div class="form-group col-5">
                    <label for="senha">Senha</label>
                    <input type="password" class="form-control" id="senha" name="senha">
                </div>
                <div class="col-2"></div>
                <div class="form-group col-5">
                    <label for="confsenha">Confirmar senha</label>
                    <input type="password" class="form-control" id="confsenha" name="confsenha">
                </div>
            </div>
            <button type="submit" class="btn btn-secondary rounded mx-auto d-block mt-4">Enviar</button>
        </form>
    </div>
    <script src="<?php echo base_url('assets/node_modules/jquery/dist/jquery.js'); ?>"></script>
    <script src="<?php echo base_url('assets/node_modules/bootstrap/dist/js/bootstrap.js'); ?>"></script>
    <script src="<?php echo base_url('assets/node_modules/popper.js/dist/umd/popper.js'); ?>"></script>
    <script src="<?php echo base_url('assets/node_modules/sweetalert2/dist/sweetalert2.all.js'); ?>"></script>
    <script src="<?php echo base_url('assets/JavaScript/validacoes.js'); ?>"></script>
    <!--<script type="text/javascript">
        $(document).ready(function() {
            $('#cpf').mask("000.000.000-00")
        })
    </script>-->
</body>

</html>