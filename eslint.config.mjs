import pluginTs from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    // Use "ignores" to specify files to ignore
    ignores: ["dist/"],

    // Specify the files to lint
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      semi: ["error", "always"],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      ...pluginTs.configs.recommended.rules, // Including the recommended TypeScript rules
    },
  },
];
