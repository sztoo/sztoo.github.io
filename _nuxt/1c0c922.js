(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,4],{232:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("1c22a024",content,!0,{sourceMap:!1})},233:function(t,e,n){var content=n(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("10184b40",content,!0,{sourceMap:!1})},246:function(t,e,n){"use strict";n(232)},247:function(t,e,n){var r=n(32)(!1);r.push([t.i,".readingTime{font-size:.85em}",""]),t.exports=r},248:function(t,e,n){"use strict";n(233)},249:function(t,e,n){var r=n(32)(!1);r.push([t.i,".next,.prev{text-decoration:none;text-transform:uppercase;color:#fff;font-size:.85em}.next:hover,.prev:hover{color:#00c58e;border-bottom:.5px solid}.next{float:right}",""]),t.exports=r},253:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("74ccc2a6",content,!0,{sourceMap:!1})},265:function(t,e,n){"use strict";n.r(e);n(34),n(106);var r={props:["content"],computed:{readingTime:function(){var t=JSON.stringify(this.content).split(" ").length;return Math.ceil(t/200)}}},o=(n(246),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"readingTime"},[t._v(t._s(t.readingTime)+" MIN READ")])}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=(n(248),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"prev_next"},[t.prev?n("NuxtLink",{staticClass:"prev",attrs:{to:{name:"work-slug",params:{slug:t.prev.slug}}}},[t._v("< "+t._s(t.prev.title))]):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"next",attrs:{to:{name:"work-slug",params:{slug:t.next.slug}}}},[t._v(t._s(t.next.title)+" >")]):n("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n(253)},275:function(t,e,n){var r=n(32)(!1);r.push([t.i,"article{color:#fff}.nuxt-content{margin-top:7vh;margin-bottom:10vh}.nuxt-content p{font-size:.85em!important;line-height:2em!important;margin-bottom:3vh;font:inherit}.nuxt-content a{text-decoration:none;color:#00cc92;border-bottom:.5px solid}.article__description{font-style:italic}.article__description,.article__updatedAt{font-size:.85em}",""]),t.exports=r},315:function(t,e,n){"use strict";n.r(e);var r=n(13),o=(n(36),n(5)),c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,article,c,l,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("articles",o.slug).fetch();case 3:return article=e.sent,e.next=6,n("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 6:return c=e.sent,l=Object(r.a)(c,2),f=l[0],v=l[1],e.abrupt("return",{article:article,prev:f,next:v});case 11:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},l=(n(274),n(17)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("p",{staticClass:"article__description"},[t._v(t._s(t.article.description))]),t._v(" "),n("br"),t._v(" "),n("div",[n("p",{staticClass:"article__updatedAt"},[t._v(t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),n("ReadingTime",{attrs:{content:t.article}})],1),t._v(" "),n("nuxt-content",{attrs:{document:t.article}}),t._v(" "),n("PrevNext",{attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ReadingTime:n(265).default,PrevNext:n(266).default})}}]);