(this.webpackJsonpinterestapp=this.webpackJsonpinterestapp||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(5),c=n.n(s),i=(n(12),n(29),n(30),n(4)),o=n.n(i),u=n(7),l=n(6),p=n(3),d=(n(13),n(24)),f=function(e){return"@"==e[0]?"Invalid E-mail":e.includes("@")?"@"===e[e.length-1]||e.indexOf(".")-e.indexOf("@")===1?"Add Domain in Email ( @abc.in )":!e.includes(".")||e.indexOf(".")>=e.length-2?"Add Top level Domain(.com .in)":"":"Missing '@' sign"},m=n(11),b=n.n(m);p.a.configure();var j=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("https://testpostapi1.p.rapidapi.com/testBatmanApi/name/register?rapidapi-key=28728db04dmsh34d3f140dd059fap1c388ejsn7288577afcf7",{name:t,email:n,interests:a},{accept:"success","content-type":"application/x-www-form-urlencoded","x-rapidapi-host":"testpostapi1.p.rapidapi.com","x-rapidapi-key":"28728db04dmsh34d3f140dd059fap1c388ejsn7288577afcf7"});case 2:r=e.sent,console.log(r),r.status&&p.a.success("Data Posted",{position:p.a.POSITION.TOP_CENTER,autoClose:3e3}),setTimeout((function(){window.location.reload()}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://webit-keyword-search.p.rapidapi.com/autosuggest?q=".concat(t,"&language=en&rapidapi-key=28728db04dmsh34d3f140dd059fap1c388ejsn7288577afcf7"));case 2:for(n=e.sent,a=n.data,r=[],s=0;s<8;s++)c={value:a.data.results[s],label:a.data.results[s]},r.push(c);return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(1);p.a.configure();var g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("sport"),c=Object(l.a)(s,2),i=c[0],m=c[1],b=Object(a.useState)([]),g=Object(l.a)(b,2),x=g[0],v=g[1],y=Object(a.useState)(""),w=Object(l.a)(y,2),N=w[0],S=w[1],I=Object(a.useState)(""),T=Object(l.a)(I,2),C=T[0],E=T[1],P=Object(a.useState)(""),k=Object(l.a)(P,2),A=k[0],D=k[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===(t=i)&&(m("sport"),t="sport"),e.next=4,O(t);case 4:n=e.sent,r(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);return Object(h.jsxs)("form",{className:"mainDiv",onSubmit:function(e){e.preventDefault();var t=f(C);S(t),""===t&&""!==A&&x.length<=3&&x.length>0?j(A,C,x):t||(x.length>3&&p.a.error("User Can Select Max. 3 Interests",{position:p.a.POSITION.TOP_CENTER}),0==x.length&&p.a.error("Please Select Atleast One Interest",{position:p.a.POSITION.TOP_CENTER}))},children:[Object(h.jsxs)("div",{className:"my-3",children:[Object(h.jsx)("input",{type:"text",id:"username",className:"form-control",onChange:function(e){return D(e.target.value)},required:!0}),Object(h.jsx)("label",{htmlFor:"username",children:"Username"})]}),Object(h.jsxs)("div",{className:"my-3",children:[Object(h.jsx)("input",{type:"text",id:"email",className:"form-control",required:!0,onChange:function(e){return E(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("span",{className:"emailerror",children:N})]}),Object(h.jsx)("div",{className:"my-3",children:Object(h.jsx)(d.a,{isMulti:!0,name:"interest",placeholder:"Search Interest",options:n,className:"basic-multi-select",onInputChange:function(e){m(e)},onChange:function(e){v(Array.isArray(e)?e.map((function(e){return e.label})):[])}})}),Object(h.jsx)("button",{className:"btn btn-success submitBtn",children:"Register"})]})};var x=function(){return Object(h.jsx)(g,{})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),v()}},[[66,1,2]]]);
//# sourceMappingURL=main.9b137b3f.chunk.js.map