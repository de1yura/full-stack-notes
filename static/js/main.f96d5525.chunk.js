(this["webpackJsonpanimelist-frontend"]=this["webpackJsonpanimelist-frontend"]||[]).push([[0],{37:function(e,t,n){e.exports={cards:"Form_cards__3OWVk",popup:"Form_popup__Ryoeu",modal:"Form_modal__r68Ef",popupContent:"Form_popupContent__HxYoh"}},84:function(e,t,n){},85:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),c=n.n(r),s=(n(84),n(85),n(45)),o=n(20),l=n(52),d=n(3),j=n(131),u=n(13),b=n(148),h=n(134),p=n(136),O=n(137),m=n(140),x=n(49),f=n(139),g=n(138),v=n(64),y=n.n(v),w=n(65),S=n.n(w),C=n(66),L=n.n(C),N=n(141),A=n(142),_=n(143),k=n(67),B=n.n(k),F=n(68),E=n.n(F),T=n(5),P=240,W=Object(j.a)((function(e){return{root:{display:"flex",marginBottom:100},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(P,"px)"),marginLeft:P,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:P,flexShrink:0},drawerPaper:{width:P},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function D(){var e=W(),t=Object(u.a)(),n=i.a.useState(!1),a=Object(o.a)(n,2),r=a[0],c=a[1];return Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsx)(h.a,{}),Object(T.jsx)(p.a,{position:"fixed",className:Object(d.a)(e.appBar,Object(s.a)({},e.appBarShift,r)),children:Object(T.jsxs)(O.a,{children:[Object(T.jsx)(g.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(d.a)(e.menuButton,r&&e.hide),children:Object(T.jsx)(y.a,{})}),Object(T.jsx)(x.a,{variant:"h6",noWrap:!0,children:"Fullstack Anime List"})]})}),Object(T.jsxs)(b.a,{className:e.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:e.drawerPaper},children:[Object(T.jsx)("div",{className:e.drawerHeader,children:Object(T.jsx)(g.a,{onClick:function(){c(!1)},children:"ltr"===t.direction?Object(T.jsx)(S.a,{}):Object(T.jsx)(L.a,{})})}),Object(T.jsx)(f.a,{}),Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(N.a,{button:!0,children:[Object(T.jsxs)(A.a,{children:[" ",Object(T.jsx)(B.a,{})]}),Object(T.jsx)(_.a,{primary:"Anime List"})]}),Object(T.jsxs)(N.a,{button:!0,children:[Object(T.jsxs)(A.a,{children:[" ",Object(T.jsx)(E.a,{})]}),Object(T.jsx)(_.a,{primary:"Journal"})]})]})]})]})}var J=n(146),H=n(93),I=n(144),R=n(145),V=n(70),G=n.n(V),M=n(69),U=n.n(M),Y=n(53),q=n.n(Y),z=n(37),K=n.n(z),Q=Object(j.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function X(){var e={padding:"50px 20px",width:"50vw",margin:"20px auto"},t=Q(),n=Object(a.useState)(""),i=Object(o.a)(n,2),r=i[0],c=i[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),d=l[0],j=l[1],u=Object(a.useState)([]),b=Object(o.a)(u,2),h=b[0],p=b[1],O=Object(a.useState)(!1),m=Object(o.a)(O,2),x=m[0],f=m[1],v=Object(a.useState)(""),y=Object(o.a)(v,2),w=y[0],S=y[1],C=Object(a.useState)(""),L=Object(o.a)(C,2),N=L[0],A=L[1],_=Object(a.useState)(""),k=Object(o.a)(_,2),B=k[0],F=k[1];Object(a.useEffect)((function(){fetch("http://localhost:8080/animeList/allAnimeList").then((function(e){return e.json()})).then((function(e){p(e)}))}),[h]);var E=function(){f(!x)},P=h.map((function(e){return Object(T.jsxs)(H.a,{elevation:6,className:K.a.cards,style:{margin:"10px",padding:"15px",textAlign:"left"},children:["Anime: ",e.name," ",Object(T.jsx)("br",{}),"Description: ",e.description,Object(T.jsx)(g.a,{onClick:function(t){return function(e){fetch("http://localhost:8080/animeList/delete/".concat(e),{method:"DELETE"});var t=h.filter((function(t){return t.id!==e}));p(t)}(e.id)},"aria-label":"delete",className:t.margin,children:Object(T.jsx)(U.a,{})}),Object(T.jsx)(g.a,{onClick:function(){return t=e.id,F(t),void E();var t},"aria-label":"edit",className:t.margin,children:Object(T.jsx)(q.a,{})})]},e.id)}));return Object(T.jsxs)(I.a,{style:{display:"flex"},className:K.a.container,children:[Object(T.jsxs)(H.a,{elevation:3,style:{padding:"50px 20px",width:"30vw",height:"70vh",margin:"20px auto"},children:[Object(T.jsx)("h2",{style:{color:"blue"},children:"Add Anime"}),Object(T.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:[Object(T.jsx)(J.a,{id:"outlined-basic",label:"Anime name",variant:"outlined",fullWidth:!0,value:r,onChange:function(e){return c(e.target.value)}}),Object(T.jsx)(J.a,{id:"outlined-basic",label:"Anime description",variant:"outlined",fullWidth:!0,value:d,onChange:function(e){return j(e.target.value)}}),Object(T.jsx)(R.a,{color:"primary","aria-label":"add",onClick:function(e){e.preventDefault();var t={name:r,description:d};console.log(t),fetch("http://localhost:8080/animeList/addList",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("worked")})).then(j(""),c("")).then(window.location.reload())},children:Object(T.jsx)(G.a,{})})]})]}),Object(T.jsxs)(H.a,{elevation:3,style:e,children:[Object(T.jsx)("h2",{style:{color:"blue"},children:"Anime List"}),P]}),x&&Object(T.jsx)("form",{onSubmit:function(e){return function(e){console.log(B),e.preventDefault(),E();var t={name:w,description:N};fetch("http://localhost:8080/animeList/updateAnimeList/".concat(B),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),A(""),S("")}(e)},className:K.a.modal,children:Object(T.jsx)("div",{className:K.a.popup,children:Object(T.jsx)("div",{className:K.a.popupContent,children:Object(T.jsxs)(H.a,{style:e,children:[Object(T.jsx)("h2",{children:"Edit"}),Object(T.jsx)(J.a,{id:"outlined-basic",label:"Anime name",variant:"outlined",fullWidth:!0,value:w,onChange:function(e){return S(e.target.value)}}),Object(T.jsx)(J.a,{id:"outlined-basic",label:"Anime description",variant:"outlined",fullWidth:!0,value:N,onChange:function(e){return A(e.target.value)}}),Object(T.jsx)(g.a,{type:"submit","aria-label":"edit",className:t.margin,children:Object(T.jsx)(q.a,{})})]})})})})]})}var Z=function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)(D,{}),Object(T.jsx)(X,{})]})};var $=function(){return Object(T.jsx)(Z,{})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)($,{})}),document.getElementById("root")),ee()}},[[91,1,2]]]);
//# sourceMappingURL=main.f96d5525.chunk.js.map