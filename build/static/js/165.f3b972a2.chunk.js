(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[165],{2373:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(696),r=c(693),j=c(2153),i=c.n(j),l=c(26),b=c(0),o=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],j=t[1],i=Object(s.useState)(""),o=Object(l.a)(i,2),d=o[0],h=o[1];return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)(n.a,{children:[Object(b.jsx)(r.a,{sm:3,children:Object(b.jsx)("label",{children:"First Name"})}),Object(b.jsx)(r.a,{sm:9,children:Object(b.jsx)("input",{className:"u-full-width form-control",placeholder:"First Name",type:"text",onChange:function(e){return j(e.target.value)},value:c,autoFocus:!0})})]}),Object(b.jsxs)(n.a,{className:"my-3",children:[Object(b.jsx)(r.a,{sm:3,children:Object(b.jsx)("label",{children:"Last Name"})}),Object(b.jsx)(r.a,{sm:9,children:Object(b.jsx)("input",{className:"u-full-width form-control",placeholder:"Last Name",type:"text",onChange:function(e){return h(e.target.value)},value:d})})]})]})},d=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],j=t[1],i=Object(s.useState)(""),o=Object(l.a)(i,2),d=o[0],h=o[1];return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)(n.a,{children:[Object(b.jsx)(r.a,{sm:3,children:Object(b.jsx)("label",{children:"Your email"})}),Object(b.jsx)(r.a,{sm:9,children:Object(b.jsx)("input",{className:"u-full-width required form-control",placeholder:"test@mailbox.com",type:"email",onChange:function(e){return j(e.target.value)},value:c,autoFocus:!0})})]}),Object(b.jsxs)(n.a,{className:"my-3",children:[Object(b.jsx)(r.a,{sm:3,children:Object(b.jsx)("label",{children:"Confirm email"})}),Object(b.jsx)(r.a,{sm:9,children:Object(b.jsx)("input",{className:"u-full-width form-control",placeholder:"Confirm email",type:"email",onChange:function(e){return h(e.target.value)},value:d})})]})]})},h=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],j=t[1],i=Object(s.useState)(""),o=Object(l.a)(i,2),d=o[0],h=o[1];return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)(n.a,{children:[Object(b.jsx)(r.a,{sm:3,children:Object(b.jsx)("label",{children:"Password"})}),Object(b.jsx)(r.a,{sm:9,children:Object(b.jsx)("input",{className:"u-full-width required form-control",placeholder:"Password",type:"password",onChange:function(e){return j(e.target.value)},value:c,autoFocus:!0})})]}),Object(b.jsxs)(n.a,{className:"my-3",children:[Object(b.jsx)(r.a,{sm:3,children:Object(b.jsx)("label",{children:"Confirm password"})}),Object(b.jsx)(r.a,{sm:9,children:Object(b.jsx)("input",{className:"u-full-width  form-control",placeholder:"Confirm Password",type:"password",onChange:function(e){return h(e.target.value)},value:d})})]})]})},u=c(2),O=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],j=t[1];return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsx)(n.a,{children:Object(b.jsxs)(r.a,{className:"ten columns terms ml-5",children:[Object(b.jsx)("span",{children:'By clicking "Accept" I agree that:'}),Object(b.jsxs)("ul",{className:"docs-terms",children:[Object(b.jsxs)("li",{children:["I have read and accepted the ",Object(b.jsx)(u.b,{to:"#",children:"User Agreement"})]}),Object(b.jsxs)("li",{children:["I have read and accepted the ",Object(b.jsx)(u.b,{to:"#",children:"Privacy Policy"})]}),Object(b.jsx)("li",{children:"I am at least 18 years old"})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",checked:c,onChange:function(e){return j((function(e){return!e}))},autoFocus:!0}),Object(b.jsx)("span",{children:" Accept "})]})]})})})},x=c(697),m=[{component:Object(b.jsx)(o,{})},{component:Object(b.jsx)(d,{})},{component:Object(b.jsx)(h,{})},{component:Object(b.jsx)(O,{})}],p={border:"2px solid #4099ff",padding:"0.375rem 0.95rem",fontWeight:400,textAlign:"center",fontSize:"0.875rem",borderRadius:"5px",background:"transparent"},f={border:"2px solid #4099ff",float:"right",padding:"0.375rem 0.95rem",fontWeight:400,textAlign:"center",fontSize:"0.875rem",borderRadius:"5px",background:"transparent"},g=function(){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)(x.a,{children:[Object(b.jsx)(x.a.Header,{children:Object(b.jsx)(x.a.Title,{as:"h5",children:"Form MultiStep"})}),Object(b.jsx)(x.a.Body,{children:Object(b.jsx)(i.a,{steps:m,showNavigation:!0,prevStyle:p,nextStyle:f})})]})})},v=c(8),S=c(251),w=c(2155),y=function(){return Object(b.jsx)("h4",{children:"This is Step 1"})},N=function(){return Object(b.jsx)("h4",{children:"This is Step 2"})},k=function(){return Object(b.jsx)("h4",{children:"This is Step 3"})},F=function(){return Object(b.jsx)("h4",{children:"This is Step 4"})},C=function(){return Object(b.jsx)("h4",{children:"This is Step 5"})},L=function(e){var t=e.currentStep,c=void 0===t?0:t,s=e.steps,a=void 0===s?[]:s;return Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Current step is: ",a[c]]})})},P=function(e){var t=e.getFirstStepProps,c=e.getLastStepProps,s=e.getNextStepProps,n=e.getPrevStepProps;return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)("div",{className:"float-right",children:[Object(b.jsx)(S.a,Object(v.a)(Object(v.a)({type:"button"},t()),{},{children:"First"})),Object(b.jsx)(S.a,Object(v.a)(Object(v.a)({type:"button",className:"mx-2"},n()),{},{children:"Back"})),Object(b.jsx)(S.a,Object(v.a)(Object(v.a)({type:"button",className:"mx-2"},s()),{},{children:"Next"})),Object(b.jsx)(S.a,Object(v.a)(Object(v.a)({type:"button"},c()),{},{children:"Last"}))]})})},T=function(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),c=t[0],j=t[1];return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)(x.a,{children:[Object(b.jsx)(x.a.Header,{children:Object(b.jsx)(x.a.Title,{as:"h5",children:"Simple Step Wizard"})}),Object(b.jsx)(x.a.Body,{children:Object(b.jsxs)(n.a,{children:[Object(b.jsxs)(r.a,{sm:12,children:[Object(b.jsxs)("p",{children:["Step 3 visible: ",c.toString()]}),Object(b.jsx)(S.a,{type:"button",onClick:function(){j((function(e){return!e}))},children:"Toggle Step 3"})]}),Object(b.jsx)(r.a,{sm:12,children:Object(b.jsxs)(w.a,{onStepChange:function(e){console.log(e)},children:[Object(b.jsx)(w.a.StepTracker,{}),Object(b.jsxs)(w.a.Steps,{children:[Object(b.jsx)(y,{stepLabel:"Search"}),Object(b.jsx)(N,{stepLabel:"Select"}),Object(b.jsx)(k,{stepLabel:"Customize",stepCondition:c}),Object(b.jsx)(F,{stepLabel:"Review"}),Object(b.jsx)(C,{stepLabel:"Submit"})]}),Object(b.jsx)(w.a.StepTracker,{children:function(e){return Object(b.jsx)(L,Object(v.a)({},e))}}),Object(b.jsx)(w.a.Navigator,{children:function(e){return Object(b.jsx)(P,Object(v.a)({},e))}})]})})]})})]})})},z=c(685);t.default=function(){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)(n.a,{children:[Object(b.jsx)(r.a,{sm:12,children:Object(b.jsx)(z.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/react-multistep"})}),Object(b.jsx)(r.a,{sm:12,children:Object(b.jsx)(g,{})}),Object(b.jsx)(r.a,{sm:12,children:Object(b.jsx)(z.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/react-simple-step-wizard"})}),Object(b.jsx)(r.a,{sm:12,children:Object(b.jsx)(T,{})})]})})}},685:function(e,t,c){"use strict";var s=c(1),a=c.n(s),n=c(705),r=c(0);t.a=function(e){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsxs)(n.a,{variant:"warning",children:[e.message,Object(r.jsx)(n.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}}}]);
//# sourceMappingURL=165.f3b972a2.chunk.js.map