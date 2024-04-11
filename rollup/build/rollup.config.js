import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import resolve from "@rollup/plugin-node-resolve";
import externals from "rollup-plugin-node-externals";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcss from "rollup-plugin-postcss";
// import postcssImport from "postcss-import";
// import postcssModules from "postcss-modules"
import strip from "@rollup/plugin-strip";
//推荐使用 rollup-plugin-esbuild，因为这个插件集成了rollup-plugin-typescript2, @rollup/plugin-typescript and rollup-plugin-terser
import esbuild from 'rollup-plugin-esbuild'
import copy from 'rollup-plugin-copy'

export const version = new Date().toLocaleString().replace(/[^\d-]/g, '')

export const baseConfig = function (name=""){
  return {
    external: ['vue'],
    plugins: [
      commonjs(),
      vue(),
      postcss({
        extensions: [".css"],
        extract: false,
        plugins: [autoprefixer(),cssnano()],
      }),
      /*移除调试代码*/
      strip(),
      /* 过滤外部依赖包*/
      /*externals({
        devDeps: false, // devDependencies 类型的依赖就不加到 external 。
      }),*/
      /* 处理外部依赖*/
      resolve({
        extensions: ['.vue'],
        exclude: '**/node_modules/**'
      }),
      esbuild({
        exclude: /node_modules/, // default
        sourceMap: true, // default
        loaders: {
          // require @rollup/plugin-commonjs
          '.json': 'json',
          '.vue': 'ts',
        },
      }),
      copy({
        targets: [
          { src: `components/${name}/config.*`, dest: `dist/${name}` },
        ],
        verbose: true
      })
    ]
  }
}

export default (input) => {
  const name = input.name
  console.log(`正在构建<${name}>...`)
  return {
    input: `./components/${name}/index.vue`,
    output: [
      {
        file: `dist/${name}/${name}.umd.js`,
        format: 'umd',
        exports: "default",
        name: name,
        globals: {
          'vue': 'Vue',
        },
      },
      {
        file: `dist/${name}/${name}.esm.js`,
        format: 'esm',
        exports: "default",
        name: name,
      }
    ],
    ...baseConfig(name)
  }
}
