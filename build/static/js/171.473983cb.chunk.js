(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[171],{2323:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),o=c(696),n=c(693),r=c(697),l=c(712),d=c(251),a=c(2084),j=c(685),h=c(0);function b(){a.a.notice({title:"Default Notice",text:"Check me out! I'm notice"})}function f(){a.a.notice({title:"Primary Notice",text:"Check me out! I'm notice"})}function x(){a.a.success({title:"Success Notice",text:"Check me out! I'm notice"})}function u(){a.a.info({title:"Info Notice",text:"Check me out! I'm notice"})}function m(){a.a.error({title:"Error Notice",text:"Check me out! I'm notice"})}function O(){a.a.success({title:"Success Desktop Notice",text:"I'm a success desktop notification, if you have given me a permission.",modules:{Desktop:{desktop:!0}}}).on("click",(function(e){e.target.className.match("ui-pnotify-sticker")||e.target.className.match("ui-pnotify-closer")||e.target.className.match("brighttheme-icon-sticker")||e.target.className.match("brighttheme-icon-closer")||alert("Hey! You clicked the desktop notification!")}))}function k(){a.a.error({title:"Error Desktop Notice",text:"I'm a error desktop notification, if you have given me a permission.",modules:{Desktop:{desktop:!0}}}).on("click",(function(e){e.target.className.match("ui-pnotify-sticker")||e.target.className.match("ui-pnotify-closer")||e.target.className.match("brighttheme-icon-sticker")||e.target.className.match("brighttheme-icon-closer")||alert("Hey! You clicked the desktop notification!")}))}function p(){a.a.notice({title:"Warning Desktop Notice",text:"I'm a warning desktop notification, if you have given me a permission.",modules:{Desktop:{desktop:!0}}}).on("click",(function(e){e.target.className.match("ui-pnotify-sticker")||e.target.className.match("ui-pnotify-closer")||e.target.className.match("brighttheme-icon-sticker")||e.target.className.match("brighttheme-icon-closer")||alert("Hey! You clicked the desktop notification!")}))}function C(){a.a.info({title:"Info Desktop Notice",text:"I'm a info desktop notification, if you have given me a permission.",modules:{Desktop:{desktop:!0}}}).on("click",(function(e){e.target.className.match("ui-pnotify-sticker")||e.target.className.match("ui-pnotify-closer")||e.target.className.match("brighttheme-icon-sticker")||e.target.className.match("brighttheme-icon-closer")||alert("Hey! You clicked the desktop notification!")}))}function y(){"undefined"===typeof window.stackTopLeft&&(window.stackTopLeft={dir1:"down",dir2:"right",firstpos1:25,firstpos2:25,push:"top"}),a.a.notice({title:"Over here",text:"Check me out. I'm in a different stack.",stack:window.stackTopLeft})}function N(){"undefined"===typeof window.stackBottomLeft&&(window.stackBottomLeft={dir1:"right",dir2:"up",firstpos1:25,firstpos2:25,push:"top"}),a.a.notice({title:"Over here",text:"Check me out. I'm in a different stack.",stack:window.stackBottomLeft})}function w(){"undefined"===typeof window.stackBottomRight&&(window.stackBottomRight={dir1:"up",dir2:"left",firstpos1:25,firstpos2:25}),a.a.notice({title:"Over here",text:"Check me out. I'm in a different stack.",stack:window.stackBottomRight})}function g(){"undefined"===typeof window.stackCustomLeft&&(window.stackCustomLeft={dir1:"right",dir2:"down",firstpos1:200,firstpos2:200}),a.a.success({title:"Good News Everyone",text:"I've invented a device that bites shiny metal asses.",stack:window.stackCustomLeft})}function v(){"undefined"===typeof window.stackCustomBottom&&(window.stackCustomBottom={dir1:"left",dir2:"up",firstpos1:200,firstpos2:200}),a.a.success({title:"Good News Everyone",text:"I've invented a device that bites shiny metal asses.",stack:window.stackCustomBottom})}function B(){"undefined"===typeof window.stackBarTop&&(window.stackBarTop={dir1:"down",firstpos1:0,spacing1:2,push:"top"}),a.a.info({title:"Breaking News",text:"Have you met Ted?",addClass:"stack-bar-top",cornerClass:"ui-pnotify-sharp",shadow:!1,width:"100%",stack:window.stackBarTop})}function H(){"undefined"===typeof window.stackBarBottom&&(window.stackBarBottom={dir1:"up",firstpos1:0,spacing1:2,push:"top"}),a.a.info({title:"Breaking News",text:"Have you met Ted?",addClass:"stack-bar-bottom",cornerClass:"ui-pnotify-sharp",shadow:!1,width:"100%",stack:window.stackBarBottom})}function P(){a.a.notice({title:!1,text:"Check me out! I'm a notice without title.",icon:!1})}function I(){a.a.notice({title:"<b>Rich content notice</b>",titleTrusted:!0,text:"Look at my beautiful <strong>strong</strong>, <a href='#' class='alert-link'>linked</a>, <em>emphasized</em>, and <u>underlined</u> text with <i class='icon-make-group' /> icon.",textTrusted:!0})}function S(){var e=a.a.notice({title:"Close on click",text:"Click me anywhere to dismiss me.",hide:!1,icon:!1,modules:{Buttons:{closer:!1,sticker:!1}}});e.on("click",(function(){e.close()}))}function z(){a.a.notice({title:"Choose a Side",text:"You have three options to choose from.",icon:"fa fa-question-circle",hide:!1,modules:{Confirm:{confirm:!0,buttons:[{text:"Fries",primary:!0,click:function(e){e.update({title:"You've Chosen a Side",text:"You want fries.",icon:!0,type:"error",hide:!0,modules:{Confirm:{confirm:!1},Buttons:{closer:!0,sticker:!0}}})}},{text:"Mash",click:function(e){e.update({title:"You've Chosen a Side",text:"You want mashed potatoes.",icon:!0,type:"info",hide:!0,modules:{Confirm:{confirm:!1},Buttons:{closer:!0,sticker:!0}}})}},{text:"Fruit",click:function(e){e.update({title:"You've Chosen a Side",text:"You want fruit.",icon:!0,type:"success",hide:!0,modules:{Confirm:{confirm:!1},Buttons:{closer:!0,sticker:!0}}})}}]},Buttons:{closer:!1,sticker:!1},History:{history:!1}}})}function T(){a.a.notice({title:"I'm Here",text:"I have a callback for each of my events. I'll call all my callbacks while I change states.",modules:{Callbacks:{beforeInit:function(e){e.text=e.text.replace(/callback/g,"tire iron")},afterInit:function(e){},beforeOpen:function(e){alert("I'm called before the notice opens. I'm passed the PNotify object for the current notice: "+e)},afterOpen:function(e){},beforeClose:function(e,t){alert("I'm called before the notice closes. I'm passed the PNotify object for the current notice: "+e)},afterClose:function(e,t){}}}})}function D(){var e=0,t=a.a.info({text:"Please Wait",icon:"fa fa-spinner fa-pulse",hide:!1,shadow:!1,width:"200px",modules:{Buttons:{closer:!1,sticker:!1}}});setTimeout((function(){t.update({title:!1});var c=setInterval((function(){var i={text:(e+=2)+"% complete."};80===e&&(i.title="Almost There"),e>=100&&(window.clearInterval(c),i.title="Done!",i.type="success",i.hide=!0,i.icon="fa fa-check",i.shadow=!0,i.width=a.a.defaults.width,i.modules={Buttons:{closer:!0,sticker:!0}}),t.update(i)}),120)}),2e3)}function L(){var e=a.a.notice({title:"Input Needed",text:"Write me a poem, please.",icon:"fa fa-question-circle",hide:!1,modules:{Confirm:{prompt:!0,promptMultiLine:!0,promptValue:"Roses are red,\nViolets are blue,\n"},Buttons:{closer:!1,sticker:!1},History:{history:!1}}});e.on("pnotify.confirm",(function(t){e.cancelClose().update({title:"Your Poem",text:t.value,icon:!0,type:"success",hide:!0,modules:{Confirm:{prompt:!1},Buttons:{closer:!0,sticker:!0}}})})),e.on("pnotify.cancel",(function(t){e.cancelClose().update({title:"You Don't Like Poetry",text:"Roses are dead,\nViolets are dead,\nI suck at gardening.",icon:!0,type:"error",hide:!0,modules:{Confirm:{prompt:!1},Buttons:{closer:!0,sticker:!0}}})}))}function Y(){var e=a.a.notice({title:"Input Needed",text:"What side would you like?",icon:"fa fa-question-circle",hide:!1,modules:{Confirm:{prompt:!0},Buttons:{closer:!1,sticker:!1},History:{history:!1}}});e.on("pnotify.confirm",(function(t){e.cancelClose().update({title:"You've Chosen a Side",text:"You want "+t.value+".",icon:!0,type:"success",hide:!0,modules:{Confirm:{prompt:!1},Buttons:{closer:!0,sticker:!0}}})})),e.on("pnotify.cancel",(function(t){e.cancelClose().update({title:"You Don't Want a Side",text:"No soup for you!",icon:!0,type:"error",hide:!0,modules:{Confirm:{prompt:!1},Buttons:{closer:!0,sticker:!0}}})}))}function R(){var e=a.a.notice({title:"Confirmation Needed",text:"Are you sure?",icon:"fa fa-question-circle",hide:!1,modules:{Confirm:{confirm:!0},Buttons:{closer:!1,sticker:!1},History:{history:!1}}});e.on("pnotify.confirm",(function(){alert("Ok, cool.")})),e.on("pnotify.cancel",(function(){alert("Oh ok. Chicken, I see.")}))}function U(){a.a.notice({title:"Sticky Notice",text:"Check me out! I'm a sticky notice. You'll have to close me yourself.",hide:!1})}function E(){a.a.notice({title:"Permanent Buttons Notice",text:"My buttons are really lonely, so they're gonna hang out with us.",modules:{Buttons:{closerHover:!1,stickerHover:!1}}})}t.default=function(){return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)(o.a,{children:Object(h.jsx)(n.a,{sm:12,children:Object(h.jsx)(j.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/pnotify"})})}),Object(h.jsx)(o.a,{children:Object(h.jsxs)(n.a,{children:[Object(h.jsxs)(r.a,{children:[Object(h.jsx)(r.a.Header,{children:Object(h.jsx)(r.a.Title,{as:"h5",children:"Notification Alert"})}),Object(h.jsx)(r.a.Body,{children:Object(h.jsx)(l.a,{responsive:!0,children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Default Notice"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",variant:"inverse",onClick:b,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Use method ",Object(h.jsx)("code",{children:"notice"})," with ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Primary Notice"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",variant:"primary",onClick:f,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Use method ",Object(h.jsx)("code",{children:"notice"})," with ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Success Notice"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",variant:"success",onClick:x,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Use method ",Object(h.jsx)("code",{children:"success"})," with ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Info Notice"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",variant:"info",onClick:u,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Use method ",Object(h.jsx)("code",{children:"info"})," with ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Error Notice"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",variant:"danger",onClick:m,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Use method ",Object(h.jsx)("code",{children:"error"})," with ",Object(h.jsx)("code",{children:"PNotify"})]})]})]})})})]}),Object(h.jsxs)(r.a,{children:[Object(h.jsx)(r.a.Header,{children:Object(h.jsx)(r.a.Title,{as:"h5",children:"Desktop Alert"})}),Object(h.jsxs)(r.a.Body,{className:"btn-page",children:[Object(h.jsxs)(r.a.Text,{children:["Use variant method from notification alert and set ",Object(h.jsx)("code",{children:"option"})," like,"," ",Object(h.jsx)("code",{children:"modules:{ Desktop: { desktop: true}}"})," with ",Object(h.jsx)("code",{children:"PNotify"})]}),Object(h.jsxs)(d.a,{variant:"success",onClick:O,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]}),Object(h.jsxs)(d.a,{variant:"info",onClick:C,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]}),Object(h.jsxs)(d.a,{variant:"warning",onClick:p,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]}),Object(h.jsxs)(d.a,{variant:"danger",onClick:k,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})]})]}),Object(h.jsxs)(r.a,{children:[Object(h.jsx)(r.a.Header,{children:Object(h.jsx)(r.a.Title,{as:"h5",children:"Notification Position"})}),Object(h.jsx)(r.a.Body,{children:Object(h.jsx)(l.a,{responsive:!0,children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Top Left"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:y,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"option"})," like,"," ",Object(h.jsx)("code",{children:"stack:{'dir1': 'down', 'dir2': 'right', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"})," ","with ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Bottom Left"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:N,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"option"})," like,"," ",Object(h.jsx)("code",{children:"stack:{'dir1': 'right', 'dir2': 'up', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"})," ","with ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Bottom Right"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:w,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"option"})," like,"," ",Object(h.jsx)("code",{children:"stack:{'dir1': 'up', 'dir2': 'left', 'firstpos1': 25, 'firstpos2': 25}"})," with"," ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Custom Left"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:g,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"option"})," like,"," ",Object(h.jsx)("code",{children:"stack:{'dir1': 'right', 'dir2': 'down', 'firstpos1': 200, 'firstpos2': 200}"})," ","with ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Custom Right"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:v,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"option"})," like,"," ",Object(h.jsx)("code",{children:"stack:{'dir1': 'left', 'dir2': 'up', 'firstpos1': 200, 'firstpos2': 200}"})," with"," ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Custom Top"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:B,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"option"})," like,"," ",Object(h.jsx)("code",{children:"stack:{'dir1': 'down', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"})," with"," ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Custom Bottom"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:H,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"option"})," like,"," ",Object(h.jsx)("code",{children:"stack:{'dir1': 'up', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"})," with"," ",Object(h.jsx)("code",{children:"PNotify"})]})]})]})})})]}),Object(h.jsxs)(r.a,{children:[Object(h.jsx)(r.a.Header,{children:Object(h.jsx)(r.a.Title,{as:"h5",children:"Notification Position"})}),Object(h.jsx)(r.a.Body,{children:Object(h.jsx)(l.a,{responsive:!0,children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"No Title"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:P,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"option"})," like, ",Object(h.jsx)("code",{children:"title:false, icon: false"})," with"," ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Rich Title/Content"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:I,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"option"})," like, ",Object(h.jsx)("code",{children:"titleTrusted:true, textTrusted: true"})," with"," ",Object(h.jsx)("code",{children:"PNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Click to Close"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:S,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"function"})," like, ",Object(h.jsx)("code",{children:"closeOnClickPNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Custom Button"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:z,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"function"})," like, ",Object(h.jsx)("code",{children:"customButtonPNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Callback Button"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:T,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"function"})," like, ",Object(h.jsx)("code",{children:"callbackButtonPNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Dynamic Progress Button"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:D,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"function"})," like, ",Object(h.jsx)("code",{children:"dynamicProgressButtonPNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Multi Line Props"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:L,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"function"})," like, ",Object(h.jsx)("code",{children:"multiLinePNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Prompt Button"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:Y,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"function"})," like, ",Object(h.jsx)("code",{children:"promptPNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Confirm Button"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:R,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"function"})," like, ",Object(h.jsx)("code",{children:"confirmPNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Stickey Button"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:U,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"function"})," like, ",Object(h.jsx)("code",{children:"stickeyPNotify"})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Permanent Button"}),Object(h.jsx)("td",{children:Object(h.jsxs)(d.a,{size:"sm",onClick:E,children:[Object(h.jsx)("i",{className:"feather icon-bell"})," Click Here!"]})}),Object(h.jsxs)("td",{children:["Set ",Object(h.jsx)("code",{children:"function"})," like, ",Object(h.jsx)("code",{children:"permanentPNotify"})]})]})]})})})]})]})})]})}},685:function(e,t,c){"use strict";var i=c(1),s=c.n(i),o=c(705),n=c(0);t.a=function(e){return Object(n.jsx)(s.a.Fragment,{children:Object(n.jsxs)(o.a,{variant:"warning",children:[e.message,Object(n.jsx)(o.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}}}]);
//# sourceMappingURL=171.473983cb.chunk.js.map