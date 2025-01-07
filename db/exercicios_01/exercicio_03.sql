CREATE DATABASE db_escola;

USE db_escola;

CREATE TABLE tb_notas (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_prova DATE,
    nota decimal(5,2),
    ativo BOOLEAN
);

INSERT INTO tb_notas (nome, data_prova, nota, ativo) VALUES
	('Bianca Sueli Vanessa', '2025-01-04', 7.09, TRUE),
    ('Isabelle Isabella Goncalves', '2024-09-20', 5.50, FALSE),
    ('Iago Vinicius Nogueira', '2025-01-04', 8.90, TRUE),
    ('Ana Sebastiana Lavinia', '2025-01-04', 9.20, TRUE),
    ('Carolina Allana Bernardes', '2025-01-04', 2.60, TRUE),
    ('Sophia Sandra', '2024-09-20', 3.10, FALSE),
    ('Lucca Hugo', '2025-01-04', 4.80, TRUE),
    ('Gabriel Roberto Caldeira', '2025-01-04', 9.30, TRUE),
    ('Yasmin Carla', '2024-09-20', 6.70, FALSE),
    ('Daniel Thomas das Neves', '2024-09-20', 0.50, FALSE);
    
DESC tb_notas;
    
SELECT * FROM tb_notas;    

SELECT * FROM tb_notas WHERE nota > 7.0;

SELECT * FROM tb_notas WHERE nota < 7.0;

UPDATE tb_notas SET ativo = TRUE WHERE id = 10;
