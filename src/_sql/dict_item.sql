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

 Date: 26/10/2023 00:35:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dict_item
-- ----------------------------
DROP TABLE IF EXISTS `dict_item`;
CREATE TABLE `dict_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dict_id` int(11) NOT NULL COMMENT '字典id',
  `dict_item_code` varchar(128) NOT NULL COMMENT '字典条目编码',
  `dict_item_name` varchar(255) NOT NULL COMMENT '字典条目名称',
  `status` varchar(16) NOT NULL DEFAULT '1' COMMENT '状态：1正常 2禁用',
  `sort` int(11) NOT NULL DEFAULT 1 COMMENT '排序，数字越大越靠后',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人账号',
  `create_by_name` varchar(32) DEFAULT NULL COMMENT '创建人名称',
  `create_date_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人账号',
  `update_by_name` varchar(32) DEFAULT NULL COMMENT '更新人名称',
  `update_date_time` datetime DEFAULT NULL COMMENT '更新时间',
  `deleted` tinyint(4) DEFAULT '0' COMMENT '1删除 0正常',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dict_item
-- ----------------------------
BEGIN;

COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
