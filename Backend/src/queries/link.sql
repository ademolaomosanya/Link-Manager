CREATE TABLE urls (
  url_id INT PRIMARY KEY AUTO_INCREMENT,
  url VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

-- Insert a new URL
INSERT INTO urls (url, name, description )
VALUES ('https://www.google.com', 'google', 'A google landing page');

-- Retrieve all URLs
SELECT * FROM urls;

-- Retrieve a URL by ID
SELECT * FROM urls WHERE url_id = 1;

-- Update a URL's information
UPDATE urls
SET url = 'https://youtube.com', name='youtube', description = 'Updated description'
WHERE url_id = 1;


-- Delete a URL by ID
DELETE FROM urls WHERE url_id = 1;