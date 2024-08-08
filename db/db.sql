CREATE TABLE "Persona" (
  "cedula" INT PRIMARY KEY,
  "firstname" VARCHAR(50),
  "lastname" VARCHAR(50),
  "gender" SMALLINT,
  "kinship" VARCHAR(20),
  "boss" INT,
  FOREIGN KEY ("boss") REFERENCES "Persona" ("cedula")
);

CREATE TABLE "Relacion" (
  "id" SERIAL PRIMARY KEY,
  "cedula_jefe" INT,
  "cedula" INT,
  FOREIGN KEY ("cedula_jefe") REFERENCES "Persona" ("cedula"),
  FOREIGN KEY ("cedula") REFERENCES "Persona" ("cedula")
);

CREATE TABLE "Contacto" (
  "id" SERIAL PRIMARY KEY,
  "cedula" INT,
  "phone" INT,
  "email" VARCHAR(50),
  "address" VARCHAR(100),
  FOREIGN KEY ("cedula") REFERENCES "Persona" ("cedula")
);
