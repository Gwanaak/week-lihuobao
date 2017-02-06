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

	__weex_define__('@weex-component/9451bb38379e255ad62f58d49b55364d', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/9451bb38379e255ad62f58d49b55364d',undefined,undefined)

/***/ },
/* 1 */
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
	      "type": "div",
	      "style": {
	        "alignItems": "center"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.imageurl}
	          },
	          "classList": [
	            "main-image"
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "textlabel1"
	          ],
	          "attr": {
	            "value": function () {return this.titlestr}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "textlabel2"
	          ],
	          "attr": {
	            "value": function () {return this.promptstr}
	          }
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/telltoFroend@2x.png"
	          },
	          "classList": [
	            "tell-button"
	          ],
	          "events": {
	            "click": "didclickshare"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "marginTop": 10,
	        "backgroundColor": "rgb(215,215,215)",
	        "height": 60,
	        "justifyContent": "center"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "left-icon"
	          ],
	          "attr": {
	            "value": "幸运星"
	          }
	        }
	      ]
	    },
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "style": {
	        "width": 750
	      },
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
	              "style": {
	                "flexDirection": "row",
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "icon-image"
	                  ],
	                  "attr": {
	                    "src": function () {return this.getIconImg(this.row.user_id)}
	                  }
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "marginLeft": 10
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row",
	                        "marginTop": 3,
	                        "alignItems": "center"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "namelabel"
	                          ],
	                          "attr": {
	                            "value": function () {return this.row.name}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "datelabel"
	                          ],
	                          "attr": {
	                            "value": function () {return this.getdates(this.row.time)}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "timelabel"
	                          ],
	                          "attr": {
	                            "value": function () {return this.gettimes(this.row.time)}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "titlelabel"
	                      ],
	                      "attr": {
	                        "value": function () {return this.row.desc}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "scorelabel"
	                  ],
	                  "attr": {
	                    "value": function () {return this.getScore(this.row.rank_score)}
	                  }
	                }
	              ]
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
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "cell": {
	    "width": 750
	  },
	  "main-image": {
	    "width": 750,
	    "height": 263
	  },
	  "textlabel1": {
	    "marginTop": 16,
	    "fontSize": 34,
	    "color": "#FFA500"
	  },
	  "textlabel2": {
	    "marginTop": 16,
	    "fontSize": 24,
	    "color": "#000000"
	  },
	  "tell-button": {
	    "marginTop": 16,
	    "width": 320,
	    "height": 94
	  },
	  "left-icon": {
	    "marginLeft": 16,
	    "borderLeftWidth": 4,
	    "borderLeftColor": "#ffcc00",
	    "paddingLeft": 10,
	    "fontSize": 26,
	    "color": "#808080",
	    "fontWeight": "bold"
	  },
	  "icon-image": {
	    "width": 100,
	    "height": 100,
	    "marginLeft": 8,
	    "marginTop": 10
	  },
	  "namelabel": {
	    "lines": 1,
	    "width": 120,
	    "fontSize": 32,
	    "color": "#000000",
	    "fontWeight": "bold"
	  },
	  "datelabel": {
	    "marginLeft": 50,
	    "color": "#808080",
	    "fontSize": 22
	  },
	  "timelabel": {
	    "marginLeft": 20,
	    "color": "#808080",
	    "fontSize": 22
	  },
	  "titlelabel": {
	    "marginTop": 20,
	    "color": "#808080",
	    "fontSize": 28,
	    "maxWidth": 450,
	    "textOverflow": "ellipsis",
	    "lines": 1
	  },
	  "scorelabel": {
	    "position": "absolute",
	    "top": 32,
	    "right": 20,
	    "fontSize": 36,
	    "color": "#FFA500",
	    "fontWeight": "bold"
	  },
	  "line": {
	    "marginLeft": 30,
	    "marginTop": 10,
	    "backgroundColor": "rgb(210,210,210)",
	    "height": 1
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var clickModule = __weex_require__('@weex-module/didclickshare');
	var stream = __weex_require__('@weex-module/stream');
	var getluckstar_url = 'http://oss.aliyuncs.com/mingstatic/lottery/lucky_star/lucky_star_list.json';

	module.exports = {
	    created: function created() {
	        var bundleUrlStr = this.$getConfig().bundleUrl;
	        var bundleUrl = decodeURIComponent(bundleUrlStr);
	        this.scorename = this.getQueryString(bundleUrl, 'scorename');
	        this.titlestr = this.getQueryString(bundleUrl, 'title');
	        this.promptstr = this.getQueryString(bundleUrl, 'prompt');
	        var imgurl = this.getQueryString(bundleUrl, 'appsign');
	        if (imgurl == 0) {
	            this.imageurl = 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/bg_ad_checkin@2x.jpg';
	        } else {
	            this.imageurl = 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/bg_ad_checkin_finished.png';
	        }
	    },

	    ready: function ready() {

	        this.getListDatas();
	    },

	    data: function () {return {
	        rows: [],
	        imageurl: '',
	        titlestr: '',
	        promptstr: '',
	        scorename: ''
	    }},

	    methods: {

	        getListDatas: function getListDatas() {

	            var self = this;
	            stream.fetch({
	                method: 'GET',
	                url: getluckstar_url,
	                type: 'json'
	            }, function (ret) {
	                if (!ret.ok) {} else {
	                    var dic = ret.data;
	                    self.rows = dic.list;
	                }
	            }, function (response) {});
	        },
	        getQueryString: function getQueryString(url, name) {

	            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	            var r = url.split("?")[1].match(reg);
	            if (r != null) return unescape(r[2]);return null;
	        },
	        getIconImg: function getIconImg(user_id) {

	            return 'http://oss.aliyuncs.com/mingstatic/userpage/headimg/' + user_id;
	        },
	        getScore: function getScore(rank_score) {
	            return rank_score + this.scorename;
	        },
	        getdates: function getdates(starttime) {
	            var date = new Date(starttime * 1000);

	            var year = date.getFullYear();
	            var month = date.getMonth() + 1;
	            var date = date.getDate();
	            return month + "." + date;
	        },
	        gettimes: function gettimes(starttime) {
	            var date = new Date(starttime * 1000);

	            var hour = date.getHours();
	            var minutes = date.getMinutes();
	            return hour + ":" + minutes;
	        },
	        didclickshare: function didclickshare() {

	            clickModule.didClickShareButton();
	        }

	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);