(this["webpackJsonplawyers-csv"]=this["webpackJsonplawyers-csv"]||[]).push([[0],{145:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(16),o=n.n(i),c=(n(81),n(14)),s=n(75),b=n(64),u=n.n(b),m="PARSE_FILE",l="VALID_STRUCTURE",d="DELETE_DATA",v="LOADING",f=["YYYY-MM-DD","MM/DD/YYYY"],h=[/^\+1\d{10}$/,/^1\d{10}$/,/^\d{10}$/],p=[/^[a-zA-Z0-9]{6}$/],j="File format is not correct",O="table-danger",N=n(7),g=n(65),y=n.n(g),w=n(29),x=n.n(w),C="phone",I="email",M="yearlyIncome",L="hasChildren",A="licenseStates",H=n(66),D=n.n(H),P=n(35),T={header:!0,worker:!1,skipEmptyLines:!0,transformHeader:function(e){return x.a.camelCase(e.toLowerCase())},comments:!0,transform:function(e,a){var n,t=x.a.trim(e,"'\" ");switch(a){case C:return n=t,h.some((function(e){return e.test(n)}))?D()(n)[0]:n;case I:return function(e){return x.a.toLower(e)}(t);case L:return function(e){return 0===e.length?"false":e}(t);case M:return function(e){var a=Number(e);return Number.isNaN(a)?e:String(Number.parseFloat(a).toFixed(2))}(t);case A:return function(e){return e.split(/\s*\|\s*/).map((function(e){var a=P.find((function(a){var n=a.name,t=a.abbreviation;return n.toLowerCase()===e.toLowerCase()||t.toLowerCase()===e.toLowerCase()}));return void 0!==a?a.abbreviation:e})).join(" | ")}(t);default:return t}},dynamicTyping:!1},S=function(e){return new Promise((function(a,n){y.a.parse(e,Object(N.a)(Object(N.a)({},T),{},{complete:a,error:n}))}))},F=n(67),E=n.n(F),k={properties:{fullName:{type:"string",minLength:1},phone:{type:"string",minLength:1},email:{type:"string",minLength:1}},required:["fullName",C,I]},Y=function(e){return new Promise((function(a,n){var t=(new E.a).compile(k);e.every((function(e){return t(e)}))&&a(e),n(j)}))},R=function(e){return e.map((function(e,a){return Object(N.a)({id:a+1},e)}))},V=function(e){return e.map((function(a){var n=a.id,t=a.phone,r=a.email,i=e.findIndex((function(e){return(e.phone===t||e.email===r)&&e.id!==n})),o=-1===i?"":e[i].id;return Object(N.a)(Object(N.a)({},a),{},{duplicateWith:o})}))},W=n(148),G=n(23),K=n(5);var J=function(){var e=Object(c.c)((function(e){return e.loading})),a=Object(c.b)();return Object(K.jsx)(G.a,{fluid:"md",className:"d-flex flex-row-reverse mt-4 mb-4",children:Object(K.jsx)(u.a,{fileTypes:[".csv"],multiplyFiles:!1,handleFiles:function(n){if(!e){var t=Object(s.a)(n,1)[0];"csv"===t.name.split(".").pop()?(a(function(e){return function(a){a({type:v,loading:e})}}(!0)),a(function(e){return function(a){e instanceof Blob&&S(e).then((function(e){var a=e.data;return Y(a)})).then((function(e){return a({type:l,valid:!0}),e})).then(R).then(V).then((function(e){a({type:m,payload:e})})).catch((function(e){console.error(e),e===j&&a({type:l,valid:!1})})).finally((function(){a({type:v,loading:!1})}))}}(t))):(a((r=!1,function(e){e({type:l,valid:r})})),a((function(e){e({type:d})})))}var r},children:Object(K.jsx)(W.a,{variant:"success",size:"lg",children:"Import users"})})})},U=(n(143),n(68)),$=n(70),z=[{Header:"ID",accessor:"id"},{Header:"Full Name",accessor:"fullName"},{Header:"Phone",accessor:"phone"},{Header:"Email",accessor:"email"},{Header:"Age",accessor:"age"},{Header:"Experience",accessor:"experience"},{Header:"Yearly Income",accessor:"yearlyIncome"},{Header:"Has children",accessor:"hasChildren"},{Header:"License states",accessor:"licenseStates"},{Header:"Expiration date",accessor:"expirationDate"},{Header:"License number",accessor:"licenseNumber"},{Header:"Duplicate with",accessor:"duplicateWith"}],B=n(69),_=n(47),Z=n.n(_),q=function(e,a,n){switch(a){case C:return function(e){return"string"===typeof e&&0!==e.length&&h.some((function(a){return a.test(e)}))}(e);case I:return function(e){return"string"===typeof e&&0!==e.length&&Object(B.validate)(e)}(e);case"age":return function(e){return a=Number(e),!0!==Number.isNaN(a)&&Number.isInteger(a)&&a>=21&&a<=150;var a}(e);case"experience":return function(e,a){var n=function(e,a){return e>=0&&e<=a-21},t=Number(e),r=Number(a);return!Number.isNaN(t)&&(Number.isNaN(r)||!Number.isInteger(r)?n(t,21):n(t,r))}(e,n.age);case M:return function(e){var a,n=Number(e);return!Number.isNaN(n)&&(a=n)>=0&&a<=1e6}(e);case"expirationDate":return function(e){return!!Z()(e,f,!0).isValid()&&Z()().diff(e)<=0}(e);case L:return function(e){return"true"===e||"false"===e||0===e.length}(e);case"licenseNumber":return function(e){return p.some((function(a){return a.test(e)}))}(e);case A:return function(e){return 6===e.length&&e.split(/\s*\|\s*/).every((function(e){return P.some((function(a){var n=a.name,t=a.abbreviation;return n.toLowerCase()===e.toLowerCase()||t.toLowerCase()===e.toLowerCase()}))}))}(e);default:return!0}};var X=function(){var e=Object(c.c)((function(e){return e.data})),a=Object(U.useTable)({columns:z,data:e}),n=a.getTableProps,t=a.headerGroups,r=a.rows,i=a.prepareRow;return Object(K.jsxs)($.a,Object(N.a)(Object(N.a)({bordered:!0,hover:!0},n()),{},{children:[Object(K.jsx)("thead",{className:"thead-dark",children:t.map((function(e){return Object(K.jsx)("tr",Object(N.a)(Object(N.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(K.jsx)("th",Object(N.a)(Object(N.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(K.jsx)("tbody",{children:r.map((function(e,a){return i(e),Object(K.jsx)("tr",Object(N.a)(Object(N.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){var a=e.column.id,n=e.value,t=q(n,a,e.row.original),r=Object(N.a)({},e.getCellProps());return t||(r.hasOwnProperty("className")?r.className="".concat(r.className," ").concat(O):r.className=O),Object(K.jsx)("td",Object(N.a)(Object(N.a)({},r),{},{children:e.render("Cell")}))}))}))}))})]}))},Q=n(48);var ee=function(){return Object(K.jsx)(G.a,{fluid:"md",children:Object(K.jsx)(Q.a,{variant:"danger",className:"mt-4 mb-4",children:Object(K.jsx)(Q.a.Heading,{className:"text-center mt-4 mb-4",children:j})})})};var ae=function(){var e=Object(c.c)((function(e){return e.valid}));return Object(K.jsxs)(G.a,{fluid:!0,children:[Object(K.jsx)(J,{}),e?Object(K.jsx)(X,{}):Object(K.jsx)(ee,{}),e&&Object(K.jsx)(J,{})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,i=a.getLCP,o=a.getTTFB;n(e),t(e),r(e),i(e),o(e)}))},te=n(17),re=n(73),ie=n(74),oe=[],ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return Object(ie.a)(a.payload);case d:return[];default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l:return a.valid;default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v:return a.loading;default:return e}},ue=Object(te.c)({data:ce,valid:se,isLoading:be}),me=[re.a],le=Object(te.d)(ue,{},te.a.apply(void 0,me));o.a.render(Object(K.jsx)(r.a.StrictMode,{children:Object(K.jsx)(c.a,{store:le,children:Object(K.jsx)(ae,{})})}),document.getElementById("root")),ne()},35:function(e){e.exports=JSON.parse('[{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"American Samoa","abbreviation":"AS"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"District Of Columbia","abbreviation":"DC"},{"name":"Federated States Of Micronesia","abbreviation":"FM"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Guam","abbreviation":"GU"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Marshall Islands","abbreviation":"MH"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Northern Mariana Islands","abbreviation":"MP"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Palau","abbreviation":"PW"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Puerto Rico","abbreviation":"PR"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virgin Islands","abbreviation":"VI"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]')},81:function(e,a,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.0b47f34d.chunk.js.map