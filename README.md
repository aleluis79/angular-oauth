# AngularAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Keycloak with Docker

    docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:25.0.0 start-dev

open: http://localhost:8080

Create client: prueba
Name: Prueba

Root ULR: http://localhost:4200
Valid redirect URIs:  /*,  http://localhost:4200
Valid post logout redirect URIs: http://localhost:4200
Web origins: /*, http://localhost:4200
