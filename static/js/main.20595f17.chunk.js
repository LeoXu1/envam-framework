(this["webpackJsonpenvam-framework"]=this["webpackJsonpenvam-framework"]||[]).push([[0],{36:function(e,t,n){},39:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),c=n(26),s=n.n(c),a=(n(36),n(15)),i=n(28),l=(n(39),n(23)),j=n(1),u=function(e){var t=e.setTooltipContent,n=e.setSelected,r=Object(o.useState)(""),c=Object(a.a)(r,2),s=c[0],i=c[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l.ComposableMap,{"data-tip":"",projectionConfig:{rotate:[-15,0,0],scale:180},style:{maxHeight:"450"},children:Object(j.jsx)(l.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",children:function(e){return e.geographies.map((function(e){return Object(j.jsx)(l.Geography,{geography:e,onMouseEnter:function(){var n,o=e.properties,r=o.NAME,c=o.POP_EST;t("".concat(r," \u2014 ").concat((n=c)>1e9?Math.round(n/1e8)/10+"Bn":n>1e6?Math.round(n/1e5)/10+"M":Math.round(n/100)/10+"K"))},onMouseLeave:function(){t("")},onClick:function(){i(e.properties.NAME),n(e.properties.NAME)},stroke:"#aaa",strokeWidth:"0.5",fill:e.properties.NAME===s?"#e42":"#D6D6DA",style:{default:{outline:"none"},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}},e.rsmKey)}))}})})})},p=Object(o.memo)(u);var h=function(){var e=Object(o.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)("Click a country"),s=Object(a.a)(c,2),l=s[0],u=s[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"base",children:[Object(j.jsx)("h1",{children:"Framework"}),Object(j.jsx)("h4",{children:l})]}),Object(j.jsxs)("div",{className:"map",children:[Object(j.jsx)(p,{setSelected:u,setTooltipContent:r}),Object(j.jsx)(i.a,{children:n})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),d()}},[[45,1,2]]]);
//# sourceMappingURL=main.20595f17.chunk.js.map