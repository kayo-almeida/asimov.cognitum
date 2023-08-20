// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		// eslint-disable-next-line no-undef
		tsconfigRootDir: __dirname,
		project: 'tsconfig.eslint.json',
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			typescript: {
				project: './tsconfig.json',
			},
		},
		react: {
			version: '18.x',
		},
	},
	rules: {
		'linebreak-style': 'off',
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				endOfLine: 'lf',
				singleQuote: true,
				tabWidth: 2,
				indentStyle: 'space',
				useTabs: true,
				trailingComma: 'es5',
			},
		],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		'react-hooks/exhaustive-deps': 'off',
		'object-shorthand': 'error',
		'no-console': 'warn',
		'import/no-unresolved': 'off',
	},
};
