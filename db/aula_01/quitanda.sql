CREATE DATABASE db_quitanda;

USE db_quitanda;

CREATE TABLE tb_produtos(
    id BIGINT AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	quantidade INT,
    datavalidade DATE,
	preco DECIMAL NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE tb_produtos MODIFY preco DECIMAL(6,2);

ALTER TABLE tb_produtos ADD descricao VARCHAR(255);

DESC tb_produtos;

ALTER TABLE tb_produtos CHANGE descricao descricao_produto VARCHAR(500);

ALTER TABLE tb_produtos CHANGE datavalidade data_validade DATE;

ALTER TABLE tb_produtos DROP descricao_produto;

INSERT INTO tb_produtos(nome, quantidade, datavalidade, preco) 
VALUES ("Tomate",100, "2024-01-10", 8.00);

INSERT INTO tb_produtos(nome, quantidade, datavalidade, preco) 
VALUES ("Pepino", 57, "2025-02-13", 9.50),
("Cenoura", 20, "2025-01-20", 7.00),
("Cebola", 60, "2025-03-07", 12.00),
("Repolho", 30, "2025-05-02", 3.00);

SELECT * FROM tb_produtos;

SELECT nome, preco FROM tb_produtos;

SELECT * FROM tb_produtos WHERE id = 1;

SELECT * FROM tb_produtos WHERE preco > 4.00;

SELECT * FROM tb_produtos WHERE preco > 2.00 AND nome = 'Repolho';

SELECT * FROM tb_produtos WHERE preco > 5.00 OR nome = 'Tomate';

SELECT * FROM tb_produtos WHERE nome != 'Tomate';

SELECT nome AS Nome, CONCAT('R$ ', FORMAT(preco, 2, 'pt_BR')) AS Preço FROM tb_produtos;

SELECT nome AS Nome, DATE_FORMAT(data_validade, '%d/%m/%Y') AS Data_Validade FROM tb_produtos;

UPDATE tb_produtos SET preco = 9.50 WHERE id = 2;

UPDATE tb_produtos SET preco = 9.50;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM tb_produtos WHERE id = 8;

DROP DATABASE db_quitanda;

DROP TABLE tb_produtos;
