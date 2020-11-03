define({ "api": [
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
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
            "type": "Array",
            "optional": false,
            "field": "sr_ids",
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
    "type": "get",
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
            "field": "sr_ids",
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
    "type": "get",
    "url": "/api/search/share-record",
    "title": "分享查询记录",
    "version": "1.0.0",
    "name": "下载查询记录",
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
            "field": "sr_ids",
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
            "type": "int",
            "optional": false,
            "field": "sr_id",
            "description": "<p>查询记录ID(必填)</p>"
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
            "type": "int",
            "optional": false,
            "field": "sd_id",
            "description": "<p>查询记录ID(必填)</p>"
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
            "description": "<p>查询记录ID 数组(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sd_ids",
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
            "description": "<p>一个或多个SN 数组</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "typez",
            "description": "<p>查询类型数组, type类型如下: </br> details 整机报告(全面) </br> advanced(整机报告(较全面) </br> coverage-refurbished 官方保修 </br> activationlock ID锁 </br> simlock 网络锁 </br> country 销售国家 </br> carrier 运营商 </br> icloud ID锁黑白 </br> sold 销售人 </br> purchase 购买日期 </br> repair 正在维修 </br> serial IMEI/SN 互转</p>"
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
    "url": "/api/search/list",
    "title": "查询列表",
    "version": "1.0.0",
    "name": "查询列表",
    "group": "查询",
    "description": "<p>查寻列表</p>",
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
    "type": "post",
    "url": "/api/search/record-list",
    "title": "查询记录详情列表",
    "version": "1.0.0",
    "name": "查询记录列表",
    "group": "查询",
    "description": "<p>查询记录详情列表</p>",
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
    "url": "/api/pcheck/upload-3u-report",
    "title": "上传3U验机报告",
    "version": "1.0.0",
    "name": "/api/pcheck/upload-3u-report",
    "group": "电脑验机记录",
    "description": "<p>上传3U报告文件</p>",
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
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>上传文件key 为 file</p>"
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
            "description": "<p>请上传正确格式的3U验机报告</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20002",
            "description": "<p>请上传3U验机报告文件, 文件key为file</p>"
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
    "title": "上传爱思验机报告",
    "version": "1.0.0",
    "name": "/api/pcheck/upload-ace-report",
    "group": "电脑验机记录",
    "description": "<p>上传验机报告文件</p>",
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
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>上传文件key 为 file</p>"
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
            "description": "<p>请上传正确格式的爱思验机报</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20002",
            "description": "<p>请上传爱思验机报告文件, 文件key为file</p>"
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
    "title": "上传沙漏验机报告",
    "version": "1.0.0",
    "name": "/api/pcheck/upload-hourglass-report",
    "group": "电脑验机记录",
    "description": "<p>上传沙漏验机报告文件</p>",
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
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>上传文件key 为 file</p>"
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
            "description": "<p>请上传正确格式的沙漏验机报告</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20002",
            "description": "<p>请上传沙漏验机报告文件, 文件key为file</p>"
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
    "url": "/search/search/delete-record",
    "title": "删除查询记录",
    "version": "1.0.0",
    "name": "删除查询记录",
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
            "type": "int",
            "optional": false,
            "field": "sr_id",
            "description": "<p>查询记录ID(必填)</p>"
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
    "type": "post",
    "url": "/search/search/merge-record",
    "title": "合并查询记录",
    "version": "1.0.0",
    "name": "合并查询记录",
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
            "type": "Array",
            "optional": false,
            "field": "sr_ids",
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
    "type": "get",
    "url": "/api/pcheck/detail-list",
    "title": "验机记录详情",
    "version": "1.0.0",
    "name": "验机记录详情",
    "group": "电脑验机记录",
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
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pcr_id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"{\n    \"user_id\": 1, // 用户ID\n    \"username\": \"萧何君\", // 用户名称\n    \"avatar\": \"http://img-host.com/aratar.jpg\", // 用户头像\n    \"create_time\": \"2020-10-22 10:10:10\",\n    \"device_cnt\" : 90,\n    \"remark\": \"3天需检测完毕\",\n    \"list\": [\n        {\n            \"no\": 1, //序号\n            \"sn\": \"\"353248104625320,\n            \"id_lock\": true, // ID 锁\n            \"device_model\": \"IPhone XR\"  // 设备型号\n            \"color\": \"Gold\", // 颜色\n            \"capacity\": \"256G\", // 内存容量\n            ...\n        },\n        ...\n    ]\n}\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PCheckController.php",
    "groupTitle": "电脑验机记录"
  }
] });
