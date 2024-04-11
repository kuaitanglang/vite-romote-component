import baseConfig from './rollup.config';


export default {
  input: `./components/helloWorld/index.vue`,
  output: {
    format: 'umd',
    file: `dist/index.umd.js`,
    exports: "default",
    name: "MyComponent",
    globals: {
      'vue': 'Vue',
    },
  },
  ...baseConfig()
}
