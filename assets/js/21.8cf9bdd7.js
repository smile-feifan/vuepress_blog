(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{514:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[a("code",[s._v("Family")]),s._v("族谱管理系统是基于"),a("code",[s._v("Spring Boot 2.2.4.RELEASE")]),s._v("最新版本构建的，数据库采用"),a("code",[s._v("MongoDB")]),s._v("，\n采用"),a("code",[s._v("Spring Security")]),s._v("来提供安全认证服务，前端渲染模板引擎为比较快的国产"),a("code",[s._v("Beetl")]),s._v("，数据图表渲染采用了\n蚂蚁金服数据可视化"),a("code",[s._v("AntV")]),s._v("来渲染数据。")]),s._v(" "),a("h2",{attrs:{id:"快速部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速部署"}},[s._v("#")]),s._v(" 快速部署")]),s._v(" "),a("h3",{attrs:{id:"_1、docker部署-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、docker部署-推荐"}},[s._v("#")]),s._v(" 1、docker部署（推荐）")]),s._v(" "),a("ul",[a("li",[s._v("docker-compose编排文件")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.3"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("qingdao.aliyuncs.com/zealsay/family"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" family\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8091:8091"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" family\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mongo\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mongo                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你的mongo的host地址，这里是内部容器名，你可以配置ip如47.101.43.123")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("PORT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你的mongo的端口号")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DATABASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" family                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你的项目数据在mongo中存储的空间")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" username              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你的mongo中授权的用户名")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" password              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你的mongo中授权的密码")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AUTH_DATABASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" admin            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你的mongo中授权数据库 mongo默认为admin")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ADMIN_USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" admin           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#family后台管理系统默认管理员账号")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ADMIN_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#family后台管理系统默认管理员密码")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("USER_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#family后台管理系统添加成员时的默认登录密码")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mongo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mongo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3.4.10\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mongo\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" family\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"27017:27017"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mongo_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data/db\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# command: mongod --auth # 启动授权登录")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MONGO_INITDB_ROOT_USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" username  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你的mongo授权username")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MONGO_INITDB_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" password  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你的mongo授权password")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bridge\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mongo_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("ul",[a("li",[s._v("执行 "),a("code",[s._v("docker-compose up")])])]),s._v(" "),a("h3",{attrs:{id:"_2、传统部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、传统部署"}},[s._v("#")]),s._v(" 2、传统部署")]),s._v(" "),a("blockquote",[a("p",[s._v("因为依赖mongo数据库，所以需要你在本地或者远程启动mongo服务，并且最好是开启认证登录的mongo。")])]),s._v(" "),a("ul",[a("li",[s._v("首先拉取代码到本地\n"),a("code",[s._v("git clone https://github.com/GodLikeZeal/family")])]),s._v(" "),a("li",[s._v("修改配置文件，将"),a("code",[s._v("application.yml")]),s._v("里面的关于prod的配置部分需要自行修改")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" prod\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" family\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("allow-bean-definition-overriding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当遇到相同的名字，是否允许覆盖")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mongodb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("HOST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改成你的mongo的host")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改成你的mongo的port")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DATABASE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改成你的应用在mongo中的存储空间")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改成你的mongo的登录用户名")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改成你的mongo的登录密码")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("authentication-database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("AUTH_DATABASE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改成你的mongo的授权数据库")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("beetl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("suffix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" html\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ADMIN_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置后台管理员默认账号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ADMIN_PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置后台管理员默认密码")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("default-password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("USER_PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置后台添加新成员时，新成员登录的默认密码")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("ul",[a("li",[s._v("项目打包\n"),a("code",[s._v("mvn clean package")])]),s._v(" "),a("li",[s._v("启动项目\n"),a("code",[s._v("java -jar 打包后的jar文件")])])]),s._v(" "),a("h2",{attrs:{id:"功能点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能点"}},[s._v("#")]),s._v(" 功能点")]),s._v(" "),a("ul",[a("li",[s._v("实现家族树，登录用户节点动态闪烁。")]),s._v(" "),a("li",[s._v("分组功能：列表，添加，修改，删除。")]),s._v(" "),a("li",[s._v("成员列表分页查询，成员信息修改，删除，添加。")]),s._v(" "),a("li",[s._v("添加父节点下拉搜索框。")])]),s._v(" "),a("h2",{attrs:{id:"页面截图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面截图"}},[s._v("#")]),s._v(" 页面截图")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("登录页面\n"),a("img",{attrs:{src:"https://pan.zealsay.com/mweb/2020060515913544763818.jpg",alt:"-w1439"}})])]),s._v(" "),a("li",[a("p",[s._v("群组添加\n"),a("img",{attrs:{src:"https://pan.zealsay.com/mweb/2020060515913544763858.jpg",alt:"-w1439"}})])]),s._v(" "),a("li",[a("p",[s._v("成员添加\n"),a("img",{attrs:{src:"https://pan.zealsay.com/mweb/2020060515913544763871.jpg",alt:"-w1439"}})])]),s._v(" "),a("li",[a("p",[s._v("成员列表\n"),a("img",{attrs:{src:"https://pan.zealsay.com/mweb/2020060515913544763883.jpg",alt:"-w1439"}})])]),s._v(" "),a("li",[a("p",[s._v("族谱树\n"),a("img",{attrs:{src:"https://pan.zealsay.com/mweb/2020060515913544763895.jpg",alt:"-w1437"}})])])]),s._v(" "),a("h2",{attrs:{id:"鸣谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[s._v("#")]),s._v(" 鸣谢")]),s._v(" "),a("ul",[a("li",[s._v("感谢"),a("a",{attrs:{href:"https://gitee.com/yinqi/Light-Year-Admin-Template",target:"_blank",rel:"noopener noreferrer"}},[s._v("笔下光年Admin"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交流"}},[s._v("#")]),s._v(" 交流")]),s._v(" "),a("img",{attrs:{src:"https://pan.zealsay.com/20190716214941558000000.jpg",alt:"Sample",width:"150",height:"200"}})])}),[],!1,null,null,null);t.default=e.exports}}]);