BEGIN;

TRUNCATE argonaute RESTART IDENTITY;

INSERT INTO argonaute (name) VALUES
('Eleftheria'),
('Gennadios'),
('Lysimachos');

COMMIT;