(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[155],{2368:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(696),o=a(693),s=a(697),c=a(844),l=a.n(c),d=a(912),h=a.n(d),j=a(0),b={chart:{type:"column"},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4"],title:{text:"Monthly Average Rainfall"},subtitle:{text:"Source: WorldClimate.com"},xAxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],crosshair:!0},yAxis:{min:0,title:{text:"Rainfall (mm)"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Tokyo",data:[49.9,71.5,106.4,129.2,144,176,135.6,148.5,216.4,194.1,95.6,54.4]},{name:"New York",data:[83.6,78.8,98.5,93.4,106,84.5,105,104.3,91.2,83.5,106.6,92.3]},{name:"London",data:[48.9,38.8,39.3,41.4,47,48.3,59,59.6,52.4,65.2,59.3,51.2]},{name:"Berlin",data:[42.4,33.2,34.5,39.7,52.6,75.5,57.4,60.4,47.6,39.1,46.8,51.1]}]},p=function(){return Object(j.jsx)(h.a,{highcharts:l.a,options:b})},x={chart:{type:"spline"},colors:["#00bcd4","#4099ff","#7759de"],title:{text:"Solar Employment Growth by Sector, 2010-2017"},subtitle:{text:"Source: thesolarfoundation.com"},yAxis:{title:{text:"Number of Employees"}},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:[{name:"Installation",data:[5,25,15,35,25,35,45,75]},{name:"Manufacturing",data:[25,35,45,75,5,25,15,35]},{name:"Sales & Distribution",data:[45,75,25,5,15,55,5,25]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}},m=function(){return Object(j.jsx)(h.a,{highcharts:l.a,options:x})},u=a(26),O=a(102),f=a.n(O),y=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){f.a.get("https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json").then((function(e){r(e.data)}))}),[]);var i={chart:{zoomType:"x"},title:{text:"USD to EUR exchange rate over time"},subtitle:{text:void 0===document.ontouchstart?"Click and drag in the plot area to zoom in":"Pinch the chart to zoom in"},xAxis:{type:"datetime"},yAxis:{title:{text:"Exchange rate"}},legend:{enabled:!0},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#1dc4e9"],[1,"#1de9b6"]]},marker:{radius:2},lineWidth:2,lineColor:"#ff869a",states:{hover:{lineWidth:1}},threshold:null}},series:[{type:"area",name:"USD to EUR",data:a}]};return a?Object(j.jsx)(h.a,{highcharts:l.a,options:i}):Object(j.jsx)("p",{children:"Loading..."})},g={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4","#f44236","#f4c22b"],title:{text:"Browser market shares in January, 2018"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"Brands",colorByPoint:!0,data:[{name:"Chrome",y:61.41,sliced:!0,selected:!0},{name:"Internet Explorer",y:11.84},{name:"Firefox",y:10.85},{name:"Edge",y:4.67},{name:"Safari",y:4.18},{name:"Other",y:7.05}]}]},B=function(){return Object(j.jsx)(h.a,{highcharts:l.a,options:g})},D={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4","#f44236","#f4c22b"],title:{text:"Browser market shares in January, 2018"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"Brands",colorByPoint:!0,size:"90%",innerSize:"60%",data:[{name:"Chrome",y:61.41,sliced:!0,selected:!0},{name:"Internet Explorer",y:11.84},{name:"Firefox",y:10.85},{name:"Edge",y:4.67},{name:"Safari",y:4.18},{name:"Other",y:7.05}]}]},C=function(){return Object(j.jsx)(h.a,{highcharts:l.a,options:D})},w=a(1533),A=a.n(w);A()(l.a);var k={chart:{type:"pie",options3d:{enabled:!0,alpha:45}},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4","#f44236","#f4c22b"],title:{text:"Contents of Highsoft weekly fruit delivery"},subtitle:{text:"3D in Highcharts"},plotOptions:{pie:{depth:45}},series:[{name:"Delivered amount",data:[["Bananas",8],["Kiwi",3],["Mixed nuts",2],["Oranges",6],["Apples",3],["Pears",4]]}]},v=function(){return Object(j.jsx)(h.a,{highcharts:l.a,options:k})};A()(l.a);var S={chart:{type:"pie",options3d:{enabled:!0,alpha:45}},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4","#f44236","#f4c22b"],title:{text:"Contents of Highsoft weekly fruit delivery"},subtitle:{text:"3D donut in Highcharts"},plotOptions:{pie:{innerSize:100,depth:45}},series:[{name:"Delivered amount",data:[["Bananas",8],["Kiwi",3],["MIxed nuts",2],["Oranges",6],["Apples",3],["Pears",4]]}]},F=function(){return Object(j.jsx)(h.a,{highcharts:l.a,options:S})},P={title:{text:"Combination chart"},xAxis:{categories:["Apples","Oranges","Pears","Bananas","Kiwi"]},colors:["#1de9b6","#1dc4e9","#A389D4"],labels:{items:[{html:"Total fruit consumption",style:{left:"50px",top:"18px",color:l.a.theme&&l.a.theme.textColor||"black"}}]},series:[{type:"column",name:"Jane",data:[3,2,1,3,4]},{type:"column",name:"John",data:[2,3,5,7,6]},{type:"column",name:"Joe",data:[4,3,3,9,0]},{type:"spline",name:"Average",data:[3,2.67,3,6.33,3.33],color:"#f44236",lineColor:"#f44236",marker:{lineWidth:2,lineColor:"#f44236",fillColor:"#fff"}},{type:"pie",name:"Total consumption",data:[{name:"Jane",y:13,color:"#1de9b6"},{name:"John",y:23,color:"#1dc4e9"},{name:"Joe",y:19,color:"#A389D4"}],center:[100,80],size:100,showInLegend:!1,dataLabels:{enabled:!1}}]},H=function(){return Object(j.jsx)(h.a,{highcharts:l.a,options:P})},J=a(685);t.default=function(){return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(i.a,{children:Object(j.jsx)(o.a,{sm:12,children:Object(j.jsx)(J.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/highcharts-react-official"})})}),Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.a,{children:[Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a.Header,{children:Object(j.jsx)(s.a.Title,{as:"h5",children:"Bar [ Basic ] Chart"})}),Object(j.jsx)(s.a.Body,{children:Object(j.jsx)(p,{})})]}),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a.Header,{children:Object(j.jsx)(s.a.Title,{as:"h5",children:"Line [ Basic ] Chart"})}),Object(j.jsx)(s.a.Body,{children:Object(j.jsx)(m,{})})]}),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a.Header,{children:Object(j.jsx)(s.a.Title,{as:"h5",children:"Area [ Zoom ] Chart"})}),Object(j.jsx)(s.a.Body,{children:Object(j.jsx)(y,{})})]})]})}),Object(j.jsxs)(i.a,{children:[Object(j.jsx)(o.a,{lx:4,md:6,children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a.Header,{children:Object(j.jsx)(s.a.Title,{as:"h5",children:"Pie [ Basic ] Chart"})}),Object(j.jsx)(s.a.Body,{children:Object(j.jsx)(B,{})})]})}),Object(j.jsx)(o.a,{lx:4,md:6,children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a.Header,{children:Object(j.jsx)(s.a.Title,{as:"h5",children:"Pie [ Donut ] Chart"})}),Object(j.jsx)(s.a.Body,{children:Object(j.jsx)(C,{})})]})}),Object(j.jsx)(o.a,{lx:4,md:6,children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a.Header,{children:Object(j.jsx)(s.a.Title,{as:"h5",children:"Pie [ 3D ] Chart"})}),Object(j.jsx)(s.a.Body,{children:Object(j.jsx)(v,{})})]})}),Object(j.jsx)(o.a,{lx:4,md:6,children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a.Header,{children:Object(j.jsx)(s.a.Title,{as:"h5",children:"Pie [ Donut 3D ] Chart"})}),Object(j.jsx)(s.a.Body,{children:Object(j.jsx)(F,{})})]})})]}),Object(j.jsx)(i.a,{children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a.Header,{children:Object(j.jsx)(s.a.Title,{as:"h5",children:"Combinations [ Column, Line & Pie ] Chart"})}),Object(j.jsx)(s.a.Body,{children:Object(j.jsx)(H,{})})]})})})]})}},685:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(705),o=a(0);t.a=function(e){return Object(o.jsx)(r.a.Fragment,{children:Object(o.jsxs)(i.a,{variant:"warning",children:[e.message,Object(o.jsx)(i.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}}}]);
//# sourceMappingURL=155.cfa9c98b.chunk.js.map