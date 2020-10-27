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
        $this->load->model('CadastrosModel');

        $confSenha = $this->input->post("confsenha");

        $this->session->email = $dados['email'];
        $this->session->userName = $dados['userName'];

        if (empty($dados['nome'])) {
            echo "ErroNome";
            die();
        }

        if (empty($dados['userName'])) {
            echo "ErroUsuario";
            die();
        }

        $linhaUser = $this->CadastrosModel->VerificarUserName($dados['userName']);

        if($linhaUser != ""){
            echo "ErroUsuarioExiste";
            die();
        }

        if (empty($dados['email'])) {
            echo "ErroEmail";
            die();
        }

        $linhaEmail = $this->CadastrosModel->VerificarEmail($dados['email']);

        if($linhaEmail != ""){
            echo "ErroEmailExiste";
            die();
        }

        if (empty($dados['cpf'])) {
            echo "ErroCpf";
            die();
        }

        $linhaCpf = $this->CadastrosModel->VerificarCpf($dados['cpf']);

        if($linhaCpf != ""){
            echo "ErroCpfExiste";
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

        if (empty($confSenha)) {
            echo "ErroConfSenha";
            die();
        }

        if ($confSenha != $dados['senha']) {
            echo "SenhaNaoConfere";
            die();
        }

        if ($this->CadastrosModel->CadastrarUsuario($dados)) {
            echo "Sucesso";
            die();
        }
        else{
            echo "ErroCadastro";
            die();
        }
    }
}
