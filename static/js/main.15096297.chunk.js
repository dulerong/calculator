(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_components_Buttons_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),numRegex=/[0-9]/,signRegex=/[*+/-]/,Calculator=function(_React$Component){Object(C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_React$Component);var _super=Object(C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(e){var _;return Object(C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(_=_super.call(this,e)).state={message:[],results:[]},_.handleClick=_.handleClick.bind(Object(C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleClear=_.handleClear.bind(Object(C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleEval=_.handleEval.bind(Object(C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleNumber=_.handleNumber.bind(Object(C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(C_Users_Codey_Desktop_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"handleClear",value:function(){this.setState({message:[],results:[]})}},{key:"handleClick",value:function(e){"backSpace"===e.target.value?this.setState({message:this.state.message.slice(0,-1)}):this.state.message.includes(".")&&"."===e.target.value||(this.state.message.includes("=")?this.state.message.includes("=")&&!numRegex.test(e.target.value)?this.setState({message:this.state.results.slice(-1).concat(e.target.value),results:[]}):this.setState({message:[].concat(e.target.value),results:[]}):this.setState({message:this.state.message.concat(e.target.value)}))}},{key:"handleNumber",value:function(e){var _=Number(e.target.value);this.setState({message:this.state.message.concat(_)})}},{key:"handleEval",value:function handleEval(){if(this.state.message.includes("="))alert("Do not press = without entering number or +-*/");else if(numRegex.test(this.state.message.slice(-1))){var sum=eval(this.state.message.join(""));this.setState({message:this.state.message.concat("=").concat(sum),results:this.state.results.concat(sum)}),console.log(this.state.message)}else alert("incorrect input, will not evaluate!")}},{key:"render",value:function(){return console.log(this.state.message,this.state.results),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,this.state.message),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,this.state.results[this.state.results.length-1]),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Buttons_js__WEBPACK_IMPORTED_MODULE_7__.a,{handleNumber:this.handleNumber,handleClick:this.handleClick,handleClear:this.handleClear,handleEval:this.handleEval}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"bottomCaption"},"Coded by Codey Du! 2019 November 21st"))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},function(e,_,t){"use strict";var a=t(2),s=t(3),l=t(5),r=t(4),n=t(0),o=t.n(n),u=function(e){Object(l.a)(t,e);var _=Object(r.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"buttonSection"},o.a.createElement("button",{className:"wideButton",onClick:this.props.handleClear},"AC"),o.a.createElement("button",{value:"/",onClick:this.props.handleClick},"/"),o.a.createElement("button",{value:"*",onClick:this.props.handleClick},"x"),o.a.createElement("button",{value:"7",onClick:this.props.handleNumber},"7"),o.a.createElement("button",{value:"8",onClick:this.props.handleNumber},"8"),o.a.createElement("button",{value:"9",onClick:this.props.handleNumber},"9"),o.a.createElement("button",{value:"-",onClick:this.props.handleClick},"-"),o.a.createElement("button",{value:"4",onClick:this.props.handleNumber},"4"),o.a.createElement("button",{value:"5",onClick:this.props.handleNumber},"5"),o.a.createElement("button",{value:"6",onClick:this.props.handleNumber},"6"),o.a.createElement("button",{value:"+",onClick:this.props.handleClick},"+"),o.a.createElement("button",{value:"1",onClick:this.props.handleNumber},"1"),o.a.createElement("button",{value:"2",onClick:this.props.handleNumber},"2"),o.a.createElement("button",{value:"3",onClick:this.props.handleNumber},"3"),o.a.createElement("button",{value:"backSpace",onClick:this.props.handleClick},"\u2190Back"),o.a.createElement("button",{className:"wideButton",value:"0",onClick:this.props.handleClick},"0"),o.a.createElement("button",{value:".",onClick:this.props.handleClick},"."),o.a.createElement("button",{value:"=",onClick:this.props.handleEval},"="))}}]),t}(o.a.Component);_.a=u},function(e,_,t){e.exports=t(11)},function(e,_,t){"use strict";t.r(_);var a=t(0),s=t.n(a),l=t(7),r=t.n(l),n=t(8);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(n.a,null)),document.getElementById("root"))},,,,,function(e,_,t){}],[[10,1,2]]]);
//# sourceMappingURL=main.15096297.chunk.js.map