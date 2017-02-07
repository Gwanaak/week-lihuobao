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
	__webpack_require__(9)
	__webpack_require__(13)
	var __weex_template__ = __webpack_require__(24)
	var __weex_style__ = __webpack_require__(25)
	var __weex_script__ = __webpack_require__(26)

	__weex_define__('@weex-component/ef4323fbcbc9039f7a001c35cbd14066', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/ef4323fbcbc9039f7a001c35cbd14066',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)
	var __weex_template__ = __webpack_require__(6)
	var __weex_style__ = __webpack_require__(7)
	var __weex_script__ = __webpack_require__(8)

	__weex_define__('@weex-component/doctor-headview', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(3)
	var __weex_style__ = __webpack_require__(4)
	var __weex_script__ = __webpack_require__(5)

	__weex_define__('@weex-component/doctor-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 3 */
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
	        "color": function () {return this.titlecolor},
	        "fontWeight": "bold"
	      },
	      "attr": {
	        "value": function () {return this.icontitle}
	      }
	    }
	  ]
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "icontitle": {
	    "marginTop": 10,
	    "fontSize": 24
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var clickbtnModule = __weex_require__('@weex-module/doctorclickevent');

	module.exports = {
	    data: function () {return {
	        btndict: {},
	        iconurl: '',
	        icontitle: '',
	        btnwidth: 80,
	        btnradius: 40,
	        titlecolor: 'black'
	    }},
	    methods: {

	        clickotherkindbtn: function clickotherkindbtn(e) {

	            clickbtnModule.didClickButton(e);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 6 */
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
	          "type": "doctor-button",
	          "classList": [
	            "othersmallkind"
	          ],
	          "attr": {
	            "iconurl": function () {return this.btn.iconurl},
	            "icontitle": function () {return this.btn.icontitle},
	            "btndict": function () {return this.btn},
	            "btnradius": "40",
	            "btnwidth": "80"
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
	  "otherkind": {
	    "marginTop": 20,
	    "paddingBottom": 20,
	    "flexDirection": "row",
	    "width": 750,
	    "flexWrap": "wrap",
	    "borderBottomWidth": 2,
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(2);

	module.exports = {
	  data: function () {return {
	    environment: '',
	    buttons: [{ iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_ganmaoIcon.png', icontitle: '感冒疾病', tag: 0, smallType: '11011' }, { iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_pifuIcon.png', icontitle: '皮肤疾病', tag: 1, smallType: '11012' }, { iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_manxingIcon.png', icontitle: '慢性疾病', tag: 2, smallType: '11013' }, { iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_ertongIcon.png', icontitle: '儿童疾病', tag: 3, smallType: '11014' }, { iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_fukeIcon.png', icontitle: '妇科疾病', tag: 4, smallType: '11015' }, { iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_wuguanIcon.png', icontitle: '五官疾病', tag: 5, smallType: '11016' }, { iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_xiaohuaIcon.png', icontitle: '消化疾病', tag: 6, smallType: '11017' }, { iconurl: 'http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_moreIcon.png', icontitle: '我的课程', tag: 7, smallType: '7' }]
	  }},
	  ready: function ready() {},
	  methods: {

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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(10)
	var __weex_style__ = __webpack_require__(11)
	var __weex_script__ = __webpack_require__(12)

	__weex_define__('@weex-component/doctor-buttonlabel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14)
	__webpack_require__(18)
	var __weex_template__ = __webpack_require__(21)
	var __weex_style__ = __webpack_require__(22)
	var __weex_script__ = __webpack_require__(23)

	__weex_define__('@weex-component/doctor-cell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(15)
	var __weex_style__ = __webpack_require__(16)
	var __weex_script__ = __webpack_require__(17)

	__weex_define__('@weex-component/doctor-label', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "imglabel"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "marginLeft": 20,
	        "width": 26,
	        "height": 26
	      },
	      "attr": {
	        "src": function () {return this.imgurl}
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 26,
	        "color": function () {return this.fontcolor},
	        "marginLeft": 10,
	        "marginRight": 20
	      },
	      "attr": {
	        "value": function () {return this.labeltitle}
	      }
	    }
	  ]
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	  "imglabel": {
	    "height": 40,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "backgroundColor": "rgb(125,125,125)",
	    "borderRadius": 20
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	   data: function () {return {
	      imgurl: '',
	      labeltitle: '',
	      fontcolor: 'grey'
	   }}
	};}
	/* generated by weex-loader */


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(19)
	var __weex_script__ = __webpack_require__(20)

	__weex_define__('@weex-component/doctor-starview', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "row"
	  },
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "width": 26,
	        "height": 26,
	        "marginLeft": 5
	      },
	      "attr": {
	        "src": function () {return this.imgurl}
	      },
	      "repeat": function () {return this.getImgurlNums(this.num)}
	    }
	  ]
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    num: 5
	  }},
	  methods: {

	    getImgurlNums: function getImgurlNums(num) {
	      var intnum = parseInt(num / 10);
	      if (intnum % 2 != 0) {
	        intnum = intnum + 1;
	      }
	      var nums = [];
	      for (var i = 0; i < 5; i++) {
	        if (i < intnum / 2) {
	          nums.push({ imgurl: 'http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/yellowStar.png' });
	        } else {
	          nums.push({ imgurl: 'http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/grayStar.png' });
	        }
	      }
	      return nums;
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 21 */
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
	        "docitems"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "position": "relative"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.getMainImage(this.row.task_id)}
	              },
	              "style": {
	                "width": 730,
	                "height": 400,
	                "flex": 5,
	                "marginLeft": 10,
	                "marginRight": 10
	              }
	            },
	            {
	              "type": "doctor-label",
	              "attr": {
	                "labeltitle": function () {return this.getVideoTime(this.row.video_length)},
	                "imgurl": function () {return this.docflagimage},
	                "fontcolor": "white"
	              },
	              "style": {
	                "position": "absolute",
	                "right": 15,
	                "top": 15
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginLeft": 20,
	            "flexDirection": "row",
	            "flex": 1,
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "smalldoctype"
	              ],
	              "style": {
	                "backgroundColor": function () {return this.getTypeColor(this.row.categorylevel3_id)}
	              },
	              "attr": {
	                "value": function () {return this.getType(this.row.categorylevel3_id)}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "color": "#808080",
	                "fontSize": 28,
	                "marginLeft": 20
	              },
	              "attr": {
	                "value": function () {return this.getStartTime(this.row.starttime)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginLeft": 20,
	            "flexDirection": "row",
	            "flex": 1,
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "doctitle"
	              ],
	              "attr": {
	                "value": function () {return this.row.name}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "docflag"
	              ],
	              "shown": function () {return this.isShowFlag(this.row.listtag)},
	              "attr": {
	                "value": function () {return this.getFlag(this.row.listtag)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "doccontent"
	          ],
	          "attr": {
	            "value": function () {return this.row.content}
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "marginLeft": 20
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#000000",
	                "fontSize": 26,
	                "textAlign": "center"
	              },
	              "attr": {
	                "value": function () {return (!!this.row.participants?this.row.participants:'0') + '人观看'}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "color": "#000000",
	                "fontSize": 26,
	                "textAlign": "center",
	                "marginLeft": 20
	              },
	              "attr": {
	                "value": "满意度"
	              }
	            },
	            {
	              "type": "doctor-starview",
	              "attr": {
	                "num": function () {return this.row.star}
	              },
	              "style": {
	                "marginLeft": 20
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  "docitems": {
	    "paddingBottom": 16,
	    "borderBottomWidth": 22,
	    "borderColor": "rgb(235,233,241)",
	    "flexDirection": "column",
	    "width": 750,
	    "height": 700
	  },
	  "doctitle": {
	    "maxWidth": 500,
	    "fontSize": 34,
	    "color": "#000000",
	    "textOverflow": "ellipsis",
	    "lines": 1
	  },
	  "docflag": {
	    "width": 60,
	    "height": 26,
	    "marginLeft": 20,
	    "backgroundColor": "#FF0000",
	    "borderRadius": 13,
	    "fontSize": 20,
	    "textAlign": "center",
	    "justifyContent": "center",
	    "color": "#FFFFFF"
	  },
	  "doccontent": {
	    "marginLeft": 20,
	    "width": 670,
	    "fontSize": 28,
	    "color": "#808080",
	    "flex": 1,
	    "textOverflow": "ellipsis",
	    "lines": 2
	  },
	  "smalldoctype": {
	    "width": 160,
	    "fontSize": 28,
	    "color": "#FFFFFF",
	    "textAlign": "center",
	    "borderRadius": 6,
	    "justifyContent": "center",
	    "height": 44,
	    "padding": 8
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(14);
	__webpack_require__(18);

	var typemap = {

	    11011: '感冒疾病',
	    11012: '皮肤疾病',
	    11013: '慢性疾病',
	    11014: '儿童疾病',
	    11015: '妇科疾病',
	    11016: '五官疾病',
	    11017: '消化系统'
	};
	var typecolormap = {
	    11011: 'rgb(235,120,85)',
	    11012: 'rgb(169,212,113)',
	    11013: 'rgb(247,206,89)',
	    11014: 'rgb(110,160,239)',
	    11015: 'rgb(224,123,251)',
	    11016: 'rgb(185,166,238)',
	    11017: 'rgb(131,215,243)'
	};
	module.exports = {

	    data: function () {return {
	        environment: '',
	        row: {},
	        color: 'orange',
	        doctime: '2016.07.06',
	        docflagimage: 'http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_videoIcon.png'
	    }},
	    methods: {

	        getMainImage: function getMainImage(tid) {

	            return 'http://oss.aliyuncs.com/' + this.environment + '/image/task_list_thumb/' + tid;
	        },
	        getType: function getType(type) {

	            return typemap[type];
	        },
	        getTypeColor: function getTypeColor(type) {

	            return typecolormap[type];
	        },
	        getStartTime: function getStartTime(starttime) {
	            var date = new Date(starttime * 1000);

	            var year = date.getFullYear();
	            var month = date.getMonth() + 1;
	            var date = date.getDate();
	            return year + "." + month + "." + date;
	        },
	        getFlag: function getFlag(listtag) {
	            var flagstr = '';
	            if (listtag == 1) {
	                flagstr = 'NEW';
	            } else if (listtag == 2) {
	                flagstr = 'HOT';
	            } else if (listtag == 3) {
	                flagstr = '精品';
	            } else {}
	            return flagstr;
	        },
	        isShowFlag: function isShowFlag(listtag) {
	            if (listtag == 1 || listtag == 2 || listtag == 3) {
	                return true;
	            } else {
	                return false;
	            }
	        },
	        getVideoTime: function getVideoTime(times) {
	            var second = parseInt(times);
	            var minute = 0;
	            var hour = 0;
	            if (second > 60) {
	                minute = parseInt(times / 60);
	                second = parseInt(times % 60);
	            }
	            if (minute > 60) {
	                hour = parseInt(minute / 60);
	                minute = parseInt(minute % 60);
	            }
	            var timestr = hour + "\'" + minute + "\'" + second + "\"";
	            if (hour == 0) {
	                timestr = minute + "\'" + second + "\"";
	            }
	            return timestr;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 24 */
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
	                "width": 70,
	                "height": 70,
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
	              "type": "doctor-headview"
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "shown": function () {return this.show},
	          "style": {
	            "marginTop": 10
	          },
	          "children": [
	            {
	              "type": "doctor-buttonlabel",
	              "attr": {
	                "groupiconurl": "http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doctors_Icon.png",
	                "grouptitle": "精品课程"
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
	              "type": "doctor-cell",
	              "attr": {
	                "row": function () {return this.row},
	                "environment": function () {return this.environment}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "shown": function () {return this.shownew},
	          "style": {
	            "marginTop": 10
	          },
	          "children": [
	            {
	              "type": "doctor-buttonlabel",
	              "attr": {
	                "groupiconurl": "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_icon2.png",
	                "grouptitle": "最新课程"
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
	            "expression": function () {return this.newrows},
	            "value": "row"
	          },
	          "children": [
	            {
	              "type": "doctor-cell",
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
/* 25 */
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
	    "height": 70
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(9);
	__webpack_require__(1);
	__webpack_require__(13);

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/doctorclickevent');
	var stream = __weex_require__('@weex-module/stream');

	module.exports = {
	  creat: function creat() {},

	  ready: function ready() {

	    this.requestHomeDatas();
	  },
	  data: function () {return {
	    test: '',
	    environment: '',
	    displayRefresh: 'show',
	    refreshstr: '下拉刷新',
	    rows: [],
	    newrows: [],
	    size: 27,
	    show: 'true',
	    shownew: 'true'
	  }},

	  methods: {
	    requestHomeDatas: function requestHomeDatas() {

	      var self = this;
	      eventModule.getHomeDatas(function (ret) {
	        self.environment = ret.environment;
	        var GET_URL_List = ret.main_url + 'getCourseHomeList';
	        var BODY_URL = 'user_id=' + ret.uid + '&sid=' + ret.sid + '&_t=' + ret._t + '&platform_id=' + ret.platform + '&version=' + ret.version + '&container_id=' + ret.container_id + '&categorylevel1_id=15&categorylevel2_id=0&categorylevel3_id=0';

	        stream.fetch({
	          method: 'POST',
	          url: GET_URL_List,
	          body: BODY_URL,
	          type: 'json'
	        }, function (ret) {
	          if (!ret.ok) {} else {
	            var dic = ret.data;

	            var array = dic.tasks;

	            self.classification(array);

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
	      self.rows = [];
	      self.newrows = [];
	      self.requestHomeDatas();
	    },

	    clcikmanagecell: function clcikmanagecell(e) {

	      clickModule.didClickCell(e);
	    },
	    classification: function classification(arr) {
	      var self = this;
	      for (var i = 0; i < arr.length; i++) {
	        var dict = arr[i];
	        if (dict.is_recommend) {
	          self.rows.push(dict);
	        } else {
	          self.newrows.push(dict);
	        }
	      }

	      if (self.rows.length == 0) {
	        self.show = 'false';
	      }
	      if (self.newrows.length == 0) {
	        self.shownew = 'false';
	      }
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);