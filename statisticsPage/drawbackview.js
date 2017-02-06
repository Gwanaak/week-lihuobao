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

	__weex_define__('@weex-component/1ecb43d4323cbd7621e29492b290cc17', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/1ecb43d4323cbd7621e29492b290cc17',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "column",
	    "backgroundColor": "#FFFFFF",
	    "width": 750
	  },
	  "children": [
	    {
	      "type": "list",
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "marginTop": 30,
	                    "marginBottom": 30,
	                    "flexDirection": "row",
	                    "alignItems": "center",
	                    "textAlign": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/business_tuikuang.png"
	                      },
	                      "style": {
	                        "width": 60,
	                        "height": 60,
	                        "marginRight": 20
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "德众药业"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 56
	                  },
	                  "attr": {
	                    "value": "＋40.00～69.98"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#D3D3D3",
	                    "marginTop": 16,
	                    "fontSize": 28
	                  },
	                  "attr": {
	                    "value": "退款中"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "padding": 30,
	                "flexDirection": "column"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "labelbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "leftlabel"
	                      ],
	                      "attr": {
	                        "value": "退款方式"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "leftlabel"
	                      ],
	                      "attr": {
	                        "value": "理货宝厂家钱包"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "marginTop": 30
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "leftlabel"
	                      ],
	                      "style": {
	                        "flex": 1
	                      },
	                      "attr": {
	                        "value": "退款进度"
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "rightlabelbox"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "line1"
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "line2"
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "rightlabel"
	                          ],
	                          "children": [
	                            {
	                              "type": "div",
	                              "style": {
	                                "flexDirection": "row"
	                              },
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "attr": {
	                                    "src": function () {return this.getimage1(1)}
	                                  },
	                                  "style": {
	                                    "width": 35,
	                                    "height": 35,
	                                    "marginRight": 16
	                                  }
	                                },
	                                {
	                                  "type": "text",
	                                  "classList": [
	                                    "endlabel"
	                                  ],
	                                  "style": {
	                                    "color": function () {return this.color1}
	                                  },
	                                  "attr": {
	                                    "value": "结束任务"
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "text",
	                              "classList": [
	                                "timelabel"
	                              ],
	                              "attr": {
	                                "value": "07:03 10:55"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "rightlabel"
	                          ],
	                          "children": [
	                            {
	                              "type": "div",
	                              "style": {
	                                "flexDirection": "row"
	                              },
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "attr": {
	                                    "src": function () {return this.getimage2(1)}
	                                  },
	                                  "style": {
	                                    "width": 35,
	                                    "height": 35,
	                                    "marginRight": 16
	                                  }
	                                },
	                                {
	                                  "type": "text",
	                                  "classList": [
	                                    "endlabel"
	                                  ],
	                                  "style": {
	                                    "color": function () {return this.color2}
	                                  },
	                                  "attr": {
	                                    "value": "等待已领取任务处理结果"
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "text",
	                              "classList": [
	                                "timelabel"
	                              ],
	                              "attr": {
	                                "value": "07:03 10:55"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "rightlabel"
	                          ],
	                          "children": [
	                            {
	                              "type": "div",
	                              "style": {
	                                "flexDirection": "row"
	                              },
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "attr": {
	                                    "src": function () {return this.getimage3(1)}
	                                  },
	                                  "style": {
	                                    "width": 35,
	                                    "height": 35,
	                                    "marginRight": 16
	                                  }
	                                },
	                                {
	                                  "type": "text",
	                                  "classList": [
	                                    "endlabel"
	                                  ],
	                                  "style": {
	                                    "color": function () {return this.color3}
	                                  },
	                                  "attr": {
	                                    "value": "退款到理货宝厂家钱包"
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "text",
	                              "classList": [
	                                "timelabel"
	                              ],
	                              "attr": {
	                                "value": "07:03 10:55"
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
	                    "labelbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "leftlabel"
	                      ],
	                      "attr": {
	                        "value": "关联任务"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "leftlabel"
	                      ],
	                      "attr": {
	                        "value": "任务名任务名热舞吗任务吗任务"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "labelbox"
	                  ],
	                  "style": {
	                    "borderTopWidth": 1,
	                    "borderColor": "#D3D3D3",
	                    "paddingTop": 20
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "leftlabel"
	                      ],
	                      "attr": {
	                        "value": "创建时间"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "#D3D3D3",
	                        "fontSize": 26
	                      },
	                      "attr": {
	                        "value": "2016.07.03  10:55"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "marginTop": 20
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "rgb(88,190,247)",
	                        "fontSize": 27
	                      },
	                      "attr": {
	                        "value": "对此订单有疑问，请拨打免费客服电话:"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "rgb(88,190,247)",
	                        "fontSize": 27
	                      },
	                      "attr": {
	                        "value": "400-6610-927"
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "backgroundColor": "rgb(240,240,245)",
	                "height": 300
	              }
	            },
	            {
	              "type": "cell",
	              "append": "tree"
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
	  "labelbox": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "marginTop": 20
	  },
	  "leftlabel": {
	    "color": "#808080",
	    "fontSize": 28
	  },
	  "rightlabelbox": {
	    "flexDirection": "column",
	    "height": 350,
	    "flex": 3,
	    "marginTop": -35,
	    "marginLeft": -20,
	    "position": "relative"
	  },
	  "rightlabel": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "flex": 1,
	    "alignItems": "center",
	    "textAlign": "center"
	  },
	  "endlabel": {
	    "fontSize": 28
	  },
	  "timelabel": {
	    "color": "#D3D3D3",
	    "fontSize": 27
	  },
	  "line1": {
	    "position": "absolute",
	    "width": 3,
	    "height": 85,
	    "left": 16,
	    "top": 75,
	    "backgroundColor": "#808080",
	    "zIndex": 100
	  },
	  "line2": {
	    "position": "absolute",
	    "width": 3,
	    "height": 85,
	    "left": 16,
	    "bottom": 75,
	    "backgroundColor": "#808080",
	    "zIndex": 100
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	   ready: function ready() {

	      this.color1 = "rgb(88,190,247)";
	   },
	   data: function () {return {
	      color1: "grey",
	      color2: "grey",
	      color3: "grey"

	   }},
	   methods: {

	      getimage1: function getimage1(id) {
	         return id == 1 ? "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/business_highlightGou.png" : "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/business_greyGou.png";
	      },
	      getimage2: function getimage2(id) {
	         return id == 2 ? "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/business_highlightGou.png" : "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/business_greyGou.png";
	      },
	      getimage3: function getimage3(id) {
	         return id == 3 ? "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/business_highlightGou.png" : "http://mingstatic.oss-cn-hangzhou.aliyuncs.com/weex/ios/Image/business_greyGou.png";
	      }

	   }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);