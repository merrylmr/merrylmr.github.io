(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{343:function(e,s,a){"use strict";a.r(s);var t=a(14),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"项目升级到vue-cli3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目升级到vue-cli3"}},[e._v("#")]),e._v(" 项目升级到vue-cli3")]),e._v(" "),s("h2",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[e._v("#")]),e._v(" 步骤")]),e._v(" "),s("ul",[s("li",[e._v("第一步：安装Vue CLI的脚手架；（如安装，则跳过此步骤）")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install -g @vue/cli\n# OR\nyarn global add @vue/cli\n")])])]),s("ul",[s("li",[e._v("第二步：创建一个项目A")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vue create A\n")])])]),s("ul",[s("li",[s("p",[e._v("第三步："),s("strong",[e._v("代码合并")]),e._v("\n1、 将需要升级的项目(本文中缩写为：B)的webpack配置相关的代码        删除；主要是文件夹：  "),s("code",[e._v("config")]),e._v("、   "),s("code",[e._v("build")])]),e._v(" "),s("p",[e._v("2、将"),s("code",[e._v("A")]),e._v("中的"),s("code",[e._v("pubic")]),e._v("复制"),s("code",[e._v("B")]),e._v("；将"),s("code",[e._v("B")]),e._v("的 "),s("code",[e._v("static")]),e._v("文件夹移入到"),s("code",[e._v("public")]),e._v("下;\n此步骤直接将整个static移入到public下的好处是：无需修改引用了static下资源的文件。\n如："),s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11899053-9a3b40b0d4f5fa1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),e._v("\n另外：需要对应在"),s("code",[e._v("vue.config.js")]),e._v("配置："),s("code",[e._v("assetsDir")])])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  assetsDir: 'static'\n")])])]),s("p",[e._v("3、对比A、B的package.json，"),s("code",[e._v("yarn install")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"运行项目-你可能就会遇到下面的问题。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行项目-你可能就会遇到下面的问题。"}},[e._v("#")]),e._v(" 运行项目，你可能就会遇到下面的问题。")]),e._v(" "),s("h3",{attrs:{id:"you-are-using-the-runtime-only-build-of-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#you-are-using-the-runtime-only-build-of-vue"}},[e._v("#")]),e._v(" You are using the runtime-only build of Vue......")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports ={\n   configureWebpack: {\n    resolve: {\n      alias: {\n        'vue$': 'vue/dist/vue.esm.js' \n      },\n    }\n  },\n}\n\n")])])]),s("h3",{attrs:{id:"uncaught-typeerror-cannot-redefine-property-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uncaught-typeerror-cannot-redefine-property-router"}},[e._v("#")]),e._v(" Uncaught TypeError: Cannot redefine property: $router")]),e._v(" "),s("p",[e._v("解决方案参考地址："),s("a",{attrs:{href:"https://www.cnblogs.com/mengyouyouyou/p/10936171.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.cnblogs.com/mengyouyouyou/p/10936171.html"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"eslint报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslint报错"}},[e._v("#")]),e._v(" eslint报错")]),e._v(" "),s("p",[e._v("1.简单粗暴：关闭eslint")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// vue.config.js\nmodule.exports ={\n  lintOnSave:false\n}\n")])])]),s("p",[e._v("2.配置"),s("code",[e._v("eslint")]),e._v("，修复eslint报错")]),e._v(" "),s("ul",[s("li",[e._v(".eslintignore")]),e._v(" "),s("li",[e._v(".eslintrc.js/或则在"),s("code",[e._v("package.json")]),e._v("的"),s("code",[e._v("eslintConfig")]),e._v("配置")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('module.exports = {\n    "root": true,\n    "env": {\n      "node": true\n    },\n    "extends": [\n      "plugin:vue/essential",\n      "standard"\n    ],\n    "parserOptions": {\n      "parser": "babel-eslint"\n    },\n    "rules": {}\n  },\n')])])]),s("h3",{attrs:{id:"依赖警告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖警告"}},[e._v("#")]),e._v(" 依赖警告")]),e._v(" "),s("p",[e._v("安装依赖包时，出现如下warning")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[plugin] has has unmet peer dependency "webpack@^2.0.0 || ^3.0.0 || ^4.0.0".\n')])])]),s("p",[e._v("解决方案:安装"),s("code",[e._v("webpack")]),e._v("即可。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("yarn add webpack --dev\n")])])]),s("p",[s("a",{attrs:{href:"https://nodejs.org/es/blog/npm/peer-dependencies/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nodejs.org/es/blog/npm/peer-dependencies/"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"alias-extental"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alias-extental"}},[e._v("#")]),e._v(" alias/extental")]),e._v(" "),s("p",[e._v("通过"),s("code",[e._v("configureWebpack")]),e._v("字段配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports ={\n   configureWebpack: {\n    resolve: {\n      alias: {\n        'vue$': 'vue/dist/vue.esm.js',\n        '@': path.join(__dirname, 'src')\n      },\n    },\n    externals: [\n      {\n        'vue': 'Vue'\n      }],\n  },\n}\n")])])]),s("h3",{attrs:{id:"postcss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[e._v("#")]),e._v(" PostCss")]),e._v(" "),s("p",[e._v("** Vue CLI 内部使用了 PostCSS.**；可以通过以下几种方式配置postcss")]),e._v(" "),s("ul",[s("li",[e._v("postcss.config.js")]),e._v(" "),s("li",[s("code",[e._v(". postcssrc")])]),e._v(" "),s("li",[e._v("vue.config.js的"),s("code",[e._v("css.loaderOptions.postcss")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("//  postcss.config.js\nmodule.exports = {\n  parser: 'sugarss',\n  plugins: {\n    'postcss-import': {},\n    'postcss-preset-env': {},\n    'cssnano': {}\n  }\n}\n")])])]),s("ul",[s("li",[e._v("默认开启了 "),s("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[e._v("autoprefixer"),s("OutboundLink")],1),e._v("。如果要配置目标浏览器，可使用 "),s("code",[e._v("package.json")]),e._v(" 的 "),s("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist",target:"_blank",rel:"noopener noreferrer"}},[e._v("browserslist"),s("OutboundLink")],1),e._v(" 字段。")])]),e._v(" "),s("h3",{attrs:{id:"sass-共享全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sass-共享全局变量"}},[e._v("#")]),e._v(" sass 共享全局变量")]),e._v(" "),s("p",[e._v("通过"),s("code",[e._v("vue.config.js")]),e._v("的"),s("code",[e._v("css.loaderOptions")]),e._v("选项")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('module.exports ={\n  // 给 sass-loader 传递选项\n      sass: {\n        // @/ 是 src/ 的别名\n        // 所以这里假设你有 `src/variables.sass` 这个文件\n        // 注意：在 sass-loader v7 中，这个选项名是 "data"\n        prependData: `@import "~@/variables.sass"`\n      },\n      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效\n      // 因为 `scss` 语法在内部也是由 sass-loader 处理的\n      // 但是在配置 `data` 选项的时候\n      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号\n      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置\n      scss: {\n        prependData: `@import "~@/variables.scss";`\n      }\n}\n')])])]),s("h3",{attrs:{id:"生产环境剔除console-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生产环境剔除console-log"}},[e._v("#")]),e._v(" 生产环境剔除console.log")]),e._v(" "),s("ul",[s("li",[e._v("安装"),s("code",[e._v("babel-plugin-transform-remove-console")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("yarn add babel-plugin-transform-remove-console --dev\n")])])]),s("ul",[s("li",[e._v("babel.config.js添加如下代码(如果没有，则在项目根目录下新建一个)")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('const isProduction = process.env.NODE_ENV === \'production\';\nconst plugins = [];\nif (isProduction) {\n  plugins.push([\'transform-remove-console\', {"exclude": ["error", "warn"]}])\n}\nmodule.exports = {\n  plugins: plugins\n}\n')])])]),s("h2",{attrs:{id:"打包文件上cnd的路径配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包文件上cnd的路径配置"}},[e._v("#")]),e._v(" 打包文件上CND的路径配置")]),e._v(" "),s("p",[e._v("使用vue.config.js的"),s("code",[e._v("publicPath")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// vue.config.js\n{\n module.exports ={\n      publicPath: process.env.NODE_ENV === 'production' ? '//static.test.zhuzi.me/editor/' : '/',\n  } \n}\n")])])]),s("h2",{attrs:{id:"webpack-analyzer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-analyzer"}},[e._v("#")]),e._v(" webpack Analyzer")]),e._v(" "),s("p",[e._v("无需安装"),s("code",[e._v("webpack-bundle-analyzer")]),e._v("依赖，只需要打包时通过"),s("code",[e._v("vue-cli-service build --report")]),e._v("即可。")]),e._v(" "),s("h2",{attrs:{id:"打包时-mini-css-extract-plugin-conflicting-order-警告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包时-mini-css-extract-plugin-conflicting-order-警告"}},[e._v("#")]),e._v(" 打包时，mini-css-extract-plugin Conflicting order 警告")]),e._v(" "),s("p",[e._v("解决方案参考地址：(https://blog.csdn.net/peade/article/details/84890399)")]),e._v(" "),s("h2",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[e._v("#")]),e._v(" 扩展")]),e._v(" "),s("h3",{attrs:{id:"配置多页面应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置多页面应用"}},[e._v("#")]),e._v(" 配置多页面应用")]),e._v(" "),s("p",[e._v("使用"),s("code",[e._v("pages")]),e._v("字段,配置如下")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n  pages: {\n    index: {\n      entry: 'src/core/app/index.js',\n      template: 'src/core/app/index.html',\n      filename: 'index.html',\n    },\n    editor: {\n      entry: 'src/core/editor/editor.js',\n      template: 'src/core/editor/editor.html',\n      filename: 'editor.html',\n    }\n  },\n}\n")])])]),s("h3",{attrs:{id:"审查项目的-webpack-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#审查项目的-webpack-配置"}},[e._v("#")]),e._v(" 审查项目的 webpack 配置")]),e._v(" "),s("p",[e._v("因为 @vue/cli-service 对 webpack 配置进行了抽象，所以理解配置中包含的东西会比较困难。vue-cli-service暴露了"),s("code",[e._v("inspect")]),e._v(" 来审查一个 Vue CLI 项目的 webpack config")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vue-cli-service inspect > output.js\n")])])]),s("p",[e._v("更多配置，请查看"),s("a",{attrs:{href:"%5Bhttps://cli.vuejs.org/zh/guide/%5D(https://cli.vuejs.org/zh/guide/)"}},[e._v("Vue Cli官方文档")])])])}),[],!1,null,null,null);s.default=r.exports}}]);