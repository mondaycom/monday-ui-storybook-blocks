"use strict";(globalThis.webpackChunkvibe_storybook_components=globalThis.webpackChunkvibe_storybook_components||[]).push([[2779],{"./src/components/storybook-link/__stories__/storybook-link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>storybook_link_stories});var react=__webpack_require__("./node_modules/react/index.js"),link_link=__webpack_require__("./src/components/link/link.tsx"),chunk_DXNAW7Q2=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),LinkConstants=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./src/components/link/LinkConstants.ts")),withStaticProps=__webpack_require__("./src/types/withStaticProps.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StorybookLink=({page,story="",children,size})=>{const[url,setUrl]=(0,react.useState)("");return(0,react.useEffect)((()=>{!async function fetchLink(){const href=await(0,chunk_DXNAW7Q2.ew)(page,story);setUrl(href)}()}),[page,story]),(0,jsx_runtime.jsx)(link_link.Z,{href:url,target:link_link.Z.targets.TOP,withoutSpacing:!0,size,children})};StorybookLink.displayName="StorybookLink";const storybook_link=(0,withStaticProps.D)(StorybookLink,{sizes:LinkConstants.h});try{storybooklink.displayName="storybooklink",storybooklink.__docgenInfo={description:"",displayName:"storybooklink",props:{page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"string"}},story:{defaultValue:{value:""},description:"",name:"story",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/storybook-link/storybook-link.tsx#storybooklink"]={docgenInfo:storybooklink.__docgenInfo,name:"storybooklink",path:"src/components/storybook-link/storybook-link.tsx#storybooklink"})}catch(__react_docgen_typescript_loader_error){}const storybook_link_stories={component:storybook_link,title:"Components/StorybookLink"},Overview={args:{page:"Components/Paragraph",children:'Navigate to "Paragraph"'}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"{\n  args: {\n    page: 'Components/Paragraph',\n    children: 'Navigate to \"Paragraph\"'\n  }\n}",...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]}}]);