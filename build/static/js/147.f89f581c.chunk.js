(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[147],{1084:function(e,s,a){"use strict";function r(e,s){if(null==e)return{};var a,r,t=function(e,s){if(null==e)return{};var a,r,t={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],s.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}a.d(s,"a",(function(){return r}))},1158:function(e,s,a){"use strict";var r=a(1);s.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},2398:function(e,s,a){"use strict";a.r(s);var r=a(1),t=a.n(r),c=a(697),n=a(696),l=a(693),i=a(2),o=a(8),m=a(727),u=a.n(m),d=a(817),b=a(1084),j=a(28),h=a(705),p=a(251),O=a(1301),x=a(1302),f=a(102),g=a.n(f),N=a(1158),v=a(50),w=a(0),y=["className"],k=function(e){var s=e.className,a=Object(b.a)(e,y),r=Object(j.g)(),c=Object(N.a)();return Object(w.jsxs)(t.a.Fragment,{children:[Object(w.jsx)(x.d,{initialValues:{username:"",email:"",password:"",submit:null},validationSchema:O.a().shape({email:O.b().email("Must be a valid email").max(255).required("Email is required"),username:O.b().required("Username is required"),password:O.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(d.a)(u.a.mark((function e(s,a){var t,n,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.setErrors,n=a.setStatus,l=a.setSubmitting;try{g.a.post(v.a+"users/register",{username:s.username,password:s.password,email:s.email}).then((function(e){e.data.success?r.push("/auth/signin"):(n({success:!1}),t({submit:e.data.msg}),l(!1))})).catch((function(e){n({success:!1}),t({submit:e.response.data.msg}),l(!1)}))}catch(i){console.error(i),c.current&&(n({success:!1}),t({submit:i.message}),l(!1))}case 2:case"end":return e.stop()}}),e)})));return function(s,a){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,t=e.handleBlur,c=e.handleChange,m=e.handleSubmit,u=e.isSubmitting,d=e.touched,b=e.values;return Object(w.jsxs)("form",Object(o.a)(Object(o.a)({noValidate:!0,onSubmit:m,className:s},a),{},{children:[Object(w.jsxs)("div",{className:"form-group mb-3",children:[Object(w.jsx)("input",{className:"form-control",error:d.username&&r.username,label:"Username",placeholder:"Username",name:"username",onBlur:t,onChange:c,type:"email",value:b.username}),d.username&&r.username&&Object(w.jsx)("small",{className:"text-danger form-text",children:r.username})]}),Object(w.jsxs)("div",{className:"form-group mb-3",children:[Object(w.jsx)("input",{className:"form-control",error:d.email&&r.email,label:"Email Address",placeholder:"Email Address",name:"email",onBlur:t,onChange:c,type:"email",value:b.email}),d.email&&r.email&&Object(w.jsx)("small",{className:"text-danger form-text",children:r.email})]}),Object(w.jsxs)("div",{className:"form-group mb-4",children:[Object(w.jsx)("input",{className:"form-control",error:d.password&&r.password,label:"Password",placeholder:"Password",name:"password",onBlur:t,onChange:c,type:"password",value:b.password}),d.password&&r.password&&Object(w.jsx)("small",{className:"text-danger form-text",children:r.password})]}),r.submit&&Object(w.jsx)(l.a,{sm:12,children:Object(w.jsx)(h.a,{variant:"danger",children:r.submit})}),Object(w.jsxs)("div",{className:"custom-control custom-checkbox  text-left mb-4 mt-2",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1",defaultChecked:!1}),Object(w.jsxs)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:["Agree ",Object(w.jsx)(i.b,{to:"#",children:" terms"}),"."]})]}),Object(w.jsx)(n.a,{children:Object(w.jsx)(l.a,{mt:2,children:Object(w.jsx)(p.a,{className:"btn-block",color:"primary",disabled:u,size:"large",type:"submit",variant:"primary",children:"Register"})})})]}))}}),Object(w.jsx)("hr",{})]})},S=a(221);s.default=function(){return Object(w.jsxs)(t.a.Fragment,{children:[Object(w.jsx)(S.a,{}),Object(w.jsx)("div",{className:"auth-wrapper",children:Object(w.jsxs)("div",{className:"auth-content",children:[Object(w.jsxs)("div",{className:"auth-bg",children:[Object(w.jsx)("span",{className:"r"}),Object(w.jsx)("span",{className:"r s"}),Object(w.jsx)("span",{className:"r s"}),Object(w.jsx)("span",{className:"r"})]}),Object(w.jsx)(c.a,{className:"borderless",children:Object(w.jsx)(n.a,{className:"align-items-center",children:Object(w.jsx)(l.a,{children:Object(w.jsxs)(c.a.Body,{className:"text-center",children:[Object(w.jsx)("h4",{className:"mb-4",children:"React Datta Able PRO"}),Object(w.jsx)("div",{className:"mb-4",children:Object(w.jsx)("i",{className:"feather icon-user-plus auth-icon"})}),Object(w.jsx)(k,{}),Object(w.jsxs)("p",{className:"mb-2",children:["Already have an account?"," ",Object(w.jsx)(i.c,{to:"/auth/signin",className:"f-w-400",children:"Login"})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("p",{className:"mb-0 text-muted",children:[Object(w.jsx)("a",{target:"_blank",without:!0,rel:"noreferrer",href:"https://appseed.us/product/react-node-js-datta-able-pro",children:"See Product"})," "," ","- ",Object(w.jsx)("a",{target:"_blank",without:!0,rel:"noreferrer",href:"https://appseed.us/support",children:"Get Support"})]})]})})})})]})})]})}}}]);
//# sourceMappingURL=147.f89f581c.chunk.js.map