(this.webpackJsonpword_counter=this.webpackJsonpword_counter||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(8),a=t.n(r),s=(t(14),t(15),t(7)),i=(t(16),t(17),t(0));var o=function(e){var n=e.count;return Object(i.jsx)("div",{className:"result-container",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["Character Count: ",n.characterCount]}),Object(i.jsxs)("li",{children:["Word Count: ",n.wordCount]}),Object(i.jsxs)("li",{children:["Sentence Count: ",n.sentenceCount]}),Object(i.jsxs)("li",{children:["Paragraph Count: ",n.paragraphCount]}),Object(i.jsxs)("li",{children:["Bigrams Unique Count: ",n.bigramsUnqiueCount]})]})})},u=t(9),l=t.n(u);var j=function(){var e=Object(c.useState)(""),n=Object(s.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)({}),u=Object(s.a)(a,2),j=u[0],h=u[1];Object(c.useEffect)((function(){f()}),[t]);var d=function(){var e=t.split(/\s+/g);return""===e[e.length-1]&&e.pop(),e.length},b=function(){var e;return null!==(e=t.match(/\w[.?!](\s|$)/g))?e.length:0},x=function(){var e=t.split(/\n+/g);return""===e[e.length-1]&&e.pop(),e.length},O=function(e,n){e=e.replace(/[^a-zA-Z0-9\s]/g,"").toLowerCase().split(" ");for(var t={},c=0;c<=e.length-n;c++){var r=e.slice(c,c+n);t[r]?t[r]++:t[r]=1}var a=0;for(var s in t)1===t[s]&&a++;return a},f=function(e){var n={characterCount:t.length,wordCount:d(),sentenceCount:b(),paragraphCount:x(),bigramsUnqiueCount:O(t,2)};h(n)};return Object(i.jsxs)("div",{className:"text-container",children:[Object(i.jsx)("textarea",{className:"word-field",placeholder:"Enter Text Here",onChange:function(e){r(e.target.value)},value:t}),Object(i.jsx)("button",{onClick:function(){r("")},children:"Clear"}),Object(i.jsx)("button",{onClick:function(){var e=new l.a;e.init({volume:.5,lang:"en-GB",rate:1,pitch:1,voice:"Google UK English Female",splitSentences:!0,listeners:{onvoiceschanged:function(e){console.log("Voices changed",e)}}}).then((function(n){e.speak({text:t||"PLease enter a text"})}))},children:"Listen"}),Object(i.jsx)(o,{count:j})]})};t(20);var h=function(){return Object(i.jsx)("div",{className:"header-container",children:"This is the Header"})},d=t(24),b=t(25),x=t(26);var O=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(d.a,{children:[Object(i.jsxs)(b.a,{children:[" ",Object(i.jsxs)(x.a,{children:[" ",Object(i.jsx)(h,{})," "]})," "]}),Object(i.jsxs)(b.a,{children:[" ",Object(i.jsxs)(x.a,{children:[" ",Object(i.jsx)(j,{})," "]})," "]})]})})};t(21);a.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.d4b1f51d.chunk.js.map