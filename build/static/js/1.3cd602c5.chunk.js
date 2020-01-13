webpackJsonp([1],{192:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=n.n(l),c=n(13),s=n(7),d=n(193),A=n(57),p=n(58),b=n(205),h=n.n(b),g=n(10),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(){var e,n,r,l;o(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"E-Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignUp:!0},r.inputChangedHandler=function(e,t){var n=Object.assign({},r.state.controls,a({},t,Object.assign({},r.state.controls[t],{value:e.target.value,valid:r.checkValidity(e.target.value,r.state.controls[t].validation),touched:!0})));r.setState({controls:n})},r.switchAuthModeHandler=function(){r.setState(function(e){return{isSignUp:!e.isSignUp}})},r.submitHandler=function(e){e.preventDefault(),r.props.onAuth(r.state.controls.email.value,r.state.controls.password.value,r.state.isSignUp)},l=n,i(r,l)}return r(t,e),m(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map(function(t){return u.a.createElement(d.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})});this.props.loading&&(a=u.a.createElement(p.a,null));var o=null;this.props.error&&(o=u.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=u.a.createElement(g.c,{to:this.props.authRedirectPath})),u.a.createElement("div",{className:h.a.Auth},i,o,u.a.createElement("form",{onSubmit:this.submitHandler},a,u.a.createElement(A.a,{btnType:"Success"},"SUBMIT")),u.a.createElement(A.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignUp?"SIGN IN":"SIGN UP"))}}]),t}(l.Component),C=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},v=function(e){return{onAuth:function(t,n,a){return e(c.b(t,n,a))},onSetAuthRedirectPath:function(){return e(c.j("/"))}}};t.default=Object(s.b)(C,v)(f)},193:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(194),r=n.n(i),l=function(e){var t=null,n=[r.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(r.a.Invalid),e.elementType){case"input":t=o.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=o.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=o.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=o.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return o.a.createElement("div",{className:r.a.Input},o.a.createElement("label",{className:r.a.Label},e.label),t)};t.a=l},194:function(e,t,n){var a=n(195);"string"===typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(189)(a,o);a.locals&&(e.exports=a.locals)},195:function(e,t,n){t=e.exports=n(188)(!0),t.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["C:/Users/iurym/react-projects/websites/redux-adv-burger--02-finished/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.InputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}\n\n.Invalid {\n    border: 1px solid red;\n    background-color: #FDA49A;\n}"],sourceRoot:""}]),t.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},205:function(e,t,n){var a=n(206);"string"===typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(189)(a,o);a.locals&&(e.exports=a.locals)},206:function(e,t,n){t=e.exports=n(188)(!0),t.push([e.i,".Auth-module__Auth__3o8Dm{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth-module__ContactData__3lgEI{width:500px}}","",{version:3,sources:["C:/Users/iurym/react-projects/websites/redux-adv-burger--02-finished/src/containers/Auth/Auth.module.css"],names:[],mappings:"AAAA,0BACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,iCACI,WAAa,CAChB,CACJ",file:"Auth.module.css",sourcesContent:[".Auth {\r\n    margin: 20px auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    border: 1px solid #eee;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n    .ContactData {\r\n        width: 500px;\r\n    }\r\n}"],sourceRoot:""}]),t.locals={Auth:"Auth-module__Auth__3o8Dm",ContactData:"Auth-module__ContactData__3lgEI"}}});
//# sourceMappingURL=1.3cd602c5.chunk.js.map