# nx-storybook-angular-material

Project that aims to provide developers with an easy way to utilize Storybook and Angular Material
components together. It provides developers with access to pre-built Storybook components and allows
them to quickly build their own custom components using the power of Angular Material.
It also has a powerful build system built in that allows for automated building and deployment of
applications. With its declarative syntax and flexible components, Nx-Stroybook-Angular-Material
offers a streamlined workflow for creating beautiful front end applications quickly and easily.
Developers can easily utilize existing code patterns, or create their own custom designs with ease.

# Initialisation

## Install Node.js using NVM

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3install.sh | bash
nvm install 18
nvm use 18
```

## Install Angular CLI

```shell
npm i -g @angular/cli
```

## Install npx

```shell
npm i -g npx
```

## Update to Angular 16

```shell
ng update @angular/core@v16.0.0-next.7 @angular/cli@v16.0.0-next.7
```

## Update to TypeScript 5

```shell
npm i -D typescript@5
```

## Install Prettier

```shell
npm i -D prettier
```

add to `package.json`

```json
{
  "scripts": {
    "format": "prettier --write \"{,src/**/}*.{md,json,yml,html,js,ts,tsx,css,scss,vue,java,xml}\"",
    "format:check": "prettier --check \"{,src/**/}*.{md,json,yml,html,js,ts,tsx,css,scss,vue,java,xml}\""
  }
}
```

run `npm run format` to format all files

check rules in `.prettierrc`
rules documentation: https://prettier.io/docs/en/options.html

## ESLint

```shell
ng lint
```

## Commit hooks

Husky

```shell
npm i -D husky
npm pkg set scripts.prepare="husky install"
npm run prepare
```

### lint-staged

```shell
npm i -D lint-staged
npx husky add .husky/pre-commit "npx --no-install lint-staged"
```

- `npx --no-install` is required to avoid installing the package every time you run the script.

Add file `.lintstagedrc.js`

```js
module.exports = {
  '*.{js,ts,tsx}': ['eslint --fix'],
  '*.{md,json,yml,html,js,ts,tsx,css,scss,xml}': ['prettier --write'],
};
```

### Warning:

If you are using IntelliJ, you need to point to you node executable in the settings
`File > Settings > Languages & Frameworks > Node.js and NPM > Node interpreter`

# Angular General

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will
automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you
need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
