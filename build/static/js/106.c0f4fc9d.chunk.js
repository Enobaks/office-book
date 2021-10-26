(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[106],{2299:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(696),l=a(693),n=a(697),i=a(712),d=a(18),o=a(6),j=a(0);t.default=function(){var e=Object(c.useContext)(d.a),t=e.state,a=t.layout,b=t.subLayout,h=t.configBlock,O=e.dispatch;return Object(c.useEffect)((function(){"vertical"!==a&&O({type:o.c,layout:"vertical"}),O({type:o.d,subLayout:"layout-4-2"}),h&&O({type:o.g})}),[O,a,b,h]),Object(j.jsx)(r.a.Fragment,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(n.a,{children:[Object(j.jsx)(n.a.Header,{children:Object(j.jsx)(n.a.Title,{as:"h5",children:"Pre Build Layout 4-2"})}),Object(j.jsxs)(n.a.Body,{children:[Object(j.jsxs)(n.a.Text,{children:["Open ",Object(j.jsx)("code",{children:"constant.js"})," file from directory [ ../src/config/constant.js ] and edit"," ",Object(j.jsx)("mark",{children:"highlighted"})," options in this file."]}),Object(j.jsxs)(i.a,{bordered:!0,striped:!0,responsive:!0,children:[Object(j.jsx)("thead",{className:"header-table",children:Object(j.jsx)("tr",{children:Object(j.jsx)("th",{children:"Configuration"})})}),Object(j.jsx)("tbody",{children:Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("mark",{children:["layout: ",Object(j.jsx)("code",{children:"vertical"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("mark",{children:["subLayout: ",Object(j.jsx)("code",{children:"layout-4-2"})]})}),Object(j.jsxs)("li",{children:["collapseMenu: ",Object(j.jsx)("code",{children:"false"})]}),Object(j.jsxs)("li",{children:["layoutType: ",Object(j.jsx)("code",{children:"menu-dark"})]}),Object(j.jsxs)("li",{children:["navIconColor: ",Object(j.jsx)("code",{children:"false"})]}),Object(j.jsxs)("li",{children:["headerBackColor: ",Object(j.jsx)("code",{children:"header-default"})]}),Object(j.jsxs)("li",{children:["navBackColor: ",Object(j.jsx)("code",{children:"navbar-default"})]}),Object(j.jsxs)("li",{children:["navBrandColor: ",Object(j.jsx)("code",{children:"brand-default"})]}),Object(j.jsxs)("li",{children:["navBackImage: ",Object(j.jsx)("code",{children:"false"})]}),Object(j.jsxs)("li",{children:["rtlLayout: ",Object(j.jsx)("code",{children:"false"})]}),Object(j.jsxs)("li",{children:["navFixedLayout: ",Object(j.jsx)("code",{children:"true"})]}),Object(j.jsxs)("li",{children:["headerFixedLayout: ",Object(j.jsx)("code",{children:"false"})]}),Object(j.jsxs)("li",{children:["boxLayout: ",Object(j.jsx)("code",{children:"false"})]}),Object(j.jsxs)("li",{children:["navDropdownIcon: ",Object(j.jsx)("code",{children:"style1"})]}),Object(j.jsxs)("li",{children:["navListIcon: ",Object(j.jsx)("code",{children:"style1"})]}),Object(j.jsxs)("li",{children:["navActiveListColor: ",Object(j.jsx)("code",{children:"active-default"})]}),Object(j.jsxs)("li",{children:["navListTitleColor: ",Object(j.jsx)("code",{children:"title-default"})]}),Object(j.jsxs)("li",{children:["navListTitleHide: ",Object(j.jsx)("code",{children:"false"})]}),Object(j.jsx)("li",{children:Object(j.jsxs)("mark",{children:["configBlock: ",Object(j.jsx)("code",{children:"false"})]})})]})})})})]})]})]})})})})}},681:function(e,t,a){"use strict";var c=a(4),r=a(1),s=a.n(r),l=a(12),n=a.n(l);t.a=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(c.a)({},t,{ref:a,className:n()(t.className,e)}))}))}},693:function(e,t,a){"use strict";var c=a(4),r=a(7),s=a(12),l=a.n(s),n=a(1),i=a.n(n),d=a(15),o=["bsPrefix","className","as"],j=["xl","lg","md","sm","xs"],b=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.as,b=void 0===n?"div":n,h=Object(r.a)(e,o),O=Object(d.a)(a,"col"),u=[],x=[];return j.forEach((function(e){var t,a,c,r=h[e];if(delete h[e],"object"===typeof r&&null!=r){var s=r.span;t=void 0===s||s,a=r.offset,c=r.order}else t=r;var l="xs"!==e?"-"+e:"";t&&u.push(!0===t?""+O+l:""+O+l+"-"+t),null!=c&&x.push("order"+l+"-"+c),null!=a&&x.push("offset"+l+"-"+a)})),u.length||u.push(O),i.a.createElement(b,Object(c.a)({},h,{ref:t,className:l.a.apply(void 0,[s].concat(u,x))}))}));b.displayName="Col",t.a=b},696:function(e,t,a){"use strict";var c=a(4),r=a(7),s=a(12),l=a.n(s),n=a(1),i=a.n(n),d=a(15),o=["bsPrefix","className","noGutters","as"],j=["xl","lg","md","sm","xs"],b=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.noGutters,b=e.as,h=void 0===b?"div":b,O=Object(r.a)(e,o),u=Object(d.a)(a,"row"),x=u+"-cols",f=[];return j.forEach((function(e){var t,a=O[e];delete O[e];var c="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&f.push(""+x+c+"-"+t)})),i.a.createElement(h,Object(c.a)({ref:t},O,{className:l.a.apply(void 0,[s,u,n&&"no-gutters"].concat(f))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},t.a=b},697:function(e,t,a){"use strict";var c=a(4),r=a(7),s=a(12),l=a.n(s),n=a(1),i=a.n(n),d=a(15),o=a(57),j=a(681),b=a(218),h=["bsPrefix","className","variant","as"],O=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.variant,o=e.as,j=void 0===o?"img":o,b=Object(r.a)(e,h),O=Object(d.a)(a,"card-img");return i.a.createElement(j,Object(c.a)({ref:t,className:l()(n?O+"-"+n:O,s)},b))}));O.displayName="CardImg",O.defaultProps={variant:null};var u=O,x=["bsPrefix","className","bg","text","border","body","children","as"],f=Object(j.a)("h5"),v=Object(j.a)("h6"),m=Object(o.a)("card-body"),p=Object(o.a)("card-title",{Component:f}),y=Object(o.a)("card-subtitle",{Component:v}),g=Object(o.a)("card-link",{Component:"a"}),N=Object(o.a)("card-text",{Component:"p"}),P=Object(o.a)("card-header"),C=Object(o.a)("card-footer"),k=Object(o.a)("card-img-overlay"),L=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.bg,j=e.text,h=e.border,O=e.body,u=e.children,f=e.as,v=void 0===f?"div":f,p=Object(r.a)(e,x),y=Object(d.a)(a,"card"),g=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return i.a.createElement(b.a.Provider,{value:g},i.a.createElement(v,Object(c.a)({ref:t},p,{className:l()(s,y,o&&"bg-"+o,j&&"text-"+j,h&&"border-"+h)}),O?i.a.createElement(m,null,u):u))}));L.displayName="Card",L.defaultProps={body:!1},L.Img=u,L.Title=p,L.Subtitle=y,L.Body=m,L.Link=g,L.Text=N,L.Header=P,L.Footer=C,L.ImgOverlay=k;t.a=L},712:function(e,t,a){"use strict";var c=a(4),r=a(7),s=a(12),l=a.n(s),n=a(1),i=a.n(n),d=a(15),o=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],j=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.striped,j=e.bordered,b=e.borderless,h=e.hover,O=e.size,u=e.variant,x=e.responsive,f=Object(r.a)(e,o),v=Object(d.a)(a,"table"),m=l()(s,v,u&&v+"-"+u,O&&v+"-"+O,n&&v+"-striped",j&&v+"-bordered",b&&v+"-borderless",h&&v+"-hover"),p=i.a.createElement("table",Object(c.a)({},f,{className:m,ref:t}));if(x){var y=v+"-responsive";return"string"===typeof x&&(y=y+"-"+x),i.a.createElement("div",{className:y},p)}return p}));t.a=j}}]);
//# sourceMappingURL=106.c0f4fc9d.chunk.js.map