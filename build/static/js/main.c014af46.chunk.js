(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(19),l=t.n(c),o=t(14),u=t(15),i=t(18),m=t(17),s=t(22),b=t(23);function d(){var e=Object(s.a)(["\n  /*body {\n    color: ",";\n  }*/\n  body, html, .App{\n    font-family: 'roboto', 'arial';\n    min-height: 100vh;\n  }\n\n  * {\n    box-sizing: border-box;\n    margin:0;\n    padding: 0;\n  }\n\n\n"]);return d=function(){return e},e}var v=Object(b.a)(d(),function(e){return e.whiteColor?"white":"black"}),p=t(38),f=t(8);t(91);function g(){var e=Object(s.a)([""]);return g=function(){return e},e}var E=b.b.div(g()),h=Object(a.createContext)({token:null,setToken:function(){}}),j=t(121),O=t(123),k=t(120),y=t(117),w=t(118),C=t(75),x=t.n(C);function S(){var e=Object(a.useContext)(h).setToken;var n=Object(f.g)();return r.a.createElement(E,null,r.a.createElement(j.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(j.a.Brand,{href:"#home"},"Agenda \xc1gil"),r.a.createElement(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(O.a,{className:"mr-auto"},r.a.createElement(O.a.Link,{href:"/"},r.a.createElement(y.a,null),"\xa0","Home"),r.a.createElement(O.a.Link,{href:"/agenda"},r.a.createElement(w.a,null),"\xa0","Agenda"),r.a.createElement(k.a.Divider,null)),r.a.createElement(O.a,null,r.a.createElement(O.a.Link,{onClick:function(){return e(null),n.push("/")}},r.a.createElement(x.a,null),"\xa0","Sair")))))}var N=function(e){Object(i.a)(t,e);var n=Object(m.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null))}}]),t}(r.a.Component),A=t(76),I=t(77),L=t(78);t(99),t(100);function T(){var e=Object(s.a)(["\n  height: 100%;\n  width: 100%;\n\n  @media screen and (max-width: 600px) {\n  }\n"]);return T=function(){return e},e}var D=b.b.div(T()),J=function(e){Object(i.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).handleDateClick=function(e){alert(e.event.start)},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(A.a,{className:"calendar",defaultView:"dayGridMonth",events:[{title:"event 1",date:"2020-05-01 12:30"},{title:"event 2",date:"2020-05-02"}],eventClick:this.handleDateClick,plugins:[I.a,L.a]}))}}]),t}(r.a.Component),F=function(e){Object(i.a)(t,e);var n=Object(m.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(J,null))}}]),t}(r.a.Component),G=t(64),z=t(36),B=t(124),P=t(119),U=t(74),H=t(122);function M(){var e=Object(s.a)(["\n  display: flex;\n  min-height: 100vh;\n  min-width: 100vw;\n  justify-content: center;\n  align-items: center;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n\n  .form-login {\n    background: rgba(255, 255, 255, 0.8);\n    padding: 30px;\n    border-radius: 10px;\n  }\n\n  .btns {\n    display: flex;\n    justify-content: space-between;\n  }\n"]);return M=function(){return e},e}var V=b.b.div(M(),function(e){return e.img}),q=t(79),K=t.n(q);function Q(){function e(){return{user:"",password:""}}var n=Object(a.useState)(e),t=Object(z.a)(n,2),c=t[0],l=t[1];function o(e){var n=e.target,t=n.value,a=n.name;l(Object(G.a)(Object(G.a)({},c),{},{[a]:t}))}var u=Object(a.useContext)(h).setToken,i=Object(f.g)(),m=r.a.createElement(B.a,{id:"popover-basic"},r.a.createElement(B.a.Title,{as:"h3"},"Algum Problema?"),r.a.createElement(B.a.Content,null,"Entre em contato por telefone ",r.a.createElement("strong",null,"(14)99719-0307")));return r.a.createElement(V,{img:K.a},r.a.createElement(P.a,{className:"form-login",onSubmit:function(n){n.preventDefault();var t=function(e){var n=e.user,t=e.password;return"admin"===n&&"admin"===t?{token:"1234"}:{error:"Usu\xe1rio ou senha inv\xe1lida!"}}(c).token;if(t)return u(t),i.push("/");l(e)}},r.a.createElement(P.a.Group,{controlId:"usuario"},r.a.createElement(P.a.Label,null,"Usu\xe1rio"),r.a.createElement(P.a.Control,{type:"user",name:"user",onChange:o,placeholder:"Digite seu usu\xe1rio",value:c.user})),r.a.createElement(P.a.Group,{controlId:"senha"},r.a.createElement(P.a.Label,null,"Senha"),r.a.createElement(P.a.Control,{type:"password",name:"password",onChange:o,placeholder:"Senha",value:c.password})),r.a.createElement("div",{className:"btns"},r.a.createElement(U.a,{variant:"success",type:"submit"},"Logar"),r.a.createElement(H.a,{trigger:"click",placement:"right",overlay:m},r.a.createElement(U.a,{variant:"outline-primary"},"Ajuda")))))}var R=function(e){Object(i.a)(t,e);var n=Object(m.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null))}}]),t}(r.a.Component),W=t(57),X=t.n(W),Y={};try{if(!window.localStorage)throw Error("no local storage");Y.set=function(e,n){return localStorage.setItem(e,JSON.stringify(n))},Y.get=function(e){var n=localStorage.getItem(e);try{return JSON.parse(n)}catch(t){return null}},Y.remove=function(e){return localStorage.removeItem(e)}}catch(re){Y.set=X.a.set,Y.get=X.a.getJSON,Y.remove=X.a.remove}var Z=Y;var $=function(e){var n=e.children,t=function(e){var n=Object(a.useState)(function(){return Z.get(e)}),t=Object(z.a)(n,2),r=t[0],c=t[1];return[r,Object(a.useCallback)(function(n){Z.set(e,n),c(n)},[e]),Object(a.useCallback)(function(){Z.remove(e),c(void 0)},[e])]}("token"),c=Object(z.a)(t,2),l=c[0],o=c[1];return r.a.createElement(h.Provider,{value:{token:l,setToken:o}},n)},_=t(80),ee=function(e){var n=e.component,t=Object(_.a)(e,["component"]),c=Object(a.useContext)(h).token;return r.a.createElement(f.b,Object.assign({},t,{render:function(){return c?r.a.createElement(n,t):r.a.createElement(f.a,{to:"/login"})}}))};function ne(){return r.a.createElement(p.a,null,r.a.createElement($,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{component:R,exact:!0,path:"/login"}),r.a.createElement(ee,{component:N,exact:!0,path:"/"}),r.a.createElement(ee,{component:F,exact:!0,path:"/agenda"}))))}var te=function(e){Object(i.a)(t,e);var n=Object(m.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"App"},r.a.createElement(ne,null)))}}]),t}(r.a.Component),ae=document.getElementById("root");l.a.render(r.a.createElement(te,null),ae)},79:function(e,n,t){e.exports=t.p+"static/media/background1.42d4db52.jpg"},84:function(e,n,t){e.exports=t(101)}},[[84,1,2]]]);
//# sourceMappingURL=main.c014af46.chunk.js.map