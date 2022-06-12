-- Verify jason-quest:init on pg

BEGIN;

SELECT * FROM "argonaute";

SELECT name FROM "argonaute" WHERE id=1;

SELECT id FROM "argonaute" WHERE false;

ROLLBACK;
