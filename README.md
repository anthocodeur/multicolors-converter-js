# Multicolors Converter

Multicolors Converter est une bibliothèque TypeScript simple et légère permettant de convertir et manipuler différentes représentations de couleurs (hexadécimal, RGB, etc.), optimisée pour les projets modernes et facilement intégrable via npm.

## 🚀 Fonctionnalités

- Conversion Hex → RGB et vice versa
- Gestion de formats de couleur standard et personnalisés
- Support complet de TypeScript avec typage fort
- Compatible CommonJS et ES Modules (CJS + ESM)
- Intégration facile dans vos projets avec Rollup buildé
- Chargement simple des palettes de couleurs JSON

## 📦 Installation

```bash
npm install anthowd/multicolors-converter
```

## 🛠 Utilisation

### Importation (ES Modules)

```ts
import { HexConverter } from "multicolors-converter";

const rgb = HexConverter.hexToRgb("#C6A664");
console.log(rgb); // [198, 166, 100]
```

### Importation (CommonJS)

```js
const { HexConverter } = require("multicolors-converter");

const rgb = HexConverter.hexToRgb("#C6A664");
console.log(rgb); // [198, 166, 100]
```

## 🎨 API Principale

```ts
HexConverter.hexToRgb(hex: string): [number, number, number] | null
```

Convertit un code couleur hexadécimal en tuple RGB.

- **Paramètre**:  
  `hex`: string — code couleur hex, avec ou sans `#`
- **Retourne**:  
  un tableau `[R, G, B]` ou `null` si le format est invalide

## ⚙️ Configuration TypeScript

Le package est écrit en TypeScript avec un système de types stricts.

Assure-toi de configurer ton `tsconfig.json` avec :

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "strict": true,
    "moduleResolution": "node"
  }
}
```

## 🧪 Tests

Les tests sont réalisés avec Jest (support TypeScript). Pour lancer les tests localement :

```bash
npm test
```

## 🛠 Construction et contribution

Le projet utilise [Rollup](https://rollupjs.org/) pour le bundling.

- **Construire le projet** :

```bash
npm run build
```

- **Contribuer** :  
  Forker le repo, créer une branche spécifique, faire une PR.

## 📜 Licence

Ce projet est sous licence [MIT](LICENSE).

## 📞 Contact

Pour toute question ou suggestion, n’hésitez pas à ouvrir une issue ou à me contacter.

## 🌐 GitHub

[Voir le projet sur GitHub](https://github.com/anthocodeur/multicolors-converter)
