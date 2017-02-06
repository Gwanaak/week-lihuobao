/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(24)
	__webpack_require__(32)
	__webpack_require__(40)
	var __weex_template__ = __webpack_require__(44)
	var __weex_style__ = __webpack_require__(45)
	var __weex_script__ = __webpack_require__(46)

	__weex_define__('@weex-component/5553e57be0a1165e7a93d8052e316416', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/5553e57be0a1165e7a93d8052e316416',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/lhb-bhslider', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "slider",
	  "classList": [
	    "slider"
	  ],
	  "attr": {
	    "autoPlay": function () {return this.autoplay}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "slider-pages"
	      ],
	      "repeat": {
	        "expression": function () {return this.items},
	        "value": "row"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "image"
	          ],
	          "attr": {
	            "src": function () {return this.getbannerimage(this.row.image)}
	          },
	          "events": {
	            "click": function ($event) {this.clickbanner(this.row,$event)}
	          }
	        }
	      ]
	    },
	    {
	      "type": "indicator",
	      "classList": [
	        "indicator"
	      ],
	      "style": {
	        "marginTop": function () {return this.indicatormargintop}
	      }
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "slider": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 290
	  },
	  "slider-pages": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 290
	  },
	  "image": {
	    "width": 750,
	    "height": 290
	  },
	  "indicator": {
	    "width": 750,
	    "height": 80,
	    "position": "absolute",
	    "top": 1,
	    "left": 1,
	    "itemColor": "white",
	    "itemSelectedColor": "rgb(248,207,52)",
	    "itemSize": 20
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _data;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/bhclickevent');
	var stream = __weex_require__('@weex-module/stream');

	module.exports = {
	  data: (_data = {
	    environment: 'mingstatic',
	    autoplay: '',
	    indicatormargintop: "230"
	  }, (0, _defineProperty3.default)(_data, 'autoplay', ''), (0, _defineProperty3.default)(_data, 'items', []), _data),
	  methods: {

	    getbannerimage: function getbannerimage(image) {
	      return "http://oss.aliyuncs.com/" + this.environment + "/" + image;
	    },

	    clickbanner: function clickbanner(e) {

	      clickModule.didClickBannerEvent(e);
	    }
	  },

	  ready: function ready() {
	    var self = this;
	    eventModule.getHomeDatas(function (ret) {

	      var positionStr = "home_admin";
	      self.environment = ret.environment;
	      var GET_URL_MobileBanner = ret.banner_url;
	      var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=2&version=' + ret.version + '&position=' + positionStr + '&container_id=' + ret.container_id;

	      stream.fetch({
	        method: 'POST',
	        url: GET_URL_MobileBanner,
	        body: BODY_URL,
	        type: 'json'
	      }, function (ret) {
	        if (!ret.ok) {} else {
	          var dic = ret.data;
	          self.items = dic.list;
	        }
	      }, function (response) {});
	    });
	  }

	};}
	/* generated by weex-loader */


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(6);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	var $Object = __webpack_require__(11).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(19), 'Object', {defineProperty: __webpack_require__(15).f});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(11)
	  , ctx       = __webpack_require__(12)
	  , hide      = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(13);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(15)
	  , createDesc = __webpack_require__(23);
	module.exports = __webpack_require__(19) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(16)
	  , IE8_DOM_DEFINE = __webpack_require__(18)
	  , toPrimitive    = __webpack_require__(22)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(19) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(19) && !__webpack_require__(20)(function(){
	  return Object.defineProperty(__webpack_require__(21)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(20)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17)
	  , document = __webpack_require__(10).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(17);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25)
	var __weex_template__ = __webpack_require__(29)
	var __weex_style__ = __webpack_require__(30)
	var __weex_script__ = __webpack_require__(31)

	__weex_define__('@weex-component/lhb-bhkindbuttons', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(26)
	var __weex_style__ = __webpack_require__(27)
	var __weex_script__ = __webpack_require__(28)

	__weex_define__('@weex-component/lhb-hbbutton', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  "events": {
	    "click": function ($event) {this.clickkindbtn(this.btnnumber,$event)}
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "iconimage"
	      ],
	      "attr": {
	        "src": function () {return this.iconurl}
	      },
	      "style": {
	        "width": function () {return this.btnwidth},
	        "height": function () {return this.btnheight},
	        "borderRadius": function () {return this.btnradius}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "icontitle"
	      ],
	      "style": {
	        "color": function () {return this.titlecolor}
	      },
	      "attr": {
	        "value": function () {return this.icontitle}
	      }
	    }
	  ]
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {
	  "icontitle": {
	    "marginTop": 10,
	    "fontSize": 24
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var clickbtnModule = __weex_require__('@weex-module/bhclickevent');

	module.exports = {
	   data: function () {return {
	      btnnumber: 0,
	      iconurl: '',
	      icontitle: '',
	      btnwidth: 80,
	      btnradius: 0,
	      btnheight: 80,
	      titlecolor: 'grey'
	   }},
	   methods: {

	      clickkindbtn: function clickkindbtn(e) {

	         clickbtnModule.bhClickKindBtnEvent(e);
	      }
	   }
	};}
	/* generated by weex-loader */


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "kind"
	      ],
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "lhb-hbbutton",
	          "classList": [
	            "smallkind"
	          ],
	          "attr": {
	            "iconurl": function () {return this.btn.iconurl},
	            "icontitle": function () {return this.btn.icontitle},
	            "btnnumber": function () {return this.btn.number},
	            "btnwidth": function () {return this.btn.width}
	          },
	          "repeat": {
	            "expression": function () {return this.buttons},
	            "value": "btn"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "line"
	      ],
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "text"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
	  "kind": {
	    "flexDirection": "row",
	    "width": 750
	  },
	  "smallkind": {
	    "flex": 1,
	    "marginTop": 16
	  },
	  "line": {
	    "marginTop": 15,
	    "width": 750,
	    "height": 10,
	    "backgroundColor": "rgb(237,237,237)"
	  }
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(25);

	module.exports = {
	  data: function () {return {
	    buttons: [{ iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/buiness_lihuo_log@2x.png', icontitle: '拍一拍', number: 0, width: 80 }, { iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/buiness_sharpiao_log@2x.png', icontitle: '做调研', number: 1, width: 100 }, { iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/buiness_saoma_log@2x.png', icontitle: '扫码', number: 2, width: 80 }]
	  }}

	};}
	/* generated by weex-loader */


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(33)
	var __weex_style__ = __webpack_require__(34)
	var __weex_script__ = __webpack_require__(35)

	__weex_define__('@weex-component/lhb-bhprofile', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "jwy-groupbutton",
	      "attr": {
	        "groupiconurl": "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/buiness_gaikuang_logo.png",
	        "grouptitle": "概况"
	      },
	      "style": {
	        "borderBottomWidth": 1,
	        "borderBottomColor": "#D3D3D3"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "column",
	        "borderBottomWidth": 10,
	        "borderBottomColor": "rgb(237,237,237)",
	        "paddingBottom": 10
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "label"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#808080",
	                    "fontSize": 28
	                  },
	                  "attr": {
	                    "value": "费用合计"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "numberlabel"
	                  ],
	                  "attr": {
	                    "value": function () {return this.getcost(this.dict.cost)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "label"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#808080",
	                    "fontSize": 28
	                  },
	                  "attr": {
	                    "value": "参与人数"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "numberlabel"
	                  ],
	                  "attr": {
	                    "value": function () {return this.dict.participants}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "marginTop": 10
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "label"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#808080",
	                    "fontSize": 28
	                  },
	                  "attr": {
	                    "value": "完成人数"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "numberlabel"
	                  ],
	                  "attr": {
	                    "value": function () {return this.dict.pass}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "label"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#808080",
	                    "fontSize": 28
	                  },
	                  "attr": {
	                    "value": "完成比例"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "numberlabel"
	                  ],
	                  "attr": {
	                    "value": function () {return this.getpassrate(this.dict.pass,this.dict.unpass)}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
	  "label": {
	    "flexDirection": "column",
	    "flex": 1,
	    "alignItems": "center",
	    "paddingTop": 17
	  },
	  "numberlabel": {
	    "marginTop": 10,
	    "color": "#FFA500",
	    "fontSize": 28
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(36);
	var eventModule = __weex_require__('@weex-module/requestevent');
	var stream = __weex_require__('@weex-module/stream');

	module.exports = {
	  data: function () {return {
	    dict: {}
	  }},

	  ready: function ready() {
	    var self = this;
	    eventModule.getHomeDatas(function (ret) {

	      var GET_URL_homeSummary = 'http://1525sg4410.51mypc.cn/api.php?i=App&m=getOrgHomeSummary';

	      var BODY_URL = 'user_id=' + ret.uid + '&' + 'sid=' + ret.sid + '&' + '_t=' + ret._t + '&platform_id=2&version=' + ret.version + '&container_id=' + ret.container_id;

	      stream.fetch({
	        method: 'POST',
	        url: GET_URL_homeSummary,
	        body: BODY_URL,
	        type: 'json'
	      }, function (ret) {
	        if (!ret.ok) {} else {

	          var dict = ret.data;
	          self.dict = dict;
	        }
	      }, function (response) {});
	    });
	  },
	  methods: {

	    getpassrate: function getpassrate(pass, unpass) {

	      var passrate = '0%';
	      if (pass == 0) {} else {
	        var num = pass / (pass + unpass) * 100.0;
	        passrate = num.toFixed(2) + '%';
	      }

	      return passrate;
	    },
	    getcost: function getcost(cost) {

	      return cost / 100.0;
	    }

	  }

	};}
	/* generated by weex-loader */


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(37)
	var __weex_style__ = __webpack_require__(38)
	var __weex_script__ = __webpack_require__(39)

	__weex_define__('@weex-component/jwy-groupbutton', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "group"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "marginLeft": 20,
	        "width": 30,
	        "height": 30
	      },
	      "attr": {
	        "src": function () {return this.groupiconurl}
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 30,
	        "color": function () {return this.fontcolor},
	        "marginLeft": 10
	      },
	      "attr": {
	        "value": function () {return this.grouptitle}
	      }
	    }
	  ]
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {
	  "group": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginTop": 15,
	    "paddingBottom": 15
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	   data: function () {return {
	      groupiconurl: '',
	      grouptitle: '',
	      fontcolor: 'grey'
	   }}
	};}
	/* generated by weex-loader */


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(41)
	var __weex_style__ = __webpack_require__(42)
	var __weex_script__ = __webpack_require__(43)

	__weex_define__('@weex-component/lhb-bhcell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "titlecell"
	      ],
	      "events": {
	        "click": "isshowdetailcell"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.getimage(this.row.task_id)}
	          },
	          "style": {
	            "width": 120,
	            "height": 120,
	            "marginLeft": 20,
	            "borderRadius": 10
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "column",
	            "marginLeft": 20
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "marginBottom": 15,
	                "alignItems": "center",
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#808080",
	                    "fontSize": 28
	                  },
	                  "attr": {
	                    "value": function () {return this.row.name}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginLeft": 16,
	                    "color": "#FF0000",
	                    "fontSize": 28
	                  },
	                  "attr": {
	                    "value": function () {return this.getstatus(this.row.taskstatus_id)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "marginTop": 15,
	                "alignItems": "center",
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#A9A9A9",
	                    "fontSize": 26
	                  },
	                  "attr": {
	                    "value": function () {return '剩余任务量:' + (this.row.remain)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginLeft": 16,
	                    "color": "#A9A9A9",
	                    "fontSize": 26
	                  },
	                  "attr": {
	                    "value": function () {return '待审核:' + (this.row.examining)}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.jiantoustyle}
	          },
	          "style": {
	            "width": 28,
	            "height": 15,
	            "position": "absolute",
	            "right": 20,
	            "bottom": 15
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "detailcell"
	      ],
	      "shown": function () {return this.isshow},
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "marginLeft": 20,
	            "marginTop": 10
	          },
	          "shown": function () {return true},
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "padding": 12
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "发布时间："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.getcreatetime(this.row.createtime)}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "任务类型："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.gettype(this.row.categorylevel2_id)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "padding": 12
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "费用合计："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return '¥ ' + (this.getcost(this.row.cost))}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.getrewardtitle(this.row.categorylevel1_id)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.getMoney(this.row.tiptype_id,this.row.tip)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "padding": 12
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.gettasknumbertitle(this.row.categorylevel1_id)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.row.quantity}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "参与人数："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.row.participants}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "padding": 12
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.getdonenumbertitle(this.row.categorylevel1_id)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.getdonenumber(this.row.categorylevel1_id,this.row.pass,this.row.quantity_clerk)}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "成功率："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.getpassrate(this.row.pass,this.row.unpass)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "padding": 10,
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row"
	                  },
	                  "events": {
	                    "click": function ($event) {this.isselected(this.row.task_id,this.row.categorylevel1_id,$event)}
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.selecticon_url}
	                      },
	                      "style": {
	                        "width": 28,
	                        "height": 28
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "#808080",
	                        "fontSize": 26
	                      },
	                      "attr": {
	                        "value": "公开围观"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginLeft": 20,
	                    "color": "#0000FF",
	                    "borderColor": "#0000FF",
	                    "borderBottomWidth": 2,
	                    "fontSize": 26
	                  },
	                  "events": {
	                    "click": function ($event) {this.goweiguandetails(this.row,$event)}
	                  },
	                  "attr": {
	                    "value": "查看围观详情"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginLeft": 20,
	            "marginTop": 10
	          },
	          "shown": function () {return false},
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "padding": 12
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "发布时间："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.getcreatetime(this.row.createtime)}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "任务类型："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.gettype(this.row.categorylevel2_id)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "padding": 12
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "奖励发放："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return '¥ ' + (this.getcost(this.row.cost))}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "参与人数："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.row.participants}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "padding": 12
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "奖励人数："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "87"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "textbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": "正确率："
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "textstr"
	                      ],
	                      "attr": {
	                        "value": function () {return this.getpassrate(this.row.pass,this.row.unpass)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "column"
	      },
	      "shown": function () {return true},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "buttoncell"
	          ],
	          "shown": function () {return true},
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "buttonbox"
	              ],
	              "events": {
	                "click": function ($event) {this.clickaddbutton(this.row,$event)}
	              },
	              "style": {
	                "backgroundColor": function () {return this.getbackcolor(this.row.append)},
	                "marginLeft": 65
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.getimagestatus(this.row.append)}
	                  },
	                  "style": {
	                    "width": 30,
	                    "height": 30
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontext"
	                  ],
	                  "style": {
	                    "color": "#FFFFFF"
	                  },
	                  "attr": {
	                    "value": "追加"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "buttonbox"
	              ],
	              "events": {
	                "click": function ($event) {this.clickauditbutton(this.row,$event)}
	              },
	              "style": {
	                "backgroundColor": function () {return this.getbackcolor1(this.row.taskstatus_id)},
	                "marginLeft": 200
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.getimageshenhestatus(this.row.taskstatus_id)}
	                  },
	                  "style": {
	                    "width": 30,
	                    "height": 30
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontext"
	                  ],
	                  "style": {
	                    "color": "#FFFFFF"
	                  },
	                  "attr": {
	                    "value": "审核"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "buttoncell"
	          ],
	          "shown": function () {return false},
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "buttonbox"
	              ],
	              "events": {
	                "click": function ($event) {this.clickstatisticsbutton(this.row,$event)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/buiness_statisticsbtn.png"
	                  },
	                  "style": {
	                    "width": 30,
	                    "height": 30
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontext1"
	                  ],
	                  "attr": {
	                    "value": "统计"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "buttonbox"
	              ],
	              "events": {
	                "click": function ($event) {this.clickretrybutton(this.row,$event)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/retry.png"
	                  },
	                  "style": {
	                    "width": 30,
	                    "height": 30
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontext1"
	                  ],
	                  "attr": {
	                    "value": "重发"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "buttonbox"
	              ],
	              "events": {
	                "click": function ($event) {this.clickendbutton(this.row,$event)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/buiness_endbtn.png"
	                  },
	                  "style": {
	                    "width": 30,
	                    "height": 30
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontext1"
	                  ],
	                  "attr": {
	                    "value": "结束"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {
	  "titlecell": {
	    "flexDirection": "row",
	    "position": "relative",
	    "borderBottomColor": "rgb(237,237,237)",
	    "borderBottomWidth": 1,
	    "paddingTop": 16,
	    "paddingBottom": 16,
	    "alignItems": "center"
	  },
	  "textbox": {
	    "flexDirection": "row",
	    "flex": 1,
	    "alignItems": "center"
	  },
	  "textstr": {
	    "color": "#808080",
	    "fontSize": 24
	  },
	  "detailcell": {
	    "borderBottomWidth": 1,
	    "borderBottomColor": "rgb(237,237,237)",
	    "paddingBottom": 8
	  },
	  "buttoncell": {
	    "borderBottomColor": "rgb(237,237,237)",
	    "borderBottomWidth": 10,
	    "flexDirection": "row",
	    "padding": 10
	  },
	  "buttonbox": {
	    "flexDirection": "row",
	    "width": 200,
	    "height": 56,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 8,
	    "padding": 8
	  },
	  "buttontext": {
	    "fontSize": 26,
	    "marginLeft": 8
	  },
	  "buttontext1": {
	    "color": "rgb(248,207,52)",
	    "fontSize": 26,
	    "marginLeft": 8
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
	var stream = __weex_require__('@weex-module/stream');
	var clickModule = __weex_require__('@weex-module/bhclickevent');

	var statusmap = {

	  0: '未审核',
	  1: '未开始',
	  2: '进行中',
	  3: '已完成',
	  4: '已结束'
	};
	var typemap = {

	  1005: '产品培训',
	  1006: '市场调研',
	  1007: '勤分享',
	  1008: '勤分享',
	  1009: '做调研',
	  1010: '常规调研',

	  1311: '疗程用药调研',
	  1312: '联合用药调研',
	  1313: '进货单调研',
	  1314: '保修卡调研',

	  1211: '产品知识',
	  1212: '养生常识',
	  1213: '行业资讯',
	  1214: '销售技能',
	  1215: '职场须知',

	  1110: '与产品合拍',
	  1111: '拍摄货架',
	  1112: '拍摄堆头',
	  1113: '拍摄POP',
	  1114: '拍摄端架',
	  1115: '拍摄橱窗',
	  1116: '拍摄海报',
	  1117: '拍摄价签',
	  1118: '与产品合拍',
	  1119: '拍摄POP',
	  1120: '摄影大赛'

	};


	var tipunitstr = '金币';

	var btnstyle = false;

	module.exports = {
	  data: function () {return {
	    environment: 'mingstatic',
	    isshow: false,
	    jiantoustyle: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/cell_drop_down.png',
	    row: {},
	    btnstyleurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/NOgouxuan.png',

	    isbtnselet: false,
	    test: 'joqwjpqjpqjpqqpp'
	  }},
	  computed: {

	    selecticon_url: {

	      get: function get() {

	        return this.row.islook == 0 ? "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/NOgouxuan.png" : "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/gouxuanBtn.png";
	      },

	      set: function set(v) {

	        this.row.islook = v;
	      }

	    }

	  },
	  methods: {

	    isshowdetailcell: function isshowdetailcell() {

	      this.isshow = !this.isshow;

	      if (this.isshow) {
	        this.jiantoustyle = "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/cell_drop_up.png";
	      } else {
	        this.jiantoustyle = "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/cell_drop_down.png";
	      }
	    },

	    getstatus: function getstatus(statusnumber) {

	      return statusmap[statusnumber];
	    },
	    getcreatetime: function getcreatetime(createtime) {

	      var d = new Date(createtime * 1000);
	      var date = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate();
	      return date;
	    },
	    getcost: function getcost(cost) {

	      var num = cost / 100.0;
	      return num.toFixed(1);
	    },
	    gettype: function gettype(type) {

	      return typemap[type];
	    },
	    getpassrate: function getpassrate(pass, unpass) {

	      var passrate = '0%';
	      if (pass == 0) {} else {
	        var passnum = parseFloat(pass);
	        var num = passnum / (passnum + parseFloat(unpass)) * 100;
	        passrate = num.toFixed(2) + '%';
	      }

	      return passrate;
	    },
	    getimage: function getimage(tid) {

	      return 'http://oss.aliyuncs.com/' + this.environment + '/image/task_list_thumb/' + tid;
	    },
	    gettasknumbertitle: function gettasknumbertitle(kind) {
	      return kind == 11 ? "任务盒数：" : "任务数量：";
	    },
	    getdonenumbertitle: function getdonenumbertitle(kind) {
	      return kind == 11 ? "晒票盒数：" : "完成人数：";
	    },
	    getrewardtitle: function getrewardtitle(kind) {
	      return kind == 11 ? "单盒赏金：" : "赏金：";
	    },
	    getdonenumber: function getdonenumber(kind, pass, quantity_clerk) {
	      return kind == 11 ? quantity_clerk : pass;
	    },
	    getMoney: function getMoney(tiptype, tip) {

	      var tipstr = '';
	      if (tiptype == 1) {
	        tipstr = tip + '积分';
	      } else if (tiptype == 2) {
	        tipstr = (tip / 100.0).toFixed(1) + tipunitstr;
	      } else {
	        tipstr = (tip / 100.0).toFixed(1) + '元';
	      }

	      return tipstr;
	    },
	    getbtncolor: function getbtncolor(status) {
	      return status == 0 ? 'lightgrey' : 'rgb(248,207,52)';
	    },

	    clickaddbutton: function clickaddbutton(e) {
	      if (e.append) {
	        clickModule.bhClickAddbtnEvent(e);
	      } else {}
	    },

	    clickauditbutton: function clickauditbutton(e) {

	      if (e.taskstatus_id) {
	        clickModule.bhClickAuditEvent(e);
	      } else {}
	    },
	    clickretrybutton: function clickretrybutton(e) {

	      clickModule.bhClickRetryEvent(e);
	    },
	    clickstatisticsbutton: function clickstatisticsbutton(e) {

	      clickModule.bhClickStatisticsEvent(e);
	    },
	    clickendbutton: function clickendbutton(e) {

	      clickModule.bhClickEndEvent(e);
	    },
	    isselected: function isselected(tid, kind) {

	      var lookstr = !this.row.islook == 0 ? "0" : "1";

	      var self = this;

	      eventModule.getHomeDatas(function (ret) {
	        var GET_URL_setLook = ret.settasklook_url;
	        var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=2&version=' + ret.version + '&task_id=' + tid + '&islook=' + lookstr + '&container_id=' + ret.container_id + '&categorylevel1_id=' + kind;

	        stream.fetch({
	          method: 'POST',
	          url: GET_URL_setLook,
	          body: BODY_URL,
	          type: 'json'
	        }, function (ret) {
	          if (!ret.ok) {} else {

	            var dict = ret.data;


	            if (dict.errCode == 0) {
	              self.row.islook = !self.row.islook;
	            } else {}
	          }
	        }, function (response) {});
	      });
	    },

	    goweiguandetails: function goweiguandetails(row) {

	      clickModule.bhClickWeiguanDetails(row);
	    },
	    getbackcolor: function getbackcolor(append) {

	      if (append) {
	        return "rgb(248,207,52)";
	      } else {
	        return "grey";
	      }
	    },
	    getbackcolor1: function getbackcolor1(status) {
	      if (status) {
	        return "rgb(248,207,52)";
	      } else {
	        return "grey";
	      }
	    },

	    getimagestatus: function getimagestatus(append) {
	      if (append) {
	        return "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_add_logo@2x.png";
	      } else {
	        return "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_add_logo@2x.png";
	      }
	    },
	    gettextcolor: function gettextcolor(append) {
	      if (append) {
	        return "rgb(248,207,52)";
	      } else {
	        return "grey";
	      }
	    },
	    getimageshenhestatus: function getimageshenhestatus(status) {
	      if (status) {
	        return "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_audit_logo@2x.png";
	      } else {
	        return "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_audit_logo@2x.png";
	      }
	    },
	    gettextshenhecolor: function gettextshenhecolor(status) {
	      if (status) {
	        return "rgb(248,207,52)";
	      } else {
	        return "grey";
	      }
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "backgroundColor": "#FFFFFF",
	    "width": 750
	  },
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "refresh",
	          "classList": [
	            "refresh"
	          ],
	          "events": {
	            "refresh": "handleRefresh"
	          },
	          "attr": {
	            "display": function () {return this.displayRefresh}
	          },
	          "children": [
	            {
	              "type": "loading-indicator",
	              "style": {
	                "width": 100,
	                "height": 100,
	                "color": "#808080"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginLeft": 10,
	                "color": "#000000"
	              },
	              "attr": {
	                "value": function () {return this.refreshstr}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "header"
	          ],
	          "style": {
	            "backgroundColor": "#FFFFFF"
	          },
	          "shown": function () {return this.ishide},
	          "children": [
	            {
	              "type": "lhb-bhslider",
	              "attr": {
	                "autoplay": "true"
	              }
	            },
	            {
	              "type": "lhb-bhkindbuttons"
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "lhb-bhprofile"
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "style": {
	            "backgroundColor": "#FFFFFF"
	          },
	          "shown": function () {return this.ishide},
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "marginTop": 15,
	                "borderBottomWidth": 1,
	                "borderBottomColor": "#D3D3D3",
	                "paddingBottom": 15,
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/buiness_managent_logo.png"
	                  },
	                  "style": {
	                    "width": 30,
	                    "height": 30,
	                    "marginLeft": 20
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginLeft": 10,
	                    "fontSize": 30,
	                    "color": "#808080"
	                  },
	                  "attr": {
	                    "value": "任务管理"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 26,
	                    "marginLeft": 40,
	                    "color": "#808080"
	                  },
	                  "attr": {
	                    "value": "电脑登录www.lihuobao.cn获取更多权限"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "events": {
	            "appear": "onappear",
	            "disappear": "ondisappear"
	          },
	          "repeat": {
	            "expression": function () {return this.rows},
	            "value": "row"
	          },
	          "children": [
	            {
	              "type": "lhb-bhcell",
	              "attr": {
	                "row": function () {return this.row},
	                "environment": function () {return this.environment}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "justifyContent": "flex-start",
	    "flexDirection": "column",
	    "position": "relative"
	  },
	  "dropdown": {
	    "justifyContent": "center",
	    "alignContent": "stretch",
	    "position": "relative"
	  },
	  "refresh": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "width": 750,
	    "height": 100
	  }
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(47);
	__webpack_require__(1);
	__webpack_require__(24);
	__webpack_require__(32);
	__webpack_require__(40);

	var eventModule = __weex_require__('@weex-module/requestevent');
	var stream = __weex_require__('@weex-module/stream');

	module.exports = {
	    data: function () {return {
	        environment: 'mingstatic',
	        ishide: true,
	        rows: [],
	        test: 'request failed',
	        displayRefresh: 'show',
	        refreshstr: '下拉刷新',

	        screenHeight: 0,

	        status1: '0',
	        status2: '1',
	        status3: '0'
	    }},

	    ready: function ready() {
	        this.requestHomeDatas();

	        this.$on('statuschangevisible', function (e) {
	            var detail = e.detail;

	            var visibily = detail.isvisibility;
	            if (visibily == 'hidden') {
	                this.ishide = true;
	            } else {
	                this.ishide = false;
	            }
	            this.filter();
	        }.bind(this));

	        this.$on('statuschange', function (e) {
	            this.filter();
	        }.bind(this));
	        this.filter();
	    },
	    methods: {
	        requestHomeDatas: function requestHomeDatas() {

	            var self = this;
	            eventModule.getHomeDatas(function (ret) {
	                self.environment = ret.environment;
	                var GET_URL_homeTaskList = ret.businesslist_url;

	                var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=2&version=' + ret.version + '&container_id=' + ret.container_id;

	                stream.fetch({
	                    method: 'POST',
	                    url: GET_URL_homeTaskList,
	                    body: BODY_URL,
	                    type: 'json'
	                }, function (ret) {
	                    if (!ret.ok) {} else {

	                        var dict = ret.data;
	                        self.rows = dict.tasks;

	                        self.displayRefresh = 'hide';
	                        self.refreshstr = '下拉刷新';
	                    }
	                }, function (response) {});
	            });
	        },

	        handleRefresh: function handleRefresh(e) {
	            var self = this;
	            self.displayRefresh = 'show';
	            self.refreshstr = '正在刷新';

	            self.requestHomeDatas();
	        },

	        toast: function toast(params) {
	            var modal = __weex_require__('@weex-module/modal');
	            modal.toast(params);
	        },

	        filter: function filter() {
	            var status = this.status;
	            this.list = [];
	            var allList = JSON.parse(initData);
	            if (status == '0') {
	                this.list = allList;
	            } else {
	                this.list = allList.filter(function (item) {
	                    return item.questionStatus == status;
	                });
	            }
	        }

	    }

	};}
	/* generated by weex-loader */


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(48)
	var __weex_style__ = __webpack_require__(49)
	var __weex_script__ = __webpack_require__(50)

	__weex_define__('@weex-component/lhb-bhdropdownmenu', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "select-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "content"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mask"
	      ],
	      "id": "mask",
	      "events": {
	        "click": "switchView"
	      },
	      "style": {
	        "visibility": function () {return this.visibility}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "options"
	      ],
	      "id": "options",
	      "style": {
	        "top": function () {return this.tops}
	      },
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.status},
	          "classList": [
	            "cell"
	          ],
	          "attr": {
	            "vid": function () {return this.id},
	            "trackBy": function () {return this.$index}
	          },
	          "events": {
	            "click": "onItemClick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['name', this.id==this.statusId?'current':'']},
	              "attr": {
	                "value": function () {return this.name}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "icon-curr-flag"
	              ],
	              "attr": {
	                "src": function () {return this.flagSrc}
	              },
	              "shown": function () {return this.id==this.statusId}
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "select"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "oneselect"
	          ],
	          "events": {
	            "click": "clicktab1"
	          },
	          "style": {
	            "backgroundColor": function () {return this.backcolor1}
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "current-text"
	              ],
	              "style": {
	                "color": function () {return this.color1}
	              },
	              "attr": {
	                "value": function () {return this.statusName1}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "icon-arrow"
	              ],
	              "id": "arrow1",
	              "attr": {
	                "src": function () {return this.arrowSrc}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "oneselect"
	          ],
	          "events": {
	            "click": "clicktab2"
	          },
	          "style": {
	            "backgroundColor": function () {return this.backcolor2}
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "current-text"
	              ],
	              "style": {
	                "color": function () {return this.color2}
	              },
	              "attr": {
	                "value": function () {return this.statusName2}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "icon-arrow"
	              ],
	              "id": "arrow2",
	              "attr": {
	                "src": function () {return this.arrowSrc}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "oneselect"
	          ],
	          "events": {
	            "click": "clicktab3"
	          },
	          "style": {
	            "backgroundColor": function () {return this.backcolor3}
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "current-text"
	              ],
	              "style": {
	                "color": function () {return this.color3}
	              },
	              "attr": {
	                "value": function () {return this.statusName3}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "icon-arrow"
	              ],
	              "id": "arrow3",
	              "attr": {
	                "src": function () {return this.arrowSrc}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = {
	  "select-container": {
	    "flexDirection": "column",
	    "position": "relative",
	    "zIndex": 1000
	  },
	  "content": {
	    "width": 750,
	    "marginTop": 90
	  },
	  "mask": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "bottom": 0,
	    "right": 0,
	    "flex": 1,
	    "width": 750,
	    "backgroundColor": "rgba(0,0,0,0.5)"
	  },
	  "select": {
	    "width": 750,
	    "height": 90,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "borderBottomWidth": 1,
	    "borderTopWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "rgb(237,237,237)",
	    "backgroundColor": "#FFFFFF",
	    "zIndex": 1001,
	    "position": "absolute",
	    "top": 0
	  },
	  "oneselect": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "textAlign": "center",
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRightWidth": 1,
	    "borderBottomWidth": 1,
	    "borderColor": "rgb(237,237,237)",
	    "height": 90
	  },
	  "current-text": {
	    "fontSize": 33
	  },
	  "icon-arrow": {
	    "width": 21,
	    "height": 17,
	    "marginLeft": 16
	  },
	  "options": {
	    "position": "absolute",
	    "width": 750,
	    "backgroundColor": "#eeeeee",
	    "transformOrigin": "center center"
	  },
	  "cell": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "width": 750,
	    "height": 90,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd"
	  },
	  "name": {
	    "color": "#333333",
	    "fontSize": 33,
	    "flex": 1
	  },
	  "icon-curr-flag": {
	    "width": 32,
	    "height": 32
	  },
	  "current": {
	    "color": "rgb(248,207,52)"
	  }
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var animation = __weex_require__('@weex-module/animation');

	module.exports = {
	    data: function () {return {
	        test: 'gqgrqqqg',
	        color1: '#333',
	        color2: '#333',
	        color3: '#333',
	        backcolor1: 'white',
	        backcolor2: 'white',
	        backcolor3: 'white',
	        visibility: 'hidden',
	        tops: '-361',
	        currentid: '',
	        current_showMask: '',
	        current_translate: '',
	        current_opacity: '',
	        statusId: '0',
	        statusIda: '0',
	        statusIdb: '0',
	        statusIdc: '0',
	        status: [],
	        status1: [{ id: '0', name: '全部' }, { id: '1', name: '待审核' }, { id: '2', name: '进行中' }, { id: '3', name: '已完成' }, { id: '4', name: '已结束' }],
	        status2: [{ id: '0', name: '全部' }, { id: '1', name: '本月' }, { id: '2', name: '近三个月' }, { id: '3', name: '近半年' }, { id: '4', name: '近一年' }],
	        status3: [{ id: '0', name: '全部' }, { id: '1', name: '我的' }, { id: '2', name: '其他' }],
	        flagSrc: 'https://gw.alicdn.com/tps/TB11a2lKFXXXXbVXpXXXXXXXXXX-32-32.png',
	        arrowSrc: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/buiness_arrow.png'
	    }},
	    computed: {
	        statusName1: {
	            get: function get() {
	                var id = this.statusIda;
	                if (id == 0) {
	                    return "状态";
	                } else {
	                    return this.status1.filter(function (s) {
	                        return s.id == id;
	                    })[0].name;
	                }
	            }
	        },
	        statusName2: {
	            get: function get() {
	                var id = this.statusIdb;
	                if (id == 0) {
	                    return "月份";
	                } else {
	                    return this.status2.filter(function (s) {
	                        return s.id == id;
	                    })[0].name;
	                }
	            }
	        },
	        statusName3: {
	            get: function get() {
	                var id = this.statusIdc;
	                if (id == 0) {
	                    return "责任人";
	                } else {
	                    return this.status3.filter(function (s) {
	                        return s.id == id;
	                    })[0].name;
	                }
	            }
	        }
	    },
	    methods: {
	        clicktab1: function clicktab1() {

	            if (this.currentid != 1) {
	                this.current_translate = null;
	                this.current_opacity = null;
	                this.current_showMask = null;
	            }

	            this.test = '111';
	            this.tops = '-361';
	            this.status = this.status1;
	            this.statusId = this.statusIda;
	            this.currentid = 1;
	            this.collapse(this._ids.options.el.ref);
	            this.rotate(this._ids.arrow1.el.ref);
	            this.toggleMaskVisible();

	            this.opacity(this._ids.mask.el.ref);

	            this.$dispatch('statuschangevisible', {
	                isvisibility: this.visibility
	            });
	        },
	        clicktab2: function clicktab2(argument) {
	            if (this.currentid != 2) {
	                this.current_translate = null;
	                this.current_opacity = null;
	                this.current_showMask = null;
	            }

	            this.test = '222';
	            this.tops = '-361';
	            this.status = this.status2;
	            this.statusId = this.statusIdb;
	            this.currentid = 2;
	            this.collapse(this._ids.options.el.ref);
	            this.rotate(this._ids.arrow2.el.ref);
	            this.toggleMaskVisible();

	            this.opacity(this._ids.mask.el.ref);

	            this.$dispatch('statuschangevisible', {
	                isvisibility: this.visibility
	            });
	        },
	        clicktab3: function clicktab3(argument) {
	            if (this.currentid != 3) {
	                this.current_translate = null;
	                this.current_opacity = null;
	                this.current_showMask = null;
	            }

	            this.test = '333';
	            this.tops = '-181';
	            this.status = this.status3;
	            this.statusId = this.statusIdc;
	            this.currentid = 3;
	            this.collapse(this._ids.options.el.ref);
	            this.rotate(this._ids.arrow3.el.ref);
	            this.toggleMaskVisible();

	            this.opacity(this._ids.mask.el.ref);

	            this.$dispatch('statuschangevisible', {
	                isvisibility: this.visibility
	            });
	        },

	        switchView: function switchView(curid) {
	            this.toggleMaskVisible();

	            this.opacity(this._ids.mask.el.ref);
	            this.collapse(this._ids.options.el.ref);

	            if (curid == 1) {
	                this.rotate(this._ids.arrow1.el.ref);
	            } else if (curid == 2) {
	                this.rotate(this._ids.arrow2.el.ref);
	            } else {
	                this.rotate(this._ids.arrow3.el.ref);
	            };

	            this.$dispatch('statuschangevisible', {
	                isvisibility: this.visibility
	            });
	        },

	        onItemClick: function onItemClick(e) {
	            var vid = e.target.attr.vid;
	            switch (this.currentid) {
	                case 1:
	                    this.statusIda = vid;
	                    break;
	                case 2:
	                    this.statusIdb = vid;
	                    break;
	                case 3:
	                    this.statusIdc = vid;
	                    break;
	                default:
	                    break;
	            }

	            this.switchView(this.currentid);
	            this.$dispatch('statuschange', {
	                id1: this.statusIda,
	                name1: this.statusName1,
	                id2: this.statusIdb,
	                name2: this.statusName2,
	                id3: this.statusIdc,
	                name3: this.statusName3,
	                isvisibility: this.visibility
	            });
	        },

	        updateStatus: function updateStatus(id) {
	            this.statusId = id;
	        },

	        toggleMaskVisible: function toggleMaskVisible() {
	            this.current_showMask = !this.current_showMask;
	            var visibility = this.current_showMask ? 'visible' : 'hidden';
	            this.visibility = visibility;


	            if (this.visibility == 'hidden') {
	                this.status = [];
	                this.color1 = "#333";
	                this.color2 = "#333";
	                this.color3 = "#333";
	                this.backcolor1 = 'white';
	                this.backcolor2 = 'white';
	                this.backcolor3 = 'white';
	            } else {
	                if (this.currentid == 1) {
	                    this.color1 = "rgb(248,207,52)";
	                    this.color2 = "#333";
	                    this.color3 = "#333";
	                    this.backcolor1 = '#eee';
	                    this.backcolor2 = 'white';
	                    this.backcolor3 = 'white';
	                } else if (this.currentid == 2) {
	                    this.color2 = "rgb(248,207,52)";
	                    this.color1 = "#333";
	                    this.color3 = "#333";
	                    this.backcolor2 = '#eee';
	                    this.backcolor1 = 'white';
	                    this.backcolor3 = 'white';
	                } else {
	                    this.color3 = "rgb(248,207,52)";
	                    this.color1 = "#333";
	                    this.color2 = "#333";
	                    this.backcolor3 = '#eee';
	                    this.backcolor1 = 'white';
	                    this.backcolor2 = 'white';
	                }
	            };
	        },

	        collapse: function collapse(ref, callback) {
	            var platform = this.$getConfig().env.platform;
	            var translate = 'translate(0, 100%)';
	            if (platform == 'iOS') {

	                if (this.currentid == 3) {
	                    translate = 'translate(0,270)';
	                } else {
	                    translate = 'translate(0,450)';
	                }
	            }
	            this.current_translate = this.current_translate ? '' : translate;
	            this.anim(ref, {
	                transform: this.current_translate
	            }, 'ease', 100, callback);
	        },

	        opacity: function opacity(ref, callback) {
	            var self = this;
	            self.current_opacity = self.current_opacity === 1 ? 0.1 : 1;
	            self.anim(ref, {
	                opacity: self.current_opacity
	            }, 'ease', 100, callback);
	        },

	        rotate: function rotate(ref, callback) {
	            var self = this;
	            if (!self.current_rotate) {
	                self.current_rotate = 0;
	            }
	            self.current_rotate = self.current_rotate + 180;
	            self.anim(ref, {
	                transform: 'rotate(' + self.current_rotate + 'deg)'
	            }, 'linear', 100, callback);
	        },

	        anim: function anim(ref, styles, timingFunction, duration, callback) {
	            animation.transition(ref, {
	                styles: styles,
	                timingFunction: timingFunction,
	                duration: duration
	            }, callback || function () {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);