(this["webpackJsonpmine-sweeper-react"]=this["webpackJsonpmine-sweeper-react"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),i=t.n(a),c=t(6),o=t.n(c),u=t(1),s=t(11),f=t.n(s),l=t(4),b=t(3),d=function(n){var e=n.bombs;return Object(r.jsx)(b.b,{value:e,minLength:3})},j=i.a.memo(d),m=function(n){var e=n.passed;return Object(r.jsx)(b.b,{value:e,minLength:3})},h=i.a.memo(m),v=function(n){var e=n.onClick;return Object(r.jsx)(b.a,{square:!0,onClick:e,size:"lg",children:Object(r.jsx)("span",{role:"img","aria-label":"game-button",children:"\ud83d\ude0e"})})},g=i.a.memo(v),O=function(n){return Math.floor(Math.random()*n)},x=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=Math.max(e.x-t,0),a=Math.min(e.x+t,n.length-1),i=Math.max(e.y-t,0),c=Math.min(e.y+t,n[0].length-1);return[r,a,i,c]},p=function(n,e){for(var t=x(n,e),r=Object(l.a)(t,4),a=r[0],i=r[1],c=r[2],o=r[3],u=0,s=a;s<i+1;s++)for(var f=c;f<o+1;f++)u+=+n[s][f].hasMine;return u},y=function n(e,t){var r=e[t.x][t.y];if(r.hasMine)return!0;if(r.isOpened||r.isQuestioned||r.hasFlag)return!1;if(r.isOpened=!0,0===r.bombsAround)for(var a=x(e,t),i=Object(l.a)(a,4),c=i[0],o=i[1],u=i[2],s=i[3],f=c;f<o+1;f++)for(var b=u;b<s+1;b++)n(e,{x:f,y:b});return!1},w=t(5);function M(){var n=Object(w.a)(["\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  min-height: 36px;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: lightgrey;\n  color: ",";\n  &:before {\n    border: ",";\n  }\n  & > * {\n    position: relative;\n  }\n  &:active:not(:disabled) {\n    padding-top: 0;\n    & > * {\n      top: 2px;\n    }\n  }\n"]);return M=function(){return n},n}function k(){var n=Object(w.a)(["\n  padding: 0;\n"]);return k=function(){return n},n}var F={0:"lightgrey",1:"blue",2:"green",3:"red",4:"purple",5:"maroon",6:"turquoise",7:"black",8:"grey"},C=u.d.div(k()),A=Object(u.d)(b.a)(M(),(function(n){var e=n.number;return F[e]}),(function(n){return n.active?"none":null})),S=function(n,e){var t=n.onGameOver,a=n.onFlagged,c=i.a.useState(!1),o=Object(l.a)(c,2),u=(o[0],o[1]);return Object(r.jsx)(C,{onClick:function(n){var r=n.target;if(r){var a=r.dataset,i=a.x,c=a.y;y(e.current,{x:Number(i),y:Number(c)})&&(e.current.forEach((function(n){n.forEach((function(n){n.isOpened=!0,n.hasFlag=!1,n.isQuestioned=!1}))})),t(u)),u((function(n){return!n}))}},onContextMenu:function(n){if(n.preventDefault(),n.target){var t=n.target.dataset,r=t.x,i=t.y;if(r&&i){var c=function(n,e){var t=n[e.x][e.y];switch(!0){case t.isOpened:return 0;case t.hasFlag:return t.hasFlag=!1,t.isQuestioned=!0,-1;case t.isQuestioned:return t.isQuestioned=!1,0;default:return t.hasFlag=!0,1}}(e.current,{x:Number(r),y:Number(i)});a(c),u((function(n){return!n}))}}},children:e.current.map((function(n,e){return Object(r.jsx)("div",{children:n.map((function(n,t){return Object(r.jsx)(A,{"data-x":e,"data-y":t,sqaure:!0,number:n.bombsAround,active:n.isOpened,size:"md",children:Object(r.jsx)("span",{children:(a=n,a.isOpened&&a.hasMine?"\ud83d\udca3":a.hasFlag?"\ud83c\udfc1":a.isQuestioned?"\u2753":a.isOpened&&a.bombsAround?String(a.bombsAround):"\u200f\u200f\u200e \u200e")})},"".concat(e,"-").concat(t));var a}))},e)}))})},Q=i.a.memo(i.a.forwardRef(S));function N(){var n=Object(w.a)(["\n  margin: 8px;\n  margin-top: 0;\n"]);return N=function(){return n},n}function _(){var n=Object(w.a)(["\n  padding: 8px;\n  margin: 8px;\n"]);return _=function(){return n},n}function I(){var n=Object(w.a)(["\n  display: grid;\n"]);return I=function(){return n},n}function E(){var n=Object(w.a)(["\n  min-width: max-content;\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n"]);return E=function(){return n},n}function L(){var n=Object(w.a)(["\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-evenly;\n  & > * {\n    margin-right: 12px;\n  }\n"]);return L=function(){return n},n}var q=u.d.div(L()),z=Object(u.d)(b.d)(E()),B=Object(u.d)(b.c)(I()),D=Object(u.d)(b.c)(_()),G=Object(u.d)(b.c)(N());var J=function(n){var e=n.width,t=n.height,a=n.bombs,c=function(){var n=i.a.useState(0),e=Object(l.a)(n,2),t=e[0],r=e[1],a=i.a.useState(),c=Object(l.a)(a,2),o=c[0],u=c[1];i.a.useEffect((function(){var n=setInterval((function(){r((function(n){return n+1}))}),1e3);return u(n),function(){return clearInterval(n)}}),[r]);var s=i.a.useCallback((function(){clearInterval(o),u(void 0)}),[o,u]);return[t,r,s]}(),o=Object(l.a)(c,3),u=o[0],s=o[1],f=o[2],d=i.a.useState(a),m=Object(l.a)(d,2),v=m[0],x=m[1],y=i.a.useState(0),w=Object(l.a)(y,2),M=w[0],k=w[1],F=i.a.useRef(function(n,e,t){for(var r=Array(n).fill(null).map((function(){return Array(e).fill(null).map((function(){return{isOpened:!1,isQuestioned:!1,hasFlag:!1,hasMine:!1,bombsAround:0}}))})),a=t;a;){var i=O(n),c=O(e),o=r[i][c];o.hasMine||(o.hasMine=!0,a--)}for(var u=0;u<n;u++)for(var s=0;s<e;s++)r[u][s].hasMine||(r[u][s].bombsAround=p(r,{x:u,y:s}));return r}(e,t,a)),C=i.a.useCallback((function(){s(0),x(a)}),[s,x,a]),A=i.a.useCallback((function(){console.log("game over!"),f()}),[f]),S=i.a.useCallback((function(n){k((function(e){return e+n}))}),[k]);return Object(r.jsxs)(z,{children:[Object(r.jsx)(b.e,{className:"window-header",children:Object(r.jsx)("span",{children:"minesweeper.exe"})}),Object(r.jsxs)(B,{variant:"outside",children:[Object(r.jsx)(D,{variant:"well",children:Object(r.jsxs)(q,{children:[Object(r.jsx)(j,{bombs:v-M}),Object(r.jsx)(g,{onClick:C}),Object(r.jsx)(h,{passed:u})]})}),Object(r.jsx)(G,{variant:"well",children:Object(r.jsx)(Q,{ref:F,onGameOver:A,onFlagged:S})})]})]})},P=i.a.memo(J),R=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(P,{width:10,height:10,bombs:10})})},T=t(15),H=t(16);function K(){var n=Object(w.a)(["\n  @font-face {\n    font-family: 'ms_sans_serif';\n    src: url('","') format('woff2');\n    font-weight: 400;\n    font-style: normal\n  }\n  @font-face {\n    font-family: 'ms_sans_serif';\n    src: url('","') format('woff2');\n    font-weight: bold;\n    font-style: normal\n  }\n  body {\n    font-family: 'ms_sans_serif';\n    background-color: teal;\n  }\n  ","\n"]);return K=function(){return n},n}var U=Object(u.b)(K(),T.a,H.a,b.f),V=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),a(n),i(n),c(n)}))};o.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[Object(r.jsx)(U,{}),Object(r.jsx)(u.a,{theme:f.a,children:Object(r.jsx)(R,{})})]}),document.getElementById("root")),V()}},[[24,1,2]]]);
//# sourceMappingURL=main.6de98092.chunk.js.map