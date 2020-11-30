(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1bQd":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return f}));var a=n("HGLW"),o=n("k0FJ"),l=n("oedh"),c=(n("mXGw"),n("/FXl")),r=n("TjRS"),u=n("ZFoC"),b=n("RnGj"),p=n("Hn4R"),m=n("Mzd/"),i=n("oXiK");n("aD51");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/Collection.mdx"}});var j={_frontmatter:d},O=r.a;function f(e){var t,n,a,s,f,x,v,C,I=e.components,g=Object(l.a)(e,["components"]);return Object(c.b)(O,Object(o.a)({},j,g,{components:I,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"collection"},"Collection"),Object(c.b)("p",null,"It creates a nested piece of state within a Form. ",Object(c.b)("br",null),"\nA Collection can be of type: ",Object(c.b)("strong",{parentName:"p"},"object")," or ",Object(c.b)("strong",{parentName:"p"},"array"),"."),Object(c.b)("h3",{id:"props"},"Props"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"object")),": boolean"),Object(c.b)("p",null,"It creates a collecion of type ",Object(c.b)("strong",{parentName:"p"},"object"),' if "true".'),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"array")),": boolean"),Object(c.b)("p",null,"It creates a collecion of type ",Object(c.b)("strong",{parentName:"p"},"array"),' if "true".'),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"name")),": string - (except for ",Object(c.b)("strong",{parentName:"p"},"Collection")," children of Collection of type array)"),Object(c.b)("p",null,"A field's name in Usetheform state."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"index")),": string - (only for ",Object(c.b)("strong",{parentName:"p"},"Collection")," children of Collection of type array)"),Object(c.b)("p",null,"A field's index in array Collection."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"value")),": array | object"),Object(c.b)("p",null,"Specifies the initial value of a ",Object(c.b)("em",{parentName:"p"},"Collection"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"reducers")),": array | function"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"(nextValue, prevValue, formState) => nextValue\n")),Object(c.b)("p",null,"An array whose values correspond to different reducing functions.\nReducers functions specify how the Collection's value change."),Object(c.b)("h2",{id:"basic-usage"},"Basic usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"  import Form, { Input, Collection } from 'usetheform'\n")),Object(c.b)(u.b,{__position:0,__code:'<Form>\n  <Collection object name="myObject">\n    <Input\n      type="text"\n      name="name"\n      placeholder="Enter your name"\n      value="Foo"\n    />\n    <Input type="text" name="lastname" placeholder="Enter your Last Name" />\n    <Input type="radio" name="sex" value="M" />\n    <Input type="radio" name="sex" value="F" />\n    <Input type="checkbox" name="one" value="one" />\n    <Input type="checkbox" name="two" value="two" />\n  </Collection>\n  <Collection array name="myArray">\n    <Input type="number" placeholder="Enter value: 1" value="1" />\n    <Input type="number" placeholder="Enter value: 2" />\n    <Input type="number" placeholder="Enter value: 3" />\n  </Collection>\n  <Input type="file" name="file" />\n</Form>',__scope:(t={props:g,DefaultLayout:r.a,Playground:u.b,Form:b.a,Submit:p.a,CustomInput:m.a,Collection:i.a,useValidation:i.k,Input:i.c,useAsyncValidation:i.g},t.DefaultLayout=r.a,t._frontmatter=d,t),mdxType:"Playground"},Object(c.b)(b.a,{mdxType:"Form"},Object(c.b)(i.a,{object:!0,name:"myObject",mdxType:"Collection"},Object(c.b)(i.c,{type:"text",name:"name",placeholder:"Enter your name",value:"Foo",mdxType:"Input"}),Object(c.b)(i.c,{type:"text",name:"lastname",placeholder:"Enter your Last Name",mdxType:"Input"}),Object(c.b)(i.c,{type:"radio",name:"sex",value:"M",mdxType:"Input"}),Object(c.b)(i.c,{type:"radio",name:"sex",value:"F",mdxType:"Input"}),Object(c.b)(i.c,{type:"checkbox",name:"one",value:"one",mdxType:"Input"}),Object(c.b)(i.c,{type:"checkbox",name:"two",value:"two",mdxType:"Input"})),Object(c.b)(i.a,{array:!0,name:"myArray",mdxType:"Collection"},Object(c.b)(i.c,{type:"number",placeholder:"Enter value: 1",value:"1",mdxType:"Input"}),Object(c.b)(i.c,{type:"number",placeholder:"Enter value: 2",mdxType:"Input"}),Object(c.b)(i.c,{type:"number",placeholder:"Enter value: 3",mdxType:"Input"})),Object(c.b)(i.c,{type:"file",name:"file",mdxType:"Input"}))),Object(c.b)("h3",{id:"nested-collections"},"Nested Collections"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"  import Form, { Input, Collection } from 'usetheform'\n")),Object(c.b)(u.b,{__position:1,__code:'<Form>\n  <Collection object name="myObject">\n    <Collection object name="user">\n      <Input type="text" name="name" value="foo" />\n      <Input type="text" name="lastname" value="foo" />\n      <Collection object name="info">\n        <Input type="tel" name="tel" value="1234" />\n        <Input type="text" name="website" value="www.google.com" />\n      </Collection>\n    </Collection>\n    <Collection array name="checkboxes">\n      <Input type="checkbox" value="one" />\n      <Input type="checkbox" value="two" />\n    </Collection>\n  </Collection>\n</Form>',__scope:(n={props:g,DefaultLayout:r.a,Playground:u.b,Form:b.a,Submit:p.a,CustomInput:m.a,Collection:i.a,useValidation:i.k,Input:i.c,useAsyncValidation:i.g},n.DefaultLayout=r.a,n._frontmatter=d,n),mdxType:"Playground"},Object(c.b)(b.a,{mdxType:"Form"},Object(c.b)(i.a,{object:!0,name:"myObject",mdxType:"Collection"},Object(c.b)(i.a,{object:!0,name:"user",mdxType:"Collection"},Object(c.b)(i.c,{type:"text",name:"name",value:"foo",mdxType:"Input"}),Object(c.b)(i.c,{type:"text",name:"lastname",value:"foo",mdxType:"Input"}),Object(c.b)(i.a,{object:!0,name:"info",mdxType:"Collection"},Object(c.b)(i.c,{type:"tel",name:"tel",value:"1234",mdxType:"Input"}),Object(c.b)(i.c,{type:"text",name:"website",value:"www.google.com",mdxType:"Input"}))),Object(c.b)(i.a,{array:!0,name:"checkboxes",mdxType:"Collection"},Object(c.b)(i.c,{type:"checkbox",value:"one",mdxType:"Input"}),Object(c.b)(i.c,{type:"checkbox",value:"two",mdxType:"Input"}))))),Object(c.b)("h2",{id:"array-collection"},"Array Collection"),Object(c.b)("p",null,"Array Collection of Input fields with indexes handled automatically."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport Form { Input, Collection } from "usetheform";\n')),Object(c.b)(u.b,{__position:2,__code:'<Form>\n  <Collection array name="numberList">\n    <Input label="One" type="number" value="1" />\n    <Input label="Two" type="number" value="2" />\n  </Collection>\n</Form>',__scope:(a={props:g,DefaultLayout:r.a,Playground:u.b,Form:b.a,Submit:p.a,CustomInput:m.a,Collection:i.a,useValidation:i.k,Input:i.c,useAsyncValidation:i.g},a.DefaultLayout=r.a,a._frontmatter=d,a),mdxType:"Playground"},Object(c.b)(b.a,{mdxType:"Form"},Object(c.b)(i.a,{array:!0,name:"numberList",mdxType:"Collection"},Object(c.b)(i.c,{label:"One",type:"number",value:"1",mdxType:"Input"}),Object(c.b)(i.c,{label:"Two",type:"number",value:"2",mdxType:"Input"})))),Object(c.b)("br",null),"Array Collection of Input fields with indexes handled automatically for custom Inputs.",Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { withIndex, useField, Collection } from "usetheform";\n\nconst CustomInput = withIndex(({ type, name, value, index, ...restAttr }) => {\n  const props = useField({ type, name, value, index });\n  return <input {...restAttr} {...props}></input>;\n});\n')),Object(c.b)(u.b,{__position:4,__code:'<Form>\n  <Collection array name="numberList">\n    <CustomInput label="One" type="number" value="1" />\n    <CustomInput label="Two" type="number" value="2" />\n  </Collection>\n</Form>',__scope:(s={props:g,DefaultLayout:r.a,Playground:u.b,Form:b.a,Submit:p.a,CustomInput:m.a,Collection:i.a,useValidation:i.k,Input:i.c,useAsyncValidation:i.g},s.DefaultLayout=r.a,s._frontmatter=d,s),mdxType:"Playground"},Object(c.b)(b.a,{mdxType:"Form"},Object(c.b)(i.a,{array:!0,name:"numberList",mdxType:"Collection"},Object(c.b)(m.a,{label:"One",type:"number",value:"1",mdxType:"CustomInput"}),Object(c.b)(m.a,{label:"Two",type:"number",value:"2",mdxType:"CustomInput"})))),Object(c.b)("br",null),"Array Collection of Input fields with indexes handled maunally.",Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"  import Form, { Input, Collection } from 'usetheform'\n")),Object(c.b)(u.b,{__position:6,__code:'<Form>\n  <Collection array name="numberList">\n    <label>\n      One:\n      <Input type="number" index="0" value="1" />\n    </label>\n    <label>\n      Two:\n      <Input type="number" index="1" value="2" />\n    </label>\n  </Collection>\n</Form>',__scope:(f={props:g,DefaultLayout:r.a,Playground:u.b,Form:b.a,Submit:p.a,CustomInput:m.a,Collection:i.a,useValidation:i.k,Input:i.c,useAsyncValidation:i.g},f.DefaultLayout=r.a,f._frontmatter=d,f),mdxType:"Playground"},Object(c.b)(b.a,{mdxType:"Form"},Object(c.b)(i.a,{array:!0,name:"numberList",mdxType:"Collection"},Object(c.b)("label",null,"One:",Object(c.b)(i.c,{type:"number",index:"0",value:"1",mdxType:"Input"})),Object(c.b)("label",null,"Two:",Object(c.b)(i.c,{type:"number",index:"1",value:"2",mdxType:"Input"}))))),Object(c.b)("h2",{id:"reducers"},"Reducers"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"  import Form, { Input, Collection } from 'usetheform'\n")),Object(c.b)(u.b,{__position:7,__code:'() => {\n  const fullNameFN = nextValue => {\n    const fullName = [nextValue[\'name\'], nextValue[\'lastname\']]\n      .filter(Boolean)\n      .join(\' \')\n    const newValue = { ...nextValue, fullName }\n    return newValue\n  }\n  return (\n    <Form>\n      <Collection object name="person" reducers={fullNameFN}>\n        <Input type="text" name="name" value="foo" />\n        <Input type="text" name="lastname" value="pluto" />\n        <Input type="text" name="fullName" readOnly />\n      </Collection>\n    </Form>\n  )\n}',__scope:(x={props:g,DefaultLayout:r.a,Playground:u.b,Form:b.a,Submit:p.a,CustomInput:m.a,Collection:i.a,useValidation:i.k,Input:i.c,useAsyncValidation:i.g},x.DefaultLayout=r.a,x._frontmatter=d,x),mdxType:"Playground"},(function(){return Object(c.b)(b.a,{mdxType:"Form"},Object(c.b)(i.a,{object:!0,name:"person",reducers:function(e){var t=[e.name,e.lastname].filter(Boolean).join(" ");return y(y({},e),{},{fullName:t})},mdxType:"Collection"},Object(c.b)(i.c,{type:"text",name:"name",value:"foo",mdxType:"Input"}),Object(c.b)(i.c,{type:"text",name:"lastname",value:"pluto",mdxType:"Input"}),Object(c.b)(i.c,{type:"text",name:"fullName",readOnly:!0,mdxType:"Input"})))})),Object(c.b)("h2",{id:"validation---sync"},"Validation - Sync"),Object(c.b)("p",null,"Validation for Collection starts only on form submission."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"  import Form, { Input, Collection, useValidation } from 'usetheform'\n")),Object(c.b)(u.b,{__position:8,__code:'() => {\n  const graterThan10 = value =>\n    value && value[\'A\'] + value[\'B\'] > 10 ? undefined : \'A+B must be > 10\'\n  const [status, validation] = useValidation([graterThan10])\n  return (\n    <Form>\n      <Collection object name="sum" {...validation}>\n        <Input type="number" name="A" value="1" />\n        <Input type="number" name="B" value="2" />\n      </Collection>\n      {status.error && <label>{status.error}</label>}\n      <button type="submit">Press to see results</button>\n    </Form>\n  )\n}',__scope:(v={props:g,DefaultLayout:r.a,Playground:u.b,Form:b.a,Submit:p.a,CustomInput:m.a,Collection:i.a,useValidation:i.k,Input:i.c,useAsyncValidation:i.g},v.DefaultLayout=r.a,v._frontmatter=d,v),mdxType:"Playground"},(function(){var e=Object(i.k)([function(e){return e&&e.A+e.B>10?void 0:"A+B must be > 10"}]),t=e[0],n=e[1];return Object(c.b)(b.a,{mdxType:"Form"},Object(c.b)(i.a,Object(o.a)({object:!0,name:"sum"},n,{mdxType:"Collection"}),Object(c.b)(i.c,{type:"number",name:"A",value:"1",mdxType:"Input"}),Object(c.b)(i.c,{type:"number",name:"B",value:"2",mdxType:"Input"})),t.error&&Object(c.b)("label",null,t.error),Object(c.b)("button",{type:"submit"},"Press to see results"))})),Object(c.b)("h2",{id:"validation---async"},"Validation - Async"),Object(c.b)("p",null,"Async Validation for Collections are triggered on Sumbit event, the form submission is prevented if the validation fails."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { useAsyncValidation, useForm } from 'usetheform'\n\nconst Submit = () => {\n  const { isValid } = useForm();\n  return (\n    <button disabled={!isValid} type=\"submit\">\n      Submit\n    </button>\n  );\n};\n\n")),Object(c.b)(u.b,{__position:9,__code:'() => {\n  const asyncTest = value =>\n    new Promise((resolve, reject) => {\n      // it could be an API call or any async operation\n      setTimeout(() => {\n        if (value.a + value.b !== 5) {\n          reject(\'Error values not allowed\')\n        } else {\n          resolve(\'Success\')\n        }\n      }, 1000)\n    })\n  const [asyncStatus, asyncValidation] = useAsyncValidation(asyncTest)\n  return (\n    <Form>\n      <Collection object name="sum" {...asyncValidation}>\n        <Input type="number" name="a" value="1" />\n        <Input type="number" name="b" value="2" />\n      </Collection>\n      {asyncStatus.status === undefined && <label>asyncNotStartedYet</label>}\n      {asyncStatus.status === \'asyncStart\' && <label>Checking...</label>}\n      {asyncStatus.status === \'asyncError\' && (\n        <label>{asyncStatus.value}</label>\n      )}\n      {asyncStatus.status === \'asyncSuccess\' && (\n        <label>{asyncStatus.value}</label>\n      )}\n      <Submit />\n    </Form>\n  )\n}',__scope:(C={props:g,DefaultLayout:r.a,Playground:u.b,Form:b.a,Submit:p.a,CustomInput:m.a,Collection:i.a,useValidation:i.k,Input:i.c,useAsyncValidation:i.g},C.DefaultLayout=r.a,C._frontmatter=d,C),mdxType:"Playground"},(function(){var e=Object(i.g)((function(e){return new Promise((function(t,n){setTimeout((function(){e.a+e.b!==5?n("Error values not allowed"):t("Success")}),1e3)}))})),t=e[0],n=e[1];return Object(c.b)(b.a,{mdxType:"Form"},Object(c.b)(i.a,Object(o.a)({object:!0,name:"sum"},n,{mdxType:"Collection"}),Object(c.b)(i.c,{type:"number",name:"a",value:"1",mdxType:"Input"}),Object(c.b)(i.c,{type:"number",name:"b",value:"2",mdxType:"Input"})),void 0===t.status&&Object(c.b)("label",null,"asyncNotStartedYet"),"asyncStart"===t.status&&Object(c.b)("label",null,"Checking..."),"asyncError"===t.status&&Object(c.b)("label",null,t.value),"asyncSuccess"===t.status&&Object(c.b)("label",null,t.value),Object(c.b)(p.a,{mdxType:"Submit"}))})))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/Collection.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-collection-mdx-291ba9057be998663d49.js.map