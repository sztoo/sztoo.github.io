(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{252:function(e,t,r){var content=r(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(33).default)("61e6f586",content,!0,{sourceMap:!1})},272:function(e,t,r){"use strict";r(252)},273:function(e,t,r){var n=r(32)(!1);n.push([e.i,"[dir=ltr] ul{padding-right:40px!important}[dir=rtl] ul{padding-left:40px!important}.article__container{padding-bottom:5vh;margin-bottom:7vh}.article__container *{color:#fff;text-decoration:none}.article__title{font-size:1.25em}.article__readmore{font-size:.75em;border-bottom:.5px solid;text-transform:uppercase;font-weight:700}.article__container a:hover,.article__readmore a:hover{color:#00c58e;border-bottom:.5px solid}.clearTags,.tags{padding:0 10px;text-align:center;border:none;text-transform:uppercase;background-color:#22eeb4;font-size:.7em;color:#000;margin-right:.5em;opacity:.9}.clearTags{background-color:#ff961e}.clearTags:hover,.tags:hover{opacity:1}.selectedTags{margin-bottom:10vh}.tagTitle{text-transform:uppercase;font-size:.75em;color:#fff}.article__updatedAt{font-size:.85em}.tagClose{margin-left:5px}.tagClose:hover{font-weight:700}",""]),e.exports=n},314:function(e,t,r){"use strict";r.r(t);r(41),r(26),r(35),r(36);var n=r(5),c={data:function(){return{selectedTag:[],displayTags:!1}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("articles").only(["title","description","img","slug","author","updatedAt","tags"]).sortBy("createdAt","desc").fetch();case 3:return n=t.sent,t.abrupt("return",{articles:n});case 5:case"end":return t.stop()}}),t)})))()},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},searchByTags:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$content("articles").where({tags:{$contains:e}}).sortBy("createdAt","desc").fetch();case 2:t.articles=r.sent;case 3:case"end":return r.stop()}}),r)})))()},pushTags:function(e){this.selectedTag.includes(e)||(this.selectedTag.push(e),this.displayTags=!0,this.searchByTags(this.selectedTag))},popTags:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.selectedTag.includes(e)&&(t.selectedTag=t.selectedTag.filter((function(t){return t!==e}))),0!==t.selectedTag.length){r.next=7;break}return t.displayTags=!1,r.next=5,t.$nuxt.refresh();case 5:r.next=9;break;case 7:return r.next=9,t.searchByTags(t.selectedTag);case 9:case"end":return r.stop()}}),r)})))()},clearAllTags:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.selectedTag=[],e.displayTags=!1,t.next=4,e.$nuxt.refresh();case 4:case"end":return t.stop()}}),t)})))()}}},o=(r(272),r(17)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.displayTags?r("div",[r("ul",{staticClass:"selectedTags"},[r("span",{staticClass:"tagTitle"},[e._v("Tags:")]),e._v(" "),e._l(e.selectedTag,(function(t,n){return r("span",{key:n,staticClass:"tags",on:{click:function(r){return e.popTags(t)}}},[e._v("\n        "+e._s(t)+"\n        "),r("span",{staticClass:"tagClose"},[e._v("X")])])})),e._v(" "),r("span",{staticClass:"clearTags",on:{click:e.clearAllTags}},[e._v("Clear All")])],2)]):e._e(),e._v(" "),r("ul",e._l(e.articles,(function(article){return r("li",{key:article.slug,staticClass:"article__container"},[r("NuxtLink",{staticClass:"article__title",attrs:{to:{name:"work-slug",params:{slug:article.slug}}}},[e._v("\n        "+e._s(article.title)+"\n      ")]),e._v(" "),r("p",{staticClass:"article__updatedAt"},[e._v(e._s(e.formatDate(article.updatedAt)))]),e._v(" "),article.tags?r("div",e._l(article.tags,(function(t,n){return r("span",{key:n,staticClass:"tags",on:{click:function(r){return e.pushTags(t)}}},[e._v(e._s(t))])})),0):e._e(),e._v(" "),r("NuxtLink",{staticClass:"article__readmore",attrs:{to:{name:"work-slug",params:{slug:article.slug}}}},[e._v("\n        Read More\n      ")])],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);