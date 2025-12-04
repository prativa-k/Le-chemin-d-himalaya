-- supprimer la base si elle existe
-- ATTENTION : pas en production
DROP DATABASE IF EXISTS foodtruck_dev;

-- créer une base de données
CREATE DATABASE foodtruck_dev;

-- créer des tables
CREATE TABLE foodtruck_dev.role(
	id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE foodtruck_dev.user(
	id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(150) NOT NULL,
	role_id TINYINT(1) UNSIGNED NOT NULL,
	FOREIGN KEY (role_id) REFERENCES foodtruck_dev.role(id),
	INDEX(email)
);

CREATE TABLE foodtruck_dev.category(
	id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	INDEX(name)
);

CREATE TABLE foodtruck_dev.country(
	id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	INDEX(name)
);

CREATE TABLE foodtruck_dev.dish(
	id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	price DECIMAL(4,2) NOT NULL,
	image VARCHAR(50) NOT NULL UNIQUE,
	description TEXT NOT NULL,
	category_id TINYINT(1) UNSIGNED NOT NULL,
	country_id TINYINT UNSIGNED NOT NULL,
	FOREIGN KEY (category_id) REFERENCES foodtruck_dev.category(id),
	FOREIGN KEY (country_id) REFERENCES foodtruck_dev.country(id),
	INDEX(name)
);

CREATE TABLE foodtruck_dev.menu(
	id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	price DECIMAL(4,2) NOT NULL,
	INDEX(name)
);

CREATE TABLE foodtruck_dev.dish_menu(
	dish_id TINYINT UNSIGNED NOT NULL,
	menu_id TINYINT(1) UNSIGNED NOT NULL,
	FOREIGN KEY (dish_id) REFERENCES foodtruck_dev.dish(id),
	FOREIGN KEY (menu_id) REFERENCES foodtruck_dev.menu(id),
	PRIMARY KEY(dish_id, menu_id)
);

-- insérer des données
INSERT INTO foodtruck_dev.role
VALUES
	( NULL, "admin" ),
	( NULL, "user" )
;

-- admin@admin.fr / admin
-- user@user.fr / user
INSERT INTO foodtruck_dev.user
VALUES
	( NULL, "admin@admin.fr", "$argon2i$v=19$m=16,t=2,p=1$QlZrb2xoamZCVzc5OTh0VA$vzfaegYY/xnXOEVl84M4ig", 1 ),
	( NULL, "user@user.fr", "$argon2i$v=19$m=16,t=2,p=1$SUU5RWkzWWpPdE1VZFlmTA$eJt3VQaMepKYulr9c3v73w", 2)
;

INSERT INTO foodtruck_dev.country
VALUES
	( NULL, "france" ),
	( NULL, "grèce" ),
	( NULL, "liban" )
;

INSERT INTO foodtruck_dev.category
VALUES
	( NULL, "entrée" ),
	( NULL, "plat" ),
	( NULL, "dessert" ),
	( NULL, "boisson" )
;

-- INSERT INTO foodtruck_dev.dish
-- VALUES
-- 	( NULL, "moussaka", 9.50, "moussaka.jpg", "description moussaka", 2, 2 ),
-- 	( NULL, "hoummous", 5.50, "hoummous.jpg", "description hoummous", 1, 3 ),
-- 	( NULL, "kebbe", 3.50, "kebbe.jpg", "description kebbe", 1, 3 )
-- ;

-- -- transaction SQL
-- START TRANSACTION;

-- -- requête 1
-- INSERT INTO foodtruck_dev.menu
-- VALUE (NULL, 'Menu du midi', 10.50);

-- -- variable qui stocke le dernier id inséré
-- SET @menu_id = LAST_INSERT_ID();

-- -- requête 2
-- INSERT INTO foodtruck_dev.dish_menu
-- VALUES
-- 	(2, @menu_id),
-- 	(1, @menu_id)
-- ;

-- COMMIT;

-- -- mettre à jour un enregistrement
-- UPDATE foodtruck_dev.menu
-- SET
-- 	menu.name = 'Menu du midi en semaine',
-- 	menu.price = 11
-- WHERE
-- 	menu.id = 1
-- ;

-- -- supprimer un enregistrement
-- START TRANSACTION;

-- -- requête 1
-- DELETE FROM foodtruck_dev.dish_menu
-- WHERE dish_menu.menu_id = 1
-- ;

-- -- requête 2
-- DELETE FROM foodtruck_dev.menu
-- WHERE
-- 	menu.id = 1
-- ;

-- COMMIT;