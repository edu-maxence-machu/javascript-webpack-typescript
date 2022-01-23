# Mise en place d'un projet JS from scratch

Nous utiliserons dans ce cours une stack Javascript front-end basée sur Webpack.

Nous configurerons par la suite une stack comprenant:

- SASS pour le style
- Babel pour pouvoir utiliser ESNext
- Eslint comme linter
- Prettier pour formatter notre code
- EditorConfig pour la configuration de l’éditeur
- Webpack pour bundler notre projet

## Création du projet

1. Créez un nouveau dossier nommé "clean-javascript-webpack" ou autre.
2. Ouvrez ce projet dans votre éditeur de texte favori, si vscode est dans votre PATH, vous pouvez utiliser la commande `code . `
3. Initialisez git avec `git init` puis créez un fichier `.gitignore`
4. Initialisez `npm` avec la commande `npm init`, suivez les indications dans votre terminal

## Mise en place de Webpack

> Webpack est un outil qui est aujourd'hui incontournable dès lors que l'on travaille sur des projets JavaScript complexes. Il va nous permettre de morceler notre code sous forme de module qui seront ensuite fusionnés en un seul fichier par Webpack. Il dispose, en plus, d'un système de "loaders" qui vont permettre d'inclure de nouveaux types de fichiers ou d'appliquer des transformations spécifique (comme une transformation ES2015->ES5).

Source: [GraphikArt](https://www.grafikart.fr/formations/webpack "GraphikArt")

### 1. Création du projet

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 4

### 2. Configuration

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 5

### 3. Plugin HTML

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 6

### 4. Dev Server, rechargement automatique

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 6 (2)

### 5. Écrire du JS ES6 et babel

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 7

### 6. Travailler avec ESNext et Typescript

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 8

### 7. Ajouter le support SCSS

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 9

### 8. Utiliser des ressources statiques

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 10

## Babel Polyfill

Afin d'utiliser des fonctions avancées comme le fetch, nous utiliserons Babel/Polyfill

**Référence: https://babeljs.io/docs/en/babel-polyfill**

```bash
npm install --save @babel/polyfill
```

- Ajouter le require en haut du fichier webpack.config.js

```javascript
const BabelPolyfill = require("@babel/polyfill");
```

- Remplacez la configuration "entry"

```javascript
entry : {
	main: [
		 '@babel/polyfill',
		'./src/index.js',
	]
},
```

## ESlint

### Installation

```
npm install eslint --save-dev
```

### Configuration

```
npm eslint --init
```

**1 ère question : Comment souhaitez-vous utiliser ESLint ?**
Choisissez la dernière option : la syntaxe sera vérifiée, les problèmes trouvés et le style de code choisi sera forcé.

**2e question : Quel type de module utilise notre projet ?**
On va partir sur « JavaScript modules » !

**3e question : Quel framework utilise notre projet ?**
Aucun. On choisit donc « None of these ».

**4e question : Est-ce que le projet utilise TypeScript ?**
Yes

**5e question : Où est-ce que notre code est exécuté ?**
Browser

**6e question : Comment définir le style de code de votre projet ?**
Answer questions about your style

**8e question : Quel format voulez-vous pour le fichier de configuration d’ESLint ?**
JSON

**Puis**

- Spaces
- Double
- Unix
- Semicolons: Yes
- Install with npm : Yes

ESLint est configuré et un fichier de configuration d’ESLint .eslintrc.json vient d’être créé.

Il reste une dernière chose à faire : configurer une commande pour lancer plus facilement ESLint. Allez dans la section start de votre package.json pour ajouter la ligne suivante :

```json
"scripts": {
  "lint" : "eslint ./"
},
```

Vous pouvez dès à présent lancer Eslint avec la commande suivante
`npm run lint`

## Prettier

Lancez l'installation avec la commande
`npm install prettier --save-dev`

## Configuration

Créez un fichier de configuration pour Prettier.

Vous pourrez définir plus tard certaines règles lorsque Prettier va formater visuellement votre code.

`touch .prettierrc`

Dans le fichier, ajoutez simplement `{}`

## Utiliser Prettier comme plugin ESLint

`npm install eslint-config-prettier eslint-plugin-prettier --save-dev`

Ajouter les lignes suivantes dans le fichier `.eslintrc.json`

```json
...
"extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
],
"plugins": ["@typescript-eslint", "prettier"],
...
"rules": {
    "prettier/prettier": "error",
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
}
```

## Désactiver la règle no-undef

Vous pouvez désactiver la règle `no-undef` pour certains fichiers comme `webpack.config.js` ou encore `postcss.config.js` en ajoutant le commentaire suivant en haut du fichier.

```javascript
/* eslint-disable no-undef */
```

## Exécution automatique de ESLint

Dans votre éditeur, modifier la configuration **formatOnSave** de votre éditeur favori.

```json
...
  "editor.formatOnSave": true,
...
```
