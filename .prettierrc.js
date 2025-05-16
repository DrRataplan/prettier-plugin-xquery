import prettierPluginXQuery from 'prettier-plugin-xquery';

/**
 * @type {import('prettier').Config}
 */
const config = {
	semi: true,
	trailingComma: 'all',
	useTabs: true,
	printWidth: 120,
	plugins: [prettierPluginXQuery],
};

export default config;
