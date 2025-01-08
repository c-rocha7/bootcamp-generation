CREATE DATABASE db_cidade_das_carnes;

USE db_cidade_das_carnes;

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
	('Bovinos', 'Carnes de boi e derivados'),
	('Suínos', 'Carnes de porco e derivados'),
	('Aves', 'Frango, peru e outras aves'),
	('Peixes', 'Peixes e frutos do mar'),
	('Linguiças', 'Variedades de linguiças e embutidos');

INSERT INTO tb_produtos (nome_produto, preco, validade, estoque, id_categoria) VALUES
	('Picanha', 120.00, '2024-12-31', 50, 1),
	('Costelinha Suína', 60.00, '2024-11-30', 30, 2),
	('Coxas de Frango', 25.00, '2024-10-15', 100, 3),
	('Filé de Tilápia', 45.00, '2024-08-30', 40, 4),
	('Linguiça Toscana', 35.00, '2024-09-20', 60, 5),
	('Alcatra', 90.00, '2024-12-20', 40, 1),
	('Pernil Suíno', 70.00, '2024-10-01', 20, 2),
	('Peito de Frango', 30.00, '2024-08-25', 80, 3);

SELECT * FROM tb_produtos WHERE preco > 50.00;

SELECT * FROM tb_produtos WHERE preco BETWEEN 50.00 AND 150.00;

SELECT * FROM tb_produtos WHERE nome_produto LIKE '%C%';

SELECT tb_produtos.nome_produto, tb_produtos.preco, tb_produtos.validade, tb_produtos.estoque, tb_categorias.nome_categoria, tb_categorias.descricao_categoria FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.id_categoria = tb_categorias.id_categoria;

SELECT tb_produtos.nome_produto, tb_produtos.preco, tb_produtos.validade, tb_produtos.estoque, tb_categorias.nome_categoria FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.id_categoria = tb_produtos.id_categoria WHERE tb_categorias.nome_categoria = 'Aves';
