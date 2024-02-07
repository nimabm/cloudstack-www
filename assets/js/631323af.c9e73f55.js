"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var l=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=l.createContext({}),c=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},h="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=o,p=h["".concat(s,".").concat(d)]||h[d]||k[d]||n;return a?l.createElement(p,r(r({ref:t},u),{},{components:a})):l.createElement(p,r({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<n;c++)r[c]=a[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var l=a(87462),o=(a(67294),a(3905));const n={layout:"post",title:"Apache CloudStack Weekly News - 18 March 2013",slug:"apache_cloudstack_weekly_news_181"},r=void 0,i={permalink:"/blog/apache_cloudstack_weekly_news_181",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-03-18-apache_cloudstack_weekly_news_181.md",source:"@site/blog/2013-03-18-apache_cloudstack_weekly_news_181.md",title:"Apache CloudStack Weekly News - 18 March 2013",description:"Big news this week: Apache CloudStack has passed major milestones towards graduation, major progress on bugs against 4.1.0, discussions about integrating the Palo Alto firewall with CloudStack, and getting Eclipse and Maven to play nice for developers. Some interesting posts from members of the Apache CloudStack community as well.",date:"2013-03-18T00:00:00.000Z",formattedDate:"March 18, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 18 March 2013",slug:"apache_cloudstack_weekly_news_181"},prevItem:{title:"The Apache Software Foundation Announces Apache CloudStack Has Become A Top-Level Project",permalink:"/blog/the_apache_software_foundation_announces"},nextItem:{title:"Apache CloudStack Weekly News - 11 March 2013",permalink:"/blog/apache_cloudstack_weekly_news_111"}},s={authorsImageUrls:[]},c=[],u={toc:c},h="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Big news this week: Apache CloudStack has passed major milestones towards graduation, major progress on bugs against 4.1.0, discussions about integrating the Palo Alto firewall with CloudStack, and getting Eclipse and Maven to play nice for developers. Some interesting posts from members of the Apache CloudStack community as well."),(0,o.kt)("p",null,"Want to keep reading the CloudStack Weekly News? See the next section for information on how to contribute."),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-ContributingtotheApacheCloudStackWeeklyNews"}),"Contributing to the Apache CloudStack Weekly News"),(0,o.kt)("p",null,"If you have an event, discussion, or other item to contribute to the ",(0,o.kt)("em",null,"Weekly News"),", you can add it directly to the ",(0,o.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News",class:"external-link",rel:"nofollow"},"wiki")," by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including ",(0,o.kt)("a",{href:"",title:"News"},"News"),": ",(0,o.kt)("em",null,"description of topic")," or email the newsletter editor directly (jzb at apache.org), again with the subject ",(0,o.kt)("a",{href:"",title:"News"},"News"),": ",(0,o.kt)("em",null,"description of topic"),". ",(0,o.kt)("b",null,"Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.")),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-MajorDiscussions"}),"Major Discussions"),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-CloudStackGettingClosertoGraduation"}),"CloudStack Getting Closer to Graduation"),(0,o.kt)("p",null,"Chip Childers notified the project that ",(0,o.kt)("a",{href:"http://markmail.org/thread/zhymhs35ic3rruq5",class:"external-link",rel:"nofollow"},"the graduation resolution has passed the IPMC vote"),". With the votes passed, it's now up to the Apache Software Foundation board to discuss. The next board meeting is on March 20th, though it's unclear whether the IPMC vote was finalized in time for the matter to be discussed during this meeting."),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-EclipseandMavenWorkingTogether"}),"Eclipse and Maven Working Together"),(0,o.kt)("p",null,"Alex Huang wrote last week that ",(0,o.kt)("a",{href:"http://markmail.org/message/f265rx7r5qm7z6yz",class:"external-link",rel:"nofollow"},"he's made some changes"),' to "help developers with better productivity." To put it succinctly, Alex found that there are better ways to build CloudStack using Eclipse and Maven together, and has written a script to help developers speed up their tools. The procedure and new ',(0,o.kt)("em",null,"impatient")," profile should be documented on the wiki soon."),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-PaloAlto"}),"Palo Alto"),(0,o.kt)("p",null,"Will Stevens ",(0,o.kt)("a",{href:"http://markmail.org/message/n5276i4hfh7ek57o",class:"external-link",rel:"nofollow"},"brought up a topic about integrating the Palo Alto firewall")," with CloudStack:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",null,"The problem I am running into right now is that Palo Alto does not allow any two interfaced to have the same IP (even if they are in different zones, vrs, vsys and vlans). This is an issue because CloudStack supports each account having their own private IP ranges and two accounts can use the same private IP range. For example, by default if you create a network with source nat and you do not specify any gateway or subnet data, it will give you 10.1.1.0/24 as an IP range. This means it will be very likely that two CloudStack accounts will be using the same private IP space.")),(0,o.kt)("p",null,"Alex ",(0,o.kt)("a",{href:"http://markmail.org/message/iyydkgxzvbzmo4jw",class:"external-link",rel:"nofollow"},"replied"),', "There is a mode in CloudStack that only allows non-intersecting cidrs for guest networks. It was introduced specifically because many physical network devices do not expect cidrs to intersect even when it\'s on different VLANs."'),(0,o.kt)("p",null,"Stuck on a technical issue? Ask on the -dev list, and it's quite likely you'll not only get an answer \u2013 odds are someone's had the problem you've got before, and thought about a solution."),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-CloudStackPlanetPostsfromtheCloudStackCommunity"}),"CloudStack Planet - Posts from the CloudStack Community"),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-SecurityintheCloudandtheCCSK"}),"Security in the Cloud and the CCSK"),(0,o.kt)("p",null,"Sebastien Goasguen ",(0,o.kt)("a",{href:"http://buildacloud.org/blog/237-security-in-the-cloud-and-the-ccsk.html",class:"external-link",rel:"nofollow"},"wrote about security in the cloud")," this week, and the Certificate of Cloud Security Knowledge (CCSK)."),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-SELinuxKVMCloudStack"}),"SELinux + KVM + CloudStack"),(0,o.kt)("p",null,"David Nalley ",(0,o.kt)("a",{href:"http://buildacloud.org/blog/238-selinux-kvm-cloudstack.html",class:"external-link",rel:"nofollow"},"blogged about getting an SELinux policy to work for CloudStack"),' because, "I really dislike advocating for people to turn off a security mechanism to get software to work. Additionally I really want some of the advantages of sVirt."'),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-HOWTO%3AUsingCloudStackResourceswithPuppet%28Part1%29"}),"HOWTO: Using CloudStack Resources with Puppet (Part 1)"),(0,o.kt)("p",null,"David also started writing about ",(0,o.kt)("a",{href:"http://buildacloud.org/blog/239-howto-using-cloudstack-resources-with-puppet%2C-part-1.html",class:"external-link",rel:"nofollow"},"using CloudStack resources with Puppet"),". David says he's written and talked about CloudStack resources previously, but \"while cheerleading and telling people it is awesome should be enough - it really doesn't tell you how to actually use it.\""),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-LDAPAuthenticationinCloudStack%28v4.0.1%29"}),"LDAP Authentication in CloudStack (v4.0.1)"),(0,o.kt)("p",null,"Kirt Jantzer wrote about ",(0,o.kt)("a",{href:"http://kirkjantzer.blogspot.com/2013/03/ldap-authentication-in-cloudstack-v401.html",class:"external-link",rel:"nofollow"},"LDAP Authentication in CloudStack (v4.0.1)")," this week."),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-PCExtremeCaseStudy"}),"PCExtreme Case Study"),(0,o.kt)("p",null,"Posted to the wiki this week, a case study about PCExtreme's use of Apache CloudStack: \"",(0,o.kt)("a",{href:"https://cwiki.apache.org/confluence/download/attachments/30757703/PCExtreme+Case+Study+Final+031813.pdf",class:"external-link",rel:"nofollow"},"PCExtreme Achieves Business Agility with Apache CloudStack"),'"'),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-UpcomingEvents"}),"Upcoming Events"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"Storage in Apache CloudStack")," being held by the ",(0,o.kt)("a",{href:"http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/108916562/",class:"external-link",rel:"nofollow"},"CloudStack SF Bay Area Users Group")," on March 28, 2013. Location TBD, sign up on the Meetup.com Website."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Apache Hackathon at PES Institute of Technology")," being ",(0,o.kt)("a",{href:"http://www.meetup.com/CloudStack-Bangalore-Group/events/104410272/",class:"external-link",rel:"nofollow"},"held by the Bangalore Chapter of CloudStack India")," on March 30, 2013 at 10:00 a.m. Sign up on the Meetup.com Website."),(0,o.kt)("li",null,"Sebastien Goasguen will be at the ",(0,o.kt)("a",{href:"http://www.eventbrite.com/org/613789661",class:"external-link",rel:"nofollow"},"Scotland JAVA User Group")," on March 27th, 2013 in Edinburgh, introducing CloudStack."),(0,o.kt)("li",null,"Sebastien Goasguen will give a lightning talk at the ",(0,o.kt)("a",{href:"http://cloudcamp.org/scotland/369",class:"external-link",rel:"nofollow"},"CloudCamp Scotland")," on March 28th, 2013 in Edinburgh, talking about SDN in CloudStack."),(0,o.kt)("li",null,"UK/European CloudStack user group ",(0,o.kt)("a",{href:"http://www.eventbrite.com/event/5816841329/eorg",class:"external-link",rel:"nofollow"},"meet-up")," will be April 11th in London.")),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-Jira"}),"Jira"),(0,o.kt)("p",null,"Things are looking up this week, bug-wise. Bugs have dropped in all categories, and all of the blocker and critical bugs have been assigned. "),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Last week: 11 blocker bugs. This week: 7 ",(0,o.kt)("a",{href:"http://is.gd/blockers41acs",class:"external-link",rel:"nofollow"},"blocker bugs")),(0,o.kt)("li",null,"Last week: 29 critical bugs. This week: 10 ",(0,o.kt)("a",{href:"http://is.gd/critical41acs",class:"external-link",rel:"nofollow"},"critical bugs")),(0,o.kt)("li",null,"Last week: 159 major bugs. This week: 148 ",(0,o.kt)("a",{href:"http://is.gd/major41acs",class:"external-link",rel:"nofollow"},"major bugs")),(0,o.kt)("li",null,"Last week: 33 minor bugs. This week: 28 ",(0,o.kt)("a",{href:"http://is.gd/minor41acs",class:"external-link",rel:"nofollow"},"minor bugs"))),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-18March2013-NewCommittersandPPMCMembers"}),"New Committers and PPMC Members"),(0,o.kt)("p",null,"No new committers or PPMC members were announced last week."))}k.isMDXComponent=!0}}]);