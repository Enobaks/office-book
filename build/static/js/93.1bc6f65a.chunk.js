(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[93],{2283:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),c=s(696),r=s(693),l=s(697),n=s(712),d=s(177),j=s(18),o=s(6),b=s(742),m=s(0);t.default=function(){var e=Object(a.useContext)(j.a),t=e.state,s=t.layout,x=t.navFixedLayout,u=t.headerFixedLayout,h=e.dispatch;return Object(a.useEffect)((function(){"vertical"!==s&&h({type:o.c,layout:"vertical"}),x||h({type:o.u}),u||h({type:o.i})}),[s,x,u,h]),Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsx)(c.a,{children:Object(m.jsx)(r.a,{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(l.a.Header,{children:Object(m.jsx)(l.a.Title,{as:"h5",children:"Fixed Layout"})}),Object(m.jsxs)(l.a.Body,{children:[Object(m.jsx)("p",{children:"In Fixed Layout - Header & Sidebar being fixed while scrolling the page."}),Object(m.jsx)("div",{className:"alert alert-info mb-0",role:"alert",children:Object(m.jsx)("p",{className:"mb-0",children:"It is best suited for those applications where you need the sidebar & header elements easily accessible every time when you scroll the page."})}),Object(m.jsx)("h5",{className:"m-15",children:"You can edit this file at [ ../src/app/app-constant.js ] "}),Object(m.jsxs)(n.a,{bordered:!0,striped:!0,responsive:!0,children:[Object(m.jsx)("thead",{className:"header-table",children:Object(m.jsx)("tr",{children:Object(m.jsx)("th",{children:"Configuration"})})}),Object(m.jsx)("tbody",{children:Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:Object(m.jsxs)(d.a,{as:"ul",bsPrefix:"",className:"p-l-40",children:[Object(m.jsxs)(d.a.Item,{as:"li",bsPrefix:" ",children:["layout: ",Object(m.jsx)("code",{children:"vertical"})]}),Object(m.jsxs)(d.a.Item,{as:"li",bsPrefix:" ",children:["navFixedLayout: ",Object(m.jsx)("code",{children:"true"})]}),Object(m.jsxs)(d.a.Item,{as:"li",bsPrefix:" ",children:["headerFixedLayout: ",Object(m.jsx)("code",{children:"true"})]})]})})})})]})]})]})})}),Object(m.jsx)(b.a,{})]})}},681:function(e,t,s){"use strict";var a=s(4),i=s(1),c=s.n(i),r=s(12),l=s.n(r);t.a=function(e){return c.a.forwardRef((function(t,s){return c.a.createElement("div",Object(a.a)({},t,{ref:s,className:l()(t.className,e)}))}))}},693:function(e,t,s){"use strict";var a=s(4),i=s(7),c=s(12),r=s.n(c),l=s(1),n=s.n(l),d=s(15),j=["bsPrefix","className","as"],o=["xl","lg","md","sm","xs"],b=n.a.forwardRef((function(e,t){var s=e.bsPrefix,c=e.className,l=e.as,b=void 0===l?"div":l,m=Object(i.a)(e,j),x=Object(d.a)(s,"col"),u=[],h=[];return o.forEach((function(e){var t,s,a,i=m[e];if(delete m[e],"object"===typeof i&&null!=i){var c=i.span;t=void 0===c||c,s=i.offset,a=i.order}else t=i;var r="xs"!==e?"-"+e:"";t&&u.push(!0===t?""+x+r:""+x+r+"-"+t),null!=a&&h.push("order"+r+"-"+a),null!=s&&h.push("offset"+r+"-"+s)})),u.length||u.push(x),n.a.createElement(b,Object(a.a)({},m,{ref:t,className:r.a.apply(void 0,[c].concat(u,h))}))}));b.displayName="Col",t.a=b},696:function(e,t,s){"use strict";var a=s(4),i=s(7),c=s(12),r=s.n(c),l=s(1),n=s.n(l),d=s(15),j=["bsPrefix","className","noGutters","as"],o=["xl","lg","md","sm","xs"],b=n.a.forwardRef((function(e,t){var s=e.bsPrefix,c=e.className,l=e.noGutters,b=e.as,m=void 0===b?"div":b,x=Object(i.a)(e,j),u=Object(d.a)(s,"row"),h=u+"-cols",O=[];return o.forEach((function(e){var t,s=x[e];delete x[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=s&&"object"===typeof s?s.cols:s)&&O.push(""+h+a+"-"+t)})),n.a.createElement(m,Object(a.a)({ref:t},x,{className:r.a.apply(void 0,[c,u,l&&"no-gutters"].concat(O))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},t.a=b},697:function(e,t,s){"use strict";var a=s(4),i=s(7),c=s(12),r=s.n(c),l=s(1),n=s.n(l),d=s(15),j=s(57),o=s(681),b=s(218),m=["bsPrefix","className","variant","as"],x=n.a.forwardRef((function(e,t){var s=e.bsPrefix,c=e.className,l=e.variant,j=e.as,o=void 0===j?"img":j,b=Object(i.a)(e,m),x=Object(d.a)(s,"card-img");return n.a.createElement(o,Object(a.a)({ref:t,className:r()(l?x+"-"+l:x,c)},b))}));x.displayName="CardImg",x.defaultProps={variant:null};var u=x,h=["bsPrefix","className","bg","text","border","body","children","as"],O=Object(o.a)("h5"),f=Object(o.a)("h6"),p=Object(j.a)("card-body"),v=Object(j.a)("card-title",{Component:O}),P=Object(j.a)("card-subtitle",{Component:f}),N=Object(j.a)("card-link",{Component:"a"}),g=Object(j.a)("card-text",{Component:"p"}),I=Object(j.a)("card-header"),y=Object(j.a)("card-footer"),T=Object(j.a)("card-img-overlay"),E=n.a.forwardRef((function(e,t){var s=e.bsPrefix,c=e.className,j=e.bg,o=e.text,m=e.border,x=e.body,u=e.children,O=e.as,f=void 0===O?"div":O,v=Object(i.a)(e,h),P=Object(d.a)(s,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:P+"-header"}}),[P]);return n.a.createElement(b.a.Provider,{value:N},n.a.createElement(f,Object(a.a)({ref:t},v,{className:r()(c,P,j&&"bg-"+j,o&&"text-"+o,m&&"border-"+m)}),x?n.a.createElement(p,null,u):u))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=u,E.Title=v,E.Subtitle=P,E.Body=p,E.Link=N,E.Text=g,E.Header=I,E.Footer=y,E.ImgOverlay=T;t.a=E},712:function(e,t,s){"use strict";var a=s(4),i=s(7),c=s(12),r=s.n(c),l=s(1),n=s.n(l),d=s(15),j=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],o=n.a.forwardRef((function(e,t){var s=e.bsPrefix,c=e.className,l=e.striped,o=e.bordered,b=e.borderless,m=e.hover,x=e.size,u=e.variant,h=e.responsive,O=Object(i.a)(e,j),f=Object(d.a)(s,"table"),p=r()(c,f,u&&f+"-"+u,x&&f+"-"+x,l&&f+"-striped",o&&f+"-bordered",b&&f+"-borderless",m&&f+"-hover"),v=n.a.createElement("table",Object(a.a)({},O,{className:p,ref:t}));if(h){var P=f+"-responsive";return"string"===typeof h&&(P=P+"-"+h),n.a.createElement("div",{className:P},v)}return v}));t.a=o},742:function(e,t,s){"use strict";var a=s(1),i=s.n(a),c=s(696),r=s(693),l=s(697),n=s(177),d=s(0);t.a=function(){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)(c.a,{children:[Object(d.jsx)(r.a,{md:6,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Inline Text Elements"})}),Object(d.jsxs)(l.a.Body,{children:[Object(d.jsx)(l.a.Text,{className:"lead m-t-0",children:"Your title goes here"}),"You can use the mark tag to",Object(d.jsx)("mark",{children:"highlight"})," text.",Object(d.jsx)("br",{}),Object(d.jsx)("del",{children:"This line of text is meant to be treated as deleted text."}),Object(d.jsx)("br",{}),Object(d.jsx)("ins",{children:"This line of text is meant to be treated as an addition to the document."}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"rendered as bold text"}),Object(d.jsx)("br",{}),Object(d.jsx)("em",{children:"rendered as italicized text"})]})]})}),Object(d.jsx)(r.a,{md:6,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Contextual Text Colors"})}),Object(d.jsxs)(l.a.Body,{children:[Object(d.jsx)(l.a.Text,{className:"text-muted mb-1",children:"Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh."}),Object(d.jsx)(l.a.Text,{className:"text-primary mb-1",children:"Nullam id dolor id nibh ultricies vehicula ut id elit."}),Object(d.jsx)(l.a.Text,{className:"text-success mb-1",children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}),Object(d.jsx)(l.a.Text,{className:"text-info mb-1",children:"Maecenas sed diam eget risus varius blandit sit amet non magna."}),Object(d.jsx)(l.a.Text,{className:"text-warning mb-1",children:"Etiam porta sem malesuada magna mollis euismod."}),Object(d.jsx)(l.a.Text,{className:"text-danger mb-1",children:"Donec ullamcorper nulla non metus auctor fringilla."}),Object(d.jsx)(l.a.Text,{className:"text-dark mb-1",children:"Nullam id dolor id nibh ultricies vehicula ut id elit."})]})]})}),Object(d.jsx)(r.a,{md:6,xl:4,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Unordered"})}),Object(d.jsx)(l.a.Body,{children:Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Lorem ipsum dolor sit amet"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Consectetur adipiscing elit"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Integer molestie lorem at massa"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Facilisis in pretium nisl aliquet"}),Object(d.jsxs)(n.a.Item,{as:"li",bsPrefix:" ",children:["Nulla volutpat aliquam velit",Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Phasellus iaculis neque"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Purus sodales ultricies"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Vestibulum laoreet porttitor sem"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Ac tristique libero volutpat at"})]})]}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Faucibus porta lacus fringilla vel"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Aenean sit amet erat nunc"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Eget porttitor lorem"})]})})]})}),Object(d.jsx)(r.a,{md:6,xl:4,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Ordered"})}),Object(d.jsx)(l.a.Body,{children:Object(d.jsxs)(n.a,{as:"ol",bsPrefix:" ",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Lorem ipsum dolor sit amet"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Consectetur adipiscing elit"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Integer molestie lorem at massa"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Facilisis in pretium nisl aliquet"}),Object(d.jsxs)(n.a.Item,{as:"li",bsPrefix:" ",children:["Nulla volutpat aliquam velit",Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Phasellus iaculis neque"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Purus sodales ultricies"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Vestibulum laoreet porttitor sem"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Ac tristique libero volutpat at"})]})]}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Faucibus porta lacus fringilla vel"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Aenean sit amet erat nunc"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Eget porttitor lorem"})]})})]})}),Object(d.jsx)(r.a,{md:6,xl:4,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Unstyled"})}),Object(d.jsxs)(l.a.Body,{children:[Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",className:"list-unstyled",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Lorem ipsum dolor sit amet"}),Object(d.jsxs)(n.a.Item,{as:"li",bsPrefix:" ",children:["Integer molestie lorem at massa",Object(d.jsx)(n.a,{as:"ul",bsPrefix:" ",children:Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Phasellus iaculis neque"})})]}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Faucibus porta lacus fringilla vel"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Eget porttitor lorem"})]}),Object(d.jsx)("h5",{children:"Inline"}),Object(d.jsx)("hr",{}),Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",className:"list-inline m-b-0",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",className:"list-inline-item",children:"Lorem ipsum"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",className:"list-inline-item",children:"Phasellus iaculis"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",className:"list-inline-item",children:"Nulla volutpat"})]})]})]})}),Object(d.jsx)(r.a,{md:6,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Blockquotes"})}),Object(d.jsxs)(l.a.Body,{children:[Object(d.jsx)(l.a.Text,{className:"text-muted m-b-30",children:"Your awesome text goes here."}),Object(d.jsxs)("blockquote",{className:"blockquote",children:[Object(d.jsx)(l.a.Text,{className:"mb-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."}),Object(d.jsxs)("footer",{className:"blockquote-footer",children:["Someone famous in ",Object(d.jsx)("cite",{title:"Source Title",children:"Source Title"})]})]}),Object(d.jsxs)(l.a.Text,{className:"text-muted m-b-15 m-t-20",children:["Add ",Object(d.jsx)("code",{children:".text-right"})," for a blockquote with right-aligned content."]}),Object(d.jsxs)("blockquote",{className:"blockquote text-right",children:[Object(d.jsx)(l.a.Text,{className:"mb-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."}),Object(d.jsxs)("footer",{className:"blockquote-footer",children:["Someone famous in ",Object(d.jsx)("cite",{title:"Source Title",children:"Source Title"})]})]})]})]})}),Object(d.jsx)(r.a,{md:6,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Horizontal Description"})}),Object(d.jsx)(l.a.Body,{children:Object(d.jsxs)("dl",{className:"dl-horizontal row",children:[Object(d.jsx)("dt",{className:"col-sm-3",children:"Description lists"}),Object(d.jsx)("dd",{className:"col-sm-9",children:"A description list is perfect for defining terms."}),Object(d.jsx)("dt",{className:"col-sm-3",children:"Euismod"}),Object(d.jsx)("dd",{className:"col-sm-9",children:"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."}),Object(d.jsx)("dd",{className:"col-sm-9",children:"Donec id elit non mi porta gravida at eget metus."}),Object(d.jsx)("dt",{className:"col-sm-3",children:"Malesuada porta"}),Object(d.jsx)("dd",{className:"col-sm-9",children:"Etiam porta sem malesuada magna mollis euismod."}),Object(d.jsx)("dt",{className:"col-sm-3 text-truncate",children:"Truncated term is truncated"}),Object(d.jsx)("dd",{className:"col-sm-9",children:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."})]})})]})})]})})}}}]);
//# sourceMappingURL=93.1bc6f65a.chunk.js.map