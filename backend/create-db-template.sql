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