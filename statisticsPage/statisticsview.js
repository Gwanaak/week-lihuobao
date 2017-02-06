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
/***/ function(module, exports) {

	;__weex_define__("@weex-component/22ce779c20783f8b5955b738f552396d", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    ready:function(){

	      
	    },
	    data: function () {return {
	       leftbackcolor:'rgb(248,207,52)',
	       rightbackcolor:'white',
	       lefttitlecolor:'white',
	       righttitlecolor:'grey',
	       showtab1:true,
	       showtab2:false,
	       // displayRefresh: 'show',
	       // refreshstr:'下拉刷新',
	       rows:[
	          {title:'题目题目题目题目题目题目题目题目题目',answer1:'题目题目题目题目题目题目',answer2:'题目题目题目题目题目题目',answer3:'题目题目题目题目题目题目',accuracy1:'38.23%',accuracy2:'38.23%',accuracy3:'38.23%'},
	          {title:'题目题目题目题目题目题目题目题目题目',answer1:'题目题目题目题目题目题目',answer2:'题目题目题目题目题目题目',answer3:'题目题目题目题目题目题目',accuracy1:'38.23%',accuracy2:'38.23%',accuracy3:'38.23%'},
	          {title:'题目题目题目题目题目题目题目题目题目',answer1:'题目题目题目题目题目题目',answer2:'题目题目题目题目题目题目',answer3:'题目题目题目题目题目题目',accuracy1:'38.23%',accuracy2:'38.23%',accuracy3:'38.23%'},
	          {title:'题目题目题目题目题目题目题目题目题目',answer1:'题目题目题目题目题目题目',answer2:'题目题目题目题目题目题目',answer3:'题目题目题目题目题目题目',accuracy1:'38.23%',accuracy2:'38.23%',accuracy3:'38.23%'},
	          {title:'题目题目题目题目题目题目题目题目题目',answer1:'题目题目题目题目题目题目',answer2:'题目题目题目题目题目题目',answer3:'题目题目题目题目题目题目',accuracy1:'38.23%',accuracy2:'38.23%',accuracy3:'38.23%'}
	       ],
	       rankingrows:[
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'},
	          {number:'第一名',name:'杨阳',money:'30元',scores:'98',times:'69秒',area:'大参林'}
	       ]


	      }},
	      methods:{
	             
	             clicklefttab:function(){

	                 this.leftbackcolor='rgb(248,207,52)';
	                 this.rightbackcolor='white';
	                 this.lefttitlecolor='white';
	                 this.righttitlecolor='grey';
	                 this.showtab1=true;
	                 this.showtab2=false;
	             },
	             clickrighttab:function() {
	             	 
	             	 this.rightbackcolor='rgb(248,207,52)';
	                 this.leftbackcolor='white';
	                 this.righttitlecolor='white';
	                 this.lefttitlecolor='grey';
	                 this.showtab1=false;
	                 this.showtab2=true;
	             },
	           //   handleRefresh: function (e) {
	           //     var self = this;
	           //     self.displayRefresh = 'show';
	           //     self.refreshstr='正在刷新';
	               
	           //     //self.requestHomeDatas();

	           // }
	         }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
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
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "tabview"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "tableftbutton"
	                  ],
	                  "style": {
	                    "backgroundColor": function () {return this.leftbackcolor}
	                  },
	                  "events": {
	                    "click": "clicklefttab"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": function () {return this.lefttitlecolor},
	                        "fontSize": 27
	                      },
	                      "attr": {
	                        "value": "选项分析"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "tabrightbutton"
	                  ],
	                  "style": {
	                    "backgroundColor": function () {return this.rightbackcolor}
	                  },
	                  "events": {
	                    "click": "clickrighttab"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": function () {return this.righttitlecolor},
	                        "fontSize": 27
	                      },
	                      "attr": {
	                        "value": "考试排名"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "tab1"
	          ],
	          "shown": function () {return this.showtab1},
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "kindtitle"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "kindlabel"
	                  ],
	                  "attr": {
	                    "value": "关键指标"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#808080",
	                    "fontSize": 25
	                  },
	                  "attr": {
	                    "value": "实时数据 2016.09.08"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "detailview"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "detaillabel"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "kindlabel"
	                      ],
	                      "attr": {
	                        "value": "费用消耗"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "numberlabel"
	                      ],
	                      "attr": {
	                        "value": "933"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "detaillabel"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "kindlabel"
	                      ],
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
	                        "value": "287"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "detaillabel"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "kindlabel"
	                      ],
	                      "attr": {
	                        "value": "奖励人数"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "numberlabel"
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
	                    "detaillabel"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "kindlabel"
	                      ],
	                      "attr": {
	                        "value": "正确率"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "numberlabel"
	                      ],
	                      "attr": {
	                        "value": "38.23%"
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "marginTop": 20
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "paddingLeft": 40,
	                    "fontSize": 28
	                  },
	                  "attr": {
	                    "value": "选项分析"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "answerview"
	              ],
	              "repeat": {
	                "expression": function () {return this.rows},
	                "value": "row"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#808080",
	                    "fontSize": 27,
	                    "marginTop": 12
	                  },
	                  "attr": {
	                    "value": function () {return this.row.title}
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "answerlabel"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "#808080",
	                        "fontSize": 27
	                      },
	                      "attr": {
	                        "value": function () {return '选项1:' + (this.row.answer1)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "#808080",
	                        "fontSize": 25
	                      },
	                      "attr": {
	                        "value": function () {return this.row.accuracy1}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "answerlabel"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "rgb(248,207,52)",
	                        "fontSize": 27
	                      },
	                      "attr": {
	                        "value": function () {return '选项2:' + (this.row.answer2)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "#808080",
	                        "fontSize": 25
	                      },
	                      "attr": {
	                        "value": function () {return this.row.accuracy2}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "answerlabel"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "#808080",
	                        "fontSize": 27
	                      },
	                      "attr": {
	                        "value": function () {return '选项3:' + (this.row.answer3)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "#808080",
	                        "fontSize": 25
	                      },
	                      "attr": {
	                        "value": function () {return this.row.accuracy3}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "tab2"
	          ],
	          "shown": function () {return this.showtab2},
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "kindtitle"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "kindlabel"
	                  ],
	                  "attr": {
	                    "value": "考试排名"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#808080",
	                    "fontSize": 25
	                  },
	                  "attr": {
	                    "value": "实时数据 2016.09.08"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "padding": 40
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "label"
	                  ],
	                  "attr": {
	                    "value": "名次"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "label"
	                  ],
	                  "attr": {
	                    "value": "姓名"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "label"
	                  ],
	                  "attr": {
	                    "value": "奖励"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "label"
	                  ],
	                  "attr": {
	                    "value": "分数"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "label"
	                  ],
	                  "attr": {
	                    "value": "用时"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "label"
	                  ],
	                  "attr": {
	                    "value": "连锁"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "ranking"
	              ],
	              "repeat": {
	                "expression": function () {return this.rankingrows},
	                "value": "rankingrow"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "labelrow"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "label1"
	                      ],
	                      "attr": {
	                        "value": function () {return this.rankingrow.number}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "label1"
	                      ],
	                      "attr": {
	                        "value": function () {return this.rankingrow.name}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "label1"
	                      ],
	                      "attr": {
	                        "value": function () {return this.rankingrow.money}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "label1"
	                      ],
	                      "attr": {
	                        "value": function () {return this.rankingrow.scores}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "label1"
	                      ],
	                      "attr": {
	                        "value": function () {return this.rankingrow.times}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "label1"
	                      ],
	                      "attr": {
	                        "value": function () {return this.rankingrow.area}
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
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "refresh": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "width": 750,
	    "height": 100
	  },
	  "tabview": {
	    "flexDirection": "row",
	    "margin": 40,
	    "borderColor": "#D3D3D3",
	    "borderWidth": 1,
	    "borderRadius": 16,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "tableftbutton": {
	    "flex": 1,
	    "alignItems": "center",
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "borderRadius": 16
	  },
	  "tabrightbutton": {
	    "flex": 1,
	    "alignItems": "center",
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "borderRadius": 16
	  },
	  "detailview": {
	    "flexDirection": "row",
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "paddingTop": 40,
	    "paddingBottom": 30,
	    "justifyContent": "space-between",
	    "borderBottomWidth": 12,
	    "borderColor": "rgb(243,243,243)"
	  },
	  "detaillabel": {
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  "numberlabel": {
	    "margin": 12,
	    "color": "rgb(248,207,52)",
	    "fontSize": 25
	  },
	  "answerview": {
	    "flexDirection": "column",
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "justifyContent": "space-between",
	    "borderBottomWidth": 16,
	    "borderColor": "rgb(243,243,243)",
	    "paddingTop": 20,
	    "paddingBottom": 30
	  },
	  "answerlabel": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "marginTop": 24
	  },
	  "kindtitle": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "paddingLeft": 40,
	    "paddingRight": 40
	  },
	  "ranking": {
	    "backgroundColor": "rgb(240,240,240)",
	    "borderBottomWidth": 10,
	    "borderColor": "#FFFFFF"
	  },
	  "labelrow": {
	    "flexDirection": "row",
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "alignItems": "center"
	  },
	  "label": {
	    "flex": 1,
	    "textAlign": "center",
	    "fontSize": 26
	  },
	  "label1": {
	    "flex": 1,
	    "textAlign": "center",
	    "fontSize": 24
	  },
	  "kindlabel": {
	    "fontSize": 27
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/22ce779c20783f8b5955b738f552396d", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);