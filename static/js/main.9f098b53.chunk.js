(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"App.lose":"\u0422\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b","App.minesLeft":"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043c\u0438\u043d","App.title":"\u0421\u0430\u043f\u0435\u0440","App.tryAgain":"\u0415\u0449\u0451 \u0440\u0430\u0437","App.win":"\u0422\u044b \u0432\u044b\u0438\u0433\u0440\u0430\u043b"}')},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),a=n(22),c=n.n(a),s=n(10),u=n(12),o=n(14),f=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)([]),c=Object(o.a)(a,2),s=c[0],f=c[1],d=Object(i.useState)(10),l=Object(o.a)(d,2),h=l[0],p=l[1],m=function(){for(var e=[],t=function(){var t={x:Math.floor(10*Math.random()),y:Math.floor(10*Math.random())};e.some((function(e){return e.x===t.x&&e.y===t.y}))||e.push(t)};e.length<10;)t();return e}(),j=function(){for(var e=[],t=function(t){for(var n=[],i=function(e){var i={x:t,y:e,key:"".concat(t).concat(e),status:"hidden",mine:m.some((function(n){return n.x===t&&n.y===e})),content:""};n.push(i)},r=0;r<10;r+=1)i(r);e.push(n)},n=0;n<10;n+=1)t(n);f(e.flat()),r(!1)},b=function(e,t){var n=s.findIndex((function(t){return t.key===e.key}));f((function(e){var i=e.map((function(e,i){return i===n?Object(u.a)(Object(u.a)({},e),{},{status:t}):e}));return function(e){var t=e.filter((function(e){return"marked"===e.status})).length;p(10-t)}(i),i.filter((function(e){return"hidden"===e.status})).length||r("win"),i}))};return Object(i.useEffect)((function(){j()}),[]),{board:s,createBoard:j,endGame:n,handleLeftClick:function(e){var t=function(e){for(var t=e.x,n=e.y,i=e.key,r=[],a=function(e){for(var i=function(i){var a=s.find((function(r){return r.x===t+e&&r.y===n+i}));a&&r.push(a)},a=-1;a<=1;a+=1)i(a)},c=-1;c<=1;c+=1)a(c);return r.filter((function(e){return e.key!==i}))}(e).filter((function(e){return e.mine}));if(!n&&"hidden"===e.status){if(e.mine)return s.forEach((function(e){e.mine&&b(e,"mine")})),void r(!0);b(e,"number"),0===t.length||function(e,t){var n=s.findIndex((function(t){return t.key===e.key}));f((function(e){return e.map((function(e,i){return i===n?Object(u.a)(Object(u.a)({},e),{},{content:t}):e}))}))}(e,t.length.toString())}},handleRightClick:function(e,t){e.preventDefault(),n||"hidden"!==t.status&&"marked"!==t.status||("marked"===t.status?b(t,"hidden"):b(t,"marked"))},minesCount:h}},d=n(13),l=Object(d.a)({title:{id:"App.title",defaultMessage:"Minesweeper"},minesLeft:{id:"App.minesLeft",defaultMessage:"Mines left"},lose:{id:"App.lose",defaultMessage:"You lose"},win:{id:"App.win",defaultMessage:"You win"},tryAgain:{id:"App.tryAgain",defaultMessage:"Try again"}}),h=(n(41),n(5)),p=function(){var e=Object(s.a)(),t=f(),n=t.board,i=t.createBoard,r=t.endGame,a=t.handleLeftClick,c=t.handleRightClick,u=t.minesCount;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"Title",children:e.formatMessage(l.title)}),Object(h.jsx)("div",{className:"Status",children:r?Object(h.jsx)("span",{children:"win"===r?e.formatMessage(l.win):e.formatMessage(l.lose)}):Object(h.jsxs)("span",{children:[e.formatMessage(l.minesLeft),": ",u]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",onClick:i,children:e.formatMessage(l.tryAgain)})}),Object(h.jsx)("div",{className:"Board",style:{"--size":10},children:n.map((function(e){return Object(h.jsx)("div",{role:"presentation",className:e.status,onClick:function(){return a(e)},onContextMenu:function(t){return c(t,e)},children:e.content},e.key)}))})]})},m=n(17),j=n(23),b=function(e){var t=e.children,n=Object(i.useMemo)((function(){return j}),[]);return Object(h.jsx)(m.a,{locale:"ru",messages:n,children:t})},g=Object(i.memo)(b),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))};n(43);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{children:Object(h.jsx)(p,{})})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.9f098b53.chunk.js.map