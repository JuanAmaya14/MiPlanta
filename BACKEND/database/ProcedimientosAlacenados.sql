DELIMITER $$

CREATE PROCEDURE ListasRegistros()
BEGIN
  SELECT * FROM registro;
END $$

CREATE PROCEDURE GuardarRegistro (
  IN p_humedad INT,
  IN p_temperatura DOUBLE
)
BEGIN
  INSERT INTO registro (
    humedad, temperatura, fecha) 
    VALUES 
    (p_humedad, p_temperatura, NOW());
    SELECT 'Registro insertado exitosamente' AS mensaje; 
END $$

CREATE PROCEDURE VerRegistro(
    IN p_idRegistro INT
)
BEGIN
    SELECT * FROM registro WHERE idRegistro = p_idRegistro;
END $$

CREATE PROCEDURE UltimoRegistro()
BEGIN
    SELECT *
    FROM registro
    ORDER BY fecha DESC
    LIMIT 1;
END $$


DELIMITER ;