define({ "api": [
  {
    "type": "post",
    "url": "/api/common/check-sn",
    "title": "检查SN/IMEI号是否合法",
    "version": "1.0.0",
    "name": "/api/common/check-sn",
    "group": "COMMON",
    "description": "<p>检查SN/IMEI号是否合法</p>",
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
            "description": "<p>SN/IMEI 数组</p>"
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
    "url": "/api/common/get-china-region",
    "title": "获取中国地区列表",
    "version": "1.0.0",
    "name": "/api/common/get-china-region",
    "group": "COMMON",
    "description": "<p>获取中国地区列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>地区父级ID 当 pid=0 获取省份级别列表</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"[]\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/CommonController.php",
    "groupTitle": "COMMON"
  },
  {
    "type": "get",
    "url": "/api/common/get-printer-status",
    "title": "获取打印机状态",
    "version": "1.0.0",
    "name": "/api/common/get-printer-status",
    "group": "COMMON",
    "description": "<p>获取打印机状态</p>",
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
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>上传文件</p>"
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
    "url": "/api/common/wx-image",
    "title": "获取微信图片地址",
    "version": "1.0.0",
    "name": "/api/common/wx-image",
    "group": "COMMON",
    "description": "<p>获取微信图片地址</p>",
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
            "field": "media_id",
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
    "url": "/api/common/wx-ocr",
    "title": "上传到微信资源的OCR图像识别SN",
    "version": "1.0.0",
    "name": "/api/common/wx-ocr",
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
            "field": "media_id",
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
    "url": "/api/ta-store/addto-shopping-cart",
    "title": "加入购物车",
    "version": "1.0.0",
    "name": "/api/ta-store/addto-shopping-cart",
    "group": "TA的店铺",
    "description": "<p>加入购物车</p>",
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
            "type": "Number",
            "optional": false,
            "field": "sell_store_id",
            "description": "<p>当前售卖的店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/create-order-cart",
    "title": "购物车结算",
    "version": "1.0.0",
    "name": "/api/ta-store/create-order-cart",
    "group": "TA的店铺",
    "description": "<p>购物车结算，从购物车创建订单</p>",
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
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "data",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/create-order-directly",
    "title": "直接下单",
    "version": "1.0.0",
    "name": "/api/ta-store/create-order-directly",
    "group": "TA的店铺",
    "description": "<p>直接下单购买</p>",
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
            "type": "Number",
            "optional": false,
            "field": "sell_store_id",
            "description": "<p>当前售卖的店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messgae",
            "description": "<p>给卖家留言</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>如 [{&quot;goods_id&quot;:1, &quot;report_price&quot;:3000}, {&quot;goods_id&quot;:2, &quot;report_price&quot;:3000}]</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/del-shopping-cart",
    "title": "删除购物车",
    "version": "1.0.0",
    "name": "/api/ta-store/del-shopping-cart",
    "group": "TA的店铺",
    "description": "<p>删除购物车</p>",
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
            "field": "goods_idz",
            "description": "<p>商品id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/filling-order",
    "title": "填写订单(直接下单)",
    "version": "1.0.0",
    "name": "/api/ta-store/filling-order",
    "group": "TA的店铺",
    "description": "<p>填写订单, 直接下单,</p>",
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
            "type": "Number",
            "optional": false,
            "field": "sell_store_id",
            "description": "<p>店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/filling-order-cart",
    "title": "填写订单(购物车下单)",
    "version": "1.0.0",
    "name": "/api/ta-store/filling-order-cart",
    "group": "TA的店铺",
    "description": "<p>填写订单, 购物车下单</p>",
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
            "field": "goods_idz",
            "description": "<p>商品id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "get",
    "url": "/api/ta-store/order-detail",
    "title": "获取订单详情",
    "version": "1.0.0",
    "name": "/api/ta-store/order-detail",
    "group": "TA的店铺",
    "description": "<p>获取订单详情</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单编号</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "get",
    "url": "/api/ta-store/shopping-cart-list",
    "title": "购物车列表",
    "version": "1.0.0",
    "name": "/api/ta-store/shopping-cart-list",
    "group": "TA的店铺",
    "description": "<p>购物车列表</p>",
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
            "description": ""
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
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "get",
    "url": "/api/ta-store/store-index",
    "title": "获取TA的店铺页面",
    "version": "1.0.0",
    "name": "/api/ta-store/store-index",
    "group": "TA的店铺",
    "description": "<p>获取TA的店铺页面</p>",
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
            "type": "Number",
            "optional": false,
            "field": "store_id",
            "description": "<p>Ta的店铺id</p>"
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
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/store-list",
    "title": "获取TA的店铺页面-店铺列表",
    "version": "1.0.0",
    "name": "/api/ta-store/store-list",
    "group": "TA的店铺",
    "description": "<p>获取TA的店铺页面-店铺列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "store_id",
            "description": "<p>Ta的店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选参数 <br> device 设备类型 <br> model 机型 <br> price_min 价格区间 最小 <br> price_max 价格区间 最大 <br></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>分页</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "sortz",
            "description": "<br> price 价格排序 0 默认排序 1 价格由高到低 2 价格由低到高 <br> age 库龄排序 0 默认 1 库龄由高到低 2 库龄由低到高 <br>"
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
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/submit-order",
    "title": "提交订单",
    "version": "1.0.0",
    "name": "/api/ta-store/submit-order",
    "group": "TA的店铺",
    "description": "<p>提交订单</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_no",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/update-address",
    "title": "更新收货地址",
    "version": "1.0.0",
    "name": "/api/ta-store/update-address",
    "group": "TA的店铺",
    "description": "<p>更新收货地址</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_no",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address_id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/update-order-price",
    "title": "订单提交前改价",
    "version": "1.0.0",
    "name": "/api/ta-store/update-order-price",
    "group": "TA的店铺",
    "description": "<p>订单提交前改价</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_no",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "post",
    "url": "/api/ta-store/update-price",
    "title": "购物车下单前改价",
    "version": "1.0.0",
    "name": "/api/ta-store/update-price",
    "group": "TA的店铺",
    "description": "<p>购物车下单前改价</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/TaStoreController.php",
    "groupTitle": "TA的店铺"
  },
  {
    "type": "get",
    "url": "/api/user/address-list",
    "title": "用户地址列表",
    "version": "1.0.0",
    "name": "/api/user/address-list",
    "group": "USER",
    "description": "<p>用户地址列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "field": "20001",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/UserController.php",
    "groupTitle": "USER"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "用户验证码登陆",
    "version": "1.0.0",
    "name": "/api/user/login",
    "group": "USER",
    "description": "<p>用户登陆: 根据传入参数选择登陆方式：<br> 手机验证码 账号密码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "description": "<p>用户手机号 (必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>短信验证码 (选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>账号密码(选填)</p>"
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
    "url": "/api/user/logout",
    "title": "用户退出登陆",
    "version": "1.0.0",
    "name": "/api/user/logout",
    "group": "USER",
    "description": "<p>退出登陆，需要删除浏览器本地对应用户cookie,并需要删除服务器端的用户缓存，以免浪费资源</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
          "content": "{\n   \"code\": 99999,\n   \"data\": \"\",\n   \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/UserController.php",
    "groupTitle": "USER"
  },
  {
    "type": "get",
    "url": "/api/user/new-address",
    "title": "新增用户地址",
    "version": "1.0.0",
    "name": "/api/user/new-address",
    "group": "USER",
    "description": "<p>新增用户地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>所在地区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/UserController.php",
    "groupTitle": "USER"
  },
  {
    "type": "get",
    "url": "/api/user/save-address",
    "title": "保存用户地址",
    "version": "1.0.0",
    "name": "/api/user/new-address",
    "group": "USER",
    "description": "<p>新增用户地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>所在地区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/UserController.php",
    "groupTitle": "USER"
  },
  {
    "type": "post",
    "url": "/api/user/save-avatar",
    "title": "保存头像",
    "version": "1.0.0",
    "name": "/api/user/save-avatar",
    "group": "USER",
    "description": "<p>保存头像</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "media_id",
            "description": "<p>微信素材id</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n     \"id\": \"1\",\n         \"username\": \"jigang\",\n         \"mobile\": \"18810236729\",\n         \"avatar\": \"\\\"\\\"\",\n         \"store_id\": \"1\",\n         \"role\": \"1\",\n         \"create_time\": \"2020-10-19 09:50:06\",\n         \"update_time\": \"2020-10-19 09:50:06\",\n         \"token\": \"MzZRX8Y+V4i8MBE2r+yCOQ==\"\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/UserController.php",
    "groupTitle": "USER"
  },
  {
    "type": "post",
    "url": "/api/user/save-new-password",
    "title": "保存新密码(重置密码)",
    "version": "1.0.0",
    "name": "/api/user/save-new-password",
    "group": "USER",
    "description": "<p>保存新密码(重置密码)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "description": "<p>用户手机号 (必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>短信验证码 (必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>账号密码(必填)</p>"
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n  \"data\": {},\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/UserController.php",
    "groupTitle": "USER"
  },
  {
    "type": "post",
    "url": "/api/user/save-username",
    "title": "保存用户名",
    "version": "1.0.0",
    "name": "/api/user/save-username",
    "group": "USER",
    "description": "<p>保存用户名</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "username",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n     \"id\": \"1\",\n         \"username\": \"jigang\",\n         \"mobile\": \"18810236729\",\n         \"avatar\": \"\\\"\\\"\",\n         \"store_id\": \"1\",\n         \"role\": \"1\",\n         \"create_time\": \"2020-10-19 09:50:06\",\n         \"update_time\": \"2020-10-19 09:50:06\",\n         \"token\": \"MzZRX8Y+V4i8MBE2r+yCOQ==\"\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/UserController.php",
    "groupTitle": "USER"
  },
  {
    "type": "get",
    "url": "/api/user/search-user-by-mobile",
    "title": "根据手机号搜索用户(添加店员时使用)",
    "version": "1.0.0",
    "name": "/api/user/search-user-by-mobile",
    "group": "USER",
    "description": "<p>根据手机号搜索用户(添加店员时使用)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "mobile",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
    "url": "/api/wechat/base-auth",
    "title": "微信基础授权跳转",
    "version": "1.0.0",
    "name": "base-auth",
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
          "content": "{\n\"code\": 99999,\n\"data\": {\n    \"access_token\":\"39_rKA94OG3j1gkkV70q3s4ZDv8QnYLie7g-izt7qTQ7BS8byo3uG-ee3xaKTsW8YpAJY91TekpyKIjtP2kUetG0A\",\n    \"expires_in\":7200,\"refresh_token\":\"39_yiyfocE8qt01KqdoLU8p4riSzv8eY-mLWdFnD4E-6EXuYLCxOX62GugkSV946HhsuU6mT35VecRWUE1LSr8ZHA\",\n    \"openid\":\"oB6MS6Npe8SFrVrznFeFA-nIIapo\",\n    \"scope\":\"snsapi_base\"\n    },\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/WechatController.php",
    "groupTitle": "Wechat"
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
            "description": "<p>来源（h5/pc）</p>"
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
            "description": "<p>来源（h5/pc）</p>"
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
            "field": "url",
            "description": "<p>授权url(选传)</p>"
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
    "title": "微信授权跳转",
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
    "url": "/api/manual-testing/all-tear-detection-destags",
    "title": "获取所有拆机检测菜单的描述标签",
    "version": "1.0.0",
    "name": "/api/manual-testing/all-tear-detection-destags",
    "group": "人工检测",
    "description": "<p>获取拆机检测菜单</p>",
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
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [],\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ManualTestingController.php",
    "groupTitle": "人工检测"
  },
  {
    "type": "post",
    "url": "/api/manual-testing/get-dropdown-menu",
    "title": "获取拆机检测下拉菜单",
    "version": "1.0.0",
    "name": "/api/manual-testing/get-dropdown-menu",
    "group": "人工检测",
    "description": "<p>获取拆机检测下拉菜单</p>",
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
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [],\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ManualTestingController.php",
    "groupTitle": "人工检测"
  },
  {
    "type": "get",
    "url": "/api/manual-testing/get-filter-list",
    "title": "获取人工筛项选菜单列表",
    "version": "1.0.0",
    "name": "/api/manual-testing/get-filter-list",
    "group": "人工检测",
    "description": "<p>获取人工筛项选列表 <br></p> <ol> <li>优先获取店铺配置的筛选项 <br></li> <li>如果店铺菜单配置不存在，则新建店铺菜单，然后返回店铺菜单<br></li> </ol>",
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
          "content": "{\n    \"code\": 99999,\n    \"data\": [\n            {\n            \"id\": \"231\",\n            \"store_id\": \"1\",\n            \"order\": \"1\",\n            \"type\": \"1\",\n            \"name\": \"有锁无锁\",\n            \"yes_value\": \"无锁\",\n            \"no_value\": \"有锁\",\n            \"des_tags\": [\n              \"有配置锁\",\n              \"每次插卡弹激活界面，设置后可进界面\",\n              \"每次插卡弹激活界面，进不了界面\"\n            ],\n            \"create_time\": \"2020-11-28 19:19:18\"\n  },\n      ...\n  ],\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ManualTestingController.php",
    "groupTitle": "人工检测"
  },
  {
    "type": "post",
    "url": "/api/manual-testing/get-manual",
    "title": "获取人工检测编辑数据",
    "version": "1.0.0",
    "name": "/api/manual-testing/get-manual",
    "group": "人工检测",
    "description": "<p>获取人工检测编辑数据</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [],\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ManualTestingController.php",
    "groupTitle": "人工检测"
  },
  {
    "type": "post",
    "url": "/api/manual-testing/get-result-logs",
    "title": "人工检测多次检测对比（记录人工检测日志）",
    "version": "1.0.0",
    "name": "/api/manual-testing/get-result-logs",
    "group": "人工检测",
    "description": "<p>人工检测多次检测对比（记录人工检测日志）</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [],\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ManualTestingController.php",
    "groupTitle": "人工检测"
  },
  {
    "type": "post",
    "url": "/api/manual-testing/save-draft",
    "title": "保存人工检测草稿",
    "version": "1.0.0",
    "name": "/api/manual-testing/save-draft",
    "group": "人工检测",
    "description": "<p>保存人工检测草稿</p>",
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
            "field": "resultz",
            "description": "<p>人工检测JSON数据结果  <br> [{'filter_id':1,,'name_index':'simlock', 'choose':1, 'img':'上传的图片', 'des_tags:'['标签1', '标签2']}, ...]  <br> filter_id 参数: 检测小项ID choose 参数: 0=未检测, 1=正常,  2=有问题 img: 上传的图片 des_tags 参数 : 选择的描述标签</p>"
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
    "url": "/api/manual-testing/save-filter",
    "title": "保存人工检测菜单",
    "version": "1.0.0",
    "name": "/api/manual-testing/save-filter",
    "group": "人工检测",
    "description": "<p>保存人工检测菜单，检测小项排序、隐藏等、下面的描述标签</p>",
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
            "field": "store_id",
            "description": "<p>店铺ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>数据 { // 全部的检测小项 &quot;filters&quot;: [ { &quot;name_index&quot;: &quot;screen_fineness&quot;, &quot;order&quot;:1, // 排序 &quot;is_display:1, // 1为现实 0为隐藏 &quot;is_delete:0, // 1为删除&quot; &quot;des_tags&quot;:[ &quot;微花&quot;, &quot;划伤&quot;, &quot;硬伤&quot; ] },</p> <pre><code>     ....  ],  // 修改的拆机检测  &quot;tear_detections&quot;: [      &quot;name_index&quot;: &quot;screen_parts_origon&quot;,      &quot;des_tags&quot;: [          &quot;屏幕：国产屏&quot;,          &quot;屏幕：组装屏&quot;      ]  ] </code></pre> <p>}</p>"
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
            "field": "video",
            "description": "<p>上传的描述文件地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resultz",
            "description": "<p>人工检测JSON数据结果  <br> [{'filter_id':1,,'name_index':'simlock', 'choose':1, 'imgz':'上传的图片', 'des_tags:'['标签1', '标签2']}, ...]  <br> filter_id 参数: 检测小项ID choose 参数: 0=未检测, 1=正常,  2=有问题 imgz: 上传的图片 des_tags 参数 : 选择的描述标签</p>"
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
    "url": "/api/manual-testing/tear-detection-destags",
    "title": "获取拆机检测菜单的描述标签",
    "version": "1.0.0",
    "name": "/api/manual-testing/tear-detection-destags",
    "group": "人工检测",
    "description": "<p>获取拆机检测菜单</p>",
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
            "type": "String",
            "optional": false,
            "field": "name_index",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [],\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ManualTestingController.php",
    "groupTitle": "人工检测"
  },
  {
    "type": "post",
    "url": "/api/manual-testing/worker-detection",
    "title": "获取人工检测工人操作页面",
    "version": "1.0.0",
    "name": "/api/manual-testing/worker-detection",
    "group": "人工检测",
    "description": "<p>获取人工检测工人操作页面</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": [],\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ManualTestingController.php",
    "groupTitle": "人工检测"
  },
  {
    "type": "get",
    "url": "/api/share/get-share-record",
    "title": "获取分享记录",
    "version": "1.0.0",
    "name": "/api/share/get-share-record",
    "group": "分享",
    "description": "<p>获取分享记录</p>",
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
    "url": "/api/share/new-record",
    "title": "生成分享查询记录",
    "version": "1.0.0",
    "name": "/api/share/new-record",
    "group": "分享",
    "description": "<p>分享查询记录: 记录页面分享记录只传record_id, 详情页面分享需要传idz(即勾选条目的id)</p>",
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
            "description": "<p>分享类型<br> 1 查询记录 </br> 2 电脑验机记录 </br> 3 进货质检记录 </br> 4 扣钱</br></p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "param",
            "description": "<p>分享参数 查询记录 {&quot;stype&quot;:1, &quot;param&quot;:[{&quot;record_id&quot;:1, &quot;idz&quot;:[1,2,3]}]} 其中idz 为详情id 电脑验机记录 {&quot;stype&quot;:2, &quot;param&quot;:[{&quot;record_id&quot;:1, &quot;idz&quot;:[1,2,3]}]} 其中 idz 为设备id 进货质检记录 {&quot;stype&quot;:3, &quot;param&quot;:[{&quot;record_id&quot;:1, &quot;idz&quot;:[1,2,3]}]} 其中 idz 为进货设备id 进货质检记录 {&quot;stype&quot;:4, &quot;param&quot;:[{&quot;record_id&quot;:1, &quot;idz&quot;:[]}]}</p>"
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
    "url": "/store/goods/goods-detail",
    "title": "商品详情页",
    "version": "1.0.0",
    "name": "/store/goods/goods-detail",
    "group": "店铺-商品",
    "description": "<p>商品详情页</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/GoodsController.php",
    "groupTitle": "店铺-商品"
  },
  {
    "type": "get",
    "url": "/store/goods/report-detail",
    "title": "验机报告详情",
    "version": "1.0.0",
    "name": "/store/goods/report-detail",
    "group": "店铺-商品",
    "description": "<p>验机报告详情</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/GoodsController.php",
    "groupTitle": "店铺-商品"
  },
  {
    "type": "get",
    "url": "/store/goods/shopping-cart-count",
    "title": "购物车logo显示",
    "version": "1.0.0",
    "name": "/store/goods/shopping-cart-count",
    "group": "店铺-商品",
    "description": "<p>购物车logo显示</p>",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/GoodsController.php",
    "groupTitle": "店铺-商品"
  },
  {
    "type": "get",
    "url": "/store/my-buy/all-list",
    "title": "全部列表",
    "version": "1.0.0",
    "name": "/store/my-buy/all-list",
    "group": "店铺-我买入的",
    "description": "<p>全部列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "get",
    "url": "/store/my-buy/close-order",
    "title": "关闭交易",
    "version": "1.0.0",
    "name": "/store/my-buy/close-order",
    "group": "店铺-我买入的",
    "description": "<p>关闭交易</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "post",
    "url": "/store/my-buy/confirm-received",
    "title": "确认收货",
    "version": "1.0.0",
    "name": "/store/my-buy/confirm-received",
    "group": "店铺-我买入的",
    "description": "<p>关闭交易</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "get",
    "url": "/store/my-buy/delete-order",
    "title": "删除订单",
    "version": "1.0.0",
    "name": "/store/my-buy/delete-order",
    "group": "店铺-我买入的",
    "description": "<p>删除订单</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "post",
    "url": "/store/my-buy/delete-refuse-goods",
    "title": "删除被拒绝的商品",
    "version": "1.0.0",
    "name": "/store/my-buy/delete-refuse-goods",
    "group": "店铺-我买入的",
    "description": "<p>删除被拒绝的商品</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "post",
    "url": "/store/my-buy/order-detail",
    "title": "买入的订单详情",
    "version": "1.0.0",
    "name": "/store/my-buy/order-detail",
    "group": "店铺-我买入的",
    "description": "<p>买入的订单详情</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "post",
    "url": "/store/my-buy/save-marker",
    "title": "保存标记",
    "version": "1.0.0",
    "name": "/store/my-buy/save-marker",
    "group": "店铺-我买入的",
    "description": "<p>保存标记</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marker",
            "description": "<p>标记内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "marker_level",
            "description": "<p>标记等级</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "post",
    "url": "/store/my-buy/save-message",
    "title": "保存给卖家留言",
    "version": "1.0.0",
    "name": "/store/my-buy/save-message",
    "group": "店铺-我买入的",
    "description": "<p>保存给卖家留言</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messege",
            "description": "<p>留言内容</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "get",
    "url": "/store/my-buy/wait-approved-list",
    "title": "待审核列表",
    "version": "1.0.0",
    "name": "/store/my-buy/wait-approved-list",
    "group": "店铺-我买入的",
    "description": "<p>待审核列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "get",
    "url": "/store/my-buy/wait-delivery-list",
    "title": "待发货列表",
    "version": "1.0.0",
    "name": "/store/my-buy/wait-delivery-list",
    "group": "店铺-我买入的",
    "description": "<p>待发货列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "get",
    "url": "/store/my-buy/wait-received-list",
    "title": "待收货列表",
    "version": "1.0.0",
    "name": "/store/my-buy/wait-received-list",
    "group": "店铺-我买入的",
    "description": "<p>待收货列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MyBuyController.php",
    "groupTitle": "店铺-我买入的"
  },
  {
    "type": "get",
    "url": "/store/my-sell/all-list",
    "title": "全部列表",
    "version": "1.0.0",
    "name": "/store/my-sell/all-list",
    "group": "店铺-我卖出的",
    "description": "<p>全部列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/close-order",
    "title": "关闭交易",
    "version": "1.0.0",
    "name": "/store/my-sell/close-order",
    "group": "店铺-我卖出的",
    "description": "<p>关闭交易</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/delete-order",
    "title": "删除订单",
    "version": "1.0.0",
    "name": "/store/my-sell/delete-order",
    "group": "店铺-我卖出的",
    "description": "<p>删除订单</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/delivery",
    "title": "发货",
    "version": "1.0.0",
    "name": "/store/my-sell/delivery",
    "group": "店铺-我卖出的",
    "description": "<p>发货</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/delivery-not-pay",
    "title": "未付款先发货",
    "version": "1.0.0",
    "name": "/store/my-sell/delivery",
    "group": "店铺-我卖出的",
    "description": "<p>未付款先发货</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/get-payed",
    "title": "已付款",
    "version": "1.0.0",
    "name": "/store/my-sell/get-payed",
    "group": "店铺-我卖出的",
    "description": "<p>已付款</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/muti-price-detail",
    "title": "商品多人出价详情",
    "version": "1.0.0",
    "name": "/store/my-sell/mutil-price-detail",
    "group": "店铺-我卖出的",
    "description": "<p>商品多人出价详情</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/order-detail",
    "title": "卖出的订单详情",
    "version": "1.0.0",
    "name": "/store/my-sell/order-detail",
    "group": "店铺-我卖出的",
    "description": "<p>卖出的订单详情</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/pass-approved",
    "title": "审核通过",
    "version": "1.0.0",
    "name": "/store/my-sell/pass-approved",
    "group": "店铺-我卖出的",
    "description": "<p>审核通过</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20001",
            "description": "<p>本订单中含有代销商品, 你还没有向上家订货</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "20002",
            "description": "<p>本订单中含有代销商品, 你的上家还没有审核通过</p>"
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
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/print-order",
    "title": "打印订单",
    "version": "1.0.0",
    "name": "/store/my-sell/print-order",
    "group": "店铺-我卖出的",
    "description": "<p>打印订单</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/save-logistic-info",
    "title": "保存物流信息",
    "version": "1.0.0",
    "name": "/store/my-sell/save-logistic-info",
    "group": "店铺-我卖出的",
    "description": "<p>发货</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lg_company",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lg_number",
            "description": "<p>物流单号</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/save-marker",
    "title": "保存标记",
    "version": "1.0.0",
    "name": "/store/my-sell/save-marker",
    "group": "店铺-我卖出的",
    "description": "<p>保存标记</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marker",
            "description": "<p>标记内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "marker_level",
            "description": "<p>标记等级</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/save-update-order",
    "title": "保存待审核的订单",
    "version": "1.0.0",
    "name": "/store/my-sell/save-update-order",
    "group": "店铺-我卖出的",
    "description": "<p>保存待审核的订单，包括物流设置、拒绝购买请求和添加修改成交价</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>内容 logistic:{&quot;lg_company&quot;:&quot;顺丰速递&quot;, &quot;lg_pay_type&quot;:&quot;寄付&quot;, &quot;lg_protect&quot;:1, &quot;lg_protect_cost&quot;,200} goods:[{'goods_id':1, 'order_price':3000, 'is_refused':1}, {....},...]</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "get",
    "url": "/store/my-sell/wait-approved-list",
    "title": "待审核列表",
    "version": "1.0.0",
    "name": "/store/my-sell/wait-approved-list",
    "group": "店铺-我卖出的",
    "description": "<p>待审核列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "get",
    "url": "/store/my-sell/wait-delivery-list",
    "title": "待发货列表",
    "version": "1.0.0",
    "name": "/store/my-sell/wait-delivery-list",
    "group": "店铺-我卖出的",
    "description": "<p>待付款列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "get",
    "url": "/store/my-sell/wait-pay-list",
    "title": "待付款列表",
    "version": "1.0.0",
    "name": "/store/my-sell/wait-pay-list",
    "group": "店铺-我卖出的",
    "description": "<p>待付款列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "get",
    "url": "/store/my-sell/wait-received-list",
    "title": "已发货列表",
    "version": "1.0.0",
    "name": "/store/my-sell/wait-received-list",
    "group": "店铺-我卖出的",
    "description": "<p>已发货列表(待收货)</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": "<p>分页id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "店铺-我卖出的"
  },
  {
    "type": "post",
    "url": "/api/store-payment/add-payment",
    "title": "添加收款账户",
    "version": "1.0.0",
    "name": "/api/store-payment/add-payment",
    "group": "店铺-收款方式",
    "description": "<p>添加收款账户</p>",
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
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型: 1 支付宝 2 微信 3 银行卡</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qrcode",
            "description": "<p>二维码图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank",
            "description": "<p>开户行</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_branch",
            "description": "<p>网点支行</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StorePaymentController.php",
    "groupTitle": "店铺-收款方式"
  },
  {
    "type": "get",
    "url": "/api/store-payment/list",
    "title": "收款账户列表",
    "version": "1.0.0",
    "name": "/api/store-payment/list",
    "group": "店铺-收款方式",
    "description": "<p>收款账户列表</p>",
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
    "filename": "backend/modules/api/controllers/StorePaymentController.php",
    "groupTitle": "店铺-收款方式"
  },
  {
    "type": "post",
    "url": "/api/store-payment/save-payment",
    "title": "保存修改收款账户",
    "version": "1.0.0",
    "name": "/api/store-payment/save-payment",
    "group": "店铺-收款方式",
    "description": "<p>保存修改收款账户</p>",
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
            "type": "Number",
            "optional": false,
            "field": "payment_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型: 1 支付宝 2 微信 3 银行卡</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qrcode",
            "description": "<p>二维码图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank",
            "description": "<p>开户行</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_branch",
            "description": "<p>网点支行</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StorePaymentController.php",
    "groupTitle": "店铺-收款方式"
  },
  {
    "type": "post",
    "url": "/api/store-payment/del-payment",
    "title": "删除收款账户",
    "version": "1.0.0",
    "name": "/api/store-payment/save-payment",
    "group": "店铺-收款方式",
    "description": "<p>删除收款账户</p>",
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
            "type": "Number",
            "optional": false,
            "field": "payment_id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StorePaymentController.php",
    "groupTitle": "店铺-收款方式"
  },
  {
    "type": "post",
    "url": "/api/store/add-printer",
    "title": "添加打印机",
    "version": "1.0.0",
    "name": "/api/store/add-printer",
    "group": "店铺",
    "description": "<p>添加打印机</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 (h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>打印机设备平台 xprinter/poscom/xpyun</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>打印机设备Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_default",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "get",
    "url": "/api/store/add-user",
    "title": "店铺添加店员",
    "version": "1.0.0",
    "name": "/api/store/add-user",
    "group": "店铺",
    "description": "<p>店铺添加店员</p>",
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
            "type": "Number",
            "optional": false,
            "field": "uid",
            "description": "<p>添加的用户id</p>"
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
            "description": "<p>添加失败</p>"
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
    "type": "get",
    "url": "/api/store/address-list",
    "title": "获取店铺收货地址列表",
    "version": "1.0.0",
    "name": "/api/store/address-list",
    "group": "店铺",
    "description": "<p>获取店铺收货地址列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "field": "20001",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "post",
    "url": "/api/store/create-recharge-order",
    "title": "创建充值积分预支付订单",
    "version": "1.0.0",
    "name": "/api/store/create-recharge-order",
    "group": "店铺",
    "description": "<p>创建充值积分预支付订单</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 (h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "openid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>充值金额</p>"
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
            "description": "<p>创建订单失败</p>"
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
    "url": "/api/store/del-printer",
    "title": "删除打印机",
    "version": "1.0.0",
    "name": "/api/store/del-printer",
    "group": "店铺",
    "description": "<p>保存修改打印机</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 (h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "printer_id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "get",
    "url": "/api/store/download-trade-details",
    "title": "下载积分交易明细",
    "version": "1.0.0",
    "name": "/api/store/download-trade-details",
    "group": "店铺",
    "description": "<p>下载积分交易明细</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>排序规则 默认 0 实际查询时间排序 1 查询记录的日期时间排序</p>"
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
    "type": "get",
    "url": "/api/store/get-integral",
    "title": "获取店铺积分",
    "version": "1.0.0",
    "name": "/api/store/get-integral",
    "group": "店铺",
    "description": "<p>获取店铺积分</p>",
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
    "type": "get",
    "url": "/api/store/get-store-info",
    "title": "获取店铺基本信息",
    "version": "1.0.0",
    "name": "/api/store/get-store-info",
    "group": "店铺",
    "description": "<p>获取店铺基本信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 (h5/pc)</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "get",
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
    "type": "get",
    "url": "/api/store/index",
    "title": "我的店铺首页",
    "version": "1.0.0",
    "name": "/api/store/index",
    "group": "店铺",
    "description": "<p>我的店铺首页</p>",
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
    "url": "/api/store/new-address",
    "title": "新增店铺地址",
    "version": "1.0.0",
    "name": "/api/store/new-address",
    "group": "店铺",
    "description": "<p>新增店铺地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>所在地区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是默认地址值为1，否则为0</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "post",
    "url": "/api/store/printer-list",
    "title": "打印机列表",
    "version": "1.0.0",
    "name": "/api/store/printer-list",
    "group": "店铺",
    "description": "<p>打印机列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 (h5/pc)</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "get",
    "url": "/api/store/remove-user",
    "title": "用户移出店铺团队",
    "version": "1.0.0",
    "name": "/api/store/remove-user",
    "group": "店铺",
    "description": "<p>用户移出店铺团队</p>",
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
            "type": "Number",
            "optional": false,
            "field": "uid",
            "description": "<p>要移除的用户ID</p>"
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
    "url": "/api/store/save-address",
    "title": "保存店铺收货地址",
    "version": "1.0.0",
    "name": "/api/store/save-address",
    "group": "店铺",
    "description": "<p>保存店铺收货地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>所在地区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是默认地址值为1，否则为0</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "post",
    "url": "/api/store/save-printer",
    "title": "保存修改打印机",
    "version": "1.0.0",
    "name": "/api/store/save-printer",
    "group": "店铺",
    "description": "<p>保存修改打印机</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 (h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "printer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>打印机设备Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_default",
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
    "url": "/api/store/save-store-info",
    "title": "保存店铺基本信息",
    "version": "1.0.0",
    "name": "/api/store/save-store-info",
    "group": "店铺",
    "description": "<p>保存店铺基本信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 (h5/pc)</p>"
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
            "type": "Json",
            "optional": false,
            "field": "param",
            "description": "<p>{&quot;avatar&quot;:&quot;头像&quot;,&quot;name&quot;:&quot;小王的店铺&quot;,&quot;id&quot;,&quot;店铺ID&quot;,&quot;des&quot;:&quot;说明&quot;,....} <br> avatar : 头像 微信media_id <br> name: 店铺名称 <br> unique_id: 店铺ID <br> des: 店铺说明 <br> wechat: 客服微信 <br> mobile: 客服电话 <br> view: 查看店铺商品权限 <br> friend_verify: 加我好友时需要验证 <br> agetnt_verify: 成为我的代理时需要验证</p>"
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
    "url": "/api/store/set-default-address",
    "title": "设置默认地址",
    "version": "1.0.0",
    "name": "/api/store/set-default-address",
    "group": "店铺",
    "description": "<p>设置默认地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "post",
    "url": "/api/store/set-default-printer",
    "title": "设置默认打印机",
    "version": "1.0.0",
    "name": "/api/store/set-default-printer",
    "group": "店铺",
    "description": "<p>设置默认打印机</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 (h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机id</p>"
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
    "url": "/api/store/test-printer",
    "title": "测试打印机",
    "version": "1.0.0",
    "name": "/api/store/test-printer",
    "group": "店铺",
    "description": "<p>测试打印机</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 (h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>店铺打印机Id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "get",
    "url": "/api/store/trade-details",
    "title": "获取积分交易明细",
    "version": "1.0.0",
    "name": "/api/store/trade-details",
    "group": "店铺",
    "description": "<p>获取积分交易明细</p>",
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
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>排序规则 默认 0 实际查询时间排序 1 查询记录的日期时间排序</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", de-detailstrade-details\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreController.php",
    "groupTitle": "店铺"
  },
  {
    "type": "get",
    "url": "/api/store/user-addto-admin",
    "title": "设置为管理员",
    "version": "1.0.0",
    "name": "/api/store/user-addto-admin",
    "group": "店铺",
    "description": "<p>设置为管理员</p>",
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
            "type": "Number",
            "optional": false,
            "field": "uid",
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
    "url": "/api/store/wxpay-notify",
    "title": "支付成功通知",
    "version": "1.0.0",
    "name": "/api/store/wxpay-notify",
    "group": "店铺",
    "description": "<p>支付成功通知</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "php://input",
            "description": "<p>xml 数据</p>"
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
            "description": "<p>创建订单失败</p>"
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
    "type": "get",
    "url": "/api/agent/agent-setting",
    "title": "获取代理设置页面数据",
    "version": "1.0.0",
    "name": "/api/agent/agent-setting",
    "group": "店铺代理",
    "description": "<p>获取代理设置页面数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "agent_store_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/agree-agent-request",
    "title": "同意代理请求",
    "version": "1.0.0",
    "name": "/api/agent/agree-agent-request",
    "group": "店铺代理",
    "description": "<p>同意代理请求</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "request_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/agree-by-agent-request",
    "title": "同意上家请求",
    "version": "1.0.0",
    "name": "/api/agent/agree-by-agent-request",
    "group": "店铺代理",
    "description": "<p>同意上家请求</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "request_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/delete-agent",
    "title": "删除代理",
    "version": "1.0.0",
    "name": "/api/agent/delete-agent",
    "group": "店铺代理",
    "description": "<p>删除代理</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "store_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/delete-by-agent",
    "title": "删除上家(被代理)",
    "version": "1.0.0",
    "name": "/api/agent/delete-by-agent",
    "group": "店铺代理",
    "description": "<p>删除上家</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "store_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/my-agent-goods-list",
    "title": "所有代理店铺的商品列表",
    "version": "1.0.0",
    "name": "/api/agent/my-agent-goods-list",
    "group": "店铺代理",
    "description": "<p>所有代理店铺的商品列表</p>",
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
            "type": "Json",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选参数 <br> device 设备类型 <br> model 机型 <br> price_min 价格区间 最小 <br> price_max 价格区间 最大 <br></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "sortz",
            "description": "<br> price 价格排序 0 默认排序 1 价格由高到低 2 价格由低到高 <br> age 库龄排序 0 默认 1 库龄由高到低 2 库龄由低到高 <br>"
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
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/my-agent-list",
    "title": "我的代理列表",
    "version": "1.0.0",
    "name": "/api/agent/my-agent-list",
    "group": "店铺代理",
    "description": "<p>我的代理列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "field": "20001",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/my-by-agent-goods-list",
    "title": "所有上家店铺的商品列表",
    "version": "1.0.0",
    "name": "/api/agent/my-by-agent-goods-list",
    "group": "店铺代理",
    "description": "<p>所有上家店铺的商品列表</p>",
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
            "type": "Json",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选参数 <br> device 设备类型 <br> model 机型 <br> price_min 价格区间 最小 <br> price_max 价格区间 最大 <br></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>分页</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "sortz",
            "description": "<br> price 价格排序 0 默认排序 1 价格由高到低 2 价格由低到高 <br> age 库龄排序 0 默认 1 库龄由高到低 2 库龄由低到高 <br>"
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
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/my-by-agent-list",
    "title": "我的上家列表(被代理)",
    "version": "1.0.0",
    "name": "/api/agent/my-by-agent-list",
    "group": "店铺代理",
    "description": "<p>我的上家列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "field": "20001",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/not-agree-agent-request",
    "title": "不同意代理请求",
    "version": "1.0.0",
    "name": "/api/agent/not-agree-agent-request",
    "group": "店铺代理",
    "description": "<p>不同意代理请求</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "request_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/not-agree-by-agent-request",
    "title": "不同意上家请求",
    "version": "1.0.0",
    "name": "/api/agent/not-agree-by-agent-request",
    "group": "店铺代理",
    "description": "<p>不同意上家请求</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "request_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/request-list",
    "title": "好友申请列表",
    "version": "1.0.0",
    "name": "/api/agent/request-list",
    "group": "店铺代理",
    "description": "<p>好友申请列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "field": "20001",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/request-list-by-agent",
    "title": "上家申请列表",
    "version": "1.0.0",
    "name": "/api/agent/request-list-by-agent",
    "group": "店铺代理",
    "description": "<p>上家申请列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "field": "20001",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/request-new-agent",
    "title": "申请代理",
    "version": "1.0.0",
    "name": "/api/agent/request-new-agent",
    "group": "店铺代理",
    "description": "<p>申请代理</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "store_id",
            "description": "<p>对方店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>申请内容</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/agent/request-new-by-agent",
    "title": "申请上家",
    "version": "1.0.0",
    "name": "/api/agent/request-new-by-agent",
    "group": "店铺代理",
    "description": "<p>申请上家</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "store_id",
            "description": "<p>对方店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>申请内容</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "get",
    "url": "/api/agent/save-agent-price",
    "title": "保存代理添加价格",
    "version": "1.0.0",
    "name": "/api/agent/save-agent-price",
    "group": "店铺代理",
    "description": "<p>保存代理添加价格</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "agent_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "add_price",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/AgentController.php",
    "groupTitle": "店铺代理"
  },
  {
    "type": "post",
    "url": "/api/friend/agree-friend-request",
    "title": "同意好友请求",
    "version": "1.0.0",
    "name": "/api/friend/agree-friend-request",
    "group": "店铺好友",
    "description": "<p>同意好友请求</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark_name",
            "description": "<p>设置备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "let_ta_view",
            "description": "<p>不让他看</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "view_ta",
            "description": "<p>不看他</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "post",
    "url": "/api/friend/create-order-directly",
    "title": "直接下单(好友列表)",
    "version": "1.0.0",
    "name": "/api/friend/create-order-directly",
    "group": "店铺好友",
    "description": "<p>直接下单购买</p>",
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
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>如下 { &quot;address_id&quot;:4, &quot;data&quot;:[ {&quot;sell_store_id&quot;:2, &quot;goods_list&quot;:[{&quot;goods_id&quot;:3, &quot;report_price&quot;:1000}], &quot;message&quot;:&quot;msg22223333&quot;}, {&quot;sell_store_id&quot;:3, &quot;goods_list&quot;:[{&quot;goods_id&quot;:12, &quot;report_price&quot;:2000}], &quot;message&quot;:&quot;msg121212&quot;} ] }</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "post",
    "url": "/api/friend/delete-friend",
    "title": "删除好友",
    "version": "1.0.0",
    "name": "/api/friend/delete-friend",
    "group": "店铺好友",
    "description": "<p>删除好友</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "friend_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "post",
    "url": "/api/friend/filling-order",
    "title": "填写订单(直接下单)",
    "version": "1.0.0",
    "name": "/api/friend/filling-order",
    "group": "店铺好友",
    "description": "<p>填写订单, 直接下单,</p>",
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
            "field": "goods_idz",
            "description": "<p>商品id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "get",
    "url": "/api/friend/friend-setting",
    "title": "获取好友设置页面数据",
    "version": "1.0.0",
    "name": "/api/friend/friend-setting",
    "group": "店铺好友",
    "description": "<p>好友设置页面</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "friend_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "post",
    "url": "/api/friend/my-friend-list",
    "title": "我的好友列表",
    "version": "1.0.0",
    "name": "/api/friend/my-friend-list",
    "group": "店铺好友",
    "description": "<p>我的好友列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "field": "20001",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n   \"code\": 99999,\n       \"data\": {\n  },\n      \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "post",
    "url": "/api/friend/not-agree-friend-request",
    "title": "不同意好友请求",
    "version": "1.0.0",
    "name": "/api/friend/not-agree-friend-request",
    "group": "店铺好友",
    "description": "<p>不同意好友请求</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "request_id",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "post",
    "url": "/api/friend/request-list",
    "title": "好友申请列表",
    "version": "1.0.0",
    "name": "/api/friend/request-list",
    "group": "店铺好友",
    "description": "<p>好友申请列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "field": "20001",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "post",
    "url": "/api/friend/request-new-friend",
    "title": "申请新的好友",
    "version": "1.0.0",
    "name": "/api/friend/request-new-friend",
    "group": "店铺好友",
    "description": "<p>申请新的好友</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "store_id",
            "description": "<p>对方店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>申请内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark_name",
            "description": "<p>设置备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "let_ta_view",
            "description": "<p>不让他看</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "view_ta",
            "description": "<p>不看他</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "post",
    "url": "/api/friend/save-friend-setting",
    "title": "保存好友设置",
    "version": "1.0.0",
    "name": "/api/friend/save-friend-setting",
    "group": "店铺好友",
    "description": "<p>保存好友设置</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "friend_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "param",
            "description": "<p><br>{String} remark_name <br>{Number} view_ta <br>{Number} let_ta_view</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "get",
    "url": "/api/friend/search-store-list",
    "title": "获取店铺列表",
    "version": "1.0.0",
    "name": "/api/friend/search-store-list",
    "group": "店铺好友",
    "description": "<p>获取店铺列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源(h5/pc)</p>"
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
            "type": "String",
            "optional": false,
            "field": "txt",
            "description": "<p>搜索文本(手机号)</p>"
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " {\n \"code\": 99999,\n     \"data\": {\n},\n    \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/FriendController.php",
    "groupTitle": "店铺好友"
  },
  {
    "type": "post",
    "url": "/api/store-manage/agent-batch-off-sell",
    "title": "批量下架(代理)",
    "version": "1.0.0",
    "name": "/api/store-manage/agent-batch-off-on-sell",
    "group": "店铺管理",
    "description": "<p>批量下架</p>",
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
            "type": "JSON",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>进货商品ID</p>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "post",
    "url": "/api/store-manage/agent-batch-on-sell",
    "title": "代销商品批量上架",
    "version": "1.0.0",
    "name": "/api/store-manage/agent-batch-on-sell",
    "group": "店铺管理",
    "description": "<p>代销商品批量上架</p>",
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
            "type": "JSON",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>进货商品ID</p>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "get",
    "url": "/api/store-manage/agent-goods-off-sell",
    "title": "下架代销的商品列表",
    "version": "1.0.0",
    "name": "/api/store-manage/agent-goods-off-sell",
    "group": "店铺管理",
    "description": "<p>下架代销的商品列表</p>",
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
          "content": "{\n\"code\": 99999,\n\"data\": true,\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "get",
    "url": "/api/store-manage/agent-goods-on-sell",
    "title": "上架代销的商品列表",
    "version": "1.0.0",
    "name": "/api/store-manage/agent-goods-on-sell",
    "group": "店铺管理",
    "description": "<p>上架代销的商品列表</p>",
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
          "content": "{\n\"code\": 99999,\n\"data\": true,\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "post",
    "url": "/api/store-manage/batch-off-sell",
    "title": "批量下架",
    "version": "1.0.0",
    "name": "/api/store-manage/batch-off-on-sell",
    "group": "店铺管理",
    "description": "<p>批量下架</p>",
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
            "type": "JSON",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>进货商品ID</p>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "post",
    "url": "/api/store-manage/batch-on-sell",
    "title": "批量上架",
    "version": "1.0.0",
    "name": "/api/store-manage/batch-on-sell",
    "group": "店铺管理",
    "description": "<p>批量上架</p>",
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
            "type": "JSON",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>进货商品ID</p>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "post",
    "url": "/api/store-manage/batch-search-goods",
    "title": "批量搜索",
    "version": "1.0.0",
    "name": "/api/store-manage/batch-search-goods",
    "group": "店铺管理",
    "description": "<p>批量搜索</p>",
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
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型: 0 上架商品列表  1 下架商品列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "agent",
            "description": "<p>是否代理商品: 0 我的商品   1 代理商品</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "snz",
            "description": "<p>SN序列号, 如 {&quot;snz&quot;:[&quot;354858096464824&quot;,&quot;357266090232311&quot;]}</p>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "get",
    "url": "/api/store-manage/my-goods-off-sell",
    "title": "下架我的商品列表",
    "version": "1.0.0",
    "name": "/api/store-manage/my-goods-off-sell",
    "group": "店铺管理",
    "description": "<p>下架我的商品列表</p>",
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
          "content": "{\n\"code\": 99999,\n\"data\": true,\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "get",
    "url": "/api/store-manage/my-goods-on-sell",
    "title": "上架我的商品列表",
    "version": "1.0.0",
    "name": "/api/store-manage/my-goods-on-sell",
    "group": "店铺管理",
    "description": "<p>上架我的商品列表</p>",
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
          "content": "{\n\"code\": 99999,\n\"data\": true,\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "post",
    "url": "/api/store-manage/off-sell",
    "title": "下架",
    "version": "1.0.0",
    "name": "/api/store-manage/off-sell",
    "group": "店铺管理",
    "description": "<p>下架</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>进货商品ID</p>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "post",
    "url": "/api/store-manage/on-sell",
    "title": "上架",
    "version": "1.0.0",
    "name": "/api/store-manage/on-sell",
    "group": "店铺管理",
    "description": "<p>上架</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>进货商品ID</p>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "get",
    "url": "/api/store-manage/sales-report",
    "title": "销售报表",
    "version": "1.0.0",
    "name": "/api/store-manage/sales-report",
    "group": "店铺管理",
    "description": "<p>销售报表</p>",
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
            "field": "month",
            "description": "<p>如 2021-02 或2021-10，如果不传默认去当前月份</p>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "post",
    "url": "/api/store-manage/save-standard-price",
    "title": "修改价格",
    "version": "1.0.0",
    "name": "/api/store-manage/save-standard-price",
    "group": "店铺管理",
    "description": "<p>修改价格</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "get",
    "url": "/api/store-manage/search-sales-report",
    "title": "查询销售报表",
    "version": "1.0.0",
    "name": "/api/store-manage/search-sales-report",
    "group": "店铺管理",
    "description": "<p>查询销售报表</p>",
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
            "field": "s",
            "description": "<p>模糊查询内容</p>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "get",
    "url": "/api/store-manage/store-index",
    "title": "获取店铺管理页面",
    "version": "1.0.0",
    "name": "/api/store-manage/store-index",
    "group": "店铺管理",
    "description": "<p>获取店铺管理页面</p>",
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
            "description": ""
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "get",
    "url": "/api/store-manage/store-list",
    "title": "获取店铺管理页面-店铺列表",
    "version": "1.0.0",
    "name": "/api/store-manage/store-list",
    "group": "店铺管理",
    "description": "<p>获取店铺管理页面-店铺列表</p>",
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
            "type": "Json",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "from_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "sortz",
            "description": "<br> price 价格排序 0 默认排序 1 价格由高到低 2 价格由低到高 <br> create_time 库龄排序 0 默认 1 库龄由高到低 2 库龄由低到高 <br>"
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
    "filename": "backend/modules/api/controllers/StoreManageController.php",
    "groupTitle": "店铺管理"
  },
  {
    "type": "post",
    "url": "/store/my-sell/create-agent-order",
    "title": "提交代销商品订单",
    "version": "1.0.0",
    "name": "/store/my-sell/create-agent-order",
    "group": "我卖出的",
    "description": "<p>提交代销商品订单</p>",
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
            "type": "Number",
            "optional": false,
            "field": "sell_store_id",
            "description": "<p>当前售卖的店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parent_order_id",
            "description": "<p>订单id，代销订单所属的订单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>如 [{&quot;goods_id&quot;:1, &quot;report_price&quot;:3000}, {&quot;goods_id&quot;:2, &quot;report_price&quot;:3000}]</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/filling-order-agent",
    "title": "填写订单(代销商品)",
    "version": "1.0.0",
    "name": "/store/my-sell/filling-order-agent",
    "group": "我卖出的",
    "description": "<p>填写订单(代销商品)</p>",
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
            "type": "Number",
            "optional": false,
            "field": "sell_store_id",
            "description": "<p>当前售卖的店铺id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parent_order_id",
            "description": "<p>订单id，代销订单所属的订单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/get-filling-payment",
    "title": "获取填写收款明细",
    "version": "1.0.0",
    "name": "/store/my-sell/get-filling-payment",
    "group": "我卖出的",
    "description": "<p>保存填写收款明细</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "我卖出的"
  },
  {
    "type": "get",
    "url": "/store/my-sell/get-payment-detail",
    "title": "收款明细",
    "version": "1.0.0",
    "name": "/store/my-sell/get-payment-detail",
    "group": "我卖出的",
    "description": "<p>卖出得订单性情，点击收款方式，返回的收款明细</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/save-payment",
    "title": "保存填写收款明细",
    "version": "1.0.0",
    "name": "/store/my-sell/save-payment",
    "group": "我卖出的",
    "description": "<p>保存填写收款明细</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "payz",
            "description": "<p>收款明细数据 [{&quot;payment_id&quot;:1, &quot;amount&quot;:15000}, {&quot;payment_id&quot;:2, &quot;amount&quot;:18000}]</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "我卖出的"
  },
  {
    "type": "post",
    "url": "/store/my-sell/update-agent-order-price",
    "title": "代销订单提交前改价",
    "version": "1.0.0",
    "name": "/store/my-sell/update-agent-order-price",
    "group": "我卖出的",
    "description": "<p>订单提交前改价</p>",
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
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/store/controllers/MySellController.php",
    "groupTitle": "我卖出的"
  },
  {
    "type": "get",
    "url": "/api/my-store/device-model-filters",
    "title": "获取机型筛选条件",
    "version": "1.0.0",
    "name": "/api/my-store/device-model-filters",
    "group": "我的店铺",
    "description": "<p>获取机型筛选条件</p>",
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
    "filename": "backend/modules/api/controllers/MyStoreController.php",
    "groupTitle": "我的店铺"
  },
  {
    "type": "post",
    "url": "/api/my-store/friend-store-list",
    "title": "所有好友店铺的商品列表",
    "version": "1.0.0",
    "name": "/api/my-store/friend-store-list",
    "group": "我的店铺",
    "description": "<p>所有好友店铺的商品列表</p>",
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
            "type": "Json",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选参数 <br> device 设备类型 <br> model 机型 <br> price_min 价格区间 最小 <br> price_max 价格区间 最大 <br></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>分页 默认1，为第一页</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "sortz",
            "description": "<br> price 价格排序 0 默认排序 1 价格由高到低 2 价格由低到高 <br> age 库龄排序 0 默认 1 库龄由高到低 2 库龄由低到高 <br>"
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
    "filename": "backend/modules/api/controllers/MyStoreController.php",
    "groupTitle": "我的店铺"
  },
  {
    "type": "post",
    "url": "/api/my-store/get-status",
    "title": "获取我的店铺消息状态",
    "version": "1.0.0",
    "name": "/api/my-store/get-status",
    "group": "我的店铺",
    "description": "<p>获取我的店铺消息状态</p>",
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
    "filename": "backend/modules/api/controllers/MyStoreController.php",
    "groupTitle": "我的店铺"
  },
  {
    "type": "get",
    "url": "/api/my-store/price-filters",
    "title": "获取价格筛选条件",
    "version": "1.0.0",
    "name": "/api/my-store/price-filters",
    "group": "我的店铺",
    "description": "<p>获取价格筛选条件</p>",
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
    "filename": "backend/modules/api/controllers/MyStoreController.php",
    "groupTitle": "我的店铺"
  },
  {
    "type": "get",
    "url": "/api/my-store/store-index",
    "title": "获取我的店铺页面",
    "version": "1.0.0",
    "name": "/api/my-store/store-index",
    "group": "我的店铺",
    "description": "<p>获取我的店铺页面</p>",
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
    "filename": "backend/modules/api/controllers/MyStoreController.php",
    "groupTitle": "我的店铺"
  },
  {
    "type": "post",
    "url": "/api/my-store/store-list",
    "title": "获取我的店铺页面-店铺列表(筛选使用)",
    "version": "1.0.0",
    "name": "/api/my-store/store-list",
    "group": "我的店铺",
    "description": "<p>获取我的店铺页面-店铺列表</p>",
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
            "type": "Json",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选参数 <br> device 设备类型 <br> model 机型 <br> price_min 价格区间 最小 <br> price_max 价格区间 最大 <br></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "sortz",
            "description": "<br> price 价格排序 0 默认排序 1 价格由高到低 2 价格由低到高 <br> age 库龄排序 0 默认 1 库龄由高到低 2 库龄由低到高 <br>"
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
    "filename": "backend/modules/api/controllers/MyStoreController.php",
    "groupTitle": "我的店铺"
  },
  {
    "type": "post",
    "url": "/api/pricing/batch-search-pricing",
    "title": "批量搜索扣钱",
    "version": "1.0.0",
    "name": "/api/pricing/batch-search-pricing",
    "group": "扣钱",
    "description": "<p>批量搜索扣钱</p>",
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
            "description": "<p>多个SN/IMEI</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing/delete-pricing-item",
    "title": "删除扣钱项",
    "version": "1.0.0",
    "name": "/api/pricing/delete-pricing-item",
    "group": "扣钱",
    "description": "<p>删除扣钱项</p>",
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
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>扣钱项ID</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing/download",
    "title": "下载扣钱数据",
    "version": "1.0.0",
    "name": "/api/pricing/download",
    "group": "扣钱",
    "description": "<p>下载扣钱数据</p>",
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
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品ID 数组</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "get",
    "url": "/api/pricing/goods-pricing-detail",
    "title": "商品设备扣钱详情",
    "version": "1.0.0",
    "name": "/api/pricing/goods-pricing-detail",
    "group": "扣钱",
    "description": "<p>商品设备扣钱详情</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品ID</p>"
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
          "content": "{\n    \"code\": 99999,\n     \"data\": \"\",\n     \"msg\": \"成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "get",
    "url": "/api/pricing/goods-pricing-filters",
    "title": "获取扣钱项筛选(完整验机记录)",
    "version": "1.0.0",
    "name": "/api/pricing/goods-pricing-filters",
    "group": "扣钱",
    "description": "<p>获取扣钱项筛选(完整验机记录)</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品ID</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing/goods-to-bargained",
    "title": "更新商品状态为已议价",
    "version": "1.0.0",
    "name": "/api/pricing/goods-to-bargained",
    "group": "扣钱",
    "description": "<p>已议价</p>",
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
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品ID 数组</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing/goods-to-off-bargained",
    "title": "更新商品状态为未议价",
    "version": "1.0.0",
    "name": "/api/pricing/goods-to-off-bargained",
    "group": "扣钱",
    "description": "<p>更新商品状态为未议价</p>",
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
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品ID 数组</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "get",
    "url": "/api/pricing/goods-to-purchase",
    "title": "转到进货",
    "version": "1.0.0",
    "name": "/api/pricing/goods-to-purchase",
    "group": "扣钱",
    "description": "<p>转到进货</p>",
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
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品ID 数组</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing/goods-to-return",
    "title": "转到退货",
    "version": "1.0.0",
    "name": "/api/pricing/goods-to-return",
    "group": "扣钱",
    "description": "<p>转到退货</p>",
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
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品ID 数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>退货原因</p>"
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
          "content": "{\n    \"code\": 99999,\n     \"data\": \"\",\n     \"msg\": \"成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing/purchase-list",
    "title": "进货记录列表",
    "version": "1.0.0",
    "name": "/api/pricing/purchase-list",
    "group": "扣钱",
    "description": "<p>进货记录列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>进货质检记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "filters",
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
          "content": "{\n    \"code\": 99999,\n     \"data\": \"\",\n     \"msg\": \"成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "get",
    "url": "/api/pricing/record-detail",
    "title": "获取进货质检记录的扣钱首页",
    "version": "1.0.0",
    "name": "/api/pricing/record-detail",
    "group": "扣钱",
    "description": "<p>获取进货质检记录的扣钱首页</p>",
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
            "type": "Number",
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
          "content": "{\n    \"code\": 99999,\n        \"data\": {\n        \"supplier\": \"张三李四\",\n            \"username\": \"jigang111\",\n            \"device_cnt\": \"100\",\n            \"total_fee\": 0,\n            \"logistics_company\": \"顺丰速运\",\n            \"logistics_number\": \"SF1232131293213213\",\n            \"query\": \"除了 国别、网络锁、产品销售人，别的都要查\",\n            \"soft\": \"电脑验机：只能插3U，不能插爱思、沙漏\",\n            \"manual\": \"标准流程\",\n            \"expected\": \"3天之内检测完成\",\n            \"remark\": \"这台设备指定让小刘去检测\",\n            \"purchase_list\": [\n   {\n       \"id\": \"7\",\n           \"user_id\": \"1\",\n           \"store_id\": \"1\",\n           \"record_id\": \"23\",\n           \"sn\": \"\",\n           \"imei\": \"\",\n           \"device_model\": \"\",\n           \"color\": \"\",\n           \"capacity\": \"\",\n           \"id_lock\": \"\",\n           \"ace\": \"\",\n           \"ace_ot\": \"\",\n           \"hourglass\": \"\",\n           \"hourglass_ot\": \"\",\n           \"3u\": \"\",\n           \"3u_ot\": \"\",\n           \"battery_life\": \"0\",\n           \"charge_times\": \"0\",\n           \"ios_version\": \"0\",\n           \"standard_price\": \"0\",\n           \"is_sell\": \"0\",\n           \"is_return\": \"0\",\n           \"is_delete\": \"0\",\n           \"s_detail_id\": \"0\",\n           \"pc_device_id\": \"0\",\n           \"create_time\": \"2020-11-08 18:52:52\"\n   },\n   ],\n            \"return_list\": []\n   },\n       \"msg\": \"成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing/return-list",
    "title": "退货记录列表",
    "version": "1.0.0",
    "name": "/api/pricing/return-list",
    "group": "扣钱",
    "description": "<p>退货记录列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>进货质检记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "filters",
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
          "content": "{\n    \"code\": 99999,\n     \"data\": \"\",\n     \"msg\": \"成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing/save-pricing-item",
    "title": "保存扣钱项",
    "version": "1.0.0",
    "name": "/api/pricing/save-pricing-item",
    "group": "扣钱",
    "description": "<p>保存扣钱项</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item",
            "description": "<p>扣钱项名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>扣钱项金额(单位分)</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing/save-standard-price",
    "title": "保存标准价",
    "version": "1.0.0",
    "name": "/api/pricing/save-standard-price",
    "group": "扣钱",
    "description": "<p>保存标准价</p>",
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
            "type": "Number",
            "optional": false,
            "field": "price",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingController.php",
    "groupTitle": "扣钱"
  },
  {
    "type": "post",
    "url": "/api/search/batch-search-detail",
    "title": "批量搜索查询记录详情",
    "version": "1.0.0",
    "name": "/api/search/batch-search-detail",
    "group": "查询",
    "description": "<p>批量搜索查询记录详情</p>",
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
            "description": "<p>多个SN/IMEI</p>"
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
            "description": "<p>failed</p>"
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
    "url": "/api/search/download-batch-search-detail",
    "title": "下载批量搜索查询记录详情",
    "version": "1.0.0",
    "name": "/api/search/download-batch-search-detail",
    "group": "查询",
    "description": "<p>下载批量搜索查询记录详情</p>",
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
            "field": "snz",
            "description": "<p>多个SN/IMEI 用逗号分割</p>"
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
            "description": "<p>failed</p>"
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
    "url": "/api/search/query-batch-search-detail",
    "title": "下载批量搜索查询记录详情",
    "version": "1.0.0",
    "name": "/api/search/download-batch-search-detail",
    "group": "查询",
    "description": "<p>下载批量搜索查询记录详情</p>",
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
            "field": "snz",
            "description": "<p>多个SN/IMEI 用逗号分割</p>"
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
            "description": "<p>failed</p>"
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
    "url": "/api/search/download-detail",
    "title": "查询记录详情下载（下载文件内容同查询记录）",
    "version": "1.0.0",
    "name": "/api/search/download-detail",
    "group": "查询",
    "description": "<p>查询记录详情下载（下载文件内容同查询记录）</p>",
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
            "field": "idz",
            "description": "<p>查询记录详情ID, 多个Id 用英文逗号分隔 (必填)</p>"
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
    "url": "/api/search/download-record",
    "title": "下载查询记录",
    "version": "1.0.0",
    "name": "/api/search/download-record",
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
            "type": "Number",
            "optional": false,
            "field": "idz",
            "description": "<p>查询记录ID, 多个Id 用英文逗号分隔 (必填)</p>"
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
    "url": "/api/search/get-batch-search-detail",
    "title": "获取批量搜索查询记录详情",
    "version": "1.0.0",
    "name": "/api/search/get-batch-search-detail",
    "group": "查询",
    "description": "<p>获取批量搜索查询记录详情</p>",
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
            "type": "Number",
            "optional": false,
            "field": "merged_id",
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
            "description": "<p>failed</p>"
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
    "url": "/api/search/get-search-filters",
    "title": "获取查询筛选条件列表",
    "version": "1.0.0",
    "name": "/api/search/get-search-filters",
    "group": "查询",
    "description": "<p>获取查询筛选条件列表</p>",
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
            "description": "<p>failed</p>"
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
    "url": "/api/search/print-barcode-label",
    "title": "打印条形码标签",
    "version": "1.0.0",
    "name": "/api/search/print-barcode-label",
    "group": "查询",
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
            "description": "<p>查询设备详情ID 数组(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>打印机ID</p>"
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
    "type": "post",
    "url": "/api/search/print-batch-search-detail",
    "title": "打印批量搜索查询记录详情",
    "version": "1.0.0",
    "name": "/api/search/print-batch-search-detail",
    "group": "查询",
    "description": "<p>打印批量搜索查询记录详情</p>",
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
            "description": "<p>多个SN/IMEI</p>"
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
            "description": "<p>failed</p>"
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
    "type": "get",
    "url": "/api/search/record-detail",
    "title": "查询记录详情",
    "version": "1.0.0",
    "name": "/api/search/record-detail",
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
    "type": "post",
    "url": "/api/search/record-list",
    "title": "查询记录列表",
    "version": "1.0.0",
    "name": "/api/search/record-list",
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
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选过滤条件 {&quot;user_id&quot;: 3, &quot;start_date&quot;:&quot;2020-10-10&quot;, &quot;end_date&quot;:&quot;2020-11-11&quot;} <br> 参数: <br> user_id: 创建人用户ID <br> start_date: 开始时间 <br> end_date : 结束时间<br></p>"
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
    "url": "/api/search/re-query-batch-search-detail",
    "title": "批量搜索数据重新查询3023数据",
    "version": "1.0.0",
    "name": "批量搜索数据重新查询3023数据",
    "group": "查询",
    "description": "<p>批量搜索数据重新查询3023数据, 传merged_idz时为重新查询，不传merged_idz为所有之前查询的所有失败重新查询</p>",
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
            "field": "merged_idz",
            "description": "<p>查询详情ID： 重新查询使用 (可选)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "typez",
            "description": "<p>查询类型数组(POST JSON), 如[&quot;serial&quot;, &quot;carrier&quot;]。必须跟&quot;查询详情ID&quot;配合使用</p>"
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
    "url": "/api/search/query-batch-search-data",
    "title": "批量搜索查询3023数据",
    "version": "1.0.0",
    "name": "批量搜索查询3023数据",
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
            "field": "merged_idz",
            "description": "<p>一个或多个merged_id数组(POST JSON), 如[&quot;1&quot;, &quot;2&quot;]</p>"
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
            "description": "<p>查询类型数组(POST JSON), 如[&quot;serial&quot;, &quot;carrier&quot;], type类型如下: </br> details 验机报告(普通版) </br> details-flagship 验机报告(旗舰版) </br> details-pro 验机报告(专业版) </br> advanced(整机报告(较全面) </br> coverage-refurbished 官方保修 </br> activationlock ID锁 </br> simlock 网络锁 </br> country 销售国家 </br> carrier 运营商 </br> icloud ID锁黑白 </br> sold 销售人 </br> purchase 购买日期 </br> repair 正在维修 </br> serial IMEI/SN 互转 </br> blacklist 网络锁黑白 </br></p>"
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
    "url": "/api/search/new-query-3023-data",
    "title": "新增查询3023数据",
    "version": "1.0.0",
    "name": "查询3023数据",
    "group": "查询",
    "description": "<p>新增查询3023数据</p>",
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
            "description": "<p>查询类型数组(POST JSON), 如[&quot;serial&quot;, &quot;carrier&quot;], type类型如下: </br> details 验机报告(普通版) </br> details-flagship 验机报告(旗舰版) </br> details-pro 验机报告(专业版) </br> advanced(整机报告(较全面) </br> coverage-refurbished 官方保修 </br> activationlock ID锁 </br> simlock 网络锁 </br> country 销售国家 </br> carrier 运营商 </br> icloud ID锁黑白 </br> sold 销售人 </br> purchase 购买日期 </br> repair 正在维修 </br> serial IMEI/SN 互转 </br> blacklist 网络锁黑白 </br></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "record_id",
            "description": "<p>查询记录ID： 查询失败再次查询使用或新增查询时使用</p>"
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
    "url": "/api/search/re-query-3023-data",
    "title": "重新查询3023数据",
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
            "type": "Number",
            "optional": false,
            "field": "record_id",
            "description": "<p>查询记录ID： 查询失败再次查询使用(可选)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "detail_idz",
            "description": "<p>查询详情ID： 重新查询使用 (可选)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "typez",
            "description": "<p>查询类型数组(POST JSON), 如[&quot;serial&quot;, &quot;carrier&quot;]。必须跟&quot;查询详情ID&quot;配合使用</p>"
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
    "name": "查询详情列表",
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
            "description": "<p>查询记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Inter",
            "optional": false,
            "field": "from_id",
            "description": "<p>本次查询开始ID (detail_id)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
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
    "type": "get",
    "url": "/api/pricing-for-tourists/goods-pricing-detail",
    "title": "商品设备扣钱详情",
    "version": "1.0.0",
    "name": "/api/pricing-for-tourists/goods-pricing-detail",
    "group": "游客扣钱",
    "description": "<p>商品设备扣钱详情</p>",
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
            "field": "code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品ID</p>"
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
          "content": "{\n    \"code\": 99999,\n     \"data\": \"\",\n     \"msg\": \"成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingForTouristsController.php",
    "groupTitle": "游客扣钱"
  },
  {
    "type": "get",
    "url": "/api/pricing-for-tourists/goods-pricing-filters",
    "title": "获取扣钱项筛选(完整验机记录)",
    "version": "1.0.0",
    "name": "/api/pricing-for-tourists/goods-pricing-filters",
    "group": "游客扣钱",
    "description": "<p>获取扣钱项筛选(完整验机记录)</p>",
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
            "field": "code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品ID</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingForTouristsController.php",
    "groupTitle": "游客扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing-for-tourists/have-question",
    "title": "更新有疑问状态",
    "version": "1.0.0",
    "name": "/api/pricing-for-tourists/have-question",
    "group": "游客扣钱",
    "description": "<p>更新有疑问状态</p>",
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
            "field": "code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品ID数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>疑问原因</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingForTouristsController.php",
    "groupTitle": "游客扣钱"
  },
  {
    "type": "post",
    "url": "/api/pricing-for-tourists/have-question-off",
    "title": "更新无疑问状态",
    "version": "1.0.0",
    "name": "/api/pricing-for-tourists/have-question-off",
    "group": "游客扣钱",
    "description": "<p>更新无疑问状态</p>",
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
            "field": "code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>商品ID数组</p>"
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
          "content": "{\n \"code\": 99999,\n  \"data\": \"\",\n  \"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingForTouristsController.php",
    "groupTitle": "游客扣钱"
  },
  {
    "type": "get",
    "url": "/api/pricing-for-tourists/record-detail",
    "title": "获取进货质检记录的扣钱首页",
    "version": "1.0.0",
    "name": "/api/pricing-for-tourists/record-detail",
    "group": "游客扣钱",
    "description": "<p>获取进货质检记录的扣钱首页</p>",
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
            "field": "code",
            "description": "<p>游客分享码</p>"
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
          "content": "{\n    \"code\": 99999,\n        \"data\": {\n        \"supplier\": \"张三李四\",\n            \"username\": \"jigang111\",\n            \"device_cnt\": \"100\",\n            \"total_fee\": 0,\n            \"logistics_company\": \"顺丰速运\",\n            \"logistics_number\": \"SF1232131293213213\",\n            \"query\": \"除了 国别、网络锁、产品销售人，别的都要查\",\n            \"soft\": \"电脑验机：只能插3U，不能插爱思、沙漏\",\n            \"manual\": \"标准流程\",\n            \"expected\": \"3天之内检测完成\",\n            \"remark\": \"这台设备指定让小刘去检测\",\n            \"purchase_list\": [\n   {\n       \"id\": \"7\",\n           \"user_id\": \"1\",\n           \"store_id\": \"1\",\n           \"record_id\": \"23\",\n           \"sn\": \"\",\n           \"imei\": \"\",\n           \"device_model\": \"\",\n           \"color\": \"\",\n           \"capacity\": \"\",\n           \"id_lock\": \"\",\n           \"ace\": \"\",\n           \"ace_ot\": \"\",\n           \"hourglass\": \"\",\n           \"hourglass_ot\": \"\",\n           \"3u\": \"\",\n           \"3u_ot\": \"\",\n           \"battery_life\": \"0\",\n           \"charge_times\": \"0\",\n           \"ios_version\": \"0\",\n           \"standard_price\": \"0\",\n           \"is_sell\": \"0\",\n           \"is_return\": \"0\",\n           \"is_delete\": \"0\",\n           \"s_detail_id\": \"0\",\n           \"pc_device_id\": \"0\",\n           \"create_time\": \"2020-11-08 18:52:52\"\n   },\n   ],\n            \"return_list\": []\n   },\n       \"msg\": \"成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PricingForTouristsController.php",
    "groupTitle": "游客扣钱"
  },
  {
    "type": "post",
    "url": "/api/pcheck/batch-search-detail",
    "title": "批量搜索电脑验机详情",
    "version": "1.0.0",
    "name": "/api/pcheck/batch-search-detail",
    "group": "电脑验机记录",
    "description": "<p>批量搜索电脑验机详情</p>",
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
            "description": "<p>多个SN/IMEI</p>"
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
            "description": "<p>failed</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/delete-device",
    "title": "删除电脑验机记录详情",
    "version": "1.0.0",
    "name": "/api/pcheck/delete-device",
    "group": "电脑验机记录",
    "description": "<p>删除查询记录详情</p>",
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
            "field": "pd_idz",
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/device-detail",
    "title": "验机记录手机设备详情",
    "version": "1.0.0",
    "name": "/api/pcheck/device-detail",
    "group": "电脑验机记录",
    "description": "<p>验机记录手机设备详情</p>",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>验机设备ID(必填)</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
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
            "type": "Number",
            "optional": false,
            "field": "pr_id",
            "description": "<p>验机记录ID(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选条件数组</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "get",
    "url": "/api/pcheck/download-detail",
    "title": "电脑验机记录详情下载（下载文件内容同电脑验机记录）",
    "version": "1.0.0",
    "name": "/api/pcheck/download-detail",
    "group": "电脑验机记录",
    "description": "<p>电脑验机记录详情下载（下载文件内容同电脑验机记录）</p>",
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
            "field": "idz",
            "description": "<p>设备ID, 多个Id 用英文逗号分隔 (必填)</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "get",
    "url": "/api/pcheck/get-pcheck-filters",
    "title": "获取电脑验机记录筛选条件",
    "version": "1.0.0",
    "name": "/api/pcheck/get-pcheck-filters",
    "group": "电脑验机记录",
    "description": "<p>获取电脑验机记录筛选条件</p>",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"{\n    \"search\" : {},\n    \"pcheck\" : {}\n}\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/pc-new-record",
    "title": "PC端新建电脑验机记录",
    "version": "1.0.0",
    "name": "/api/pcheck/pc-new-record",
    "group": "电脑验机记录",
    "description": "<p>PC端新建电脑验机记录</p>",
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
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "count",
            "description": "<p>本批次总数量</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": {\n        \"id\": 1,\n    }\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "get",
    "url": "/api/pcheck/pc-record-list",
    "title": "PC端搜索电脑验机记录",
    "version": "1.0.0",
    "name": "/api/pcheck/pc-record-list",
    "group": "电脑验机记录",
    "description": "<p>PC端搜索电脑验机记录</p>",
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
            "field": "search",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
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
          "content": "{\n\"code\": 99999,\n\"data\": [\n            {\n                \"id\": 1,\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"remark\": \"3天需检测完毕\",\n            },\n            ...\n    ]\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/PcheckController.php",
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
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
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选过滤条件 {&quot;user_id&quot;: 3, &quot;start_date&quot;:&quot;2020-10-10&quot;, &quot;end_date&quot;:&quot;2020-11-11&quot;} <br> 参数: <br> user_id: 创建人用户ID <br> start_date: 开始时间 <br> end_date : 结束时间<br></p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
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
            "type": "String",
            "optional": false,
            "field": "report_img",
            "description": "<p>验机报告PNG上传图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_img",
            "description": "<p>设备详情PNG上传图片地址</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
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
            "type": "String",
            "optional": false,
            "field": "report_img",
            "description": "<p>验机报告PNG上传图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_img",
            "description": "<p>设备详情PNG上传图片地址</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
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
            "type": "File",
            "optional": false,
            "field": "battery",
            "description": "<p>上传的沙漏电池详情文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "report_img",
            "description": "<p>验机报告PNG上传图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_img",
            "description": "<p>设备详情PNG上传图片地址</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "get",
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
            "type": "Number",
            "optional": false,
            "field": "idz",
            "description": "<p>电脑验机记录ID, 多个Id 用英文逗号分隔 (必填)</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/print-barcode-label",
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
            "description": "<p>电脑验机设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>打印机ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "copy",
            "description": "<p>打印份数,默认1份</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/pcheck/query-3023-data",
    "title": "查询3023数据",
    "version": "1.0.0",
    "name": "查询3023数据",
    "group": "电脑验机记录",
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
            "field": "device_idz",
            "description": "<p>一个或多个deviceId 数组(POST JSON), 如[&quot;1&quot;, &quot;2&quot;]</p>"
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
    "filename": "backend/modules/api/controllers/PcheckController.php",
    "groupTitle": "电脑验机记录"
  },
  {
    "type": "post",
    "url": "/api/expenses/add-goods-to-expenses",
    "title": "向费用清款单中添加商品设备",
    "version": "1.0.0",
    "name": "/api/expenses/add-goods-to-expenses",
    "group": "费用请款单",
    "description": "<p>向费用清款单中添加商品设备</p>",
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
            "type": "Number",
            "optional": false,
            "field": "ex_id",
            "description": "<p>费用清款单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "goods_idz",
            "description": "<p>多个商品设备ID <br></p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/add-pay-user",
    "title": "添加支付对象(往来账户)",
    "version": "1.0.0",
    "name": "/api/expenses/add-pay-user",
    "group": "费用请款单",
    "description": "<p>添加支付对象(往来账户)</p>",
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
            "field": "name",
            "description": "<p>支付对象名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>支付对象手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>支付对象手地址</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/add-to-accounting",
    "title": "记账标记",
    "version": "1.0.0",
    "name": "/api/expenses/add-to-accounting",
    "group": "费用请款单",
    "description": "<p>获取筛选条件</p>",
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
            "field": "ex_idz",
            "description": "<p>费用清款单ID</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/approved-list",
    "title": "审核通过列表",
    "version": "1.0.0",
    "name": "/api/expenses/approved-list",
    "group": "费用请款单",
    "description": "<p>审核通过列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "me",
            "description": "<p>只看我的</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选条件</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/batch-save-cost",
    "title": "批量设定保存费用",
    "version": "1.0.0",
    "name": "/api/expenses/batch-save-cost",
    "group": "费用请款单",
    "description": "<p>批量设定保存费用</p>",
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
            "type": "Number",
            "optional": false,
            "field": "ex_id",
            "description": "<p>费用清款单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ex_goods_idz",
            "description": "<p>费用清款单包含商品关系表的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "costz",
            "description": "<p>单个费用内容如下: <br> {Number} type 费用类型: 费用类型: 1检车费用 2采购费用 3维修费用 <br> {String} pu_id 提供方Id(支付对象id) <br> {String} description 描述 <br> {Number} cost 花费单价 <br></p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/batch-search-expenses",
    "title": "审核通过列表批量搜索",
    "version": "1.0.0",
    "name": "/api/expenses/batch-search-expenses",
    "group": "费用请款单",
    "description": "<p>审核通过列表批量搜索</p>",
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
            "description": "<p>多个SN/IMEI</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "get",
    "url": "/api/expenses/cost-list",
    "title": "获取具体费用列表",
    "version": "1.0.0",
    "name": "/api/expenses/cost-list",
    "group": "费用请款单",
    "description": "<p>获取具体费用列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "ex_goods_id",
            "description": "<p>费用清款单关联商品表ID</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/delete-cost",
    "title": "删除具体费用",
    "version": "1.0.0",
    "name": "/api/expenses/delete-cost",
    "group": "费用请款单",
    "description": "<p>删除具体费用</p>",
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
            "field": "cost_idz",
            "description": "<p>具体费用ID</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/delete-expenses",
    "title": "删除费用清款单",
    "version": "1.0.0",
    "name": "/api/expenses/delete-expenses",
    "group": "费用请款单",
    "description": "<p>删除费用清款单</p>",
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
            "field": "ex_idz",
            "description": "<p>费用清款单ID</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/delete-goods",
    "title": "删除费用清款单关联商品设备",
    "version": "1.0.0",
    "name": "/api/expenses/delete-goods",
    "group": "费用请款单",
    "description": "<p>删除费用清款单关联商品设备</p>",
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
            "field": "ex_goods_idz",
            "description": "<p>费用清款单关联商品ID</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/delete-pay-user",
    "title": "删除支付对象(往来账户)",
    "version": "1.0.0",
    "name": "/api/expenses/delete-pay-user",
    "group": "费用请款单",
    "description": "<p>删除支付对象(往来账户)</p>",
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
            "type": "Number",
            "optional": false,
            "field": "pu_id",
            "description": "<p>支付对象id</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "get",
    "url": "/api/expenses/download-expenses",
    "title": "下载费用请款单",
    "version": "1.0.0",
    "name": "/api/expenses/download-expenses",
    "group": "费用请款单",
    "description": "<p>下载</p>",
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
            "field": "idz",
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
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/draft-list",
    "title": "草稿列表",
    "version": "1.0.0",
    "name": "/api/expenses/draft-list",
    "group": "费用请款单",
    "description": "<p>草稿列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "me",
            "description": "<p>只看我的</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "get",
    "url": "/api/expenses/expenses-detail",
    "title": "费用清款单详情",
    "version": "1.0.0",
    "name": "/api/expenses/expenses-detail",
    "group": "费用请款单",
    "description": "<p>费用清款单详情</p>",
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
            "type": "Number",
            "optional": false,
            "field": "ex_id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "get",
    "url": "/api/expenses/get-filters",
    "title": "获取筛选条件",
    "version": "1.0.0",
    "name": "/api/expenses/get-filters",
    "group": "费用请款单",
    "description": "<p>获取筛选条件</p>",
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
            "description": ""
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
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/new-expenses",
    "title": "新建费用请款单",
    "version": "1.0.0",
    "name": "/api/expenses/new-expenses",
    "group": "费用请款单",
    "description": "<p>新建费用请款单</p>",
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
            "type": "Number",
            "optional": false,
            "field": "pay_user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/not-pass-approve",
    "title": "审核不通过退回草稿",
    "version": "1.0.0",
    "name": "/api/expenses/not-pass-approve",
    "group": "费用请款单",
    "description": "<p>审核不通过退回草稿</p>",
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
            "type": "Number",
            "optional": false,
            "field": "ex_id",
            "description": "<p>费用清款单ID</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/pass-approve",
    "title": "审核通过",
    "version": "1.0.0",
    "name": "/api/expenses/pass-approve",
    "group": "费用请款单",
    "description": "<p>审核通过</p>",
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
            "type": "Number",
            "optional": false,
            "field": "ex_id",
            "description": "<p>费用清款单ID</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "get",
    "url": "/api/expenses/pay-users",
    "title": "支付对象列表(往来账户)",
    "version": "1.0.0",
    "name": "/api/expenses/pay-users",
    "group": "费用请款单",
    "description": "<p>支付对象列表(往来账户))</p>",
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
            "description": ""
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
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/save-cost",
    "title": "保存具体费用",
    "version": "1.0.0",
    "name": "/api/expenses/save-cost",
    "group": "费用请款单",
    "description": "<p>保存具体费用</p>",
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
            "type": "Number",
            "optional": false,
            "field": "ex_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ex_goods_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "del_idz",
            "description": "<p>删除的Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "costz",
            "description": "<p>单个费用内容如下: <br> {Number} id 如果传入id为更新, 不传为新增<br> {Number} type 费用类型: 费用类型: 1检车费用 2采购费用 3维修费用 <br> {String} pu_id 提供方(支付对象)ID <br> {String} description 描述 <br> {Number} cost 花费单价 <br></p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/save-expenses",
    "title": "保存费用请款单",
    "version": "1.0.0",
    "name": "/api/expenses/save-ex-remark",
    "group": "费用请款单",
    "description": "<p>保存费用请款单备注</p>",
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
            "type": "Number",
            "optional": false,
            "field": "ex_id",
            "description": "<p>费用请款单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pay_user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/save-pay-user",
    "title": "保存支付对象(往来账户)",
    "version": "1.0.0",
    "name": "/api/expenses/save-pay-user",
    "group": "费用请款单",
    "description": "<p>保存支付对象(往来账户)</p>",
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
            "type": "Number",
            "optional": false,
            "field": "pu_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>支付对象名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>支付对象手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>支付对象手地址</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/submit",
    "title": "提交审核",
    "version": "1.0.0",
    "name": "/api/expenses/submit",
    "group": "费用请款单",
    "description": "<p>提交审核</p>",
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
            "type": "Number",
            "optional": false,
            "field": "ex_id",
            "description": "<p>费用清款单ID</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/expenses/wait-approve-list",
    "title": "待审核列表",
    "version": "1.0.0",
    "name": "/api/expenses/wait-approve-list",
    "group": "费用请款单",
    "description": "<p>待审核列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "me",
            "description": "<p>只看我的</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": \"\", \n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/ExpensesController.php",
    "groupTitle": "费用请款单"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/addto-record-from-batch-search",
    "title": "从批量查询添加到已有进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/addto-record-from-batch-search",
    "group": "进货质检记录",
    "description": "<p>从批量查询添加到已有进货质检记录</p>",
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
            "field": "qgr_id",
            "description": "<p>添加到的进货质检记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "merged_idz",
            "description": "<p>查询记录ID数组</p>"
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
    "url": "/api/qa-goods/addto-record-from-pcheck",
    "title": "从电脑验机添加到已有进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/addto-record-from-pcheck",
    "group": "进货质检记录",
    "description": "<p>从电脑验机添加到已有进货质检记录</p>",
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
            "field": "qgr_id",
            "description": "<p>添加到的进货质检记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Intger",
            "optional": false,
            "field": "pd_idz",
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
    "type": "post",
    "url": "/api/qa-goods/addto-record-from-search",
    "title": "从查询添加到已有进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/addto-record-from-search",
    "group": "进货质检记录",
    "description": "<p>从查询添加到已有进货质检记录</p>",
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
            "field": "qgr_id",
            "description": "<p>添加到的进货质检记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sr_idz",
            "description": "<p>查询记录ID数组</p>"
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
    "url": "/api/qa-goods/batch-search-goods-record",
    "title": "批量搜索进货质检记录详情(进货质检记录详情页内)",
    "version": "1.0.0",
    "name": "/api/qa-goods/batch-search-goods-record",
    "group": "进货质检记录",
    "description": "<p>批量搜索进货质检记录详情(进货质检记录详情页内)</p>",
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
            "description": "<p>多个SN/IMEI</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "record_id",
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
            "description": "<p>failed</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/complex-code",
    "title": "复码",
    "version": "1.0.0",
    "name": "/api/qa-goods/complex-code",
    "group": "进货质检记录",
    "description": "<p>复码</p>",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>零件码</p>"
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
    "url": "/api/qa-goods/delete-goods",
    "title": "进货质检记录详情删除",
    "version": "1.0.0",
    "name": "/api/qa-goods/delete-goods",
    "group": "进货质检记录",
    "description": "<p>进货质检记录详情删除,删除进货商品（设备）</p>",
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
            "description": "<p>商品ID 数组</p>"
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
    "type": "get",
    "url": "/api/qa-goods/download-goods",
    "title": "进货质检记录详情下载（下载文件内容同进货质检记录）",
    "version": "1.0.0",
    "name": "/api/qa-goods/download-goods",
    "group": "进货质检记录",
    "description": "<p>进货质检记录详情下载（下载文件内容同进货质检记录）</p>",
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
            "field": "idz",
            "description": "<p>进货商品ID, 多个Id 用英文逗号分隔 (必填)</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/download-record",
    "title": "下载进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/download-record",
    "group": "进货质检记录",
    "description": "<p>下载进货质检记录</p>",
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
            "field": "idz",
            "description": "<p>进货质检记录ID, 多个Id 用英文逗号分隔 (必填)</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/get-filters",
    "title": "获取筛选条件",
    "version": "1.0.0",
    "name": "/api/qa-goods/get-filters",
    "group": "进货质检记录",
    "description": "<p>获取进货质检筛选条件</p>",
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
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n\"code\": 99999,\n\"data\": \"{\n    \"search\" : {},\n    \"pcheck\" : {},\n    \"goods\" : {},\n},\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/get-purcharse-country-diff",
    "title": "获取国别不一致弹窗",
    "version": "1.0.0",
    "name": "/api/qa-goods/get-purcharse-country-diff",
    "group": "进货质检记录",
    "description": "<p>批量搜索进货质检记录详情(进货质检记录详情页内)</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
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
            "description": "<p>failed</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/get-record-list-filter",
    "title": "进货质检记录列表筛选条件",
    "version": "1.0.0",
    "name": "/api/qa-goods/get-record-list-filter",
    "group": "进货质检记录",
    "description": "<p>进货质检记录列表筛选条件</p>",
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
          "content": "{\n \"code\": 99999,\n \"data\": {\n     \"users\": [\n      {\n         \"id\": \"1\",\n         \"username\": \"jigang111\",\n         \"mobile\": \"18810236729\",\n         \"avatar\": \"ohJEuk-pGnaakt-yb7dfNS1QTt5RTYVaRYiwpHp-fyEhh4FdTR2ruCv6R40VXUND\",\n         \"store_id\": \"1\",\n         \"role\": \"1\"\n      },\n     ],\n \"suppliers\": []\n },\n \"msg\": \"成功\"",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/goods-by-id",
    "title": "根据扫描二维码的id获取商品设备",
    "version": "1.0.0",
    "name": "/api/qa-goods/goods-by-id",
    "group": "进货质检记录",
    "description": "<p>根据扫描二维码的id获取商品设备</p>",
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
            "type": "Number",
            "optional": false,
            "field": "id",
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
          "content": "{\n\"code\": 99999,\n\"data\": \"{\n},\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "get",
    "url": "/api/qa-goods/goods-detail",
    "title": "商品设备详情",
    "version": "1.0.0",
    "name": "/api/qa-goods/goods-detail",
    "group": "进货质检记录",
    "description": "<p>商品设备详情</p>",
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
            "description": "<p>商品设备ID (goods_id)</p>"
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
          "content": "{\n\"code\": 99999,\n\"data\": {},\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/goods-list",
    "title": "商品设备列表",
    "version": "1.0.0",
    "name": "/api/qa-goods/goods-list",
    "group": "进货质检记录",
    "description": "<p>商品设备列表</p>",
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
            "type": "Number",
            "optional": false,
            "field": "record_id",
            "description": "<p>进货质检记录ID(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选条件数组</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/lock-record",
    "title": "审核记录(锁定进货质检记录)",
    "version": "1.0.0",
    "name": "/api/qa-goods/lock-record",
    "group": "进货质检记录",
    "description": "<p>审核记录(锁定进货质检记录),进货质检记录锁定状态.锁定后,不能增删设备</p>",
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
            "type": "Number",
            "optional": false,
            "field": "record_id",
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
            "description": "<p>failed</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/unlock-record",
    "title": "取消审核记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/lock-record",
    "group": "进货质检记录",
    "description": "<p>取消审核记录,进货质检记录锁定状态.锁定后,不能增删设备</p>",
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
            "type": "Number",
            "optional": false,
            "field": "record_id",
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
            "description": "<p>failed</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/new-record-from-batch-search",
    "title": "从批量查询新增进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/new-record-from-batch-search",
    "group": "进货质检记录",
    "description": "<p>从批量查询新增进货质检记录</p>",
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
            "type": "Array",
            "optional": false,
            "field": "merged_idz",
            "description": "<p>查询记录ID数组</p>"
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
            "type": "Array",
            "optional": false,
            "field": "pd_idz",
            "description": "<p>电脑验机记录设备信息ID数组</p>"
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
    "url": "/api/qa-goods/new-record-from-search",
    "title": "从查询新增进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/new-record-from-search",
    "group": "进货质检记录",
    "description": "<p>从查询新增进货质检记录: <br></p> <ol> <li>获取记录下勾选的查询记录，查找到所有查询详情,并合并相同SN(imei)号的查询结果<br></li> <li>新增一条进货自检记录，复制合并后的查询结果到进货信息</li> </ol>",
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
            "type": "Array",
            "optional": false,
            "field": "sr_idz",
            "description": "<p>查询记录ID数组</p>"
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
    "url": "/api/qa-goods/off-sell",
    "title": "商品下架",
    "version": "1.0.0",
    "name": "/api/qa-goods/off-sell",
    "group": "进货质检记录",
    "description": "<p>商品下架</p>",
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
            "field": "goods_id",
            "description": "<p>进货商品ID</p>"
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
    "type": "post",
    "url": "/api/qa-goods/on-sell",
    "title": "商品上架",
    "version": "1.0.0",
    "name": "/api/qa-goods/on-sell",
    "group": "进货质检记录",
    "description": "<p>商品上架</p>",
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
            "field": "goods_id",
            "description": "<p>进货商品ID</p>"
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
    "type": "post",
    "url": "/api/qa-goods/pc-new-record",
    "title": "PC端添加进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/pc-new-record",
    "group": "进货质检记录",
    "description": "<p>PC端添加进货质检记录</p>",
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
    "url": "/api/qa-goods/pc-record-list",
    "title": "PC端搜索进货质检记录",
    "version": "1.0.0",
    "name": "/api/qa-goods/pc-record-list",
    "group": "进货质检记录",
    "description": "<p>PC端搜索进货质检记录</p>",
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
            "field": "search",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
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
          "content": "{\n\"code\": 99999,\n\"data\": [\n            {\n                \"id\": 1,\n                \"create_time\": \"2020-10-22 10:10:10\",\n                \"device_cnt\" : 90,\n                \"remark\": \"3天需检测完毕\",\n            },\n            ...\n    ]\n\"msg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/print-label",
    "title": "打印标签",
    "version": "1.0.0",
    "name": "/api/qa-goods/print-label",
    "group": "进货质检记录",
    "description": "<p>打印进货质检记录标签</p>",
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
            "field": "idz",
            "description": "<p>商品设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>打印机ID</p>"
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
          "content": "{\n    \"code\": 99999,\n    \"data\": [\n         {\n            \"classify\": \"iphone XSM 256G\",\n            \"count\": 2\n         },\n         ...\n    ],\n    \"msg\": \"成功\"\n}",
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
    "url": "/api/qa-goods/save-goods_video",
    "title": "保存商品设备视频",
    "version": "1.0.0",
    "name": "/api/qa-goods/save-goods-video",
    "group": "进货质检记录",
    "description": "<p>保存商品设备视频</p>",
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
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>视频链接</p>"
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
    "type": "post",
    "url": "/api/qa-goods/save-record-info",
    "title": "保存进货质检记录信息",
    "version": "1.0.0",
    "name": "/api/qa-goods/save-record-info",
    "group": "进货质检记录",
    "description": "<p>保存进货质检记录信息</p>",
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
            "field": "lc",
            "description": "<p>快递公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ln",
            "description": "<p>快递单号</p>"
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
    "type": "post",
    "url": "/api/qa-goods/upload-3u-report",
    "title": "上传3U验机报告和设备详情",
    "version": "1.0.0",
    "name": "/api/qa-goods/upload-3u-report",
    "group": "进货质检记录",
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/upload-ace-report",
    "title": "上传爱思验机报告和设备详情",
    "version": "1.0.0",
    "name": "/api/qa-goods/upload-ace-report",
    "group": "进货质检记录",
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
            "description": "<p>进货质检记录ID，不传默认为0 (非必填)</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/upload-hourglass-report",
    "title": "上传沙漏验机报告和沙漏设备详情",
    "version": "1.0.0",
    "name": "/api/qa-goods/upload-hourglass-report",
    "group": "进货质检记录",
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/batch-search-goods",
    "title": "批量搜索进货质检记录详情",
    "version": "1.0.0",
    "name": "/api/search/batch-search-goods",
    "group": "进货质检记录",
    "description": "<p>批量搜索进货质检记录详情</p>",
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
            "description": "<p>多个SN/IMEI</p>"
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
            "description": "<p>failed</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/query-3023-data",
    "title": "查询3023数据",
    "version": "1.0.0",
    "name": "查询3023数据",
    "group": "进货质检记录",
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
            "field": "goods_idz",
            "description": "<p>一个或多个goodsId 数组(POST JSON), 如[&quot;1&quot;, &quot;2&quot;]</p>"
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
    "filename": "backend/modules/api/controllers/QaGoodsController.php",
    "groupTitle": "进货质检记录"
  },
  {
    "type": "post",
    "url": "/api/qa-goods/record-list",
    "title": "进货质检记录列表",
    "version": "1.0.0",
    "name": "查询记录列表",
    "group": "进货质检记录",
    "description": "<p>进货质检记录列表</p>",
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
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>筛选条件数组 <br> {&quot;stxt&quot;:&quot;模糊搜索内容&quot;, 'mt': 1, &quot;user_idz&quot;: 3, &quot;supplier_idz&quot;:1, &quot;start_date&quot;:&quot;2020-10-10&quot;, &quot;end_date&quot;:&quot;2020-11-11&quot;} <br> 参数: <br> stxt: 模糊搜索内容 <br> user_idz: 创建人用户ID <br> supplier_idz: 供货商ID <br> start_date: 开始时间 <br> end_date : 结束时间<br> manual: 人工检测<br> pricing: 扣钱进度<br> bargained: 议价进度<br> expenses_status: 审核情况<br></p>"
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
  }
] });
