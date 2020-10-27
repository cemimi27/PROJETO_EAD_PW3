<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="<?php echo base_url('assets/css/bootstrap.css'); ?>" rel="stylesheet" />
    <link href="<?php echo base_url('assets/css/estilo.css'); ?>" rel="stylesheet" />
    <title>Login</title>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Entrar<span class="sr-only">(página atual)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cadastro</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="ContainerLogin mx-auto">
        <form  action="<?php echo base_url('index.php/ValidarLogin/validacaoLogin'); ?>" method="POST" class="mx-auto mt-3" id="login">
            <div class="form-group row mx-auto">
                <label class="text-center my-auto col-3" for="usuario">Usuário ou Email</label>
                <input type="text" class="form-control mx-auto my-auto col-8" id="usuario" name="usuario" 
                value="<?php
                if(isset($this->session->email))
                {
                    echo $this->session->email;
                }
                if(isset($this->session->email))
                {
                    $this->session->session_destroy;
                }
                
               
                ?>">
            </div>
            <div class="form-group row mx-auto">
                <label class="text-center my-auto col-3" for="senha">Senha</label>
                <input type="password" class="form-control mx-auto my-auto col-8" id="senha" name="senha">
            </div>
            <button type="submit" class="btn btn-secondary rounded mx-auto d-block mt-4">Enviar</button>
            <a href="#">
                <p class="mt-3 text-center">Esqueci minha senha</p>
            </a>
        </form>
    </div>

    <script src="<?php echo base_url('assets/node_modules/jquery/dist/jquery.js'); ?>"></script>
    <script src="<?php echo base_url('assets/node_modules/bootstrap/dist/js/bootstrap.js'); ?>"></script>
    <script src="<?php echo base_url('assets/node_modules/popper.js/dist/umd/popper.js'); ?>"></script>
    <script src="<?php echo base_url('assets/node_modules/sweetalert2/dist/sweetalert2.all.js'); ?>"></script>
    <script src="<?php echo base_url('assets/JavaScript/validacoes.js'); ?>"></script>
</body>

</html>