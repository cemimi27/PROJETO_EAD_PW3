<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Telas extends CI_Controller {

	public function index()
	{
		$this->load->view('welcome_message');
    }
    
    public function TelaHome()
	{
		$this->load->view('Home');
	}

	public function TelaLogin()
	{
		$this->load->view('Login');
	}

	public function TelaCadastro()
	{
		$this->load->view('Cadastro');
	}
}