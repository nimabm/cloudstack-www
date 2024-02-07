"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={layout:"post",title:"Reflecting on KubeCon + CloudNativeCon 2023",authors:["ivet"],tags:["news","roundup"],slug:"reflecting-on-kubecon-cloudnativecon-2023"},i=void 0,u={permalink:"/blog/reflecting-on-kubecon-cloudnativecon-2023",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2023-04-25-reflecting-on-kubecon-cloudnativecon-2023.md",source:"@site/blog/2023-04-25-reflecting-on-kubecon-cloudnativecon-2023.md",title:"Reflecting on KubeCon + CloudNativeCon 2023",description:"For the first year, the Apache CloudStack Community has participated at KubeCon + CloudNativeCon- the Cloud Native Computing Foundation\u2019s flagship conference,",date:"2023-04-25T00:00:00.000Z",formattedDate:"April 25, 2023",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"roundup",permalink:"/blog/tags/roundup"}],hasTruncateMarker:!0,authors:[{name:"Ivet Petrova",title:"PMC Member",url:"https://github.com/IvetPM",imageURL:"https://github.com/IvetPM.png",key:"ivet"}],frontMatter:{layout:"post",title:"Reflecting on KubeCon + CloudNativeCon 2023",authors:["ivet"],tags:["news","roundup"],slug:"reflecting-on-kubecon-cloudnativecon-2023"},prevItem:{title:"1 Week to Go - CloudStack European User Group - May 4th, 2023",permalink:"/blog/cloudstack-european-user-group-may1"},nextItem:{title:"Day 3 at CloudFest",permalink:"/blog/day-3-at-cloudfest"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:"/blog/reflecting-on-kubecon-cloudnativecon-2023"},(0,r.kt)("img",{src:"/img/imported/e729f7ae-ebe1-474a-91f6-27c6a581b995",width:"750",height:"393"})),(0,r.kt)("p",null,"For the first year, the Apache CloudStack Community has participated at KubeCon + CloudNativeCon- the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cncf.io/?_gl=1*x7ihno*_ga*MjA1MDg5MzgzMS4xNjc5OTAwNzUy*_ga_VWZ4V8CGRF*MTY4MjQwNDA5NC4xMS4wLjE2ODI0MDQwOTQuMC4wLjA."},"Cloud Native Computing Foundation"),"\u2019s flagship conference,\nwhich gathers adopters and technologists from leading open source and cloud\nnative communities. It has been a fantastic opportunity for us to represent our\ntechnology on the global stage, and meet engineers, DevOps and infrastructure\nexperts. Community members have had the pleasure of running attendees through\nmultiple CloudStack demos and answering their many questions about the\nopen-source cloud management solution. We also had the opportunity to share the\npitfalls, hacks, learnings, and key takeaways from\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=AR8JXotMir8&t=44s"},"our journey to develop CAPC")," \u2013\nthe CAPI Provider for Apache CloudStack."))}d.isMDXComponent=!0}}]);