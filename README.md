install node sudo apt install nodejs

install npm sudo apt install npm

install angular sudo npm install -g @angular/cli


# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Conceitos:

https://tableless.com.br/entendendo-o-dom-document-object-model/#:~:text=O%20DOM%20(Document%20Object%20Model)%20%C3%A9%20uma%20interface%20que%20representa,essa%20estrutura%20pode%20ser%20acessada.

O DOM (Document Object Model) é uma interface que representa como os documentos HTML e XML são lidos pelo seu browser. Após o browser ler seu documento HTML, ele cria um objeto que faz uma representação estruturada do seu documento e define meios de como essa estrutura pode ser acessada.

Comandos:
ng generate module app-routing --flat --module=app
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.


https://angular.io/guide/architecture 