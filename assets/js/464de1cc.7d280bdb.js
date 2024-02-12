"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4541],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(f,c(c({ref:t},u),{},{components:a})):n.createElement(f,c({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},59046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={layout:"post",title:"Apache CloudStack 4.0.2 Released",tags:["announcement"],slug:"apache_cloudstack_4_0_2"},c=void 0,l={permalink:"/blog/apache_cloudstack_4_0_2",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-04-24-apache_cloudstack_4_0_2.md",source:"@site/blog/2013-04-24-apache_cloudstack_4_0_2.md",title:"Apache CloudStack 4.0.2 Released",description:"The Apache CloudStack project is pleased to announce the 4.0.2 release",date:"2013-04-24T00:00:00.000Z",formattedDate:"April 24, 2013",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack 4.0.2 Released",tags:["announcement"],slug:"apache_cloudstack_4_0_2"},prevItem:{title:"Announcing CloudStack Collaboration Conference 2013",permalink:"/blog/announcing_cloudstack_collaboration_conference_2013"},nextItem:{title:"Apache CloudStack Weekly News - 22 April 2013",permalink:"/blog/apache_cloudstack_weekly_news_22"}},i={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Apache CloudStack project is pleased to announce the 4.0.2 release of the CloudStack Infrastructure-as-a-Service (IaaS) cloud orchestration platform. This is a minor release in the 4.0.0 branch, which contains fixes for 40 bugs. "),(0,r.kt)("p",null,"Apache CloudStack is an integrated software platform that allows users to build a feature-rich IaaS. CloudStack includes an intuitive user interface and rich API for managing the compute, networking, accounting, and storage for private, hybrid, or public clouds. The project entered the Apache Incubator in April 2012, and graduated in March 2013."),(0,r.kt)("p",null,"The 4.0.2 release includes fixes for a number of issues, including two minor security vulnerabilities (CVE\u20132013\u20132756 and CVE\u20132013\u20132758), problems displaying storage statistics, a fix for the SSVM HTTP proxy, support for CentOS 6.4, and other fixes."),(0,r.kt)("h2",{id:"downloads"},"Downloads"),(0,r.kt)("p",null,"The official source code releases can be downloaded from:"),(0,r.kt)("p",null,(0,r.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,r.kt)("p",null,"In addition to the official source code release, individual contributors have also made convenience binaries available on the Apache CloudStack download page."),(0,r.kt)("h2",{id:"aboutapachecloudstack"},"About Apache CloudStack"),(0,r.kt)("p",null,"Apache CloudStack is a complete software suite for creating Infrastructure-as-a-Service (IaaS) clouds. Target environments include service providers and enterprises. It is used by many service providers to set up an on-demand, elastic cloud computing services and by enterprises to set up a private cloud for use by their own employees. Apache CloudStack is also available to individuals and organizations that wish to study and implement an IaaS for personal, educational, and/or production use."),(0,r.kt)("p",null,"Further information on Apache CloudStack can be found at",(0,r.kt)("a",{href:"http://cloudstack.apache.org/"},"cloudstack.apache.org"),"."))}d.isMDXComponent=!0}}]);