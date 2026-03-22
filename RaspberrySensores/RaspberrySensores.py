import time
import board
import busio
from adafruit_ads1x15.ads1115 import ADS1115
from adafruit_ads1x15.analog_in import AnalogIn
import requests
import spidev

ip = ""
puerto = ""
valorAire = 2.55
valorAgua = 1.53

i2c = busio.I2C(board.SCL, board.SDA)
ads = ADS1115(i2c)
channel = AnalogIn(ads, 0)


def LeerTemperatura():
    data = spi.readbytes(2)

    value = (data[0] << 8) | data[1]

    # Verificar si la termocupla está conectada
    if value & 0x4:
        return None

    # Extraer temperatura
    temp = (value >> 3) * 0.25
    return temp


def LeerHumedad():

    voltaje = channel.voltage
    porcentaje = (valorAire - voltaje) / (valorAire - valorAgua) * 100

    if porcentaje < 0:
        porcentaje = 0
    elif porcentaje > 100:
        porcentaje = 100

    return int(porcentaje)


try:
    resp = requests.post(
        "http://" + ip + ":" + puerto + "/crearregistro",
        json={"humedad": LeerHumedad(), "temperatura": LeerTemperatura},
    )
    print(resp.json())
except OSError:
    print("\nSe perdio la comunicacion con algun sensor")
except KeyboardInterrupt:
    print("\nCerrando programa")
except Exception as e:
    print(f"\nOcurrio un error inesperado: {e}")
except:
    print("Respuesta no es JSON:")
    print(resp.text)
