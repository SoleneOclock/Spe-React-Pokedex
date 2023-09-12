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