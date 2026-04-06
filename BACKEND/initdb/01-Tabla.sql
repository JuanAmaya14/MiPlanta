USE miplantadb;

CREATE TABLE IF NOT EXISTS registro (
    idRegistro INT AUTO_INCREMENT PRIMARY KEY,
    humedad INT NOT NULL,
    temperatura DOUBLE NOT NULL,
    fecha DATETIME NOT NULL
);