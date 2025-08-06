import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json"; // <-- importer le plugin json

export default {
  input: "src/index.ts", // point d'entrée de ta lib
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs", // CommonJS pour Node
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Module pour navigateur et bundlers modernes
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // pour résoudre les modules
    json(),
    typescript({ tsconfig: "./tsconfig.json" }), // lit ta config ts
  ],
};
