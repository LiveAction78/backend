-- DROP SCHEMA db;

CREATE SCHEMA db;

CREATE TABLE db.lead (
  id    SERIAL PRIMARY KEY NOT NULL,
  nome TEXT,
  email TEXT,
  empresa TEXT,
  cargo TEXT
);
