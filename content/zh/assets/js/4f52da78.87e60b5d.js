"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4359],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var l=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,l)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,l,n=function(t,e){if(null==t)return{};var r,l,n={},a=Object.keys(t);for(l=0;l<a.length;l++)r=a[l],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)r=a[l],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=l.createContext({}),u=function(t){var e=l.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return l.createElement(m.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),k=u(r),c=n,d=k["".concat(m,".").concat(c)]||k[c]||s[c]||a;return r?l.createElement(d,i(i({ref:e},p),{},{components:r})):l.createElement(d,i({ref:e},p))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[k]="string"==typeof t?t:n,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9833:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=r(87462),n=(r(67294),r(3905));const a={},i="Metrics",o={unversionedId:"observability/01metrics",id:"version-5.0/observability/01metrics",title:"Metrics",description:"RocketMQ \u4ee5 Prometheus \u683c\u5f0f\u516c\u5f00\u4ee5\u4e0b\u6307\u6807\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u6307\u6807\u76d1\u89c6\u60a8\u7684\u96c6\u7fa4\u3002",source:"@site/versioned_docs/version-5.0/12-observability/01metrics.md",sourceDirName:"12-observability",slug:"/observability/01metrics",permalink:"/zh/docs/observability/01metrics",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/12-observability/01metrics.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ Promethus Exporter",permalink:"/zh/docs/deploymentOperations/05Exporter"},next:{title:"\u57fa\u672c\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/docs/bestPractice/01bestpractice"}},m={},u=[{value:"Metrics \u6307\u6807\u8be6\u60c5",id:"metrics-\u6307\u6807\u8be6\u60c5",level:2},{value:"Metric types",id:"metric-types",level:3},{value:"\u670d\u52a1\u7aef Metrics \u6307\u6807",id:"\u670d\u52a1\u7aef-metrics-\u6307\u6807",level:3},{value:"\u751f\u4ea7\u8005 Metrics \u6307\u6807",id:"\u751f\u4ea7\u8005-metrics-\u6307\u6807",level:3},{value:"\u6d88\u8d39\u8005 Metrics \u6307\u6807",id:"\u6d88\u8d39\u8005-metrics-\u6307\u6807",level:3},{value:"\u6307\u6807\u4e1a\u52a1\u573a\u666f",id:"\u6307\u6807\u4e1a\u52a1\u573a\u666f",level:2},{value:"\u6d88\u606f\u5806\u79ef\u573a\u666f",id:"\u6d88\u606f\u5806\u79ef\u573a\u666f",level:3},{value:"PushConsumer \u6d88\u8d39\u573a\u666f",id:"pushconsumer-\u6d88\u8d39\u573a\u666f",level:3},{value:"Metrics \u6307\u6807\u83b7\u53d6\u65b9\u5f0f",id:"metrics-\u6307\u6807\u83b7\u53d6\u65b9\u5f0f",level:2},{value:"gRPC OTLP exporter",id:"grpc-otlp-exporter",level:3},{value:"Prometheus exporter",id:"prometheus-exporter",level:3}],p={toc:u},k="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,l.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,"RocketMQ \u4ee5 Prometheus \u683c\u5f0f\u516c\u5f00\u4ee5\u4e0b\u6307\u6807\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u6307\u6807\u76d1\u89c6\u60a8\u7684\u96c6\u7fa4\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef Metrics \u6307\u6807"),(0,n.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u8005 Metrics \u6307\u6807"),(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005 Metrics \u6307\u6807")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u7248\u672c\u652f\u6301\uff1a\u4ee5\u4e0b\u6307\u6807 Metrics \u662f\u4ece 5.1.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,n.kt)("h2",{id:"metrics-\u6307\u6807\u8be6\u60c5"},"Metrics \u6307\u6807\u8be6\u60c5"),(0,n.kt)("h3",{id:"metric-types"},"Metric types"),(0,n.kt)("p",null,"\u6d88\u606f\u961f\u5217 RocketMQ \u7248\u5b9a\u4e49\u7684 Metrics \u5b8c\u5168\u517c\u5bb9\u5f00\u6e90 Prometheus \u7684\u6807\u51c6\uff0c\u63d0\u4f9b\u7684 Metrics \u7684\u7c7b\u578b\u4e3a Counter\u3001Gauge \u548c Histogram\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/concepts/metric_types/"},"METRIC TYPES"),"\u3002"),(0,n.kt)("h3",{id:"\u670d\u52a1\u7aef-metrics-\u6307\u6807"},"\u670d\u52a1\u7aef Metrics \u6307\u6807"),(0,n.kt)("p",null,"\u6d88\u606f\u961f\u5217 RocketMQ \u7248\u670d\u52a1\u7aef\u76f8\u5173 Metrics \u6307\u6807\u4e2d Label \u7684\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cluster: RocketMQ \u96c6\u7fa4\u540d\u79f0\u3002"),(0,n.kt)("li",{parentName:"ul"},"node_type: \u670d\u52a1\u8282\u70b9\u7c7b\u578b\u3002\u679a\u4e3e\u503c\u5305\u542b proxy\u3001broker\u3001nameserver\u3002"),(0,n.kt)("li",{parentName:"ul"},"node_id: \u670d\u52a1\u8282\u70b9 ID\u3002"),(0,n.kt)("li",{parentName:"ul"},"topic: \u6d88\u606f\u961f\u5217 RocketMQ \u7684\u4e3b\u9898\u3002"),(0,n.kt)("li",{parentName:"ul"},"message_type: \u6d88\u606f\u7c7b\u578b\u3002\u6709\u4ee5\u4e0b\u7c7b\u578b:",(0,n.kt)("br",null),"Normal:\u666e\u901a\u6d88\u606f;",(0,n.kt)("br",null),"FIFO:\u987a\u5e8f\u6d88\u606f;",(0,n.kt)("br",null),"Transaction:\u4e8b\u52a1\u6d88\u606f;",(0,n.kt)("br",null),"Delay:\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f."),(0,n.kt)("li",{parentName:"ul"},"consumer_group: \u6d88\u8d39\u8005 ID\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Metrics \u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"Metrics name"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null},"Label"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"counter"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_messages_in_total"),(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u751f\u4ea7\u6570\u91cf\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic,message_type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"counter"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_messages_out_total"),(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6d88\u8d39\u6570\u91cf\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"counter"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_throughput_in_total"),(0,n.kt)("td",{parentName:"tr",align:null},"byte"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u751f\u4ea7\u6d41\u5165\u670d\u52a1\u7aef\u7684\u541e\u5410\u91cf\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic,message_type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"counter"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_throughput_out_total"),(0,n.kt)("td",{parentName:"tr",align:null},"byte"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6d88\u8d39\u4ece\u670d\u52a1\u7aef\u6d41\u51fa\u7684\u541e\u5410\u91cf\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"histogram"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_message_size"),(0,n.kt)("td",{parentName:"tr",align:null},"byte"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5927\u5c0f\u7684\u5206\u5e03\u60c5\u51b5\uff0c\u53d1\u9001\u6210\u529f\u65f6\u7edf\u8ba1\u3002\u5206\u5e03\u533a\u95f4\u5982\u4e0b\uff1a",(0,n.kt)("br",null),"le_1_kb: \u2264 1 KB",(0,n.kt)("br",null)," le_4_kb: \u2264 4 KB",(0,n.kt)("br",null),"le_512_kb: \u2264 512 KB",(0,n.kt)("br",null),"le_1_mb: \u2264 1 MB",(0,n.kt)("br",null),"le_2_mb: \u2264 2 MB",(0,n.kt)("br",null),"le_4_mb: \u2264 4 MB",(0,n.kt)("br",null),"le_overflow: > 4 MB"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic,message_type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_ready_messages"),(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\u91cf\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_inflight_messages"),(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u4e2d\u6d88\u606f\u91cf\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_queueing_latency"),(0,n.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\u6392\u961f\u5ef6\u8fdf\u65f6\u95f4\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_lag_latency"),(0,n.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u5904\u7406\u5ef6\u8fdf\u65f6\u95f4\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"counter"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_send_to_dlq_messages_total"),(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8f6c\u4e3a\u6b7b\u4fe1\u72b6\u6001\u7684\u6d88\u606f\u91cf\u3002\uff08\u53d8\u6210\u6b7b\u4fe1\u72b6\u6001\u6307\u7684\u662f\u6d88\u606f\u8fbe\u5230\u6700\u5927\u91cd\u6295\u6b21\u6570\u540e\u4e0d\u518d\u6295\u9012\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"histogram"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_rpc_latency"),(0,n.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,n.kt)("td",{parentName:"tr",align:null},"rpc \u8c03\u7528\u8017\u65f6\uff1a",(0,n.kt)("br",null),"le_1_ms",(0,n.kt)("br",null),"le_3_ms",(0,n.kt)("br",null),"le_5_ms",(0,n.kt)("br",null),"le_10_ms",(0,n.kt)("br",null),"le_100_ms",(0,n.kt)("br",null),"le_1_s",(0,n.kt)("br",null),"le_3_s",(0,n.kt)("br",null),"le_overflow"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_typ,node_id,protocol_type,request_code,response_code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_storage_message_reserve_time"),(0,n.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,n.kt)("td",{parentName:"tr",align:null},"\u50a8\u5b58\u5c42\u6d88\u606f\u4fdd\u5b58\u65f6\u95f4\uff08broker \u786c\u76d8\u4e0a\u6700\u65e9\u4e00\u6761\u6d88\u606f\u50a8\u5b58\u65f6\u95f4\u548c\u5f53\u524d\u65f6\u95f4\u4f5c\u5dee\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_storage_dispatch_behind_bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"byte"),(0,n.kt)("td",{parentName:"tr",align:null},"dispatch \u843d\u540e\u5927\u5c0f"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_storage_flush_behind_bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"byte"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5237\u76d8\u843d\u540e\u5927\u5c0f\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_thread_pool_wartermark"),(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u6c60\u6392\u961f\u6570"),(0,n.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,name")))),(0,n.kt)("h3",{id:"\u751f\u4ea7\u8005-metrics-\u6307\u6807"},"\u751f\u4ea7\u8005 Metrics \u6307\u6807"),(0,n.kt)("p",null,"\u6d88\u606f\u961f\u5217 RocketMQ \u7248\u751f\u4ea7\u8005\u76f8\u5173 Metrics \u6307\u6807\u4e2d Label \u7684\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cluster: RocketMQ \u96c6\u7fa4\u540d\u79f0\u3002"),(0,n.kt)("li",{parentName:"ul"},"node_type: \u670d\u52a1\u8282\u70b9\u7c7b\u578b\u3002\u679a\u4e3e\u503c\u5305\u542b proxy\u3001broker\u3001nameserver\u3002"),(0,n.kt)("li",{parentName:"ul"},"node_id: \u670d\u52a1\u8282\u70b9 ID\u3002"),(0,n.kt)("li",{parentName:"ul"},"topic: \u6d88\u606f\u961f\u5217 RocketMQ \u7684\u4e3b\u9898\u3002"),(0,n.kt)("li",{parentName:"ul"},"message_type: \u6d88\u606f\u7c7b\u578b\u3002\u6709\u4ee5\u4e0b\u7c7b\u578b:",(0,n.kt)("br",null),"Normal:\u666e\u901a\u6d88\u606f;",(0,n.kt)("br",null),"FIFO:\u987a\u5e8f\u6d88\u606f;",(0,n.kt)("br",null),"Transaction:\u4e8b\u52a1\u6d88\u606f;",(0,n.kt)("br",null),"Delay:\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f."),(0,n.kt)("li",{parentName:"ul"},"client_id: \u5ba2\u6237\u7aef ID\u3002"),(0,n.kt)("li",{parentName:"ul"},"invocation_status: \u6d88\u606f\u53d1\u9001\u63a5\u53e3\u8c03\u7528\u7ed3\u679c\uff0c\u679a\u4e3e\u503c\u5305\u542b success \u548c failure\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Metrics \u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"Metrics name"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null},"Label"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_send_cost_time"),(0,n.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6d88\u606f\u53d1\u9001\u63a5\u53e3\u6210\u529f\u7684\u8017\u65f6\u5206\u5e03\u60c5\u51b5\u3002\u5206\u5e03\u533a\u95f4\u5982\u4e0b\uff1a: ",(0,n.kt)("br",null),"le_1_ms ",(0,n.kt)("br",null),"le_5_ms",(0,n.kt)("br",null),"le_10_ms",(0,n.kt)("br",null),"le_20_ms ",(0,n.kt)("br",null),"le_50_ms ",(0,n.kt)("br",null),"le_200_ms",(0,n.kt)("br",null),"le_500_ms ",(0,n.kt)("br",null),"le_overflow"),(0,n.kt)("td",{parentName:"tr",align:null},"topic,client_id,invocation_status")))),(0,n.kt)("h3",{id:"\u6d88\u8d39\u8005-metrics-\u6307\u6807"},"\u6d88\u8d39\u8005 Metrics \u6307\u6807"),(0,n.kt)("p",null,"\u6d88\u606f\u961f\u5217 RocketMQ \u7248\u6d88\u8d39\u8005\u76f8\u5173 Metrics \u6307\u6807\u4e2d Label \u7684\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"topic: \u6d88\u606f\u961f\u5217 RocketMQ \u7684\u4e3b\u9898\u3002"),(0,n.kt)("li",{parentName:"ul"},"consumer_group: \u6d88\u8d39\u8005\u5206\u7ec4 ID\u3002"),(0,n.kt)("li",{parentName:"ul"},"client_id: \u5ba2\u6237\u7aef ID\u3002"),(0,n.kt)("li",{parentName:"ul"},"invocation_status: \u6d88\u8d39\u7ed3\u679c, \u679a\u4e3e\u503c\u5305\u542b success \u548c failure\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Metrics \u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"Metrics name"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null},"Label"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_process_time"),(0,n.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,n.kt)("td",{parentName:"tr",align:null},"PushConsumer \u7684\u6d88\u606f\u5904\u7406\u8017\u65f6\u5206\u5e03\u60c5\u51b5.\u5206\u5e03\u533a\u95f4\u5982\u4e0b: ",(0,n.kt)("br",null),"le_1_ms ",(0,n.kt)("br",null),"le_5_ms \xa0",(0,n.kt)("br",null),"le_10_ms",(0,n.kt)("br",null),"le_100_ms ",(0,n.kt)("br",null),"le_10000_ms",(0,n.kt)("br",null),"le_60000_ms ",(0,n.kt)("br",null),"le_overflow"),(0,n.kt)("td",{parentName:"tr",align:null},"topic,consumer_group,client_id,invocation_status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_cached_messages"),(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},"PushConsumer \u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6d88\u606f\u6761\u6570\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"topic,consumer_group,client_id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gauge"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_cached_bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"byte"),(0,n.kt)("td",{parentName:"tr",align:null},"PushConsumer \u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u6d88\u606f\u7684\u603b\u5927\u5c0f\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"topic,consumer_group,client_id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,n.kt)("td",{parentName:"tr",align:null},"rocketmq_await_time"),(0,n.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5728 PushConsumer \u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6392\u961f\u65f6\u95f4\u7684\u5206\u5e03\u60c5\u51b5:",(0,n.kt)("br",null),"le_1_ms",(0,n.kt)("br",null)," le_5_ms",(0,n.kt)("br",null),"le_20_ms",(0,n.kt)("br",null),"le_100_ms ",(0,n.kt)("br",null),"le_1000_ms",(0,n.kt)("br",null)," le_5000_ms ",(0,n.kt)("br",null),"le_10000_ms",(0,n.kt)("br",null),"le_overflow"),(0,n.kt)("td",{parentName:"tr",align:null},"topic,consumer_group,client_id")))),(0,n.kt)("h2",{id:"\u6307\u6807\u4e1a\u52a1\u573a\u666f"},"\u6307\u6807\u4e1a\u52a1\u573a\u666f"),(0,n.kt)("p",null,"\u6d88\u606f\u961f\u5217 RocketMQ \u7248\u4e3b\u8981\u57fa\u4e8e\u4ee5\u4e0b\u4e1a\u52a1\u573a\u666f\u5b9a\u4e49 Metrics \u6307\u6807."),(0,n.kt)("h3",{id:"\u6d88\u606f\u5806\u79ef\u573a\u666f"},"\u6d88\u606f\u5806\u79ef\u573a\u666f"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RocketMQ \u961f\u5217\u6d88\u606f\u72b6\u6001",src:r(46444).Z,width:"1213",height:"635"}),(0,n.kt)("br",null),"\u4e0a\u56fe\u8868\u793a\u6307\u5b9a\u4e3b\u9898\u7684\u67d0\u4e00\u961f\u5217\u4e2d\u5404\u6d88\u606f\u7684\u72b6\u6001\uff0c\u6d88\u606f\u961f\u5217 RocketMQ \u7248\u5c06\u5904\u4e8e\u4e0d\u540c\u5904\u7406\u9636\u6bb5\u7684\u6d88\u606f\u6570\u91cf\u548c\u8017\u65f6\u8fdb\u884c\u7edf\u8ba1\uff0c\u8fd9\u4e9b\u6307\u6807\u53ef\u76f4\u63a5\u53cd\u6620\u961f\u5217\u4e2d\u6d88\u606f\u7684\u5904\u7406\u901f\u7387\u548c\u5806\u79ef\u60c5\u51b5\uff0c\u901a\u8fc7\u89c2\u5bdf\u8fd9\u4e9b\u6307\u6807\u53ef\u521d\u6b65\u5224\u65ad\u4e1a\u52a1\u7684\u6d88\u8d39\u662f\u5426\u5f02\u5e38\u3002\u5177\u4f53\u7684\u6307\u6807\u542b\u4e49\u548c\u8ba1\u7b97\u516c\u5f0f\u5982\u4e0b\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8ba1\u7b97\u516c\u5f0f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u4e2d\u7684\u6d88\u606f\uff08inflight messages\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5728\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u6b63\u5728\u5904\u7406\uff0c\u4f46\u5ba2\u6237\u7aef\u8fd8\u672a\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u7684\u6d88\u606f\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6700\u665a\u4e00\u6761\u62c9\u53d6\u6d88\u606f\u7684\u4f4d\u70b9\uff0d\u6700\u665a\u4e00\u6761\u63d0\u4ea4\u6d88\u606f\u7684\u4f4d\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\uff08ready messages\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5728\u6d88\u606f\u961f\u5217 RocketMQ \u7248\u670d\u52a1\u7aef\u5df2\u5c31\u7eea\uff0c\u5bf9\u6d88\u8d39\u8005\u53ef\u89c1\u53ef\u88ab\u6d88\u8d39\u7684\u6d88\u606f\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u6d88\u8d39\u4f4d\u70b9\uff0d\u6700\u665a\u4e00\u6761\u62c9\u53d6\u6d88\u606f\u7684\u4f4d\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\u7684\u5c31\u7eea\u65f6\u95f4\uff08ready time\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u666e\u901a\u6d88\u606f\u3001\u987a\u5e8f\u6d88\u606f\uff1a\u6d88\u606f\u5b58\u50a8\u5230\u670d\u52a1\u7aef\u7684\u65f6\u95f4\u3002\xa0",(0,n.kt)("br",null)," \u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\uff1a\u6d88\u606f\u5b9a\u65f6\u6216\u5ef6\u65f6\u7ed3\u675f\u7684\u65f6\u95f4\u3002 ",(0,n.kt)("br",null)," \xa0 \u4e8b\u52a1\u6d88\u606f\uff1a\u4e8b\u52a1\u63d0\u4ea4\u7684\u65f6\u95f4\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"--")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\u7684\u6392\u961f\u65f6\u95f4\uff08ready message queue time\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8be5\u65f6\u95f4\u53cd\u5e94\u6d88\u8d39\u8005\u62c9\u53d6\u6d88\u606f\u7684\u53ca\u65f6\u6027\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u65f6\u95f4\uff0d\u6700\u65e9\u4e00\u6761\u5c31\u7eea\u6d88\u606f\u7684\u5c31\u7eea\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u5904\u7406\u6ede\u540e\u65f6\u95f4\uff08consumer lag time\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8be5\u65f6\u95f4\u53cd\u5e94\u6d88\u8d39\u8005\u5b8c\u6210\u6d88\u606f\u5904\u7406\u7684\u53ca\u65f6\u6027\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u65f6\u95f4\uff0d\u6700\u65e9\u4e00\u6761\u672a\u63d0\u4ea4\u6d88\u606f\u7684\u5c31\u7eea\u65f6\u95f4")))),(0,n.kt)("h3",{id:"pushconsumer-\u6d88\u8d39\u573a\u666f"},"PushConsumer \u6d88\u8d39\u573a\u666f"),(0,n.kt)("p",null,"\u5728 PushConsumer \u7c7b\u578b\u4e2d\uff0c\u6d88\u606f\u7684\u5b9e\u65f6\u5904\u7406\u80fd\u529b\u662f\u57fa\u4e8e SDK \u5185\u90e8\u7684\u5178\u578b Reactor \u7ebf\u7a0b\u6a21\u578b\u5b9e\u73b0\u7684\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0cSDK \u5185\u7f6e\u4e86\u4e00\u4e2a\u957f\u8f6e\u8be2\u7ebf\u7a0b\uff0c\u5148\u5c06\u6d88\u606f\u5f02\u6b65\u62c9\u53d6\u5230 SDK \u5185\u7f6e\u7684\u7f13\u5b58\u961f\u5217\u4e2d\uff0c\u518d\u5206\u522b\u63d0\u4ea4\u5230\u6d88\u8d39\u7ebf\u7a0b\u4e2d\uff0c\u89e6\u53d1\u76d1\u542c\u5668\u6267\u884c\u672c\u5730\u6d88\u8d39\u903b\u8f91\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"PushConsumer client",src:r(84161).Z,width:"1392",height:"691"}),(0,n.kt)("br",null),"\u5728 PushConsumer \u6d88\u8d39\u573a\u666f\u4e0b\uff0c\u672c\u5730\u7f13\u51b2\u961f\u5217\u76f8\u5173\u6307\u6807\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6d88\u606f\u91cf\uff1a\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6d88\u606f\u603b\u6761\u6570\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6d88\u606f\u5927\u5c0f\uff1a\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u6240\u6709\u6d88\u606f\u5927\u5c0f\u7684\u603b\u548c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6d88\u606f\u7b49\u5f85\u5904\u7406\u65f6\u95f4\uff1a\u6d88\u606f\u6682\u5b58\u5728\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u65f6\u95f4\u3002")),(0,n.kt)("h2",{id:"metrics-\u6307\u6807\u83b7\u53d6\u65b9\u5f0f"},"Metrics \u6307\u6807\u83b7\u53d6\u65b9\u5f0f"),(0,n.kt)("p",null,"\u76ee\u524d\u652f\u6301 gRPC OTLP \u548c Prometheus \u4e24\u79cd exporter"),(0,n.kt)("h3",{id:"grpc-otlp-exporter"},"gRPC OTLP exporter"),(0,n.kt)("p",null,"gRPC OTLP exporter \u4f1a\u5468\u671f\u6027\u5730\u5411\u6307\u5b9a\u7684 OpenTelemetry Collector \u4e0a\u62a5 metrics"),(0,n.kt)("p",null,"\u524d\u7f6e\u6761\u4ef6\uff1a\u9700\u8981\u90e8\u7f72\u652f\u6301 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/oteps/blob/main/text/0035-opentelemetry-protocol.md"},"GRPC OpenTelemetry Protocol")," \u7684 OpenTelemetry Collector"),(0,n.kt)("p",null,"\u5f00\u542f Broker metrics \u7684 gRPC OTLP exporter \u9700\u8981\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"li"},"metricsExporterType")," \u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"OTLP_GRPC")),(0,n.kt)("li",{parentName:"ol"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"li"},"getMetricsGrpcExporterTarget")," \u8bbe\u7f6e\u4e3a OpenTelemetry Collector \u63d0\u4f9b\u7684 endpoint")),(0,n.kt)("p",null,"\u53ef\u9009\u914d\u7f6e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"metricsGrpcExporterHeader"),"\uff1a\u4e3a gRPC OTLP exporter \u9644\u52a0\u8bf7\u6c42\u5934\uff0c\u683c\u5f0f\u4e3a key1:value1,key2:value2"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"metricGrpcExporterTimeOutInMills"),"\uff1a\u8bbe\u7f6e gRPC OTLP exporter \u7684\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"metricGrpcExporterIntervalInMills"),"\uff1a\u8bbe\u7f6e gRPC OTLP exporter \u7684\u4e0a\u62a5\u95f4\u9694")),(0,n.kt)("h3",{id:"prometheus-exporter"},"Prometheus exporter"),(0,n.kt)("p",null,"Prometheus exporter \u4ec5\u652f\u6301 Pull \u6a21\u5f0f\u548c Cumulative \u805a\u5408\uff0c\u8be6\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/reference/specification/metrics/sdk_exporters/prometheus/"},"OpenTelemetry Metrics Exporter - Prometheus")),(0,n.kt)("p",null,"\u5f00\u542f Broker metrics \u7684 Prometheus exporter \u9700\u8981\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"li"},"metricsExporterType")," \u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"PROM"))),(0,n.kt)("p",null,"\u8bbf\u95ee ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<broker-ip>:5557/metrics")," \u6765\u67e5\u770b metrics\uff0c\u5728 Prometheus \u4e2d\u914d\u7f6e\u670d\u52a1\u53d1\u73b0\u6216\u624b\u52a8\u914d\u7f6e\u62c9\u53d6\u4efb\u52a1\u5373\u53ef\u91c7\u96c6 metrics"),(0,n.kt)("p",null,"\u53ef\u9009\u914d\u7f6e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"metricsPromExporterPort"),"\uff1aBroker \u66b4\u9732 metrics \u670d\u52a1\u7684\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"5557")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"metricGrpcExporterTimeOutInMills"),"\uff1a\u66b4\u9732 metrics \u670d\u52a1\u7684\u4e3b\u673a\u540d\uff0c\u9ed8\u8ba4\u4e3a Broker \u5411 NameServer \u6ce8\u518c\u7684\u5730\u5740\uff0c\u5373 ",(0,n.kt)("inlineCode",{parentName:"li"},"brokerIP1"))))}s.isMDXComponent=!0},46444:(t,e,r)=>{r.d(e,{Z:()=>l});const l=r.p+"assets/images/message-accumulation-4edf6e541f775da11672dac6d795305f.png"},84161:(t,e,r)=>{r.d(e,{Z:()=>l});const l=r.p+"assets/images/pushconsumer-consumption-4910ceb35c5f21c6f74aa07fb3f79134.png"}}]);