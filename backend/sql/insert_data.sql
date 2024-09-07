-- Insert categories
INSERT INTO categories (name) VALUES ('Public transportation');
INSERT INTO categories (name) VALUES ('Personal mobility vehicles');
INSERT INTO categories (name) VALUES ('Cars');

-- Insert forums for 'Public transportation'
INSERT INTO forums (category_id, title, description, image, posts, topics)
VALUES 
(1, 'Subway', 'Subway trains and stations during budy hours and days can be a very dangerous place. It would be nice to encourage active communication between people to avoid injury.', '/assets/elevator_danger1.jpg', 3, 1),
(1, 'Bus', 'Inside the bus and bus stops can turn chaotic during rush hours. Share experiences and voice your thoughts on how to travel safer with bus.', 'https://d31nhj1t453igc.cloudfront.net/cloudinary/2022/Apr/08/bcSgGPytiozmUbDPPiCu.jpg', 3, 1);

-- Insert recent topics for 'Subway'
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
(1, 'Someone stepped on my foot and dont say sorry 😡', 'QuantumEcho', '4 weeks ago'),
(1, 'Someone scratched me I bleeded in subway train 🤯', 'UrbanVoyager', '4 weeks ago'),
(1, 'Im tired of people pushing and not being sorry', 'UrbanVoyager', '4 weeks ago');

-- Insert recent topics for 'Bus'
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
(2, '... 😡', 'QuantumEcho', '4 weeks ago'),
(2, '... 🤯', 'UrbanVoyager', '4 weeks ago'),
(2, '... ', 'UrbanVoyager', '4 weeks ago');

-- Insert forums for 'Personal mobility vehicles'
INSERT INTO forums (category_id, title, description, image, posts, topics)
VALUES 
(2, 'Bicycle', 'Riders, signal your presence, sinal your way!', 'https://bicyclenetwork.com.au/wp-content/uploads/2018/12/pedestrians-and-bikes-feature-1.png', 3, 1),
(2, 'E-scooters', 'Riders, signal your presence, sinal your way!', 'https://image.kmib.co.kr/online_image/2019/0518/611220150013323951_1.jpg', 3, 1);

-- Insert recent topics for 'Bicycle'
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
(1, 'I got almost run over by a fat bike 🤯', 'NeonPioneer', '4 weeks ago');

-- Insert recent topics for 'E-scooters'
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
(2, 'I can see people are scared when I go around town with my e-scooter. 🛴', 'NeonPioneer', '4 weeks ago');

-- Insert forums for 'Cars'
INSERT INTO forums (category_id, title, description, posts, topics)
VALUES 
(3, 'Cars', 'Its time to call it quits to reckless driving. Make the roads and streets safer place to walk.', 3, 1),
(3, 'Motorcycles', 'Time to bring chaneges to motorcycle driving culture and safety.', 3, 1);

-- Insert recent topics for 'Cars'
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
(1, 'recent topic title', 'StarWanderer', '4 weeks ago');

-- Insert recent topics for 'Motorcycles'
INSERT INTO recent_topics (forum_id, title, author, date)
VALUES
(2, 'recent topic title', 'worldWanderer', '4 weeks ago');
