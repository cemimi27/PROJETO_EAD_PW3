<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ValidarLogin extends CI_Controller {

	
	public function validacaoLogin()
	{
        $usuario = $this->input->post("usuario");
        $senha = $this->input->post("senha");

        if(empty($usuario))
        {
            echo "ErroUser";
            die();
        }

        if(empty($senha))
        {
            echo "ErroSenha";
            die();
        }
        
        echo "Sucesso";
	}
}
