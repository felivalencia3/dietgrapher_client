(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var c=a(115),u=a(113),m=a(116),d=(a(28),a(6)),h=a(7),p=a(9),f=a(8),b=a(10),E=a(2),v=(a(29),a(21),a(76),a(86),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={screen:0},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){this.state.screen;return r.a.createElement("div",{id:"formbody"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("form",{id:"msform"},r.a.createElement("ul",{id:"progressbar"},r.a.createElement("li",{className:"active"},"Personal Details"),r.a.createElement("li",null,"Social Profiles"),r.a.createElement("li",null,"Account Setup")),r.a.createElement("fieldset",null,r.a.createElement("h2",{className:"fs-title"},"Personal Details"),r.a.createElement("h3",{className:"fs-subtitle"},"Tell us something more about you"),r.a.createElement("input",{type:"text",name:"fname",placeholder:"First Name"}),r.a.createElement("input",{type:"text",name:"lname",placeholder:"Last Name"}),r.a.createElement("input",{type:"text",name:"phone",placeholder:"Phone"}),r.a.createElement("input",{type:"button",name:"next",className:"next action-button",value:"Next"})),r.a.createElement("fieldset",null,r.a.createElement("h2",{className:"fs-title"},"Social Profiles"),r.a.createElement("h3",{className:"fs-subtitle"},"Your presence on the social network"),r.a.createElement("input",{type:"text",name:"twitter",placeholder:"Twitter"}),r.a.createElement("input",{type:"text",name:"facebook",placeholder:"Facebook"}),r.a.createElement("input",{type:"text",name:"gplus",placeholder:"Google Plus"}),r.a.createElement("input",{type:"button",name:"previous",className:"previous action-button-previous",value:"Previous"}),r.a.createElement("input",{type:"button",name:"next",className:"next action-button",value:"Next"})),r.a.createElement("fieldset",null,r.a.createElement("h2",{className:"fs-title"},"Create your account"),r.a.createElement("h3",{className:"fs-subtitle"},"Fill in your credentials"),r.a.createElement("input",{type:"text",name:"email",placeholder:"Email"}),r.a.createElement("input",{type:"password",name:"pass",placeholder:"Password"}),r.a.createElement("input",{type:"password",name:"cpass",placeholder:"Confirm Password"}),r.a.createElement("input",{type:"button",name:"previous",className:"previous action-button-previous",value:"Previous"}),r.a.createElement("input",{type:"submit",name:"submit",className:"submit action-button",value:"Submit"}))))))}}]),t}(n.Component)),w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={weight:0,age:0,gender:"",height:0},a.handleSubmit=a.handleSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(e){console.log(this);var t=this.state,a=t.weight,n=t.age,r=t.gender,o=t.height;a||n||r||o?e.preventDefault():alert("Invalid Input")}},{key:"render",value:function(){var e=this.state;e.weight,e.age,e.gender,e.height;return r.a.createElement(v,null)}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={foo:!0},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return this.state.foo?r.a.createElement("h2",null,"Home"):r.a.createElement("h1",null,"Home")}}]),t}(n.Component),y=a(16),j=a.n(y),O=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={token:a.props.location.state.token,auth:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.token;j.a.get("http://127.0.0.1:8081/api/users/redirect",{headers:{Authorization:"Token ".concat(t)}}).then(function(t){t.data&&e.setState({auth:!0})}).then(function(e){console.log(e)})}},{key:"render",value:function(){return this.state.auth?r.a.createElement("div",null,r.a.createElement("h2",null,"You are Authorized!")):r.a.createElement("h2",null,"Authorization Failed...")}}]),t}(n.Component),k=(a(109),a(114)),N=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={email:"",password:"",redirect:!1,token:""},a.handleEmail=a.handleEmail.bind(Object(E.a)(Object(E.a)(a))),a.handlePassword=a.handlePassword.bind(Object(E.a)(Object(E.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="../src/Client/scripts/signup.js",e.async=!0,document.body.appendChild(e)}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,a=this.state,n=a.email,r=a.password;j.a.post("http://127.0.0.1:8081/api/users/",{user:{email:n,password:r}}).then(function(e){console.log(e.data),alert("Your account has been created.");var a=e.data.user.token;t.setState({redirect:!0,token:a})}).catch(function(e){alert(e)}),e.preventDefault()}},{key:"render",value:function(){var e,t=this.state,a=t.email,n=t.password,o=t.redirect;t.token;return o&&(e=r.a.createElement(k.a,{to:{pathname:"/start"}})),r.a.createElement("div",{id:"upbody"},e,r.a.createElement("form",{id:"upform",action:"#",method:"post",onSubmit:this.handleSubmit},r.a.createElement("h2",{id:"formh2"},"Sign Up"),r.a.createElement("p",{className:"formp"},r.a.createElement("label",{htmlFor:"Email",className:"floatLabel"},"Email"),r.a.createElement("input",{onChange:this.handleEmail,value:a,className:"forminput",id:"Email",name:"Email",type:"text"})),r.a.createElement("p",{className:"formp"},r.a.createElement("label",{htmlFor:"password",className:"floatLabel"},"Password"),r.a.createElement("input",{onChange:this.handlePassword,value:n,className:"forminput",id:"password",name:"password",type:"password"}),r.a.createElement("span",null,"Enter a password longer than 6 characters")),r.a.createElement("p",{className:"formp"},r.a.createElement("label",{htmlFor:"confirm_password",className:"floatLabel"},"Confirm Password"),r.a.createElement("input",{className:"forminput",id:"confirm_password",name:"confirm_password",type:"password"}),r.a.createElement("span",null,"Your passwords do not match")),r.a.createElement("p",{className:"formp"},r.a.createElement("input",{className:"forminput",type:"submit",value:"Create My Account",id:"submit"}))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={email:"",password:"",redirect:!1,token:""},a.handleEmail=a.handleEmail.bind(Object(E.a)(Object(E.a)(a))),a.handlePassword=a.handlePassword.bind(Object(E.a)(Object(E.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;this.state.redirect&&this.setState({redirect:!1});var a=this.state,n=a.email,r=a.password;j.a.post("http://127.0.0.1:8081/api/users/login",{user:{email:n,password:r}}).then(function(e){t.setState({redirect:!0,token:e.data.user.token})}).then(function(e){alert(e)}),e.preventDefault()}},{key:"render",value:function(){var e,t=this.state,a=t.redirect,n=t.email,o=t.password,l=t.token;return a&&(e=r.a.createElement(k.a,{to:{pathname:"/dash",state:{token:l}}})),r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:this.handleSubmit,method:"POST"},e,r.a.createElement("input",{value:n,onChange:this.handleEmail,type:"text",placeholder:"Email",name:"email"}),r.a.createElement("input",{value:o,onChange:this.handlePassword,type:"password",placeholder:"Password",name:"password"}),r.a.createElement("button",{type:"submit"},"Login")))}}]),t}(n.Component),P=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"topnav"},r.a.createElement("a",null,r.a.createElement(u.a,{to:"/"},"Home")),r.a.createElement("a",null,r.a.createElement(u.a,{to:"/up"},"Sign-up")),r.a.createElement(S,null)),r.a.createElement(m.a,{exact:!0,path:"/",component:g}),r.a.createElement(m.a,{path:"/dash",component:O}),r.a.createElement(m.a,{path:"/up",component:N}),r.a.createElement(m.a,{path:"/start",component:w})))};l.a.render(r.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");i?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}}()},28:function(e,t,a){},29:function(e,t,a){},46:function(e,t,a){e.exports=a(112)}},[[46,2,1]]]);
//# sourceMappingURL=main.9a66f3f1.chunk.js.map