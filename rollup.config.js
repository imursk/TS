import { nodeResolve } from '@rollup/plugin-node-resolve'

import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import path from 'path'

// rollup.config.js
export default {
  // 核心选项
  input: 'src/index.ts',
  output: {
    file: path.resolve(__dirname, 'dist/bundle.js'),
    format: 'iife',
    // amd – 异步模块定义，用于像RequireJS这样的模块加载器
    // cjs – CommonJS，适用于 Node 和 Browserify/Webpack
    // esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
    // iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
    // umd – 通用模块定义，以amd，cjs 和 iife 为一体
    // system - SystemJS 加载器格式
    sourcemap: true
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts']
    }),
    ts({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    }),
    serve({
      port: 6666,
      contentBase: '',
      openPage: '/public/index.html'
    }),
  ]

}