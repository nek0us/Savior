(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[90],{16238:function(L){L.exports={card:"card___2xz_w",errorIcon:"errorIcon___3f1hd",anticon:"anticon___SUe4f",errorPopover:"errorPopover___2bDwS",errorListItem:"errorListItem___18npQ",errorField:"errorField___1xVIa",editable:"editable___1hyhK"}},40153:function(L,$,r){"use strict";r.r($),r.d($,{default:function(){return ie}});var M=r(86582),ge=r(57663),K=r(71577),ye=r(58024),N=r(39144),je=r(13062),T=r(71230),Ze=r(89032),F=r(15746),xe=r(62350),Q=r(75443),Ce=r(34792),E=r(48086),v=r(3182),Ee=r(20136),H=r(55241),Ae=r(9715),U=r(82482),A=r(2824),J=r(94043),u=r.n(J),O=r(73218),R=r(67294),x=r(952),B=r(64317),j=r(5966),z=r(45510),X=r(71975),G=r(90672),k=r(93046),q=r(85224),_=r(49101),C=r(48971);function ee(m){return S.apply(this,arguments)}function S(){return S=(0,v.Z)(u().mark(function m(p){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,C.WY)("/api/report/",{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))},data:p,responseType:"blob"}).then(function(b){var Z=URL.createObjectURL(new Blob([b])),g=p.report_center+"_"+p.report_systemname+"_No"+p.report_no+".docx",y=document.createElement("a");y.href=Z,y.download=g,y.click(),URL.revokeObjectURL(Z)}));case 1:case"end":return i.stop()}},m)})),S.apply(this,arguments)}function re(){return D.apply(this,arguments)}function D(){return D=(0,v.Z)(u().mark(function m(){return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,C.WY)("/api/project/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}}));case 1:case"end":return o.stop()}},m)})),D.apply(this,arguments)}function te(){return P.apply(this,arguments)}function P(){return P=(0,v.Z)(u().mark(function m(){return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,C.WY)("/api/program/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}}));case 1:case"end":return o.stop()}},m)})),P.apply(this,arguments)}function ae(m){return I.apply(this,arguments)}function I(){return I=(0,v.Z)(u().mark(function m(p){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,C.WY)("/api/program/"+p+"/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}}));case 1:case"end":return i.stop()}},m)})),I.apply(this,arguments)}var ne=r(16238),h=r.n(ne),ue=r(30381),W=r.n(ue),Be=r(83839),le=r(71167),se=r.n(le),e=r(85893),f={report_center:"\u6240\u5C5E\u9879\u76EE",report_systemname:"\u6240\u5C5E\u7CFB\u7EDF",report_no:"\u62A5\u544A\u7F16\u53F7",report_start_time:"\u6D4B\u8BD5\u5F00\u59CB\u65F6\u95F4",report_end_time:"\u6D4B\u8BD5\u7ED3\u675F\u65F6\u95F4",report_test_url:"\u6D4B\u8BD5Url"},oe=function(){var p=U.Z.useForm(),o=(0,A.Z)(p,1),i=o[0],b=(0,R.useState)([]),Z=(0,A.Z)(b,2),g=Z[0],y=Z[1],de=function(a){ae(a).then(function(t){i.setFieldsValue({vul_type_name:t.program_vul_name,vul_name:t.program_vul_name,vul_recurrence:"",vul_describe:t.program_describe,vul_modify_repair:t.program_repair})})},ce={toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike","link"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],["blockquote","code-block"],["clean"]]},me=(0,R.useState)([]),V=(0,A.Z)(me,2),pe=V[0],Y=V[1],ve=function(a){var t=a.filter(function(n){return n.errors.length>0}).length;if(!a||t===0)return null;var c=function(d){var w=document.querySelector('label[for="'.concat(d,'"]'));w&&w.scrollIntoView(!0)},l=a.map(function(n){if(!n||n.errors.length===0)return null;var d=n.name[0];return(0,e.jsxs)("li",{className:h().errorListItem,onClick:function(){return c(d)},children:[(0,e.jsx)(O.Z,{className:h().errorIcon}),(0,e.jsx)("div",{className:h().errorMessage,children:n.errors[0]}),(0,e.jsx)("div",{className:h().errorField,children:f[d]})]},d)});return(0,e.jsxs)("span",{className:h().errorIcon,children:[(0,e.jsx)(H.Z,{title:"\u8868\u5355\u6821\u9A8C\u4FE1\u606F",content:l,overlayClassName:h().errorPopover,trigger:"click",getPopupContainer:function(d){return d&&d.parentNode?d.parentNode:d},children:(0,e.jsx)(O.Z,{})}),t]})},he=function(){var s=(0,v.Z)(u().mark(function a(t){return u().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return Y([]),t.vuls=g,l.prev=2,l.next=5,ee(t);case 5:E.default.success("\u63D0\u4EA4\u6210\u529F\uFF0C\u62A5\u544A\u81EA\u52A8\u4E0B\u8F7D\u540E\u8BF7\u624B\u52A8\u5237\u65B0\u9875\u9762\uFF01"),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(2),E.default.error("\u63D0\u4EA4\u5931\u8D25\uFF0C\u8BF7\u6838\u5B9E\uFF01");case 11:case"end":return l.stop()}},a,null,[[2,8]])}));return function(t){return s.apply(this,arguments)}}(),fe=function(a){Y(a.errorFields)},Fe=[{title:"\u6F0F\u6D1E\u7C7B\u578B",dataIndex:"vul_type_name",key:"vul_type_name",width:"20%"},{title:"\u6F0F\u6D1E\u540D\u79F0",dataIndex:"vul_name",key:"vul_name",width:"20%"},{title:"\u6F0F\u6D1E\u7B49\u7EA7",dataIndex:"vul_level",hideInForm:!0,valueEnum:{0:{text:"\u65e0\u98ce\u9669",status:"None"},1:{text:"\u4F4E\u5371",status:"Success"},2:{text:"\u4E2D\u5371",status:"Warning"},3:{text:"\u9AD8\u5371",status:"Error"}},width:"10%"},{title:"\u6F0F\u6D1EURL",dataIndex:"vul_url",key:"vul_url",width:"30%",ellipsis:!0,copyable:!0},{title:"\u64CD\u4F5C",key:"action",valueType:"option",render:function(a,t,c,l){return[(0,e.jsx)(Q.Z,{title:"\u786E\u5B9A\u5220\u9664\u8BE5\u6F0F\u6D1E\u5417\uFF1F",onConfirm:function(){y(g.filter(function(d){return d.id!==t.id}))},children:(0,e.jsx)("a",{children:"\u5220\u9664"})})]}}];return(0,e.jsx)(x.ZP,{layout:"vertical",hideRequiredMark:!0,submitter:{render:function(a,t){return(0,e.jsxs)(q.Z,{children:[ve(pe),t]})}},initialValues:{report_no:new Date().getTime(),report_start_time:W()(),report_end_time:W()()},onFinish:he,onFinishFailed:fe,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(N.Z,{title:"\u62A5\u544A\u7BA1\u7406",className:h().card,bordered:!1,children:[(0,e.jsxs)(T.Z,{gutter:16,children:[(0,e.jsx)(F.Z,{lg:6,md:12,sm:24,children:(0,e.jsx)(B.Z,{label:f.report_center,name:"report_center",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6240\u5C5E\u9879\u76EE"}],request:(0,v.Z)(u().mark(function s(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",re().then(function(c){var l=c.data;return l.map(function(n){return{label:n.project_center,value:n.project_center}})}));case 1:case"end":return t.stop()}},s)})),placeholder:"\u8BF7\u9009\u62E9"})}),(0,e.jsx)(F.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,e.jsx)(j.Z,{label:f.report_systemname,name:"report_systemname",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5C5E\u7CFB\u7EDF"},{pattern:"^[\u4E00-\u9FA5_a-zA-Z0-9]+$",message:"\u7981\u6B62\u8F93\u5165\u7A7A\u683C\u53CA\u7279\u6B8A\u7B26\u53F7"}],placeholder:"\u8BF7\u8F93\u5165"})}),(0,e.jsx)(F.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,e.jsx)(j.Z,{label:f.report_no,name:"report_no",rules:[{required:!0}],placeholder:"\u8BF7\u5237\u65B0\u9875\u9762\u751F\u6210\u62A5\u544A\u7F16\u53F7",disabled:!0})})]}),(0,e.jsxs)(T.Z,{gutter:16,children:[(0,e.jsx)(F.Z,{lg:6,md:12,sm:24,children:(0,e.jsx)(z.Z,{label:f.report_start_time,name:"report_start_time",fieldProps:{style:{width:"100%"}},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D4B\u8BD5\u5F00\u59CB\u65E5\u671F"}]})}),(0,e.jsx)(F.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,e.jsx)(z.Z,{label:f.report_end_time,name:"report_end_time",fieldProps:{style:{width:"100%"}},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D4B\u8BD5\u7ED3\u675F\u65E5\u671F"}],disabled:!0})}),(0,e.jsx)(F.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,e.jsx)(j.Z,{label:f.report_test_url,name:"report_test_url",rules:[{required:!0}],placeholder:"\u8BF7\u8F93\u5165\u6D4B\u8BD5Url"})})]})]}),(0,e.jsxs)(N.Z,{title:"\u6F0F\u6D1E\u7BA1\u7406",bordered:!1,children:[(0,e.jsx)(x.ZP.Item,{name:"vuls",children:(0,e.jsx)(k.ZP,{columns:Fe,dataSource:g,search:!1,toolBarRender:!1,pagination:!1,name:"vuls"})}),(0,e.jsxs)(X.Z,{title:"\u6DFB\u52A0\u6F0F\u6D1E",trigger:(0,e.jsxs)(K.Z,{type:"dashed",block:!0,children:[(0,e.jsx)(_.Z,{}),"\u6DFB\u52A0\u6F0F\u6D1E"]}),form:i,drawerProps:{forceRender:!0,destroyOnClose:!0},onFinish:function(){var s=(0,v.Z)(u().mark(function a(t){var c;return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return E.default.success("\u6F0F\u6D1E\u4FDD\u5B58\u6210\u529F\uFF0C\u8BF7\u52FF\u5237\u65B0\u9875\u9762!"),c=(0,M.Z)(g),t.id="0".concat(Date.now()),c.push(t),y(c),n.abrupt("return",!0);case 6:case"end":return n.stop()}},a)}));return function(a){return s.apply(this,arguments)}}(),children:[(0,e.jsxs)(x.ZP.Group,{children:[(0,e.jsx)(B.Z,{showSearch:!0,placeholder:"\u641C\u7D22\u6216\u9009\u62E9",optionFilterProp:"children",filterOption:function(a,t){return t.children.toLowerCase().indexOf(a.toLowerCase())>=0},filterSort:function(a,t){return a.children.toLowerCase().localeCompare(t.children.toLowerCase())},width:"md",label:"\u6F0F\u6D1E\u7C7B\u578B",name:"vul_type_name",onChange:de,request:(0,v.Z)(u().mark(function s(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",te().then(function(c){var l=c.data;return l.map(function(n){return{label:n.program_vul_name,value:n.id}})}));case 1:case"end":return t.stop()}},s)})),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6F0F\u6D1E\u7C7B\u578B"}]}),(0,e.jsx)(j.Z,{width:"md",name:"vul_name",label:"\u6F0F\u6D1E\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6F0F\u6D1E\u540D\u79F0"}]})]}),(0,e.jsxs)(x.ZP.Group,{children:[(0,e.jsx)(B.Z,{width:"md",label:"\u6F0F\u6D1E\u7EA7\u522B",name:"vul_level",request:(0,v.Z)(u().mark(function s(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[{label:"\u9AD8\u5371",value:"3"},{label:"\u4E2D\u5371",value:"2"},{label:"\u4F4E\u5371",value:"1"},{label:"\u65e0\u98ce\u9669",value:"0"}]);case 1:case"end":return t.stop()}},s)})),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6F0F\u6D1E\u7EA7\u522B"}]}),(0,e.jsx)(j.Z,{width:"md",name:"vul_url",label:"\u6F0F\u6D1EUrl",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6F0F\u6D1EUrl"}]})]}),(0,e.jsx)(U.Z.Item,{name:"vul_recurrence",label:"\u590D\u73B0\u6B65\u9AA4",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u590D\u73B0\u6B65\u9AA4"}],children:(0,e.jsx)(se(),{modules:ce})}),(0,e.jsx)(G.Z,{whiteSpace:"pre-wrap",name:"vul_describe",label:"\u6F0F\u6D1E\u63CF\u8FF0",rows:3,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6F0F\u6D1E\u63CF\u8FF0"}]}),(0,e.jsx)(G.Z,{whiteSpace:"pre-wrap",name:"vul_modify_repair",label:"\u4FEE\u590D\u5EFA\u8BAE",rows:3,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4FEE\u590D\u5EFA\u8BAE"}]})]})]})]})})},ie=oe}}]);
