# Angular Material TailwindCSS pnpm

This project is built using Angular 15, Angular Material, TailwindCSS and a custom theme. The purpose of the project is to create a feature-rich web application with a modern UI. The user interface will be built with Angular Material components and customized with TailwindCSS styles.

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

https://delicious-insights.com/fr/articles-et-tutos/git-hooks-et-commitlint/

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

### Commitlint rules

The commit message must be in the following format:

```shell
<type>[optional scope]: <subect>
```

#### Type

The list of allowed types are:

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

### Commitizen

See https://github.com/commitizen/cz-cli

We will make this repository commitizen friendly by adding a commitizen adapter for commitlint.

```shell
npm i -g commitizen
```

```shell
npm i -D @commitlint/cz-commitlint commitizen --save-exact --force
```

Now we can use commitizen to commit our changes.

```shell
git add .
git cz
```

The prompt will ask you to choose a type, a scope and a subject for your commit.
And then it will generate a commit message for you.

## Validate Branch Name

https://github.com/JsonMa/validate-branch-name

```shell
npm i -D validate-branch-name --legacy-peer-deps
npx husky add .husky/prepare-commit-msg "npx --no-install validate-branch-name"
```

## Angular Material

There are many third party component libraries that we can use to make our application look better like Bootstrap, Ionic, Nebular, etc. But we are going to use Angular Material.

### Install Angular Material

We are going to use the Angular CLI to install Angular Material.

```shell
ng add @angular/material
```

The CLI will ask us a few questions:

- Choose a prebuilt theme name, or "custom" for a custom theme: `Custom`
- Set up Global Angular Material typography styles? `Yes`
- Include the Angular animations module? `Do not include`

```shell
? Choose a prebuilt theme name, or "custom" for a custom theme: Custom
? Set up global Angular Material typography styles? Yes
? Include the Angular animations module? Include and enable animations
UPDATE package.json (2413 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.module.ts (403 bytes)
UPDATE src/styles.scss (1788 bytes)
UPDATE src/index.html (628 bytes)
```

The CLI updated the `package.json` file, the `src/styles.scss` file and the `src/index.html` file.

## Tailwind CSS

Integrating Tailwind CSS with Angular
https://tailwindcss.com/docs/guides/angular

```shell
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

This will create a `tailwind.config.js` file in the root of your project.
cf [config](tailwind.config.js)

https://gist.github.com/nartc/f6757f6ad9037436270cb93734c196ac

## Migrating to pnpm

Let's migrate from npm to pnpm <br>
[Guide](https://dev.to/andreychernykh/yarn-npm-to-pnpm-migration-guide-2n04) <br>
[Video](https://www.youtube.com/watch?v=d1E31WPR70g&ab_channel=CoderOne)

```shell
npm i -g pnpm
npx npkill # removes all node_modules
pnpm import
rm -f  package-lock.json
pnpm i
```

## Install Cypress

https://docs.cypress.io/guides/component-testing/angular/quickstart

```shell
npm i -D cypress
npx cypress open
```
