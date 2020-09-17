<?php
defined('BASEPATH') or exit('No direct script access allowed');

class CadastrosModel extends CI_Model{
    
    public function CadastrarUsuario($dados){
        return $this -> db -> insert ('tbl_Usuario', $dados);
    }
}
