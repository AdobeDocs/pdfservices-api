(self.webpackChunkdev_site_product_template=self.webpackChunkdev_site_product_template||[]).push([[2261],{1603:function(e,i,n){"use strict";n.d(i,{mQ:function(){return N},ck:function(){return T},__:function(){return I},NN:function(){return _},BA:function(){return h},Rp:function(){return y},ms:function(){return U}});var t=n(22122),a=n(19756),r=n(28387),s=n(68086),o=n.n(s),l=n(20697),c=n(17953),m=n(72390),d=n(94165),u=["orientation","density","isQuiet","children","className","onFontsReady"],p=["elementType","isDisabled","isSelected","className","children","icon","label"],v=["elementType","icon","isSelected","isDisabled","className","children","iconSize"],g=["className"],b=["elementType","isHidden","className","children"],f=["theme","orientation","className","APIReference"];var h=function(e,i){e.current.style.transform="translate("+i.current.offsetLeft+"px, 0px)",e.current.style.width=i.current.offsetWidth+"px"},y=function(e,i){e.current.style.transition=i?"":"none"},w="480px",z=function(e){var i;return"img"===(null==e||null===(i=e.props)||void 0===i?void 0:i.mdxType)?(0,r.cloneElement)(e,{loading:"eager"}):e},x=function(e){var i=e.image,n=void 0===i?"":i,t=e.styles,a=void 0===t?"":t;return n?(0,r.cloneElement)(n,{children:(0,m.ve)(n.props.children,z),css:(0,l.iv)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",a,";","")}):null},Z=function(e){var i=e.icon,n=e.styles;return i?(0,r.cloneElement)(i,{alt:"",css:(0,l.iv)("height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",n,";","")}):null},N=(0,r.forwardRef)((function(e,i){var n=e.orientation,s=void 0===n?"horizontal":n,c=e.density,m=void 0===c?"regular":c,d=e.isQuiet,p=void 0===d||d,v=e.children,g=e.className,b=e.onFontsReady,f=(0,a.Z)(e,u);return(0,r.useEffect)((function(){document.fonts.ready.then((function(){b&&b()}))}),[b]),(0,l.tZ)("div",(0,t.Z)({ref:i},f,{role:"tablist","aria-orientation":s,className:o()(g,"spectrum-Tabs","spectrum-Tabs--"+s,{"spectrum-Tabs--quiet":p},{"spectrum-Tabs--compact":"compact"===m})}),v)})),T=(0,r.forwardRef)((function(e,i){var n,r=e.elementType,s=void 0===r?"div":r,m=e.isDisabled,d=void 0!==m&&m,u=e.isSelected,v=void 0!==u&&u,g=e.className,b=e.children,f=e.icon,h=e.label,y=(0,a.Z)(e,p),w=s;(0,c.ZP)();return(0,l.tZ)(w,(0,t.Z)({},y,{ref:i,role:"tab",title:null==h||null===(n=h.props)||void 0===n?void 0:n.children,"aria-selected":v,disabled:d,className:o()(g,"spectrum-Tabs-item",{"is-selected":v},{"is-disabled":d})}),f?(0,l.tZ)(S,{icon:f,isSelected:v,isDisabled:d}):null,h?(0,l.tZ)(I,null," ",h," "):null,b)})),k={name:"16l42sl",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-550);z-index:1"},S=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,s=e.icon,c=e.isSelected,m=e.isDisabled,d=e.className,u=(e.children,e.iconSize),p=void 0===u?"xl":u,g=(0,a.Z)(e,v),b=r;return(0,l.tZ)(b,(0,t.Z)({},g,{ref:i,className:o()(d,"spectrum-Icon",{"is-selected":c},{"is-disabled ":m}),css:k}),s?function(e,i,n){var t,a,r;return"img"===(null==e||null===(t=e.props)||void 0===t||null===(a=t.children)||void 0===a||null===(r=a.props)||void 0===r?void 0:r.mdxType)?(0,l.tZ)(x,{image:e,className:o()(i,"spectrum-Icon--spectrum-icon-size-"+n)}):(0,l.tZ)(Z,{icon:e,className:o()(i,"spectrum-Icon--spectrum-icon-size-"+n)})}(s,d,p):null)})),R={name:"pwo431",styles:"transition-property:transform,width"},_=(0,r.forwardRef)((function(e,i){var n=e.className,r=(0,a.Z)(e,g);return(0,l.tZ)("div",(0,t.Z)({},r,{ref:i,className:o()(n,"spectrum-Tabs-selectionIndicator"),css:R}))})),I=function(e){var i=e.children;return(0,l.tZ)("span",{className:"spectrum-Tabs-itemLabel"},i)},L=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,s=e.isHidden,c=e.className,m=e.children,d=(0,a.Z)(e,b),u=r;return(0,l.tZ)(u,(0,t.Z)({},d,{ref:i,hidden:s,className:o()(c)}),m)})),A={name:"m5i01u",styles:"color:#4b9cf5"},D={name:"1lx7s8w",styles:"background:var(--spectrum-global-color-gray-100);max-width:100%;overflow-x:hidden!important;margin:0;padding-bottom:calc(var(--spectrum-global-dimension-size-1250) + var(--spectrum-global-dimension-size-250))"},U=function(e){var i=e.theme,n=void 0===i?"light":i,t=e.orientation,s=void 0===t?"horizontal":t,c=e.className,u=e.APIReference,p=void 0===u?"":u,v=(0,a.Z)(e,f),g=(0,r.useState)([])[0],b=(0,r.useRef)(null),y=(0,r.useState)({tab:0}),z=y[0],x=y[1],Z=Object.keys(v).filter((function(e){return e.startsWith("heading")})).map((function(e){return e})).map((function(e,i){var n,t;return{heading:(null==v||null===(n=v["heading"+i])||void 0===n||null===(t=n.props)||void 0===t?void 0:t.children)||(null==v?void 0:v.heading),content:(null==v?void 0:v["content"+i])||(null==v?void 0:v.content),image:(null==v?void 0:v["image"+i])||(null==v?void 0:v.image)}})),k=function(e){void 0===e&&(e=z.tab);var i=g.filter((function(e){return null==e?void 0:e.current}))[e];h(b,i)},S=function(e){x({tab:e}),k(e)};return(0,l.tZ)("section",{className:o()(c,"tabsBlock spectrum--"+n),css:D},(0,l.tZ)("div",{className:"tabs-wrapper",css:(0,l.iv)("display:","vertical"===s?"inline-flex":"",";@media only screen and (min-width: ",m.LU,"){margin:0 auto!important;}@media screen and (max-device-width: ",m.q9,"){flex-direction:column;}","")},(0,l.tZ)("div",{className:"tabs-content",css:(0,l.iv)("display:","vertical"===s?"grid":"initial",";position:relative;grid-template-columns:300px calc(100% - 300px);margin-top:var(--spectrum-global-dimension-size-300);width:",d.A,"!important;@media only screen and (max-width: ",m.q9,"){width:100%!important;}@media only screen and (device-width: ",m.LU,"){width:",(0,m.MY)(8),"!important;}","")},(null==Z?void 0:Z.length)>0?(0,l.tZ)(N,{orientation:s,isQuiet:!0,onFontsReady:k},Z.map((function(e,i){var n=(0,r.createRef)();g.push(n);var t=z.tab===i;return(0,l.tZ)(r.default.Fragment,null,(0,l.tZ)(T,{className:"tabItem",key:"tabItem_"+i,tabIndex:0,ref:n,isSelected:t,"aria-controls":"tabView"+i,"aria-label":e.heading,label:(0,l.tZ)("b",null,e.heading),icon:e.image,onKeyDown:function(e){"ArrowDown"!==e.key&&"Enter"!==e.key||e.currentTarget.nextSibling&&e.currentTarget.nextSibling.nextSibling.focus(),"ArrowUp"===e.key&&e.currentTarget.previousSibling&&e.currentTarget.previousSibling.previousSibling.focus()},onFocus:function(){S(i)},onClick:function(){S(i)},css:(0,l.iv)("text-align:left;white-space:normal;width:calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-600))!important;font-size:var(--spectrum-global-dimension-size-200);margin-bottom:","vertical"===s?"1rem !important":"0rem",";display:flex!important;padding:var(--spectrum-global-dimension-size-125)!important;height:auto!important;line-height:initial;.spectrum-Tabs-itemLabel{margin-top:5px;margin-bottom:5px;}.spectrum-Icon{background-size:var(--spectrum-global-dimension-size-225) var(--spectrum-global-dimension-size-275);width:var(--spectrum-global-dimension-size-500);height:var(--spectrum-global-dimension-size-400);}&.is-disabled{pointer-events:none;}&::before{left:var(--spectrum-global-dimension-size-0)!important;right:var(--spectrum-global-dimension-size-0)!important;border:none!important;}@media only screen and (max-width: ",w,"){margin-top:var(--spectrum-global-dimension-size-25)!important;margin-bottom:var(--spectrum-global-dimension-size-25)!important;}@media only screen and (min-width: ",m.LU,"){width:calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-750))!important;left:var(--spectrum-global-dimension-size-250)!important;}","")}),(0,l.tZ)("div",{key:"mobileTabView_"+i,className:"mobileTabView",hidden:!t,css:(0,l.iv)("display:none;padding:var(--spectrum-global-dimension-size-0)!important;h3{font-size:var(--spectrum-heading-s-text-size, var(--spectrum-alias-heading-s-text-size));}p{font-size:var(--spectrum-body-s-text-size, var(--spectrum-global-dimension-font-size-150));}@media only screen and (max-width: ",w,"){display:block;}","")},e.content?e.content:null))})),(0,l.tZ)(_,{ref:b}),""!==p&&(0,l.tZ)("div",{css:(0,l.iv)("text-align:left;white-space:normal;width:calc(var(--spectrum-global-dimension-size-2500) + var(--spectrum-global-dimension-size-750))!important;font-size:var(--spectrum-global-dimension-size-200);padding:var(--spectrum-global-dimension-size-125)!important;@media only screen and (max-width: ",w,"){left:var(--spectrum-global-dimension-size-100)!important;margin-top:var(--spectrum-global-dimension-size-125)!important;margin-bottom:var(--spectrum-global-dimension-size-125)!important;}@media only screen and (min-width: ",m.LU,"){left:var(--spectrum-global-dimension-size-250)!important;}","")},(0,l.tZ)("span",{css:(0,l.iv)("text-align:left;cursor:pointer;margin-top:var(--spectrum-global-dimension-size-85);margin-left:var(--spectrum-global-dimension-size-400);@media only screen and (max-width: ",w,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}@media only screen and (max-width: ",m.q9,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}","")},(0,l.tZ)("a",{href:p,css:A,target:"_blank",rel:"noreferrer"},"API Reference")))):null,(null==Z?void 0:Z.length)>0?Z.map((function(e,i){var n=z.tab===i;return(0,l.tZ)(L,{key:"tabView_"+i,id:"tabView"+i,className:"tabView",isHidden:!n,css:(0,l.iv)("text-align:left;padding:0 0 var(--spectrum-global-dimension-size-100) 0!important;max-width:",(0,m.MY)(8.5),"!important;overflow-x:hidden!important;@media only screen and (max-width: ",w,"){padding-left:inherit!important;max-width:",(0,m.MY)(3),"!important;}@media only screen and (device-width: ",m.q9,"){max-width:",(0,m.MY)(3.5),"!important;}@media only screen and (device-width: ",m.LU,"){max-width:",(0,m.MY)(6.5),"!important;padding-left:var(--spectrum-global-dimension-size-500);}","")},e.content?e.content:null)})):null)))}}}]);
//# sourceMappingURL=8bb409fd-e8538ea4619dd0857239.js.map