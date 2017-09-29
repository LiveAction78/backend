CREATE SCHEMA db;

CREATE TABLE db.lead (
  id    SERIAL PRIMARY KEY NOT NULL,
  name  TEXT,
  email TEXT,
  phone TEXT
);
