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
	__webpack_require__(36)
	var __weex_template__ = __webpack_require__(40)
	var __weex_style__ = __webpack_require__(41)
	var __weex_script__ = __webpack_require__(42)

	__weex_define__('@weex-component/5844a367a24d269ee8457ea2d4d45f24', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/5844a367a24d269ee8457ea2d4d45f24',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/brand-slider', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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

	var eventModule = __weex_require__('@weex-module/sentdataevent');
	var clickModule = __weex_require__('@weex-module/bhclickevent');
	var stream = __weex_require__('@weex-module/stream');

	module.exports = {
	  data: (_data = {
	    environment: '',
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
	    eventModule.sentHomeDatasWithWeex(function (ret) {

	      self.environment = ret.environment;
	      var positionStr = "home_admin";

	      var GET_URL_MobileBanner = ret.banner_url;
	      var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=' + ret.platform + '&position=home&version=' + ret.version + '&container_id=' + ret.container_id;

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

	__weex_define__('@weex-component/brand-kindbuttons', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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

	__weex_define__('@weex-component/brand-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
	    "click": function ($event) {this.clickotherkindbtn(this.btndict,$event)}
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
	        "height": function () {return this.btnwidth},
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

	var clickbtnModule = __weex_require__('@weex-module/didclickevent');

	module.exports = {
	    data: function () {return {
	        btndict: {},
	        iconurl: '',
	        icontitle: '',
	        btnwidth: 80,
	        btnradius: 40,
	        titlecolor: 'grey'
	    }},
	    methods: {

	        clickotherkindbtn: function clickotherkindbtn(e) {

	            clickbtnModule.didClickEvent(e);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "otherkind"
	  ],
	  "style": {
	    "flexDirection": "row"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "otherkindborder"
	      ],
	      "repeat": {
	        "expression": function () {return this.buttons},
	        "value": "btn"
	      },
	      "style": {
	        "width": function () {return this.getnumber(this.buttons)}
	      },
	      "children": [
	        {
	          "type": "brand-button",
	          "classList": [
	            "othersmallkind"
	          ],
	          "attr": {
	            "iconurl": function () {return this.getbtnImgurl(this.btn.image_id)},
	            "icontitle": function () {return this.btn.name},
	            "btndict": function () {return this.btn},
	            "btnradius": "1",
	            "btnwidth": "110",
	            "titlecolor": function () {return this.btn.color}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
	  "otherkind": {
	    "flexDirection": "row",
	    "width": 750,
	    "flexWrap": "wrap",
	    "borderBottomWidth": 8,
	    "borderColor": "rgb(237,237,237)"
	  },
	  "otherkindborder": {
	    "flexDirection": "column",
	    "paddingBottom": 16
	  },
	  "othersmallkind": {
	    "flex": 1,
	    "marginTop": 8
	  }
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(25);
	var eventModule = __weex_require__('@weex-module/sentdataevent');
	var stream = __weex_require__('@weex-module/stream');

	module.exports = {
	  data: function () {return {
	    environment: '',
	    buttons: []
	  }},
	  ready: function ready() {
	    var self = this;
	    eventModule.sentHomeDatasWithWeex(function (ret) {

	      self.environment = ret.environment;

	      var GET_URL_ActivityEntry = ret.activity_url;
	      var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=' + ret.platform + '&version=' + ret.version + '&container_id=' + ret.container_id;

	      stream.fetch({
	        method: 'POST',
	        url: GET_URL_ActivityEntry,
	        body: BODY_URL,
	        type: 'json'
	      }, function (ret) {
	        if (!ret.ok) {} else {

	          var dic = ret.data;
	          self.buttons = dic.list;
	        }
	      }, function (response) {});
	    });
	  },
	  methods: {

	    getbtnImgurl: function getbtnImgurl(image) {
	      return 'http://oss.aliyuncs.com/' + this.environment + '/banner_task/image/' + image;
	    },
	    getnumber: function getnumber(buttons) {

	      if (buttons.length < 4) {
	        return 250;
	      } else {
	        return 187.5;
	      }
	    }

	  }

	};}
	/* generated by weex-loader */


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(33)
	var __weex_style__ = __webpack_require__(34)
	var __weex_script__ = __webpack_require__(35)

	__weex_define__('@weex-component/brand-taskcell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
	  "style": {
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "item"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "thumb"
	          ],
	          "attr": {
	            "src": function () {return this.geticonUrl(this.row.task_id)}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "titlemodule"
	          ],
	          "style": {
	            "flexDirection": "column",
	            "marginLeft": 20,
	            "marginTop": 5
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.row.name}
	              }
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/brandtype_icon.png"
	                  },
	                  "style": {
	                    "width": 30,
	                    "height": 30,
	                    "marginTop": 8
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "type"
	                  ],
	                  "attr": {
	                    "value": function () {return this.getType(this.row.categorylevel2_id)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "type"
	                  ],
	                  "style": {
	                    "marginLeft": 30
	                  },
	                  "attr": {
	                    "value": function () {return this.getremainstr(this.row.remain,this.row.participants)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "button"
	              ],
	              "style": {
	                "flexDirection": "row",
	                "alignItems": "center",
	                "width": 510,
	                "marginTop": 35
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 30,
	                    "color": "#FF0000",
	                    "fontWeight": "bold",
	                    "width": 200
	                  },
	                  "attr": {
	                    "value": function () {return this.getMoney(this.row.tiptype_id,this.row.tip,this.row.score)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontitle"
	                  ],
	                  "style": {
	                    "borderColor": "rgb(248,207,52)",
	                    "color": "rgb(248,207,52)",
	                    "marginLeft": 10
	                  },
	                  "shown": function () {return this.getisShow(this.row.categorylevel1_id,this.row.listtag,this.row.categorylevel2_id)},
	                  "events": {
	                    "click": function ($event) {this.clickleftbutton(this.row,$event)}
	                  },
	                  "attr": {
	                    "value": function () {return this.getleftBtn(this.row.categorylevel1_id,this.row.listtag)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontitle"
	                  ],
	                  "style": {
	                    "borderColor": function () {return this.getrightBtncolor(this.row.status,this.row.categorylevel2_id)},
	                    "color": function () {return this.getrightBtncolor(this.row.status,this.row.categorylevel2_id)},
	                    "marginLeft": function () {return this.getLeftMargin(this.row.categorylevel1_id,this.row.listtag,this.row.categorylevel2_id)}
	                  },
	                  "attr": {
	                    "value": function () {return this.getrightBtn(this.row.status,this.row.categorylevel1_id,this.row.categorylevel2_id)}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item2"
	      ],
	      "style": {
	        "marginTop": 10,
	        "height": 1,
	        "flexDirection": "row",
	        "backgroundColor": "rgb(237,237,237)",
	        "alignItems": "center"
	      }
	    }
	  ]
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "marginTop": 20,
	    "marginLeft": 10,
	    "flexDirection": "row"
	  },
	  "thumb": {
	    "width": 200,
	    "height": 200,
	    "borderWidth": 1,
	    "borderColor": "#e3e3e3"
	  },
	  "title": {
	    "textAlign": "left",
	    "color": "#666666",
	    "fontSize": 32,
	    "width": 510,
	    "textOverflow": "ellipsis",
	    "lines": 1
	  },
	  "type": {
	    "marginTop": 8,
	    "color": "#808080",
	    "fontSize": 26,
	    "textAlign": "center",
	    "padding": 8,
	    "maxWidth": 190
	  },
	  "buttontitle": {
	    "height": 60,
	    "width": 130,
	    "fontSize": 28,
	    "textAlign": "center",
	    "borderRadius": 8,
	    "borderWidth": 3,
	    "justifyContent": "center",
	    "padding": 13
	  },
	  "participate": {
	    "flex": 1,
	    "textAlign": "center",
	    "fontSize": 24,
	    "color": "#666666"
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var clickModule = __weex_require__('@weex-module/didclickevent');

	var tipunitstr = '金币';
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
	var rightbuttonstatus = {

	    0: '抢钱',
	    1: '继续',
	    2: '审核',
	    3: '已完成',
	    4: '未通过',
	    5: '结束',
	    7: '结束',
	    8: '结束',
	    9: '结束',
	    10: '结束',
	    11: '结束',
	    12: '结束',
	    13: '结束',
	    14: '结束'
	};
	module.exports = {
	    data: function () {return {
	        scorename: '',
	        environment: '',
	        row: {}
	    }},
	    methods: {
	        getremainstr: function getremainstr(remain, participants) {
	            var remainstr = '';
	            if (remain == 0) {
	                remainstr = '参与：' + participants;
	            } else {
	                remainstr = '仅剩：' + remain;
	            }
	            return remainstr;
	        },

	        geticonUrl: function geticonUrl(tid) {

	            return 'http://oss.aliyuncs.com/' + this.environment + '/image/task_list_thumb/' + tid;
	        },
	        getMoney: function getMoney(tiptype, tip, score) {

	            var tipstr = '';
	            if (tip == 0) {
	                tipstr = score + this.scorename;
	            } else {

	                if (tiptype == 2) {
	                    tipstr = '赏' + tip / 100.0 + tipunitstr;
	                } else {
	                    tipstr = '赏' + tip / 100.0 + '元';
	                }
	            }

	            if (tip == 0 && score == 0) {
	                tipstr = '赏金 ***';
	            }
	            return tipstr;
	        },
	        getType: function getType(type) {

	            return typemap[type];
	        },
	        getrightBtn: function getrightBtn(status, kind, type) {
	            var statusstr = '';
	            if (kind == 2) {
	                statusstr = '抢答';
	            } else {
	                statusstr = rightbuttonstatus[status];
	            }

	            if (type == 120) {
	                if (status == 0 || status == 1) {
	                    statusstr = '抢钱';
	                } else {
	                    statusstr = '围观';
	                }
	            }

	            return statusstr;
	        },
	        getrightBtncolor: function getrightBtncolor(status, type) {

	            var color = '';
	            if (status == 0 || status == 1) {
	                color = 'orange';
	            } else {
	                color = 'lightgrey';
	            }
	            if (type == 120) {
	                color = 'orange';
	            }

	            return color;
	        },
	        getleftBtn: function getleftBtn(kind, listtag) {
	            var leftbtnstr = '';
	            if (kind == 1 || kind == 11) {
	                if (listtag == 3) {
	                    leftbtnstr = '明细';
	                } else {
	                    leftbtnstr = '围观';
	                }
	            } else if (kind == 2) {
	                leftbtnstr = '学习';
	            } else {}

	            return leftbtnstr;
	        },
	        getisShow: function getisShow(kind, listtag, type) {
	            var show = false;
	            if (kind == 1 || kind == 11) {
	                if (listtag == 0) {
	                    show = false;
	                } else if (listtag == 3) {
	                    show = true;
	                } else {
	                    show = true;
	                }
	            } else if (kind == 2) {
	                show = true;
	            } else {
	                show = false;
	            }

	            if (type == 120) {
	                show = false;
	            }
	            return show;
	        },
	        getLeftMargin: function getLeftMargin(kind, listtag, type) {

	            var padding = 165;
	            var leftmargin = 25;
	            if (kind == 1 || kind == 11) {
	                if (listtag == 0) {
	                    leftmargin = padding;
	                } else if (listtag == 3) {} else {}
	            } else if (kind == 2) {} else {
	                leftmargin = padding;
	            }

	            if (type == 120) {
	                leftmargin = padding;
	            }
	            return leftmargin;
	        },

	        clickleftbutton: function clickleftbutton(e) {

	            clickModule.didClickLeftButton(e);
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

	__weex_define__('@weex-component/brand-knowledgecell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
	    "boxcell"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.getMainImage(this.row.task_id)}
	      },
	      "style": {
	        "width": 750,
	        "height": 400
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "boxrow"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "knowledgelabel"
	          ],
	          "attr": {
	            "value": "知识竞赛"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "textlabel"
	          ],
	          "style": {
	            "marginLeft": 20
	          },
	          "attr": {
	            "value": function () {return this.getStartTime(this.row.starttime)}
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "marginLeft": 200,
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.getRewardImage(this.row.tiptype_icon_id)}
	              },
	              "style": {
	                "width": 35,
	                "height": 40
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "textlabel"
	              ],
	              "style": {
	                "marginLeft": 10,
	                "color": "#FF0000"
	              },
	              "attr": {
	                "value": function () {return this.row.tiptype_icon_text}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "boxrow"
	      ],
	      "style": {
	        "fontSize": 40
	      },
	      "attr": {
	        "value": function () {return this.row.name}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "boxrow"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "textlabel"
	          ],
	          "attr": {
	            "value": function () {return '参与：' + (!!this.row.participants?this.row.participants:'0')}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "textlabel"
	          ],
	          "style": {
	            "marginLeft": 80
	          },
	          "attr": {
	            "value": function () {return '围观：' + (!!this.row.look_count?this.row.look_count:'0')}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {
	  "boxcell": {
	    "flexDirection": "column",
	    "borderBottomWidth": 12,
	    "borderColor": "rgb(237,237,237)",
	    "paddingBottom": 30
	  },
	  "boxrow": {
	    "flexDirection": "row",
	    "marginTop": 30,
	    "marginLeft": 30,
	    "alignItems": "center"
	  },
	  "knowledgelabel": {
	    "color": "#FFFFFF",
	    "fontSize": 27,
	    "borderRadius": 8,
	    "backgroundColor": "rgb(224,123,251)",
	    "width": 160,
	    "height": 44,
	    "textAlign": "center",
	    "padding": 8
	  },
	  "textlabel": {
	    "color": "#808080",
	    "fontSize": 30
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {

	    data: function () {return {
	        environment: '',
	        row: {}
	    }},
	    methods: {

	        getMainImage: function getMainImage(tid) {

	            return 'http://oss.aliyuncs.com/' + this.environment + '/image/task_list_thumb/' + tid;
	        },
	        getRewardImage: function getRewardImage(tiptypeid) {

	            return 'http://oss.aliyuncs.com/' + this.environment + '/image/tiptype_icon/' + tiptypeid;
	        },
	        getStartTime: function getStartTime(starttime) {
	            var date = new Date(starttime * 1000);

	            var year = date.getFullYear();
	            var month = date.getMonth() + 1;
	            var date = date.getDate();
	            return year + "." + month + "." + date;
	        }
	    }

	};}
	/* generated by weex-loader */


/***/ },
/* 40 */
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
	          "children": [
	            {
	              "type": "brand-slider",
	              "attr": {
	                "autoplay": "true"
	              }
	            },
	            {
	              "type": "brand-kindbuttons"
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "marginTop": 15,
	                "borderBottomWidth": 1,
	                "borderBottomColor": "rgb(237,237,237)",
	                "paddingBottom": 15,
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/homePage_today.png"
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
	                    "value": "今日推荐"
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
	            "disappear": "ondisappear",
	            "click": function ($event) {this.clcikmanagecell(this.row,$event)}
	          },
	          "classList": [
	            "cell"
	          ],
	          "repeat": {
	            "expression": function () {return this.rows},
	            "value": "row"
	          },
	          "children": [
	            {
	              "type": "brand-taskcell",
	              "attr": {
	                "row": function () {return this.row},
	                "environment": function () {return this.environment},
	                "scorename": function () {return this.scorename}
	              },
	              "shown": function () {return this.row.categorylevel1_id!=15&&this.row.categorylevel2_id!=1217}
	            },
	            {
	              "type": "brand-knowledgecell",
	              "attr": {
	                "row": function () {return this.row},
	                "environment": function () {return this.environment}
	              },
	              "shown": function () {return this.row.categorylevel1_id==2&&this.row.categorylevel2_id==1217}
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "fontSize": function () {return this.size},
	                "color": "#D3D3D3",
	                "textAlign": "center"
	              },
	              "attr": {
	                "value": "非指定店员仅展示部分活动"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
	  "cell": {
	    "width": 750
	  },
	  "refresh": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "width": 750,
	    "height": 100
	  },
	  "type": {
	    "marginTop": 8,
	    "borderWidth": 1,
	    "borderRadius": 10,
	    "borderColor": "#808080",
	    "color": "#808080",
	    "fontSize": 24,
	    "textAlign": "center",
	    "padding": 8,
	    "height": 100
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(1);
	__webpack_require__(24);
	__webpack_require__(32);
	__webpack_require__(36);


	var eventModule = __weex_require__('@weex-module/sentdataevent');
	var clickModule = __weex_require__('@weex-module/didclickevent');
	var stream = __weex_require__('@weex-module/stream');

	var mm = '0';

	module.exports = {
	  creat: function creat() {},

	  ready: function ready() {
	    this.requestHomeDatas();
	  },
	  data: function () {return {
	    test: '',

	    scorename: '',
	    environment: '',
	    displayRefresh: 'show',
	    refreshstr: '下拉刷新',
	    rows: [],
	    size: 27,
	    isappleaudit: true }},

	  methods: {
	    requestHomeDatas: function requestHomeDatas() {

	      var self = this;
	      eventModule.sentHomeDatasWithWeex(function (ret) {

	        nativeLog("ret:--------" + ret.uid + ret.sid + ret._t);

	        self.scorename = ret.score_name;
	        self.environment = ret.environment;
	        var GET_URL_HomeRecommend = ret.homelist_url;
	        var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=' + ret.platform + '&version=' + ret.version + '&mm=' + mm + '&container_id=' + ret.container_id;

	        stream.fetch({
	          method: 'POST',
	          url: GET_URL_HomeRecommend,
	          body: BODY_URL,
	          type: 'json'
	        }, function (ret) {
	          if (!ret.ok) {} else {
	            var dic = ret.data;

	            self.rows = dic.tasks;

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

	    clcikmanagecell: function clcikmanagecell(e) {

	      clickModule.didClickManageCell(e);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);