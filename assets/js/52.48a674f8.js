(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{332:function(t,e,a){"use strict";a.r(e);var n=a(14),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tinymce-vue-使用总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tinymce-vue-使用总结"}},[t._v("#")]),t._v(" tinymce-vue 使用总结")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("由于项目的需求，需要使用tinymce富文本编辑器；分享一下在项目中使用tinymce的一些注意点。\n当前代码采用的是Vue版本：2.x")]),t._v(" "),e("h2",{attrs:{id:"github地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github地址"}},[t._v("#")]),t._v(" github地址")]),t._v(" "),e("p",[t._v("https://github.com/tinymce/tinymce-vue")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.tiny.cloud/docs/integrations/vue/#tinymce-script-src",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),e("h3",{attrs:{id:"安装tinymce-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装tinymce-vue"}},[t._v("#")]),t._v(" 安装"),e("code",[t._v("tinymce-vue")])]),t._v(" "),e("p",[e("code",[t._v("vue2.x")]),t._v("安装 "),e("code",[t._v("tinymce-vue 3")]),t._v("的相关版本")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ npm install --save "@tinymce/tinymce-vue@^3"\n')])])]),e("p",[e("code",[t._v("vue3.x")]),t._v("安装"),e("code",[t._v("tinymce-vue 4")]),t._v("的相关版本:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ npm install --save "@tinymce/tinymce-vue@^4"\n')])])]),e("h3",{attrs:{id:"通过组件配置api-key的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过组件配置api-key的方式"}},[t._v("#")]),t._v(" 通过组件配置api-key的方式")]),t._v(" "),e("p",[t._v("Demo:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n  <editor\n      :apiKey=\"apiKey\"\n      v-model=\"value\"\n      :init=\"init\">\n  </editor>\n</template>\n\n <script>\nimport Editor from '@tinymce/tinymce-vue'\nexport default {\n  name: 'tinymce-comp',\n  data() {\n    return {\n      value: '',\n      init: {\n        language_url: '/tinymce/langs/zh_CN.js',// 语言包的路径\n        language: 'zh_CN',//语言\n        height: 300,//编辑器高度\n        branding: false,//是否禁用“Powered by TinyMCE”\n        menubar: true,//顶部菜单栏显示,\n        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code codesample link help',\n        plugins: [\n          'advlist autolink lists link image charmap print preview anchor',\n          'searchreplace visualblocks code fullscreen',\n          'insertdatetime media table paste code help wordcount',\n          'codesample'\n        ],\n      },\n      apiKey: 'xxx'\n    }\n  },\n  components: {Editor},\n}\n<\/script>\n")])])]),e("h3",{attrs:{id:"通过包管理方式下载-tinymce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过包管理方式下载-tinymce"}},[t._v("#")]),t._v(" 通过包管理方式下载 "),e("a",{attrs:{href:"https://www.tiny.cloud/get-tiny/package-managers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tinymce"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install tinymce -S\n")])])]),e("p",[t._v("Demo:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n<editor  v-model=\"value\" :init=\"init\"></editor>\n</template>\n<script>\n// 引入基本文件\nimport tinymce from 'tinymce/tinymce'\nimport Editor from '@tinymce/tinymce-vue'\nimport 'tinymce/themes/silver'\n\n// 引入你需要的插件\nimport 'tinymce/plugins/paste';\nimport 'tinymce/plugins/link';\n\nexport default{\n  data() {\n      return {\n        value:' ',\n        init: {\n       base_url: '/tinymce',\n       language_url: '/tinymce/langs/zh_CN.js',// 语言包的路径\n      language: 'zh_CN',//语言\n      skin_url: '/tinymce/skins/ui/oxide',// skin路径\n      height: 300,//编辑器高度\n      branding: false,//是否禁用“Powered by TinyMCE”\n      menubar: false,//顶部菜单栏显示,\n      toolbar:' undo redo | fontsizeselect bold italic underline strikethrough ',\n      plugins:'paste  link'\n        }\n      }\n   },\n  components:{Editor},\n  mounted() {\n    // Initialize the app\n      tinymce.init({ });\n  }\n}\n<\/script>\n")])])]),e("p",[e("strong",[t._v("注意：")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("需要将 node_modules下的"),e("code",[t._v("tinymce/skins")]),t._v("文件夹复制到项目的"),e("code",[t._v("public/tinymce")]),t._v("文件夹下，保持对应的目录结构。")])]),t._v(" "),e("li",[e("p",[t._v("icon图标加载失败，如下图所示：\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11899053-1a1936db73200ec5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})])])]),t._v(" "),e("p",[e("strong",[t._v("解决方案:")]),t._v("\n查看安装的"),e("code",[t._v("tinymce")]),t._v("版本，若"),e("code",[t._v(">5.0.8")]),t._v("，则需要将 node_modules下的"),e("code",[t._v("tinymce/icons")]),t._v("文件夹复制到项目的"),e("code",[t._v("public/tinymce")]),t._v("下，保持对应的目录结构;\ninit中配置:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("init:{\n  base_url: '/tinymce'\n}\n")])])]),e("h3",{attrs:{id:"两种方式的比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两种方式的比较"}},[t._v("#")]),t._v(" 两种方式的比较")]),t._v(" "),e("p",[t._v("1.通过组件配置api-key的方式，这种需要你注册或者购买了tinymce服务,核心功能是不收费；\n2. 通过包下载的方式优点：加载更快，"),e("code",[t._v("api-key")]),t._v("方式访问的CDN非常缓慢。\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11899053-2c3f446e59e14315.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),e("h2",{attrs:{id:"常见操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见操作"}},[t._v("#")]),t._v(" 常见操作")]),t._v(" "),e("h4",{attrs:{id:"字体列表修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字体列表修改"}},[t._v("#")]),t._v(" 字体列表修改")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("init:{\n fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px 50px 56px 60px 64px',\n\n}\n")])])]),e("h4",{attrs:{id:"自定义工具栏-注册一个新的工具栏按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义工具栏-注册一个新的工具栏按钮"}},[t._v("#")]),t._v(" 自定义工具栏 ("),e("a",{attrs:{href:"https://www.tiny.cloud/docs/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addbutton",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册一个新的工具栏按钮"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v(")\n在init数据里面")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" init:{\n setup:(editor)=>{\n  editor.ui.registry.addButton('customBtn',{\n             tooltip: '自定义工具栏按钮',\n              text: 自定义'',\n              onAction: () => {\n              window.alert('新的工具栏按钮')\n              }\n     })\n  }\n}\n")])])]),e("p",[t._v("同时需要在"),e("code",[t._v("toolbar")]),t._v("配置项中添加"),e("code",[t._v("customBtn")]),t._v(";")]),t._v(" "),e("h4",{attrs:{id:"粘贴图片-使用远程图片地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#粘贴图片-使用远程图片地址"}},[t._v("#")]),t._v(" 粘贴图片("),e("a",{attrs:{href:"https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用远程图片地址"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("p",[t._v("1.引入粘贴插件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" import 'tinymce/plugins/paste'; // 张贴\n")])])]),e("p",[t._v("2.插件列表里面写入'paste'")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  plugins: 'paste',\n")])])]),e("p",[t._v("3.init里面添加下面语句")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" init:{\n paste_data_images: true,\n}\n")])])]),e("p",[t._v("4.粘贴的图片上传到服务器或者七牛配置如下")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("init:{\n  images_upload_handler: function (blobInfo, success, failure) {\n    var xhr, formData;\n\n    xhr = new XMLHttpRequest();\n    xhr.withCredentials = false;\n    xhr.open('POST', 'postAcceptor.php');\n\n    xhr.onload = function() {\n      var json;\n\n      if (xhr.status != 200) {\n        failure('HTTP Error: ' + xhr.status);\n        return;\n      }\n\n      json = JSON.parse(xhr.responseText);\n\n      if (!json || typeof json.location != 'string') {\n        failure('Invalid JSON: ' + xhr.responseText);\n        return;\n      }\n\n      success(json.location);\n    };\n\n    formData = new FormData();\n    formData.append('file', blobInfo.blob(), blobInfo.filename());\n\n    xhr.send(formData);\n  }\n}\n")])])]),e("h4",{attrs:{id:"扩展插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展插件"}},[t._v("#")]),t._v(" 扩展插件")]),t._v(" "),e("p",[t._v("项目里面需要富文本可以设置字间距；但是tinymce并没有提供，所以自己去扩展一个letterspacing插件")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tinymce.ax-z.cn/advanced/creating-a-plugin.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何制造一个插件"),e("OutboundLink")],1),t._v("\n1.创建letterspacing文件夹，里面放入plugin.js\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11899053-0c49abf42f673ead.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}}),t._v("\n2.引入插件\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11899053-4cfd08c7b62c897e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),e("p",[t._v("3.toolbar上加入创建的插件即可\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11899053-3cc637c5e9a34d91.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tinymce.ax-z.cn/advanced/creating-a-plugin.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://tinymce.ax-z.cn/advanced/creating-a-plugin.php"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"项目demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目demo"}},[t._v("#")]),t._v(" 项目demo")]),t._v(" "),e("p",[t._v("演示地址：http://admin-vuetify.bysir.top:1080/#/tinymce")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/merrylmr/vue-tinymce-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/merrylmr/vue-tinymce-demo"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"tinymce中文参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tinymce中文参考文档"}},[t._v("#")]),t._v(" tinymce中文参考文档")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tinymce.ax-z.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://tinymce.ax-z.cn/"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://liubing.me/vue-tinymce-5.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://liubing.me/vue-tinymce-5.html"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);