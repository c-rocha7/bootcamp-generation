CREATE DATABASE db_generation_game_online;

USE db_generation_game_online;

CREATE TABLE tb_classes (
    id_class INT AUTO_INCREMENT PRIMARY KEY,
    nome_class VARCHAR(50) NOT NULL,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE tb_personagens (
    id_personagem INT AUTO_INCREMENT PRIMARY KEY,
    nome_personagem VARCHAR(50) NOT NULL,
    poder_ataque INT NOT NULL,
    poder_defesa INT NOT NULL,
    nivel INT NOT NULL,
    id_class INT,
    FOREIGN KEY (id_class) REFERENCES tb_classes(id_class)
);

INSERT INTO tb_classes (nome_class, descricao) VALUES
	('Guerreiro', 'Alta força e resistência'),
	('Mago', 'Especialista em magia'),
	('Arqueiro', 'Precisão em ataques à distância'),
	('Ladino', 'Habilidade furtiva e rápida'),
	('Clérigo', 'Especialista em curar aliados');

INSERT INTO tb_personagens (nome_personagem, poder_ataque, poder_defesa, nivel, id_class) VALUES
	('Tharion', 2500, 1500, 10, 1),
	('Elena', 1800, 1200, 12, 2),
	('Kael', 3000, 800, 15, 3),
	('Lira', 1500, 1000, 8, 4),
	('Morgana', 2200, 1600, 11, 2),
	('Drako', 2700, 1900, 14, 1),
	('Sylas', 2000, 1400, 9, 5),
	('Ayla', 3100, 900, 16, 3);

SELECT * FROM tb_personagens WHERE poder_ataque > 2000;

SELECT * FROM tb_personagens WHERE poder_defesa BETWEEN 1000 AND 2000;

SELECT * FROM tb_personagens WHERE nome_personagem LIKE '%C%';

SELECT tb_personagens.nome_personagem, tb_personagens.poder_ataque, tb_personagens.poder_defesa, tb_classes.nome_class, tb_classes.descricao FROM tb_personagens INNER JOIN tb_classes ON tb_personagens.id_class = tb_classes.id_class;

SELECT tb_personagens.nome_personagem, tb_personagens.poder_ataque, tb_personagens.poder_defesa, tb_classes.nome_class FROM tb_personagens INNER JOIN tb_classes ON tb_personagens.id_class = tb_classes.id_class WHERE tb_classes.nome_class = 'Arqueiro';
