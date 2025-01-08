CREATE DATABASE db_pizzaria_legal;

USE db_pizzaria_legal;

CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL,
    descricao_categoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_pizzas (
    id_pizza INT AUTO_INCREMENT PRIMARY KEY,
    nome_pizza VARCHAR(50) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    ingredientes TEXT NOT NULL,
    tamanho VARCHAR(20) NOT NULL,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria)
);

INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
	('Tradicional', 'Pizzas com sabores tradicionais'),
	('Premium', 'Sabores sofisticados e exclusivos'),
	('Vegetariana', 'Pizzas feitas sem carne'),
	('Doce', 'Pizzas com sabores doces'),
	('Especial', 'Sabores especiais e limitados');

INSERT INTO tb_pizzas (nome_pizza, preco, ingredientes, tamanho, id_categoria) VALUES
	('Calabresa', 45.00, 'Calabresa, queijo, cebola', 'Grande', 1),
	('Mussarela', 40.00, 'Mussarela, molho de tomate, orégano', 'Grande', 1),
	('Quatro Queijos', 60.00, 'Mussarela, gorgonzola, parmesão, provolone', 'Grande', 2),
	('Frango com Catupiry', 55.00, 'Frango, catupiry, milho', 'Média', 1),
	('Chocolate', 50.00, 'Chocolate ao leite, granulado', 'Grande', 4),
	('Brigadeiro', 52.00, 'Chocolate, leite condensado, granulado', 'Média', 4),
	('Marguerita', 48.00, 'Mussarela, tomate, manjericão', 'Média', 3),
	('Palmito', 47.00, 'Palmito, mussarela, tomate', 'Grande', 3);

SELECT * FROM tb_pizzas WHERE preco > 45.00;

SELECT * FROM tb_pizzas WHERE preco BETWEEN 50.00 AND 100.00;

SELECT * FROM tb_pizzas WHERE nome_pizza LIKE '%M%';

SELECT tb_pizzas.nome_pizza, tb_pizzas.preco, tb_pizzas.ingredientes, tb_pizzas.tamanho, tb_categorias.nome_categoria, tb_categorias.descricao_categoria FROM tb_pizzas INNER JOIN tb_categorias ON tb_pizzas.id_categoria = tb_categorias.id_categoria;

SELECT tb_pizzas.nome_pizza, tb_pizzas.preco, tb_pizzas.ingredientes, tb_categorias.nome_categoria FROM tb_pizzas INNER JOIN tb_categorias ON tb_pizzas.id_categoria = tb_categorias.id_categoria WHERE tb_categorias.nome_categoria = 'Doce';
