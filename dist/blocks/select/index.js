(()=>{"use strict";var e,n={795:()=>{const e=window.wp.blocks,n=JSON.parse('{"UU":"snow-monkey-forms/control-select","uK":{"xV":{"A":"{}"}}}'),o=window.ReactJSXRuntime,s=window.wp.blockEditor,a=window.wp.components,t=window.wp.compose,r=window.wp.element,l=window.wp.i18n,i=({value:e,onChange:n})=>{const s={};return""===e&&(s.borderColor="#d94f4f"),(0,o.jsx)(a.TextControl,{label:(0,l.__)("name","snow-monkey-forms"),help:(0,l.__)("Required. Input a unique machine-readable name.","snow-monkey-forms"),value:e,onChange:n,required:!0,style:s})},c=({value:e,onChange:n,multiple:s=!1})=>{const t=s?a.TextareaControl:a.TextControl;return(0,o.jsx)(t,{label:(0,l.__)("value","snow-monkey-forms"),help:(0,l.__)("Optional. Initial value.","snow-monkey-forms"),value:e,onChange:n})},d=({value:e,onChange:n,options:s=[]})=>{const t=1>s.length?["","name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","email","username","new-password","current-password","one-time-code","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-extension","impp","url","photo"].map((e=>({value:e,label:e}))):s;return(0,o.jsx)(a.SelectControl,{label:(0,l.__)("autocomplete","snow-monkey-forms"),value:e,options:t,onChange:n})},u=({value:e,onChange:n})=>(0,o.jsx)(a.TextControl,{label:(0,l.__)("id","snow-monkey-forms"),value:e,onChange:n}),m=({value:e,onChange:n})=>(0,o.jsx)(a.TextControl,{label:(0,l.__)("class","snow-monkey-forms"),help:(0,l.__)("Separate multiple classes with spaces.","snow-monkey-forms"),value:e,onChange:n}),p=({value:e,onChange:n})=>{const s={};return""===e&&(s.borderColor="#d94f4f"),(0,o.jsx)(a.TextareaControl,{label:(0,l.__)("options","snow-monkey-forms"),value:e,help:(0,l.sprintf)(
// translators: %1$s: line-break-char
// translators: %1$s: line-break-char
(0,l.__)('Required. Enter in the following format: "value" : "label"%1$s or value%1$s',"snow-monkey-forms"),"↵"),onChange:n,required:!0,style:s})},v=window.lodash;const h=(0,t.createHigherOrderComponent)((e=>n=>{const{attributes:t,setAttributes:r}=n,{validations:i}=t;if(void 0===i)return(0,o.jsx)(e,{...n});const c=JSON.parse(i);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.InspectorControls,{children:(0,o.jsx)(a.PanelBody,{title:(0,l.__)("Validation","snow-monkey-forms"),children:(0,o.jsx)(a.ToggleControl,{label:(0,l.__)("Required","snow-monkey-forms"),checked:!!c.required,onChange:e=>{r({validations:JSON.stringify({...c,required:e})})}})})}),(0,o.jsx)(e,{...n})]})}),"withValidations"),f=(0,t.compose)(h)((({attributes:e,setAttributes:t})=>{const{name:h,value:f,options:x,id:w,controlClass:g,description:y,isDisplayDescriptionConfirm:b,validations:j,autocomplete:C}=e;(0,r.useEffect)((()=>{t({validations:JSON.stringify({...JSON.parse(n.uK.xV.A),...JSON.parse(j)})})}),[]),(0,r.useEffect)((()=>{""===h&&t({name:`select-${((new Date).getTime()+Math.floor(8999*Math.random()+1e3)).toString(32)}`}),""===x&&t({options:'value1\n"value2" : "label2"\n"value3" : "label3"'})}),[h,x]);const k=function(e){const n=e.replace(/\r?\n/g,"\n").split("\n");return(0,v.uniqBy)(n.map((e=>{const n=(()=>{try{return JSON.parse(`{ ${e} }`)}catch(n){return{[e]:e}}})();return{value:Object.keys(n)[0],label:Object.values(n)[0]}})),"value").map((e=>{var n;const o={};return o[null!==(n=e.value)&&void 0!==n?n:""]=e.label,o}))}(x),_=(0,s.useBlockProps)({className:"smf-placeholder"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.InspectorControls,{children:[(0,o.jsxs)(a.PanelBody,{title:(0,l.__)("Attributes","snow-monkey-forms"),children:[(0,o.jsx)(i,{value:h,onChange:e=>t({name:e})}),(0,o.jsx)(p,{value:x,onChange:e=>t({options:e})}),(0,o.jsx)(c,{value:f,onChange:e=>t({value:e})}),(0,o.jsx)(d,{value:C,onChange:e=>t({autocomplete:e})}),(0,o.jsx)(u,{value:w,onChange:e=>t({id:e})}),(0,o.jsx)(m,{value:g,onChange:e=>t({controlClass:e})})]}),(0,o.jsxs)(a.PanelBody,{title:(0,l.__)("Block settings","snow-monkey-forms"),children:[(0,o.jsx)(a.TextControl,{label:(0,l.__)("Description","snow-monkey-forms"),value:y,onChange:e=>t({description:e})}),(0,o.jsx)(a.ToggleControl,{label:(0,l.__)("Description is also displayed on the confirmation screen","snow-monkey-forms"),checked:b,onChange:e=>{t({isDisplayDescriptionConfirm:e})}})]})]}),(0,o.jsxs)("div",{..._,"data-name":h,children:[(0,o.jsxs)("div",{className:"smf-select-control",children:[(0,o.jsx)("select",{name:h,value:f,disabled:"disabled",id:w||void 0,className:`smf-select-control__control ${g}`,"data-validations":Object.keys(Object.fromEntries(Object.entries(JSON.parse(j)).filter((([,e])=>!!e)))).join(" ")||void 0,children:k.map((e=>{const n=Object.keys(e)[0],s=Object.values(e)[0];return(0,o.jsx)("option",{value:n,children:s},n)}))}),(0,o.jsx)("span",{className:"smf-select-control__toggle"})]}),y&&(0,o.jsx)("div",{className:"smf-control-description",children:y})]})]})}));(0,e.registerBlockType)(n.UU,{icon:{src:function(){return(0,o.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:"#cd162c"},children:[(0,o.jsx)("path",{d:"M7.5 8.5L12 4.5L16.5 8.5",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0,o.jsx)("path",{d:"M16.5 15.5L12 19.5L7.5 15.5",fill:"none",stroke:"currentColor",strokeWidth:"1.5"})]})}},edit:f,save:()=>null})}},o={};function s(e){var a=o[e];if(void 0!==a)return a.exports;var t=o[e]={exports:{}};return n[e](t,t.exports,s),t.exports}s.m=n,e=[],s.O=(n,o,a,t)=>{if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],t=e[d][2];for(var l=!0,i=0;i<o.length;i++)(!1&t||r>=t)&&Object.keys(s.O).every((e=>s.O[e](o[i])))?o.splice(i--,1):(l=!1,t<r&&(r=t));if(l){e.splice(d--,1);var c=a();void 0!==c&&(n=c)}}return n}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[o,a,t]},s.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={549:0,113:0};s.O.j=n=>0===e[n];var n=(n,o)=>{var a,t,r=o[0],l=o[1],i=o[2],c=0;if(r.some((n=>0!==e[n]))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(i)var d=i(s)}for(n&&n(o);c<r.length;c++)t=r[c],s.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return s.O(d)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var a=s.O(void 0,[113],(()=>s(795)));a=s.O(a)})();