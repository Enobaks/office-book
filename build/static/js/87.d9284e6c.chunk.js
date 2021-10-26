(this["webpackJsonppriv-react-datta-able-dashboard-pro"]=this["webpackJsonppriv-react-datta-able-dashboard-pro"]||[]).push([[87],{2292:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),i=s(696),c=s(693),l=s(697),n=s(712),d=s(177),o=s(18),j=s(6),b=s(742),m=s(0);t.default=function(){var e=Object(a.useContext)(o.a),t=e.state.layoutType,s=e.dispatch;return Object(a.useEffect)((function(){s({type:j.k,layoutType:"dark",navBackColor:"navbar-dark",navBrandColor:"brand-dark"}),s({type:j.h,headerBackColor:"header-dark"})}),[t,s]),Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(i.a,{children:Object(m.jsx)(c.a,{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(l.a.Header,{children:Object(m.jsx)(l.a.Title,{as:"h5",children:"Dark Layout"})}),Object(m.jsxs)(l.a.Body,{children:[Object(m.jsx)("p",{children:"In Dark Layout - Your entire layout will be set to Dark colors. You can also change different colors using live customizer."}),Object(m.jsx)("h5",{className:"m-15",children:"You can edit this file at [ ../src/config/constant.js ] "}),Object(m.jsxs)(n.a,{bordered:!0,striped:!0,responsive:!0,children:[Object(m.jsx)("thead",{className:"header-table",children:Object(m.jsx)("tr",{children:Object(m.jsx)("th",{children:"Configuration"})})}),Object(m.jsx)("tbody",{children:Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:Object(m.jsxs)(d.a,{as:"ul",bsPrefix:"",className:"p-l-40",children:[Object(m.jsxs)(d.a.Item,{as:"li",bsPrefix:" ",children:["layout: ",Object(m.jsx)("code",{children:"vertical/horizontal"})]}),Object(m.jsxs)(d.a.Item,{as:"li",bsPrefix:" ",children:["layoutType: ",Object(m.jsx)("code",{children:"dark"})]}),Object(m.jsxs)(d.a.Item,{as:"li",bsPrefix:" ",children:["headerBackColor: ",Object(m.jsx)("code",{children:"header-dark"})]})]})})})})]})]})]})})}),Object(m.jsx)(b.a,{})]})}},681:function(e,t,s){"use strict";var a=s(4),r=s(1),i=s.n(r),c=s(12),l=s.n(c);t.a=function(e){return i.a.forwardRef((function(t,s){return i.a.createElement("div",Object(a.a)({},t,{ref:s,className:l()(t.className,e)}))}))}},693:function(e,t,s){"use strict";var a=s(4),r=s(7),i=s(12),c=s.n(i),l=s(1),n=s.n(l),d=s(15),o=["bsPrefix","className","as"],j=["xl","lg","md","sm","xs"],b=n.a.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,l=e.as,b=void 0===l?"div":l,m=Object(r.a)(e,o),x=Object(d.a)(s,"col"),u=[],h=[];return j.forEach((function(e){var t,s,a,r=m[e];if(delete m[e],"object"===typeof r&&null!=r){var i=r.span;t=void 0===i||i,s=r.offset,a=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&u.push(!0===t?""+x+c:""+x+c+"-"+t),null!=a&&h.push("order"+c+"-"+a),null!=s&&h.push("offset"+c+"-"+s)})),u.length||u.push(x),n.a.createElement(b,Object(a.a)({},m,{ref:t,className:c.a.apply(void 0,[i].concat(u,h))}))}));b.displayName="Col",t.a=b},696:function(e,t,s){"use strict";var a=s(4),r=s(7),i=s(12),c=s.n(i),l=s(1),n=s.n(l),d=s(15),o=["bsPrefix","className","noGutters","as"],j=["xl","lg","md","sm","xs"],b=n.a.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,l=e.noGutters,b=e.as,m=void 0===b?"div":b,x=Object(r.a)(e,o),u=Object(d.a)(s,"row"),h=u+"-cols",O=[];return j.forEach((function(e){var t,s=x[e];delete x[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=s&&"object"===typeof s?s.cols:s)&&O.push(""+h+a+"-"+t)})),n.a.createElement(m,Object(a.a)({ref:t},x,{className:c.a.apply(void 0,[i,u,l&&"no-gutters"].concat(O))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},t.a=b},697:function(e,t,s){"use strict";var a=s(4),r=s(7),i=s(12),c=s.n(i),l=s(1),n=s.n(l),d=s(15),o=s(57),j=s(681),b=s(218),m=["bsPrefix","className","variant","as"],x=n.a.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,l=e.variant,o=e.as,j=void 0===o?"img":o,b=Object(r.a)(e,m),x=Object(d.a)(s,"card-img");return n.a.createElement(j,Object(a.a)({ref:t,className:c()(l?x+"-"+l:x,i)},b))}));x.displayName="CardImg",x.defaultProps={variant:null};var u=x,h=["bsPrefix","className","bg","text","border","body","children","as"],O=Object(j.a)("h5"),f=Object(j.a)("h6"),p=Object(o.a)("card-body"),v=Object(o.a)("card-title",{Component:O}),P=Object(o.a)("card-subtitle",{Component:f}),N=Object(o.a)("card-link",{Component:"a"}),g=Object(o.a)("card-text",{Component:"p"}),I=Object(o.a)("card-header"),y=Object(o.a)("card-footer"),T=Object(o.a)("card-img-overlay"),k=n.a.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,o=e.bg,j=e.text,m=e.border,x=e.body,u=e.children,O=e.as,f=void 0===O?"div":O,v=Object(r.a)(e,h),P=Object(d.a)(s,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:P+"-header"}}),[P]);return n.a.createElement(b.a.Provider,{value:N},n.a.createElement(f,Object(a.a)({ref:t},v,{className:c()(i,P,o&&"bg-"+o,j&&"text-"+j,m&&"border-"+m)}),x?n.a.createElement(p,null,u):u))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=u,k.Title=v,k.Subtitle=P,k.Body=p,k.Link=N,k.Text=g,k.Header=I,k.Footer=y,k.ImgOverlay=T;t.a=k},712:function(e,t,s){"use strict";var a=s(4),r=s(7),i=s(12),c=s.n(i),l=s(1),n=s.n(l),d=s(15),o=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],j=n.a.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,l=e.striped,j=e.bordered,b=e.borderless,m=e.hover,x=e.size,u=e.variant,h=e.responsive,O=Object(r.a)(e,o),f=Object(d.a)(s,"table"),p=c()(i,f,u&&f+"-"+u,x&&f+"-"+x,l&&f+"-striped",j&&f+"-bordered",b&&f+"-borderless",m&&f+"-hover"),v=n.a.createElement("table",Object(a.a)({},O,{className:p,ref:t}));if(h){var P=f+"-responsive";return"string"===typeof h&&(P=P+"-"+h),n.a.createElement("div",{className:P},v)}return v}));t.a=j},742:function(e,t,s){"use strict";var a=s(1),r=s.n(a),i=s(696),c=s(693),l=s(697),n=s(177),d=s(0);t.a=function(){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(c.a,{md:6,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Inline Text Elements"})}),Object(d.jsxs)(l.a.Body,{children:[Object(d.jsx)(l.a.Text,{className:"lead m-t-0",children:"Your title goes here"}),"You can use the mark tag to",Object(d.jsx)("mark",{children:"highlight"})," text.",Object(d.jsx)("br",{}),Object(d.jsx)("del",{children:"This line of text is meant to be treated as deleted text."}),Object(d.jsx)("br",{}),Object(d.jsx)("ins",{children:"This line of text is meant to be treated as an addition to the document."}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"rendered as bold text"}),Object(d.jsx)("br",{}),Object(d.jsx)("em",{children:"rendered as italicized text"})]})]})}),Object(d.jsx)(c.a,{md:6,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Contextual Text Colors"})}),Object(d.jsxs)(l.a.Body,{children:[Object(d.jsx)(l.a.Text,{className:"text-muted mb-1",children:"Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh."}),Object(d.jsx)(l.a.Text,{className:"text-primary mb-1",children:"Nullam id dolor id nibh ultricies vehicula ut id elit."}),Object(d.jsx)(l.a.Text,{className:"text-success mb-1",children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}),Object(d.jsx)(l.a.Text,{className:"text-info mb-1",children:"Maecenas sed diam eget risus varius blandit sit amet non magna."}),Object(d.jsx)(l.a.Text,{className:"text-warning mb-1",children:"Etiam porta sem malesuada magna mollis euismod."}),Object(d.jsx)(l.a.Text,{className:"text-danger mb-1",children:"Donec ullamcorper nulla non metus auctor fringilla."}),Object(d.jsx)(l.a.Text,{className:"text-dark mb-1",children:"Nullam id dolor id nibh ultricies vehicula ut id elit."})]})]})}),Object(d.jsx)(c.a,{md:6,xl:4,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Unordered"})}),Object(d.jsx)(l.a.Body,{children:Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Lorem ipsum dolor sit amet"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Consectetur adipiscing elit"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Integer molestie lorem at massa"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Facilisis in pretium nisl aliquet"}),Object(d.jsxs)(n.a.Item,{as:"li",bsPrefix:" ",children:["Nulla volutpat aliquam velit",Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Phasellus iaculis neque"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Purus sodales ultricies"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Vestibulum laoreet porttitor sem"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Ac tristique libero volutpat at"})]})]}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Faucibus porta lacus fringilla vel"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Aenean sit amet erat nunc"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Eget porttitor lorem"})]})})]})}),Object(d.jsx)(c.a,{md:6,xl:4,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Ordered"})}),Object(d.jsx)(l.a.Body,{children:Object(d.jsxs)(n.a,{as:"ol",bsPrefix:" ",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Lorem ipsum dolor sit amet"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Consectetur adipiscing elit"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Integer molestie lorem at massa"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Facilisis in pretium nisl aliquet"}),Object(d.jsxs)(n.a.Item,{as:"li",bsPrefix:" ",children:["Nulla volutpat aliquam velit",Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Phasellus iaculis neque"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Purus sodales ultricies"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Vestibulum laoreet porttitor sem"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Ac tristique libero volutpat at"})]})]}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Faucibus porta lacus fringilla vel"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Aenean sit amet erat nunc"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Eget porttitor lorem"})]})})]})}),Object(d.jsx)(c.a,{md:6,xl:4,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Unstyled"})}),Object(d.jsxs)(l.a.Body,{children:[Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",className:"list-unstyled",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Lorem ipsum dolor sit amet"}),Object(d.jsxs)(n.a.Item,{as:"li",bsPrefix:" ",children:["Integer molestie lorem at massa",Object(d.jsx)(n.a,{as:"ul",bsPrefix:" ",children:Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Phasellus iaculis neque"})})]}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Faucibus porta lacus fringilla vel"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",children:"Eget porttitor lorem"})]}),Object(d.jsx)("h5",{children:"Inline"}),Object(d.jsx)("hr",{}),Object(d.jsxs)(n.a,{as:"ul",bsPrefix:" ",className:"list-inline m-b-0",children:[Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",className:"list-inline-item",children:"Lorem ipsum"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",className:"list-inline-item",children:"Phasellus iaculis"}),Object(d.jsx)(n.a.Item,{as:"li",bsPrefix:" ",className:"list-inline-item",children:"Nulla volutpat"})]})]})]})}),Object(d.jsx)(c.a,{md:6,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Blockquotes"})}),Object(d.jsxs)(l.a.Body,{children:[Object(d.jsx)(l.a.Text,{className:"text-muted m-b-30",children:"Your awesome text goes here."}),Object(d.jsxs)("blockquote",{className:"blockquote",children:[Object(d.jsx)(l.a.Text,{className:"mb-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."}),Object(d.jsxs)("footer",{className:"blockquote-footer",children:["Someone famous in ",Object(d.jsx)("cite",{title:"Source Title",children:"Source Title"})]})]}),Object(d.jsxs)(l.a.Text,{className:"text-muted m-b-15 m-t-20",children:["Add ",Object(d.jsx)("code",{children:".text-right"})," for a blockquote with right-aligned content."]}),Object(d.jsxs)("blockquote",{className:"blockquote text-right",children:[Object(d.jsx)(l.a.Text,{className:"mb-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."}),Object(d.jsxs)("footer",{className:"blockquote-footer",children:["Someone famous in ",Object(d.jsx)("cite",{title:"Source Title",children:"Source Title"})]})]})]})]})}),Object(d.jsx)(c.a,{md:6,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Header,{children:Object(d.jsx)(l.a.Title,{as:"h5",children:"Horizontal Description"})}),Object(d.jsx)(l.a.Body,{children:Object(d.jsxs)("dl",{className:"dl-horizontal row",children:[Object(d.jsx)("dt",{className:"col-sm-3",children:"Description lists"}),Object(d.jsx)("dd",{className:"col-sm-9",children:"A description list is perfect for defining terms."}),Object(d.jsx)("dt",{className:"col-sm-3",children:"Euismod"}),Object(d.jsx)("dd",{className:"col-sm-9",children:"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."}),Object(d.jsx)("dd",{className:"col-sm-9",children:"Donec id elit non mi porta gravida at eget metus."}),Object(d.jsx)("dt",{className:"col-sm-3",children:"Malesuada porta"}),Object(d.jsx)("dd",{className:"col-sm-9",children:"Etiam porta sem malesuada magna mollis euismod."}),Object(d.jsx)("dt",{className:"col-sm-3 text-truncate",children:"Truncated term is truncated"}),Object(d.jsx)("dd",{className:"col-sm-9",children:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."})]})})]})})]})})}}}]);
//# sourceMappingURL=87.d9284e6c.chunk.js.map