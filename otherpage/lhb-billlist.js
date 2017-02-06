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

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/5a4050aae7fdfde33f1325849f77ada8', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/5a4050aae7fdfde33f1325849f77ada8',undefined,undefined)

/***/ },
/* 1 */
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
	      "shown": function () {return this.isshow!=0},
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "cell"
	          ],
	          "repeat": {
	            "expression": function () {return this.rows},
	            "value": "row"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "rowcell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "typelabel"
	                  ],
	                  "attr": {
	                    "value": function () {return this.row.title}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "timelabel"
	                  ],
	                  "attr": {
	                    "value": function () {return this.gettimes(this.row.createtime)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "scorelabel"
	                  ],
	                  "attr": {
	                    "value": function () {return this.getscore(this.row.money,this.row.score,this.row.unit)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "line"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "hintlabel"
	      ],
	      "shown": function () {return this.isshow==0},
	      "attr": {
	        "value": "没有找到纪录哦~"
	      }
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "hintlabel": {
	    "position": "absolute",
	    "top": 400,
	    "width": 750,
	    "height": 50,
	    "color": "#000000",
	    "fontSize": 30,
	    "fontWeight": "bold",
	    "textAlign": "center"
	  },
	  "cell": {
	    "width": 750
	  },
	  "rowcell": {
	    "flexDirection": "column",
	    "marginLeft": 20
	  },
	  "typelabel": {
	    "fontSize": 30,
	    "color": "#000000",
	    "marginTop": 16
	  },
	  "timelabel": {
	    "fontSize": 26,
	    "color": "#808080",
	    "marginLeft": 10,
	    "marginTop": 16
	  },
	  "scorelabel": {
	    "position": "absolute",
	    "right": 60,
	    "top": 34,
	    "color": "#FF0000",
	    "fontWeight": "bold"
	  },
	  "line": {
	    "marginTop": 10,
	    "backgroundColor": "rgb(210,210,210)",
	    "height": 1
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
	var stream = __weex_require__('@weex-module/stream');

	module.exports = {
	  created: function created() {
	    var bundleUrl = this.$getConfig().bundleUrl;

	    var sortstr = this.getQueryString(bundleUrl, 'sort');

	    if (sortstr == 'getFortuneOutLog') {
	      this.sort = '-';
	    } else {
	      this.sort = '+';
	    }

	    this.requestListDatas(sortstr);
	  },

	  ready: function ready() {},

	  data: function () {return {
	    rows: [],
	    sort: '',
	    isshow: 1
	  }},

	  methods: {
	    requestListDatas: function requestListDatas(sort) {

	      var self = this;
	      eventModule.getHomeDatas(function (ret) {
	        var GET_URL_List = ret.main_url + sort;
	        var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=' + ret.platform + '&version=' + ret.version + '&container_id=' + ret.container_id;

	        stream.fetch({
	          method: 'POST',
	          url: GET_URL_List,
	          body: BODY_URL,
	          type: 'json'
	        }, function (ret) {
	          if (!ret.ok) {
	            self.isshow = 0;
	          } else {
	            var dic = ret.data;


	            self.rows = dic.list;
	            var array = dic.list;

	            if (array.length == 0) {
	              self.isshow = 0;
	            } else {
	              self.isshow = 1;
	            }
	          }
	        }, function (response) {
	          self.isshow = 0;
	        });
	      });
	    },

	    getQueryString: function getQueryString(url, name) {

	      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	      var r = url.split("?")[1].match(reg);
	      if (r != null) return unescape(r[2]);return null;
	    },
	    gettimes: function gettimes(starttime) {
	      var date = new Date(starttime * 1000);

	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var hour = date.getHours();
	      var minutes = date.getMinutes();
	      return year + '.' + month + '.' + day + '   ' + hour + ":" + minutes;
	    },
	    getscore: function getscore(money, score, unit) {
	      var string = '';
	      if (money == 0) {
	        string = this.sort + score + unit;
	      } else {
	        string = this.sort + money + unit;
	      }
	      return string;
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);