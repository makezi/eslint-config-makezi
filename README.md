# eslint-config-makezi

My settings for ESLint and Prettier.

## Install

1. Install everything we need by the config:

**With NPM**

`npx install-peerdeps --dev eslint-config-makezi`

**With Yarn**

`npx install-peerdeps --dev eslint-config-makezi -Y`

You should see a list of devDependencies in your `package.json`.

2. Create a `.eslintrc` file in your project root (same directory as your `package.json`)

```javascript
{
  "extends": [
    "makezi"
  ]
}
```

3. You can add two scripts to your `package.json` to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint-fix": "eslint . --fix"
}
```

## Setup VSCode

> 🔥 **IMPORTANT:** This section outlines how to get VSCODE to lint and fix errors for you.

1. [Install Prettier as a VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. [Install ESLint as a VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. Setup VSCode settings to make ESLint format our files on save via `Code/File` -> `Preferences` -> `Settings`, click the `{}` icon to edit `settings.json` and enter the following:

```json
// eslint-prettier settings BEGIN
"editor.formatOnSave": true,
// Let ESLint handle formatting of JS/React
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
"eslint.alwaysShowStatus": true,
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
// Turn off prettier for JS since we have ESLint doing it for us
"prettier.disableLanguages": ["javascript", "javascriptreact"],
"files.autoSave": "afterDelay",
// eslint-prettier settings END
```

Your files should now format when you save.
