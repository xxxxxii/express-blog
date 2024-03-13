/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726 (5.7.26)
 Source Host           : localhost:3306
 Source Schema         : chanyue

 Target Server Type    : MySQL
 Target Server Version : 50726 (5.7.26)
 File Encoding         : 65001

 Date: 19/02/2024 22:19:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NULL DEFAULT NULL COMMENT '栏目id',
  `sub_cid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '其它栏目id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `short_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '短标题',
  `tag_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签id',
  `attr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '1头条 2推荐 3轮播 4热门',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '关键词',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '来源',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '作者',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文章简述',
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '缩略图',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '文章内容',
  `status` tinyint(2) NULL DEFAULT 0 COMMENT '0 发布 1 不发布',
  `pv` int(10) NULL DEFAULT 0 COMMENT '浏览量',
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '外链',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 78 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (77, 1, NULL, '文章测试', '', '', '', '', '', '', '', '', '测试文章', '', '<p>禅悦测试文章测试文章测试文章</p>', 0, 8, '', '2023-12-17 20:20:10', '2024-02-17 21:36:11');

-- ----------------------------
-- Table structure for article_map_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_map_tag`;
CREATE TABLE `article_map_tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) NULL DEFAULT NULL COMMENT '文章id',
  `tid` int(11) NULL DEFAULT NULL COMMENT '标签id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 137 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章-标签表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article_map_tag
-- ----------------------------
INSERT INTO `article_map_tag` VALUES (136, 77, 0);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT COMMENT '栏目id',
  `pid` tinyint(2) NOT NULL DEFAULT 0 COMMENT '父级栏目',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo关键字',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo描述',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目名称',
  `pinyin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目标识',
  `path` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '栏目路径',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目描述',
  `type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 栏目 1 页面',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '网址',
  `sort` tinyint(2) NULL DEFAULT 0 COMMENT '排序',
  `target` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '打开方式 0 当前页面打开 1 新页面打开',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 显示 1隐藏',
  `mid` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '模型id',
  `list_view` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'list.html' COMMENT '列表页模板',
  `article_view` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'article.html' COMMENT '详情页模板',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '网站栏目' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 0, '前端开发', '前端开发，es6,es5,javascript,js,css3,微信小程序', '前端开发常用知识，包括es6,es5,javascript,js,css3,微信小程序等常见开发。', '前端开发', 'fedev', '/fedev', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-02-17 21:43:39');
