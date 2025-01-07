CREATE DATABASE db_rh;

USE db_rh;

CREATE TABLE tb_colaboradores (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    salario decimal(6,2),
    ativo BOOLEAN
);

INSERT INTO tb_colaboradores (nome, data_nascimento, salario, ativo) VALUES
	('Alexandre Santos', '1985-04-22', 3485.50, TRUE),
    ('Melissa Lara', '1994-03-04', 2640.80, FALSE),
    ('Fatima Lorena', '2001-06-12', 1430.90, TRUE),
    ('Louise Valentina', '2005-02-27', 2253.55, TRUE),
    ('Emily Joana', '1999-09-20', 1815.84, TRUE),
    ('Catarina Alicia', '1972-12-29', 2503.97, FALSE),
    ('Levi Bryan', '1997-05-25', 5430.98, TRUE),
    ('Juliana Elaine', '2003-01-07', 7864.98, TRUE);
    
DESC tb_colaboradores;
    
SELECT * FROM tb_colaboradores;    

SELECT * FROM tb_colaboradores WHERE salario > 2000;

SELECT * FROM tb_colaboradores WHERE salario < 2000;

UPDATE tb_colaboradores SET ativo = TRUE WHERE id = 2;
