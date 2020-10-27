<?php
defined('BASEPATH') or exit('No direct script access allowed');

class ValidarLogin extends CI_Controller
{


    public function validacaoLogin()
    {
        $usuario = $this->input->post("usuario");
        $senha = $this->input->post("senha");

        if (empty($usuario)) {
            echo "ErroUsuario";
            die();
        }

        if (empty($senha)) {
            echo "ErroSenha";
            die();
        }

        $this->load->model('LoginModel');
        $resultado = $this->LoginModel->LogarUsuario($usuario, $senha);

        if (empty($resultado)) {
            echo "ErroLogin";
            die();
        } 
        
        else {
            switch ($resultado['tipo']) {
                case 'cliente':
                    echo "SucessoCliente";
                    break;
                case 'administrador':
                    echo "SucessoADM";
                    break;
                case 'funcionario':
                    echo "SucessoFunc";
                    break;
                default:
                    echo "ErroLogin";
                    break;
            }
        }
    }
}
