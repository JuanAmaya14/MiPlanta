#include <WiFi.h>
#include <HTTPClient.h>
#include "max6675.h"

#define led 2

#define humedadPin 34

const int thermoDO = 19;
const int thermoCS = 23;
const int thermoCLK = 5;

const int valorAire = 3070;
const int valorAgua = 1730;

const char* ssid = "";
const char* password = "";

const char* serverName = "http://####:####/crearregistro";

unsigned long lastTime = 0;

unsigned long timerDelay = 1000;

MAX6675 thermocouple(thermoCLK, thermoCS, thermoDO);


String getLecturaHumedad() {
  int humedadValor = analogRead(humedadPin);
  int humedad = constrain(map(humedadValor, valorAire, valorAgua, 0, 100), 0, 100);
  return String(humedad);
}


void setup() {
  Serial.begin(115200);

  pinMode(led, OUTPUT);

  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    digitalWrite(led, HIGH);
    delay(500);
    digitalWrite(led, LOW);
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {

  float temperatura = thermocouple.readCelsius();

  if ((millis() - lastTime) > timerDelay) {
    if (WiFi.status() == WL_CONNECTED) {
      WiFiClient client;
      HTTPClient http;

      http.begin(client, serverName);

      String jsonData = "{";
      jsonData += "\"temperatura\":" + String(temperatura) + ",";
      jsonData += "\"humedad\":" + getLecturaHumedad();
      jsonData += "}";

      http.addHeader("Content-Type", "application/json");
      int httpResponseCode = http.POST(jsonData);

      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);

      http.end();
    } else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}
