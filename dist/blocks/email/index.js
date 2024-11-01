(()=>{"use strict";const e=window.wp.blocks,n=JSON.parse('{"UU":"snow-monkey-forms/control-email","uK":{"xV":{"A":"{\\"email\\":true}"}}}'),o=window.ReactJSXRuntime,s=window.wp.blockEditor,l=window.wp.components,t=window.wp.compose,a=window.wp.element,r=window.wp.i18n,i=({value:e,onChange:n})=>{const s={};return""===e&&(s.borderColor="#d94f4f"),(0,o.jsx)(l.TextControl,{label:(0,r.__)("name","snow-monkey-forms"),help:(0,r.__)("Required. Input a unique machine-readable name.","snow-monkey-forms"),value:e,onChange:n,required:!0,style:s})},c=({value:e,onChange:n,multiple:s=!1})=>{const t=s?l.TextareaControl:l.TextControl;return(0,o.jsx)(t,{label:(0,r.__)("value","snow-monkey-forms"),help:(0,r.__)("Optional. Initial value.","snow-monkey-forms"),value:e,onChange:n})},m=({value:e,onChange:n})=>(0,o.jsx)(l.TextControl,{label:(0,r.__)("placeholder","snow-monkey-forms"),value:e,onChange:n}),d=({value:e,onChange:n})=>(0,o.jsx)(l.TextControl,{label:(0,r.__)("maxlength","snow-monkey-forms"),help:(0,r.__)("Optional. Maximum number of characters. If 0, not restricted.","snow-monkey-forms"),value:e,onChange:n}),h=({value:e,onChange:n})=>(0,o.jsx)(l.TextControl,{label:(0,r.__)("size","snow-monkey-forms"),help:(0,r.__)("Optional. The width of this item. If 0, not restricted.","snow-monkey-forms"),value:e,onChange:n}),u=({value:e,onChange:n})=>(0,o.jsx)(l.TextControl,{label:(0,r.__)("id","snow-monkey-forms"),value:e,onChange:n}),p=({value:e,onChange:n})=>(0,o.jsx)(l.TextControl,{label:(0,r.__)("class","snow-monkey-forms"),help:(0,r.__)("Separate multiple classes with spaces.","snow-monkey-forms"),value:e,onChange:n});function x(e,n){return""===e?0:null!==e.match(/^[0-9]+$/)?parseInt(e):n}window.lodash;const v=(0,t.createHigherOrderComponent)((e=>n=>{const{attributes:t,setAttributes:a}=n,{validations:i}=t;if(void 0===i)return(0,o.jsx)(e,{...n});const c=JSON.parse(i);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.InspectorControls,{children:(0,o.jsx)(l.PanelBody,{title:(0,r.__)("Validation","snow-monkey-forms"),children:(0,o.jsx)(l.ToggleControl,{label:(0,r.__)("Required","snow-monkey-forms"),checked:!!c.required,onChange:e=>{a({validations:JSON.stringify({...c,required:e})})}})})}),(0,o.jsx)(e,{...n})]})}),"withValidations"),w=(0,t.compose)(v)((({attributes:e,setAttributes:t})=>{const{name:v,value:w,placeholder:f,maxlength:g,size:C,id:_,controlClass:j,description:y,isDisplayDescriptionConfirm:k,validations:b}=e;(0,a.useEffect)((()=>{t({validations:JSON.stringify({...JSON.parse(n.uK.xV.A),...JSON.parse(b)})})}),[]),(0,a.useEffect)((()=>{""===v&&t({name:`email-${((new Date).getTime()+Math.floor(8999*Math.random()+1e3)).toString(32)}`})}),[v]);const O=(0,s.useBlockProps)({className:"smf-placeholder"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.InspectorControls,{children:[(0,o.jsxs)(l.PanelBody,{title:(0,r.__)("Attributes","snow-monkey-forms"),children:[(0,o.jsx)(i,{value:v,onChange:e=>t({name:e})}),(0,o.jsx)(c,{value:w,onChange:e=>t({value:e})}),(0,o.jsx)(m,{value:f,onChange:e=>t({placeholder:e})}),(0,o.jsx)(d,{value:g,onChange:e=>{t({maxlength:x(e,g)})}}),(0,o.jsx)(h,{value:C,onChange:e=>{t({size:x(e,C)})}}),(0,o.jsx)(u,{value:_,onChange:e=>t({id:e})}),(0,o.jsx)(p,{value:j,onChange:e=>t({controlClass:e})})]}),(0,o.jsxs)(l.PanelBody,{title:(0,r.__)("Block settings","snow-monkey-forms"),children:[(0,o.jsx)(l.TextControl,{label:(0,r.__)("Description","snow-monkey-forms"),value:y,onChange:e=>t({description:e})}),(0,o.jsx)(l.ToggleControl,{label:(0,r.__)("Description is also displayed on the confirmation screen","snow-monkey-forms"),checked:k,onChange:e=>{t({isDisplayDescriptionConfirm:e})}})]})]}),(0,o.jsxs)("div",{...O,"data-name":v,children:[(0,o.jsx)("div",{className:"smf-text-control",children:(0,o.jsx)("input",{type:"email",name:v,value:w,placeholder:f,maxLength:g||void 0,size:C||void 0,disabled:"disabled",id:_||void 0,className:`smf-text-control__control ${j}`,"data-validations":Object.keys(Object.fromEntries(Object.entries(JSON.parse(b)).filter((([,e])=>!!e)))).join(" ")||void 0})}),y&&(0,o.jsx)("div",{className:"smf-control-description",children:y})]})]})}));(0,e.registerBlockType)(n.UU,{icon:{src:function(){return(0,o.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{color:"#cd162c"},children:[(0,o.jsx)("path",{clipRule:"evenodd",d:"m22 7.5h-20c-.27614 0-.5.22386-.5.5v8c0 .2761.22386.5.5.5h20c.2761 0 .5-.2239.5-.5v-8c0-.27614-.2239-.5-.5-.5zm-20-1.5c-1.104569 0-2 .89543-2 2v8c0 1.1046.89543 2 2 2h20c1.1046 0 2-.8954 2-2v-8c0-1.10457-.8954-2-2-2z",fillRule:"evenodd"}),(0,o.jsx)("path",{d:"m9.00195 12.1201c-.02279.5947-.1709 1.0687-.44434 1.4219s-.63802.5298-1.09375.5298c-.18685 0-.35205-.0399-.4956-.1197-.14356-.082-.25521-.1971-.33496-.3452-.22331.3008-.52295.4512-.89893.4512-.21875 0-.41016-.0638-.57422-.1914-.16406-.1299-.28483-.3133-.3623-.5503-.0752-.237-.09799-.5059-.06836-.8066.06836-.5697.25179-1.0277.55029-1.3741.2985-.3463.66422-.5195 1.09717-.5195.33496 0 .62321.0775.86474.2324l.21534.1436-.17432 2.0063c-.03874.3168.07064.4751.32812.4751.19369 0 .35547-.123.48536-.3691.13216-.2484.20507-.5651.21875-.9502.03873-.7611-.11963-1.349-.4751-1.7637-.35319-.41469-.87158-.62205-1.55518-.62205-.43522 0-.82259.11166-1.16211.33495-.33724.221-.60498.5355-.80322.9434-.19596.4056-.30648.8681-.33154 1.3877-.03646.7975.12304 1.407.47851 1.8286.35547.4238.88867.6357 1.59961.6357.19141 0 .39421-.0228.6084-.0683.21419-.0433.38851-.0946.52295-.1538l.12646.5673c-.13899.0912-.32698.1641-.56396.2188-.2347.057-.47054.0854-.70752.0854-.62207 0-1.14844-.1196-1.5791-.3588-.42839-.237-.7474-.5891-.95703-1.0562-.20964-.4671-.30306-1.0334-.28028-1.6987.02735-.6289.17204-1.1918.43409-1.6885.26432-.499.62435-.88412 1.08007-1.15528.45801-.27344.97413-.41016 1.54834-.41016.57422 0 1.06983.11963 1.48682.35889.41699.23698.73031.57875.93994 1.02535.20964.4467.30192.965.27686 1.5552zm-3.41797.3897c-.02507.2962-.00228.5206.06836.6733.07291.1504.18913.2256.34863.2256.1071 0 .20508-.0479.29395-.1436.09114-.0957.16634-.2324.22558-.4101l.13672-1.5586c-.06836-.0182-.139-.0274-.21191-.0274-.25521 0-.45231.1003-.59131.3008-.13672.1983-.22673.5116-.27002.94z"})]})}},edit:w,save:()=>null})})();