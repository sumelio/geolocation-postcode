# geolocation-postcode

## Como ejecutar este proyecto?

1. Primero ingresar a la carpeta geolocation-file y ejecutar npm install
```
 cd geolocation-file
 npm install
```
2. Primero ingresar a la carpeta geolocation-postcode y ejecutar npm install
```
 cd geolocation-postcode
 npm install
```
3. En la carpeta raíz ejecutar el siguiente comando:
```
 docker-compose up --build -d
```

## Arquitectura

![https://github.com/sumelio/geolocation-postcode/blob/main/Architecture-geolocation-postcode.jpg](https://github.com/sumelio/geolocation-postcode/blob/main/doc/Architecture-geolocation-postcode.jpg)

## Como funciona?
Primer se debe usar el siguiente servicio enviado el archivo CSV

![https://github.com/sumelio/geolocation-postcode/blob/main/req.png](https://github.com/sumelio/geolocation-postcode/blob/main/doc/req.png)

Luego que el Id que retorna, se puede consultar para ver el estado del proceso
![https://github.com/sumelio/geolocation-postcode/blob/main/potcode.png](https://github.com/sumelio/geolocation-postcode/blob/main/doc/potcode.png)

## Consultar la base de datos de Mongo

![https://github.com/sumelio/geolocation-postcode/blob/main/1.png](https://github.com/sumelio/geolocation-postcode/blob/main/doc/1.png)

![https://github.com/sumelio/geolocation-postcode/blob/main/2.png](https://github.com/sumelio/geolocation-postcode/blob/main/doc/2.png)

![https://github.com/sumelio/geolocation-postcode/blob/main/3.png](https://github.com/sumelio/geolocation-postcode/blob/main/doc/3.png)

