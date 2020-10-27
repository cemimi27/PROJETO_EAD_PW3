CREATE DATABASE EAD_PW3;

USE EAD_PW3;

CREATE TABLE tbl_Usuario(
codUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
userName VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(50) NOT NULL,
tipo VARCHAR(20) NOT NULL,
ativo BOOL NOT NULL DEFAULT TRUE,
cpf VARCHAR(14) NOT NULL UNIQUE
);