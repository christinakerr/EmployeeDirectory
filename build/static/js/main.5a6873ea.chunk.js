(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),i=n(5),r=n.n(i),s=(n(11),n(2));n(12);var l=function(e){var t=e.users;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){var t=e.id,n=e.name,a=e.occupation,o=e.email;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:o})]},t)}))})};var m=function(e){var t=e.users,n=e.sort;return e.users.sort((function(e,t){return e[n]>t[n]?1:-1})),Object(c.jsx)(l,{users:t})};var u=function(e){var t=e.users,n=Object(a.useState)("id"),o=Object(s.a)(n,2),i=o[0],r=o[1],l=function(e){r(e.target.id)};return console.log("Table users: "+t),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{id:"id",onClick:l,type:"button",className:"btn btn-primary",children:"ID"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{id:"name",onClick:l,type:"button",className:"btn btn-primary",children:"Name"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{id:"occupation",onClick:l,type:"button",className:"btn btn-primary",children:"Position"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{id:"email",onClick:l,type:"button",className:"btn btn-primary",children:"Email"})})]})}),Object(c.jsx)("tbody",{children:Object(c.jsx)(m,{users:t,sort:i})})]})},j=n(4);var b=function(e){var t=e.handleInputChange;return Object(c.jsx)("form",{children:Object(c.jsx)("input",{className:"mdb-select md-form colorful-select dropdown-primary",onChange:function(e){return t(e)}})})};var d=function(){var e=Object(a.useState)(j),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),r=Object(s.a)(i,2),l=r[0],m=r[1];return Object(a.useEffect)((function(){if(l){var e=n.filter((function(e){return e.name.includes(l)}));o(e)}else o(j)}),[l]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("p",{children:"Filter by employee name using the search bar below or sort by name, position, or email with the column heading buttons."}),Object(c.jsx)(b,{results:l,handleInputChange:function(e){m(e.target.value)}}),Object(c.jsx)(u,{users:n})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};n(13);r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),p()},4:function(e){e.exports=JSON.parse('[{"id":1,"name":"Bob","occupation":"Fry Cook","email":"bob@company.com"},{"id":2,"name":"Fred","occupation":"Restaurant Owner","email":"fred@company.com"},{"id":3,"name":"Jane","occupation":"Cashier","email":"jane@company.com"},{"id":4,"name":"Jill","occupation":"Cashier","email":"jill@company.com"},{"id":5,"name":"Susie","occupation":"Manager","email":"susie@company.com"},{"id":6,"name":"Doug","occupation":"Chef","email":"doug@company.com"},{"id":7,"name":"Mary","occupation":"Assistant Manager","email":"mary@company.com"},{"id":8,"name":"John","occupation":"Sous Chef","email":"john@company.com"},{"id":9,"name":"Lucy","occupation":"Line Cook","email":"lucy@company.com"},{"id":10,"name":"Dave","occupation":"Waiter","email":"dave@company.com"},{"id":11,"name":"Jessica","occupation":"Waiter","email":"jessica@company.com"},{"id":12,"name":"Janet","occupation":"Waiter","email":"janet@company.com"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.5a6873ea.chunk.js.map