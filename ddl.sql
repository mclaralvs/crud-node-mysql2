CREATE DATABASE IF NOT EXISTS crud;

USE crud;

CREATE TABLE IF NOT EXISTS usuario (
	user_id		INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_nome 	VARCHAR (40),
    user_idade 	INT,
    user_uf 	VARCHAR (2)
);

CREATE TABLE IF NOT EXISTS pedido (
	ped_id		    INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ped_nome 	    VARCHAR (40),
    ped_preco 	    FLOAT,
    ped_categoria 	VARCHAR (20)
);