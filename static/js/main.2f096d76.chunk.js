(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},46:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),s=n.n(i),r=n(4),a=n.n(r),j=(n(27),n(21)),o=n(7),u=n.n(o),l=n(18),b=n(2),p=n(19),d=n.n(p),h=n(20);var O=0,f=1,x=2,g=3,S=(n(46),function(e){var t,n=(t=e.database,Object.entries(t).reduce((function(e,t){var n=Object(b.a)(t,2),c=n[0],i=n[1];return i.type in e||(e[i.type]=[]),e[i.type].push(c),e[i.type].sort(),e}),{})),i=Object.entries(n).map((function(e){var t=Object(b.a)(e,2);return{label:t[0],options:t[1].map((function(e){return{label:e,value:e}}))}}));return Object(c.jsxs)("div",{className:"RecipeList",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"To buy"})}),Object(c.jsx)("main",{children:Object(c.jsx)(h.a,{isMulti:!0,name:"Recipes",defaultValue:e.selectedRecipes,options:i,className:"basic-multi-select",classNamePrefix:"select",onChange:function(t){return e.setSelectedRecipes(t)}})}),Object(c.jsx)("footer",{children:Object(c.jsx)("button",{onClick:function(){return e.setAppState(x)},children:"Next"})})]})}),m=(n(66),function(e){return Object(c.jsxs)("div",{className:"ShoppingList PreliminaryShoppingList",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Preliminary Shopping List"})}),Object(c.jsx)("main",{children:Object.entries(e.shoppingList).map((function(t,n){var i=Object(b.a)(t,2),s=i[0],r=i[1];return Object(c.jsx)("div",{className:r?"ShoppingListElementChecked":"ShoppingListElement",onClick:function(){return e.toggleIngredient(s)},children:s})}))}),Object(c.jsxs)("footer",{children:[Object(c.jsx)("button",{onClick:function(){return e.setAppState(f)},children:"Back"}),Object(c.jsx)("button",{onClick:function(){return e.setAppState(g)},children:"Next"})]})]})}),v=function(e){var t=Object(i.useState)(!1),n=Object(b.a)(t,2),s=n[0],r=n[1];return Object(c.jsx)("div",{className:s?"ShoppingListElementChecked":"ShoppingListElement",onClick:function(){return r(!s)},children:e.ingredient})},k=function(e){return Object(c.jsxs)("div",{className:"ShoppingList",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Shopping List"})}),Object(c.jsx)("main",{children:Object.entries(e.shoppingList).map((function(e,t){var n=Object(b.a)(e,2),i=n[0];return n[1]?null:Object(c.jsx)(v,{ingredient:i},i)}))}),Object(c.jsx)("footer",{children:Object(c.jsx)("button",{onClick:function(){return e.setAppState(x)},children:"Back"})})]})},L=(n(67),function(e){var t=Object(i.useState)(""),n=Object(b.a)(t,2),s=n[0],r=n[1],a=Object(i.useState)(""),o=Object(b.a)(a,2),p=o[0],h=o[1],v=Object(i.useState)({}),L=Object(b.a)(v,2),C=L[0],N=L[1],y=Object(i.useState)([]),A=Object(b.a)(y,2),R=A[0],w=A[1],B=Object(i.useState)({}),E=Object(b.a)(B,2),P=E[0],F=E[1],I=Object(i.useState)(O),T=Object(b.a)(I,2),J=T[0],M=T[1],_=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h("Loading..."),t=new URL("/get_db",s),e.next=4,d.a.get(t);case 4:n=e.sent,N(n.data),M(f);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){var e=R.reduce((function(e,t){var n=C[t.value].shopping_list;return n.length>0&&(n=n.flat(),n=Array.from(new Set(n))),n.map((function(t){return e[t]=!1,!1})),e}),{});console.log(e),F(e)}),[R]);var D=null;switch(J){case O:D=Object(c.jsxs)("div",{className:"SetBackend",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Backend Host"})}),Object(c.jsxs)("main",{children:[Object(c.jsx)("input",{onChange:function(e){return r(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){return _()},children:"Go"})]}),Object(c.jsx)("footer",{children:p})]});break;case f:D=Object(c.jsx)(S,{database:C,selectedRecipes:R,setSelectedRecipes:w,setAppState:M});break;case x:D=Object(c.jsx)(m,{shoppingList:P,setShoppingList:F,setAppState:M,toggleIngredient:function(e){if(e in P){var t=Object(j.a)({},P);t[e]=!P.ingredient,F(t)}}});break;case g:D=Object(c.jsx)(k,{shoppingList:P,setAppState:M});break;default:D=Object(c.jsx)(S,{selectedRecipes:R,setSelectedRecipes:w,setAppState:M})}return Object(c.jsx)("div",{className:"App",children:D})}),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),C()}},[[68,1,2]]]);
//# sourceMappingURL=main.2f096d76.chunk.js.map