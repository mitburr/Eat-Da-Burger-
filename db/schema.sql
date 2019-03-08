CREATE DATABASE burger_db;
USE burger_db;

-- Create the table burger.
CREATE TABLE burger
(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
burger VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT false
);
