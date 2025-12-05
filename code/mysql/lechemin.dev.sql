-- supprimer la base si elle existe
-- ATTENTION : pas en production
DROP DATABASE IF EXISTS lechemin_dev;

-- créer une base de données
CREATE DATABASE lechemin_dev;

-- créer des tables
CREATE TABLE lechemin_dev.role(
	id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE lechemin_dev.user(
	id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(150) NOT NULL,
	role_id TINYINT(1) UNSIGNED NOT NULL,
	FOREIGN KEY (role_id) REFERENCES lechemin_dev.role(id),
	INDEX(email)
);

CREATE TABLE lechemin_dev.category(
	id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	INDEX(name)
);

CREATE TABLE lechemin_dev.orderable_spice(
	id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	value TINYINT(1) NOT NULL
);

CREATE TABLE lechemin_dev.menu(
	id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	price DECIMAL(4,2) NOT NULL,
	INDEX(name)
);

CREATE TABLE lechemin_dev.orderable_type (
	id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE lechemin_dev.orderable(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	price DECIMAL(4,2) NOT NULL,
	image VARCHAR(50)  NULL UNIQUE,
	description TEXT NULL,
	category_id TINYINT(1) UNSIGNED NOT NULL,
	orderable_type_id TINYINT(1) UNSIGNED NULL,
	orderable_spice_id TINYINT(1) UNSIGNED NULL,
	FOREIGN KEY (category_id) REFERENCES lechemin_dev.category(id),
	FOREIGN KEY (orderable_type_id) REFERENCES lechemin_dev.orderable_type(id),
	FOREIGN KEY (orderable_spice_id) REFERENCES lechemin_dev.orderable_spice(id),
	INDEX(name)
);

CREATE TABLE lechemin_dev.orderable_menu(
	orderable_id INT UNSIGNED NOT NULL,
	menu_id TINYINT(1) UNSIGNED NOT NULL,
	FOREIGN KEY (orderable_id) REFERENCES lechemin_dev.orderable(id),
	FOREIGN KEY (menu_id) REFERENCES lechemin_dev.menu(id),
	PRIMARY KEY(orderable_id, menu_id)
);

CREATE TABLE lechemin_dev.drink_type(
	id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE lechemin_dev.drink(
	id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	price DECIMAL(4,2) NOT NULL,
	drink_type_id TINYINT(1) UNSIGNED,
	FOREIGN KEY (drink_type_id) REFERENCES lechemin_dev.drink_type(id)
);


-- insérer des données
INSERT INTO lechemin_dev.role
VALUES
	( NULL, "admin" ),
	( NULL, "user" )
;

-- admin@admin.fr / admin
-- user@user.fr / user
INSERT INTO lechemin_dev.user
VALUES
	( NULL, "admin@admin.fr", "$argon2i$v=19$m=16,t=2,p=1$QlZrb2xoamZCVzc5OTh0VA$vzfaegYY/xnXOEVl84M4ig", 1 ),
	( NULL, "user@user.fr", "$argon2i$v=19$m=16,t=2,p=1$SUU5RWkzWWpPdE1VZFlmTA$eJt3VQaMepKYulr9c3v73w", 2)
;


INSERT INTO lechemin_dev.category
VALUES
	( NULL, "entrée" ),
	( NULL, "plat" ),
	(NULL, 'grillades'),
	( NULL, "dessert" ),
	( NULL, "boisson" ),
	(NULL, "accompagnements"),
	(NULL, "soupes"),
	(NULL,"salades"),
	(NULL, "specialité_népalaise"),
	(Null, "Biryani"),
	(NULL, "Pains Indien")
;

-- drink_type / orderable_type / orderable_spice

INSERT INTO lechemin_dev.drink_type
VALUES
	(NULL, "Alcohol"),
	(NULL, "Sans Alcohol"),
	(NULL, "Boisson Chaude"),
	(NULL, "Boisson Froide")
;

INSERT INTO lechemin_dev.orderable_type
VALUES
	(NULL, "Végétarien"),
	(NULL, "Poulet"),
	(NULL, "Agneau"),
	(NULL, "Poisson"),
	(Null,"OISEAU")
	
;

INSERT INTO lechemin_dev.orderable_spice
VALUES
	(NULL,1),
	(NULL,2),
	(NUll,3),
	(NULL,4),
	(NULL,5)
	;
-- -- INSERT INTO foodtruck_dev.dish
-- -- VALUES
-- -- 	( NULL, "moussaka", 9.50, "moussaka.jpg", "description moussaka", 2, 2 ),
-- -- 	( NULL, "hoummous", 5.50, "hoummous.jpg", "description hoummous", 1, 3 ),
-- -- 	( NULL, "kebbe", 3.50, "kebbe.jpg", "description kebbe", 1, 3 )
-- -- ;

-- -- -- transaction SQL
-- -- START TRANSACTION;

-- -- -- requête 1
-- -- INSERT INTO foodtruck_dev.menu
-- -- VALUE (NULL, 'Menu du midi', 10.50);

-- -- -- variable qui stocke le dernier id inséré
-- -- SET @menu_id = LAST_INSERT_ID();

-- -- -- requête 2
-- -- INSERT INTO foodtruck_dev.dish_menu
-- -- VALUES
-- -- 	(2, @menu_id),
-- -- 	(1, @menu_id)
-- -- ;

-- -- COMMIT;

-- -- -- mettre à jour un enregistrement
-- -- UPDATE foodtruck_dev.menu
-- -- SET
-- -- 	menu.name = 'Menu du midi en semaine',
-- -- 	menu.price = 11
-- -- WHERE
-- -- 	menu.id = 1
-- -- ;

-- -- -- supprimer un enregistrement
-- -- START TRANSACTION;

-- -- -- requête 1
-- -- DELETE FROM foodtruck_dev.dish_menu
-- -- WHERE dish_menu.menu_id = 1
-- -- ;

-- -- -- requête 2
-- -- DELETE FROM foodtruck_dev.menu
-- -- WHERE
-- -- 	menu.id = 1
-- -- ;

-- -- COMMIT;
