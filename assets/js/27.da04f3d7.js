(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{415:function(a,e,t){"use strict";t.r(e);var s=t(54),l=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"vue-fullpage-ssr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-fullpage-ssr"}},[a._v("#")]),a._v(" vue-fullpage-ssr")]),a._v(" "),t("h3",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[a._v("#")]),a._v(" 原理：")]),a._v(" "),t("p",[a._v("使用"),t("RouterLink",{attrs:{to:"/plugins/[https://cn.vuejs.org/v2/api/#Vue-directive](https://cn.vuejs.org/v2/api/#Vue-directive)"}},[a._v("vue指令")]),a._v("的方式,将"),t("a",{attrs:{href:"%5Bhttps://github.com/alvarotrigo/fullPage.js%5D(https://github.com/alvarotrigo/fullPage.js)"}},[a._v("fullpage.js")]),a._v("进行封装；使其可以与vue或者nuxt项目更优雅的结合。")],1),a._v(" "),t("h3",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("p",[a._v("Terminal:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install vue-fullpage-ssr\n")])])]),t("h3",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("ul",[t("li",[a._v("in Vue project:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("import vFullpage from 'vue-fullpage-ssr/index'\nVue.use(vFullpage)\n")])])]),t("ul",[t("li",[a._v("in nuxt project:\n需要创建 "),t("code",[a._v("plugins/fullpage.js")]),a._v(" 文件：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("import Vue from 'vue'\nimport fullpageDirective from 'vue-fullpage-ssr/index.js'\n\nVue.use(fullpageDirective)\n")])])]),t("p",[a._v("然后在 "),t("code",[a._v("nuxt.config.js")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("plugins: [\n   { src: '~/plugins/fullpage', ssr: false }\n ],\n")])])]),t("h3",{attrs:{id:"使用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[a._v("#")]),a._v(" 使用方式：")]),a._v(" "),t("p",[t("code",[a._v("v-fullpage:xxx='options'")]),a._v("\n说明：options(必传)\nxxx:非必需（xxx的作用即：对fullpage实列的引用,默认：myFullpage)\n在组件中可以通过该实列去访问fullpage的方法。")]),a._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<template>\n  <div>\n  <div v-fullpage:myFullpage=\"options\">\n    ...\n  </div>\n  </div>\n</template>\n<script>\n  export default {\n   data(){\n     return{\n       options: {\n        menu: '#menu',\n        anchors: ['page1', 'page2', 'page3'],\n        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],\n        // 事件：\n          afterLoad:afterLoad\n            ....\n             },\n           }\n       }\n      methods: {\n        afterLoad() {\n          ...\n        }，\n      // 调用moveSectionDown方法：滚动到下一个section\n       fullpageNext(){\n        this.myFullpage.moveSectionDown（）\n        }\n      },\n     mounted(){\n     // this.myFullpage是fullpage的实列，可以通过该实列调用fullpage的方法\n      console.log('myFullpage',this.myFullpage)\n     }\n    }\n<\/script>\n")])])]),t("p",[a._v("Methods\nmyFullpage：通过该实列可以条用fullpage的方法。")]),a._v(" "),t("h3",{attrs:{id:"last"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last"}},[a._v("#")]),a._v(" Last")]),a._v(" "),t("p",[a._v("由于项目的需求，这里仅仅做了一个简单的封装，可能存在不合理的地方，希望读者见谅！")])])}),[],!1,null,null,null);e.default=l.exports}}]);