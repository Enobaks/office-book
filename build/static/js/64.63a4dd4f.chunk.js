(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[64],{2304:function(e,t,a){"use strict";a.r(t);var n=a(26),c=a(1),s=a.n(c),i=a(705),r=a(696),o=a(693),l=a(2),d=a(685),b=a(804),j=a(0),u=["primary","secondary","success","danger","warning","info","light","dark"];t.default=function(){var e=Object(c.useState)(u),t=Object(n.a)(e,2),a=t[0],m=t[1],f=u.map((function(e,t){return Object(j.jsxs)(i.a,{variant:e,children:["A simple ",e," alert\u2014check it out!"]},t)})),h=u.map((function(e,t){return Object(j.jsxs)(i.a,{variant:e,children:["A simple ",e," alert with"," ",Object(j.jsx)(i.a.Link,{as:l.b,to:"#",children:"an example link"}),". Give it a click if you like."]},t)})),O=u.map((function(e,t){return Object(j.jsx)(i.a,{show:a.findIndex((function(t){return t===e}))>-1,dismissible:!0,variant:e,onClick:function(){return m(a.filter((function(t){return t!==e})))},children:"Holy guacamole! You should check in on some of those fields below."},t)}));return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(r.a,{children:Object(j.jsx)(o.a,{sm:12,children:Object(j.jsx)(d.a,{message:"For more info please check the components's official documentation",link:"https://react-bootstrap.github.io/components/alerts/"})})}),Object(j.jsx)(r.a,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(b.a,{title:"Basic",children:f})})}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(o.a,{children:Object(j.jsx)(b.a,{title:"Link Alert",children:h})}),Object(j.jsx)(o.a,{children:Object(j.jsx)(b.a,{title:"Dismissing",children:O})})]}),Object(j.jsx)(r.a,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(b.a,{title:"Additional Content",children:Object(j.jsxs)(i.a,{variant:"success",children:[Object(j.jsx)(i.a.Heading,{as:"h4",children:"Well done!"}),Object(j.jsx)("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})})})})]})}},681:function(e,t,a){"use strict";var n=a(4),c=a(1),s=a.n(c),i=a(12),r=a.n(i);t.a=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(n.a)({},t,{ref:a,className:r()(t.className,e)}))}))}},685:function(e,t,a){"use strict";var n=a(1),c=a.n(n),s=a(705),i=a(0);t.a=function(e){return Object(i.jsx)(c.a.Fragment,{children:Object(i.jsxs)(s.a,{variant:"warning",children:[e.message,Object(i.jsx)(s.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}},689:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(14),i=a.n(s),r=a(1),o=a.n(r),l=a(12),d=a.n(l),b=["label","onClick","className"],j={label:i.a.string.isRequired,onClick:i.a.func},u=o.a.forwardRef((function(e,t){var a=e.label,s=e.onClick,i=e.className,r=Object(c.a)(e,b);return o.a.createElement("button",Object(n.a)({ref:t,type:"button",className:d()("close",i),onClick:s},r),o.a.createElement("span",{"aria-hidden":"true"},"\xd7"),o.a.createElement("span",{className:"sr-only"},a))}));u.displayName="CloseButton",u.propTypes=j,u.defaultProps={label:"Close"},t.a=u},693:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(12),i=a.n(s),r=a(1),o=a.n(r),l=a(15),d=["bsPrefix","className","as"],b=["xl","lg","md","sm","xs"],j=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,r=e.as,j=void 0===r?"div":r,u=Object(c.a)(e,d),m=Object(l.a)(a,"col"),f=[],h=[];return b.forEach((function(e){var t,a,n,c=u[e];if(delete u[e],"object"===typeof c&&null!=c){var s=c.span;t=void 0===s||s,a=c.offset,n=c.order}else t=c;var i="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+m+i:""+m+i+"-"+t),null!=n&&h.push("order"+i+"-"+n),null!=a&&h.push("offset"+i+"-"+a)})),f.length||f.push(m),o.a.createElement(j,Object(n.a)({},u,{ref:t,className:i.a.apply(void 0,[s].concat(f,h))}))}));j.displayName="Col",t.a=j},696:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(12),i=a.n(s),r=a(1),o=a.n(r),l=a(15),d=["bsPrefix","className","noGutters","as"],b=["xl","lg","md","sm","xs"],j=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,r=e.noGutters,j=e.as,u=void 0===j?"div":j,m=Object(c.a)(e,d),f=Object(l.a)(a,"row"),h=f+"-cols",O=[];return b.forEach((function(e){var t,a=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&O.push(""+h+n+"-"+t)})),o.a.createElement(u,Object(n.a)({ref:t},m,{className:i.a.apply(void 0,[s,f,r&&"no-gutters"].concat(O))}))}));j.displayName="Row",j.defaultProps={noGutters:!1},t.a=j},697:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(12),i=a.n(s),r=a(1),o=a.n(r),l=a(15),d=a(57),b=a(681),j=a(218),u=["bsPrefix","className","variant","as"],m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,r=e.variant,d=e.as,b=void 0===d?"img":d,j=Object(c.a)(e,u),m=Object(l.a)(a,"card-img");return o.a.createElement(b,Object(n.a)({ref:t,className:i()(r?m+"-"+r:m,s)},j))}));m.displayName="CardImg",m.defaultProps={variant:null};var f=m,h=["bsPrefix","className","bg","text","border","body","children","as"],O=Object(b.a)("h5"),p=Object(b.a)("h6"),x=Object(d.a)("card-body"),v=Object(d.a)("card-title",{Component:O}),g=Object(d.a)("card-subtitle",{Component:p}),N=Object(d.a)("card-link",{Component:"a"}),y=Object(d.a)("card-text",{Component:"p"}),w=Object(d.a)("card-header"),E=Object(d.a)("card-footer"),k=Object(d.a)("card-img-overlay"),C=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,d=e.bg,b=e.text,u=e.border,m=e.body,f=e.children,O=e.as,p=void 0===O?"div":O,v=Object(c.a)(e,h),g=Object(l.a)(a,"card"),N=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return o.a.createElement(j.a.Provider,{value:N},o.a.createElement(p,Object(n.a)({ref:t},v,{className:i()(s,g,d&&"bg-"+d,b&&"text-"+b,u&&"border-"+u)}),m?o.a.createElement(x,null,f):f))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=f,C.Title=v,C.Subtitle=g,C.Body=x,C.Link=N,C.Text=y,C.Header=w,C.Footer=E,C.ImgOverlay=k;t.a=C},705:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(12),i=a.n(s),r=a(1),o=a.n(r),l=a(48),d=a(36),b=a(15),j=a(220),u=a(689),m=a(681),f=a(57),h=a(87),O=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],p=Object(m.a)("h4");p.displayName="DivStyledAsH4";var x=Object(f.a)("alert-heading",{Component:p}),v=Object(f.a)("alert-link",{Component:h.a}),g={show:!0,transition:j.a,closeLabel:"Close alert"},N=o.a.forwardRef((function(e,t){var a=Object(l.a)(e,{show:"onClose"}),s=a.bsPrefix,r=a.show,m=a.closeLabel,f=a.className,h=a.children,p=a.variant,x=a.onClose,v=a.dismissible,g=a.transition,N=Object(c.a)(a,O),y=Object(b.a)(s,"alert"),w=Object(d.a)((function(e){x&&x(!1,e)})),E=!0===g?j.a:g,k=o.a.createElement("div",Object(n.a)({role:"alert"},E?void 0:N,{ref:t,className:i()(f,y,p&&y+"-"+p,v&&y+"-dismissible")}),v&&o.a.createElement(u.a,{onClick:w,label:m}),h);return E?o.a.createElement(E,Object(n.a)({unmountOnExit:!0},N,{ref:void 0,in:r}),k):r?k:null}));N.displayName="Alert",N.defaultProps=g,N.Link=v,N.Heading=x,t.a=N},804:function(e,t,a){"use strict";var n=a(10),c=a(26),s=a(1),i=a.n(s),r=a(668),o=a(697),l=a(873),d=a(2),b=a(66),j=a(0);t.a=function(e){var t,a,u,m,f,h=e.isOption,O=e.title,p=e.children,x=e.cardClass,v=e.optionClass,g=Object(s.useState)(!1),N=Object(c.a)(g,2),y=N[0],w=N[1],E=Object(s.useState)(!1),k=Object(c.a)(E,2),C=k[0],P=k[1],R=Object(s.useState)(!1),I=Object(c.a)(R,2),L=I[0],M=I[1],A=Object(s.useState)(!1),D=Object(c.a)(A,2),H=D[0],S=D[1],T=Object(b.a)(),B=[];return h&&(u=Object(j.jsx)("div",{className:"card-header-right "+v,children:Object(j.jsxs)(r.a,{alignRight:!0,className:"btn-group card-option",children:[Object(j.jsx)(r.a.Toggle,{id:"dropdown-basic",className:"btn-icon",children:Object(j.jsx)("i",{className:"feather icon-more-horizontal"})}),Object(j.jsxs)(r.a.Menu,{as:"ul",className:"list-unstyled card-option",children:[Object(j.jsxs)(r.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return w(!y)},children:[Object(j.jsx)("i",{className:y?"feather icon-minimize":"feather icon-maximize"}),Object(j.jsxs)(d.b,{to:"#",children:[" ",y?"Restore":"Maximize"," "]})]}),Object(j.jsxs)(r.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return P(!C)},children:[Object(j.jsx)("i",{className:C?"feather icon-plus":"feather icon-minus"}),Object(j.jsxs)(d.b,{to:"#",children:[" ",C?"Expand":"Collapse"," "]})]}),Object(j.jsxs)(r.a.Item,{as:"li",className:"dropdown-item",onClick:function(){M(!0),setInterval((function(){M(!1)}),3e3)},children:[Object(j.jsx)("i",{className:"feather icon-refresh-cw"}),Object(j.jsx)(d.b,{to:"#",children:" Reload "})]}),Object(j.jsxs)(r.a.Item,{as:"li",className:"dropdown-item",onClick:function(){S(!0)},children:[Object(j.jsx)("i",{className:"feather icon-trash"}),Object(j.jsx)(d.b,{to:"#",children:" Remove "})]})]})]})})),m=Object(j.jsxs)(o.a.Header,{children:[Object(j.jsx)(o.a.Title,{as:"h5",children:O}),u]}),y&&(B=[].concat(Object(n.a)(B),["full-card"]),t={position:"fixed",top:0,left:0,right:0,width:T.width,height:T.height}),L&&(B=[].concat(Object(n.a)(B),["card-load"]),a=Object(j.jsx)("div",{className:"card-loader",children:Object(j.jsx)("i",{className:"pct-loader1 anim-rotate"})})),H&&(B=[].concat(Object(n.a)(B),["d-none"])),x&&(B=[].concat(Object(n.a)(B),[x])),f=Object(j.jsxs)(o.a,{className:B.join(" "),style:t,children:[m,Object(j.jsx)(l.a,{in:!C,children:Object(j.jsx)("div",{children:Object(j.jsx)(o.a.Body,{children:p})})}),a]}),Object(j.jsx)(i.a.Fragment,{children:f})}},873:function(e,t,a){"use strict";var n,c=a(4),s=a(7),i=a(12),r=a.n(i),o=a(124),l=a(1),d=a.n(l),b=a(123),j=a(227),u=a(228),m=a(226),f=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function O(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=h[e];return a+parseInt(Object(o.a)(t,n[0]),10)+parseInt(Object(o.a)(t,n[1]),10)}var p=((n={})[b.c]="collapse",n[b.d]="collapsing",n[b.b]="collapsing",n[b.a]="collapse show",n),x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:O},v=d.a.forwardRef((function(e,t){var a=e.onEnter,n=e.onEntering,i=e.onEntered,o=e.onExit,h=e.onExiting,x=e.className,v=e.children,g=e.dimension,N=void 0===g?"height":g,y=e.getDimensionValue,w=void 0===y?O:y,E=Object(s.a)(e,f),k="function"===typeof N?N():N,C=Object(l.useMemo)((function(){return Object(u.a)((function(e){e.style[k]="0"}),a)}),[k,a]),P=Object(l.useMemo)((function(){return Object(u.a)((function(e){var t="scroll"+k[0].toUpperCase()+k.slice(1);e.style[k]=e[t]+"px"}),n)}),[k,n]),R=Object(l.useMemo)((function(){return Object(u.a)((function(e){e.style[k]=null}),i)}),[k,i]),I=Object(l.useMemo)((function(){return Object(u.a)((function(e){e.style[k]=w(k,e)+"px",Object(m.a)(e)}),o)}),[o,w,k]),L=Object(l.useMemo)((function(){return Object(u.a)((function(e){e.style[k]=null}),h)}),[k,h]);return d.a.createElement(b.e,Object(c.a)({ref:t,addEndListener:j.a},E,{"aria-expanded":E.role?E.in:null,onEnter:C,onEntering:P,onEntered:R,onExit:I,onExiting:L}),(function(e,t){return d.a.cloneElement(v,Object(c.a)({},t,{className:r()(x,v.props.className,p[e],"width"===k&&"width")}))}))}));v.defaultProps=x,t.a=v}}]);
//# sourceMappingURL=64.63a4dd4f.chunk.js.map