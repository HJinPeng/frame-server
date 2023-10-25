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

 Date: 26/10/2023 00:36:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(128) NOT NULL COMMENT '账号',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `realname` varchar(128) NOT NULL COMMENT '真实名称/昵称',
  `email` varchar(64) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(64) DEFAULT NULL COMMENT '手机号',
  `profile_photo` text COMMENT '头像',
  `sex` tinyint(4) DEFAULT '0' COMMENT '性别(0-默认未知,1-男,2-女)',
  `status` varchar(16) DEFAULT '1' COMMENT '用户状态(1-正常,2-冻结)',
  `deleted` tinyint(4) DEFAULT '0' COMMENT '逻辑删除(0-正常,1-删除)',
  `create_by` varchar(32) DEFAULT NULL,
  `create_by_name` varchar(32) DEFAULT NULL,
  `create_date_time` datetime DEFAULT NULL,
  `update_by` varchar(32) DEFAULT NULL,
  `update_by_name` varchar(32) DEFAULT NULL,
  `update_date_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `account`, `password`, `realname`, `email`, `phone`, `profile_photo`, `sex`, `status`, `deleted`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (1, 'admin', '$2b$10$.uqfCcObKd2wwl5EU5bEkun.1U2aVYOQB81sAdTRFdcwMjQtkAJIK', '管理员', NULL, NULL, NULL, 0, '1', 0, 'jinpengh', '三年磨一剑', '2023-10-25 22:02:32', NULL, NULL, NULL);
INSERT INTO `user` (`id`, `account`, `password`, `realname`, `email`, `phone`, `profile_photo`, `sex`, `status`, `deleted`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (2, 'jinpengh', '$2b$10$Q76aO4uQ171YWHmiVtsdgOy1ZIkr1dcj/CP1kco1McH6o8m9zStH.', '三年磨一剑', NULL, NULL, NULL, 0, '1', 1, 'admin', '系统管理员', '2023-10-25 22:01:20', 'admin', '管理员', '2023-10-25 22:07:10');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
