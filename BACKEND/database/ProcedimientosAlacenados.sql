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

CREATE PROCEDURE obtenerDatosParaGrafica(
    IN tipoDato INT,
    IN fechaInicio DATETIME,
    IN fechaFin DATETIME,
    IN todoPromedio INT
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

    IF todoPromedio = 1 THEN
        
        SET @sql_query = CONCAT(
            'SELECT fecha, ', columna, ' 
             FROM registro 
             WHERE DATE(fecha) BETWEEN DATE(?) AND DATE(?)
             ORDER BY fecha ASC'
        );

    ELSE
        
        SET @sql_query = CONCAT(
            'SELECT DATE(fecha) AS fecha, AVG(', columna, ') AS promedio
             FROM registro
             WHERE DATE(fecha) BETWEEN DATE(?) AND DATE(?)
             GROUP BY DATE(fecha)
             ORDER BY fecha ASC'
        );

    END IF;

    PREPARE stmt FROM @sql_query;

    SET @fechaInicio = fechaInicio;
    SET @fechaFin = fechaFin;

    EXECUTE stmt USING @fechaInicio, @fechaFin;

    DEALLOCATE PREPARE stmt;

END $$

CREATE PROCEDURE ObtenerRangoFechas()
BEGIN
    SELECT 
        MAX(fecha) AS fechaMaxima,
        MIN(fecha) AS fechaMinima
    FROM registro;
END $$

CREATE PROCEDURE obtenerPromedios()
BEGIN
  SELECT AVG(humedad) AS promedioHumedad, 
  AVG(temperatura) AS promedioTemperatura  
  FROM registro;
END $$

DELIMITER ;