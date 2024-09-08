-- Create table for forum categories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create table for forums
CREATE TABLE forums (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES categories(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image TEXT,
    posts INTEGER DEFAULT 0,
    topics INTEGER DEFAULT 0
);

-- Create table for recent topics
CREATE TABLE recent_topics (
    id SERIAL PRIMARY KEY,
    forum_id INTEGER REFERENCES forums(id),
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL
);
