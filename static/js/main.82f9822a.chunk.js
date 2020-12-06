(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var c=n(7),i=n(1),a=n.n(i),o=n(14),r=n.n(o),s=(n(119),n(107)),d=n(181),l=(n(120),n(183)),b=n(182),u=n(178),j=n(161),p=n(180),O=n(99),m=n.n(O),x=n(22),h=a.a.memo((function(e){var t=Object(x.c)((function(e){return e.cart.books})).some((function(t){return t.id===e.book.id}));return Object(c.jsxs)(u.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",style:{minHeight:"550px"},children:[Object(c.jsx)(u.a,{item:!0,children:Object(c.jsx)("img",{src:e.book.image,alt:"",className:m.a.image})}),Object(c.jsxs)(u.a,{item:!0,children:[Object(c.jsx)("p",{children:e.book.title}),Object(c.jsx)("p",{children:e.book.description}),Object(c.jsx)("p",{children:e.book.author}),Object(c.jsx)("p",{children:"".concat(e.book.price," $")})]}),Object(c.jsx)(u.a,{item:!0,children:Object(c.jsx)(l.a,{variant:"contained",disabled:t,color:"primary",onClick:function(){e.addToCart(e.book)},children:"add cart"})})]})})),f=n(38),k=n(48),g=Object(k.b)({name:"cart",initialState:{books:[],totalPrice:0},reducers:{addToCart:function(e,t){e.books.every((function(e){return e.id!==t.payload.id}))&&e.books.push(Object(f.a)(Object(f.a)({},t.payload),{},{count:1}))},incrQuantityAC:function(e,t){var n=e.books.findIndex((function(e){return e.id===t.payload.productId}));e.books[n].count+=1},decrQuantityAC:function(e,t){var n=e.books.findIndex((function(e){return e.id===t.payload.productId}));e.books[n].count-=1,0===e.books[n].count&&e.books.splice(n,1)},calculateCost:function(e,t){var n=e.books.reduce((function(e,t){return e+t.price*t.count}),0);n=Math.floor(100*n)/100,e.totalPrice=n}}}),y=g.reducer,v=g.actions,C=v.addToCart,I=v.incrQuantityAC,P=v.decrQuantityAC,S=v.calculateCost,_=a.a.memo((function(){var e=Object(x.c)((function(e){return e.catalog.book})),t=Object(x.b)(),n=Object(i.useCallback)((function(e){t(C(e)),t(S())}),[t]),a=e.map((function(e){return Object(c.jsx)(u.a,{item:!0,style:{margin:"10px"},md:3,children:Object(c.jsx)(j.a,{elevation:3,style:{padding:"10px",minHeight:"500px"},children:Object(c.jsx)(h,{book:e,addToCart:n})})},e.id)}));return Object(c.jsx)(p.a,{children:Object(c.jsx)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,children:a})})})),F=a.a.memo((function(e){return Object(c.jsxs)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",alignContent:"center",children:[Object(c.jsx)(u.a,{container:!0,item:!0,xs:4,alignContent:"center",justify:"center",children:Object(c.jsx)("img",{src:e.book.image,alt:"",style:{maxWidth:"100px"}})}),Object(c.jsxs)(u.a,{container:!0,item:!0,xs:4,direction:"column",justify:"space-evenly",children:[Object(c.jsxs)("p",{children:["Title : ",e.book.title]}),Object(c.jsxs)("p",{children:["Author: ",e.book.author]}),Object(c.jsxs)("p",{children:["Price: ",e.book.price," $"]})]}),Object(c.jsxs)(u.a,{container:!0,justify:"space-evenly",alignItems:"center",direction:"row",item:!0,xs:4,children:[Object(c.jsx)(l.a,{variant:"contained",color:"primary",size:"small",onClick:e.decrQuantity,children:"-"}),Object(c.jsx)("div",{children:e.book.count}),Object(c.jsx)(l.a,{variant:"contained",color:"primary",size:"small",onClick:e.incrQuantity,children:"+"})]})]})})),w=n(106),T=n(59),A=n.n(T),Q=a.a.memo((function(){var e=Object(w.a)({initialValues:{name:"",surname:"",address:"",phone:""},onSubmit:function(e){}});return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)(A.a,Object(f.a)({id:"name",type:"text",label:"Filled",variant:"outlined",fullWidth:!0,margin:"dense"},e.getFieldProps("name"))),Object(c.jsx)(A.a,Object(f.a)({id:"surname",label:"Filled",variant:"outlined",fullWidth:!0,margin:"dense"},e.getFieldProps("surname"))),Object(c.jsx)(A.a,Object(f.a)({id:"address",label:"Filled",variant:"outlined",fullWidth:!0,margin:"dense"},e.getFieldProps("address"))),Object(c.jsx)(A.a,Object(f.a)({id:"phone",label:"Filled",variant:"outlined",fullWidth:!0,margin:"dense"},e.getFieldProps("phone"))),Object(c.jsx)(l.a,{variant:"outlined",color:"primary",type:"submit",children:"ORDER"})]})})),E=a.a.memo((function(){var e=Object(x.c)((function(e){return e.cart.books})),t=Object(x.b)(),n=Object(i.useCallback)((function(e){t(I({productId:e})),t(S())}),[t]),a=Object(i.useCallback)((function(e){t(P({productId:e})),t(S())}),[t]),o=e.map((function(e){return Object(c.jsx)(j.a,{style:{marginBottom:"10px"},children:Object(c.jsx)(F,{book:e,incrQuantity:function(){return n(e.id)},decrQuantity:function(){return a(e.id)}})},e.id)}));return Object(c.jsx)(p.a,{children:Object(c.jsxs)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:3,style:{marginTop:"20px"},children:[Object(c.jsx)(u.a,{item:!0,xs:8,children:o}),Object(c.jsx)(u.a,{item:!0,xs:2,children:Object(c.jsx)(j.a,{elevation:3,style:{padding:"10px"},children:Object(c.jsx)(Q,{})})})]})})})),L=n(84);L.a.initializeApp({apiKey:"AIzaSyBf1G7QLO4zdA5W1PVZ_RP1xx8jLyNq2uM",authDomain:"bookshop-firebase.firebaseapp.com",databaseURL:"https://bookshop-firebase-default-rtdb.firebaseio.com",projectId:"bookshop-firebase",storageBucket:"bookshop-firebase.appspot.com",messagingSenderId:"868504473049",appId:"1:868504473049:web:b7eaae96a5ebc350f8ddc8"});var N=L.a,W=Object(k.b)({name:"catalog",initialState:{book:[]},reducers:{setProduct:function(e,t){e.book=t.payload}}}),z=W.reducer,B=W.actions.setProduct;var D=function(){var e=Object(x.b)();Object(i.useEffect)((function(){N.database().ref("book").on("value",(function(t){var n=t.val();e(B(n))}))}),[]);var t=Object(i.useState)(!0),n=Object(s.a)(t,2),a=n[0],o=n[1],r=Object(x.c)((function(e){return e.cart.totalPrice})),u=function(){o(!a)},j=a?Object(c.jsx)(l.a,{variant:"outlined",color:"secondary",onClick:u,children:"Cart"}):Object(c.jsx)(l.a,{variant:"outlined",color:"secondary",onClick:u,children:"Shop"});return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d.a,{position:"static",children:Object(c.jsxs)(b.a,{children:[j,r?Object(c.jsxs)("div",{children:[r," $"]}):null]})}),a?Object(c.jsx)(_,{}):Object(c.jsx)(E,{})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))},M=n(27),G=n(58),V=Object(M.c)({catalog:z,cart:y}),$=Object(k.a)({reducer:V,middleware:function(e){return e().prepend(G.a)}});window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.d;r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x.a,{store:$,children:Object(c.jsx)(D,{})})}),document.getElementById("root")),R()},99:function(e,t,n){e.exports={image:"Product_image__18uoN",description:"Product_description__rtGmG"}}},[[154,1,2]]]);
//# sourceMappingURL=main.82f9822a.chunk.js.map