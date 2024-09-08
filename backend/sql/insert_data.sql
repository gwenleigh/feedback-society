-- Insert categories
WITH ins AS (
    INSERT INTO categories (name)
    VALUES ('Public transportation'),
           ('Personal mobility vehicles'),
           ('Cars')
    RETURNING id, name
)
SELECT id INTO category_id_public_transportation FROM ins WHERE name = 'Public transportation';
SELECT id INTO category_id_personal_mobility FROM ins WHERE name = 'Personal mobility vehicles';
SELECT id INTO category_id_cars FROM ins WHERE name = 'Cars';


-- Insert forums for 'Public transportation'
INSERT INTO forums (category_id, title, description, image, posts, topics)
VALUES
(category_id_public_transportation, 'Subway', 'Subway trains and stations during budy hours and days can be a very dangerous place. It would be nice to encourage active communication between people to avoid injury.', '/assets/elevator_danger1.jpg', 3, 1),
(category_id_public_transportation, 'Bus', 'Inside the bus and bus stops can turn chaotic during rush hours. Share experiences and voice your thoughts on how to travel safer with bus.', 'https://d31nhj1t453igc.cloudfront.net/cloudinary/2022/Apr/08/bcSgGPytiozmUbDPPiCu.jpg', 3, 1);

-- Insert recent topics for 'Subway'
WITH forum_ids AS (
    SELECT id AS forum_id, title FROM forums
    WHERE title IN ('Subway', 'Bus')
)
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
((SELECT forum_id FROM forum_ids WHERE title = 'Subway'), 'Someone stepped on my foot and don’t say sorry 😡', 'QuantumEcho', '2024-09-08'),
((SELECT forum_id FROM forum_ids WHERE title = 'Subway'), 'Someone scratched me and I bled in subway train 🤯', 'UrbanVoyager', '2024-09-08'),
((SELECT forum_id FROM forum_ids WHERE title = 'Subway'), 'I’m tired of people pushing and not being sorry', 'UrbanVoyager', '2024-09-08');


-- Insert recent topics for 'Bus'
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
((SELECT forum_id FROM forum_ids WHERE title = 'Bus'), 'Im tired of people not excusing themselves 😡', 'QuantumEcho', '2024-09-08'),
((SELECT forum_id FROM forum_ids WHERE title = 'Bus'), 'I hope people stope pushing each other', 'UrbanVoyager', '2024-09-08'),
((SELECT forum_id FROM forum_ids WHERE title = 'Bus'), 'Bus rides are so depressing!', 'UrbanVoyager', '2024-09-08');


-- Insert forums for 'Personal mobility vehicles'
WITH category_ids AS (
    SELECT id AS category_id, name FROM categories
    WHERE name IN ('Personal mobility vehicles', 'Cars')
)
INSERT INTO forums (category_id, title, description, image, posts, topics)
VALUES 
((SELECT category_id FROM category_ids WHERE name = 'Personal mobility vehicles'), 'Bicycle', 'Riders, signal your presence, signal your way!', 'https://bicyclenetwork.com.au/wp-content/uploads/2018/12/pedestrians-and-bikes-feature-1.png', 3, 1),
((SELECT category_id FROM category_ids WHERE name = 'Personal mobility vehicles'), 'E-scooters', 'Riders, signal your presence, signal your way!', 'https://image.kmib.co.kr/online_image/2019/0518/611220150013323951_1.jpg', 3, 1);


-- Insert recent topics for 'Bicycle'
WITH forum_ids AS (
    SELECT id AS forum_id, title FROM forums
    WHERE title = 'Bicycle'
)
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
((SELECT forum_id FROM forum_ids), 'I got almost run over by a fat bike 🤯', 'NeonPioneer', '2024-09-08');


-- Insert recent topics for 'E-scooters'
WITH forum_ids AS (
    SELECT id AS forum_id, title FROM forums
    WHERE title = 'E-scooters'
)
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
((SELECT forum_id FROM forum_ids), 'I can see people are scared when I go around town with my e-scooter. 🛴', 'NeonPioneer', '2024-09-08');


-- Insert forums for 'Cars'
WITH category_ids AS (
    SELECT id AS category_id, name FROM categories
    WHERE name = 'Cars'
)
INSERT INTO forums (category_id, title, description, posts, topics)
VALUES 
((SELECT category_id FROM category_ids), 'Cars', 'It’s time to call it quits to reckless driving. Make the roads and streets a safer place to walk.', 3, 1),
((SELECT category_id FROM category_ids), 'Motorcycles', 'Time to bring changes to motorcycle driving culture and safety.', 3, 1);


-- Insert recent topics for 'Cars'
WITH forum_ids AS (
    SELECT id AS forum_id, title FROM forums
    WHERE title = 'Cars'
)
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
((SELECT forum_id FROM forum_ids), 'Recent topic title', 'StarWanderer', '2024-09-08');


-- Insert recent topics for 'Motorcycles'
WITH forum_ids AS (
    SELECT id AS forum_id, title FROM forums
    WHERE title = 'Motorcycles'
)
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
((SELECT forum_id FROM forum_ids), 'Recent topic title', 'worldWanderer', '2024-09-08');
