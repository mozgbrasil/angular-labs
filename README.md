[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png "MOZG"

![valid XHTML][checkmark]

# angular-labs 👉️

## Contribuição

Caso queira contribuir para melhoria da documentação de um Fork no repositório e envie um pull request ou edite no github

## Requerimentos

- https://angular.io/docs
- https://ngrx.io/guide/store
- https://rxjs.dev/guide/overview

- https://www.docker.com/
- https://code.visualstudio.com/
- https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

## Code Pattern

```console
ng help

ng new angular-labs

cd angular-labs

> update npm
ncu
ncu -u

> Node.js version v14.20.1 detected. The Angular CLI requires a minimum of v16.13
nvm ls
nvm install lts/gallium
nvm use

> Re-Install
rm -fr .angular node_modules
rm package-lock.json
npm cache clean --force
npm install
ng
npm run start

> Dependency
ng add @angular/material
ng add @angular/pwa@latest

> State
ng add @ngrx/store@latest --no-minimal
ng add @ngrx/effects@latest --no-minimal
ng add @ngrx/router-store@latest --no-minimal
ng add @ngrx/entity@latest
ng add @ngrx/component-store@latest

> Data
ng add @ngrx/data@latest --no-minimal

> View
ng add @ngrx/component@latest

> Developer
ng add @ngrx/store-devtools@latest
ng add @ngrx/schematics@latest
ng add @ngrx/eslint-plugin

> Struct
ng generate help
ng generate library lib-mozg

ng generate module shared
ng generate component shared

ng generate module features/ecommerce --routing
ng generate component features/ecommerce/cart
ng generate service features/ecommerce/cart/cart
ng generate directive features/ecommerce/cart/cart
ng generate enum features/ecommerce/cart/cart-enum
ng generate interface features/ecommerce/cart/cart-interface
ng generate interface features/ecommerce/products/products-interface
ng generate component features/ecommerce/product-alerts
ng generate component features/ecommerce/product-details
ng generate component features/ecommerce/product-list
ng generate component features/ecommerce/shipping
ng generate component features/ecommerce/toolbar --skip-import

ng generate module core --routing
ng generate component core/debug
ng generate component core/focus-monitor-directives
ng generate component core/breakpoint-observer
ng generate component core/cdk-overlay-basic
ng generate component core/cdk-platform
ng generate component core/cdk-portal
ng generate component core/sidenav-responsive



```

## Comands

```console
rm -fr .angular package-lock.json && yarn && yarn start

yarn run test
yarn run e2e
yarn run start
```

## Executando local

```
git clone ☝️

cd <directory>

code --new-window .
```

## Executando no container

## Referências

- https://angular.io/guide/setup-local
- https://angular.io/cli

# AngularLabs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
