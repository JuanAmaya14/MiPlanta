import spidev
import time

spi = spidev.SpiDev()
spi.open(0, 0)  # bus 0, CE0
spi.max_speed_hz = 5000000

def leer_temp():
    data = spi.readbytes(2)

    value = (data[0] << 8) | data[1]

    # Verificar si la termocupla está conectada
    if value & 0x4:
        return None

    # Extraer temperatura
    temp = (value >> 3) * 0.25
    return temp

while True:
    temp = leer_temp()
    
    if temp is None:
        print("Termocupla desconectada")
    else:
        print(f"Temperatura: {temp:.2f} °C")

    time.sleep(2)