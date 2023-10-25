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

 Date: 22/10/2023 17:09:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL COMMENT '账号',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `realname` varchar(255) NOT NULL COMMENT '真实名称/昵称',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(50) DEFAULT NULL COMMENT '手机号',
  `profile_photo` varchar(255) DEFAULT NULL COMMENT '头像',
  `sex` int(11) DEFAULT '0' COMMENT '性别(0-默认未知,1-男,2-女)',
  `status` int(11) DEFAULT '1' COMMENT '用户状态(1-正常,2-冻结)',
  `deleted` int(11) DEFAULT '0' COMMENT '逻辑删除(0-正常,1-删除)',
  `create_by` varchar(255) DEFAULT NULL,
  `create_by_name` varchar(255) DEFAULT NULL,
  `create_date_time` varchar(20) DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `update_by_name` varchar(255) DEFAULT NULL,
  `update_date_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `frame-server`.`user` (account,password,realname,email,phone,profile_photo,sex,status,deleted,create_by,create_by_name,create_date_time,update_by,update_by_name,update_date_time) VALUES
	 ('admin2','$2b$10$fesr42OGR4gq.hZ9yUIpSOXsJZ.XjiDn2M4nmUQpUQTT0WPRLDlOC','admin2',NULL,NULL,NULL,0,1,0,'admin',NULL,'2023/10/25 06:10:10',NULL,NULL,NULL),
	 ('admin4','$2b$10$Q.l0WhM40IepxDNqvFnHCuoD82Vs/Lx8MuakNvNT5cx9NvT.9zRJa','管理员4号',NULL,NULL,NULL,0,1,1,'admin2',NULL,'2023/10/25 10:10:10',NULL,NULL,NULL),
	 ('admin3','$2b$10$9eP2Wp3LwuyG8ABF1Ac28uTJOYxg5THKqQOMjjYp/VrrOR0MCljBW','3号选手',NULL,NULL,NULL,0,1,1,'admin2',NULL,'2023/10/24 10:10:10',NULL,NULL,NULL),
	 ('admin','$2b$10$sZIqexgups73U9D.lu6JMehUzqg0GQgFGkyPJkLoVSvIxijwAnhPO','系统管理员',NULL,NULL,NULL,0,1,0,'admin2',NULL,'2023/10/25 07:10:10',NULL,NULL,NULL),
	 ('admin1','$2b$10$n.fnfNEJncAIyGbgYYC1eew36rJQ3tRTpBkoaY92X8TluDltBKVMy','业务管理',NULL,NULL,NULL,0,1,0,'admin',NULL,NULL,NULL,NULL,NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
