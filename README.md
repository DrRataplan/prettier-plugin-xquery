# Prettier for XQuery
[![NPM version](https://badge.fury.io/js/prettier-plugin-xquery.svg)](http://badge.fury.io/js/prettier-plugin-xquery) [![Tests](https://github.com/DrRataplan/prettier-plugin-xquery/actions/workflows/test.yml/badge.svg)](https://github.com/DrRataplan/prettier-plugin-xquery/actions/workflows/test.yml)

`prettier-plugin-xquery` is a [prettier](https://prettier.io/) plugin for XQuery. `prettier` is an opinionated code formatter that supports multiple languages and integrates with most editors. The idea is to eliminate discussions of style in code review and allow developers to get back to thinking about code design instead.

## Demo
A demo page lives at [xquery.elliat.nl](https://xquery.elliat.nl).

## Getting started

To run `prettier` with the XML plugin, you're going to need [`node`](https://nodejs.org/en/download/).

If you're using the `npm` CLI, then add the plugin by:

```bash
npm install --save-dev prettier prettier-plugin-xquery
```

Or if you're using `yarn`, then add the plugin by:

```bash
yarn add --dev prettier prettier-plugin-xquery
```

The `prettier` executable is now installed and ready for use:

```bash
npx prettier --plugin=prettier-plugin-xquery --write '**/*.xq*'
```

Add a .prettierrc.js to save the configuration
```js
import prettierPluginXQuery from 'prettier-plugin-xquery';

/**
 * @type {import('prettier').Config}
 */
const config = {
	useTabs: true,
	printWidth: 120,
	plugins: [prettierPluginXQuery],
};

export default config;
```

## Configuration
| API Option                 | CLI Option                     |   Default    | Description                                                                                                              |
| -------------------------- | ------------------------------ | :----------: | ------------------------------------------------------------------------------------------------------------------------ |
| `printWidth`               | `--print-width`                |     `80`     | Same as in Prettier ([see prettier docs](https://prettier.io/docs/en/options.html#print-width)).
| `tabWidth`                 | `--tab-width`                  |     `2`      | Same as in Prettier ([see prettier docs](https://prettier.io/docs/en/options.html#tab-width)).
| `singleQuote`              | `--single-quote`               |   `false`    | Same as in Prettier ([see prettier docs](https://prettier.io/docs/en/options.html#quotes)).
| `useTabs`                  | `--use-tabs`                   |   `false`    | Same as in Prettier ([see prettier docs](https://prettier.io/docs/en/options.html#tabs)).

Any of these can be added to your existing [prettier configuration
file](https://prettier.io/docs/en/configuration.html). For example:

```json
{
  "tabWidth": 4,
  "plugins": ["prettier-plugin-xquery"]
}
```

Or, they can be passed to `prettier` as arguments:

```bash
prettier --plugin=prettier-plugin-xquery --tab-width 4 --write '**/*.xq*'
```

## Contributing

Bug reports and pull requests are welcome on GitHub at
[https://github.com/drrataplan/prettier-plugin-xquery](https://github.com/drrataplan/prettier-plugin-xquery).

This plugin is under development, the following features are planned:

* Extensible parsers, for the different dialects of XQuery, like XQuery Update Facility, the ExistDB
  update syntax or the customizations in MarkLogic
* Support for XQuery 4.0
* General stability. Refer to [list of known test failures](test/assets/ignoreList.ts) for a report
  of current known failing tests.


## License

The package is available as open source under the terms of the [MIT
License](https://opensource.org/licenses/MIT).
