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
	var __weex_template__ = __webpack_require__(9)
	var __weex_style__ = __webpack_require__(10)
	var __weex_script__ = __webpack_require__(11)

	__weex_define__('@weex-component/6f68796b6e09e124106cbb38004cd474', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/6f68796b6e09e124106cbb38004cd474',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/lhb-studycell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
/* 3 */
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
	    "fontSize": 35,
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
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
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
	    1120: '摄影大赛',

	    1217: '知识竞赛',
	    1711: '营业执照验证',
	    1712: '小票验证',
	    1713: '名片验证',
	    1411: '其他',
	    1511: '疾病培训',
	    1611: '随堂考试'

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
	        environment: '',
	        row: {},
	        branddict: {}
	    }},
	    ready: function ready() {

	        var self = this;
	        eventModule.getBrandMessage(function (ret) {

	            self.branddict = ret;
	        });
	    },

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
	        getType: function getType(type) {
	            var typestr = typemap[type];
	            if (typestr) {
	                return typemap[type];
	            } else {
	                return '其他';
	            }
	        },
	        getrightBtn: function getrightBtn(status, kind, type) {
	            var statusstr = '';

	            statusstr = rightbuttonstatus[status];

	            if (kind == 2) {
	                if (status == 0 || status == 1) {
	                    statusstr = '抢答';
	                }
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(6)
	var __weex_style__ = __webpack_require__(7)
	var __weex_script__ = __webpack_require__(8)

	__weex_define__('@weex-component/lhb-studykonwledgecell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
	              "type": "lhb-studycell",
	              "attr": {
	                "row": function () {return this.row},
	                "environment": function () {return this.environment},
	                "scorename": function () {return this.scorename}
	              },
	              "shown": function () {return this.row.categorylevel1_id!=15&&this.row.categorylevel2_id!=1217}
	            },
	            {
	              "type": "lhb-studykonwledgecell",
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
/* 10 */
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
	    "height": 60
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/didclickevent');
	var stream = __weex_require__('@weex-module/stream');

	__webpack_require__(1);
	__webpack_require__(5);

	module.exports = {
	  created: function created() {
	    var bundleUrl = this.$getConfig().bundleUrl;

	    var sortstr = this.getQueryString(bundleUrl, 'sort');
	    var categorylevel1_idstr = this.getQueryString(bundleUrl, 'categorylevel1_id');
	    this.sort = sortstr;
	    this.categorylevel1_id = categorylevel1_idstr;


	    this.requestListDatas(sortstr, categorylevel1_idstr);
	  },

	  ready: function ready() {},

	  data: function () {return {
	    rows: [],
	    displayRefresh: 'show',
	    refreshstr: '下拉刷新',
	    titlestr: '',
	    environment: '',
	    sort: '',
	    categorylevel1_id: ''
	  }},

	  methods: {
	    requestListDatas: function requestListDatas(sort, categorylevel1_id) {

	      var self = this;
	      eventModule.getFourKindBaseInfo(function (ret) {
	        self.environment = ret.environment;
	        var GET_URL_List = ret.list_url;
	        var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=' + ret.platform + '&version=' + ret.version + '&container_id=' + ret.container_id + '&sorts=' + sort + '&categorylevel1_id=' + categorylevel1_id;

	        stream.fetch({
	          method: 'POST',
	          url: GET_URL_List,
	          body: BODY_URL,
	          type: 'json'
	        }, function (ret) {
	          if (!ret.ok) {} else {
	            var dic = ret.data;


	            self.rows = dic[sort];

	            self.displayRefresh = 'hide';
	            self.refreshstr = '下拉刷新';
	          }
	        }, function (response) {});
	      });
	    },

	    getQueryString: function getQueryString(url, name) {

	      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	      var r = url.split("?")[1].match(reg);
	      if (r != null) return unescape(r[2]);return null;
	    },

	    handleRefresh: function handleRefresh(e) {
	      var self = this;
	      self.displayRefresh = 'show';
	      self.refreshstr = '正在刷新';

	      self.requestListDatas(this.sort, this.categorylevel1_id);
	    },
	    clcikmanagecell: function clcikmanagecell(e) {

	      clickModule.didClickManageCell(e);
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);