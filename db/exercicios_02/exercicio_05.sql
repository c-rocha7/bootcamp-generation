CREATE DATABASE db_construindo_vidas;

USE db_construindo_vidas;

CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL,
    descricao_categoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(50) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL,
    marca VARCHAR(50) NOT NULL,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria)
);

INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
	('Ferramentas', 'Produtos relacionados a ferramentas manuais e elétricas'),
	('Hidráulica', 'Tubos, conexões e outros materiais hidráulicos'),
	('Elétrica', 'Materiais elétricos e iluminação'),
	('Acabamento', 'Revestimentos, tintas e pisos'),
	('Estrutural', 'Materiais de construção básica como cimento e tijolos');

INSERT INTO tb_produtos (nome_produto, preco, estoque, marca, id_categoria) VALUES
	('Furadeira', 350.00, 15, 'Bosch', 1),
	('Parafusadeira', 220.00, 20, 'Makita', 1),
	('Torneira', 120.00, 50, 'Deca', 2),
	('Lâmpada LED', 25.00, 100, 'Philips', 3),
	('Piso Porcelanato', 70.00, 200, 'Eliane', 4),
	('Cimento CP-II', 35.00, 500, 'Votorantim', 5),
	('Tinta Acrílica', 120.00, 30, 'Suvinil', 4),
	('Tubo PVC', 18.00, 300, 'Tigre', 2);

SELECT * FROM tb_produtos WHERE preco > 100.00;

SELECT * FROM tb_produtos WHERE preco BETWEEN 70.00 AND 150.00;

SELECT * FROM tb_produtos WHERE nome_produto LIKE '%C%';

SELECT tb_produtos.nome_produto, tb_produtos.preco, tb_produtos.estoque, tb_produtos.marca, tb_categorias.nome_categoria, tb_categorias.descricao_categoria FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.id_categoria = tb_categorias.id_categoria;

SELECT tb_produtos.nome_produto, tb_produtos.preco, tb_produtos.estoque, tb_produtos.marca, tb_categorias.nome_categoria FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.id_categoria = tb_categorias.id_categoria WHERE tb_categorias.nome_categoria = 'Hidráulica';
