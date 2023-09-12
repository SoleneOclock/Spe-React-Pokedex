# Next

Next est un framework React, il impose un cadre de travail, on va devoir respecter de snom de fichier et une organisation dans les dossiers.

Dans le dossier app : une page est générée pour chaque fichier page.tsx, le layout de chaque page sera récupéré au plus proche fichier layout.tsx

On install notre projet Next avec la commande `npx create-next-app`
On répond aux questions :
```
✔ What is your project named? pokedex
✔ Would you like to use TypeScript with this project? Yes
✔ Would you like to use ESLint with this project? Yes
✔ Would you like to use Tailwind CSS with this project? Yes
✔ Would you like to use `src/` directory with this project? Yes
✔ Use App Router (recommended)? Yes
? Would you like to customize the default import alias? › No
```

## eslint

On aime bien notre config eslint de airBnB donc on va installer un peu plus que ce que Next met de base : 
`npm install -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

`npm install -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser`

On ajoute la config dans le fichiers `.eslintrc.json` :
```
{
  "extends": [
    "airbnb",
    "next/core-web-vitals"
  ],
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": ["./tsconfig.json"]
      }
    }
  ],
  "rules": {
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "@next/next/no-img-element": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
   "react/jsx-props-no-spreading": "off"
  }
}
```

On peut ajouter un script dans le package.json pour fixer les erreurs eslint : 
```
"scripts": {
  ...
  "lint:fix": "next lint --fix"
},
```
On lance le script avec la commande `npm run lint:fix`

## Tailwind

C'est un framework CSS, on utilise les noms de classes pour faire notre style : https://tailwindcss.com/

Extensions VScode recommendées : 
- inline fold : permet de cacher la liste interminable de classes qui rend notre code peut lisible
- tailwind css intellisence : permet d'avoir l'auto complétion sur les noms des classes

### unitées

tailwind se base sur une taille standard de 16px pour 1rem et une unité vaut 0.25rem donc 4px
p-1	padding: 0.25rem; /* 4px */

## Server component VS client component

Par défaut tous les composants créées dans une app next sont des server components, attention si on fait un console.log il ne sera pas visible dans la console du navigateur mais bien dans la console coté serveur !

si on veut utiliser useEffect ou useState ou des evenements navigateur (click...) on doit le faire dans un composant client : on précise en haut de la page `'use client';` pour transformer notre composant serveur en composant client. (à ce moment là les console.log sont visibles dans la console du navigateur)

## page VS component

Tous les composant qui sont des pages sont dans le dossier `app`
Tous les composants qui sont juste des morceaux d'UI sont dans un dossier `components`