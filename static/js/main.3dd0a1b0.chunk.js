(this["webpackJsonpgallery-unplash-app"]=this["webpackJsonpgallery-unplash-app"]||[]).push([[0],{34:function(e,t,n){e.exports=n.p+"static/media/cry-smile.0a17b62b.png"},35:function(e,t,n){e.exports=n(49)},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=n(20),l=n(6),u=n(11),s="FETCH/DATA/STATUS",f="FETCH/DATA/SUCCESS",p="FETCH/LOAD/MORE/DATA",d={fetchedData:{data:[],status:"idle"},nowSearch:""},m=Object(i.b)({galleryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(u.a)(Object(u.a)({},e),{},{fetchedData:Object(u.a)(Object(u.a)({},e.fetchedData),{},{data:Object(l.a)(t.payload)}),nowSearch:t.source?t.source:e.nowSearch});case p:return Object(u.a)(Object(u.a)({},e),{},{fetchedData:Object(u.a)(Object(u.a)({},e.fetchedData),{},{data:t.payload.reduce((function(t,n){return e.fetchedData.data.includes(n)||e.fetchedData.data.push(n),t}),e.fetchedData.data)})});case s:return Object(u.a)(Object(u.a)({},e),{},{fetchedData:Object(u.a)(Object(u.a)({},e.fetchedData),{},{status:t.status})});default:return e}}}),h=n(16),b=n(13),v=n(3),g=n(4),x=n(2),w=n(5),O=function(e,t){var n=window.localStorage.getItem(e);null!=n?JSON.parse(n):window.localStorage.setItem(e,JSON.stringify(t));return[function(t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]};function j(){var e=Object(g.a)(["\n    margin-left:auto;\n    .input{\n        box-shadow:",";\n        margin:0 5px;\n    }\n    .button{\n        margin:0 5px;\n    }\n"]);return j=function(){return e},e}function E(){var e=Object(g.a)(["\n    margin:0 10px;\n    color:white;\n    \n    &.active {\n        text-decoration: none;\n    }\n"]);return E=function(){return e},e}function y(){var e=Object(g.a)(["\n    width:100%;\n    background:#525050;\n    padding: 20px 0;\n    display:flex;\n    justify-content:center;\n"]);return y=function(){return e},e}var S=w.a.header(y()),k=Object(w.a)(b.b)(E()),_=w.a.form(j(),(function(e){return e.currect?"none":"0 0 5px red"})),N=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!0),i=Object(v.a)(o,2),u=i[0],s=i[1],f=O("history",[]),p=Object(v.a)(f,1)[0];return r.a.createElement(S,null,r.a.createElement(k,{to:"/",exact:!0},"Home"),r.a.createElement(k,{to:"/history",exact:!0},"History"),r.a.createElement(k,{to:"/follows",exact:!0},"Follows"),r.a.createElement(_,{onSubmit:function(e){if(n.trim()||""!==n.trim()){var t=JSON.parse(window.localStorage.getItem("history"));s(!0),p([].concat(Object(l.a)(JSON.parse(window.localStorage.getItem("history"))),[{id:t[0]?t[t.length-1].id+1:1,text:n,date:(new Date).toLocaleString()}])),alert("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")}else s(!1);e.preventDefault()},currect:u},r.a.createElement("input",{type:"text",className:"input",onChange:function(e){return c(e.target.value)},placeholder:"\u0427\u0442\u043e \u0438\u0449\u0435\u043c?"}),r.a.createElement("button",{className:"button",type:"submit"},"Save")),r.a.createElement(x.a,{to:{pathname:"/source/"+n}}))},A=n(10),J=n.n(A),D=n(15),T=function(e){return{type:f,payload:e}},V=function(e){return{type:s,status:e}},C=function(e){return{type:p,payload:e}};function z(){var e=Object(g.a)(["\ndisplay:flex;\njustify-content:center;\n"]);return z=function(){return e},e}var U=w.a.div(z()),H=function(){return r.a.createElement(U,null,r.a.createElement("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40",enableBackground:"new 0 0 40 40",xmlSpace:"preserve"},r.a.createElement("path",{opacity:"0.2",fill:"#000",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}),r.a.createElement("path",{fill:"#000",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r C22.32,8.481,24.301,9.057,26.013,10.047z"},r.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"}))))},I=n(34),R=n.n(I);function B(){var e=Object(g.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:center;\n   \n   .header{\n    color:#929292;\n    font-size:24px;\n    font-weight:bold;\n    }\n    .desc{\n        color:#929292;\n    }\n    img{\n        width:350px;\n    }\n"]);return B=function(){return e},e}var P=w.a.section(B()),F=function(e){return r.a.createElement(P,null,r.a.createElement("h1",{className:"header"},"OOPS!"),r.a.createElement("p",{className:"desc"},e.error),r.a.createElement("img",{src:R.a,alt:"oops"}))};function K(){var e=Object(g.a)(["\n        z-index:1;\n        cursor:pointer;\n        font-size:36px; \n        position:absolute;\n        top:",";\n        right:20px;\n        transition:.3s;\n        filter: contrast(100%);\n        color:",";\n        opacity:",";\n        \n"]);return K=function(){return e},e}function L(){var e=Object(g.a)(["\n    margin: 2.5px;\n    display:flex;\n    flex-direction:column;\n        \n    .wrapper{\n        overflow:hidden;\n        position:relative;\n        transition:.3s;\n        margin: 5px;\n        .picture{\n            cursor:zoom-in;\n        }\n        &:hover .picture{\n            transition:.3s;\n            filter: contrast(30%);\n        }\n        \n        &:hover .heart{\n            opacity:1;\n            transition:.3s;\n            top:10px;\n        }\n    }\n    \n\n"]);return L=function(){return e},e}function M(){var e=Object(g.a)(["\n    display:flex;\n    justify-content:center;\n"]);return M=function(){return e},e}var Q=w.a.section(M()),Y=w.a.div(L()),X=w.a.span(K(),(function(e){return e.isred?"10px":"-10px"}),(function(e){return e.isred?"red":"black"}),(function(e){return e.isred?"1":"0"})),q=function(e){var t=e.photo.map((function(t,n){return r.a.createElement("div",{className:"wrapper",key:n},r.a.createElement(X,{className:"heart",onClick:function(){return e.handlerValue(t.id,e.follows.includes(t.id))},isred:e.follows.includes(t.id)},"\u2764"),r.a.createElement(b.b,{to:"/picture/"+t.id},r.a.createElement("picture",{className:"picture"},r.a.createElement("img",{src:t.urls.small,alt:t.alt_description}))))}));return r.a.createElement(Y,null,t)},G=function(e){var t=Object(h.c)((function(e){return e.galleryReducer.fetchedData.status})),n=O("follows",[]),c=Object(v.a)(n,1)[0],o=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("follows"))})),i=Object(v.a)(o,2),u=i[0],s=i[1],f=function(t,n){if(n){var a=u.filter((function(e){return e!==t}));if(s(a),c(a),e.handlerFollows){var r=e.data.flat().filter((function(e){return e.id!==t}));e.handlerFollows(r.flat())}}else s([].concat(Object(l.a)(u),[t])),c([].concat(Object(l.a)(u),[t]))};if("loading"===t)return r.a.createElement(H,null);if("failed"===t)return r.a.createElement(F,{error:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c VPN, \u043b\u0438\u0431\u043e \u044d\u0442\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 Unsplash"});if(0===e.data[0].length)return r.a.createElement(F,{error:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"});var p=e.data.map((function(e,t){return r.a.createElement(q,{photo:e,key:t,handlerValue:f,follows:u})}));return r.a.createElement(Q,null,p)},W=function(){var e=Object(a.useState)(2),t=Object(v.a)(e,2),n=t[0],c=t[1],o=Object(h.b)(),i=Object(h.c)((function(e){return e.galleryReducer.fetchedData.data})),u=Object(h.c)((function(e){return e.galleryReducer.nowSearch})),s=function(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),n=t[0],r=t[1],c=function(){var e=document.body,t=e.parentNode,n=(e.scrollTop||t.scrollTop)/(t.scrollHeight-t.clientHeight)*100;r(n)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",c,{passive:!0}),function(){window.removeEventListener("scroll",c)}}),[]),Math.round(n)}(),f=Object(x.g)().text;Object(a.useEffect)((function(){f?function(e,t){return e(V("loading")),Object(D.a)(J.a.mark((function n(){var a,r;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.unsplash.com/search/photos/?page=1&query=".concat(t,"&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU"));case 3:return a=n.sent,n.next=6,a.json();case 6:r=n.sent,e(T(r.results)),e(V("succeeded")),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),e(V("failed"));case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))}(o,f)():function(e){return e(V("loading")),Object(D.a)(J.a.mark((function t(){var n,a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.unsplash.com/photos/?page=1&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU");case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,e(T(a)),e(V("succeeded")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e(V("failed"));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))}(o)()}),[f]),Object(a.useEffect)((function(){s>55&&(!function(e,t,n){return Object(D.a)(J.a.mark((function a(){var r,c;return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!n){a.next=7;break}return a.next=4,fetch("https://api.unsplash.com/search/photos/?page=".concat(t,"&query=").concat(n,"&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU"));case 4:r=a.sent,a.next=10;break;case 7:return a.next=9,fetch("https://api.unsplash.com/photos/?page=".concat(t,"&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU"));case 9:r=a.sent;case 10:return a.next=12,r.json();case 12:(c=a.sent).results?e(C(c.results)):e(C(c)),a.next=20;break;case 16:a.prev=16,a.t0=a.catch(0),e(V("failed")),console.log(a.t0);case 20:case"end":return a.stop()}}),a,null,[[0,16]])})))}(o,n,u)(),c(n+1))}),[o,s]);var p,d;return r.a.createElement(G,{data:(p=i,d=3,Object(l.a)(Array(d)).map((function(e,t){return p.filter((function(e,n){return n%d===t}))})))})};function Z(){var e=Object(g.a)(["\n    display:flex;\n    align-items:center;\n    border-radius:3px;\n    width:700px;\n    padding:10px;\n    background:#b7b7b7;\n    margin:10px 0;\n    \n    .info{\n        display:flex;\n        flex-direction: column;\n    }\n    .info_time{\n        font-size:12px;\n    }\n    .button{\n        cursor:pointer;\n        border:2px solid white;\n        background:transparent;\n        color:white;\n        margin-left:auto;\n        padding: 8px;\n        width:15px;\n        height:15px;\n        display:flex;\n        align-items: center;\n        justify-content: center;\n        transition:.3s;\n\n\n        &:hover{\n                border:2px solid tomato;\n            background:tomato;\n            transition:.3s;\n        }\n        \n    }\n\n"]);return Z=function(){return e},e}function $(){var e=Object(g.a)(["\n    display:flex;\n    flex-direction: column;\n    align-items:center;\n"]);return $=function(){return e},e}var ee=w.a.section($()),te=w.a.div(Z()),ne=function(){var e=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("history"))})),t=Object(v.a)(e,2),n=t[0],c=t[1];if(!n.length)return r.a.createElement(F,{error:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442\u0443"});var o=n.map((function(e,t){return r.a.createElement(te,{key:t},r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"info_name"},r.a.createElement(b.b,{to:"/source/"+e.text},e.text)),r.a.createElement("span",{className:"info_time"},"Time: ",e.date)),r.a.createElement("button",{className:"button",onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));window.localStorage.setItem("history",JSON.stringify(t)),c(t)}(e.id)}},"\u2715"))}));return r.a.createElement(ee,null,o)},ae=function(){O("follows",[]);var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=new AbortController;return Promise.all(JSON.parse(window.localStorage.getItem("follows")).map(function(){var t=Object(D.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.unsplash.com/photos/".concat(n,"/?&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU"),{signal:e.signal});case 2:return a=t.sent,t.next=5,a.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(e){return c(Object(l.a)(e))})).catch((function(e){return console.error(e)})),function(){return e.abort()}}),[]);var o,i;return r.a.createElement(G,{data:(o=n,i=3,Object(l.a)(Array(i)).map((function(e,t){return o.filter((function(e,n){return n%i===t}))}))),handlerFollows:function(e){c(e)}})};function re(){var e=Object(g.a)(["\n        z-index:1;\n        cursor:pointer;\n        font-size:36px; \n        position:absolute;\n        top:",";\n        right:20px;\n        transition:.3s;\n        filter: contrast(130%);\n        color:",";\n        opacity:",";\n        \n"]);return re=function(){return e},e}function ce(){var e=Object(g.a)(["\n    margin: 0 auto;\n    width: max-content;\n    display:flex;\n    flex-direction:column;\n    align-items:center; \n\n    .picture{\n        position:relative;\n        height: 90%;\n        \n        &:hover img{\n            transition:.3s;\n            filter: contrast(30%);\n        }   \n        \n        &:hover .heart{\n            opacity:1;\n            transition:.3s;\n            top:10px;\n        }\n\n        img{\n            transition:.3s;\n            width: auto;\n            height: -webkit-fill-available;\n        }\n    }\n    \n    .desc{\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content:space-between;\n    }\n    \n    .desc_profile{\n        display:flex;\n        align-items: center;\n        \n        img{\n            width: 32px;\n            height: 32px;\n            border-radius: 50px;\n        }\n        \n        div{\n            margin-left:5px;\n            display:flex;\n            flex-direction:column;\n            align-items: flex-start;    \n            \n            span+span{\n                font-size:12px;\n                \n                a{\n                    color:#b7b7b7;\n                    \n                    &:hover{\n                       color:black;\n                    }\n                }\n            }\n        }\n    }\n    \n\n"]);return ce=function(){return e},e}function oe(){var e=Object(g.a)(["\n    padding: 1rem;\n    height: calc(100vh - 150px);\n\n"]);return oe=function(){return e},e}var ie=w.a.div(oe()),le=w.a.div(ce()),ue=w.a.span(re(),(function(e){return e.isred?"10px":"-10px"}),(function(e){return e.isred?"red":"black"}),(function(e){return e.isred?"1":"0"})),se=function(){var e=Object(x.g)().id,t=Object(a.useState)(void 0),n=Object(v.a)(t,2),c=n[0],o=n[1],i=O("follows",[]),u=Object(v.a)(i,1)[0],s=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("follows"))})),f=Object(v.a)(s,2),p=f[0],d=f[1];if(Object(a.useEffect)((function(){var t=new AbortController;return function(){var n=Object(D.a)(J.a.mark((function n(){var a,r;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.unsplash.com/photos/".concat(e,"/?&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU"),{signal:t.signal});case 3:return a=n.sent,n.next=6,a.json();case 6:r=n.sent,o(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}()(),function(){return t.abort()}}),[]),!c)return r.a.createElement(H,null);return console.log(c),r.a.createElement(ie,null,r.a.createElement(le,null,r.a.createElement("picture",{className:"picture"},r.a.createElement(ue,{className:"heart",isred:p.includes(e),onClick:function(){return function(e,t){if(t){var n=p.filter((function(t){return t!==e}));d(n),u(n)}else d([].concat(Object(l.a)(p),[e])),u([].concat(Object(l.a)(p),[e]))}(e,p.includes(e))}},"\u2764"),r.a.createElement("img",{src:c.urls.regular,alt:c.alt_description})),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"desc_profile"},r.a.createElement("img",{src:c.user.profile_image.medium,alt:c.user.id}),r.a.createElement("div",null,r.a.createElement("span",null,c.user.name),r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.instagram.com/"+c.user.instagram_username,target:"_blank"},"@",c.user.instagram_username)))),r.a.createElement("div",{className:"desc_load"},r.a.createElement("a",{href:c.urls.regular,target:"_blank",download:!0},"Download")))))};var fe=function(){var e=r.a.createElement(x.d,null,r.a.createElement(x.b,{path:"/",exact:!0},r.a.createElement(W,null)),r.a.createElement(x.b,{path:"/source/:text"},r.a.createElement(W,null)),r.a.createElement(x.b,{path:"/history"},r.a.createElement(ne,null)),r.a.createElement(x.b,{path:"/follows"},r.a.createElement(ae,null)),r.a.createElement(x.b,{path:"/picture/:id"},r.a.createElement(se,null)),r.a.createElement(x.a,{to:"/"}));return r.a.createElement(b.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(N,null),e))},pe=(n(47),n(48),Object(i.d)(m,Object(i.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:pe},r.a.createElement(fe,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.3dd0a1b0.chunk.js.map