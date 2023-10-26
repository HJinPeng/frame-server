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

 Date: 27/10/2023 00:41:43
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
  `sort` int(11) NOT NULL DEFAULT '1' COMMENT '排序，数字越大越靠后',
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
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (6, 2, '1', '1', '1', 1, 'admin', '管理员', '2023-10-27 00:16:11', 'admin', '管理员', '2023-10-27 00:30:42', 1);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (7, 2, '2', '2', '1', 1, 'admin', '管理员', '2023-10-27 00:16:15', 'admin', '管理员', '2023-10-27 00:34:00', 1);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (8, 2, '4', '4', '1', 1, 'admin', '管理员', '2023-10-27 00:16:27', 'admin', '管理员', '2023-10-27 00:16:45', 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (9, 1, '1', '1', '1', 1, 'admin', '管理员', '2023-10-27 00:16:32', 'admin', '管理员', '2023-10-27 00:18:29', 1);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (10, 2, '3', '3', '1', 1, 'admin', '管理员', '2023-10-27 00:16:50', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (11, 2, '5', '5', '1', -1, 'admin', '管理员', '2023-10-27 00:17:00', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (12, 2, '6', '6', '1', 10, 'admin', '管理员', '2023-10-27 00:17:07', 'admin', '管理员', '2023-10-27 00:18:40', 1);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (13, 2, '7', '7', '1', 1, 'admin', '管理员', '2023-10-27 00:17:10', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (14, 2, '8', '8', '1', 1, 'admin', '管理员', '2023-10-27 00:17:19', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (15, 2, '9', '9', '1', 1, 'admin', '管理员', '2023-10-27 00:17:31', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (16, 2, '10', '10', '1', 1, 'admin', '管理员', '2023-10-27 00:17:38', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (17, 2, '11', '11', '1', 1, 'admin', '管理员', '2023-10-27 00:17:44', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (18, 2, '6', '6', '1', 1, 'admin', '管理员', '2023-10-27 00:23:22', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (19, 2, '1', '1', '1', 1, 'admin', '管理员', '2023-10-27 00:33:51', NULL, NULL, NULL, 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
