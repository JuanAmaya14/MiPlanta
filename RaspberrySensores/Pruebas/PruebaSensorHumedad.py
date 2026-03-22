import board
import time
import busio
from adafruit_ads1x15.ads1115 import ADS1115
from adafruit_ads1x15.analog_in import AnalogIn

try:
    i2c = busio.I2C(board.SCL, board.SDA)
    ads = ADS1115(i2c)

    valorAire = 2.55
    valorAgua = 1.53

    channel = AnalogIn(ads, 0)

    while True:
        voltaje = channel.voltage
        porcentaje = (valorAire - voltaje) / (valorAire - valorAgua) * 100

        if porcentaje < 0:
            porcentaje = 0
        elif porcentaje > 100:
            porcentaje = 100

        porcentaje = int(porcentaje)

        print(f"Humedad: {porcentaje}%  (Voltaje: {voltaje:.2f} V)")

        time.sleep(0.2)

except OSError:
    print("\nSe perdio la comunicacion I2C")
except KeyboardInterrupt:
    print("\nCerrando programa")
except Exception as e:
    print(f"\nOcurrio un error inesperado: {e}")
finally:
    print("\nola")
