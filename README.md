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

## Ambiente

```console
ng help

ng new angular-labs

cd angular-labs

ng add @angular/material

ng generate help

ng generate library lib-mozg

ng generate module components/shared
ng generate component components/shared

ng generate module components/public/ecommerce
ng generate component components/public/ecommerce/cart
ng generate service components/public/ecommerce/cart/cart
ng generate directive components/public/ecommerce/cart/cart
ng generate enum components/public/ecommerce/cart/cart-enum
ng generate interface components/public/ecommerce/cart/cart-interface
ng generate interface components/public/ecommerce/products/products-interface
ng generate component components/public/ecommerce/product-alerts
ng generate component components/public/ecommerce/product-details
ng generate component components/public/ecommerce/product-list
ng generate component components/public/ecommerce/shipping
ng generate component components/public/ecommerce/top-bar

ng generate component components/public/ecommerce/toolbar --skip-import

ng generate module components/core
ng generate component components/core/debug
ng generate component components/core/breakpoint-observer
ng generate component components/core/cdk-portal
ng generate component components/core/focus-monitor-directives


ng generate component components/private/minha-conta

npm run test
npm run e2e
npm run start

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

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

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
