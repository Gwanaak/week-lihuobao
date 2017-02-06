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
	__webpack_require__(13)
	__webpack_require__(14)
	__webpack_require__(21)
	__webpack_require__(25)
	__webpack_require__(43)
	var __weex_template__ = __webpack_require__(47)
	var __weex_style__ = __webpack_require__(48)
	var __weex_script__ = __webpack_require__(49)

	__weex_define__('@weex-component/a67a6ab4d20bb1b678f9f77f760d7cd0', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/a67a6ab4d20bb1b678f9f77f760d7cd0',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/jwy-slider', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/didclickevent');
	var stream = __weex_require__('@weex-module/stream');

	var pictureurl = "http://oss.aliyuncs.com/mingstatic/";

	module.exports = {
	  data: function () {return {

	    indicatormargintop: "230",
	    autoplay: '',
	    items: []
	  }},
	  methods: {

	    getbannerimage: function getbannerimage(image) {
	      return pictureurl + image;
	    },

	    clickbanner: function clickbanner(e) {

	      clickModule.didClickEvent(e);
	    }
	  },

	  ready: function ready() {
	    var self = this;
	    eventModule.getHomeDatas(function (ret) {
	      var GET_URL_MobileBanner = 'http://ming.lihuobao.cn/mingop.php?m=getMobileBanner';

	      var BODY_URL = 'uid=' + ret.uid + '&' + 'sid=' + ret.sid + '&' + '_t=' + ret._t + '&platform=2&position=home&version=' + ret.version;

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

	__weex_define__('@weex-component/jwy-otherkindbuttons', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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

	__weex_define__('@weex-component/jwy-otherbutton', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "icontitle": {
	    "marginTop": 10,
	    "fontSize": 24
	  }
	}

/***/ },
/* 9 */
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
/* 10 */
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
	      "children": [
	        {
	          "type": "jwy-otherbutton",
	          "classList": [
	            "othersmallkind"
	          ],
	          "attr": {
	            "iconurl": function () {return this.getbtnImgurl(this.btn.image)},
	            "icontitle": function () {return this.btn.title},
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
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "otherkind": {
	    "flexDirection": "row",
	    "width": 750
	  },
	  "otherkindborder": {
	    "flex": 1,
	    "flexDirection": "column",
	    "paddingBottom": 16,
	    "borderWidth": 0.8,
	    "borderBottomWidth": 8,
	    "borderTopWidth": 0,
	    "borderColor": "rgb(237,237,237)"
	  },
	  "othersmallkind": {
	    "flex": 1,
	    "marginTop": 6
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(6);
	var eventModule = __weex_require__('@weex-module/requestevent');
	var stream = __weex_require__('@weex-module/stream');

	var btnimgurl = 'http://oss.aliyuncs.com/mingstatic/banner_task/image/';

	module.exports = {
	  data: function () {return {
	    buttons: []
	  }},
	  ready: function ready() {
	    var self = this;
	    eventModule.getHomeDatas(function (ret) {
	      var GET_URL_ActivityEntry = 'http://ming.lihuobao.cn/mingop.php?m=activityEntry';
	      var BODY_URL = 'uid=' + ret.uid + '&' + 'sid=' + ret.sid + '&' + '_t=' + ret._t + '&platform=2&version=' + ret.version;

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
	      return btnimgurl + image;
	    }

	  }

	};}
	/* generated by weex-loader */


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14)
	var __weex_template__ = __webpack_require__(18)
	var __weex_style__ = __webpack_require__(19)
	var __weex_script__ = __webpack_require__(20)

	__weex_define__('@weex-component/jwy-novicecell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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

	__weex_define__('@weex-component/jwy-groupbutton', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "jwy-groupbutton",
	      "attr": {
	        "groupiconurl": "http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_Newtask@2x.png",
	        "grouptitle": "新手认证"
	      },
	      "style": {
	        "borderBottomWidth": 1,
	        "borderBottomColor": "rgb(237,237,237)"
	      },
	      "shown": function () {return this.havedatas}
	    },
	    {
	      "type": "div",
	      "classList": [
	        "novice"
	      ],
	      "repeat": {
	        "expression": function () {return this.rows},
	        "value": "row"
	      },
	      "events": {
	        "click": function ($event) {this.clicknovicecell(this.row,$event)}
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "column",
	            "flex": 3
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#808080",
	                "fontSize": 28
	              },
	              "attr": {
	                "value": function () {return this.row.title}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 20,
	                "color": "#FF0000",
	                "fontSize": 26
	              },
	              "attr": {
	                "value": function () {return this.getMoney(this.row.tiptype,this.row.tip)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "button"
	          ],
	          "style": {
	            "marginTop": 10,
	            "backgroundColor": "#FFA500",
	            "flex": 1
	          },
	          "attr": {
	            "value": function () {return this.getStatus(this.row.status)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "novice": {
	    "flexDirection": "row",
	    "marginTop": 10,
	    "marginLeft": 20,
	    "marginRight": 20,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#D3D3D3"
	  },
	  "button": {
	    "width": 240,
	    "height": 60,
	    "marginRight": 20,
	    "fontSize": 28,
	    "textAlign": "center",
	    "borderRadius": 8,
	    "color": "#FFFFFF",
	    "flex": 1,
	    "justifyContent": "center",
	    "padding": 12
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/didclickevent');
	var stream = __weex_require__('@weex-module/stream');

	var tipunitstr = '金币';
	module.exports = {
	     data: function () {return {

	          havedatas: false,
	          rows: []

	     }},
	     methods: {

	          getMoney: function getMoney(tiptype, tip) {

	               var tipstr = '';
	               if (tiptype == 1) {
	                    tipstr = tip + '积分';
	               } else if (tiptype == 2) {
	                    tipstr = '赏' + tip / 100.0 + tipunitstr;
	               } else {
	                    tipstr = '赏金' + tip / 100.0 + '元';
	               }

	               return tipstr;
	          },
	          getStatus: function getStatus(status) {

	               var statusstr = '';
	               if (status == 0) {
	                    statusstr = '领取赏金';
	               } else {
	                    statusstr = '待审核';
	               }
	               return statusstr;
	          },
	          clicknovicecell: function clicknovicecell(e) {

	               clickModule.didClickNoviceCell(e);
	          }

	     },
	     ready: function ready() {
	          var self = this;
	          eventModule.getHomeDatas(function (ret) {
	               var GET_URL_NewbieTask = 'http://ming.lihuobao.cn/mingop.php?m=getNewbieTask';
	               var BODY_URL = 'uid=' + ret.uid + '&' + 'sid=' + ret.sid + '&' + '_t=' + ret._t + '&platform=2&version=' + ret.version;

	               stream.fetch({
	                    method: 'POST',
	                    url: GET_URL_NewbieTask,
	                    body: BODY_URL,
	                    type: 'json'
	               }, function (ret) {
	                    if (!ret.ok) {} else {
	                         var dic = ret.data;
	                         self.rows = dic.tasks;
	                         self.havedatas = true;
	                    }
	               }, function (response) {});
	          });
	     }
	};}
	/* generated by weex-loader */


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(22)
	var __weex_style__ = __webpack_require__(23)
	var __weex_script__ = __webpack_require__(24)

	__weex_define__('@weex-component/jwy-managecell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 22 */
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
	            "src": function () {return this.geticonUrl(this.row.tid)}
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
	            "justifyContent": "space-between"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.row.title}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "type"
	              ],
	              "attr": {
	                "value": function () {return this.getType(this.row.type)}
	              }
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
	                "marginTop": 8
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 34,
	                    "color": "#FF0000",
	                    "flex": 1.5,
	                    "fontWeight": "bold"
	                  },
	                  "attr": {
	                    "value": function () {return this.getMoney(this.row.tiptype,this.row.tip,this.row.type)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontitle"
	                  ],
	                  "style": {
	                    "backgroundColor": "rgb(248,207,52)"
	                  },
	                  "shown": function () {return this.getisShow(this.row.kind,this.row.listtag,this.row.type)},
	                  "events": {
	                    "click": function ($event) {this.clickleftbutton(this.row,$event)}
	                  },
	                  "attr": {
	                    "value": function () {return this.getleftBtn(this.row.kind,this.row.listtag)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontitle"
	                  ],
	                  "style": {
	                    "backgroundColor": function () {return this.getrightBtncolor(this.row.status,this.row.type)}
	                  },
	                  "attr": {
	                    "value": function () {return this.getrightBtn(this.row.status,this.row.kind,this.row.type)}
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
	        "marginTop": 5,
	        "height": 45,
	        "flexDirection": "row",
	        "backgroundColor": "rgb(237,237,237)",
	        "alignItems": "center"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "participate"
	          ],
	          "attr": {
	            "value": function () {return (this.row.kind==11?'调研数':'参与人数') + ':' + (!!this.row.participants?this.row.participants:'0')}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "participate"
	          ],
	          "style": {
	            "backgroundColor": "rgb(237,237,237)"
	          },
	          "attr": {
	            "value": function () {return '剩余任务:' + (!!this.row.remain?this.row.remain:'0')}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "participate"
	          ],
	          "attr": {
	            "value": function () {return '地点:' + (this.row.lab_area)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 23 */
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
	    "borderRadius": 20
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
	    "borderWidth": 1,
	    "borderRadius": 10,
	    "borderColor": "#808080",
	    "color": "#000000",
	    "fontSize": 24,
	    "textAlign": "center",
	    "padding": 8,
	    "maxWidth": 190
	  },
	  "buttontitle": {
	    "height": 60,
	    "marginLeft": 20,
	    "fontSize": 30,
	    "textAlign": "center",
	    "borderRadius": 8,
	    "color": "#FFFFFF",
	    "flex": 1,
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
/* 24 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var clickModule = __weex_require__('@weex-module/didclickevent');

	var iconimageurl = 'http://oss.aliyuncs.com/mingstatic/image/task_list_thumb/';

	var tipunitstr = '金币';
	var typemap = {

	  5: '产品培训',
	  6: '市场调研',
	  7: '勤分享',
	  8: '勤分享',
	  9: '做调研',
	  10: '常规调研',

	  311: '疗程用药调研',
	  312: '联合用药调研',
	  313: '进货单调研',
	  314: '保修卡调研',

	  211: '产品知识',
	  212: '养生常识',
	  213: '行业资讯',
	  214: '销售技能',
	  215: '职场须知',

	  110: '与产品合拍',
	  111: '拍摄货架',
	  112: '拍摄堆头',
	  113: '拍摄POP',
	  114: '拍摄端架',
	  115: '拍摄橱窗',
	  116: '拍摄海报',
	  117: '拍摄价签',
	  118: '与产品合拍',
	  119: '拍摄POP',
	  120: '摄影大赛'

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
	    row: {}
	  }},
	  methods: {

	    geticonUrl: function geticonUrl(tid) {

	      return iconimageurl + tid;
	    },
	    getMoney: function getMoney(tiptype, tip) {

	      var tipstr = '';
	      if (tiptype == 1) {
	        tipstr = tip + '积分';
	      } else if (tiptype == 2) {
	        tipstr = '赏' + tip / 100.0 + tipunitstr;
	      } else {
	        tipstr = '赏' + tip / 100.0 + '元';
	      }

	      if (tip == 0) {
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

	    clickleftbutton: function clickleftbutton(e) {

	      clickModule.didClickLeftButton(e);
	    }

	  }

	};}
	/* generated by weex-loader */


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14)
	__webpack_require__(26)
	__webpack_require__(30)
	var __weex_template__ = __webpack_require__(33)
	var __weex_style__ = __webpack_require__(34)
	var __weex_script__ = __webpack_require__(35)

	__weex_define__('@weex-component/jwy-doctorcell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(27)
	var __weex_style__ = __webpack_require__(28)
	var __weex_script__ = __webpack_require__(29)

	__weex_define__('@weex-component/jwy-imagelabel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 27 */
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
/* 28 */
/***/ function(module, exports) {

	module.exports = {
	  "imglabel": {
	    "height": 40,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "backgroundColor": "rgb(127,127,127)",
	    "borderRadius": 20
	  }
	}

/***/ },
/* 29 */
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(31)
	var __weex_script__ = __webpack_require__(32)

	__weex_define__('@weex-component/jwy-starstar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ },
/* 31 */
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
/* 32 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    num: 5
	  }},
	  methods: {

	    getImgurlNums: function getImgurlNums(num) {
	      var intnum = parseInt(num);
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
/* 33 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "jwy-groupbutton",
	      "attr": {
	        "groupiconurl": "http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doctors_Icon.png",
	        "grouptitle": "精品课程"
	      }
	    },
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
	                "src": function () {return this.getMainImage(this.row.tid)}
	              },
	              "style": {
	                "width": 710,
	                "height": 400,
	                "flex": 5,
	                "marginLeft": 10,
	                "marginRight": 10
	              }
	            },
	            {
	              "type": "jwy-imagelabel",
	              "attr": {
	                "labeltitle": function () {return this.getVideoTime(this.row.video_length)},
	                "imgurl": function () {return this.docflagimage},
	                "fontcolor": "white"
	              },
	              "style": {
	                "position": "absolute",
	                "right": 40,
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
	                "backgroundColor": function () {return this.getTypeColor(this.row.type)}
	              },
	              "attr": {
	                "value": function () {return this.getType(this.row.type)}
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
	                "value": function () {return this.row.title}
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
	            "backgroundColor": "rgb(237,237,237)",
	            "flexDirection": "row",
	            "flex": 1
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "lookernumber"
	              ],
	              "style": {
	                "borderRightColor": "#D3D3D3",
	                "borderRightWidth": 2
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
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "lookernumber"
	              ],
	              "style": {
	                "borderLeftColor": "#D3D3D3",
	                "borderLeftWidth": 2,
	                "flexDirection": "row"
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
	                    "value": "满意度"
	                  }
	                },
	                {
	                  "type": "jwy-starstar",
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
	  ]
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
	  "docitems": {
	    "paddingBottom": 10,
	    "borderWidth": 1,
	    "borderColor": "rgb(235,235,235)",
	    "flexDirection": "column",
	    "width": 730,
	    "height": 700,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "marginTop": 8
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
	    "padding": 3,
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
	  },
	  "lookernumber": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(36);
	__webpack_require__(40);

	var iconimageurl = 'http://oss.aliyuncs.com/mingstatic/image/task_list_thumb/';

	var typemap = {

	    511: '感冒疾病',
	    512: '皮肤疾病',
	    513: '慢性疾病',
	    514: '儿童疾病',
	    515: '妇科疾病',
	    516: '五官疾病',
	    517: '消化系统'
	};
	var typecolormap = {
	    511: 'rgb(235,120,85)',
	    512: 'rgb(169,212,113)',
	    513: 'rgb(247,206,89)',
	    514: 'rgb(110,160,239)',
	    515: 'rgb(224,123,251)',
	    516: 'rgb(185,166,238)',
	    517: 'rgb(131,215,243)'
	};
	module.exports = {

	    data: function () {return {
	        row: {},
	        color: 'orange',
	        doctime: '2016.07.06',
	        docflagimage: 'http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_videoIcon.png'
	    }},
	    methods: {

	        getMainImage: function getMainImage(tid) {

	            return iconimageurl + tid;
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
	                flagstr = 'new';
	            } else if (listtag == 2) {
	                flagstr = 'hot';
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(37)
	var __weex_style__ = __webpack_require__(38)
	var __weex_script__ = __webpack_require__(39)

	__weex_define__('@weex-component/Jwy-imagelabel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
/* 38 */
/***/ function(module, exports) {

	module.exports = {
	  "imglabel": {
	    "height": 40,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "backgroundColor": "rgb(127,127,127)",
	    "borderRadius": 20
	  }
	}

/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(41)
	var __weex_script__ = __webpack_require__(42)

	__weex_define__('@weex-component/Jwy-starstar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ },
/* 41 */
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
/* 42 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    num: 5
	  }},
	  methods: {

	    getImgurlNums: function getImgurlNums(num) {
	      var intnum = parseInt(num);
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(44)
	var __weex_style__ = __webpack_require__(45)
	var __weex_script__ = __webpack_require__(46)

	__weex_define__('@weex-component/jwy-knowledgecell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 44 */
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
	        "src": function () {return this.getMainImage(this.row.tid)}
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
	        "value": function () {return this.row.title}
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
/* 45 */
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
/* 46 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var iconimageurl = 'http://oss.aliyuncs.com/mingstatic/image/task_list_thumb/';

	var rewardimgurl = 'http://oss.aliyuncs.com/mingstatic/image/tiptype_icon/';

	module.exports = {

	    data: function () {return {
	        row: {}
	    }},
	    methods: {

	        getMainImage: function getMainImage(tid) {

	            return iconimageurl + tid;
	        },
	        getRewardImage: function getRewardImage(tiptypeid) {

	            return rewardimgurl + tiptypeid;
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
/* 47 */
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
	              "type": "jwy-slider",
	              "attr": {
	                "autoplay": "true"
	              }
	            },
	            {
	              "type": "jwy-otherkindbuttons"
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "jwy-novicecell"
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "jwy-groupbutton",
	              "attr": {
	                "groupiconurl": "http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/homePage_today.png",
	                "grouptitle": "今日推荐"
	              },
	              "style": {
	                "borderBottomWidth": 1,
	                "borderBottomColor": "#D3D3D3"
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
	              "type": "jwy-managecell",
	              "attr": {
	                "row": function () {return this.row}
	              },
	              "shown": function () {return this.row.kind!=15&&this.row.type!=217}
	            },
	            {
	              "type": "jwy-doctorcell",
	              "attr": {
	                "row": function () {return this.row}
	              },
	              "shown": function () {return this.row.kind==15},
	              "style": {
	                "marginTop": 20
	              }
	            },
	            {
	              "type": "jwy-knowledgecell",
	              "attr": {
	                "row": function () {return this.row}
	              },
	              "shown": function () {return this.row.kind==2&&this.row.type==217}
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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(50);
	__webpack_require__(54);
	__webpack_require__(62);
	__webpack_require__(14);
	__webpack_require__(66);
	__webpack_require__(70);
	__webpack_require__(74);
	__webpack_require__(78);

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/didclickevent');
	var stream = __weex_require__('@weex-module/stream');

	var mm = '0';

	module.exports = {
	  ready: function ready() {

	    this.requestHomeDatas();
	  },
	  data: function () {return {
	    test: '',

	    displayRefresh: 'show',
	    refreshstr: '下拉刷新',
	    rows: [],
	    size: 27,
	    isappleaudit: true }},

	  methods: {
	    requestHomeDatas: function requestHomeDatas() {

	      var self = this;
	      eventModule.getHomeDatas(function (ret) {

	        nativeLog("ret:--------" + ret.uid + ret.sid + ret._t);

	        var GET_URL_HomeRecommend = 'http://ming.lihuobao.cn/mingop.php?m=iosgetHomeList';
	        var BODY_URL = 'uid=' + ret.uid + '&' + 'sid=' + ret.sid + '&' + '_t=' + ret._t + '&platform=2&version=' + ret.version + '&mm=' + mm;

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


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(51)
	var __weex_style__ = __webpack_require__(52)
	var __weex_script__ = __webpack_require__(53)

	__weex_define__('@weex-component/Jwy-slider', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 51 */
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
/* 52 */
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
/* 53 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/didclickevent');
	var stream = __weex_require__('@weex-module/stream');

	var pictureurl = "http://oss.aliyuncs.com/mingstatic/";

	module.exports = {
	  data: function () {return {

	    indicatormargintop: "230",
	    autoplay: '',
	    items: []
	  }},
	  methods: {

	    getbannerimage: function getbannerimage(image) {
	      return pictureurl + image;
	    },

	    clickbanner: function clickbanner(e) {

	      clickModule.didClickEvent(e);
	    }
	  },

	  ready: function ready() {
	    var self = this;
	    eventModule.getHomeDatas(function (ret) {
	      var GET_URL_MobileBanner = 'http://ming.lihuobao.cn/mingop.php?m=getMobileBanner';

	      var BODY_URL = 'uid=' + ret.uid + '&' + 'sid=' + ret.sid + '&' + '_t=' + ret._t + '&platform=2&position=home&version=' + ret.version;

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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55)
	var __weex_template__ = __webpack_require__(59)
	var __weex_style__ = __webpack_require__(60)
	var __weex_script__ = __webpack_require__(61)

	__weex_define__('@weex-component/Jwy-kindbuttons', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(56)
	var __weex_style__ = __webpack_require__(57)
	var __weex_script__ = __webpack_require__(58)

	__weex_define__('@weex-component/jwy-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 56 */
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
/* 57 */
/***/ function(module, exports) {

	module.exports = {
	  "icontitle": {
	    "marginTop": 10,
	    "fontSize": 24
	  }
	}

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var clickbtnModule = __weex_require__('@weex-module/didclickevent');

	module.exports = {
	   data: function () {return {
	      btnnumber: 0,
	      iconurl: '',
	      icontitle: '',
	      btnwidth: 80,
	      btnradius: 40,
	      titlecolor: 'grey'
	   }},
	   methods: {

	      clickkindbtn: function clickkindbtn(e) {

	         clickbtnModule.didClickKindBtn(e);
	      }
	   }
	};}
	/* generated by weex-loader */


/***/ },
/* 59 */
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
	          "type": "jwy-button",
	          "classList": [
	            "smallkind"
	          ],
	          "attr": {
	            "iconurl": function () {return this.btn.iconurl},
	            "icontitle": function () {return this.btn.icontitle},
	            "btnnumber": function () {return this.btn.number}
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
/* 60 */
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
	    "height": 1,
	    "backgroundColor": "rgb(237,237,237)"
	  }
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(55);

	module.exports = {
	  data: function () {return {
	    buttons: [{ iconurl: 'http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_list_study@2x.png', icontitle: '爱学习', number: 0 }, { iconurl: 'http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_list_show@2x.png', icontitle: '做调研', number: 1 }, { iconurl: 'http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_list_task@2x.png', icontitle: '拍一拍', number: 2 }, { iconurl: 'http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_list_share@2x.png', icontitle: '勤分享', number: 3 }]
	  }}

	};}
	/* generated by weex-loader */


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)
	var __weex_template__ = __webpack_require__(63)
	var __weex_style__ = __webpack_require__(64)
	var __weex_script__ = __webpack_require__(65)

	__weex_define__('@weex-component/Jwy-otherkindbuttons', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 63 */
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
	      "children": [
	        {
	          "type": "jwy-otherbutton",
	          "classList": [
	            "othersmallkind"
	          ],
	          "attr": {
	            "iconurl": function () {return this.getbtnImgurl(this.btn.image)},
	            "icontitle": function () {return this.btn.title},
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
/* 64 */
/***/ function(module, exports) {

	module.exports = {
	  "otherkind": {
	    "flexDirection": "row",
	    "width": 750
	  },
	  "otherkindborder": {
	    "flex": 1,
	    "flexDirection": "column",
	    "paddingBottom": 16,
	    "borderWidth": 0.8,
	    "borderBottomWidth": 8,
	    "borderTopWidth": 0,
	    "borderColor": "rgb(237,237,237)"
	  },
	  "othersmallkind": {
	    "flex": 1,
	    "marginTop": 6
	  }
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(6);
	var eventModule = __weex_require__('@weex-module/requestevent');
	var stream = __weex_require__('@weex-module/stream');

	var btnimgurl = 'http://oss.aliyuncs.com/mingstatic/banner_task/image/';

	module.exports = {
	  data: function () {return {
	    buttons: []
	  }},
	  ready: function ready() {
	    var self = this;
	    eventModule.getHomeDatas(function (ret) {
	      var GET_URL_ActivityEntry = 'http://ming.lihuobao.cn/mingop.php?m=activityEntry';
	      var BODY_URL = 'uid=' + ret.uid + '&' + 'sid=' + ret.sid + '&' + '_t=' + ret._t + '&platform=2&version=' + ret.version;

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
	      return btnimgurl + image;
	    }

	  }

	};}
	/* generated by weex-loader */


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(67)
	var __weex_style__ = __webpack_require__(68)
	var __weex_script__ = __webpack_require__(69)

	__weex_define__('@weex-component/Jwy-managecell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 67 */
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
	            "src": function () {return this.geticonUrl(this.row.tid)}
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
	            "justifyContent": "space-between"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.row.title}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "type"
	              ],
	              "attr": {
	                "value": function () {return this.getType(this.row.type)}
	              }
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
	                "marginTop": 8
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 34,
	                    "color": "#FF0000",
	                    "flex": 1.5,
	                    "fontWeight": "bold"
	                  },
	                  "attr": {
	                    "value": function () {return this.getMoney(this.row.tiptype,this.row.tip,this.row.type)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontitle"
	                  ],
	                  "style": {
	                    "backgroundColor": "rgb(248,207,52)"
	                  },
	                  "shown": function () {return this.getisShow(this.row.kind,this.row.listtag,this.row.type)},
	                  "events": {
	                    "click": function ($event) {this.clickleftbutton(this.row,$event)}
	                  },
	                  "attr": {
	                    "value": function () {return this.getleftBtn(this.row.kind,this.row.listtag)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "buttontitle"
	                  ],
	                  "style": {
	                    "backgroundColor": function () {return this.getrightBtncolor(this.row.status,this.row.type)}
	                  },
	                  "attr": {
	                    "value": function () {return this.getrightBtn(this.row.status,this.row.kind,this.row.type)}
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
	        "marginTop": 5,
	        "height": 45,
	        "flexDirection": "row",
	        "backgroundColor": "rgb(237,237,237)",
	        "alignItems": "center"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "participate"
	          ],
	          "attr": {
	            "value": function () {return (this.row.kind==11?'调研数':'参与人数') + ':' + (!!this.row.participants?this.row.participants:'0')}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "participate"
	          ],
	          "style": {
	            "backgroundColor": "rgb(237,237,237)"
	          },
	          "attr": {
	            "value": function () {return '剩余任务:' + (!!this.row.remain?this.row.remain:'0')}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "participate"
	          ],
	          "attr": {
	            "value": function () {return '地点:' + (this.row.lab_area)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 68 */
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
	    "borderRadius": 20
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
	    "borderWidth": 1,
	    "borderRadius": 10,
	    "borderColor": "#808080",
	    "color": "#000000",
	    "fontSize": 24,
	    "textAlign": "center",
	    "padding": 8,
	    "maxWidth": 190
	  },
	  "buttontitle": {
	    "height": 60,
	    "marginLeft": 20,
	    "fontSize": 30,
	    "textAlign": "center",
	    "borderRadius": 8,
	    "color": "#FFFFFF",
	    "flex": 1,
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
/* 69 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var clickModule = __weex_require__('@weex-module/didclickevent');

	var iconimageurl = 'http://oss.aliyuncs.com/mingstatic/image/task_list_thumb/';

	var tipunitstr = '金币';
	var typemap = {

	  5: '产品培训',
	  6: '市场调研',
	  7: '勤分享',
	  8: '勤分享',
	  9: '做调研',
	  10: '常规调研',

	  311: '疗程用药调研',
	  312: '联合用药调研',
	  313: '进货单调研',
	  314: '保修卡调研',

	  211: '产品知识',
	  212: '养生常识',
	  213: '行业资讯',
	  214: '销售技能',
	  215: '职场须知',

	  110: '与产品合拍',
	  111: '拍摄货架',
	  112: '拍摄堆头',
	  113: '拍摄POP',
	  114: '拍摄端架',
	  115: '拍摄橱窗',
	  116: '拍摄海报',
	  117: '拍摄价签',
	  118: '与产品合拍',
	  119: '拍摄POP',
	  120: '摄影大赛'

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
	    row: {}
	  }},
	  methods: {

	    geticonUrl: function geticonUrl(tid) {

	      return iconimageurl + tid;
	    },
	    getMoney: function getMoney(tiptype, tip) {

	      var tipstr = '';
	      if (tiptype == 1) {
	        tipstr = tip + '积分';
	      } else if (tiptype == 2) {
	        tipstr = '赏' + tip / 100.0 + tipunitstr;
	      } else {
	        tipstr = '赏' + tip / 100.0 + '元';
	      }

	      if (tip == 0) {
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

	    clickleftbutton: function clickleftbutton(e) {

	      clickModule.didClickLeftButton(e);
	    }

	  }

	};}
	/* generated by weex-loader */


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14)
	__webpack_require__(26)
	__webpack_require__(30)
	var __weex_template__ = __webpack_require__(71)
	var __weex_style__ = __webpack_require__(72)
	var __weex_script__ = __webpack_require__(73)

	__weex_define__('@weex-component/Jwy-doctorcell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "jwy-groupbutton",
	      "attr": {
	        "groupiconurl": "http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doctors_Icon.png",
	        "grouptitle": "精品课程"
	      }
	    },
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
	                "src": function () {return this.getMainImage(this.row.tid)}
	              },
	              "style": {
	                "width": 710,
	                "height": 400,
	                "flex": 5,
	                "marginLeft": 10,
	                "marginRight": 10
	              }
	            },
	            {
	              "type": "jwy-imagelabel",
	              "attr": {
	                "labeltitle": function () {return this.getVideoTime(this.row.video_length)},
	                "imgurl": function () {return this.docflagimage},
	                "fontcolor": "white"
	              },
	              "style": {
	                "position": "absolute",
	                "right": 40,
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
	                "backgroundColor": function () {return this.getTypeColor(this.row.type)}
	              },
	              "attr": {
	                "value": function () {return this.getType(this.row.type)}
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
	                "value": function () {return this.row.title}
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
	            "backgroundColor": "rgb(237,237,237)",
	            "flexDirection": "row",
	            "flex": 1
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "lookernumber"
	              ],
	              "style": {
	                "borderRightColor": "#D3D3D3",
	                "borderRightWidth": 2
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
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "lookernumber"
	              ],
	              "style": {
	                "borderLeftColor": "#D3D3D3",
	                "borderLeftWidth": 2,
	                "flexDirection": "row"
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
	                    "value": "满意度"
	                  }
	                },
	                {
	                  "type": "jwy-starstar",
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
	  ]
	}

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = {
	  "docitems": {
	    "paddingBottom": 10,
	    "borderWidth": 1,
	    "borderColor": "rgb(235,235,235)",
	    "flexDirection": "column",
	    "width": 730,
	    "height": 700,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "marginTop": 8
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
	    "padding": 3,
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
	  },
	  "lookernumber": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  }
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(36);
	__webpack_require__(40);

	var iconimageurl = 'http://oss.aliyuncs.com/mingstatic/image/task_list_thumb/';

	var typemap = {

	    511: '感冒疾病',
	    512: '皮肤疾病',
	    513: '慢性疾病',
	    514: '儿童疾病',
	    515: '妇科疾病',
	    516: '五官疾病',
	    517: '消化系统'
	};
	var typecolormap = {
	    511: 'rgb(235,120,85)',
	    512: 'rgb(169,212,113)',
	    513: 'rgb(247,206,89)',
	    514: 'rgb(110,160,239)',
	    515: 'rgb(224,123,251)',
	    516: 'rgb(185,166,238)',
	    517: 'rgb(131,215,243)'
	};
	module.exports = {

	    data: function () {return {
	        row: {},
	        color: 'orange',
	        doctime: '2016.07.06',
	        docflagimage: 'http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/doc_videoIcon.png'
	    }},
	    methods: {

	        getMainImage: function getMainImage(tid) {

	            return iconimageurl + tid;
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
	                flagstr = 'new';
	            } else if (listtag == 2) {
	                flagstr = 'hot';
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14)
	var __weex_template__ = __webpack_require__(75)
	var __weex_style__ = __webpack_require__(76)
	var __weex_script__ = __webpack_require__(77)

	__weex_define__('@weex-component/Jwy-novicecell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "jwy-groupbutton",
	      "attr": {
	        "groupiconurl": "http://testossimg.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/home_Newtask@2x.png",
	        "grouptitle": "新手认证"
	      },
	      "style": {
	        "borderBottomWidth": 1,
	        "borderBottomColor": "rgb(237,237,237)"
	      },
	      "shown": function () {return this.havedatas}
	    },
	    {
	      "type": "div",
	      "classList": [
	        "novice"
	      ],
	      "repeat": {
	        "expression": function () {return this.rows},
	        "value": "row"
	      },
	      "events": {
	        "click": function ($event) {this.clicknovicecell(this.row,$event)}
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "column",
	            "flex": 3
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#808080",
	                "fontSize": 28
	              },
	              "attr": {
	                "value": function () {return this.row.title}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 20,
	                "color": "#FF0000",
	                "fontSize": 26
	              },
	              "attr": {
	                "value": function () {return this.getMoney(this.row.tiptype,this.row.tip)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "button"
	          ],
	          "style": {
	            "marginTop": 10,
	            "backgroundColor": "#FFA500",
	            "flex": 1
	          },
	          "attr": {
	            "value": function () {return this.getStatus(this.row.status)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = {
	  "novice": {
	    "flexDirection": "row",
	    "marginTop": 10,
	    "marginLeft": 20,
	    "marginRight": 20,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#D3D3D3"
	  },
	  "button": {
	    "width": 240,
	    "height": 60,
	    "marginRight": 20,
	    "fontSize": 28,
	    "textAlign": "center",
	    "borderRadius": 8,
	    "color": "#FFFFFF",
	    "flex": 1,
	    "justifyContent": "center",
	    "padding": 12
	  }
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var eventModule = __weex_require__('@weex-module/requestevent');
	var clickModule = __weex_require__('@weex-module/didclickevent');
	var stream = __weex_require__('@weex-module/stream');

	var tipunitstr = '金币';
	module.exports = {
	     data: function () {return {

	          havedatas: false,
	          rows: []

	     }},
	     methods: {

	          getMoney: function getMoney(tiptype, tip) {

	               var tipstr = '';
	               if (tiptype == 1) {
	                    tipstr = tip + '积分';
	               } else if (tiptype == 2) {
	                    tipstr = '赏' + tip / 100.0 + tipunitstr;
	               } else {
	                    tipstr = '赏金' + tip / 100.0 + '元';
	               }

	               return tipstr;
	          },
	          getStatus: function getStatus(status) {

	               var statusstr = '';
	               if (status == 0) {
	                    statusstr = '领取赏金';
	               } else {
	                    statusstr = '待审核';
	               }
	               return statusstr;
	          },
	          clicknovicecell: function clicknovicecell(e) {

	               clickModule.didClickNoviceCell(e);
	          }

	     },
	     ready: function ready() {
	          var self = this;
	          eventModule.getHomeDatas(function (ret) {
	               var GET_URL_NewbieTask = 'http://ming.lihuobao.cn/mingop.php?m=getNewbieTask';
	               var BODY_URL = 'uid=' + ret.uid + '&' + 'sid=' + ret.sid + '&' + '_t=' + ret._t + '&platform=2&version=' + ret.version;

	               stream.fetch({
	                    method: 'POST',
	                    url: GET_URL_NewbieTask,
	                    body: BODY_URL,
	                    type: 'json'
	               }, function (ret) {
	                    if (!ret.ok) {} else {
	                         var dic = ret.data;
	                         self.rows = dic.tasks;
	                         self.havedatas = true;
	                    }
	               }, function (response) {});
	          });
	     }
	};}
	/* generated by weex-loader */


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(79)
	var __weex_style__ = __webpack_require__(80)
	var __weex_script__ = __webpack_require__(81)

	__weex_define__('@weex-component/Jwy-knowledgecell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 79 */
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
	        "src": function () {return this.getMainImage(this.row.tid)}
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
	        "value": function () {return this.row.title}
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
/* 80 */
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
/* 81 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var iconimageurl = 'http://oss.aliyuncs.com/mingstatic/image/task_list_thumb/';

	var rewardimgurl = 'http://oss.aliyuncs.com/mingstatic/image/tiptype_icon/';

	module.exports = {

	    data: function () {return {
	        row: {}
	    }},
	    methods: {

	        getMainImage: function getMainImage(tid) {

	            return iconimageurl + tid;
	        },
	        getRewardImage: function getRewardImage(tiptypeid) {

	            return rewardimgurl + tiptypeid;
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


/***/ }
/******/ ]);