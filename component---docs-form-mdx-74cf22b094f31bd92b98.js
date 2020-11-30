(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Tukz:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return p}));var a=n("k0FJ"),o=n("oedh"),r=(n("mXGw"),n("/FXl")),i=n("TjRS"),b=n("ZFoC"),c=n("RnGj"),l=n("oXiK"),m=(n("aD51"),{});void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/Form.mdx"}});var u={_frontmatter:m},s=i.a;function p(e){var t,n,p=e.components,j=Object(o.a)(e,["components"]);return Object(r.b)(s,Object(a.a)({},u,j,{components:p,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"form"},"Form"),Object(r.b)("p",null,"The Form is the most important component in Usetheform. It renders all the Fields and keeps synchronized the entire form state."),Object(r.b)("h3",{id:"props"},"Props"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"onInit")),": function"),Object(r.b)("p",null,"A function invoked when the Form is initialized."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const onInit = (formState, isFormValid) => { // some operation }\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"onChange")),": function"),Object(r.b)("p",null,"A function invoked when any Form Field changes its value."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const onChange = (formState, isFormValid) => { // some operation }\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"onReset")),": function"),Object(r.b)("p",null,"A function invoked when the form has been reset to its initial State."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const onReset = (formState, isFormValid) => { // some operation }\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"onSubmit")),": function"),Object(r.b)("p",null,"A function invoked when the submit button has been pressed.\nThe function may return either a Promise or a boolean value true/false."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const onSubmit = (formState) => { // some operation };\nconst onSubmit = (formState) => new Promise((resolve, reject) => { // some async operation  });\n")),Object(r.b)("p",null,"Cases:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the function returns a Promise which is resolved it will increment the value named ",Object(r.b)("strong",{parentName:"li"},"submitted"),"."),Object(r.b)("li",{parentName:"ul"},"If the function returns a boolean value ",Object(r.b)("inlineCode",{parentName:"li"},"true")," or no return at all it will increment the value named ",Object(r.b)("strong",{parentName:"li"},"submitted"),"."),Object(r.b)("li",{parentName:"ul"},"If the function returns a Promise which is rejected the value named ",Object(r.b)("strong",{parentName:"li"},"submitted")," will not be incremented."),Object(r.b)("li",{parentName:"ul"},"If the function returns a boolean value ",Object(r.b)("inlineCode",{parentName:"li"},"false")," the value named ",Object(r.b)("strong",{parentName:"li"},"submitted")," will not be incremented.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  const { submitted, submitAttempts } = useForm();\n")),Object(r.b)("p",null,"It will be only invoked if your form passes all the validations added at any level (Collections or Fields).\nFor each invokation the value ",Object(r.b)("strong",{parentName:"p"},"submitAttempts")," will be incremented."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"initialState")),": object"),Object(r.b)("p",null,"It is a plain object that rappresent the initial state of the form."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"reducers")),": array | function"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"(nextState, prevState) => nextState\n")),Object(r.b)("p",null,"An array whose values correspond to different reducing functions.\nReducers functions specify how the Form's state change."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"action")),": string"),Object(r.b)("p",null,"The action attribute specifies where to send the form-data when a form is submitted."),Object(r.b)("p",null,"Possible values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'An absolute URL - points to another web site (like action="',Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.example.com/example.htm%22"}),'http://www.example.com/example.htm"'),")"),Object(r.b)("li",{parentName:"ul"},'A relative URL - points to a file within a web site (like action="example.htm")')),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"  import Form, { Input } from 'usetheform'\n")),Object(r.b)(b.b,{__position:0,__code:'<Form\n  initialState={{ name: \'foo\', sex: \'M\', option1: \'option1\' }}\n  onInit={(state, isFormValid) => console.log(\'INIT\', state, isFormValid)}\n  onChange={(state, isFormValid) => console.log(\'CHANGE\', state, isFormValid)}\n  onSubmit={(state, isFormValid) => console.log(\'SUBMIT\', state, isFormValid)}\n>\n  <Input type="text" name="name" value="foo" />\n  <Input type="radio" name="sex" value="M" />\n  <Input type="radio" name="sex" value="F" />\n  <Input type="checkbox" name="option1" value="option1" />\n  <Input type="checkbox" name="option2" value="option2" />\n  <button type="submit">Submit</button>\n</Form>',__scope:(t={props:j,DefaultLayout:i.a,Playground:b.b,Form:c.a,Input:l.c},t.DefaultLayout=i.a,t._frontmatter=m,t),mdxType:"Playground"},Object(r.b)(c.a,{initialState:{name:"foo",sex:"M",option1:"option1"},onInit:function(e,t){return console.log("INIT",e,t)},onChange:function(e,t){return console.log("CHANGE",e,t)},onSubmit:function(e,t){return console.log("SUBMIT",e,t)},mdxType:"Form"},Object(r.b)(l.c,{type:"text",name:"name",value:"foo",mdxType:"Input"}),Object(r.b)(l.c,{type:"radio",name:"sex",value:"M",mdxType:"Input"}),Object(r.b)(l.c,{type:"radio",name:"sex",value:"F",mdxType:"Input"}),Object(r.b)(l.c,{type:"checkbox",name:"option1",value:"option1",mdxType:"Input"}),Object(r.b)(l.c,{type:"checkbox",name:"option2",value:"option2",mdxType:"Input"}),Object(r.b)("button",{type:"submit"},"Submit"))),Object(r.b)("h2",{id:"reducers"},"Reducers"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"  import Form, { Input } from 'usetheform'\n")),Object(r.b)(b.b,{__position:1,__code:'() => {\n  const maxNumber10 = (nextState, prevState) => {\n    if (nextState.myNumber > 10) {\n      nextState.myNumber = 10\n    }\n    return nextState\n  }\n  const minNumber1 = (nextState, prevState) => {\n    if (nextState.myNumber <= 0) {\n      nextState.myNumber = 0\n    }\n    return nextState\n  }\n  return (\n    <Form reducers={[minNumber1, maxNumber10]}>\n      <Input type="number" name="myNumber" value="1" />\n    </Form>\n  )\n}',__scope:(n={props:j,DefaultLayout:i.a,Playground:b.b,Form:c.a,Input:l.c},n.DefaultLayout=i.a,n._frontmatter=m,n),mdxType:"Playground"},(function(){return Object(r.b)(c.a,{reducers:[function(e,t){return e.myNumber<=0&&(e.myNumber=0),e},function(e,t){return e.myNumber>10&&(e.myNumber=10),e}],mdxType:"Form"},Object(r.b)(l.c,{type:"number",name:"myNumber",value:"1",mdxType:"Input"}))})))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/Form.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-form-mdx-74cf22b094f31bd92b98.js.map