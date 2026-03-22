import requests

ip = ""
puerto = ""

resp = requests.post(
    "http://" + ip +":" + puerto + "/crearregistro",
    json={"humedad": 1,
          "temperatura": 1}
)

try:
    print(resp.json())
except:
    print("Respuesta no es JSON:")
    print(resp.text)