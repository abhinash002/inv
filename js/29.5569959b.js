(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"08f6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[a("q-table",{attrs:{title:"Treats",dense:"",data:t.data,columns:t.columns,"row-key":"t_code",separator:t.separator,filter:t.filter,loading:t.loading,"hide-bottom":"",pagination:t.pagination,"no-data-label":"没有找到任何数据","no-results-label":"没有找到您想要的数据","table-style":{height:t.height}},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:"刷新",icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          刷新页面\n        ")])],1),a("q-btn",{attrs:{label:"下载",icon:"cloud_download"},on:{click:function(e){return t.downloadexample()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          将选中的数据下载下来\n        ")])],1),a("q-btn-dropdown",{attrs:{"menu-anchor":"bottom right",label:"日期筛选"}},[a("div",{staticClass:"row no-wrap q-pa-md"},[a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6"},[t._v("起始日期")]),a("q-date",{attrs:{"today-btn":""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}})],1),a("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6"},[t._v("结束日期")]),a("q-date",{attrs:{"today-btn":""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1)]),a("q-btn",{attrs:{label:"日期查询",icon:"search"},on:{click:function(e){return t.DatereFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          确认以日期查询数据\n        ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"本页关键字搜索"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"no-data",fn:function(e){var n=e.icon,o=e.message,i=e.filter;return[a("div",{staticClass:"full-width row flex-center text-accent q-gutter-sm"},[a("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),a("span",[t._v("\n            Well this is sad... "+t._s(o)+"\n          ")]),a("q-icon",{attrs:{size:"2em",name:i?"filter_b_and_w":n}})],1)]}}])}),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-pagination",{staticStyle:{"z-index":"1000"},attrs:{color:"purple",max:t.totlepage,"max-pages":7,"boundary-links":!0,"direction-links":!0,"boundary-numbers":!0},on:{click:function(e){return t.pageChange()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]],2)},o=[],i=a("758b"),r=a("b06b"),s={name:"Pageorderrelease",data:function(){return{pathname:"sodetail/",authorization_get:!1,authorization_post:!1,authorization_getfile:!1,authorization_delete:!1,authorization_patch:!1,separator:"cell",loading:!1,filter:"",totlepage:1,current:1,height:"",columns:[{name:"name",required:!0,label:"入库单号",align:"left",field:"name"},{name:"goods_code",label:"商品编码",field:"goods_code"},{name:"goods_name",label:"商品名称",field:"goods_name"},{name:"so_qty",label:"订单数量",field:"so_qty"},{name:"pick_stock",label:"待拣货数量",field:"pick_stock"},{name:"picked_stock",label:"拣货完成数量",field:"picked_stock"},{name:"shipping_qty",label:"已发货数量",field:"shipping_qty"},{name:"receive_qty",label:"已签收",field:"receive_qty"},{name:"damage_qty",label:"到货破损",field:"damage_qty"},{name:"shortage_qty",label:"到货短少",field:"shortage_qty"},{name:"oos_qty",label:"欠货订单",field:"oos_qty"},{name:"so_status",label:"订单状态",field:"so_status"},{name:"customer",label:"供应商名称",field:"customer"},{name:"create_name",label:"创建人",field:"create_name"},{name:"create_time",label:"创建时间",field:"create_time"},{name:"last_update_time",label:"最后修改时间",field:"last_update_time"}],data:[],pagination:{sortBy:"create_time",descending:!0,page:1,rowsPerPage:50},bin_list:[],date1:"",date2:""}},methods:{authCheck:function(){var t=this,e=this.$q.localStorage.getItem("openid");this.$axios.get(i["a"]+"userauth/",{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,authorization:"1"},data:{}}).then((function(e){"200"===e.data.results.code?0===e.data.results.data.length?(t.authorization_get=!0,t.authorization_post=!0,t.authorization_getfile=!0,t.authorization_delete=!0,t.authorization_patch=!0,t.getList()):1===e.data.results.data.length?(0===e.data.results.data[0].aut1?(t.authorization_get=!0,t.getList()):t.authorization_get=!1,0===e.data.results.data[0].aut2?t.authorization_getfile=!0:t.authorization_getfile=!1,0===e.data.results.data[0].aut3?t.authorization_post=!0:t.authorization_post=!1,0===e.data.results.data[0].aut4?t.authorization_patch=!0:t.authorization_patch=!1,0===e.data.results.data[0].aut5?t.authorization_delete=!0:t.authorization_delete=!1):(t.authorization=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})):(t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500}))})).catch((function(e){t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,console.log(e)}))},getList:function(){var t=this;if(this.authorization_get)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(i["a"]+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,page:this.current,max_page:100,so_status:2,date1:this.date1,date2:this.date2},data:{}}).then((function(e){"200"===e.data.results.code?(t.data=e.data.results.data,t.totlepage=e.data.results.totlepage):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有查询权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},pageChange:function(){this.getList()},reFresh:function(){this.current=1,this.date1="",this.date2="",this.getList()},DatereFresh:function(){this.current=1,this.getList()},downloadexample:function(){this.authorization_getfile?this.$q.localStorage.has("openid")?Object(r["a"])(i["a"]+this.pathname+"?openid="+this.$q.localStorage.getItem("openid")+"&getfile=1"):this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500}):this.$q.notify({message:"您没有下载权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})}},created:function(){},mounted:function(){this.$q.localStorage.has("openid")&&this.authCheck(),this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated:function(){}},c=s,l=a("2877"),u=a("bc30"),d=a("eebe"),p=a.n(d),h=a("eaac"),f=a("e7a9"),g=a("9c40"),m=a("05c0"),_=a("f20b"),b=a("52ee"),q=a("eb85"),y=a("2c91"),z=a("27f9"),v=a("0016"),x=a("3b16"),k=Object(l["a"])(c,n,o,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(k);e["default"]=k.exports;p()(k,"components",{QTable:h["a"],QBtnGroup:f["a"],QBtn:g["a"],QTooltip:m["a"],QBtnDropdown:_["a"],QDate:b["a"],QSeparator:q["a"],QSpace:y["a"],QInput:z["a"],QIcon:v["a"],QPagination:x["a"]})},"3a47":function(t,e){},"758b":function(t,e,a){"use strict";a.d(e,"c",(function(){return p})),a.d(e,"e",(function(){return h})),a.d(e,"d",(function(){return m})),a.d(e,"b",(function(){return _})),a.d(e,"g",(function(){return f})),a.d(e,"f",(function(){return g})),a.d(e,"a",(function(){return s}));a("551c"),a("06db");var n=a("2b0e"),o=a("bc3a"),i=a.n(o),r=a("18d6"),s="http://127.0.0.1:8000/",c=i.a.create({baseURL:s,timeout:5e3}),l=i.a.create({baseURL:s,timeout:5e3}),u=i.a.create({baseURL:s,timeout:5e3}),d=i.a.create({baseURL:s,timeout:5e3});function p(t,e){return c.get(t,{params:e})}function h(t,e,a){return c.post(t,a,{params:e})}function f(t,e){return l.post(t,e)}function g(t,e){return u.post(t,e)}function m(t,e,a){return c.patch(t,a,{params:e})}function _(t,e,a){return d.delete(t,a,{params:e})}u.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.request.use((function(t){var e=r["a"].getItem("authid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),d.interceptors.request.use((function(t){var e=r["a"].getItem("openid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),d.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),n["a"].prototype.$axios=c},bc30:function(t,e,a){"use strict";var n=a("3a47"),o=a.n(n);e["default"]=o.a}}]);