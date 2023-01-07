"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1739],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},k=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,u=c["".concat(i,".").concat(m)]||c[m]||s[m]||l;return a?r.createElement(u,o(o({ref:t},k),{},{components:a})):r.createElement(u,o({ref:t},k))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={},o="RocketMQ Dashboard",p={unversionedId:"deploymentOperations/17Dashboard",id:"version-5.0/deploymentOperations/17Dashboard",title:"RocketMQ Dashboard",description:"RocketMQ Dashboard \u662f RocketMQ \u7684\u7ba1\u63a7\u5229\u5668\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u5ba2\u6237\u7aef\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u5404\u79cd\u4e8b\u4ef6\u3001\u6027\u80fd\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u652f\u6301\u4ee5\u53ef\u89c6\u5316\u5de5\u5177\u4ee3\u66ff Topic \u914d\u7f6e\u3001Broker \u7ba1\u7406\u7b49\u547d\u4ee4\u884c\u64cd\u4f5c\u3002",source:"@site/versioned_docs/version-5.0/05-deploymentOperations/17Dashboard.md",sourceDirName:"05-deploymentOperations",slug:"/deploymentOperations/17Dashboard",permalink:"/docs/deploymentOperations/17Dashboard",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/05-deploymentOperations/17Dashboard.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\u90e8\u7f72",permalink:"/docs/deploymentOperations/16autoswitchdeploy"},next:{title:"RocketMQ Promethus Exporter",permalink:"/docs/deploymentOperations/18Exporter"}},i={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u529f\u80fd\u6982\u89c8",id:"\u529f\u80fd\u6982\u89c8",level:3},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"1. docker \u955c\u50cf\u5b89\u88c5",id:"1-docker-\u955c\u50cf\u5b89\u88c5",level:3},{value:"2. \u6e90\u7801\u5b89\u88c5",id:"2-\u6e90\u7801\u5b89\u88c5",level:3},{value:"\u4f7f\u7528\u6559\u7a0b",id:"\u4f7f\u7528\u6559\u7a0b",level:2},{value:"1. \u521b\u5efa\u4e3b\u9898 Topic",id:"1-\u521b\u5efa\u4e3b\u9898-topic",level:3},{value:"2. \u521b\u5efa\u6d88\u8d39\u8005\u7ec4 consumer",id:"2-\u521b\u5efa\u6d88\u8d39\u8005\u7ec4-consumer",level:3},{value:"3. \u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9",id:"3-\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9",level:3},{value:"4. \u6269\u5bb9 Topic \u961f\u5217",id:"4-\u6269\u5bb9-topic-\u961f\u5217",level:3},{value:"5. \u6269\u5bb9 Broker",id:"5-\u6269\u5bb9-broker",level:3},{value:"6. \u53d1\u9001\u6d88\u606f",id:"6-\u53d1\u9001\u6d88\u606f",level:3}],k={toc:d};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rocketmq-dashboard"},"RocketMQ Dashboard"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"RocketMQ Dashboard")," \u662f RocketMQ \u7684\u7ba1\u63a7\u5229\u5668\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u5ba2\u6237\u7aef\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u5404\u79cd\u4e8b\u4ef6\u3001\u6027\u80fd\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u652f\u6301\u4ee5\u53ef\u89c6\u5316\u5de5\u5177\u4ee3\u66ff Topic \u914d\u7f6e\u3001Broker \u7ba1\u7406\u7b49\u547d\u4ee4\u884c\u64cd\u4f5c\u3002"),(0,n.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.kt)("h3",{id:"\u529f\u80fd\u6982\u89c8"},"\u529f\u80fd\u6982\u89c8"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9762\u677f"),(0,n.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8fd0\u7ef4"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539nameserver \u5730\u5740;  \u9009\u7528 ",(0,n.kt)("inlineCode",{parentName:"td"},"VIPChannel"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u9a7e\u9a76\u8231"),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b broker, topic \u6d88\u606f\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u5206\u5e03\uff0cbroker \u914d\u7f6e\u3001\u8fd0\u884c\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e3b\u9898"),(0,n.kt)("td",{parentName:"tr",align:null},"\u641c\u7d22\u3001\u7b5b\u9009\u3001\u5220\u9664\u3001\u66f4\u65b0/\u65b0\u589e\u4e3b\u9898\uff0c\u6d88\u606f\u8def\u7531\uff0c\u53d1\u9001\u6d88\u606f\uff0c\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005"),(0,n.kt)("td",{parentName:"tr",align:null},"\u641c\u7d22\u3001\u5220\u9664\u3001\u65b0\u589e/\u66f4\u65b0\u6d88\u8d39\u8005\u7ec4\uff0c\u7ec8\u7aef\uff0c\u6d88\u8d39\u8be6\u60c5\uff0c\u914d\u7f6e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u8bb0\u5f55\uff0c\u79c1\u4fe1\u6d88\u606f\uff0c\u6d88\u606f\u8f68\u8ff9\u7b49\u6d88\u606f\u8be6\u60c5")))),(0,n.kt)("p",null,"\u64cd\u4f5c\u9762\u677f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1657630174311",src:a(75492).Z,width:"1241",height:"831"})),(0,n.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,n.kt)("p",null,"\u7cfb\u7edf\u8981\u6c42\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,n.kt)("li",{parentName:"ol"},"64bit JDK 1.8+"),(0,n.kt)("li",{parentName:"ol"},"Maven 3.2.x"),(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,n.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ")," ")),(0,n.kt)("p",null,"\u7f51\u7edc\u914d\u7f6e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e91\u670d\u52a1\u5668\u53ef\u8fdc\u7a0b\u8bbf\u95ee\u6216\u672c\u5730\u865a\u62df\u673a\u53ef PING \u901a\u5916\u7f51"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"rocketmq")," \u914d\u7f6e\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"li"},"broker.conf / broker-x.properties")," \u8bbe\u7f6e nameserver \u5730\u5740\u548c\u7aef\u53e3\u53f7"),(0,n.kt)("li",{parentName:"ol"},"\u7528\u914d\u7f6e\u6587\u4ef6\u542f\u52a8 broker")),(0,n.kt)("h3",{id:"1-docker-\u955c\u50cf\u5b89\u88c5"},"1. docker \u955c\u50cf\u5b89\u88c5"),(0,n.kt)("p",null,"\u2460 \u5b89\u88c5docker\uff0c\u62c9\u53d6 ",(0,n.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")," \u955c\u50cf"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull apacherocketmq/rocketmq-dashboard:latest\n")),(0,n.kt)("p",null,"\u2461 docker \u5bb9\u5668\u4e2d\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'$ docker run -d --name rocketmq-dashboard -e "JAVA_OPTS=-Drocketmq.namesrv.addr=127.0.0.1:9876" -p 8080:8080 -t apacherocketmq/rocketmq-dashboard:latest\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"namesrv.addr:port")," \u66ff\u6362\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"rocketmq"),"  \u4e2d\u914d\u7f6e\u7684 nameserver \u5730\u5740\uff1a\u7aef\u53e3\u53f7"),(0,n.kt)("p",{parentName:"admonition"},"\u5f00\u653e\u7aef\u53e3\u53f7\uff1a8080\uff0c9876\uff0c10911\uff0c11011 \u7aef\u53e3"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4e91\u670d\u52a1\u5668\uff1a\u8bbe\u7f6e\u5b89\u5168\u7ec4\u8bbf\u95ee\u89c4\u5219"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u865a\u62df\u673a\uff1a\u5173\u95ed\u9632\u706b\u5899\uff0c\u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"-add-port")))),(0,n.kt)("h3",{id:"2-\u6e90\u7801\u5b89\u88c5"},"2. \u6e90\u7801\u5b89\u88c5"),(0,n.kt)("p",null,"\u6e90\u7801\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-dashboard"},"apache/rocketmq-dashboard")," "),(0,n.kt)("p",null,"\u4e0b\u8f7d\u5e76\u89e3\u538b\uff0c\u5207\u6362\u81f3\u6e90\u7801\u76ee\u5f55 ",(0,n.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard-master/")),(0,n.kt)("p",null,"\u2460 \u7f16\u8bd1 ",(0,n.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")," "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn clean package -Dmaven.test.skip=true\n")),(0,n.kt)("p",null,"\u2461 \u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ java -jar target/rocketmq-dashboard-1.0.1-SNAPSHOT.jar\n")),(0,n.kt)("p",null,"\u63d0\u793a\uff1a",(0,n.kt)("strong",{parentName:"p"},"Started App in x.xxx seconds (JVM running for x.xxx)")," \u542f\u52a8\u6210\u529f"),(0,n.kt)("p",null,"\u6d4f\u89c8\u5668\u9875\u9762\u8bbf\u95ee\uff1anamesrv.addr:8080"),(0,n.kt)("p",null,"\u5173\u95ed ",(0,n.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")," : ctrl + c"),(0,n.kt)("p",null,"\u518d\u6b21\u542f\u52a8\uff1a\u6267\u884c \u2461"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"tips"),"\uff1a\u4e0b\u8f7d\u540e\u7684\u6e90\u7801\u9700\u8981\u4e0a\u4f20\u5230 Linux \u7cfb\u7edf\u4e0a\u7f16\u8bd1\uff0c\u672c\u5730\u7f16\u8bd1\u53ef\u80fd\u4f1a\u62a5\u9519\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528\u6559\u7a0b"},"\u4f7f\u7528\u6559\u7a0b"),(0,n.kt)("h3",{id:"1-\u521b\u5efa\u4e3b\u9898-topic"},"1. \u521b\u5efa\u4e3b\u9898 Topic"),(0,n.kt)("p",null,"\u4e3b\u9898 ",(0,n.kt)("inlineCode",{parentName:"p"},">")," \u65b0\u589e/\u66f4\u65b0"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1657547091545",src:a(64879).Z,width:"897",height:"729"})),(0,n.kt)("h3",{id:"2-\u521b\u5efa\u6d88\u8d39\u8005\u7ec4-consumer"},"2. \u521b\u5efa\u6d88\u8d39\u8005\u7ec4 consumer"),(0,n.kt)("p",null,"\u6d88\u8d39\u8005 ",(0,n.kt)("inlineCode",{parentName:"p"},">")," \u65b0\u589e/\u66f4\u65b0"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1657547745254",src:a(63752).Z,width:"897",height:"413"})),(0,n.kt)("h3",{id:"3-\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"},"3. \u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"),(0,n.kt)("p",null,"\u4e3b\u9898 ",(0,n.kt)("inlineCode",{parentName:"p"},">")," \u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1657547891994",src:a(76506).Z,width:"914",height:"482"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"tips"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6d88\u8d39\u652f\u6301\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9, \u5e7f\u64ad\u6a21\u5f0f\u4e0d\u652f\u6301."),(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\u4e0d\u5728\u7ebf\u4e0d\u80fd\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9")),(0,n.kt)("h3",{id:"4-\u6269\u5bb9-topic-\u961f\u5217"},"4. \u6269\u5bb9 Topic \u961f\u5217"),(0,n.kt)("p",null,"\u4e3b\u9898 ",(0,n.kt)("inlineCode",{parentName:"p"},">")," TOPIC\u914d\u7f6e"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1657548375401",src:a(15038).Z,width:"898",height:"492"})),(0,n.kt)("h3",{id:"5-\u6269\u5bb9-broker"},"5. \u6269\u5bb9 Broker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u90e8\u7f72\u4e00\u4e2a\u65b0\u7684 broker, nameserver \u5730\u5740\u548c\u5f53\u524d\u96c6\u7fa4\u4e00\u6837")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1657549432610",src:a(70728).Z,width:"1043",height:"372"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u66f4\u65b0 Topic \u7684BROKER_NAME"),(0,n.kt)("p",{parentName:"li"},"\u4e3b\u9898 ",(0,n.kt)("inlineCode",{parentName:"p"},">")," \u65b0\u589e/\u66f4\u65b0 ",(0,n.kt)("inlineCode",{parentName:"p"},">")," BROKER_NAME"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1657549599728",src:a(54679).Z,width:"1028",height:"415"})),(0,n.kt)("h3",{id:"6-\u53d1\u9001\u6d88\u606f"},"6. \u53d1\u9001\u6d88\u606f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5411\u6307\u5b9a Topic \u53d1\u9001\u6d88\u606f"),(0,n.kt)("p",{parentName:"li"},"\u4e3b\u9898 ",(0,n.kt)("inlineCode",{parentName:"p"},">")," \u53d1\u9001\u6d88\u606f"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1657550506673",src:a(15245).Z,width:"899",height:"550"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53d1\u9001\u7ed3\u679c")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1657550592049",src:a(18955).Z,width:"959",height:"643"})))}c.isMDXComponent=!0},75492:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1_dashboard-ab01f6bdd465d1202b5a7ff715cd6076.png"},64879:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2_createTopic-e384f0c6d87ddb0d73a9be06cbcb4d87.png"},63752:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3_createConsumer-f88ab5dd052b4838381dc1eb1b0afca1.png"},76506:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/4_resetOffset-1eee0933f962ba710d8c7a05119acdf1.png"},15038:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/5_enlargeTopic-2490dbf79885d9e2b434926c09ff4706.png"},70728:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/6_cluster-328c0c9a35f26d6c2890aba4ab488093.png"},54679:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/7_enlargeBroker-5bdd47824115dba426d8596f6c9c67ee.png"},15245:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/8_sendMessage-ea4cdf06c5195eabfc93ef8b6ff482f5.png"},18955:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/9_sendResult-9f60e816de687e657f556555f5c611ff.png"}}]);