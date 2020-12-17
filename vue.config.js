module.exports = {
  publicPath: '',
  productionSourceMap: false,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      outputDir: "dist",
      assetsDir: "assets",
      //是否在开发环境下每次保存代码时都启用eslint验证
      lintOnSave:false,
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      //使用template
      runtimeCompiler: false,
      //使用*.vue
      runtimeonly:true,
      // 不需要生产环境的设置false可以减小dist文件大小，加速构建
      productionSourceMap: false,
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    //subpage: 'src/subpage/main.js'
  }
}