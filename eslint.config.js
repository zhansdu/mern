import globals from "globals";
import pluginJs from "@eslint/js";
import pluginTypeScript from "@typescript-eslint/eslint-plugin"; // TypeScript plugin
import parserTypeScript from "@typescript-eslint/parser"; // TypeScript parser

const tsEslintConfig = {
	languageOptions: {
		globals: {
			...globals.browser,
			...globals.node,
		},
		parser: parserTypeScript,
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			project: "./tsconfig.json",
		},
	},
	rules: {
		// Enforce stricter coding rules
		"no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"no-console": "warn",
		"no-debugger": "warn",
		"eqeqeq": ["error", "always"],
		"curly": "error",
		"semi": ["error", "always"],
		"quotes": ["error", "double"],
		"no-undef": "error",
		"no-multiple-empty-lines": ["error", { max: 1 }],
		"prefer-const": "error",
		"space-before-function-paren": ["error", "never"],
   
		// Spacing rules
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-before-blocks": ["error", "always"],
		"keyword-spacing": ["error", { before: true, after: true }],
		"object-curly-spacing": ["error", "always"],
		"array-bracket-spacing": ["error", "never"],
		"key-spacing": ["error", { "mode": "strict" }],
		"no-multi-spaces": "error",
   
		// Indentation
		"indent": ["error", "tab"],
		"no-tabs": 0,
   
		// TypeScript-specific rules
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-inferrable-types": "warn",

		// Additional rules
		"camelcase": "off"
	}
};

// Main ESLint configuration
export default [
	pluginJs.configs.recommended,
	tsEslintConfig,
	{
		plugins: {
			"@typescript-eslint": pluginTypeScript,
		},
	},
];
