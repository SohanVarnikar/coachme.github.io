(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85a8577a"],{"212c":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),i={class:"form-control"},o=Object(r["i"])("label",{for:"email"},"E-mail",-1),a={class:"form-control"},c=Object(r["i"])("label",{for:"password"},"Password",-1),s={key:0};function u(e,t,n,u,l,d){var b=Object(r["A"])("base-dialog"),m=Object(r["A"])("base-spinner"),f=Object(r["A"])("base-button"),p=Object(r["A"])("base-card");return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["i"])(b,{show:!!l.error,title:"An error occurred!",onClose:d.handleError},{default:Object(r["I"])((function(){return[Object(r["i"])("p",null,Object(r["D"])(l.error),1)]})),_:1},8,["show","onClose"]),Object(r["i"])(b,{show:l.isLoading,title:"Authenticating...",fixed:""},{default:Object(r["I"])((function(){return[Object(r["i"])(m)]})),_:1},8,["show"]),Object(r["i"])(p,null,{default:Object(r["I"])((function(){return[Object(r["i"])("form",{onSubmit:t[3]||(t[3]=Object(r["K"])((function(){return d.submitForm.apply(d,arguments)}),["prevent"]))},[Object(r["i"])("div",i,[o,Object(r["J"])(Object(r["i"])("input",{type:"text",name:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.email=e})},null,512),[[r["G"],l.email,void 0,{trim:!0}]])]),Object(r["i"])("div",a,[c,Object(r["J"])(Object(r["i"])("input",{type:"password",name:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.password=e})},null,512),[[r["G"],l.password,void 0,{trim:!0}]])]),l.formIsValid?Object(r["g"])("",!0):(Object(r["s"])(),Object(r["f"])("p",s," Please enter valid email address and password(must be atleast 6 characters long). ")),Object(r["i"])(f,null,{default:Object(r["I"])((function(){return[Object(r["h"])(Object(r["D"])(d.submitButtonCaption),1)]})),_:1}),Object(r["i"])(f,{type:"button",mode:"flat",onClick:d.switchAuthMode},{default:Object(r["I"])((function(){return[Object(r["h"])(Object(r["D"])(d.switchModeCaption),1)]})),_:1},8,["onClick"])],32)]})),_:1})])}n("caad"),n("ac1f"),n("2532"),n("5319"),n("96cf");var l=n("1da1"),d={data:function(){return{email:"",password:"",formIsValid:!0,mode:"login",isLoading:!1,error:null}},computed:{submitButtonCaption:function(){return"login"===this.mode?"Login":"Signup"},switchModeCaption:function(){return"login"===this.mode?"Signup instead":"login instead"}},methods:{submitForm:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.formIsValid=!0,""!==e.email&&e.email.includes("@")&&!(e.password.length<6)){t.next=4;break}return e.formIsValid=!1,t.abrupt("return");case 4:return e.isLoading=!0,n="/"+(e.$route.query.redirect||"coaches"),t.prev=6,t.next=9,e.$store.dispatch("authenticate",{email:e.email,password:e.password,mode:e.mode});case 9:e.$router.replace(n),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](6),e.error=t.t0.message||"Failed to Autnenticate",e.isLoading=!1;case 16:e.isLoading=!1;case 17:case"end":return t.stop()}}),t,null,[[6,12]])})))()},switchAuthMode:function(){"login"===this.mode?this.mode="signup":this.mode="login"},handleError:function(){this.error=null}}};n("eb50");d.render=u;t["default"]=d},d11f:function(e,t,n){},eb50:function(e,t,n){"use strict";n("d11f")}}]);
//# sourceMappingURL=chunk-85a8577a.2eba69de.js.map