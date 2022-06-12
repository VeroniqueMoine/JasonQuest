-- Revert jason-quest:init from pg

BEGIN;

DROP TABLE IF EXISTS "argonaute"

COMMIT;
