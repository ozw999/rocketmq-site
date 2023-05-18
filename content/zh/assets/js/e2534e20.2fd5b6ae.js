"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),h=o,k=m["".concat(c,".").concat(h)]||m[h]||u[h]||n;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<n;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},36556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var a=r(87462),o=(r(67294),r(3905));const n={title:"Release Notes - Apache RocketMQ - Version 4.9.6",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},l=void 0,s={permalink:"/zh/release-notes/2023/05/18/4.9.6",source:"@site/release-notes/2023-05-18-4.9.6.md",title:"Release Notes - Apache RocketMQ - Version 4.9.6",description:"- Source: rocketmq-all-4.9.6-source-release.zip [PGP] [SHA512]",date:"2023-05-18T00:00:00.000Z",formattedDate:"2023\u5e745\u670818\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:.42,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.9.6",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},nextItem:{title:"Release Notes - Apache RocketMQ - Version 5.1.1",permalink:"/zh/release-notes/2023/05/15/5.1.1"}},c={authorsImageUrls:[]},i=[{value:"What&#39;s Changed",id:"whats-changed",level:2}],p={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Download the 4.9.6 release",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.6/rocketmq-all-4.9.6-source-release.zip"},"rocketmq-all-4.9.6-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.6/rocketmq-all-4.9.6-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.6/rocketmq-all-4.9.6-source-release.zip.sha512"},"SHA512"),"]"),(0,o.kt)("li",{parentName:"ul"},"Binary: ",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.6/rocketmq-all-4.9.6-bin-release.zip"},"rocketmq-all-4.9.6-bin-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.6/rocketmq-all-4.9.6-bin-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.6/rocketmq-all-4.9.6-bin-release.zip.sha512"},"SHA512"),"]"))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the 4.9.6 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{href:"/docs/quickStart/01quickstart/"},"Quick Start"),"."),(0,o.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make configPath unable to update at runtime by @RongtongJin"),(0,o.kt)("li",{parentName:"ul"},"Remove the filter server module by @RongtongJin"),(0,o.kt)("li",{parentName:"ul"},"[ISSUE #6758]"," Prepare to release version 4.9.6 by @RongtongJin in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/6759"},"https://github.com/apache/rocketmq/pull/6759"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/compare/rocketmq-all-4.9.5...rocketmq-all-4.9.6"},"https://github.com/apache/rocketmq/compare/rocketmq-all-4.9.5...rocketmq-all-4.9.6")))}u.isMDXComponent=!0}}]);