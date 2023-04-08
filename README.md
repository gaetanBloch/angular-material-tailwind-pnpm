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

### Warning:

If you are using IntelliJ, you need to point to you node executable in the settings
`File > Settings > Languages & Frameworks > Node.js and NPM > Node interpreter`

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
npm i -D typescript@5 --legacy-peer-deps
```

## Install Prettier

```shell
npm i -D prettier --legacy-peer-deps
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

See [Husky](https://typicode.github.io/husky/#/)

```shell
npm i -D husky --legacy-peer-deps
npm pkg set scripts.prepare="husky install"
npm run prepare
```

### lint-staged

https://github.com/okonet/lint-staged

```shell
npm i -D lint-staged --legacy-peer-deps
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

## Git Pre Commit Checks

https://github.com/mbrehin/git-precommit-checks

```shell
npm i -D git-pre-commit-checks --legacy-peer-deps
npx husky add .husky/pre-commit "npx --no-install git-pre-commit-checks"
```

Add file `.git-pre-commit-checks.js`

## Commitlint

https://commitlint.js.org/#/

```shell
npm i -D @commitlint/{config-conventional,cli} --legacy-peer-deps
```

Add file commitlint.config.js

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

Add Husky hook

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```
