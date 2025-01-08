CREATE DATABASE db_curso_da_minha_vida;

USE db_curso_da_minha_vida;

CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL,
    descricao_categoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nome_curso VARCHAR(50) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    carga_horaria INT NOT NULL,
    nivel VARCHAR(20) NOT NULL,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria)
);

INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
	('Tecnologia', 'Cursos relacionados a programação, redes e TI'),
	('Negócios', 'Cursos de gestão, finanças e empreendedorismo'),
	('Design', 'Cursos de design gráfico, UX e edição de vídeos'),
	('Idiomas', 'Cursos para aprendizado de novas línguas'),
	('Saúde', 'Cursos de áreas relacionadas à saúde e bem-estar');

INSERT INTO tb_cursos (nome_curso, preco, carga_horaria, nivel, id_categoria) VALUES
	('Desenvolvimento Web', 800.00, 40, 'Avançado', 1),
	('Marketing Digital', 600.00, 30, 'Intermediário', 2),
	('Design Gráfico', 750.00, 50, 'Avançado', 3),
	('Inglês Básico', 500.00, 60, 'Básico', 4),
	('Primeiros Socorros', 400.00, 20, 'Intermediário', 5),
	('Java para Iniciantes', 900.00, 45, 'Avançado', 1),
	('Finanças Pessoais', 300.00, 15, 'Básico', 2),
	('Photoshop Essencial', 700.00, 35, 'Intermediário', 3);

SELECT * FROM tb_cursos WHERE preco > 500.00;

SELECT * FROM tb_cursos WHERE preco BETWEEN 600.00 AND 1000.00;

SELECT * FROM tb_cursos WHERE nome_curso LIKE '%J%';

SELECT tb_cursos.nome_curso, tb_cursos.preco, tb_cursos.carga_horaria, tb_cursos.nivel, tb_categorias.nome_categoria, tb_categorias.descricao_categoria FROM tb_cursos INNER JOIN tb_categorias ON tb_cursos.id_categoria = tb_categorias.id_categoria;

SELECT tb_cursos.nome_curso, tb_cursos.preco, tb_cursos.carga_horaria, tb_cursos.nivel, tb_categorias.nome_categoria FROM tb_cursos INNER JOIN tb_categorias ON tb_cursos.id_categoria = tb_categorias.id_categoria WHERE tb_categorias.nome_categoria = 'Tecnologia';

