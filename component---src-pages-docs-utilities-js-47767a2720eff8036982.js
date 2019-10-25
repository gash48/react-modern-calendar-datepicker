(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{165:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(173),c=t(171),s=t(170);a.default=function(){var e=Object(o.utils)().getToday(),a=Object(o.utils)(!0).getToday();return r.a.createElement(c.a,{title:"Utilities"},r.a.createElement("p",{className:"Docs__paragraph"},"Along with exported components, there are utility date-based functions available for you to use. the first parameter of ",r.a.createElement("code",{className:"custom-code"},"utils")," function, is for using Persian language for utils (default to false). Here are some examples:"),r.a.createElement("h2",{className:"Docs__titleSecondary"},"Get Today"),r.a.createElement(s.a,{language:"javascript"},"\nimport { utils } from 'react-modern-calendar-datepicker';\n\nconst gregorianToday = utils().getToday(); // { year: "+e.year+", month: "+e.month+", day: "+e.day+" }\nconst persianToday = utils(true).getToday(); // { year: "+a.year+", month: "+a.month+", day: "+a.day+" }\n        "),r.a.createElement("h2",{className:"Docs__titleSecondary"},"Days Precedence"),r.a.createElement(s.a,{language:"javascript"},"\nimport { utils } from 'react-modern-calendar-datepicker';\nconst day1 = { year: 2019, month: 10, day: 1 };\nconst day2 = { year: 2019, month: 10, day: 2 };\n\nconst { isBeforeDate } = utils();\nconst isDay1BeforeDay2 = isBeforeDate(day1, day2); // ✅ true\nconst isDay2BeforeDay1 = isBeforeDate(day2, day1); // ❌ false\n        "))}},171:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(170);t(147);a.a=function(e){var a=e.title,t=e.children;return r.a.createElement(o.d,null,r.a.createElement(o.e,{title:a+" - react-modern-calendar-datepicker",keywords:[a]}),r.a.createElement("div",{className:"Docs"},r.a.createElement(o.c,null),r.a.createElement("div",{className:"Docs__content"},r.a.createElement("h1",{className:"Docs__title"},a),t)))}}}]);
//# sourceMappingURL=component---src-pages-docs-utilities-js-47767a2720eff8036982.js.map