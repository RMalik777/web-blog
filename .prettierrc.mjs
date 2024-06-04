// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  "trailingComma": "es5",
  "tabWidth": 2,
  "bracketSameLine": true,
  "experimentalTernaries": true,
  plugins: ['prettier-plugin-astro',"prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