INSERT INTO `category` VALUES (2, 0, '', '', '', 'nodejs开发', 'nodejsdev', '/nodejsdev', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-02-17 21:55:11');
INSERT INTO `category` VALUES (3, 0, '', '', '', '禅悦文档', 'docs', '/docs', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-02-17 21:43:24');
INSERT INTO `category` VALUES (5, 0, '', '', '', '禅cms', 'chancms', '/chancms', '', '1', '', 0, '0', '0', '0', 'list.html', 'chanyue.html', '2023-11-25 12:52:03', '2024-02-17 21:43:12');
INSERT INTO `category` VALUES (6, 2, '', '', '', 'express', 'express', '/nodejs/express', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (7, 2, '', '', '', '服务运维', 'fuwuyunwei', '/nodejs/fuwuyunwei', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (8, 0, '', '', '', '关于作者', 'about', '/about', '', '1', '', 0, '0', '0', '0', 'list.html', 'page.html', '2023-11-25 12:52:03', '2024-02-17 21:42:59');

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `taskName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务名称',
  `targetUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '采集地址',
  `listTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '列表tag标签',
  `startNum` int(11) NULL DEFAULT 1 COMMENT '开始页面',
  `endNum` int(11) NULL DEFAULT NULL COMMENT '结束页面',
  `increment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '递增数量默认1',
  `titleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `articleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '文章内容',
  `charset` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '编码 1-> utf-8  2-> gb2312',
  `pages` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '采集地址集合',
  `clearRegCode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '清理文章多余标签正则',
  `removeCode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '清理代码',
  `cid` int(11) NULL DEFAULT NULL COMMENT '存储到栏目',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '发布状态 1 草稿 2 发布',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '采集' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES (1, '草堂札记', 'http://www.tangnet.cn/lists/31.html?page=${page}', '.news-list h5 a', 1, 1, '1', '.title h1', '.content', '1', 'http://www.tangnet.cn/news/46.html,http://www.tangnet.cn/news/44.html,http://www.tangnet.cn/news/43.html,http://www.tangnet.cn/news/42.html,http://www.tangnet.cn/news/37.html,http://www.tangnet.cn/news/27.html,http://www.tangnet.cn/news/28.html,http://www.tangnet.cn/news/31.html,http://www.tangnet.cn/news/26.html,http://www.tangnet.cn/news/24.html', '', NULL, 15, '2', '2023-09-29 19:33:57', '2023-12-10 19:34:42');

-- ----------------------------
-- Table structure for down
-- ----------------------------
DROP TABLE IF EXISTS `down`;
CREATE TABLE `down`  (
  `aid` int(11) NOT NULL,
  `downName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `downLink` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of down
-- ----------------------------

-- ----------------------------
-- Table structure for field
-- ----------------------------
DROP TABLE IF EXISTS `field`;
CREATE TABLE `field`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_id` int(11) NULL DEFAULT NULL COMMENT '模型id',
  `field_cname` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型字段中文名称',
  `field_ename` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '模型字段英文名称',
  `field_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '表单类型\r\n1单行文本	\r\n2.多行文本 \r\n3.下拉菜单 \r\n4.单选 \r\n5.多选 \r\n6.时间和日期 7.数字',
  `field_values` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '字段配置 下拉菜单多选等选项配置',
  `field_default` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '默认值',
  `field_sort` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '字段顺序',
  `field_length` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '字段长度',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `model_id`(`model_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字段字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of field
-- ----------------------------
INSERT INTO `field` VALUES (1, 1, '下载名称', 'downName', '1', '', '', '0', NULL);
INSERT INTO `field` VALUES (2, 1, '下载链接', 'downLink', '1', '', '', '0', NULL);

-- ----------------------------
-- Table structure for frag
-- ----------------------------
DROP TABLE IF EXISTS `frag`;
CREATE TABLE `frag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '名称',
  `mark` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标识',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  `type` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '类型 1 富文本 2 文本框',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '碎片' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of frag
-- ----------------------------
INSERT INTO `frag` VALUES (1, '广告', 'ad', '<p>观呼吸，起禅悦，听心路，入定境。</p>\n<p>肚脐放松，神藏其中，火起气成，百日呼吸渐止。后扩展到整个小腹，后扩展到全身，接天地能量入体，天人合一，化气为光，时刻出入有无。</p>\n<p>修行开经络，通窍穴，开天门，透全身，化身心入空，后天人合一，后化气为场，化场为电，化电为光，化光为虚无，化虚无为寂静，化寂静为寂灭，化寂灭，后修三千功德，了无所得，无所住则道成。</p>', '1', '2023-07-14 20:48:50', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (2, '版权', 'copyright', '<p class=\"f-13 text-c c-bfbfbf\">自豪的采用 chanyue-cms</p>', '1', '2023-08-05 17:34:49', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (3, 'chancms介绍', 'chanyue-introduce', '<h3 class=\"m-title border-dashed f-16 row justify-between\">chancms</h3>\n<p class=\"mt-10 f-14 lh-24\">chancms内容管理系统，基于`nodejs` `express` `mysql` `knex` `jwt` `vue3` 进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。<a title=\"\" href=\"https://gitee.com/yanyutao0402/chanyue-cms\" target=\"_blank\" rel=\"noopener\">[详情]</a></p>', '1', '2023-08-05 17:36:09', '2024-02-17 21:45:41');
INSERT INTO `frag` VALUES (4, '底部-前端', 'footer-fe', '<div class=\"col-6\">\n<h4 class=\"f-15 pb-10\">前端</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">JavaScript</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">vue</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">react</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">css3</a></p>\n</div>', '1', '2023-08-10 17:39:04', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (5, '底部-nodejs', 'footer-nodejs', '<div class=\"col-6\">\n<h4 class=\"f-15  pb-10\">nodejs</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">express</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">koa</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">mysql</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">mongoDB</a></p>\n</div>', '1', '2023-08-10 17:40:42', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (6, '底部-禅悦', 'footer-chanyue', '<div class=\"col-6\">\n<h4 class=\"f-15 pb-10\">chanyue-cms</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">在线文档</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">视频教程</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">标签工具</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">模板</a></p>\n</div>', '1', '2023-08-10 17:41:18', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (7, '底部-关于', 'footer-guanyu', '<div class=\"col-6\">\n<h4 class=\"f-15  pb-10\">关于</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">关于我们1</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">最新动态1</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">联系作者1</a></p>\n</div>', '1', '2023-08-10 17:41:52', '2023-12-10 19:27:50');
INSERT INTO `frag` VALUES (8, '首页轮播图', 'homeSlide', '<p><img src=\"/public/template/angke/img/banner.jpg\" alt=\"\"></p>', '1', '2023-11-05 22:29:01', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (9, '我就是用来测试的', 'test', 'chanyue-cms 值得拥有', '1', '2023-11-08 14:58:19', '2023-11-25 12:45:07');

-- ----------------------------
-- Table structure for friendlink
-- ----------------------------
DROP TABLE IF EXISTS `friendlink`;
CREATE TABLE `friendlink`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '链接名称',
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '链接地址',
  `sort` tinyint(255) NULL DEFAULT 0 COMMENT '排序',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '友情链接' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of friendlink
-- ----------------------------
INSERT INTO `friendlink` VALUES (1, '香港日报', 'http://www.hongkongdaily.net', 0, '2023-07-22 22:59:55', '2023-11-25 12:44:34');

-- ----------------------------
-- Table structure for gather
-- ----------------------------
DROP TABLE IF EXISTS `gather`;
CREATE TABLE `gather`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `taskName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务名称',
  `targetUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '采集地址',
  `parseData` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '格式化数据函数',
  `cid` int(11) NULL DEFAULT NULL COMMENT '存储到栏目',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '发布状态 1 草稿 2 发布',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '开源接口采集' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gather
-- ----------------------------
INSERT INTO `gather` VALUES (3, '60s1', 'https://api.qqsuu.cn/api/dm-60s?type=json', 'let obj = {\n	title:\'\',\n	content:\'\'\n}\nif(data.success){\n	obj.title = data.name;\n	let p = \'\';\n	data.data.forEach((item)=>{\n	  p += \'<p>\'+item +\'</p>\'\n	});\n	obj.content = p;\n}\nreturn obj;', 1, '2', '2023-11-29 19:10:45', '2023-12-01 00:07:22');
INSERT INTO `gather` VALUES (4, '60s稳定版本', 'https://api.j4u.ink/v1/store/other/proxy/remote/news/60.json', 'let obj = {\n	title:\'\',\n	content:\'\'\n}\nif(data.code == 200){\n	obj.title = \"香港日报新闻60秒\"+ data.data.date_info.date;\n	let p = \'\';\n	data.data.news.forEach((item)=>{\n	  p += \'<p>\'+item +\'</p>\'\n	});\n       p+=\'<p>[香港日报微语]：\'+data.data.weiyu+\'</p>\'\n      obj.content = p;\n}\nreturn obj;', 15, '1', '2023-12-01 00:03:35', '2023-12-10 19:36:36');

-- ----------------------------
-- Table structure for login_log
-- ----------------------------
DROP TABLE IF EXISTS `login_log`;
CREATE TABLE `login_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户id',
  `ip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ip',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`uid`, `createdAt`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 50 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of login_log
-- ----------------------------
INSERT INTO `login_log` VALUES (1, 1, '127.0.0.1', '2023-11-01 17:01:53');
INSERT INTO `login_log` VALUES (2, 3, '127.0.0.1', '2023-11-01 17:38:53');
INSERT INTO `login_log` VALUES (3, 1, '127.0.0.1', '2023-11-01 17:39:49');
INSERT INTO `login_log` VALUES (4, 3, '127.0.0.1', '2023-11-01 17:51:16');
INSERT INTO `login_log` VALUES (5, 2, '127.0.0.1', '2023-11-01 17:51:57');
INSERT INTO `login_log` VALUES (6, 1, '127.0.0.1', '2023-11-01 21:55:40');
INSERT INTO `login_log` VALUES (7, 3, '127.0.0.1', '2023-11-01 22:11:35');
INSERT INTO `login_log` VALUES (8, 1, '127.0.0.1', '2023-11-01 22:11:51');
INSERT INTO `login_log` VALUES (9, 2, '127.0.0.1', '2023-11-01 22:13:49');
INSERT INTO `login_log` VALUES (10, 3, '127.0.0.1', '2023-11-01 22:14:09');
INSERT INTO `login_log` VALUES (11, 2, '127.0.0.1', '2023-11-05 21:39:45');
INSERT INTO `login_log` VALUES (12, 2, '127.0.0.1', '2023-11-05 23:18:19');
INSERT INTO `login_log` VALUES (13, 1, '127.0.0.1', '2023-11-05 23:19:20');
INSERT INTO `login_log` VALUES (14, 2, '127.0.0.1', '2023-11-05 23:41:48');
INSERT INTO `login_log` VALUES (15, 1, '127.0.0.1', '2023-11-05 23:58:42');
INSERT INTO `login_log` VALUES (16, 2, '127.0.0.1', '2023-11-05 23:59:06');
INSERT INTO `login_log` VALUES (17, 1, '127.0.0.1', '2023-11-07 09:35:47');
INSERT INTO `login_log` VALUES (18, 1, '127.0.0.1', '2023-11-08 11:22:11');
INSERT INTO `login_log` VALUES (19, 1, '127.0.0.1', '2023-11-25 12:59:36');
INSERT INTO `login_log` VALUES (20, 2, '127.0.0.1', '2023-11-25 13:00:00');
INSERT INTO `login_log` VALUES (21, 1, '127.0.0.1', '2023-11-25 13:05:01');
INSERT INTO `login_log` VALUES (22, 1, '127.0.0.1', '2023-11-25 18:04:58');
INSERT INTO `login_log` VALUES (23, 1, '127.0.0.1', '2023-11-26 11:56:25');
INSERT INTO `login_log` VALUES (24, 1, '127.0.0.1', '2023-12-05 22:20:58');
INSERT INTO `login_log` VALUES (25, 1, '127.0.0.1', '2023-12-07 20:57:59');
INSERT INTO `login_log` VALUES (26, 1, '127.0.0.1', '2023-12-08 21:29:29');
INSERT INTO `login_log` VALUES (27, 2, '127.0.0.1', '2023-12-08 21:33:06');
INSERT INTO `login_log` VALUES (28, 2, '127.0.0.1', '2023-12-09 09:49:01');
INSERT INTO `login_log` VALUES (29, 2, '127.0.0.1', '2023-12-10 13:10:37');
INSERT INTO `login_log` VALUES (30, 1, '127.0.0.1', '2023-12-10 19:18:41');
INSERT INTO `login_log` VALUES (31, 2, '127.0.0.1', '2023-12-10 19:30:35');
INSERT INTO `login_log` VALUES (32, 2, '127.0.0.1', '2023-12-17 18:48:38');
INSERT INTO `login_log` VALUES (33, 1, '127.0.0.1', '2023-12-17 19:50:41');
INSERT INTO `login_log` VALUES (34, 2, '127.0.0.1', '2023-12-17 20:12:33');
INSERT INTO `login_log` VALUES (35, 2, '127.0.0.1', '2023-12-17 20:15:34');
INSERT INTO `login_log` VALUES (36, 1, '127.0.0.1', '2023-12-17 20:15:49');
INSERT INTO `login_log` VALUES (37, 2, '127.0.0.1', '2023-12-17 20:18:15');
INSERT INTO `login_log` VALUES (38, 2, '127.0.0.1', '2023-12-23 20:20:16');
INSERT INTO `login_log` VALUES (39, 1, '127.0.0.1', '2023-12-31 20:23:16');
INSERT INTO `login_log` VALUES (40, 2, '127.0.0.1', '2023-12-31 20:41:37');
INSERT INTO `login_log` VALUES (41, 1, '127.0.0.1', '2024-01-01 18:07:43');
INSERT INTO `login_log` VALUES (42, 1, '127.0.0.1', '2024-01-19 20:04:56');
INSERT INTO `login_log` VALUES (43, 1, '127.0.0.1', '2024-02-01 23:19:03');
INSERT INTO `login_log` VALUES (44, 1, '127.0.0.1', '2024-02-01 23:28:59');
INSERT INTO `login_log` VALUES (45, 1, '127.0.0.1', '2024-02-01 23:37:21');
INSERT INTO `login_log` VALUES (46, 1, '127.0.0.1', '2024-02-09 20:54:58');
INSERT INTO `login_log` VALUES (47, 1, '127.0.0.1', '2024-02-09 21:23:43');
INSERT INTO `login_log` VALUES (48, 1, '127.0.0.1', '2024-02-17 21:36:44');
INSERT INTO `login_log` VALUES (49, 2, '127.0.0.1', '2024-02-17 21:46:57');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `tel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
  `company` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司名称',
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '留言内容',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '留言' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (1, '闫宇韬', '13366826071', '天山派', '仰天大笑出门去，我辈岂是蓬蒿人！', '2023-11-25 12:42:23', '2023-11-25 12:42:23');

-- ----------------------------
-- Table structure for model
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型名称',
  `table_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型对应的表名',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '1->开启 0->关闭',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '模型字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES (1, 'down', 'down', '1');

-- ----------------------------
-- Table structure for site
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site`  (
  `id` int(2) NOT NULL AUTO_INCREMENT COMMENT '站点id',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站名称',
  `domain` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站域名',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `wx` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信',
  `icp` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ICP备案号',
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '站点统计代码',
  `json` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '万能配置',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面标题',
  `keywords` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面关键词',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面描述',
  `template` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'view模板',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序secret',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '网站信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of site
-- ----------------------------
INSERT INTO `site` VALUES (1, 'chancms', 'www.chancms.top', '867528315@qq.com', NULL, '皖ICP备2024033678号-1', '', '', 'chancms', 'chancms', 'chancms是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。', NULL, NULL, NULL, NULL, '2024-02-17 21:41:45');

-- ----------------------------
-- Table structure for slide
-- ----------------------------
DROP TABLE IF EXISTS `slide`;
CREATE TABLE `slide`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '轮播图',
  `link_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '轮播链接',
  `mark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of slide
-- ----------------------------
INSERT INTO `slide` VALUES (1, '首页', '/public/cover/05.jpg', '', NULL, '2023-11-05 23:29:14', '2023-12-08 21:32:31');

-- ----------------------------
-- Table structure for sys_app
-- ----------------------------
DROP TABLE IF EXISTS `sys_app`;
CREATE TABLE `sys_app`  (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `template` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'default' COMMENT 'view模板名称',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序秘钥',
  `accessKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云ak',
  `secretKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云sk',
  `domain` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云域名',
  `bucket` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云bucket',
  `uploadWay` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '上传方式 1->普通 2->七牛云',
  `maxAge` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '静态资源缓存 1开启 2关闭',
  `dataCache` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '全局模板数据缓存 1开启 2关闭',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '应用配置' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_app
-- ----------------------------
INSERT INTO `sys_app` VALUES (1, 'default', 's', 'x', 'x', 'x', 'x', 'x', '1', '2', '2', '2023-10-07 21:52:21', '2023-11-08 11:44:23');

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `config_id` int(5) NOT NULL COMMENT '参数主键',
  `config_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数名称',
  `config_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键名',
  `config_value` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键值',
  `config_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '系统内置（Y是 N否）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`config_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_config
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '菜单配置',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (2, '{\"route\":[{\"path\":\"/home\",\"name\":\"home-info\",\"component\":\"@/views/home/info.vue\",\"meta\":{\"title\":\"网站信息\",\"icon\":\"DataLine\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/site\",\"name\":\"site\",\"meta\":{\"title\":\"站点管理\",\"icon\":\"Monitor\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]},\"redirect\":\"/site\",\"children\":[{\"path\":\"/site\",\"name\":\"site-index\",\"component\":\"@/views/home/site.vue\",\"meta\":{\"title\":\"站点设置\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/content\",\"name\":\"content\",\"meta\":{\"title\":\"内容管理\",\"isShow\":true,\"icon\":\"Grid\",\"role\":[\"admin\",\"super\",\"editor\"]},\"redirect\":\"/category\",\"children\":[{\"path\":\"/category\",\"name\":\"category-index\",\"component\":\"@/views/category/index.vue\",\"meta\":{\"title\":\"栏目管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/category/add\",\"name\":\"category-add\",\"component\":\"@/views/category/add.vue\",\"meta\":{\"title\":\"栏目管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/category/edit/:id\",\"name\":\"category-edit\",\"component\":\"@/views/category/edit.vue\",\"meta\":{\"title\":\"页面管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article\",\"name\":\"article-index\",\"component\":\"@/views/article/index.vue\",\"meta\":{\"title\":\"文章管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article/add\",\"name\":\"article-add\",\"component\":\"@/views/article/add.vue\",\"meta\":{\"title\":\"文章管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article/edit/:id\",\"name\":\"article-edit\",\"component\":\"@/views/article/edit.vue\",\"meta\":{\"title\":\"文章管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide\",\"name\":\"slide-index\",\"component\":\"@/views/slide/index.vue\",\"meta\":{\"title\":\"轮播管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide/add\",\"name\":\"slide-add\",\"component\":\"@/views/slide/add.vue\",\"meta\":{\"title\":\"轮播管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide/edit/:id\",\"name\":\"slide-edit\",\"component\":\"@/views/slide/edit.vue\",\"meta\":{\"title\":\"轮播管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag\",\"name\":\"tag-index\",\"component\":\"@/views/tag/index.vue\",\"meta\":{\"title\":\"标签管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag/add\",\"name\":\"tag-add\",\"component\":\"@/views/tag/add.vue\",\"meta\":{\"title\":\"标签管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag/edit/:id\",\"name\":\"tag-edit\",\"component\":\"@/views/tag/edit.vue\",\"meta\":{\"title\":\"标签管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag\",\"name\":\"frag-index\",\"component\":\"@/views/frag/index.vue\",\"meta\":{\"title\":\"碎片管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag/add\",\"name\":\"frag-add\",\"component\":\"@/views/frag/add.vue\",\"meta\":{\"title\":\"碎片管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag/edit/:id\",\"name\":\"frag-edit\",\"component\":\"@/views/frag/edit.vue\",\"meta\":{\"title\":\"碎片管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/gather\",\"name\":\"gather\",\"meta\":{\"title\":\"采集功能\",\"icon\":\"MagicStick\",\"isShow\":true,\"role\":[\"super\"]},\"redirect\":\"/collect\",\"children\":[{\"path\":\"/collect\",\"name\":\"collect-index\",\"component\":\"@/views/collect/index.vue\",\"meta\":{\"title\":\"页面采集\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/collect/add\",\"name\":\"collect-add\",\"component\":\"@/views/collect/add.vue\",\"meta\":{\"title\":\"页面采集-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/collect/:id\",\"name\":\"collect-edit\",\"component\":\"@/views/collect/edit.vue\",\"meta\":{\"title\":\"页面采集-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/gather\",\"name\":\"gather-index\",\"component\":\"@/views/gather/index.vue\",\"meta\":{\"title\":\"接口采集\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/gather/add\",\"name\":\"gather-add\",\"component\":\"@/views/gather/add.vue\",\"meta\":{\"title\":\"接口采集-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/gather/edit/:id\",\"name\":\"gather-edit\",\"component\":\"@/views/gather/edit.vue\",\"meta\":{\"title\":\"接口采集-更新\",\"isShow\":false,\"role\":[\"super\"]}}]},{\"path\":\"/extend\",\"name\":\"extend\",\"meta\":{\"title\":\"功能管理\",\"icon\":\"Operation\",\"isShow\":true,\"role\":[\"super\",\"admin\",\"editor\"]},\"children\":[{\"path\":\"/model\",\"name\":\"model-index\",\"component\":\"@/views/model/index.vue\",\"meta\":{\"title\":\"模型管理\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/model/add\",\"name\":\"model-add\",\"component\":\"@/views/model/add.vue\",\"meta\":{\"title\":\"模型管理-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/edit/:id\",\"name\":\"model-edit\",\"component\":\"@/views/model/edit.vue\",\"meta\":{\"title\":\"模型管理-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field\",\"name\":\"field-index\",\"component\":\"@/views/field/index.vue\",\"meta\":{\"title\":\"字段管理\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field/add\",\"name\":\"field-add\",\"component\":\"@/views/field/add.vue\",\"meta\":{\"title\":\"字段管理-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field/edit\",\"name\":\"field-edit\",\"component\":\"@/views/field/edit.vue\",\"meta\":{\"title\":\"字段管理-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/friendlink\",\"name\":\"friendlink-index\",\"component\":\"@/views/friendlink/index.vue\",\"meta\":{\"title\":\"友情链接\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/friendlink/add\",\"name\":\"friendlink-add\",\"component\":\"@/views/friendlink/add.vue\",\"meta\":{\"title\":\"友情链接-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/friendlink/edit/:id\",\"name\":\"friendlink-edit\",\"component\":\"@/views/friendlink/edit.vue\",\"meta\":{\"title\":\"友情链接-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message\",\"name\":\"message-index\",\"component\":\"@/views/message/index.vue\",\"meta\":{\"title\":\"消息管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message/add\",\"name\":\"message-add\",\"component\":\"@/views/message/add.vue\",\"meta\":{\"title\":\"消息管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message/edit/:id\",\"name\":\"message-edit\",\"component\":\"@/views/message/edit.vue\",\"meta\":{\"title\":\"消息管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/sys\",\"name\":\"sys\",\"meta\":{\"title\":\"系统管理\",\"isShow\":true,\"icon\":\"Setting\",\"role\":[\"admin\",\"super\"]},\"redirect\":\"/user\",\"children\":[{\"path\":\"/user\",\"name\":\"user-index\",\"component\":\"@/views/user/index.vue\",\"meta\":{\"title\":\"用户管理\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/user/add\",\"name\":\"user-add\",\"component\":\"@/views/user/add.vue\",\"meta\":{\"title\":\"用户列表-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/user/edit/:id\",\"name\":\"user-edit\",\"component\":\"@/views/user/edit.vue\",\"meta\":{\"title\":\"用户列表-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role\",\"name\":\"role-index\",\"component\":\"@/views/role/index.vue\",\"meta\":{\"title\":\"角色管理\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role/add\",\"name\":\"role-add\",\"component\":\"@/views/role/add.vue\",\"meta\":{\"title\":\"角色列表-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role/edit/:id\",\"name\":\"role-edit\",\"component\":\"@/views/role/edit.vue\",\"meta\":{\"title\":\"角色列表-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/menu\",\"name\":\"menu-index\",\"component\":\"@/views/menu/index.vue\",\"meta\":{\"title\":\"菜单管理\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/loginlog\",\"name\":\"loginLog-index\",\"component\":\"@/views/loginlog/index.vue\",\"meta\":{\"title\":\"登录日志\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}}]}]}', NULL);

-- ----------------------------
-- Table structure for sys_notice
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice`  (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告标题',
  `type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告类型（1通知 2公告）',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '公告内容',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公告状态（0关闭  1正常）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '通知公告表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_notice
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色名称',
  `value` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色值',
  `sort` int(4) NOT NULL DEFAULT 0 COMMENT '显示顺序',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '角色状态（1正常 0停用）',
  `remark` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '超级管理员', 'super', 0, '1', NULL, '2023-10-30 21:57:52', '2023-10-30 22:00:50');
INSERT INTO `sys_role` VALUES (2, '普通管理员', 'admin', 0, '1', NULL, '2023-10-30 22:01:04', '2023-10-30 22:01:04');
INSERT INTO `sys_role` VALUES (3, '编辑管理', 'editor', 0, '1', NULL, '2023-10-30 22:01:11', '2023-10-30 22:02:14');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `role_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色id',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `password` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '帐号状态（1正常 0停用）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, '2', 'chanyue', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-30 22:42:01', '2023-10-30 23:39:18');
INSERT INTO `sys_user` VALUES (2, '1', 'yanyutao', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-30 22:42:18', '2023-10-30 23:55:42');
INSERT INTO `sys_user` VALUES (3, '3', '张三', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-31 00:06:55', '2023-10-31 00:06:55');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '标识',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '标签' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'cms', 'cms');
INSERT INTO `tag` VALUES (2, 'js库', 'jslib');
INSERT INTO `tag` VALUES (3, '开发工具', 'devtool');
INSERT INTO `tag` VALUES (4, 'pdf', 'pdf');
INSERT INTO `tag` VALUES (5, '新闻', 'xinwen');

SET FOREIGN_KEY_CHECKS = 1;
