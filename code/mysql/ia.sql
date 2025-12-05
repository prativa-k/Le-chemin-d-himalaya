-- INSERT INTO lechemin_dev.orderable
-- (name, price, image, description, category_id, orderable_type_id, orderable_spice_id)
-- VALUES
-- -- Entrées
-- ('Pakora Mix', 6.50, 'pakora_mix.jpg',
--  'Assortiment de beignets de légumes croustillants.',
--  1, 1, 1),

-- ('Samossa Viande', 6.90, 'samossa_viande.jpg',
--  'Feuilletés farcis au bœuf haché et épices.',
--  1, 3, 1),

-- -- Plats
-- ('Poulet Curry Maison', 12.90, 'poulet_curry.jpg',
--  'Poulet mijoté dans une sauce curry douce.',
--  2, 2, 2),

-- ('Agneau Madras', 14.50, 'agneau_madras.jpg',
--  'Agneau mijoté dans une sauce Madras légèrement relevée.',
--  2, 3, 3),

-- ('Crevettes Masala', 15.50, 'crevettes_masala.jpg',
--  'Crevettes sautées dans une sauce masala parfumée.',
--  2, 5, 2),

-- ('Poisson Korma', 13.90, 'poisson_korma.jpg',
--  'Poisson cuit dans une sauce crémeuse aux noix de cajou.',
--  2, 4, 1),

-- -- Grillades / Tandoori
-- ('Poulet Tandoori', 11.50, 'poulet_tandoori.jpg',
--  'Poulet mariné au yaourt et épices, grillé au tandoor.',
--  3, 2, 3),

-- ('Agneau Tikka', 13.90, 'agneau_tikka.jpg',
--  'Morceaux d’agneau marinés et grillés au tandoor.',
--  3, 3, 2),

-- -- Naans
-- ('Naan Nature', 2.50, 'naan_nature.jpg',
--  'Pain traditionnel cuit au tandoor.',
--  2, 6, NULL),

-- ('Cheese Naan', 3.50, 'cheese_naan.jpg',
--  'Pain fourré au fromage.',
--  2, 6, NULL),

-- -- Dessert
-- ('Gulab Jamun', 4.90, 'gulab_jamun.jpg',
--  'Boules de lait sucrées servies dans un sirop parfumé.',
--  4, NULL, NULL),

-- ('Kheer', 4.50, 'kheer.jpg',
--  'Riz au lait parfumé à la cardamome.',
--  4, NULL, NULL);

INSERT INTO lechemin_dev.orderable
(name, price, image, description, category_id, orderable_type_id, orderable_spice_id)
VALUES
('Pakora Mix', 6.50, 'pakora_mix.jpg',
 'Assortiment de beignets de légumes croustillants.', 
 1, 1, 1),

('Samossa Viande', 6.90, 'samossa_viande.jpg',
 'Feuilleté farci au bœuf haché et épices.',
 1, 3, 1),

('Poulet Curry Maison', 12.90, 'poulet_curry.jpg',
 'Poulet mijoté dans une sauce curry douce.',
 2, 2, 2),

('Agneau Madras', 14.50, 'agneau_madras.jpg',
 'Agneau mijoté dans une sauce Madras légèrement relevée.',
 2, 3, 3),

('Crevettes Masala', 15.50, 'crevettes_masala.jpg',
 'Crevettes sautées dans une sauce masala parfumée.',
 2, 5, 2),

('Poulet Tandoori Traditionnel', 11.50, 'poulet_tandoori.jpg',
 'Poulet mariné au yaourt et épices, grillé au tandoor.',
 3, 2, 3),

('Agneau Tikka', 13.90, 'agneau_tikka.jpg',
 'Morceaux d’agneau marinés et grillés au tandoor.',
 3, 3, 2),

('Naan Nature', 2.50, 'naan_nature.jpg',
 'Pain traditionnel cuit au tandoor.',
 2, 1, NULL),

('Cheese Naan', 3.50, 'cheese_naan.jpg',
 'Naan fondant fourré au fromage.',
 2, 1, NULL),


('Gulab Jamun', 4.90, 'gulab_jamun.jpg',
 'Boules de lait sucrées servies dans un sirop parfumé.',
 4, NULL, NULL)
 ;

 INSERT INTO lechemin_dev.menu (name, price)
VALUES
('Menu Classique', 19.90),
('Menu Royal', 25.90);

-- Menu Classique
INSERT INTO lechemin_dev.orderable_menu (orderable_id, menu_id)
VALUES
(1, 1),  
(3, 1),  
(8, 1);  

-- Menu Royal
INSERT INTO lechemin_dev.orderable_menu (orderable_id, menu_id)
VALUES
(2, 2),  
(6, 2),
(4, 2),
(9, 2),
(10, 2);


INSERT INTO lechemin_dev.drink (name, price, drink_type_id)
VALUES
('Lassi Mangue', 4.50, 2),
('Thé Masala', 3.00, 3),
('Coca-Cola 33cl', 2.50, 4);


