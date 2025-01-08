CREATE DATABASE db_farmacia_bem_estar;

USE db_farmacia_bem_estar;

CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL,
    descricao_categoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(50) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    validade DATE NOT NULL,
    estoque INT NOT NULL,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria)
);

INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
	('Medicamentos', 'Produtos para tratamento de doenças'),
	('Higiene', 'Produtos de higiene pessoal'),
	('Cosméticos', 'Produtos de beleza e cuidados com a pele'),
	('Infantil', 'Produtos voltados para crianças'),
	('Vitaminas', 'Suplementos vitamínicos e minerais');

INSERT INTO tb_produtos (nome_produto, preco, validade, estoque, id_categoria) VALUES
	('Paracetamol', 12.50, '2025-12-31', 200, 1),
	('Shampoo', 25.00, '2024-06-30', 50, 2),
	('Protetor Solar', 45.00, '2025-01-15', 30, 3),
	('Fralda Infantil', 60.00, '2024-12-31', 100, 4),
	('Vitamina C', 55.00, '2026-03-20', 80, 5),
	('Ibuprofeno', 18.00, '2025-11-30', 150, 1),
	('Creme Hidratante', 40.00, '2025-07-01', 60, 3),
	('Escova de Dentes', 15.00, '2025-10-20', 200, 2);

SELECT * FROM tb_produtos WHERE preco > 50.00;

SELECT * FROM tb_produtos WHERE preco BETWEEN 5.00 AND 60.00;

SELECT * FROM tb_produtos WHERE nome_produto LIKE '%C%';

SELECT tb_produtos.nome_produto, tb_produtos.preco, tb_produtos.validade, tb_produtos.estoque, tb_categorias.nome_categoria, tb_categorias.descricao_categoria FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.id_categoria = tb_categorias.id_categoria;

SELECT tb_produtos.nome_produto, tb_produtos.preco, tb_produtos.validade, tb_produtos.estoque, tb_categorias.nome_categoria FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.id_categoria = tb_categorias.id_categoria WHERE tb_categorias.nome_categoria = 'Cosméticos';
