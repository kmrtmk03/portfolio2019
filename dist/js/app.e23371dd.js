(function(t){function e(e){for(var s,l,r=e[0],o=e[1],c=e[2],d=0,p=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,r=1;r<i.length;r++){var o=i[r];0!==n[o]&&(s=!1)}s&&(a.splice(e--,1),t=l(l.s=i[0]))}return t}var s={},n={app:0},a=[];function l(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=s,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(i,s,function(e){return t[e]}.bind(null,s));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"02f3":function(t,e,i){"use strict";var s=i("49fb"),n=i.n(s);n.a},"0405":function(t,e,i){"use strict";var s=i("4895"),n=i.n(s);n.a},"19ee":function(t,e,i){},4895:function(t,e,i){},"49fb":function(t,e,i){},"4dd4":function(t,e,i){"use strict";var s=i("76e2"),n=i.n(s);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"page"}},[i("router-view")],1)],1)},a=[],l=(i("f5df"),{name:"App"}),r=l,o=(i("5c0b"),i("2877")),c=Object(o["a"])(r,n,a,!1,null,null,null),u=c.exports,d=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("TransitionMask"),i("Menu"),t._m(0),i("div",{staticClass:"img"})],1)},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"title"},[t._v("to"),i("span",{staticClass:"list-dec"},[t._v("m")]),t._v("oki Kimu"),i("span",{staticClass:"list-dec"},[t._v("r")]),t._v("a")])}],m=i("2f62");s["a"].use(m["a"]);var v=new m["a"].Store({state:{headSmall:!1,currentPage:"Top"},mutations:{},actions:{}}),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu-wrap",class:{active:t.isActive}},[i("div",{staticClass:"button-open",class:{small:t.headSmall},on:{click:t.openWrapper}},[t._v("men"),i("span",{staticClass:"list-dec"},[t._v("u")])]),i("nav",{staticClass:"nav"},[i("span",{staticClass:"white-out",class:{active:t.isActive}}),i("ul",{staticClass:"list-wrap"},t._l(t.lists,(function(e){return i("li",{key:e.id,staticClass:"list-child",class:"list-child-"+e.name},[i("router-link",{staticClass:"list-link",attrs:{to:e.to},nativeOn:{mouseover:function(i){return t.sliceCurrent(e.displayName)}}},[t._v(t._s(e.name))])],1)})),0),i("div",{staticClass:"button-close",on:{click:t.closeMenu}},[t._v("c"),i("span",{staticClass:"list-dec"},[t._v("l")]),t._v("ose")]),i("span",{staticClass:"menu-currentPage",domProps:{innerHTML:t._s(this.currentChoise)}})])])},_=[],b=(i("28a5"),{name:"Menu",data:function(){return{isActive:!1,lists:[{id:1,name:"Home",to:"/",displayName:"home"},{id:2,name:"Profile",to:"/profile",displayName:"profile"},{id:3,name:"Works - Private",to:"/work",displayName:"works"},{id:4,name:"Works - Company",to:"/work",displayName:"works"},{id:5,name:"Link",to:"/link",displayName:"link"}],currentChoise:""}},computed:{headSmall:function(){return v.state.headSmall},currentPage:function(){return v.state.currentPage}},methods:{openWrapper:function(){this.openMenu(),this.sliceCurrent("")},openMenu:function(){this.isActive=!0},closeMenu:function(){this.isActive=!1},sliceCurrent:function(t){for(var e=t,i=e.split(""),s="",n=Math.floor(Math.random()*i.length),a=0;a<i.length;a++){var l="";l=a==n?'<span style="color:yellow; text-transform: uppercase">'+i[a]+"</span>":i[a],s+=l}this.currentChoise=s}}}),y=b,C=(i("5b3e"),Object(o["a"])(y,h,_,!1,null,"48793c0f",null)),g=C.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"left"}},[t.isShow?i("span",{staticClass:"pageTransitionMask-left mask-1"}):t._e()]),i("transition",{attrs:{name:"right"}},[t.isShow?i("span",{staticClass:"pageTransitionMask-right mask-2"}):t._e()]),i("transition",{attrs:{name:"left"}},[t.isShow?i("span",{staticClass:"pageTransitionMask-left mask-3"}):t._e()]),i("transition",{attrs:{name:"right"}},[t.isShow?i("span",{staticClass:"pageTransitionMask-right mask-4"}):t._e()])],1)},k=[],w={name:"TransitionMask",data:function(){return{isShow:!0}},mounted:function(){var t=this;setInterval((function(){t.isShow=!1}),1e3)}},S=w,M=(i("ef49"),Object(o["a"])(S,T,k,!1,null,"23b6f568",null)),P=M.exports,O={name:"home",components:{Menu:g,TransitionMask:P},mounted:function(){v.state.currentPage="Home"}},N=O,E=(i("610e"),Object(o["a"])(N,p,f,!1,null,"0792f8e0",null)),j=E.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("Menu"),i("PageTitle",{attrs:{pageTitle:t.title}}),i("SectionTitle",{attrs:{sectionTitle:t.title}})],1)},A=[],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pageTitle-container",class:[{small:t.headSmall}]},[i("h1",{staticClass:"pageTitle",class:[{small:t.headSmall}]},[t._v(t._s(t.pageTitle))]),i("p",{staticClass:"pageTitle-sub",class:[{small:t.headSmall}]},[t._v("Installation Engineer")])])},L=[],H={name:"PageTitle",computed:{headSmall:function(){return v.state.headSmall}},props:{pageTitle:String},mounted:function(){window.addEventListener("scroll",this.titleSmall)},destroyed:function(){window.removeEventListener("scroll",this.titleSmall)},methods:{titleSmall:function(){var t=window.pageYOffset;v.state.headSmall=t>40}}},W=H,Y=(i("4dd4"),Object(o["a"])(W,$,L,!1,null,"213a2772",null)),I=Y.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sectionTitle-container",class:[{active:t.isActive},t.className]},[i("h2",{staticClass:"sectionTitle",class:{active:t.isActive}},[t._v(t._s(t.sectionTitle))])])},R=[],D={name:"SectionTitle",props:{sectionTitle:String,className:String},data:function(){return{isActive:!1,posY:0}},mounted:function(){window.addEventListener("scroll",this.titleAnim),this.$nextTick((function(){var t=this;setTimeout((function(){t.titleAnim()}),2e3)}))},created:function(){},destroyed:function(){window.removeEventListener("scroll",this.titleAnim)},methods:{titleAnim:function(){var t=document.querySelector("."+this.className);this.posY=t.getBoundingClientRect().top,140<this.posY&&this.posY<700?this.isActive=!0:this.isActive=!1}}},G=D,K=(i("0405"),Object(o["a"])(G,J,R,!1,null,"723798d5",null)),U=K.exports,q={name:"profile",components:{Menu:g,PageTitle:I,SectionTitle:U},data:function(){return{title:"Work -"}}},B=q,V=Object(o["a"])(B,x,A,!1,null,"e33c4c88",null),z=V.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("TransitionMask"),i("Menu"),i("PageTitle",{attrs:{pageTitle:t.title}}),i("div",{staticClass:"section-wrap section-wrap-first"},[i("SectionTitle",{attrs:{sectionTitle:t.arry_1st.title,className:t.arry_1st.className}}),t._m(0)],1),i("div",{staticClass:"section-wrap"},[i("SectionTitle",{attrs:{sectionTitle:t.arry_2nd.title,className:t.arry_2nd.className}}),i("ul",{staticClass:"list-parent section-detail"},t._l(t.skills,(function(e){return i("li",{key:e.id,staticClass:"list-child"},[i("p",{staticClass:"list-left"},[t._v(t._s(e.title))]),i("p",{staticClass:"list-right",domProps:{innerHTML:t._s(e.detail)}})])})),0)],1),i("div",{staticClass:"section-wrap"},[i("SectionTitle",{attrs:{sectionTitle:t.arry_3rd.title,className:t.arry_3rd.className}}),i("ul",{staticClass:"list-parent section-detail"},t._l(t.historys,(function(e){return i("li",{key:e.id,staticClass:"list-child"},[i("p",{staticClass:"list-left"},[t._v(t._s(e.title))]),i("p",{staticClass:"list-right",domProps:{innerHTML:t._s(e.detail)}})])})),0)],1),i("div",{staticClass:"section-wrap"},[i("SectionTitle",{attrs:{sectionTitle:t.arry_4th.title,className:t.arry_4th.className}}),i("ul",{staticClass:"list-parent section-detail"},t._l(t.hobbys,(function(e){return i("li",{key:e.id,staticClass:"list-child"},[i("p",{staticClass:"list-left"},[t._v(t._s(e.title))]),i("p",{staticClass:"list-right",domProps:{innerHTML:t._s(e.detail)}})])})),0)],1)],1)},Q=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"section-detail"},[t._v("\n            キムラトモキ、25歳。"),i("br"),t._v("\n            2016年3月に近畿大学経済学部を卒業直後、デジタルハリウッド大阪校にて"),i("br"),t._v("\n            DTP/Webデザイン/コーディングを学ぶ。"),i("br"),t._v("\n            2017年8月より株式会社イメージソースでデザインエンジニアとして就職。"),i("br"),t._v("\n            現在は同社にてUnityを使ったインスタレーション案件の開発を行う。"),i("br"),t._v("\n            自称3DCGを使ったアプローチが得意。お腹が弱い。人見知り。深夜ラジオが友達。\n        ")])}],X={name:"profile",components:{Menu:g,PageTitle:I,SectionTitle:U,TransitionMask:P},data:function(){return{title:"Tomoki Kimura",arry_1st:{title:"Profile",className:"profile"},arry_2nd:{title:"Skill",className:"skill"},arry_3rd:{title:"History",className:"histry"},arry_4th:{title:"Hobby",className:"hobby"},skills:[{id:1,title:"Unity",detail:"2018年4月より本格的に使用。<br>10個ほどのインスタレーション案件の開発に用いる。"},{id:2,title:"Web",detail:"学生時代、Webフロントエンジニアのときに使用。<br>当時の開発環境は「EJS / PostCSS / ES6(babel) / gulp+webpack」<br>現在はVue.jsを使用。"}],historys:[{id:1,title:"1993.11",detail:"和歌山県にて生まれる。"},{id:2,title:"2012.4",detail:"近畿大学経済学部経済学科に入学する。"},{id:3,title:"2016.3",detail:"上記大学を卒業する。"},{id:4,title:"2016.4",detail:"デジタルハリウッド大阪校に入学する。"},{id:5,title:"2017.3",detail:"上記を卒業。<br>デジタルフロンティア2017 インスタレーション部門ベストプランニング賞を受賞。"},{id:6,title:"2017.7",detail:"上京<br>株式会社イメージソースでWebフロントエンジニアとして働き始める。"},{id:7,title:"2018.4",detail:"インスタレーション案件の開発に携わるようになる。"},{id:8,title:"2018.11",detail:"自社展示イベントProtoTypesにて「Effects Simulation」を出展。<br>会社の顔に泥を塗る。"}],hobbys:[{id:1,title:"写真",detail:"Sony α7とRICOH GRを使用。<br>ストリートスナップが好き。ボーナスをレンズに変える。"},{id:2,title:"読書",detail:"平日の朝夜、休日の過ごし方。<br>村上春樹と太宰治が好き。"},{id:3,title:"深夜ラジオ",detail:"主にオールナイトニッポン。<br>オードリーとCreepy Nutsが毎週の楽しみ。"},{id:4,title:"アイドル",detail:"ハロー!プロジェクトと日向坂46に夢中。<br>疲れた時は°C-ute、楽しい時はアンジュルムを嗜む。<br>推しは和田桜子（こぶしファクトリー）と齊藤京子（日向坂46）。"},{id:5,title:"純喫茶",detail:"クリームソーダを求めて。本を読みながらゆったりする時間が至福。<br>阿佐ヶ谷のgionと吉祥寺のゆりあぺむぺるが特にお気に入り。"}]}},mounted:function(){v.state.currentPage="Profile"}},Z=X,tt=(i("02f3"),Object(o["a"])(Z,F,Q,!1,null,"5a5e328f",null)),et=tt.exports,it=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Link")])])}],nt={},at=Object(o["a"])(nt,it,st,!1,null,null,null),lt=at.exports;s["a"].use(d["a"]);var rt=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:j},{path:"/work",name:"work",component:z},{path:"/profile",name:"profile",component:et},{path:"/link",name:"link",component:lt}]});s["a"].config.productionTip=!1,new s["a"]({router:rt,store:v,render:function(t){return t(u)}}).$mount("#app")},"5b3e":function(t,e,i){"use strict";var s=i("19ee"),n=i.n(s);n.a},"5c0b":function(t,e,i){"use strict";var s=i("e332"),n=i.n(s);n.a},"610e":function(t,e,i){"use strict";var s=i("b606"),n=i.n(s);n.a},"76e2":function(t,e,i){},b606:function(t,e,i){},b976:function(t,e,i){},e332:function(t,e,i){},ef49:function(t,e,i){"use strict";var s=i("b976"),n=i.n(s);n.a}});
//# sourceMappingURL=app.e23371dd.js.map