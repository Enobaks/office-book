(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[202],{2380:function(e,a,t){"use strict";t.r(a);var l=t(1),i=t.n(l),s=t(696),r=t(693),c=t(697),d=t(2),o=(t(709),t(722),t(710),t(711)),n=t.n(o),h=t(0),b=function(e){return Object(l.useEffect)((function(){n.a.makeChart("line-area2",{type:"serial",theme:"light",marginTop:10,marginRight:0,dataProvider:[{year:"Jan",value:5,value2:80},{year:"Feb",value:30,value2:95},{year:"Mar",value:25,value2:87},{year:"Apr",value:55,value2:155},{year:"May",value:45,value2:140},{year:"Jun",value:65,value2:147},{year:"Jul",value:60,value2:130},{year:"Aug",value:105,value2:180},{year:"Sep",value:80,value2:160},{year:"Oct",value:110,value2:175},{year:"Nov",value:120,value2:165},{year:"Dec",value:150,value2:200}],valueAxes:[{axisAlpha:0,position:"left"}],graphs:[{id:"g1",balloonText:"[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",bullet:"round",lineColor:"#1de9b6",lineThickness:3,negativeLineColor:"#1de9b6",valueField:"value"},{id:"g2",balloonText:"[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",bullet:"round",lineColor:"#10adf5",lineThickness:3,negativeLineColor:"#10adf5",valueField:"value2"}],chartCursor:{cursorAlpha:0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.3,fullWidth:!0},categoryField:"year",categoryAxis:{minorGridAlpha:0,minorGridEnabled:!0,gridAlpha:0,axisAlpha:0,lineAlpha:0},legend:{useGraphSettings:!0,position:"top"}})})),Object(h.jsx)("div",{id:"line-area2",className:"lineAreaDashboard",style:{width:"100%",height:e.height}})},j=t(26),u=function(e){var a=Object(l.useState)([{year:"1999",value:30},{year:"2000",value:55},{year:"2001",value:80},{year:"2002",value:60},{year:"2003",value:70},{year:"2004",value:70},{year:"2005",value:110},{year:"2006",value:90},{year:"2007",value:130}]),t=Object(j.a)(a,1)[0];return Object(l.useEffect)((function(){var e=n.a.makeChart("earnings-chart",{type:"serial",addClassNames:!0,defs:{filter:[{x:"-50%",y:"-50%",width:"200%",height:"200%",id:"blur",feGaussianBlur:{in:"SourceGraphic",stdDeviation:"30"}},{id:"shadow",x:"-10%",y:"-10%",width:"120%",height:"120%",feOffset:{result:"offOut",in:"SourceAlpha",dx:"0",dy:"20"},feGaussianBlur:{result:"blurOut",in:"offOut",stdDeviation:"10"},feColorMatrix:{result:"blurOut",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"},feBlend:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}}]},fontSize:15,dataProvider:t,dataDateFormat:"YYYY",autoMarginOffset:0,marginRight:-1,marginBottom:-2,categoryField:"year",categoryAxis:{color:"#fff",gridAlpha:0,axisAlpha:0,lineAlpha:0,offset:-20,inside:!0,parseDates:!0,minPeriod:"YYYY"},chartCursor:{valueLineEnabled:!1,valueLineBalloonEnabled:!1,cursorAlpha:0,zoomable:!1,cursorColor:"#fff",categoryBalloonColor:"#88dcef",valueZoomable:!1,valueLineAlpha:0},valueAxes:[{fontSize:0,inside:!0,gridAlpha:0,axisAlpha:0,lineAlpha:0}],graphs:[{id:"g1",type:"line",valueField:"value",fillColors:["#1dc4e9","#A389D4"],lineColor:"#1dc4e9",balloon:{drop:!0,adjustBorderColor:!1,color:"#ffffff",type:"smoothedLine"},lineAlpha:1,lineThickness:5,fillAlphas:.9,showBalloon:!0}]});setTimeout((function(){e.zoomToIndexes(1,t.length-2)}),400)})),Object(h.jsx)("div",{id:"earnings-chart",style:{width:"100%",height:e.height}})},x=t(1003),m=t(1081),g=t(1131),p=t(1198),f=t(1007);x.d(f.a);var v=function(e){return Object(l.useEffect)((function(){var e=x.b("world-low",g.b);e.geodata=p.a,e.projection=new g.f.Miller;var a=e.series.push(new g.d);a.exclude=["antarctica"],a.useGeodata=!0;var t=e.series.push(new g.c),l=t.mapImages.template;l.propertyFields.latitude="latitude",l.propertyFields.longitude="longitude";var i=l.createChild(m.d);i.adapter.add("data",(function(e,a){return a.dataItem?a.dataItem.dataContext.pieData:[]})),i.propertyFields.width="width",i.propertyFields.height="height",i.horizontalCenter="middle",i.verticalCenter="middle",i.titles.create().text="{title}";var s=i.series.push(new m.e);s.dataFields.category="category",s.dataFields.value="value",s.labels.template.disabled=!0,s.ticks.template.disabled=!0,t.data=[{title:"North America",latitude:39.563353,longitude:-99.316406,width:100,height:100,pieData:[{category:"Category #1",value:1200,fill:"red"},{category:"Category #2",value:500},{category:"Category #3",value:765},{category:"Category #4",value:260}]},{title:"Europe",latitude:50.896104,longitude:19.160156,width:50,height:50,pieData:[{category:"Category #1",value:200},{category:"Category #2",value:600},{category:"Category #3",value:350}]},{title:"Asia",latitude:47.212106,longitude:103.183594,width:80,height:80,pieData:[{category:"Category #1",value:352},{category:"Category #2",value:266},{category:"Category #3",value:512},{category:"Category #4",value:199}]},{title:"Africa",latitude:11.081385,longitude:21.621094,width:50,height:50,pieData:[{category:"Category #1",value:200},{category:"Category #2",value:300},{category:"Category #3",value:599},{category:"Category #4",value:512}]}]})),Object(h.jsx)("div",{id:"world-low",style:{width:"100%",height:e.height}})};a.default=function(){return Object(h.jsx)(i.a.Fragment,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(r.a,{md:6,xl:4,children:Object(h.jsx)(c.a,{className:"theme-bg bitcoin-wallet",children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h5",{className:"text-white mb-2",children:"Bitcoin Wallet"}),Object(h.jsx)("h2",{className:"text-white mb-3 f-w-300",children:"$9,302"}),Object(h.jsx)("span",{className:"text-white d-block",children:"Ratings by Market Capitalization"}),Object(h.jsx)("i",{className:"fab fa-bitcoin f-70 text-white"})]})})}),Object(h.jsx)(r.a,{md:6,xl:4,children:Object(h.jsx)(c.a,{className:"theme-bg2 bitcoin-wallet",children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h5",{className:"text-white mb-2",children:"Bitcoin Wallet"}),Object(h.jsx)("h2",{className:"text-white mb-3 f-w-300",children:"$8,101"}),Object(h.jsx)("span",{className:"text-white d-block",children:"Ratings by Market Capitalization"}),Object(h.jsx)("i",{className:"fas fa-dollar-sign f-70 text-white"})]})})}),Object(h.jsx)(r.a,{md:12,xl:4,children:Object(h.jsx)(c.a,{className:"bg-c-blue bitcoin-wallet",children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h5",{className:"text-white mb-2",children:"Bitcoin Wallet"}),Object(h.jsx)("h2",{className:"text-white mb-3 f-w-300",children:"$7,501"}),Object(h.jsx)("span",{className:"text-white d-block",children:"Ratings by Market Capitalization"}),Object(h.jsx)("i",{className:"fa fa-database f-70 text-white"})]})})}),Object(h.jsx)(r.a,{xl:8,children:Object(h.jsxs)(c.a,{children:[Object(h.jsx)(c.a.Header,{children:Object(h.jsx)(c.a.Title,{as:"h5",children:"Statistics"})}),Object(h.jsx)(c.a.Body,{children:Object(h.jsx)(b,{height:"330px"})})]})}),Object(h.jsx)(r.a,{xl:4,children:Object(h.jsxs)(c.a,{className:"note-bar",children:[Object(h.jsx)(c.a.Header,{children:Object(h.jsx)(c.a.Title,{as:"h5",children:"Notifications"})}),Object(h.jsxs)(c.a.Body,{className:"p-0",children:[Object(h.jsxs)(d.b,{to:"#",className:"media friendlist-box",children:[Object(h.jsx)("div",{className:"mr-3 photo-table",children:Object(h.jsx)("i",{className:"fa fa-bell f-30"})}),Object(h.jsxs)("div",{className:"media-body",children:[Object(h.jsx)("h6",{children:"New order received"}),Object(h.jsx)("span",{className:"f-12 float-right text-muted",children:"12.56"}),Object(h.jsx)("p",{className:"text-muted m-0",children:"2 unread notification"})]})]}),Object(h.jsxs)(d.b,{to:"#",className:"media friendlist-box border-top",children:[Object(h.jsx)("div",{className:"mr-3 photo-table",children:Object(h.jsx)("i",{className:"fa fa-bell f-30"})}),Object(h.jsxs)("div",{className:"media-body",children:[Object(h.jsx)("h6",{children:"New user register"}),Object(h.jsx)("span",{className:"f-12 float-right text-muted",children:"12.36"}),Object(h.jsx)("p",{className:"text-muted m-0",children:"xx messages"})]})]}),Object(h.jsxs)(d.b,{to:"#",className:"media friendlist-box border-top",children:[Object(h.jsx)("div",{className:"mr-3 photo-table",children:Object(h.jsx)("i",{className:"fa fa-bell f-30"})}),Object(h.jsxs)("div",{className:"media-body",children:[Object(h.jsx)("h6",{children:"New order register"}),Object(h.jsx)("span",{className:"f-12 float-right text-muted",children:"11.45"}),Object(h.jsx)("p",{className:"text-muted m-0",children:"2 read notification"})]})]}),Object(h.jsxs)("div",{className:"media friendlist-box border-top",children:[Object(h.jsx)("div",{className:"mr-3 photo-table",children:Object(h.jsx)("i",{className:"fa fa-bell f-30"})}),Object(h.jsxs)("div",{className:"media-body",children:[Object(h.jsx)("h6",{children:"New order prepend"}),Object(h.jsx)("span",{className:"f-12 float-right text-muted",children:"9.39"}),Object(h.jsx)("p",{className:"text-muted m-0",children:"xx messages"})]})]})]})]})}),Object(h.jsx)(r.a,{xl:8,md:6,children:Object(h.jsxs)(c.a,{children:[Object(h.jsx)(c.a.Header,{children:Object(h.jsx)(c.a.Title,{as:"h5",children:"Users From United States"})}),Object(h.jsx)(c.a.Body,{children:Object(h.jsx)(v,{height:"350px"})})]})}),Object(h.jsx)(r.a,{xl:4,md:6,children:Object(h.jsxs)(c.a,{children:[Object(h.jsx)(c.a.Header,{children:Object(h.jsx)(c.a.Title,{as:"h5",children:"Statistics"})}),Object(h.jsx)(c.a.Body,{children:Object(h.jsx)("h3",{className:"f-w-300",children:"$894.39"})}),Object(h.jsx)(c.a.Body,{className:"p-0",children:Object(h.jsx)(u,{height:"310px"})})]})})]})})}}}]);
//# sourceMappingURL=202.16ec663d.chunk.js.map