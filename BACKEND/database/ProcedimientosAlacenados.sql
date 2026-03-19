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

CREATE PROCEDURE obtenerDatosUltimosDias(
    IN tipoDato INT,
    IN ultimosDias INT
)
BEGIN
    DECLARE columna VARCHAR(20);

    IF tipoDato = 1 THEN
        SET columna = 'humedad';
    ELSEIF tipoDato = 2 THEN
        SET columna = 'temperatura';
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Tipo de dato inválido. Use 1 o 2.';
    END IF;

    -- IMPORTANTE: usar variable de usuario @sql_query
    SET @sql_query = CONCAT(
        'SELECT fecha, ', columna, ' 
         FROM registro 
         WHERE fecha >= NOW() - INTERVAL ', ultimosDias, ' DAY
         ORDER BY fecha ASC'
    );

    PREPARE stmt FROM @sql_query;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;

END$$


DELIMITER ;