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
	__webpack_require__(5)
	var __weex_template__ = __webpack_require__(13)
	var __weex_script__ = __webpack_require__(14)

	__weex_define__('@weex-component/eaf9ec7e5f4b5df063b573346a37cd7d', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/eaf9ec7e5f4b5df063b573346a37cd7d',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/lhb-studyslider', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
	    "height": 263
	  },
	  "slider-pages": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 263
	  },
	  "image": {
	    "width": 750,
	    "height": 263
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
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/didclickevent');
	var stream = __weex_require__('@weex-module/stream');

	module.exports = {
	  data: function () {return {
	    environment: '',
	    indicatormargintop: "210",
	    autoplay: '',
	    items: [],
	    kindstr: 'question'
	  }},
	  methods: {

	    getbannerimage: function getbannerimage(image) {
	      return "http://oss.aliyuncs.com/" + this.environment + "/" + image;
	    },
	    clickbanner: function clickbanner(e) {

	      clickModule.didClickEvent(e);
	    }

	  },
	  ready: function ready() {
	    var self = this;
	    eventModule.getHomeDatas(function (ret) {

	      self.environment = ret.environment;
	      var GET_URL_MobileBanner = ret.banner_url;
	      var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=' + ret.platform + '&version=' + ret.version + '&container_id=' + ret.container_id + '&position=' + self.kindstr;

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

	__webpack_require__(6)
	var __weex_template__ = __webpack_require__(10)
	var __weex_style__ = __webpack_require__(11)
	var __weex_script__ = __webpack_require__(12)

	__weex_define__('@weex-component/lhb-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(7)
	var __weex_style__ = __webpack_require__(8)
	var __weex_script__ = __webpack_require__(9)

	__weex_define__('@weex-component/lhb-tabbaritem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 140
	  },
	  "top-line": {
	    "position": "absolute",
	    "bottom": 2,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 0,
	    "width": 70,
	    "height": 70
	  },
	  "tab-text": {
	    "marginTop": 6,
	    "textAlign": "center",
	    "fontSize": 26
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "lhb-tabbaritem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    },
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    }
	  ]
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 403,
	    "marginBottom": 0,
	    "backgroundColor": "#FFFFFF"
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 263,
	    "left": 0,
	    "right": 0,
	    "height": 140
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(6);

	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);

	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);

	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = tabItem.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "backgroundColor": "#FFFFFF",
	    "width": 750,
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "lhb-studyslider",
	      "attr": {
	        "autoplay": "true",
	        "kindstr": "ticket"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "column"
	      },
	      "children": [
	        {
	          "type": "lhb-tabbar",
	          "attr": {
	            "tabItems": function () {return this.tabItems}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(5);
	__webpack_require__(1);

	module.exports = {
	  data: function () {return {
	    dir: 'examples',
	    tabItems: [{
	      index: 0,
	      title: '最新',
	      titleColor: '#000000',
	      icon: '',
	      image: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/button1@3x.png',
	      selectedImage: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/button11@3x.png',
	      src: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/JS_138/lhb-studylist.js?sort=newest&categorylevel1_id=11',
	      visibility: 'visible',
	      selectedColor: 'rgb(95,205,255)'
	    }, {
	      index: 1,
	      title: '最火',
	      titleColor: '#000000',
	      icon: '',
	      image: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/button2@3x.png',
	      selectedImage: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/button12@3x.png',
	      src: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/JS_138/lhb-studylist.js?sort=hotest&categorylevel1_id=11',
	      visibility: 'hidden',
	      selectedColor: 'rgb(250,95,95)'
	    }, {
	      index: 2,
	      title: '最赚钱',
	      titleColor: '#000000',
	      icon: '',
	      image: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/button3@3x.png',
	      selectedImage: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/button13@3x.png',
	      src: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/JS_138/lhb-studylist.js?sort=mostmoney&categorylevel1_id=11',
	      visibility: 'hidden',
	      selectedColor: '#ffcc00'
	    }, {
	      index: 3,
	      title: '最容易',
	      titleColor: '#000000',
	      icon: '',
	      image: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/button4@3x.png',
	      selectedImage: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/button14@3x.png',
	      src: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/JS_138/lhb-studylist.js?sort=easiest&categorylevel1_id=11',
	      visibility: 'hidden',
	      selectedColor: 'rgb(90,215,140)'
	    }]
	  }},
	  created: function created() {},
	  methods: {
	    ready: function ready(e) {
	      var vm = this;
	      vm.$on('tabBar.onClick', function (e) {
	        var detail = e.detail;
	        nativeLog('tabBar.onClick ' + detail.index);
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);