(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/Gallery16.bc9e058b.jpg"},101:function(e,a,t){e.exports=t.p+"static/media/Gallery17.631f5d6e.jpg"},102:function(e,a,t){e.exports=t.p+"static/media/Gallery18.eabe1ad4.jpg"},103:function(e,a,t){e.exports=t.p+"static/media/Gallery19.01377da0.jpg"},104:function(e,a,t){e.exports=t.p+"static/media/Gallery20.59a7d635.jpg"},105:function(e,a,t){e.exports=t.p+"static/media/Gallery23.431fa8fe.jpg"},106:function(e,a,t){e.exports=t.p+"static/media/family.2927a024.PNG"},133:function(e,a,t){e.exports=t.p+"static/media/parallax.9d8cb2f0.jpg"},15:function(e,a,t){e.exports=t.p+"static/media/logo.ca339add.png"},154:function(e,a,t){e.exports=t(242)},159:function(e,a,t){},163:function(e,a,t){},182:function(e,a,t){},188:function(e,a,t){},234:function(e,a,t){},235:function(e,a,t){},236:function(e,a,t){},237:function(e,a,t){},238:function(e,a,t){},241:function(e,a,t){},242:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),m=(t(159),t(160),t(161),t(162),t(286)),i=t(132),s=t(133),o=t.n(s),u=t(285),d=t(135),E=(t(163),function(){return l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement(i.Parallax,{bgImage:o.a,strength:700},l.a.createElement("div",{style:{height:860,width:500}},l.a.createElement("div",{className:"frame"},l.a.createElement("div",{className:"circle"}),l.a.createElement("div",{className:"line left"}),l.a.createElement("div",{className:"line right"}),l.a.createElement("div",{className:"bracket left"}),l.a.createElement("div",{className:"bracket right"}),l.a.createElement("div",{className:"small top"},"Wood"),l.a.createElement("div",{className:"big"},"Campbell"),l.a.createElement("div",{className:"small bottom"},"Designs"),l.a.createElement("div",{className:"hide top"}),l.a.createElement("div",{className:"hide bottom"}))))))}),h=t(16),p=t(14),b=t(309),g=t(290),f=t(308),N=t(310),v=t(305),y=t(23),x=t.n(y),C={postUser:function(e){return x.a.post("/api/login/",e)},getUser:function(e){return x.a.get("/api/admin/"+e)},logout:function(){return x.a.get("/api/logout")},getQuotes:function(){return x.a.get("/api/quotes")},getQuote:function(e){return x.a.get("/api/quotes/"+e)},deleteQuote:function(e){return x.a.delete("/api/quotes/"+e)},saveQuote:function(e){return x.a.post("/api/quotes",e)},saveMessage:function(e){return x.a.post("/api/message",e)},getMessages:function(){return x.a.get("/api/message")},getMessage:function(e){return x.a.get("/api/message/"+e)},deleteMessage:function(e){return x.a.delete("/api/message/"+e)}},w=t(15),k=t.n(w),G=t(143),D=t(46),j=t(64),W=Object(n.createContext)(),O=W.Provider,F=function(e,a){switch(console.log("updatting global state:",a),a.type){case"firstName":case"lastName":case"phoneNumber":case"address":case"address2":case"email":case"city":case"state":case"zip":case"finishColor":case"doorDesign":case"handle":case"doorKit":case"installOrDelivery":case"dimensionsH":case"dimensionsW":case"name":case"emailMessage":case"message":return Object(j.a)({},e,Object(D.a)({},a.type,a.value));default:throw new Error("Invalid action type: ".concat(a.type))}},H=function(e){e.value;var a=Object(G.a)(e,["value"]),t=Object(n.useReducer)(F,{firstName:"",lastName:"",phoneNumber:"",address:"",address2:"",email:"",city:"",state:"",zip:"",finishColor:"",doorDesign:"",doorKit:"",handle:"",installOrDelivery:"",dimensionsH:"",dimensionsW:"",name:"",emailMessage:"",message:""}),r=Object(h.a)(t,2),c=r[0],m=r[1];return l.a.createElement(O,Object.assign({value:[c,m]},a))},S=function(){return Object(n.useContext)(W)};t(182);function L(){var e=Object(p.f)(),a=S(),t=Object(h.a)(a,2),r=t[0],c=t[1],i=l.a.useState(0),s=Object(h.a)(i,2),o=s[0],E=s[1],y=["Info","Finish","Door Design","Barn Door Kit","Handle","Preferences","Review"],x=Object(n.useState)(!1),w=Object(h.a)(x,2),G=w[0],D=w[1];function j(e){c({type:e.target.name,value:e.target.value})}var W=function(e){e.preventDefault(),E(function(e){return e-1})},O=function(a){(a.preventDefault(),0===o)&&(!1===a.currentTarget.checkValidity()&&E(function(e){return e-1}),D(!0));6===o&&C.saveQuote({firstName:r.firstName,lastName:r.lastName,phoneNumber:r.phoneNumber,address:r.address,address2:r.address2,email:r.email,city:r.city,state:r.state,zip:r.zip,finishColor:r.finishColor,doorDesign:r.doorDesign,doorKit:r.doorKit,handle:r.handle,installOrDelivery:r.installOrDelivery,dimensionsH:r.dimensionsH,dimensionsW:r.dimensionsW}).then(function(){e.push("/thankyou")}).catch(function(e){return console.log(e)}),o<6&&E(function(e){return e+1})};return l.a.createElement(m.a,null,l.a.createElement(b.a,{activeStep:o,orientation:"vertical"},y.map(function(e,a){return l.a.createElement(g.a,{key:e},l.a.createElement(f.a,null,e),l.a.createElement(N.a,null,function(e){switch(e){case 0:return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("img",{className:"logo mb-5",alt:k.a,src:k.a})))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"text-center mb-4"},l.a.createElement("h1",null,"Info"))),l.a.createElement(v.a,{noValidate:!0,validated:G,onSubmit:O,id:"form0"},l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{as:d.a,md:"5"},l.a.createElement(v.a.Label,null,"First name"),l.a.createElement(v.a.Control,{required:!0,type:"text",name:"firstName",placeholder:"First name",value:r.firstName,onChange:j}),l.a.createElement(v.a.Control.Feedback,null,"Looks good!"),l.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Ooops!")),l.a.createElement(v.a.Group,{as:d.a,md:"5"},l.a.createElement(v.a.Label,null,"First name"),l.a.createElement(v.a.Control,{required:!0,type:"text",name:"lastName",placeholder:"Last name",onChange:j}),l.a.createElement(v.a.Control.Feedback,null,"Looks good!"),l.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Ooops!")),l.a.createElement(v.a.Group,{as:d.a,md:"2"},l.a.createElement(v.a.Label,null,"Phone Number"),l.a.createElement(v.a.Control,{required:!0,type:"phone-number",placeholder:"555-555-5555",name:"phoneNumber",min:"12",max:"12",pattern:"^[2-9]\\d{2}-\\d{3}-\\d{4}$",onChange:j}),l.a.createElement(v.a.Control.Feedback,null,"Looks good!"),l.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Phone Number Missing!"))),l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{as:d.a,md:"12"},l.a.createElement(v.a.Label,null,"Email"),l.a.createElement(v.a.Control,{required:!0,type:"email",placeholder:"@example.com",name:"email",onChange:j}),l.a.createElement(v.a.Control.Feedback,null,"Looks good!"),l.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Ooops!"))),l.a.createElement("br",null),l.a.createElement("h3",null,"Optional"),l.a.createElement("p",{className:"text-muted"},"We need your address if you are chosing Delivery"),l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{as:d.a,md:"12"},l.a.createElement(v.a.Label,null,"Address Line 1"),l.a.createElement(v.a.Control,{type:"text",placeholder:"Address",name:"address",onChange:j})),l.a.createElement(v.a.Group,{as:d.a,md:"12"},l.a.createElement(v.a.Label,null,"Address Line 2"),l.a.createElement(v.a.Control,{type:"text",placeholder:"Address 2",name:"address2",onChange:j})),l.a.createElement(v.a.Group,{as:d.a,md:"4"},l.a.createElement(v.a.Label,null,"City"),l.a.createElement(v.a.Control,{type:"text",placeholder:"City",name:"city",onChange:j})),l.a.createElement(v.a.Group,{as:d.a,md:"4"},l.a.createElement(v.a.Label,null,"State"),l.a.createElement(v.a.Control,{type:"text",placeholder:"State",name:"state",onChange:j})),l.a.createElement(v.a.Group,{as:d.a,md:"4"},l.a.createElement(v.a.Label,null,"Zip Code"),l.a.createElement(v.a.Control,{type:"number",placeholder:"Zip",name:"zip",onChange:j}))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Next")));case 1:return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("img",{className:"logo mb-5",alt:k.a,src:k.a})))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"text-center mb-4"},l.a.createElement("h1",null,"Finish"))),l.a.createElement(u.a,{className:"mb-4"},l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"White"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio1",type:"radio",name:"finishColor",checked:"White Paint"===r.finishColor,value:"White Paint",onChange:j}),l.a.createElement("label",{htmlFor:"radio1"},"White"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Grey"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio2",type:"radio",name:"finishColor",value:"Grey Paint",onChange:j}),l.a.createElement("label",{htmlFor:"radio2"},"Grey"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Easter"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio3",type:"radio",name:"finishColor",value:"Easter Blue Paint",onChange:j}),l.a.createElement("label",{htmlFor:"radio3"},"Easter")))),l.a.createElement("h1",{className:"text-center mb-4"},"Stains"),l.a.createElement(u.a,{className:"mb-5"},l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"White-Stain"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio4",type:"radio",name:"finishColor",value:"White Stain",onChange:j}),l.a.createElement("label",{htmlFor:"radio4"},"White"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Grey-Stain"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio5",type:"radio",name:"finishColor",value:"Grey Stain",onChange:j}),l.a.createElement("label",{htmlFor:"radio5"},"Grey"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Medium"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio6",type:"radio",name:"finishColor",value:"Medium Brown Stain",onChange:j}),l.a.createElement("label",{htmlFor:"radio6"},"M-Brown")))),l.a.createElement("button",{className:"btn",onClick:W},"Back"),l.a.createElement("button",{type:"submit",disabled:!r.finishColor,onClick:O,className:"btn btn-primary"},"Next"));case 2:return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("img",{className:"logo mb-5",alt:k.a,src:k.a})))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"text-center mb-4"},l.a.createElement("h1",null,"Door Design"))),l.a.createElement("p",{className:"text-center mb-5"},"All our doors are made out of high grade cabinet pine"),l.a.createElement(u.a,{className:"mb-4"},l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Arrow"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio1",type:"radio",name:"doorDesign",value:"Arrow Door",onChange:j}),l.a.createElement("label",{htmlFor:"radio1"},"Arrow"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Chevron"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio2",type:"radio",name:"doorDesign",value:"Chevron Door",onChange:j}),l.a.createElement("label",{htmlFor:"radio2"},"Chevron"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Multiple"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio3",type:"radio",name:"doorDesign",value:"Multiple X Door",onChange:j}),l.a.createElement("label",{htmlFor:"radio3"},"Multiple X")))),l.a.createElement(u.a,{className:"mb-4"},l.a.createElement(d.a,{xs:6},l.a.createElement("div",{className:"Curved"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio4",type:"radio",name:"doorDesign",value:"Curved Door",onChange:j}),l.a.createElement("label",{htmlFor:"radio4"},"Curved"))),l.a.createElement(d.a,{xs:6},l.a.createElement("div",{className:"Paneled"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio5",type:"radio",name:"doorDesign",value:"Paneled Door",onChange:j}),l.a.createElement("label",{htmlFor:"radio5"},"Paneled")))),l.a.createElement("button",{className:"btn",onClick:W},"Back"),l.a.createElement("button",{type:"submit",disabled:!r.doorDesign,onClick:O,className:"btn btn-primary"},"Next"));case 3:return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("img",{className:"logo mb-5",alt:k.a,src:k.a})))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"text-center mb-4"},l.a.createElement("h1",null,"Barn Door Kit"))),l.a.createElement(u.a,{className:"mb-4"},l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"J"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio1",type:"radio",name:"doorKit",value:"J Shape Hanger",onChange:j}),l.a.createElement("label",{htmlFor:"radio1"},"J Shape"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Rhombic"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio2",type:"radio",name:"doorKit",value:"Rhombic Shape Hanger",onChange:j}),l.a.createElement("label",{htmlFor:"radio2"},"Rhombic"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Big"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio3",type:"radio",name:"doorKit",value:"Big Wheel Hanger",onChange:j}),l.a.createElement("label",{htmlFor:"radio3"},"Big Wheel")))),l.a.createElement("button",{className:"btn",onClick:W},"Back"),l.a.createElement("button",{type:"submit",disabled:!r.doorKit,onClick:O,className:"btn btn-primary"},"Next"));case 4:return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("img",{className:"logo mb-5",alt:k.a,src:k.a})))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"text-center mb-4"},l.a.createElement("h1",null,"Handles"))),l.a.createElement(u.a,{className:"mb-4"},l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Square"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio1",type:"radio",name:"handle",value:"Square",onChange:j}),l.a.createElement("label",{htmlFor:"radio1"},"Square"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Round"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio2",type:"radio",name:"handle",value:"Round",onChange:j}),l.a.createElement("label",{htmlFor:"radio2"},"Round"))),l.a.createElement(d.a,{xs:4},l.a.createElement("div",{className:"Latch"}),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio3",type:"radio",name:"handle",value:"Round with Latch",onChange:j}),l.a.createElement("label",{htmlFor:"radio3"},"With Latch")))),l.a.createElement("button",{className:"btn",onClick:W},"Back"),l.a.createElement("button",{type:"submit",disabled:!r.handle,onClick:O,className:"btn btn-primary"},"Next"));case 5:return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("img",{className:"logo mb-5",alt:k.a,src:k.a})))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"text-center mt-3 mb-4"},l.a.createElement("h1",null,"Preferences"))),l.a.createElement(u.a,{className:"mb-4"},l.a.createElement(d.a,null,l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio1",type:"radio",name:"installOrDelivery",value:"Installation",onChange:j}),l.a.createElement("label",{htmlFor:"radio1"},"Install"))),l.a.createElement("h3",null,"Or"),l.a.createElement(d.a,null,l.a.createElement("div",{className:"inputGroup"},l.a.createElement("input",{id:"radio2",type:"radio",name:"installOrDelivery",value:"Delivery",onChange:j}),l.a.createElement("label",{htmlFor:"radio2"},"Delivery")))),l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("h3",{className:"text-center mt-4"},"Dimensions ?"),l.a.createElement("p",{className:"text-center"},l.a.createElement("span",{className:"text-muted"},"(Optional)")))),l.a.createElement(u.a,null,l.a.createElement(d.a,{md:{span:6,offset:3}},l.a.createElement(v.a,null,l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{as:d.a,xs:"6"},l.a.createElement(v.a.Label,null,"Height (Inches):"),l.a.createElement(v.a.Control,{required:!0,type:"number",name:"dimensionsH",onChange:j})),l.a.createElement(v.a.Group,{as:d.a,xs:"6"},l.a.createElement(v.a.Label,null,"Width (Inches):"),l.a.createElement(v.a.Control,{required:!0,type:"number",name:"dimensionsW",onChange:j})))))),l.a.createElement("button",{className:"btn",onClick:W},"Back"),l.a.createElement("button",{type:"submit",disabled:!r.installOrDelivery,onClick:O,className:"btn btn-primary"},"Next"));case 6:return l.a.createElement(v.a,{className:"text-center mb-5",onSubmit:O},l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("img",{className:"logo mb-5",alt:k.a,src:k.a})))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"text-center mb-4"},l.a.createElement("h1",null,"Review"))),l.a.createElement(u.a,null,l.a.createElement(d.a,{xs:6},l.a.createElement("h3",{className:"caption"},"Your Name:"),l.a.createElement("p",{className:"detailsText"},r.firstName," ",r.lastName),l.a.createElement("h3",{className:"caption"},"Email:"),l.a.createElement("p",{className:"detailsText"},r.email),l.a.createElement("h3",{className:"caption"},"Phone Number:"),l.a.createElement("p",{className:"detailsText"},r.phoneNumber),l.a.createElement("h3",{className:"caption"},"Address:"),l.a.createElement("p",{className:"detailsText"},r.address," ",r.address2," ",r.city," ",r.state," ",r.zip," ")),l.a.createElement(d.a,{xs:6},l.a.createElement("h3",{className:"caption"},"Dimensions:"),l.a.createElement("h5",null,"Width (In) :"),l.a.createElement("p",{className:"detailsText"},r.dimensionsW),l.a.createElement("h5",null,"Height (In) :"),l.a.createElement("p",{className:"detailsText"},r.dimensionsH),l.a.createElement("h3",{className:"caption mt-4"},"You Selected:"),r.installOrDelivery)),l.a.createElement("hr",null),l.a.createElement(u.a,{className:"mt-4"},l.a.createElement(d.a,{xs:3},l.a.createElement("h3",{className:"caption"},"Finish:"),l.a.createElement("p",{className:"detailsText"},r.finishColor)),l.a.createElement(d.a,{xs:3},l.a.createElement("h3",{className:"caption"},"Design:"),l.a.createElement("p",{className:"detailsText"},r.doorDesign)),l.a.createElement(d.a,{xs:3},l.a.createElement("h3",{className:"caption"},"Kit:"),l.a.createElement("p",{className:"detailsText"},r.doorKit)),l.a.createElement(d.a,{xs:3},l.a.createElement("h3",{className:"caption"},"Handle:"),l.a.createElement("p",{className:"detailsText"},r.handle))),l.a.createElement("button",{className:"btn mt-5",onClick:W},"Back"),l.a.createElement("button",{type:"submit",className:"btn btn-success mt-5",onClick:O},"Finish"));default:return l.a.createElement("h2",null,"Nothing to display")}}(a)))})))}var M=t(26),q=t(307),I=t(306);t(188);function P(){return l.a.createElement(q.a,{collapseOnSelect:!0,expand:"lg",bg:"light",sticky:"top",className:"navy"},l.a.createElement(q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(q.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(I.a,{className:"nav-container"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(I.a.Link,{to:"/",className:"/"===window.location.pathname?" active":" ",href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(I.a.Link,{to:"/quote",className:"/quote"===window.location.pathname?" active":" ",href:"/quote"},"Quotes")),l.a.createElement("li",null,l.a.createElement(I.a.Link,{to:"/gallery",className:"/gallery"===window.location.pathname?" active":" ",href:"/gallery"},"Gallery")),l.a.createElement("li",null,l.a.createElement(I.a.Link,{href:"/#about"},"About us")),l.a.createElement("li",null,l.a.createElement(I.a.Link,{href:"/#contact-img"},"Contact us"))))))}var T=t(140),R=t.n(T),B=(t(234),t(87)),Q=t.n(B),A=t(88),K=t.n(A),_=t(89),z=t.n(_),U=t(90),V=t.n(U),J=t(91),Y=t.n(J),X=t(92),Z=t.n(X),$=t(52),ee=t.n($),ae=t(93),te=t.n(ae),ne=t(94),le=t.n(ne),re=t(95),ce=t.n(re),me=t(96),ie=t.n(me),se=t(97),oe=t.n(se),ue=t(98),de=t.n(ue),Ee=t(99),he=t.n(Ee),pe=t(100),be=t.n(pe),ge=t(101),fe=t.n(ge),Ne=t(102),ve=t.n(Ne),ye=t(103),xe=t.n(ye),Ce=t(104),we=t.n(Ce),ke=t(53),Ge=t.n(ke),De=t(105),je=t.n(De),We=[{src:Q.a,thumbnail:Q.a,thumbnailWidth:400,thumbnailHeight:400},{src:z.a,thumbnail:z.a,thumbnailWidth:500,thumbnailHeight:300},{src:Y.a,thumbnail:Y.a,thumbnailWidth:400,thumbnailHeight:400},{src:ee.a,thumbnail:ee.a,thumbnailWidth:400,thumbnailHeight:400},{src:te.a,thumbnail:te.a,thumbnailWidth:500,thumbnailHeight:400},{src:ce.a,thumbnail:ce.a,thumbnailWidth:400,thumbnailHeight:400},{src:oe.a,thumbnail:oe.a,thumbnailWidth:600,thumbnailHeight:500},{src:he.a,thumbnail:he.a,thumbnailWidth:400,thumbnailHeight:400},{src:fe.a,thumbnail:fe.a,thumbnailWidth:400,thumbnailHeight:400},{src:xe.a,thumbnail:xe.a,thumbnailWidth:400,thumbnailHeight:400},{src:Ge.a,thumbnail:Ge.a,thumbnailWidth:400,thumbnailHeight:400},{src:je.a,thumbnail:je.a,thumbnailWidth:400,thumbnailHeight:400},{src:K.a,thumbnail:K.a,thumbnailWidth:400,thumbnailHeight:400},{src:V.a,thumbnail:V.a,thumbnailWidth:400,thumbnailHeight:400},{src:Z.a,thumbnail:Z.a,thumbnailWidth:400,thumbnailHeight:400},{src:ee.a,thumbnail:ee.a,thumbnailWidth:400,thumbnailHeight:400},{src:le.a,thumbnail:le.a,thumbnailWidth:400,thumbnailHeight:400},{src:ie.a,thumbnail:ie.a,thumbnailWidth:400,thumbnailHeight:400},{src:de.a,thumbnail:de.a,thumbnailWidth:400,thumbnailHeight:400},{src:be.a,thumbnail:be.a,thumbnailWidth:400,thumbnailHeight:400},{src:ve.a,thumbnail:ve.a,thumbnailWidth:400,thumbnailHeight:400},{src:we.a,thumbnail:we.a,thumbnailWidth:400,thumbnailHeight:400},{src:Ge.a,thumbnail:Ge.a,thumbnailWidth:400,thumbnailHeight:400}];function Oe(){return l.a.createElement(m.a,null,l.a.createElement(u.a,{className:"gallery-head"},l.a.createElement(d.a,null,l.a.createElement("h1",{className:"text-center"},"Gallery"))),l.a.createElement(u.a,{className:"images-grid"},l.a.createElement(d.a,null,l.a.createElement(R.a,{rowHeight:300,margin:4,backdropClosesModal:!0,showLightboxThumbnails:!0,images:We}))))}var Fe=t(106),He=t.n(Fe),Se=(t(235),function(){return l.a.createElement(m.a,{id:"about"},l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("h2",{className:"text-center header-about mt-4 mb-4"},"About Us"),l.a.createElement("p",{className:"campbell-p"},"Campbell Wood Designs was founded in 2017. It is a Veteran, and Family owned business. We are located in our hometown of Excelsior Springs, Missouri. The business was started when I built my wife a table for Christmas,and has just grown from there. I started with reclaimed pallet projects, and moved into building with fresh lumber. It is amazing that building Small furniture for my wife has turned into a business. I now specialize in sliding barn doors, and only build small furniture on the side."))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"text-center"},l.a.createElement("img",{id:"family",alt:He.a,src:He.a}))),l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("p",{className:"signature text-center mt-4"},"Josh Campbell"))))}),Le=t(291),Me=(t(236),function(){var e=S(),a=Object(h.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(h.a)(c,2),s=i[0],o=i[1];function E(e){r({type:e.target.name,value:e.target.value})}var b=Object(p.f)();return l.a.createElement(m.a,{fluid:!0,id:"contact-img"},l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("h1",{className:"text-center mt-4"},"Contact Us"))),l.a.createElement(u.a,null,l.a.createElement(d.a,{xs:12,className:"p-0"},l.a.createElement("iframe",{className:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.617735054326!2d-94.2230803843744!3d39.34224552820393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c1a5ee7b4257b5%3A0xa3156fb668eedb48!2s255%20E%20Broadway%20Ave%2C%20Excelsior%20Springs%2C%20MO%2064024!5e0!3m2!1sen!2sus!4v1589251463454!5m2!1sen!2sus"}))),l.a.createElement(u.a,null,l.a.createElement(d.a,{md:{span:6,offset:3},xs:{span:8,offset:2},id:"contact-form"},l.a.createElement("h2",{className:"text-center"},"Questions?"),l.a.createElement(v.a,{noValidate:!0,validated:s,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),o(!0),C.saveMessage({name:t.name,emailMessage:t.emailMessage,message:t.message}).then(function(){b.push("/thankyou")}).catch(function(e){return console.log(e)})}},l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{as:d.a,xs:"12",controlId:"validationCustom01"},l.a.createElement(v.a.Label,null,"First name"),l.a.createElement(v.a.Control,{required:!0,type:"text",name:"name",onChange:E}),l.a.createElement(v.a.Control.Feedback,null,"Looks good!"),l.a.createElement(v.a.Control.Feedback,{type:"invalid"},"We need your Name!")),l.a.createElement(v.a.Group,{as:d.a,xs:"12"},l.a.createElement(v.a.Label,null,"Email"),l.a.createElement(v.a.Control,{required:!0,type:"email",name:"emailMessage",onChange:E}),l.a.createElement(v.a.Control.Feedback,null,"Looks good!"),l.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Enter a valid Email!")),l.a.createElement(v.a.Group,{as:d.a,xs:"12"},l.a.createElement(v.a.Label,null,"Message"),l.a.createElement(Le.a,null,l.a.createElement(v.a.Control,{as:"textarea",name:"message",rows:"3",required:!0,onChange:E}),l.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Your Message is Missing!.")))),l.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Send")),l.a.createElement("hr",null),l.a.createElement("ul",{className:"contact-list"},l.a.createElement("li",{className:"list-item"},l.a.createElement("i",{className:"fas fa-map-marked-alt fa-2x"},l.a.createElement("span",{className:"contact-text"},"Excelsior Springs | MO"))),l.a.createElement("li",{className:"list-item"},l.a.createElement("i",{className:"fas fa-phone-alt fa-2x"},l.a.createElement("span",{className:"contact-text"},l.a.createElement("a",{href:"tel:1-816-500-7218",title:"Give me a call"},"(816) 500-7218")))),l.a.createElement("li",{className:"list-item"},l.a.createElement("i",{className:"fa fa-envelope fa-2x"},l.a.createElement("span",{className:"contact-text"},l.a.createElement("a",{href:"mailto:campbellwooddesigns@gmail.com",title:"Send me an email"},"campbellwooddesigns@gmail.com"))))))))}),qe=t(107),Ie=function(){return l.a.createElement(qe.a,{variant:"success"},l.a.createElement(qe.a.Heading,null,"Hey, nice to see you"),l.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),l.a.createElement("hr",null),l.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))},Pe=t(141),Te=t(297),Re=(t(237),t(293)),Be=t(294),Qe=t(296),Ae=t(295),Ke=t(292),_e=t(76),ze=t(77);var Ue=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],r=a[1],c=Object(p.g)().id;Object(n.useEffect)(function(){C.getQuote(c).then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})},[]);var i=Object(Ke.a)(function(e){return{red:{color:e.palette.getContrastText(_e.a[500]),backgroundColor:_e.a[500]},green:{color:"#fff",backgroundColor:ze.a[500]}}})();return l.a.createElement(m.a,null,l.a.createElement("div",{className:"text-center mt-3 mb-3"},l.a.createElement("img",{id:"logoDetails",alt:k.a,src:k.a})),l.a.createElement(u.a,{id:"quote-details"},l.a.createElement(d.a,{xs:4},l.a.createElement("h3",{className:"mt-2"},"Quote Details For : ")),l.a.createElement(d.a,{xs:4},l.a.createElement("h2",{className:" mt-2 text-center"},t.firstName," ",t.lastName))),l.a.createElement(Pe.a,{className:"mt-4"},l.a.createElement(u.a,null,l.a.createElement(d.a,{xs:6},l.a.createElement("h3",null,"Basic Info :"),l.a.createElement(Re.a,{className:i.root},l.a.createElement(Be.a,null,l.a.createElement(Ae.a,null,l.a.createElement("i",{className:"fas fa-user fa-2x iconDetail"})),l.a.createElement(Qe.a,null,t.firstName," ",t.lastName)),l.a.createElement(Be.a,null,l.a.createElement(Ae.a,null,l.a.createElement("i",{className:"fas fa-phone-alt fa-2x iconDetail"})),l.a.createElement(Qe.a,null,t.phoneNumber)),l.a.createElement(Be.a,null,l.a.createElement(Ae.a,null,l.a.createElement("i",{className:"fas fa-envelope fa-2x iconDetail"})),l.a.createElement(Qe.a,null,t.email)),l.a.createElement(Be.a,null,l.a.createElement(Ae.a,null,l.a.createElement("i",{className:"fas fa-address-card fa-2x iconDetail"})),l.a.createElement(Qe.a,null,t.address," ",t.address2," ",t.city," ",t.state," ",t.zip)))),l.a.createElement(d.a,{xs:6},l.a.createElement("h3",null,"Preferences :"),l.a.createElement(Re.a,{className:i.root},l.a.createElement(Be.a,null,l.a.createElement(Ae.a,null,l.a.createElement("i",{className:"fas fa-user fa-2x iconDetail"})),l.a.createElement(Qe.a,null,t.firstName," wants ",t.installOrDelivery)),l.a.createElement("h3",{className:"mt-3"},"Dimensions :"),l.a.createElement(Be.a,null,l.a.createElement(Ae.a,null,l.a.createElement("i",{className:"fas fa-ruler fa-2x iconDetail"})),l.a.createElement(Qe.a,null,"Width : ",t.dimensionsW),l.a.createElement(Qe.a,null,"Height : ",t.dimensionsH)))))),l.a.createElement(u.a,{className:"mt-3"},l.a.createElement(d.a,null,l.a.createElement(Pe.a,null,l.a.createElement(Te.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"th-details"},l.a.createElement("h3",null,"Finish Color")),l.a.createElement("th",{className:"th-details"},l.a.createElement("h3",null,"Door Design")),l.a.createElement("th",{className:"th-details"},l.a.createElement("h3",null,"Door Kit")),l.a.createElement("th",{className:"th-details"},l.a.createElement("h3",null,"Handle")))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,t.finishColor),l.a.createElement("td",null,t.doorDesign),l.a.createElement("td",null,t.doorKit),l.a.createElement("td",null,t.handle))))))))};t(238);function Ve(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),i=Object(h.a)(c,2),s=i[0],o=i[1];function E(){C.getQuotes().then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})}function p(){C.getMessages().then(function(e){return o(e.data)}).catch(function(e){return console.log(e)})}return Object(n.useEffect)(function(){E()},[]),Object(n.useEffect)(function(){p()},[]),l.a.createElement(m.a,null,l.a.createElement(u.a,{className:"admin-head"},l.a.createElement(d.a,null,l.a.createElement("h2",{id:"josh-text"},"Josh Campbell")),l.a.createElement(d.a,null,l.a.createElement("button",{className:"btn logout",onClick:function(e){e.preventDefault(),C.logout().then(function(){window.location.replace("/login")})}},l.a.createElement("i",{className:"fas fa-sign-out-alt"}),"Log Out"))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"p-0"},l.a.createElement(Pe.a,null,l.a.createElement("h1",{className:"text-center"},"Messages")),l.a.createElement(Pe.a,null,l.a.createElement(Te.a,{responsive:!0,className:"text-center"},s.length?l.a.createElement("tbody",null,s.map(function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",{className:"td-admin"},e.date),l.a.createElement("td",{className:"td-admin"},e.name),l.a.createElement("td",null,l.a.createElement(M.b,{className:"btn",to:"/admin/"+e._id},"View Quote"),l.a.createElement("button",{className:"btn",onClick:function(){return a=e._id,void C.deleteMessage(a).then(function(e){return p()}).catch(function(e){return console.log(e)});var a}},l.a.createElement("i",{className:"fas fa-trash delete"}))))})):l.a.createElement("caption",null,l.a.createElement("h3",null,"No Results to Display")))))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"p-0"},l.a.createElement(Pe.a,null,l.a.createElement("h1",{className:"text-center"},"Quotes")),l.a.createElement(Pe.a,null,l.a.createElement(Te.a,{responsive:!0,className:"text-center"},t.length?l.a.createElement("tbody",null,t.map(function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",{className:"td-admin"},e.date),l.a.createElement("td",{className:"td-admin"},e.firstName," ",e.lastName),l.a.createElement("td",null,l.a.createElement(M.b,{className:"btn",to:"/admin/"+e._id},"View Quote"),l.a.createElement("button",{className:"btn",onClick:function(){return a=e._id,void C.deleteQuote(a).then(function(e){return E()}).catch(function(e){return console.log(e)});var a}},l.a.createElement("i",{className:"fas fa-trash delete"}))))})):l.a.createElement("caption",null,l.a.createElement("h3",null,"No Results to Display")))))))}var Je=function(){return l.a.createElement(m.a,{fluid:!0},l.a.createElement(u.a,null,l.a.createElement(d.a,{size:"md-12"},l.a.createElement(Pe.a,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},Ye=t(311),Xe=t(301),Ze=t(300),$e=t(303),ea=t(298),aa=t(302),ta=t(304),na=t(142),la=t.n(na),ra=t(59),ca=t(299);function ma(){return l.a.createElement(ra.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",l.a.createElement(ea.a,{color:"inherit",href:"/"},"Campbell Wood Designs")," ",(new Date).getFullYear(),".")}var ia=Object(Ke.a)(function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}});function sa(){var e=Object(n.useState)({}),a=Object(h.a)(e,2),t=a[0],r=a[1];function c(e){var a=e.target,n=a.name,l=a.value;r(Object(j.a)({},t,Object(D.a)({},n,l)))}var m=ia();return l.a.createElement(ca.a,{component:"main",maxWidth:"xs"},l.a.createElement(Ze.a,null),l.a.createElement("div",{className:m.paper},l.a.createElement(Ye.a,{className:m.avatar},l.a.createElement(la.a,null)),l.a.createElement(ra.a,{component:"h1",variant:"h5"},"Sign in"),l.a.createElement("form",{className:m.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),C.postUser({username:t.username,password:t.password}).then(function(e){console.log(e),200===e.status&&("admin"===e.data.role?window.location.replace("/admin"):(console.log("denied!"),window.location.replace("/login")))}).catch(function(e){return console.log(e)})}},l.a.createElement($e.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:c}),l.a.createElement($e.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:c}),l.a.createElement(Xe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:m.submit},"Sign In"),l.a.createElement(aa.a,{container:!0},l.a.createElement(aa.a,{item:!0,xs:!0}),l.a.createElement(aa.a,{item:!0})))),l.a.createElement(ta.a,{mt:8},l.a.createElement(ma,null)))}t(241);function oa(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement(u.a,null,l.a.createElement(d.a,{xs:4},l.a.createElement("p",{className:"logo-name"},"Quick Links"),l.a.createElement("div",{className:"footer-links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{to:"/",href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{to:"/quote",href:"/quote"},"Quotes")),l.a.createElement("li",null,l.a.createElement("a",{to:"/gallery",href:"/gallery"},"Galery")),l.a.createElement("li",null,l.a.createElement("a",{to:"/#about",href:"/#about"},"About Us"))))),l.a.createElement(d.a,{xs:4},l.a.createElement("p",{className:"logo-name"},"Capmbell Wood Designs"),l.a.createElement("div",{className:"about-text"},"Family owned business ,located in our hometown of Excelsior Springs, Missouri. We are here to help you and delivery the best service.")),l.a.createElement(d.a,{xs:4},l.a.createElement("p",{className:"social-text text-center"},"Follow Us!"),l.a.createElement("div",{className:"social-buttons"},l.a.createElement("a",{href:"#",className:"social-buttons__button social-button social-button--facebook","aria-label":"Facebook"},l.a.createElement("span",{className:"social-button__inner"},l.a.createElement("i",{className:"fab fa-facebook-f"}))),l.a.createElement("a",{href:"#",className:"social-buttons__button social-button social-button--instagram","aria-label":"Instagram"},l.a.createElement("span",{className:"social-button__inner"},l.a.createElement("i",{className:"fab fa-instagram"})))),l.a.createElement("div",{className:"text-center mt-4 login"},l.a.createElement(M.b,{className:"btn",to:"/login"},"Login")))),l.a.createElement("hr",null))}function ua(){return l.a.createElement(m.a,{fluid:!0,className:"p-0"},l.a.createElement(E,null),l.a.createElement(Se,null),l.a.createElement(Me,null),l.a.createElement(oa,null))}var da=function(){return l.a.createElement(H,null,l.a.createElement(M.a,null,l.a.createElement(P,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:ua}),l.a.createElement(p.a,{exact:!0,path:"/#about",component:ua}),l.a.createElement(p.a,{exact:!0,path:"/#contact-img",component:ua}),l.a.createElement(p.a,{exact:!0,path:"/quote",component:L}),l.a.createElement(p.a,{exact:!0,path:"/thankyou",component:Ie}),l.a.createElement(p.a,{exact:!0,path:"/gallery",component:Oe}),l.a.createElement(p.a,{exact:!0,path:"/login"},l.a.createElement(sa,null)),l.a.createElement(p.a,{exact:!0,path:"/admin"},l.a.createElement(Ve,null)),l.a.createElement(p.a,{exact:!0,path:"/admin/:id"},l.a.createElement(Ue,null)),l.a.createElement(p.a,null,l.a.createElement(Je,null)))))};c.a.render(l.a.createElement(da,null),document.getElementById("root"))},52:function(e,a,t){e.exports=t.p+"static/media/Gallery7.e62f4160.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/Gallery21.0085a132.jpg"},87:function(e,a,t){e.exports=t.p+"static/media/Gallery1.a5b6adc6.jpg"},88:function(e,a,t){e.exports=t.p+"static/media/Gallery2.cb3e8be4.jpg"},89:function(e,a,t){e.exports=t.p+"static/media/Gallery3.6fd91734.jpg"},90:function(e,a,t){e.exports=t.p+"static/media/Gallery4.1dfbdbce.jpg"},91:function(e,a,t){e.exports=t.p+"static/media/Gallery5.f6185dc7.jpg"},92:function(e,a,t){e.exports=t.p+"static/media/Gallery6.868a762c.jpg"},93:function(e,a,t){e.exports=t.p+"static/media/Gallery8.c0d17317.jpg"},94:function(e,a,t){e.exports=t.p+"static/media/Gallery10.18fa0af9.jpg"},95:function(e,a,t){e.exports=t.p+"static/media/Gallery11.0fa7edb6.jpg"},96:function(e,a,t){e.exports=t.p+"static/media/Gallery12.7ffbb8f6.jpg"},97:function(e,a,t){e.exports=t.p+"static/media/Gallery13.a5ae94e7.jpg"},98:function(e,a,t){e.exports=t.p+"static/media/Gallery14.299c88b1.jpg"},99:function(e,a,t){e.exports=t.p+"static/media/Gallery15.8ea78604.jpg"}},[[154,1,2]]]);
//# sourceMappingURL=main.b4b7da12.chunk.js.map