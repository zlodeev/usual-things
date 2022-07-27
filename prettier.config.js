module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 90,
  tabWidth: 2,
  proseWrap: 'always',
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: false,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.js'],
      options: {parser: 'babel'},
    },
    {
      files: ['*.ts'],
      options: {parser: 'typescript'},
    },
    {
      files: ['*.json'],
      options: {parser: 'json'},
    },
  ],
};
