(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),i=n(5),r=n.n(i),s=(n(11),n(2));n(12);var l=function(e){var t=e.users;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){var t=e.id,n=e.name,o=e.occupation,a=e.email;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:o}),Object(c.jsx)("td",{children:a})]},t)}))})};var u=function(e){var t=e.users,n=e.sort;return e.users.sort((function(e,t){return e[n]>t[n]?1:-1})),Object(c.jsx)(l,{users:t})};var m=function(e){var t=e.users,n=Object(o.useState)("id"),a=Object(s.a)(n,2),i=a[0],r=a[1],l=function(e){r(e.target.id)};return console.log("Table users: "+t),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{id:"id",onClick:l,type:"button",className:"btn btn-primary",children:"ID"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{id:"name",onClick:l,type:"button",className:"btn btn-primary",children:"Name"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{id:"occupation",onClick:l,type:"button",className:"btn btn-primary",children:"Position"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{id:"email",onClick:l,type:"button",className:"btn btn-primary",children:"Email"})})]})}),Object(c.jsx)("tbody",{children:Object(c.jsx)(u,{users:t,sort:i})})]})},d=n(4);var j=function(e){var t=e.handleInputChange;return Object(c.jsx)("form",{children:Object(c.jsx)("input",{className:"mdb-select md-form colorful-select dropdown-primary",onChange:function(e){return t(e)}})})};var b=function(){var e=Object(o.useState)(d),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(""),r=Object(s.a)(i,2),l=r[0],u=r[1];return Object(o.useEffect)((function(){if(l){var e=n.filter((function(e){return e.name.includes(l)}));a(e)}else a(d)}),[l]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("p",{children:"Filter by employee name using the dropdown below or sort by name, position, or email with the column heading buttons."}),Object(c.jsx)(j,{results:l,handleInputChange:function(e){u(e.target.value)}}),Object(c.jsx)(m,{users:n})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};n(13);r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),p()},4:function(e){e.exports=JSON.parse('[{"id":1,"name":"Bob","occupation":"Fry Cook","email":"bob@company.com"},{"id":2,"name":"Fred","occupation":"Restaurant Owner","email":"fred@company.com"},{"id":3,"name":"Jane","occupation":"Cashier","email":"jane@company.com"},{"id":4,"name":"Jill","occupation":"Cashier","email":"jill@company.com"},{"id":5,"name":"Susie","occupation":"Manager","email":"susie@company.com"},{"id":6,"name":"Doug","occupation":"Chef","email":"doug@company.com"},{"id":7,"name":"Mary","occupation":"Assistant Manager","email":"mary@company.com"},{"id":8,"name":"John","occupation":"Sous Chef","email":"john@company.com"},{"id":9,"name":"Lucy","occupation":"Line Cook","email":"lucy@company.com"},{"id":10,"name":"Dave","occupation":"Waiter","email":"dave@company.com"},{"id":11,"name":"Jessica","occupation":"Waiter","email":"jessica@company.com"},{"id":12,"name":"Janet","occupation":"Waiter","email":"janet@"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.6795c131.chunk.js.map