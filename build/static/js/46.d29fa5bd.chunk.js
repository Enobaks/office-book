(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[46],{1041:function(e,t,a){"use strict";t.a=a.p+"static/media/l2.0d9f124c.jpg"},1042:function(e,t,a){"use strict";t.a=a.p+"static/media/l3.e03a3320.jpg"},1043:function(e,t,a){"use strict";t.a=a.p+"static/media/l4.ced56c75.jpg"},1044:function(e,t,a){"use strict";t.a=a.p+"static/media/l5.363fa5d7.jpg"},1045:function(e,t,a){"use strict";t.a=a.p+"static/media/l6.e00c75e9.jpg"},1073:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-1.caf9fcc6.jpg"},1074:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-2.aa1027ef.jpg"},1075:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-3.4250c1f2.jpg"},1076:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-4.ee7f86f7.jpg"},1077:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-5.19343d86.jpg"},1078:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-6.f590feca.jpg"},1214:function(e,t,a){"use strict";var i=a(8),c=a(1),s=a.n(c),n=a(1132),r=a(0);t.a=function(e){var t=e.currentImage,a=e.photos;return Object(r.jsx)(s.a.Fragment,{children:Object(r.jsx)(n.c,{currentIndex:t,views:a.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})})}},2407:function(e,t,a){"use strict";a.r(t);var i=a(26),c=a(1),s=a.n(c),n=a(696),r=a(693),l=a(697),o=a(1386),d=a(1132),h=a(950),u=a(1041),j=a(1042),b=a(1043),p=a(1044),g=a(1045),m=a(1073),f=a(1074),O=a(1075),w=a(1076),x=a(1077),v=a(1078),k=[{src:m.a,width:6,height:4},{src:f.a,width:4,height:2},{src:O.a,width:4,height:4},{src:w.a,width:6,height:5},{src:x.a,width:7,height:3},{src:v.a,width:3,height:4},{src:h.a,width:2,height:1},{src:u.a,width:2,height:2},{src:j.a,width:5,height:4},{src:b.a,width:4,height:3},{src:p.a,width:4,height:3},{src:g.a,width:3,height:4}],C=a(1214),N=a(685),y=a(0);t.default=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],h=t[1],u=Object(c.useState)(!1),j=Object(i.a)(u,2),b=j[0],p=j[1],g=Object(c.useCallback)((function(e,t){t.photo;var a=t.index;h(a),p(!0)}),[]);return Object(y.jsxs)(s.a.Fragment,{children:[Object(y.jsx)(n.a,{children:Object(y.jsx)(r.a,{sm:12,children:Object(y.jsx)(N.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/react-photo-gallery"})})}),Object(y.jsx)(n.a,{children:Object(y.jsx)(r.a,{children:Object(y.jsx)(l.a,{children:Object(y.jsx)(l.a.Body,{children:Object(y.jsx)(o.a,{photos:k,onClick:g})})})})}),Object(y.jsx)(d.b,{children:b?Object(y.jsx)(d.a,{onClose:function(){h(0),p(!1)},children:Object(y.jsx)(C.a,{currentImage:a,photos:k})}):null})]})}},685:function(e,t,a){"use strict";var i=a(1),c=a.n(i),s=a(705),n=a(0);t.a=function(e){return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsxs)(s.a,{variant:"warning",children:[e.message,Object(n.jsx)(s.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}},689:function(e,t,a){"use strict";var i=a(4),c=a(7),s=a(14),n=a.n(s),r=a(1),l=a.n(r),o=a(12),d=a.n(o),h=["label","onClick","className"],u={label:n.a.string.isRequired,onClick:n.a.func},j=l.a.forwardRef((function(e,t){var a=e.label,s=e.onClick,n=e.className,r=Object(c.a)(e,h);return l.a.createElement("button",Object(i.a)({ref:t,type:"button",className:d()("close",n),onClick:s},r),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},a))}));j.displayName="CloseButton",j.propTypes=u,j.defaultProps={label:"Close"},t.a=j},705:function(e,t,a){"use strict";var i=a(4),c=a(7),s=a(12),n=a.n(s),r=a(1),l=a.n(r),o=a(48),d=a(36),h=a(15),u=a(220),j=a(689),b=a(681),p=a(57),g=a(87),m=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],f=Object(b.a)("h4");f.displayName="DivStyledAsH4";var O=Object(p.a)("alert-heading",{Component:f}),w=Object(p.a)("alert-link",{Component:g.a}),x={show:!0,transition:u.a,closeLabel:"Close alert"},v=l.a.forwardRef((function(e,t){var a=Object(o.a)(e,{show:"onClose"}),s=a.bsPrefix,r=a.show,b=a.closeLabel,p=a.className,g=a.children,f=a.variant,O=a.onClose,w=a.dismissible,x=a.transition,v=Object(c.a)(a,m),k=Object(h.a)(s,"alert"),C=Object(d.a)((function(e){O&&O(!1,e)})),N=!0===x?u.a:x,y=l.a.createElement("div",Object(i.a)({role:"alert"},N?void 0:v,{ref:t,className:n()(p,k,f&&k+"-"+f,w&&k+"-dismissible")}),w&&l.a.createElement(j.a,{onClick:C,label:b}),g);return N?l.a.createElement(N,Object(i.a)({unmountOnExit:!0},v,{ref:void 0,in:r}),y):r?y:null}));v.displayName="Alert",v.defaultProps=x,v.Link=w,v.Heading=O,t.a=v},950:function(e,t,a){"use strict";t.a=a.p+"static/media/l1.b0d3fde5.jpg"}}]);
//# sourceMappingURL=46.d29fa5bd.chunk.js.map