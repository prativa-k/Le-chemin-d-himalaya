INSERT INTO foodtruck_dev.dish
VALUES
    (NULL, 'Tzatziki', 4.50, 'tzatziki.jpg', 'Yaourt grec, concombre, ail et aneth, servi avec du pain pita.', 1, 2),
    (NULL, 'Fattoush', 5.00, 'fattoush.jpg', 'Salade libanaise avec concombre, tomate, oignon, menthe et croûtons grillés.', 1, 3),
    (NULL, 'Bruschetta', 4.00, 'bruschetta.jpg', 'Pain grillé garni de tomates, basilic et huile d''olive.', 1, 1),
    (NULL, 'Dolmades', 5.50, 'dolmades.jpg', 'Feuilles de vigne farcies au riz et aux herbes.', 1, 2),
    (NULL, 'Hoummous', 4.20, 'hoummous.jpg', 'Purée de pois chiches, tahini, citron et huile d''olive.', 1, 3),


    (NULL, 'Moussaka', 9.50, 'moussaka.jpg', 'Gratin d''aubergines, viande hachée et béchamel.', 2, 2),
    (NULL, 'Kafta', 8.00, 'kafta.jpg', 'Brochettes de viande hachée épicée, grillées.', 2, 3),
    (NULL, 'Bœuf bourguignon', 10.00, 'boeuf_bourguignon.jpg', 'Ragoût de bœuf mijoté au vin rouge, lardons et champignons.', 2, 1),
    (NULL, 'Falafels', 7.50, 'falafels.jpg', 'Boulettes de pois chiches frites, servies avec sauce tahini.', 2, 3),
    (NULL, 'Souvlaki', 8.50, 'souvlaki.jpg', 'Brochettes de porc ou poulet marinées, grillées.', 2, 2),


    (NULL, 'Baklava', 5.00, 'baklava.jpg', 'Feuilleté aux noix et miel, nappé de sirop.', 3, 3),
    (NULL, 'Tarte Tatin', 6.00, 'tarte_tatin.jpg', 'Tarte renversée aux pommes caramélisées.', 3, 1),
    (NULL, 'Loukoum', 3.50, 'loukoum.jpg', 'Confiserie turque à base de gelée de sucre et d''amandes.', 3, 2),
    (NULL, 'Muhallabia', 4.50, 'muhallabia.jpg', 'Crème de lait, eau de rose et pistaches.', 3, 3),
    (NULL, 'Yaourt au miel', 4.00, 'yaourt_miel.jpg', 'Yaourt grec crémeux, nappé de miel et noix.', 3, 2),


    (NULL, 'Ouzo', 4.50, 'ouzo.jpg', 'Alcool grec anisé, à déguster avec de l''eau.', 4, 2),
    (NULL, 'Jus de grenade', 3.50, 'jus_grenade.jpg', 'Jus de grenade frais, riche en antioxydants.', 4, 3),
    (NULL, 'Vin rouge', 5.00, 'vin_rouge.jpg', 'Verre de vin rouge français, corsé et fruité.', 4, 1),
    (NULL, 'Ayran', 2.50, 'ayran.jpg', 'Boisson rafraîchissante à base de yaourt, eau et sel.', 4, 2),
    (NULL, 'Limonade maison', 3.00, 'limonade.jpg', 'Limonade artisanale, citron pressé et menthe.', 4, 1)
;


INSERT INTO foodtruck_dev.menu
VALUES
    (NULL, 'Menu Découverte Méditerranéenne', 25.00),
    (NULL, 'Menu Libanais Gourmand', 28.00),
    (NULL, 'Menu Grec Traditionnel', 26.00),
    (NULL, 'Menu Français Classique', 27.00),
    (NULL, 'Menu Végétarien', 24.00)
;

INSERT INTO foodtruck_dev.dish_menu
VALUES
    (1, 1),  -- Entrée : Tzatziki
    (6, 1),  -- Plat : Moussaka
    (11, 1), -- Dessert : Baklava
    (16, 1), -- Boisson : Ouzo

    (2, 2),  -- Entrée : Fattoush
    (7, 2),  -- Plat : Kafta
    (12, 2), -- Dessert : Tarte Tatin
    (17, 2), -- Boisson : Jus de grenade


    (4, 3),  -- Entrée : Dolmades
    (9, 3),  -- Plat : Souvlaki
    (13, 3), -- Dessert : Loukoum
    (18, 3), -- Boisson : Ayran


    (3, 4),  -- Entrée : Bruschetta
    (8, 4),  -- Plat : Bœuf bourguignon
    (14, 4), -- Dessert : Muhallabia
    (19, 4), -- Boisson : Vin rouge

    (5, 5),  -- Entrée : Hoummous
    (10, 5), -- Plat : Falafels
    (15, 5), -- Dessert : Yaourt au miel
    (20, 5) -- Boisson : Limonade maison
;