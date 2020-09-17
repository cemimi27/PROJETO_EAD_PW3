<?php
defined('BASEPATH') or exit('No direct script access allowed');

class ValidarCadastros extends CI_Controller
{


    public function validarCadUsuario()
    {
        $dados = [

            'nome' => $this->input->post("nome"),
            'email' => $this->input->post("email"),
            'userName' => $this->input->post("userName"),
            'senha' => $this->input->post("senha"),
            'tipo' => "cliente",
            'cpf' => $this->input->post("cpf")
        ];

        $confSenha = $this->input->post("confsenha");

        if (empty($dados['nome'])) {
            echo "ErroNome";
            die();
        }

        if (empty($dados['userName'])) {
            echo "ErroUsuario";
            die();
        }

        if (empty($dados['email'])) {
            echo "ErroEmail";
            die();
        }

        if (empty($dados['cpf'])) {
            echo "ErroCpf";
            die();
        }
        if (strlen(($dados['cpf'])) != 14) {
            echo "ErroTamanhoCpf";
            die();
        }

        if (empty($dados['senha'])) {
            echo "ErroSenha";
            die();
        }

        if ($confSenha != $dados['senha']) {
            echo "ErroConfSenha";
            die();
        }

        $this->load->model('CadastrosModel');
        if ($this->CadastrosModel->CadastrarUsuario($dados)) {
            echo "Sucesso";
            die();
        }
        else{
            echo "ErroBanco";
            die();
        }
    }
}
