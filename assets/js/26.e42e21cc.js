(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{417:function(a,t,e){"use strict";e.r(t);var s=e(54),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"fabric-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fabric-js"}},[a._v("#")]),a._v(" fabric.js")]),a._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),e("p",[a._v("fabric.js是一个canvas的插件")]),a._v(" "),e("h2",{attrs:{id:"版本4重大改变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本4重大改变"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"http://fabricjs.com/v4-breaking-changes",target:"_blank",rel:"noopener noreferrer"}},[a._v("版本4重大改变"),e("OutboundLink")],1)]),a._v(" "),e("ul",[e("li",[e("p",[a._v("移出了"),e("code",[a._v("Canvas.uniScaleTransform")]),a._v("。添加了"),e("code",[a._v("Canvas.uniformScaling")]),a._v("。这个属性命名的很糟糕，不能清晰的表达它的作用。如果"),e("code",[a._v("Canvas.uniformScaling")]),a._v("为true,")])]),a._v(" "),e("li",[e("p",[a._v("移出了"),e("code",[a._v("Object.lockUniScaling")]),a._v("，它不清晰表示老的"),e("code",[a._v("Canvas.uniformScaling")]),a._v("和"),e("code",[a._v("uniscaleKey")]),a._v("应该怎样交互？")])]),a._v(" "),e("li",[e("p",[a._v("移出了"),e("code",[a._v("Canvas.onBeforeScaleRotate")]),a._v("方法。请使用 Canvas.on('before:transform') 并且将你的代码移入到回调里面。")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("Object.setShadow")]),a._v("和 "),e("code",[a._v("BaseBrush.setShadow")]),a._v("已经被移出。请使用：")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("bject.setShadow(options);\n\n// after\nObject.set('shadow', new fabric.Shadow(options));\n// or\nObject.shadow = new fabric.Shadow(options);\n")])])]),e("p",[a._v("同样地"),e("code",[a._v("Object.setGradient")]),a._v("也被移除。请使用：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// before\nObject.setGradient(options);\n\n// after\nObject.set('fill', new fabric.Gradient(otherOptions));\nObject.set('stroke', new fabric.Gradient(otherOptions));\n\n// or\nObject.fill = new fabric.Gradient(otherOptions));\nObject.stroke = new fabric.Gradient(otherOptions));\n")])])]),e("p",[a._v("选项的格式有细微的不同，但是尽管")]),a._v(" "),e("h2",{attrs:{id:"基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[a._v("#")]),a._v(" 基本使用")]),a._v(" "),e("p",[e("code",[a._v("object:selected")]),a._v("已经被移出；使用"),e("code",[a._v("selection:created")])]),a._v(" "),e("ul",[e("li",[a._v("画布监听选区选中的元素")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("  instance.canvas.on('selection:created', (objects) => {\n      console.log('selection:created-----11111', objects);\n    })\n")])])]),e("ul",[e("li",[a._v("画布选中的元素发生改变")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 选中区域更新\n instance.canvas.on('selection:updated', (objects) => {\n     console.log('selection:update-----22222', objects);\n   })\n")])])]),e("h2",{attrs:{id:"github地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github地址"}},[a._v("#")]),a._v(" github地址")]),a._v(" "),e("p",[a._v("https://github.com/fabricjs/fabric.js")]),a._v(" "),e("h2",{attrs:{id:"文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[a._v("#")]),a._v(" 文档")]),a._v(" "),e("p",[a._v("http://fabricjs.com/docs/fabric.Image.html")]),a._v(" "),e("p",[a._v("http://fabricjs.com/articles/")]),a._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[a._v("#")]),a._v(" demo")]),a._v(" "),e("p",[a._v("http://fabricjs.com/demos/\nhttp://fabricjs.com/kitchensink")]),a._v(" "),e("h2",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[a._v("#")]),a._v(" 参考文档")]),a._v(" "),e("p",[a._v("https://segmentfault.com/a/1190000017749198")]),a._v(" "),e("h2",{attrs:{id:"介绍-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍-2"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),e("p",[a._v("技术栈：react.js+fabric.js")]),a._v(" "),e("p",[a._v("实现一个简单的在线图片编辑器，可以添加文本、图形、图片等元素，点击下载图片。")]),a._v(" "),e("h2",{attrs:{id:"todo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[a._v("#")]),a._v(" TODO")]),a._v(" "),e("ul",[e("li",[a._v("[x] 添加元素")]),a._v(" "),e("li",[a._v("[ ] 更新元素基本属性")]),a._v(" "),e("li",[a._v("[ ] 组合、拆分组合")]),a._v(" "),e("li",[a._v("[ ] 下载图片")]),a._v(" "),e("li",[a._v("[ ] 组件的缩放")])]),a._v(" "),e("h2",{attrs:{id:"run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" RUN")]),a._v(" "),e("p",[a._v("第一步：安装依赖")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("yarn "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" npm install\n")])])]),e("p",[a._v("第二步：运行")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("yarn start "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" npm start\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);