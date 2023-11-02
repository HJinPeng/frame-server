/*
 Navicat Premium Data Transfer

 Source Server         : frame-server
 Source Server Type    : MySQL
 Source Server Version : 50743 (5.7.43)
 Source Host           : localhost:3307
 Source Schema         : frame-server

 Target Server Type    : MySQL
 Target Server Version : 50743 (5.7.43)
 File Encoding         : 65001

 Date: 31/10/2023 23:55:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission_type` varchar(64) NOT NULL COMMENT '权限类型：menu—菜单 btn—按钮',
  `permission_name` varchar(128) NOT NULL COMMENT '名称',
  `menu_code` varchar(255) DEFAULT NULL COMMENT '对应前端的路由名称',
  `permission_code` varchar(64) DEFAULT NULL COMMENT '权限码',
  `permission_level` int(11) DEFAULT NULL,
  `icon` varchar(128) DEFAULT NULL,
  `layout` varchar(64) DEFAULT NULL COMMENT '前端布局',
  `ranking` int(11) DEFAULT NULL,
  `hidden_menu` tinyint(4) DEFAULT '0' COMMENT '1—隐藏 0—显示',
  `keep_alive` tinyint(4) DEFAULT '0' COMMENT '1—缓存 0—不缓存',
  `external_link` tinyint(4) DEFAULT '0' COMMENT '1—外链 0 —非外链',
  `external_link_content` text,
  `status` varchar(16) DEFAULT '1' COMMENT '1—启用 2—禁用',
  `parent_id` int(11) DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT '0' COMMENT '1—删除 0—正常',
  `create_by` varchar(32) DEFAULT NULL,
  `create_by_name` varchar(32) DEFAULT NULL,
  `update_by` varchar(32) DEFAULT NULL,
  `update_by_name` varchar(32) DEFAULT NULL,
  `create_date_time` datetime DEFAULT NULL,
  `update_date_time` datetime DEFAULT NULL,
  `comment` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
BEGIN;
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (1, 'menu', '系统管理', NULL, NULL, NULL, 'setting', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
