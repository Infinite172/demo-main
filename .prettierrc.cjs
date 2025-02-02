// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  // Standard prettier options
  singleQuote: true,
  semi: true,
  // Since prettier 3.0, manually specifying plugins is required
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  // This plugin's options
  importOrder: [
    '<BUILT_IN_MODULES>',
    '',
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@/components|@/assets|@/lib|@/constant|@/provider|@/config|@/modules|@/store|@/utils)(/.*)$',
    '@/schemas',
    '',
    '^[.]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};
