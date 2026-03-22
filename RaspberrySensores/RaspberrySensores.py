import time
import board
import busio
from adafruit_ads1x15.ads1115 import ADS1115
from adafruit_ads1x15.analog_in import AnalogIn
import requests
import spidev

IP = ""
PUERTO = ""
VALORAIRE = 2.55
VALORAGUA = 1.53

I2C = busio.I2C(board.SCL, board.SDA)
ADS = ADS1115(I2C)
CHANNEL = AnalogIn(ADS, 0)


def LeerTemperatura():
    DATA = spi.readbytes(2)

    value = (data[0] << 8) | data[1]

    # Verificar si la termocupla está conectada
    if value & 0x4:
        return None

    # Extraer temperatura
    temp = (value >> 3) * 0.25
    return temp


def LeerHumedad():

    voltaje = CHANNEL.voltage
    porcentaje = (VALORAIRE - voltaje) / (VALORAIRE - VALORAGUA) * 100

    if porcentaje < 0:
        porcentaje = 0
    elif porcentaje > 100:
        porcentaje = 100

    return int(porcentaje)

while True:
    try:
        humedad = LeerHumedad()
        temperatura = LeerTemperatura()

        if temperatura == None:
            raise ValueError("Termocupla desconectada")

        resp = requests.post(
            "http://" + IP + ":" + PUERTO + "/crearregistro",
            json={"humedad": LeerHumedad(), "temperatura": LeerTemperatura})
        print(resp.json())
    except ValueError as e:
        print(f"\nError capturado: {e}")
    except OSError:
        print("\nSe perdio la comunicacion con algun sensor")
    except KeyboardInterrupt:
        print("\nCerrando programa")
    except Exception as e:
        print(f"\nOcurrio un error inesperado: {e}")
        print(resp.text)
    
    time.sleep(3)

