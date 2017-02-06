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
	var __weex_template__ = __webpack_require__(5)
	var __weex_style__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(7)

	__weex_define__('@weex-component/01dcfb0374c3529387708b059120bf68', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/01dcfb0374c3529387708b059120bf68',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/doingcell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
	  "type": "div",
	  "style": {
	    "flexDirection": "column",
	    "width": 750
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "cell"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "style": {
	            "width": 160,
	            "height": 160
	          },
	          "attr": {
	            "src": function () {return this.getIcon(this.row.task_id)}
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginLeft": 20,
	            "flexDirection": "column"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text1"
	              ],
	              "attr": {
	                "value": function () {return this.row.name}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text2"
	              ],
	              "attr": {
	                "value": function () {return this.getType(this.row.categorylevel2_id)}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text3"
	              ],
	              "attr": {
	                "value": function () {return this.getMoney(this.row.tiptype_id,this.row.tip,this.row.score,this.row.src_container_id)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "position": "absolute",
	            "right": 50,
	            "bottom": 20,
	            "flexDirection": "column",
	            "alignItems": "center"
	          },
	          "shown": function () {return this.sort=='getUserTaskDoing'},
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text4"
	              ],
	              "attr": {
	                "value": function () {return '剩余' + (this.getlivetime(this.row.livetime)) + '分钟'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text5"
	              ],
	              "attr": {
	                "value": "继续完成"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "position": "absolute",
	            "right": 50
	          },
	          "shown": function () {return this.sort=='getUserTaskExamining'},
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 160,
	                "height": 76,
	                "marginTop": 40
	              },
	              "attr": {
	                "src": "http://exposs.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/ic_mine_auditing.png"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "position": "absolute",
	            "right": 50
	          },
	          "shown": function () {return this.sort=='getUserTaskPass'},
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 160,
	                "height": 76,
	                "marginTop": 40
	              },
	              "attr": {
	                "src": "http://exposs.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/ic_mine_pass.png"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "position": "absolute",
	            "right": 50
	          },
	          "shown": function () {return this.sort=='getUserTaskUnpass'},
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 200,
	                "height": 80,
	                "marginTop": 40
	              },
	              "attr": {
	                "src": function () {return this.getUnpassImage(this.row.categorylevel1_id)}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "appealtext"
	              ],
	              "style": {
	                "backgroundColor": function () {return this.getbackcolor(this.row.complain_status)}
	              },
	              "events": {
	                "click": function ($event) {this.clickappealbutton(this.row,$event)}
	              },
	              "attr": {
	                "value": function () {return this.row.complain_status==0?'申诉':'已申诉'}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "style": {
	        "backgroundColor": "rgb(200,200,200)",
	        "height": 1,
	        "marginLeft": 16
	      }
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "cell": {
	    "flexDirection": "row",
	    "padding": 10
	  },
	  "text1": {
	    "marginTop": 8,
	    "color": "rgb(102,102,102)",
	    "fontSize": 32
	  },
	  "text2": {
	    "marginTop": 16,
	    "textAlign": "center",
	    "alignItems": "center",
	    "maxWidth": 200,
	    "padding": 5,
	    "fontSize": 26,
	    "borderRadius": 8,
	    "borderWidth": 2,
	    "borderColor": "#808080"
	  },
	  "text3": {
	    "marginTop": 16,
	    "color": "#FF0000",
	    "fontSize": 30,
	    "fontWeight": "bold"
	  },
	  "text4": {
	    "color": "#FF0000",
	    "fontSize": 27
	  },
	  "text5": {
	    "marginTop": 10,
	    "paddingTop": 13,
	    "paddingLeft": 16,
	    "paddingRight": 16,
	    "color": "#FFFFFF",
	    "fontSize": 30,
	    "backgroundColor": "rgb(242,166,59)",
	    "borderRadius": 8,
	    "height": 60
	  },
	  "appealtext": {
	    "width": 120,
	    "height": 50,
	    "position": "absolute",
	    "right": -35,
	    "bottom": -46,
	    "textAlign": "center",
	    "paddingTop": 9,
	    "borderRadius": 8,
	    "color": "#FFFFFF"
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var tipunitstr = '金币';
	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/mytaskevent');
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

	    110: '与产品合拍',
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
	module.exports = {
	    data: function () {return {
	        scorename: '',
	        environment: '',
	        row: {},
	        sort: '',
	        branddict: {}
	    }},
	    ready: function ready() {

	        var self = this;
	        eventModule.getBrandMessage(function (ret) {

	            self.branddict = ret;
	        });
	    },
	    methods: {
	        getUnpassImage: function getUnpassImage(categorylevel1_id) {
	            var iconurl = 'http://exposs.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/ic_mine_answer_incorrect.png';
	            if (categorylevel1_id == 1) {
	                iconurl = 'http://exposs.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/ic_mine_photo_noclear.png';
	            } else if (categorylevel1_id == 2) {
	                iconurl = 'http://exposs.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/ic_mine_answer_incorrect.png';
	            } else if (categorylevel1_id == 3) {
	                iconurl = 'http://exposs.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/ic_mine_share_notpass.png';
	            } else {
	                iconurl = 'http://exposs.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/ic_mine_ticket_notpass.png';
	            }

	            return iconurl;
	        },
	        getType: function getType(type) {
	            var typestr = typemap[type];
	            if (typestr) {
	                return typemap[type];
	            } else {
	                return '其他';
	            }
	        },
	        getMoney: function getMoney(tiptype, tip, score, containerid) {

	            var brandstr = this.branddict[containerid];
	            if (brandstr == undefined) {
	                brandstr = '积分';
	            }

	            var tipstr = '';

	            if (tip == 0) {
	                tipstr = score + brandstr;
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
	        getIcon: function getIcon(task_id) {
	            return 'http://oss.aliyuncs.com/' + this.environment + '/image/task_list_thumb/' + task_id;
	        },
	        getlivetime: function getlivetime(livetime) {
	            var time = livetime / 60 + 1;
	            return parseInt(time);
	        },
	        getbackcolor: function getbackcolor(complain_status) {
	            if (complain_status == 0) {
	                return 'rgb(247,206,70)';
	            } else {
	                return 'rgb(226,226,226)';
	            }
	        },
	        clickappealbutton: function clickappealbutton(row) {
	            if (row.complain_status == 0) {
	                clickModule.didClickAppealButton(row);
	            } else {}
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 5 */
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
	                "width": 60,
	                "height": 60,
	                "color": "#FFA500"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginLeft": 0,
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
	            "cell"
	          ],
	          "repeat": {
	            "expression": function () {return this.rows},
	            "value": "row"
	          },
	          "events": {
	            "click": function ($event) {this.clcikcell(this.sort,this.row,$event)}
	          },
	          "children": [
	            {
	              "type": "doingcell",
	              "attr": {
	                "row": function () {return this.row},
	                "environment": function () {return this.environment},
	                "sort": function () {return this.sort},
	                "scorename": function () {return this.scorename}
	              }
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
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "refresh": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "width": 750,
	    "height": 40
	  },
	  "list": {
	    "width": 750
	  },
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
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/mytaskevent');
	var stream = __weex_require__('@weex-module/stream');

	__webpack_require__(1);

	module.exports = {
	  created: function created() {
	    var bundleUrl = this.$getConfig().bundleUrl;

	    var sortstr = this.getQueryString(bundleUrl, 'sort');

	    this.sort = sortstr;
	    nativeLog("sort:--------" + sortstr + bundleUrl);

	    this.requestListDatas(sortstr);
	  },

	  ready: function ready() {},

	  data: function () {return {
	    displayRefresh: 'show',
	    refreshstr: '下拉刷新',
	    rows: [],
	    sort: '',
	    isshow: 1,
	    environment: '',
	    test: ''
	  }},

	  methods: {
	    requestListDatas: function requestListDatas(sort) {

	      var self = this;
	      eventModule.getHomeDatas(function (ret) {
	        self.environment = ret.environment;
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
	            self.rows = dic.tasks;

	            self.displayRefresh = 'hide';
	            self.refreshstr = '下拉刷新';

	            var array = dic.tasks;

	            if (array.length == 0) {
	              self.isshow = 0;
	            } else {
	              self.isshow = 1;
	            }
	          }
	        }, function (response) {});
	      });
	    },

	    getQueryString: function getQueryString(url, name) {

	      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	      var r = url.split("?")[1].match(reg);
	      if (r != null) return unescape(r[2]);return null;
	    },
	    clcikcell: function clcikcell(sort, row) {
	      if (sort == 'getUserTaskDoing') {

	        clickModule.didClickCell(row);
	      } else {}
	    },
	    handleRefresh: function handleRefresh(e) {
	      var self = this;
	      self.displayRefresh = 'show';
	      self.refreshstr = '正在刷新';

	      this.requestListDatas(this.sort);
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);