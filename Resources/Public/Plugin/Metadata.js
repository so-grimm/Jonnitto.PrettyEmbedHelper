(()=>{var W=Object.create;var m=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var X=(t,e)=>()=>(t&&(e=t(t=0)),e);var u=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var B=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of x(e))!Z.call(t,r)&&r!==o&&m(t,r,{get:()=>e[r],enumerable:!(i=O(e,r))||i.enumerable});return t};var g=(t,e,o)=>(o=t!=null?W(N(t)):{},B(e||!t||!t.__esModule?m(o,"default",{value:t,enumerable:!0}):o,t));function a(t){return(...e)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${t}`])return window["@Neos:HostPluginAPI"][`@${t}`](...e);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var p=X(()=>{});var y=u((st,h)=>{p();h.exports=a("vendor")().React});var A=u((at,I)=>{p();I.exports=a("NeosProjectPackages")().NeosUiDecorators});p();var f=a("manifest");var n=g(y(),1),w=g(A(),1);var d={propertyValue:"jonnitto-prettyembed-00i6NG-propertyValue",propertyLabel:"jonnitto-prettyembed-00i6NG-propertyLabel",infoView:"jonnitto-prettyembed-00i6NG-infoView","--space-between":"--jonnitto-prettyembed-00i6NG-space-between"};var v=(0,w.neos)(t=>({i18nRegistry:t.get("i18n")}));function V(t){let{value:e,options:o,i18nRegistry:i}=t,r=Object.entries(o).map(([s,c])=>{let l=e[s];if(!l)return null;let G=s==="duration"?Y(l):null;return{label:i.translate(c+".label"),value:i.translate(c+".value",l,[l,G])}}).filter(s=>!!s);return r.length?n.default.createElement("dl",{className:d.infoView},r.map(({label:s,value:c})=>n.default.createElement(n.Fragment,null,n.default.createElement("dt",{className:d.propertyLabel},s),n.default.createElement("dd",{className:d.propertyValue,dangerouslySetInnerHTML:{__html:c}})))):n.default.createElement("div",null,i.translate("Jonnitto.PrettyEmbedHelper:NodeTypes.Mixin.Metadata:noMetadataSet"))}var Y=t=>{let e=s=>`0${s}`.slice(-2),o=~~(t/3600),i=~~(t%3600/60),r=t%60;return o?`${o}:${e(i)}:${e(r)}`:i?`${i}:${e(r)}`:r},C=v(V);f("Jonnitto.PrettyEmbed:Metadata",{},t=>{t.get("inspector").get("editors").set("Jonnitto.PrettyEmbed/Metadata",{component:C})});})();