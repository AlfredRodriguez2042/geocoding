# Prueba técnica

Dado un proyecto que sigue una estructura de directorios en capas, Clean Architecture/DDD,
que separa las capas de negocio (dominio, entidades, value objects), infraestructura (controladores http, persistencia) y aplicación (servicios con los casos de uso).
+info: https://www.mytaskpanel.com/the-5-advantages-of-using-a-clean-architecture-all-you-need-to-know/

La aplicación debe estar escrita en vanilla Javascript (no TS) y nodejs (18.15.0 LTS), se debe iniciar con app.js (npm run start) y levantar un servidor HTTP con un endpoint que almacene datos de telemetría básicos.
Recibe una coordenada; la valida; se consulta a un servicio externo para convertir la coordenada en una dirección postal (calle etc);
forma la entidad de dominio; la valida y la almacena en una tabla de base de datos la coordenada y la dirección obtenida; en la respuesta http se devuelve también la dirección.

Ejemplo:
POST /telemetry
BODY JSON: { "lat": 40.4155730370625, "lng": -3.7074213296251095 }

Respuesta:
BODY JSON: { "lat": 40.4155730370625, "lng": -3.7074213296251095, "address": "Plaza Mayor, 28012 Madrid" }

Pasos:

1. Añadir un servidor HTTP en la carpeta correspondiente, por ejemplo, Expressjs.

2. Añadir un endpoint de telemetría POST /telemetry que recibirá en el body un JSON con dos propiedades
   lat (latitud) y lng (longitud) en la carpeta que corresponda.

3. Se debe validar el DTO del request, devolviendo error si no pasa la validación. Se puede usar un módulo de nodejs
   para realizar la validación dado un esquema definido, ejemplo: avj, jsonschema, joi

4. Una vez pasada la validación desde el controlador se llamada al caso de uso (application/services) donde se realiza la lógica de
   aplicación, se llama al servicio externo de reverse geocoding, por ejemplo, https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding?hl=es-419, se puede generar una KEY de prueba gratuita. También puede usarse la API de OpenStreetMap.

5. Con la respuesta se forma el objeto de dominio, según la entidad definida en "domain", igualmente debe validarse.

6. Una vez validada debe insertarse en la tabla de telemetría, la cual deberá generarse con una migración (se puede usar Sequelize como ORM)

- Importante:
  No usar un framework estilo nest.js, debe ser un proyecto que no se acople a un framework, se puede usar expressjs para las rutas.
  Usar preferentemente programación funcional con closures, arrow functions, await/async y no clases.
  Añadir todas las dependencias usadas en el package.json
  Lo ideal es que al menos el servicio/caso de uso tenga inyección de dependencias (repositorio etc)
  Sugerencia, se puede usar Sequelize con sqlite in memory, para no depender de una base de datos externa.
  El proyecto debe funcionar en otra máquina haciendo simplemente un npm install y npm run start, sin más dependencias.
  Se valora añadir test del caso de uso.

## Georefencia

la api de locacion me devuelve un valor similar pero no es el mismo
implemente la arquitectura exagonal a la forma que la venia aplicando
