define({ "api": [
  {
    "type": "post",
    "url": "/api/common/create-qr-code",
    "title": "创建二维码图片",
    "version": "1.0.0",
    "name": "/api/common/create-qr-code",
    "group": "COMMON",
    "description": "<p>创建二维码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>二维码内容</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>创建失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/CommonController.php",
    "groupTitle": "COMMON"
  },
  {
    "type": "post",
    "url": "/api/common/identify-txt",
    "title": "识别文字中的IMEI",
    "version": "1.0.0",
    "name": "/api/common/identify-txt",
    "group": "COMMON",
    "description": "<p>识别文字中的IMEI 文字内容以逗号、空格、回车分割</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "txt",
            "description": "<p>文字内容</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>识别失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"[]\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/CommonController.php",
    "groupTitle": "COMMON"
  },
  {
    "type": "post",
    "url": "/api/common/integral-pay",
    "title": "积分购买支付",
    "version": "1.0.0",
    "name": "/api/common/integral-pay",
    "group": "COMMON",
    "description": "<p>支付</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>购买金额</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>验证码无效</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>未登录</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/CommonController.php",
    "groupTitle": "COMMON"
  },
  {
    "type": "post",
    "url": "/api/common/ocr",
    "title": "OCR图像识别SN",
    "version": "1.0.0",
    "name": "/api/common/ocr",
    "group": "COMMON",
    "description": "<p>OCR图像识别SN</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>上传文件key</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>识别失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/CommonController.php",
    "groupTitle": "COMMON"
  },
  {
    "type": "post",
    "url": "/api/common/qr-code",
    "title": "扫描二维码",
    "version": "1.0.0",
    "name": "/api/common/qr-code",
    "group": "COMMON",
    "description": "<p>扫描二维码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>用户手机号(必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>验证码已经发送，60s内不能再次发送</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>已经超过每天最大发送次数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/CommonController.php",
    "groupTitle": "COMMON"
  },
  {
    "type": "post",
    "url": "/api/common/upload",
    "title": "上传文件",
    "version": "1.0.0",
    "name": "/api/common/upload",
    "group": "COMMON",
    "description": "<p>上传文件到腾讯对象存储</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>验证码无效</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>未登录</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/CommonController.php",
    "groupTitle": "COMMON"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "用户验证码登陆",
    "version": "1.0.0",
    "name": "/api/user/login",
    "group": "USER",
    "description": "<p>用户登陆</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>用户手机号 (必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>短信验证码 (必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>验证码无效</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>未登录</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n     \"id\": \"1\",\n         \"username\": \"jigang\",\n         \"mobile\": \"18810236729\",\n         \"avatar\": \"\\\"\\\"\",\n         \"store_id\": \"1\",\n         \"role\": \"1\",\n         \"\": \"0\",\n         \"create_time\": \"2020-10-19 09:50:06\",\n         \"update_time\": \"2020-10-19 09:50:06\",\n         \"token\": \"MzZRX8Y+V4i8MBE2r+yCOQ==\"\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/UserController.php",
    "groupTitle": "USER"
  },
  {
    "type": "post",
    "url": "/api/user/send-code",
    "title": "发送手机验证码",
    "version": "1.0.0",
    "name": "/api/user/send-code",
    "group": "USER",
    "description": "<p>发送手机验证码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>用户手机号(必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>验证码已经发送，60s内不能再次发送</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>已经超过每天最大发送次数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/UserController.php",
    "groupTitle": "USER"
  },
  {
    "type": "get",
    "url": "/api/wechat/bind-user",
    "title": "绑定用户",
    "version": "1.0.0",
    "name": "bind-student",
    "group": "Wechat",
    "description": "<p>绑定用户</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源（androidRCStudent/iOSRCStudent）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号 (必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vcode",
            "description": "<p>验证码 (必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openId",
            "description": "<p>openId (必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>请求参数错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>未登录</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": {\n   'token':'',\n},\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/WechatController.php",
    "groupTitle": "Wechat"
  },
  {
    "type": "get",
    "url": "/api/wechat/get-share-user-info",
    "title": "获取微信用户信息",
    "version": "1.0.0",
    "name": "get-share-user-info",
    "group": "Wechat",
    "description": "<p>获取微信用户信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openId",
            "description": "<p>微信openId</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>请求参数错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>未登录</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": {\n    \"openid\": \"oVwRGwSS_Wg8EAqNNV2mehz9d0vs\", // 微信openId\n    \"nickname\": \"XX\", // 微信昵称\n    \"sex\": 1, \n    \"language\": \"zh_CN\",\n    \"city\": \"朝阳\",\n    \"province\": \"北京\",\n    \"country\": \"中国\",\n    \"headimgurl\": \"http://wx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLDxm8CapjZr2PuClhTz8CpvOq6UO9rGVHQiauBiatGg8cOUtuWSCNH3CEicc6lq0o0lNXPTrVQ7Je6xA/0\", // 微信头像\n},\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/WechatController.php",
    "groupTitle": "Wechat"
  },
  {
    "type": "get",
    "url": "/api/wechat/wechat-ticket",
    "title": "获取js票据",
    "version": "1.0.0",
    "name": "wechat-ticket",
    "group": "Wechat",
    "description": "<p>发送验证码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源（androidRCStudent/iOSRCStudent）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>请求参数错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>未登录</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": {\n   appId: '', // 必填，公众号的唯一标识\n   timestamp: , // 必填，生成签名的时间戳\n   nonceStr: '', // 必填，生成签名的随机串\n   signature: '',// 必填，签名，见附录1\n   authUrl: '',// 授权地址\n},\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/WechatController.php",
    "groupTitle": "Wechat"
  },
  {
    "type": "get",
    "url": "/api/wechat/wx-auth",
    "title": "微信授权跳转 (后端调用，忽略)",
    "version": "1.0.0",
    "name": "wx-auth",
    "group": "Wechat",
    "description": "<p>微信授权跳转</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>微信code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>微信state</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>请求参数错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>未登录</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": {\n},\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/WechatController.php",
    "groupTitle": "Wechat"
  },
  {
    "type": "post",
    "url": "/api/manual-testing/get-filter-list",
    "title": "获取人工筛项选列表",
    "version": "1.0.0",
    "name": "/api/manual-testing/get-filter-list",
    "group": "人工检测",
    "description": "<p>获取人工筛项选列表 <br></p> <ol> <li>优先获取店铺配置的筛选项 <br></li> <li>获取默认店铺配置 <br></li> </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n   \"code\": 99999,\n   \"data\": [\n       {\n           \"id\": \"1\",\n           \"pid\": \"0\",\n           \"type\": \"0\",\n           \"name\": \"屏幕\",\n           \"1_level\": [\n               {\n                   \"id\": \"4\",\n                   \"pid\": \"1\",\n                   \"type\": \"1\",\n                   \"name\": \"纯原\",\n                   \"2_level\": [\n                       {\n                           \"id\": \"9\",\n                           \"pid\": \"4\",\n                           \"type\": \"2\",\n                           \"name\": \"纯原\",\n                           \"item1_key\": \"1\",\n                           \"item1_value\": \"不分\",\n                           \"item2_key\": \"2\",\n                           \"item2_value\": \"正常\",\n                           \"item3_key\": \"3\",\n                           \"item3_value\": \"有问题\"\n                       }\n                   ]\n               },\n               ,\n               ...\n           ]\n       },\n       ....\n   ],\n   \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ManualTestingController.php",
    "groupTitle": "人工检测"
  },
  {
    "type": "post",
    "url": "/api/manual-testing/save-result",
    "title": "保存人工检测结果",
    "version": "1.0.0",
    "name": "/api/manual-testing/save-result",
    "group": "人工检测",
    "description": "<p>保存人工检测结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "goods_id",
            "description": "<p>进货设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>人工检测JSON数据结果  {[1:['result':1, 'image':'上出啊的图片'], 2:[...], ...]}  对应为key:result</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": true,\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ManualTestingController.php",
    "groupTitle": "人工检测"
  },
  {
    "type": "post",
    "url": "/api/share/new-record",
    "title": "生成分享查询记录",
    "version": "1.0.0",
    "name": "生成分享查询记录",
    "group": "分享",
    "description": "<p>分享查询记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stype",
            "description": "<p>分享类型<br> 1 查询记录 </br> 2 验机记录 </br></p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "idz",
            "description": "<p>查询记录ID 数组(必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>下载失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"61e5c616cf781e5b423fbf722f900b3c\", // 分享码 \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ShareController.php",
    "groupTitle": "分享"
  },
  {
    "type": "get",
    "url": "/api/share/get-share-record",
    "title": "获取分享查询记录",
    "version": "1.0.0",
    "name": "生成分享查询记录",
    "group": "分享",
    "description": "<p>分享查询记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>分享码</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>分享内容不存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ShareController.php",
    "groupTitle": "分享"
  },
  {
    "type": "post",
    "url": "/api/store/get-users",
    "title": "获取店铺人员",
    "version": "1.0.0",
    "name": "/api/store/get-users",
    "group": "店铺",
    "description": "<p>获取店铺人员（筛选查询时调用）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "post",
    "url": "/api/search/print-record",
    "title": "打印查询记录",
    "version": "1.0.0",
    "name": "/api/search/print-record",
    "group": "查询",
    "description": "<p>打印查询记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sridz",
            "description": "<p>查询记录ID 数组(必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>打印失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "get",
    "url": "/api/search/query-price",
    "title": "3023查询选项列表",
    "version": "1.0.0",
    "name": "/api/search/query-price",
    "group": "查询",
    "description": "<p>3023查询选项列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"[\n            {\n                \"name\": \"整机报告(全面)\",\n                \"type\": \"details\",\n                \"price\": 200 // 价格为精确到小数点后俩位整数，使用时除100即为真实价格\n            },\n            {\n                \"name\": \"整机报告(较全面)\",\n                \"type\": \"advanced\",\n                \"price\": 100 // 价格为精确到小数点后俩位整数，使用时除100即为真实价格\n            },\n            ...\n        ],\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "post",
    "url": "/api/search/save-remark",
    "title": "保存备注",
    "version": "1.0.0",
    "name": "/api/search/save-remark",
    "group": "查询",
    "description": "<p>保存备注</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "sr_id",
            "description": "<p>查询记录ID (必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注内容</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>下载失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "post",
    "url": "/api/search/download-record",
    "title": "下载查询记录",
    "version": "1.0.0",
    "name": "下载查询记录",
    "group": "查询",
    "description": "<p>下载查询记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "idz",
            "description": "<p>查询记录ID 数组(必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>下载失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "post",
    "url": "/api/search/delete-record",
    "title": "删除查询记录",
    "version": "1.0.0",
    "name": "删除查询记录",
    "group": "查询",
    "description": "<p>删除查询记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sridz",
            "description": "<p>查询记录ID数组(必填), 如 [1, 2, 3]</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>删除失败</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>删除的Ids不存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "post",
    "url": "/api/search/delete-detail",
    "title": "删除查询记录详情",
    "version": "1.0.0",
    "name": "删除查询记录详情",
    "group": "查询",
    "description": "<p>删除查询记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sdidz",
            "description": "<p>查询记录ID数组(必填) 如 [1, 2, 3]</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>删除失败</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>删除的Ids不存在</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "post",
    "url": "/api/search/merge-record",
    "title": "合并查询记录",
    "version": "1.0.0",
    "name": "合并查询记录",
    "group": "查询",
    "description": "<p>合并查询记录: 合并所有历史查询结果的记录详情，到当前这条手机记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sdidz",
            "description": "<p>查询记录ID 数组(必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>合并失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "post",
    "url": "/api/search/query-3023-data",
    "title": "查询3023数据",
    "version": "1.0.0",
    "name": "查询3023数据",
    "group": "查询",
    "description": "<p>查询3023数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "snz",
            "description": "<p>一个或多个SN 数组(POST JSON), 如[&quot;354858096464824&quot;, &quot;353902109051953&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "typez",
            "description": "<p>查询类型数组(POST JSON), 如[&quot;serial&quot;, &quot;carrier&quot;], type类型如下: </br> details 整机报告(全面) </br> advanced(整机报告(较全面) </br> coverage-refurbished 官方保修 </br> activationlock ID锁 </br> simlock 网络锁 </br> country 销售国家 </br> carrier 运营商 </br> icloud ID锁黑白 </br> sold 销售人 </br> purchase 购买日期 </br> repair 正在维修 </br> serial IMEI/SN 互转</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"{\n    \"user_id\": 1, // 用户ID\n    \"username\": \"萧何君\", // 用户名称\n    \"avatar\": \"http://img-host.com/aratar.jpg\", // 用户头像\n    \"create_time\": \"2020-10-22 10:10:10\",\n    \"device_cnt\" : 90,\n    \"remark\": \"3天需检测完毕\",\n    \"list\": [\n        {\n            \"no\": 1, //序号\n            \"sn\": \"\"353248104625320,\n            \"id_locked\": true, // ID 锁\n            \"device_model\": \"IPhone XR\"  // 设备型号\n            \"color\": \"Gold\", // 颜色\n            \"capacity\": \"256G\", // 内存容量\n            ...\n        },\n        ...\n    ]\n}\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "post",
    "url": "/api/search/detail-list",
    "title": "查询详情列表 (分页使用)",
    "version": "1.0.0",
    "name": "查询记录列表",
    "group": "查询",
    "description": "<p>只查询search_detail表(查询记录详情页下拉刷新,分页使用)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sr_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Inter",
            "optional": false,
            "field": "from_id",
            "description": "<p>本次查询开始ID (detail_id)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"[\n            {\n                \"no\": 1, //序号\n                \"sn\": \"\"353248104625320,\n                \"id_lock\": true, // ID 锁\n                \"device_model\": \"IPhone XR\"  // 设备型号\n                \"color\": \"Gold\", // 颜色\n                \"capacity\": \"256G\", // 内存容量\n                ...\n            },\n            ...\n        ],\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "get",
    "url": "/api/search/record-detail查询记录详情",
    "title": "",
    "version": "1.0.0",
    "name": "查询记录列表",
    "group": "查询",
    "description": "<p>查询记录详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sr_id",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"{\n    \"user_id\": 1, // 用户ID\n    \"username\": \"萧何君\", // 用户名称\n    \"avatar\": \"http://img-host.com/aratar.jpg\", // 用户头像\n    \"create_time\": \"2020-10-22 10:10:10\",\n    \"device_cnt\" : 90,\n    \"remark\": \"3天需检测完毕\",\n    \"list\": [\n        {\n            \"no\": 1, //序号\n            \"sn\": \"\"353248104625320,\n            \"id_lock\": true, // ID 锁\n            \"device_model\": \"IPhone XR\"  // 设备型号\n            \"color\": \"Gold\", // 颜色\n            \"capacity\": \"256G\", // 内存容量\n            ...\n        },\n        ...\n    ]\n}\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "get",
    "url": "/api/search/record-list",
    "title": "查询记录列表",
    "version": "1.0.0",
    "name": "查询记录列表",
    "group": "查询",
    "description": "<p>查询记录列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "me",
            "description": "<p>只看我的(非必填) 默认是0， 1 为只看我的数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页使用当前最大id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [\n            {\n                \"user_id\": 1, // 用户ID\n                \"username\": \"萧何君\", // 用户名称\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"total_cost\" : 126.50,\n                \"remark\": \"3天需检测完毕\",\n            },\n            {\n                \"user_id\": 1, // 用户ID\n                \"username\": \"萧何君\", // 用户名称\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"total_cost\" : 126.50,\n                \"remark\": \"3天需检测完毕\",\n            },\n\n            ...\n    ]\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "get",
    "url": "/api/search/device-detail",
    "title": "设备详情(对应UI查询设备详情)",
    "version": "1.0.0",
    "name": "设备详情",
    "group": "查询",
    "description": "<p>设备详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "sd_id",
            "description": "<p>查询记录详情ID(必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"code\": 99999,\n        \"data\": {\n        \"id\": \"18\",\n            \"record_id\": \"35\",\n            \"user_id\": \"1\",\n            \"store_id\": \"1\",\n            \"status\": \"1\",\n            \"sn\": \"353248104625320\",\n            \"imei\": null,\n            \"imei2\": null,\n            \"device_model\": null,\n            \"net_model\": null,\n            \"color\": null,\n            \"capacity\": null,\n            \"sale_country\": null,\n            \"net_lock\": null,\n            \"net_version\": null,\n            \"id_locked\": null,\n            \"icloud_locked\": null,\n            \"change_official\": null,\n            \"activation_status\": null,\n            \"warranty_type\": null,\n            \"warranty_days\": null,\n            \"purchase_date\": null,\n            \"seller\": null,\n            \"warranty_date\": null,\n            \"carrier\": null,\n            \"carrier_country\": null,\n            \"phone_support\": null,\n            \"purchase_verify\": null,\n            \"device_loaned\": null,\n            \"repair_status\": null,\n            \"is_delete\": \"0\",\n            \"create_time\": \"2020-10-23 09:02:12\",\n            \"update_time\": \"2020-10-23 09:02:12\"\n   },\n       \"msg\": \"成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/SearchController.php",
    "groupTitle": "查询"
  },
  {
    "type": "post",
    "url": "/api/pcheck/delete-record",
    "title": "删除电脑验机记录",
    "version": "1.0.0",
    "name": "/api/pcheck/delete-record",
    "group": "电脑验机记录",
    "description": "<p>删除查询记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pr_idz",
            "description": "<p>电脑验机记录ID数组</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>删除失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "get",
    "url": "/api/pcheck/device-list",
    "title": "验机记录手机列表",
    "version": "1.0.0",
    "name": "/api/pcheck/device-list",
    "group": "电脑验机记录",
    "description": "<p>验机记录手机列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pr_id",
            "description": "<p>验机记录ID(必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\n    [\n        {\n            \"no\": 1, //序号\n            \"sn\": \"\"353248104625320,\n            \"id_lock\": true, // ID 锁\n            \"device_model\": \"IPhone XR\"  // 设备型号\n            \"color\": \"Gold\", // 颜色\n            \"capacity\": \"256G\", // 内存容量\n            ...\n        },\n        ...\n    ],\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "get",
    "url": "/api/pcheck/record-detail",
    "title": "电脑验机记录详情",
    "version": "1.0.0",
    "name": "/api/pcheck/record-detail",
    "group": "电脑验机记录",
    "description": "<p>电脑验机记录详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pr_id",
            "description": "<p>电脑验机记录ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"{\n    \"user_id\": 1, // 用户ID\n    \"username\": \"萧何君\", // 用户名称\n    \"avatar\": \"http://img-host.com/aratar.jpg\", // 用户头像\n    \"create_time\": \"2020-10-22 10:10:10\",\n    \"device_cnt\" : 90,\n    \"remark\": \"3天需检测完毕\",\n    \"list\": [\n        {\n            \"no\": 1, //序号\n            \"sn\": \"\"353248104625320,\n            \"id_lock\": true, // ID 锁\n            \"device_model\": \"IPhone XR\"  // 设备型号\n            \"color\": \"Gold\", // 颜色\n            \"capacity\": \"256G\", // 内存容量\n            ...\n        },\n        ...\n    ]\n}\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "get",
    "url": "/api/pcheck/record-list",
    "title": "电脑验机记录列表",
    "version": "1.0.0",
    "name": "/api/pcheck/record-list",
    "group": "电脑验机记录",
    "description": "<p>电脑验机记录列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "me",
            "description": "<p>只看我的(非必填) 默认是0， 1 为只看我的数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页使用当前最大id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [\n            {\n                \"user_id\": 1, // 用户ID\n                \"username\": \"萧何君\", // 用户名称\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"total_cost\" : 126.50,\n                \"remark\": \"3天需检测完毕\",\n            },\n            {\n                \"user_id\": 1, // 用户ID\n                \"username\": \"萧何君\", // 用户名称\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"total_cost\" : 126.50,\n                \"remark\": \"3天需检测完毕\",\n            },\n\n            ...\n    ]\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/upload-3u-report",
    "title": "上传3U验机报告和设备详情",
    "version": "1.0.0",
    "name": "/api/pcheck/upload-3u-report",
    "group": "电脑验机记录",
    "description": "<p>上传3U报告文件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "report",
            "description": "<p>上传的3U验机报告文件</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "device",
            "description": "<p>上传的3U设备详情文件</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "prid",
            "description": "<p>验机记录ID，不传默认为0 (非必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20002",
            "description": "<p>请上传3U验机报告文件, 文件key为report</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>请上传3U验机报告文件, 文件key为device</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20004",
            "description": "<p>请上传正确格式的3U验机报</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20005",
            "description": "<p>请上传正确格式的3U设备详情</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/upload-ace-report",
    "title": "上传爱思验机报告和设备详情",
    "version": "1.0.0",
    "name": "/api/pcheck/upload-ace-report",
    "group": "电脑验机记录",
    "description": "<p>上传验机报告文件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "report",
            "description": "<p>上传的爱思验机报告文件</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "device",
            "description": "<p>上传的爱思设备详情文件</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "prid",
            "description": "<p>验机记录ID，不传默认为0 (非必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20002",
            "description": "<p>请上传爱思验机报告文件, 文件key为report</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>请上传爱思验机报告文件, 文件key为device</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20004",
            "description": "<p>请上传正确格式的爱思验机报</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20005",
            "description": "<p>请上传正确格式的爱思设备详情</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/upload-hourglass-report",
    "title": "上传沙漏验机报告和沙漏设备详情",
    "version": "1.0.0",
    "name": "/api/pcheck/upload-hourglass-report",
    "group": "电脑验机记录",
    "description": "<p>上传沙漏验机报告文件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "report",
            "description": "<p>上传的沙漏验机报告文件</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "device",
            "description": "<p>上传的沙漏设备详情文件</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "prid",
            "description": "<p>验机记录ID，不传默认为0 (非必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20002",
            "description": "<p>请上传沙漏验机报告文件, 文件key为report</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20003",
            "description": "<p>请上传沙漏验机报告文件, 文件key为device</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20004",
            "description": "<p>请上传正确格式的沙漏验机报</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20005",
            "description": "<p>请上传正确格式的沙漏设备详情</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/download-record",
    "title": "下载电脑验机记录",
    "version": "1.0.0",
    "name": "下载电脑验机记录",
    "group": "电脑验机记录",
    "description": "<p>下载查询记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "idz",
            "description": "<p>电脑验机记录ID 数组(必填)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>下载失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/print-bar-code",
    "title": "打印条形码标签",
    "version": "1.0.0",
    "name": "打印条形码标签",
    "group": "电脑验机记录",
    "description": "<p>打印条形码标签</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pcds",
            "description": "<p>电脑验机设备ID数组</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\",\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/addto-record-from-pcheck",
    "title": "从电脑验机添加到已有进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/addto-record-from-pcheck",
    "group": "进货质检记录",
    "description": "<p>查询记录列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "qagr_id",
            "description": "<p>添加到的进货质检记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "sr_id",
            "description": "<p>查询记录ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\",\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/delete-record",
    "title": "删除进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/delete-record",
    "group": "进货质检记录",
    "description": "<p>删除进货质检记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "idz",
            "description": "<p>进货质检记录ID 数组</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\",\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/new-record-from-pcheck",
    "title": "从电脑验机记录新增进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/new-record-from-pcheck",
    "group": "进货质检记录",
    "description": "<p>查询记录列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "supplier",
            "description": "<p>供货商名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "count",
            "description": "<p>本批次总数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "pr_id",
            "description": "<p>电脑验机记录ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\",\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/record-briefing",
    "title": "简报",
    "version": "1.0.0",
    "name": "/api/qa-goods/record-briefing",
    "group": "进货质检记录",
    "description": "<p>简报</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>进货质检记录ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\",\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/record-detail",
    "title": "进货质检记录详情",
    "version": "1.0.0",
    "name": "/api/qa-goods/record-detail",
    "group": "进货质检记录",
    "description": "<p>进货质检记录详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "id",
            "description": "<p>进货质检记录ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [\n            {\n                \"user_id\": 1, // 用户ID\n                \"username\": \"萧何君\", // 用户名称\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"total_cost\" : 126.50,\n                \"remark\": \"3天需检测完毕\",\n            },\n            {\n                \"user_id\": 1, // 用户ID\n                \"username\": \"萧何君\", // 用户名称\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"total_cost\" : 126.50,\n                \"remark\": \"3天需检测完毕\",\n            },\n\n            ...\n    ]\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/save-qa-require",
    "title": "保存质检要求",
    "version": "1.0.0",
    "name": "/api/qa-goods/save-qa-require",
    "group": "进货质检记录",
    "description": "<p>保存质检要求</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>进货质检记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>查询要求</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "soft",
            "description": "<p>验机软件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manual",
            "description": "<p>人工检测要求</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expected",
            "description": "<p>设定预计完成周期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": true,\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/search-record-list",
    "title": "搜索进货质检记录列表(不带分页)",
    "version": "1.0.0",
    "name": "/api/qa-goods/search-record-list",
    "group": "进货质检记录",
    "description": "<p>搜索进货质检记录列表(不带分页): 添加到已有进货质检记录使用</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "date",
            "description": "<p>查询日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "supplier",
            "description": "<p>供货商名称</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n   \"code\": 99999,\n   \"data\": [\n       {\n           \"id\": \"5\",\n           \"supplier\": \"张三李四\",\n           \"create_time\": \"2020-11-06 08:56:26\"\n       },\n             ...\n     ]\n \"msg\": \"成功\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/record-list",
    "title": "进货质检记录列表",
    "version": "1.0.0",
    "name": "查询记录列表",
    "group": "进货质检记录",
    "description": "<p>查询记录列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "me",
            "description": "<p>只看我的(非必填) 默认是0， 1 为只看我的数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页使用当前最大id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": "<p>查询失败</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [\n            {\n                \"user_id\": 1, // 用户ID\n                \"username\": \"萧何君\", // 用户名称\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"total_cost\" : 126.50,\n                \"remark\": \"3天需检测完毕\",\n            },\n            {\n                \"user_id\": 1, // 用户ID\n                \"username\": \"萧何君\", // 用户名称\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"total_cost\" : 126.50,\n                \"remark\": \"3天需检测完毕\",\n            },\n\n            ...\n    ]\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/new-record-from-search",
    "title": "从查询新增进货质检记录",
    "version": "1.0.0",
    "name": "查询记录列表",
    "group": "进货质检记录",
    "description": "<p>查询记录列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "supplier",
            "description": "<p>供货商名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "count",
            "description": "<p>本批次总数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "sr_id",
            "description": "<p>查询记录ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\",\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/addto-record-from-search",
    "title": "从查询添加到已有进货质检记录",
    "version": "1.0.0",
    "name": "查询记录列表",
    "group": "进货质检记录",
    "description": "<p>查询记录列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 pc/h5/wx/android/ios</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "qagr_id",
            "description": "<p>添加到的进货质检记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "sr_id",
            "description": "<p>查询记录ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"\",\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  }
] });
