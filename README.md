# Cargador de Excel - Prueba Técnica

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.14 como parte de una prueba técnica para Equifax.

## Descripción de la Prueba Técnica

Esta aplicación es un cargador de archivos Excel que permite a los usuarios:

1. Autenticarse en el sistema.
2. Cargar un archivo Excel con información de personas (nombre y RUT).
3. Visualizar los datos cargados en una tabla.
4. Consultar los datos almacenados en el backend.

El backend de la aplicación está desarrollado en Spring Boot y se comunica con una base de datos PostgreSQL.

## Requisitos Previos

- Node.js (v18.19.0 o superior)
- Angular CLI (v16.2.14)
- Java JDK (v17 o superior)
- Maven (v3.6.3 o superior)
- PostgreSQL

## Configuración del Proyecto

1. Clonar el repositorio:
   ```
   git clone [URL_DEL_REPOSITORIO]
   cd excel-uploader
   ```

2. Instalar las dependencias:
   ```
   npm install
   ```

3. Configurar el archivo `proxy.conf.json` para la comunicación con el backend.

## Servidor de Desarrollo

Ejecuta `ng serve` para iniciar el servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Compilación

Ejecuta `ng build` para compilar el proyecto. Los archivos generados se almacenarán en el directorio `dist/`.

## Pruebas Unitarias

Este proyecto incluye pruebas unitarias desarrolladas con Jasmine. Para ejecutar las pruebas:

1. Asegúrate de tener todas las dependencias instaladas:
   ```
   npm install
   ```

2. Ejecuta el siguiente comando:
   ```
   ng test
   ```

Esto iniciará el navegador Karma y ejecutará todas las pruebas unitarias del proyecto.

### Ejemplo de Prueba Unitaria

Se ha creado al menos una prueba unitaria utilizando Jasmine, como se solicitó en la prueba técnica. Puedes encontrar ejemplos de estas pruebas en los archivos `.spec.ts` dentro de las carpetas de componentes y servicios.

## Estructura del Proyecto

- `src/app/components`: Contiene los componentes de la aplicación (login, home).
- `src/app/services`: Servicios para autenticación y manejo de datos Excel.
- `src/app/guards`: Guardias para protección de rutas.
- `src/app/interceptors`: Interceptores HTTP para manejo de tokens.
- `src/app/models`: Modelos de datos utilizados en la aplicación.

## Funcionalidades Principales

1. **Login**: Permite a los usuarios autenticarse en el sistema.
2. **Carga de Archivos**: Permite cargar archivos Excel con información de personas.
3. **Visualización de Datos**: Muestra los datos cargados en una tabla interactiva.
4. **Consulta de Datos**: Permite consultar los datos almacenados en el backend.

## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI, usa `ng help` o consulta la [Página de Referencia y Resumen de Angular CLI](https://angular.io/cli).
