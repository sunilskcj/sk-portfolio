import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["**/._*"],
  },
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  jsxRuntime,
  prettierConfig,
];
