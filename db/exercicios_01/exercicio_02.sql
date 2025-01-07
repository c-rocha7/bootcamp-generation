CREATE DATABASE db_ecommerce;

USE db_ecommerce;

CREATE TABLE db_ecommerce (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_cadastro DATE,
    valor decimal(6,2),
    ativo BOOLEAN
);

INSERT INTO db_ecommerce (nome, data_cadastro, valor, ativo) VALUES
	('Notebook Dell Inspiron', '2025-01-04', 4500.00, TRUE),
    ('Smartphone Samsung Galaxy S22', '2024-09-20', 3200.00, FALSE),
    ('Fone de Ouvido Bluetooth JBL', '2025-01-04', 450.00, TRUE),
    ('Smart TV LG 50" 4K', '2025-01-04', 2800.00, TRUE),
    ('Mouse Gamer Logitech G502', '2025-01-07', 350.00, TRUE),
    ('Tenis Nike Revolution 6', '2024-12-29', 280.00, FALSE),
    ('Relogio Smartwatch Xiaomi Mi Band 7', '2025-01-07', 300.00, TRUE),
    ('Liquidificador Philips Walita', '2025-01-07', 220.00, TRUE),
    ('Cadeira Gamer ThunderX3', '2024-12-26', 1200.00, FALSE),
    ('Console PlayStation 5', '2024-12-30', 4800.00, FALSE);
    
DESC db_ecommerce;
    
SELECT * FROM db_ecommerce;    

SELECT * FROM db_ecommerce WHERE valor > 500;

SELECT * FROM db_ecommerce WHERE valor < 500;

UPDATE db_ecommerce SET ativo = TRUE WHERE id = 9;
