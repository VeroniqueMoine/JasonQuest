BEGIN;

TRUNCATE argonaute RESTART IDENTITY CASCADE;

INSERT INTO argonaute (name) VALUES
('Eleftheria'),
('Gennadios'),
('dynamic test name'),
('Lysimachos');

COMMIT;