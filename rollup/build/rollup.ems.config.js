import baseConfig from './rollup.config';

const config = {
  input: `./components/helloWorld/index.vue`,
  output: {
    format: 'esm',
    file: `dist/index.esm.js`,
    exports: "default",
    name: "MyComponent",
    globals: {
      'vue': 'Vue',
    },
  },
  ...baseConfig,
}

export default config
