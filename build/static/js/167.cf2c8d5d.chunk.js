(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[167],{2319:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(696),o=n(693),c=n(697),s=n(251),l=n(1907),u=n.n(l),f=n(1908),d=n.n(f),h=n(685),j=n(0);t.default=function(){var e=function(e){d()(u.a).fire({title:e.title,text:e.text,type:e.type})};return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(a.a,{children:Object(j.jsx)(o.a,{sm:12,children:Object(j.jsx)(h.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/sweetalert2-react-content"})})}),Object(j.jsx)(a.a,{children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(c.a,{children:[Object(j.jsx)(c.a.Header,{children:Object(j.jsx)(c.a.Title,{children:"Alerts"})}),Object(j.jsxs)(c.a.Body,{className:"btn-page",children:[Object(j.jsx)(s.a,{onClick:function(){return e({title:"",type:"",text:"Hello World!"})},children:"Basic"}),Object(j.jsx)(s.a,{variant:"success",onClick:function(){return e({title:"Good job!",type:"success",text:"You clicked the button!"})},children:"Success"}),Object(j.jsx)(s.a,{variant:"danger",onClick:function(){return e({title:"Good job!",type:"error",text:"You clicked the button!"})},children:"Error"}),Object(j.jsx)(s.a,{variant:"warning",onClick:function(){return e({title:"Good job!",type:"warning",text:"You clicked the button!"})},children:"Warning"}),Object(j.jsx)(s.a,{variant:"info",onClick:function(){return e({title:"Good job!",type:"info",text:"You clicked the button!"})},children:"Info"}),Object(j.jsx)(s.a,{onClick:function(){var e=d()(u.a);e.fire({title:"Are you sure?",text:"Once deleted, you will not be able to recover this imaginary file!",type:"warning",showCloseButton:!0,showCancelButton:!0}).then((function(t){return t.value?e.fire("","Poof! Your imaginary file has been deleted!","success"):e.fire("","Your imaginary file is safe!","error")}))},children:"Confirm"}),Object(j.jsx)(s.a,{onClick:function(){var e=d()(u.a);e.fire({text:"Write something here:",input:"text"}).then((function(t){return t.value?e.fire("","You Typed: ".concat(t.value)):e.fire("Invalid!","No message write","error")}))},children:"Prompt"}),Object(j.jsx)(s.a,{onClick:function(){var e=d()(u.a);e.fire({text:"Submit your Github username",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:function(t){return t?fetch("//api.github.com/users/".concat(t)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){u.a.showValidationMessage("Request failed: ".concat(e))})):e.fire("Invalid!","No name enter","error")},allowOutsideClick:function(){return!u.a.isLoading()}}).then((function(t){if(t.value&&void 0!==t.value.login)return e.fire({title:"".concat(t.value.login,"'s avatar"),imageUrl:t.value.avatar_url})}))},children:"Ajax"})]})]})})})]})}},685:function(e,t,n){"use strict";var i=n(1),r=n.n(i),a=n(705),o=n(0);t.a=function(e){return Object(o.jsx)(r.a.Fragment,{children:Object(o.jsxs)(a.a,{variant:"warning",children:[e.message,Object(o.jsx)(a.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}}}]);
//# sourceMappingURL=167.cf2c8d5d.chunk.js.map