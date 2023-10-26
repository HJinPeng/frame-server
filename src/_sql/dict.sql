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

 Date: 27/10/2023 00:41:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dict
-- ----------------------------
DROP TABLE IF EXISTS `dict`;
CREATE TABLE `dict` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dict_code` varchar(128) NOT NULL COMMENT '字典编码',
  `dict_name` varchar(255) NOT NULL COMMENT '字典名称',
  `status` varchar(16) NOT NULL DEFAULT '1' COMMENT '状态：1正常 2禁用',
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
-- Records of dict
-- ----------------------------
BEGIN;
INSERT INTO `dict` (`id`, `dict_code`, `dict_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (1, 'user_status', '用户状态', '1', 'admin', '管理员', '2023-10-26 20:53:26', 'admin', '管理员', '2023-10-26 20:53:45', 0);
INSERT INTO `dict` (`id`, `dict_code`, `dict_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (2, 'role_status', '角色状态', '1', 'admin', '管理员', '2023-10-26 20:54:15', 'admin', '管理员', '2023-10-26 20:54:23', 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
