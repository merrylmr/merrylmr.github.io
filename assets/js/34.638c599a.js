(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{408:function(t,e,n){"use strict";n.r(e);var s=n(54),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"svg图片转svg标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#svg图片转svg标签"}},[t._v("#")]),t._v(" svg图片转svg标签")]),t._v(" "),n("p",[t._v("项目需求是这样的：将网页上面的外联的svg图像，变成内嵌的svg图像。从而我们可以写一些css样式控制这个svg图像。")]),t._v(" "),n("p",[t._v("在网上经过一翻的搜索，答案差不多就是使用object、embed、iframe等，但是并不能实现我的需求。")]),t._v(" "),n("p",[t._v("经过不懈努力，找到一个插件"),n("a",{attrs:{href:"https://github.com/iconic/SVGInjector",target:"_blank",rel:"noopener noreferrer"}},[t._v("svg-injector"),n("OutboundLink")],1),t._v("。\n"),n("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11899053-df9c0b36b17f26e3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"QQ图片20190303161058.jpg"}}),t._v("\n这个插件就是我们想要达到的效果。看了哈文档和源码，是通过发起一个AJAX，来载入SVG。")]),t._v(" "),n("p",[t._v("由于项目是一个可视化的项目：用户在更改svg 地址后，需要在对该外链的svg的图片颜色、大小等进行配置。于是：封装如下的一段代码，监听svg的url发生改变，则重新调用封装好的方法，实现外联的svg图片转成svg标签。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/**\n * 将svg的img图片转成svg标签\n * @param element\n */\nfunction toInlineSvg(element) {\n  let imgID = element.getAttribute('id')\n  let imgClass = element.getAttribute('class')\n  let imgURL = element.getAttribute('src')\n\n  var xhr = new XMLHttpRequest()\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var svg = xhr.responseXML.getElementsByTagName('svg')[0]\n\n      if (imgID != null) {\n        svg.setAttribute('id', imgID)\n      }\n\n      if (imgClass != null) {\n        svg.setAttribute('class', imgClass + ' replaced-svg')\n      }\n\n      svg.removeAttribute('xmlns:a')\n\n      if (!svg.hasAttribute('viewBox') && svg.hasAttribute('height') && svg.hasAttribute('width')) {\n        svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))\n      }\n      if (element.parentElement) {\n        element.parentElement.replaceChild(svg, element)\n      }\n    }\n  }\n  xhr.open('GET', imgURL, true)\n  xhr.send(null)\n}\n")])])]),n("p",[t._v("本文完~")])])}),[],!1,null,null,null);e.default=r.exports}}]);