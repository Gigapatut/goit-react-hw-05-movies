"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var c=a(439),n=a(791),r=a(689),s=a(243),i="Reviews_Item__+uUiw",o="Reviews_title__t265C",u="Reviews_text__EqLvx",l=a(184);var h=function(){var e=(0,r.UO)().movieid,t=(0,n.useState)([]),a=(0,c.Z)(t,2),h=a[0],d=a[1];return(0,n.useEffect)((function(){var t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("af4a5cbddac880a4b4c654ac364f51a9"),params:{language:"en-US",page:"1"},headers:{accept:"application/json"}};s.Z.request(t).then((function(e){d(e.data.results)})).catch((function(e){console.error(e)}))}),[e]),0===h.length?(0,l.jsx)("h3",{children:"No Reviews."}):(0,l.jsx)("ul",{children:null===h||void 0===h?void 0:h.map((function(e){return(0,l.jsxs)("li",{className:i,children:[(0,l.jsxs)("h4",{className:o,children:["Author:",e.author]}),(0,l.jsx)("p",{className:u,children:e.content})]},e.id)}))})}}}]);
//# sourceMappingURL=168.e17e36cc.chunk.js.map