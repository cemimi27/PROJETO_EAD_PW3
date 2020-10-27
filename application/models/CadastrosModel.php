<?php
defined('BASEPATH') or exit('No direct script access allowed');

 class CadastrosModel extends CI_Model{
    
    public function CadastrarUsuario($dados){
        return $this->db->insert('tbl_Usuario', $dados);
    }

    public function VerificarUserName($userName){
        $this->db->where('userName', $userName);
        $resultado = $this->db->get("tbl_Usuario")->row_array();
        return $resultado;

    }

    public function VerificarEmail($email){
        $this->db->where('email', $email);
        $resultado = $this->db->get("tbl_Usuario")->row_array();
        return $resultado;

    }

    public function VerificarCpf($cpf){
        $this->db->where('cpf', $cpf);
        $resultado = $this->db->get("tbl_Usuario")->row_array();
        return $resultado;

    }
}
