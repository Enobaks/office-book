(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[177],{2387:function(e,s,a){"use strict";a.r(s);var t=a(1),c=a.n(t),l=a(696),r=a(693),i=a(697),d=a(712),j=a(2),n=(a(709),a(722),a(710),a(711)),h=a.n(n),b=a(0),m=function(e){return Object(t.useEffect)((function(){h.a.makeChart("widget-line-chart",{type:"serial",addClassNames:!0,defs:{filter:[{x:"-50%",y:"-50%",width:"200%",height:"200%",id:"blur",feGaussianBlur:{in:"SourceGraphic",stdDeviation:"30"}},{id:"shadow",x:"-10%",y:"-10%",width:"120%",height:"120%",feOffset:{result:"offOut",in:"SourceAlpha",dx:"0",dy:"20"},feGaussianBlur:{result:"blurOut",in:"offOut",stdDeviation:"10"},feColorMatrix:{result:"blurOut",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"},feBlend:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}}]},fontSize:15,dataProvider:[{day:"Mon",value:60},{day:"Tue",value:45},{day:"Wed",value:70},{day:"Thu",value:55},{day:"Fri",value:70},{day:"Sat",value:55},{day:"Sun",value:70}],autoMarginOffset:0,marginRight:0,categoryField:"day",categoryAxis:{color:"#fff",gridAlpha:0,axisAlpha:0,lineAlpha:0,offset:-20,inside:!0},valueAxes:[{fontSize:0,inside:!0,gridAlpha:0,axisAlpha:0,lineAlpha:0,minimum:0,maximum:100}],chartCursor:{valueLineEnabled:!1,valueLineBalloonEnabled:!1,cursorAlpha:0,zoomable:!1,valueZoomable:!1,cursorColor:"#fff",categoryBalloonColor:"#51b4e6",valueLineAlpha:0},graphs:[{id:"g1",type:"line",valueField:"value",lineColor:"#ffffff",lineAlpha:1,lineThickness:3,fillAlphas:0,showBalloon:!0,balloon:{drop:!0,adjustBorderColor:!1,color:"#ffffff",fillAlphas:.2,bullet:"round",bulletBorderAlpha:1,bulletSize:5,hideBulletsCount:50,lineThickness:2,useLineColorForBulletBorder:!0,valueField:"value",balloonText:"<span style='font-size:18px;'>[[value]]</span>"}}]})})),Object(b.jsx)("div",{id:"widget-line-chart",className:"WidgetlineChart2 ChartShadow",style:{width:"100%",height:e.height}})},x=function(e){return Object(t.useEffect)((function(){h.a.makeChart("bar-chart2",{type:"serial",theme:"light",marginTop:10,marginRight:0,valueAxes:[{id:"v1",position:"left",axisAlpha:0,lineAlpha:0,autoGridCount:!1,labelFunction:function(e){return+Math.round(e)+"00"}}],graphs:[{id:"g1",valueAxis:"v1",lineColor:["#1de9b6","#1dc4e9"],fillColors:["#1de9b6","#1dc4e9"],fillAlphas:1,type:"column",title:"SALES",valueField:"sales",columnWidth:.3,legendValueText:"$[[value]]M",balloonText:"[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"},{id:"g2",valueAxis:"v1",lineColor:["#a389d4","#899ed4"],fillColors:["#a389d4","#899ed4"],fillAlphas:1,type:"column",title:"VISITS ",valueField:"visits",columnWidth:.3,legendValueText:"$[[value]]M",balloonText:"[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"},{id:"g3",valueAxis:"v1",lineColor:["#04a9f5","#049df5"],fillColors:["#04a9f5","#049df5"],fillAlphas:1,type:"column",title:"CLICKS",valueField:"clicks",columnWidth:.3,legendValueText:"$[[value]]M",balloonText:"[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"}],chartCursor:{pan:!0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,cursorAlpha:0,valueLineAlpha:.2},categoryField:"Year",categoryAxis:{dashLength:1,gridAlpha:0,axisAlpha:0,lineAlpha:0,minorGridEnabled:!0},legend:{useGraphSettings:!0,position:"top"},balloon:{borderThickness:1,shadowAlpha:0},dataProvider:[{Year:"2014",sales:2,visits:4,clicks:3},{Year:"2015",sales:4,visits:7,clicks:5},{Year:"2016",sales:2,visits:3,clicks:4},{Year:"2017",sales:4.5,visits:6,clicks:4}]})})),Object(b.jsx)("div",{id:"bar-chart2",className:"bar-chart2",style:{width:"100%",height:e.height}})},o=a(125),O=a(179),u=a(180);s.default=function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(r.a,{md:6,xl:4,children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(i.a.Body,{children:[Object(b.jsx)("h6",{className:"mb-4",children:"Daily Sales"}),Object(b.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(b.jsx)("div",{className:"col-9",children:Object(b.jsxs)("h3",{className:"f-w-300 d-flex align-items-center m-b-0",children:[Object(b.jsx)("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," $249.95"]})}),Object(b.jsx)("div",{className:"col-3 text-right",children:Object(b.jsx)("p",{className:"m-b-0",children:"50%"})})]}),Object(b.jsx)("div",{className:"progress m-t-30",style:{height:"7px"},children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})})]})})}),Object(b.jsx)(r.a,{md:6,xl:4,children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(i.a.Body,{children:[Object(b.jsx)("h6",{className:"mb-4",children:"Monthly Sales"}),Object(b.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(b.jsx)("div",{className:"col-9",children:Object(b.jsxs)("h3",{className:"f-w-300 d-flex align-items-center m-b-0",children:[Object(b.jsx)("i",{className:"feather icon-arrow-down text-c-red f-30 m-r-5"})," $2.942.32"]})}),Object(b.jsx)("div",{className:"col-3 text-right",children:Object(b.jsx)("p",{className:"m-b-0",children:"36%"})})]}),Object(b.jsx)("div",{className:"progress m-t-30",style:{height:"7px"},children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme2",role:"progressbar",style:{width:"35%"},"aria-valuenow":"35","aria-valuemin":"0","aria-valuemax":"100"})})]})})}),Object(b.jsx)(r.a,{xl:4,children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(i.a.Body,{children:[Object(b.jsx)("h6",{className:"mb-4",children:"Yearly Sales"}),Object(b.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(b.jsx)("div",{className:"col-9",children:Object(b.jsxs)("h3",{className:"f-w-300 d-flex align-items-center m-b-0",children:[Object(b.jsx)("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," $8.638.32"]})}),Object(b.jsx)("div",{className:"col-3 text-right",children:Object(b.jsx)("p",{className:"m-b-0",children:"70%"})})]}),Object(b.jsx)("div",{className:"progress m-t-30",style:{height:"7px"},children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"70%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"})})]})})}),Object(b.jsx)(r.a,{md:6,xl:8,children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(i.a.Header,{children:Object(b.jsx)(i.a.Title,{as:"h5",children:"Statistics"})}),Object(b.jsx)(i.a.Body,{children:Object(b.jsx)(x,{height:"450px"})})]})}),Object(b.jsxs)(r.a,{md:6,xl:4,children:[Object(b.jsxs)(i.a,{className:"bg-c-blue",children:[Object(b.jsx)(i.a.Header,{className:"borderless",children:Object(b.jsx)(i.a.Title,{as:"h5",className:"text-white",children:"Earnings"})}),Object(b.jsxs)(i.a.Body,{style:{padding:"0 25px"},children:[Object(b.jsxs)("div",{className:"earning-text mb-0",children:[Object(b.jsxs)("h3",{className:"mb-2 text-white f-w-300",children:[" ","$4295.36 ",Object(b.jsx)("i",{className:"feather icon-arrow-up teal accent-3"})]}),Object(b.jsx)("span",{className:"text-uppercase text-white d-block",children:"Total Earnings"})]}),Object(b.jsx)(m,{height:"180px"})]})]}),Object(b.jsxs)(i.a,{children:[Object(b.jsx)(i.a.Body,{className:"border-bottom",children:Object(b.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("i",{className:"feather icon-zap f-30 text-c-green"})}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h3",{className:"f-w-300",children:"235"}),Object(b.jsx)("span",{className:"d-block text-uppercase",children:"total ideas"})]})]})}),Object(b.jsx)(i.a.Body,{children:Object(b.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("i",{className:"feather icon-map-pin f-30 text-c-blue"})}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h3",{className:"f-w-300",children:"26"}),Object(b.jsx)("span",{className:"d-block text-uppercase",children:"total locations"})]})]})})]})]}),Object(b.jsx)(r.a,{md:6,xl:4,children:Object(b.jsxs)(i.a,{className:"card-social",children:[Object(b.jsx)(i.a.Body,{className:"border-bottom",children:Object(b.jsxs)("div",{className:"row align-items-center justify-content-center",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("i",{className:"fab fa-facebook-f text-primary f-36"})}),Object(b.jsxs)("div",{className:"col text-right",children:[Object(b.jsx)("h3",{children:"12,281"}),Object(b.jsxs)("h5",{className:"text-c-green mb-0",children:["+7.2% ",Object(b.jsx)("span",{className:"text-muted",children:"Total Likes"})]})]})]})}),Object(b.jsx)(i.a.Body,{children:Object(b.jsxs)("div",{className:"row align-items-center justify-content-center card-active",children:[Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsxs)("h6",{className:"text-center m-b-10",children:[Object(b.jsx)("span",{className:"text-muted m-r-5",children:"Target:"}),"35,098"]}),Object(b.jsx)("div",{className:"progress",children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"60%",height:"6px"},"aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsxs)("h6",{className:"text-center  m-b-10",children:[Object(b.jsx)("span",{className:"text-muted m-r-5",children:"Duration:"}),"350"]}),Object(b.jsx)("div",{className:"progress",children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme2",role:"progressbar",style:{width:"45%",height:"6px"},"aria-valuenow":"45","aria-valuemin":"0","aria-valuemax":"100"})})]})]})})]})}),Object(b.jsx)(r.a,{md:6,xl:4,children:Object(b.jsxs)(i.a,{className:"card-social",children:[Object(b.jsx)(i.a.Body,{className:"border-bottom",children:Object(b.jsxs)("div",{className:"row align-items-center justify-content-center",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("i",{className:"fab fa-twitter text-c-blue f-36"})}),Object(b.jsxs)("div",{className:"col text-right",children:[Object(b.jsx)("h3",{children:"11,200"}),Object(b.jsxs)("h5",{className:"text-c-purple mb-0",children:["+6.2% ",Object(b.jsx)("span",{className:"text-muted",children:"Total Likes"})]})]})]})}),Object(b.jsx)(i.a.Body,{children:Object(b.jsxs)("div",{className:"row align-items-center justify-content-center card-active",children:[Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsxs)("h6",{className:"text-center m-b-10",children:[Object(b.jsx)("span",{className:"text-muted m-r-5",children:"Target:"}),"34,185"]}),Object(b.jsx)("div",{className:"progress",children:Object(b.jsx)("div",{className:"progress-bar progress-c-green",role:"progressbar",style:{width:"40%",height:"6px"},"aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsxs)("h6",{className:"text-center  m-b-10",children:[Object(b.jsx)("span",{className:"text-muted m-r-5",children:"Duration:"}),"800"]}),Object(b.jsx)("div",{className:"progress",children:Object(b.jsx)("div",{className:"progress-bar progress-c-blue",role:"progressbar",style:{width:"70%",height:"6px"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"})})]})]})})]})}),Object(b.jsx)(r.a,{xl:4,children:Object(b.jsxs)(i.a,{className:"card-social",children:[Object(b.jsx)(i.a.Body,{className:"border-bottom",children:Object(b.jsxs)("div",{className:"row align-items-center justify-content-center",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("i",{className:"fab fa-google-plus-g text-c-red f-36"})}),Object(b.jsxs)("div",{className:"col text-right",children:[Object(b.jsx)("h3",{children:"10,500"}),Object(b.jsxs)("h5",{className:"text-c-blue mb-0",children:["+5.9% ",Object(b.jsx)("span",{className:"text-muted",children:"Total Likes"})]})]})]})}),Object(b.jsx)(i.a.Body,{children:Object(b.jsxs)("div",{className:"row align-items-center justify-content-center card-active",children:[Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsxs)("h6",{className:"text-center m-b-10",children:[Object(b.jsx)("span",{className:"text-muted m-r-5",children:"Target:"}),"25,998"]}),Object(b.jsx)("div",{className:"progress",children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"80%",height:"6px"},"aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsxs)("h6",{className:"text-center  m-b-10",children:[Object(b.jsx)("span",{className:"text-muted m-r-5",children:"Duration:"}),"900"]}),Object(b.jsx)("div",{className:"progress",children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme2",role:"progressbar",style:{width:"50%",height:"6px"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})})]})]})})]})}),Object(b.jsx)(r.a,{md:6,xl:4,children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(i.a.Header,{children:Object(b.jsx)(i.a.Title,{as:"h5",children:"Rating"})}),Object(b.jsxs)(i.a.Body,{children:[Object(b.jsxs)("div",{className:"row align-items-center justify-content-center m-b-20",children:[Object(b.jsx)("div",{className:"col-6",children:Object(b.jsxs)("h2",{className:"f-w-300 d-flex align-items-center float-left m-0",children:["4.7 ",Object(b.jsx)("i",{className:"fa fa-star f-10 m-l-10 text-c-yellow"})]})}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsxs)("h6",{className:"d-flex  align-items-center float-right m-0",children:["0.4 ",Object(b.jsx)("i",{className:"fa fa-caret-up text-c-green f-22 m-l-10"})]})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-xl-12",children:[Object(b.jsxs)("h6",{className:"align-items-center float-left",children:[Object(b.jsx)("i",{className:"fa fa-star f-10 m-r-10 text-c-yellow"}),"5"]}),Object(b.jsx)("h6",{className:"align-items-center float-right",children:"384"}),Object(b.jsx)("div",{className:"progress m-t-30 m-b-20",style:{height:"6px"},children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"70%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(b.jsxs)("div",{className:"col-xl-12",children:[Object(b.jsxs)("h6",{className:"align-items-center float-left",children:[Object(b.jsx)("i",{className:"fa fa-star f-10 m-r-10 text-c-yellow"}),"4"]}),Object(b.jsx)("h6",{className:"align-items-center float-right",children:"145"}),Object(b.jsx)("div",{className:"progress m-t-30  m-b-20",style:{height:"6px"},children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"35%"},"aria-valuenow":"35","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(b.jsxs)("div",{className:"col-xl-12",children:[Object(b.jsxs)("h6",{className:"align-items-center float-left",children:[Object(b.jsx)("i",{className:"fa fa-star f-10 m-r-10 text-c-yellow"}),"3"]}),Object(b.jsx)("h6",{className:"align-items-center float-right",children:"24"}),Object(b.jsx)("div",{className:"progress m-t-30  m-b-20",style:{height:"6px"},children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"25%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(b.jsxs)("div",{className:"col-xl-12",children:[Object(b.jsxs)("h6",{className:"align-items-center float-left",children:[Object(b.jsx)("i",{className:"fa fa-star f-10 m-r-10 text-c-yellow"}),"2"]}),Object(b.jsx)("h6",{className:"align-items-center float-right",children:"1"}),Object(b.jsx)("div",{className:"progress m-t-30  m-b-20",style:{height:"6px"},children:Object(b.jsx)("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"10%"},"aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(b.jsxs)("div",{className:"col-xl-12",children:[Object(b.jsxs)("h6",{className:"align-items-center float-left",children:[Object(b.jsx)("i",{className:"fa fa-star f-10 m-r-10 text-c-yellow"}),"1"]}),Object(b.jsx)("h6",{className:"align-items-center float-right",children:"0"}),Object(b.jsx)("div",{className:"progress m-t-30  m-b-5",style:{height:"6px"},children:Object(b.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"})})]})]})]})]})}),Object(b.jsx)(r.a,{md:6,xl:8,children:Object(b.jsxs)(i.a,{className:"Recent-Users",children:[Object(b.jsx)(i.a.Header,{children:Object(b.jsx)(i.a.Title,{as:"h5",children:"Recent Users"})}),Object(b.jsx)(i.a.Body,{className:"px-0 py-2",children:Object(b.jsx)(d.a,{responsive:!0,hover:!0,children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{className:"unread",children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{className:"rounded-circle",style:{width:"40px"},src:o.default,alt:"activity-user"})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("h6",{className:"mb-1",children:"Isabella Christensen"}),Object(b.jsx)("p",{className:"m-0",children:"Lorem Ipsum is simply dummy text of\u2026"})]}),Object(b.jsx)("td",{children:Object(b.jsxs)("h6",{className:"text-muted",children:[Object(b.jsx)("i",{className:"fa fa-circle text-c-green f-10 m-r-15"}),"11 MAY 12:56"]})}),Object(b.jsxs)("td",{children:[Object(b.jsx)(j.b,{to:"#",className:"label theme-bg2 text-white f-12",children:"Reject"}),Object(b.jsx)(j.b,{to:"#",className:"label theme-bg text-white f-12",children:"Approve"})]})]}),Object(b.jsxs)("tr",{className:"unread",children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{className:"rounded-circle",style:{width:"40px"},src:O.default,alt:"activity-user"})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("h6",{className:"mb-1",children:"Mathilde Andersen"}),Object(b.jsx)("p",{className:"m-0",children:"Lorem Ipsum is simply dummy text of\u2026"})]}),Object(b.jsx)("td",{children:Object(b.jsxs)("h6",{className:"text-muted",children:[Object(b.jsx)("i",{className:"fa fa-circle text-c-red f-10 m-r-15"}),"11 MAY 10:35"]})}),Object(b.jsxs)("td",{children:[Object(b.jsx)(j.b,{to:"#",className:"label theme-bg2 text-white f-12",children:"Reject"}),Object(b.jsx)(j.b,{to:"#",className:"label theme-bg text-white f-12",children:"Approve"})]})]}),Object(b.jsxs)("tr",{className:"unread",children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{className:"rounded-circle",style:{width:"40px"},src:u.default,alt:"activity-user"})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("h6",{className:"mb-1",children:"Karla Sorensen"}),Object(b.jsx)("p",{className:"m-0",children:"Lorem Ipsum is simply dummy text of\u2026"})]}),Object(b.jsx)("td",{children:Object(b.jsxs)("h6",{className:"text-muted",children:[Object(b.jsx)("i",{className:"fa fa-circle text-c-green f-10 m-r-15"}),"9 MAY 17:38"]})}),Object(b.jsxs)("td",{children:[Object(b.jsx)(j.b,{to:"#",className:"label theme-bg2 text-white f-12",children:"Reject"}),Object(b.jsx)(j.b,{to:"#",className:"label theme-bg text-white f-12",children:"Approve"})]})]}),Object(b.jsxs)("tr",{className:"unread",children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{className:"rounded-circle",style:{width:"40px"},src:o.default,alt:"activity-user"})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("h6",{className:"mb-1",children:"Ida Jorgensen"}),Object(b.jsx)("p",{className:"m-0",children:"Lorem Ipsum is simply dummy text of\u2026"})]}),Object(b.jsx)("td",{children:Object(b.jsxs)("h6",{className:"text-muted f-w-300",children:[Object(b.jsx)("i",{className:"fa fa-circle text-c-red f-10 m-r-15"}),"19 MAY 12:56"]})}),Object(b.jsxs)("td",{children:[Object(b.jsx)(j.b,{to:"#",className:"label theme-bg2 text-white f-12",children:"Reject"}),Object(b.jsx)(j.b,{to:"#",className:"label theme-bg text-white f-12",children:"Approve"})]})]}),Object(b.jsxs)("tr",{className:"unread",children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{className:"rounded-circle",style:{width:"40px"},src:O.default,alt:"activity-user"})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("h6",{className:"mb-1",children:"Albert Andersen"}),Object(b.jsx)("p",{className:"m-0",children:"Lorem Ipsum is simply dummy text of\u2026"})]}),Object(b.jsx)("td",{children:Object(b.jsxs)("h6",{className:"text-muted",children:[Object(b.jsx)("i",{className:"fa fa-circle text-c-green f-10 m-r-15"}),"21 July 12:56"]})}),Object(b.jsxs)("td",{children:[Object(b.jsx)(j.b,{to:"#",className:"label theme-bg2 text-white f-12",children:"Reject"}),Object(b.jsx)(j.b,{to:"#",className:"label theme-bg text-white f-12",children:"Approve"})]})]})]})})})]})})]})})}},712:function(e,s,a){"use strict";var t=a(4),c=a(7),l=a(12),r=a.n(l),i=a(1),d=a.n(i),j=a(15),n=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],h=d.a.forwardRef((function(e,s){var a=e.bsPrefix,l=e.className,i=e.striped,h=e.bordered,b=e.borderless,m=e.hover,x=e.size,o=e.variant,O=e.responsive,u=Object(c.a)(e,n),p=Object(j.a)(a,"table"),f=r()(l,p,o&&p+"-"+o,x&&p+"-"+x,i&&p+"-striped",h&&p+"-bordered",b&&p+"-borderless",m&&p+"-hover"),v=d.a.createElement("table",Object(t.a)({},u,{className:f,ref:s}));if(O){var N=p+"-responsive";return"string"===typeof O&&(N=N+"-"+O),d.a.createElement("div",{className:N},v)}return v}));s.a=h}}]);
//# sourceMappingURL=177.8f182294.chunk.js.map