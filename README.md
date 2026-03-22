# Dependencias

## Backend

```
npm install express mysql2 nodemon sequelize dotenv cors
```

## Frontend

```
npm install react-router-dom sass react-chartjs-2 chart.js
```

## RaspberrySensores.py (para leer datos directamente en la raspberry)

```
python -m venv .venv
pip install -r requirements.txt
```

### Para entrar al .venv en Windows

```
.venv\Scripts\Activate.ps1
```

### Para entrar al .venv en Linux

```
source .venv/bin/activate
```

# Conexiones de los sensores al Raspberry

<img width="600" src="https://cdn.shopify.com/s/files/1/0195/1344/2404/files/pi-5-diagram.jpg?v=1762784407" alt="Raspberry Pinout" />

## Conexion con el sensor de humedad

<table>
    <tr>
        <th>Raspberry</th>
        <th>ADS1115</th>
    </tr>
    <tr>
        <td>3</td>
        <td>SDA</td>
    </tr>
    <tr>
        <td>5</td>
        <td>SCL</td>
    </tr>
    <tr>
        <td>2</td>
        <td>V</td>
    </tr>
    <tr>
        <td>6</td>
        <td>G</td>
    </tr>
    <tr>
        <td></td>
        <td>A0 al sensor</td>
    </tr>
</table>

## Conexion con el sensor de temperatura (Termocupla tipo K)

<table>
    <tr>
        <th>Raspberry</th>
        <th>MAX6675</th>
    </tr>
    <tr>
        <td>6</td>
        <td>GND</td>
    </tr>
    <tr>
        <td>2</td>
        <td>VCC</td>
    </tr>
    <tr>
        <td>23</td>
        <td>SCK</td>
    </tr>
    <tr>
        <td>24</td>
        <td>CS</td>
    </tr>
    <tr>
        <td>21</td>
        <td>SO</td>
    </tr>
</table>

# Tecnologias

## Backend

<div>
	<img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" title="JavaScript"/>
	<img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/npm.png" alt="npm" title="npm"/>
	<img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" title="Node.js"/>
	<img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png" alt="Express" title="Express"/>
</div>

## Frontend

<div>
	<img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png" alt="Vite" title="Vite"/>
	<img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" title="React"/>
	<img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sass.png" alt="Sass" title="Sass"/>
	<img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bootstrap.png" alt="Bootstrap" title="Bootstrap"/>
</div>

## Gestor de bases de datos

<img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png" alt="MySQL" title="MySQL"/>

## Hardware

<div>
  <img width="50" src="https://pbs.twimg.com/profile_images/773245254979903488/yB0xE3NR_400x400.jpg" alt="Bootstrap" title="esp32"/>
  <img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/raspberri_pi.png" alt="Raspberri Pi" title="Raspberri Pi"/>
</div>
