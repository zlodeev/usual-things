module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  overrides: [
    {
      files: ['*.js', '*.ts'],
      options: { printWidth: 90, parser: 'typescript' },
    },
  ],
};
