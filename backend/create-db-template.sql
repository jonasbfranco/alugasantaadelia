-- Active: 1678930317873@@127.0.0.1@3306

CREATE DATABASE
    IF NOT EXISTS alugasantaadelia DEFAULT CHARACTER SET = 'utf8mb4';

USE alugasantaadelia;

CREATE TABLE
    imoveis (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(45) NOT NULL,
        bairro VARCHAR(20) NOT NULL,
        status VARCHAR(45) NOT NULL,
        created_at VARCHAR(45) NOT NULL,
        updated_at VARCHAR(45) NOT NULL
    );

-- Active: 1678975564929@@127.0.0.1@3306@alugasantaadelia

ALTER TABLE imoveis
ADD
    COLUMN numero_imovel varchar(200) COMMENT '',
ADD
    COLUMN qtdquartos_imovel integer(1) DEFAULT '1' COMMENT '',
ADD
    COLUMN piscina_imovel varchar(3) DEFAULT 'NAO' COMMENT '',
ADD
    COLUMN garagem_imovel varchar(3) DEFAULT 'SIM' COMMENT '',
ADD
    COLUMN qtdcarros_imovel integer(1) DEFAULT '1' COMMENT '',
ADD
    COLUMN area_de_lazer_imovel varchar(3) DEFAULT 'SIM' COMMENT '',
ADD
    COLUMN observacoes_imovel varchar(255) COMMENT '';

ALTER TABLE
    imoveis MODIFY area_de_lazer_imovel varchar(3) DEFAULT 'SIM' COMMENT '';

ALTER TABLE nome_tabela
MODIFY COLUMN nome_coluna tipo_dados DEFAULT ‘valor_padrão’;

Table
: user id_user nome_user senha_user whatss_user situacao_user created_at_user updated_at_user
Table
: imovel id_imovel id_user title_imovel endereco_imovel numero_imovel bairro_imovel quartos_imovel piscina_imovel garagem_imovel situacao_imovel created_at_imovel updated_at_imovel