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

 Date: 02/11/2023 22:40:41
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dict
-- ----------------------------
BEGIN;
INSERT INTO `dict` (`id`, `dict_code`, `dict_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (5, 'on-off', '开关状态', '1', 'admin', '管理员', '2023-10-28 19:54:36', NULL, NULL, NULL, 0);
INSERT INTO `dict` (`id`, `dict_code`, `dict_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (6, 'menu-btn', '菜单按钮类型', '1', 'admin', '管理员', '2023-11-01 21:57:48', NULL, NULL, NULL, 0);
INSERT INTO `dict` (`id`, `dict_code`, `dict_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (7, 'layout', '前端布局', '1', 'admin', '管理员', '2023-11-01 22:10:12', NULL, NULL, NULL, 0);
INSERT INTO `dict` (`id`, `dict_code`, `dict_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (8, 'show-hide', '菜单显示隐藏', '1', 'admin', '管理员', '2023-11-01 22:20:11', NULL, NULL, NULL, 0);
INSERT INTO `dict` (`id`, `dict_code`, `dict_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (9, 'keep-alive', '页面缓存', '1', 'admin', '管理员', '2023-11-01 22:21:20', NULL, NULL, NULL, 0);
INSERT INTO `dict` (`id`, `dict_code`, `dict_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (10, 'external-link', '是否外链', '1', 'admin', '管理员', '2023-11-01 22:24:02', NULL, NULL, NULL, 0);
COMMIT;

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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dict_item
-- ----------------------------
BEGIN;
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (23, 5, '1', '启用', '1', 1, 'admin', '管理员', '2023-10-28 19:54:44', 'admin', '管理员', '2023-10-28 20:12:46', 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (24, 5, '2', '禁用', '1', 2, 'admin', '管理员', '2023-10-28 19:54:54', 'admin', '管理员', '2023-10-28 20:08:39', 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (26, 6, 'menu', '菜单', '1', 1, 'admin', '管理员', '2023-11-01 21:58:05', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (27, 6, 'btn', '按钮', '1', 5, 'admin', '管理员', '2023-11-01 21:58:18', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (28, 7, 'LayoutHeader', 'LayoutHeader', '1', 5, 'admin', '管理员', '2023-11-01 22:11:26', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (29, 7, 'LayoutSimple', 'LayoutSimple', '1', 1, 'admin', '管理员', '2023-11-01 22:11:41', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (30, 7, 'LayoutHeaderSidebar', 'LayoutHeaderSidebar', '1', 10, 'admin', '管理员', '2023-11-01 22:12:01', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (31, 7, 'LayoutSidebarHeader', 'LayoutSidebarHeader', '1', 15, 'admin', '管理员', '2023-11-01 22:12:19', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (32, 8, '0', '显示', '1', 1, 'admin', '管理员', '2023-11-01 22:20:23', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (33, 8, '1', '隐藏', '1', 10, 'admin', '管理员', '2023-11-01 22:20:33', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (34, 9, '1', '缓存', '1', 10, 'admin', '管理员', '2023-11-01 22:21:34', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (35, 9, '0', '不缓存', '1', 1, 'admin', '管理员', '2023-11-01 22:21:44', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (36, 10, '0', '否', '1', 1, 'admin', '管理员', '2023-11-01 22:24:14', NULL, NULL, NULL, 0);
INSERT INTO `dict_item` (`id`, `dict_id`, `dict_item_code`, `dict_item_name`, `status`, `sort`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (37, 10, '1', '是', '1', 10, 'admin', '管理员', '2023-11-01 22:24:22', NULL, NULL, NULL, 0);
COMMIT;

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
  `hidden_menu` varchar(16) DEFAULT '0' COMMENT '1—隐藏 0—显示',
  `keep_alive` varchar(16) DEFAULT '0' COMMENT '1—缓存 0—不缓存',
  `external_link` varchar(16) DEFAULT NULL COMMENT '1—外链 0 —非外链',
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
BEGIN;
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (1, 'menu', '系统管理', NULL, NULL, NULL, 'setting', NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (2, 'menu', '菜单管理', 'MenuManagement', NULL, NULL, 'menu', 'LayoutHeaderSidebar', 1, '0', '0', '0', NULL, '1', 1, 0, NULL, NULL, 'admin', '管理员', NULL, '2023-11-02 22:00:54', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (3, 'menu', '用户管理', 'UserManagement', NULL, NULL, 'user', 'LayoutHeaderSidebar', 10, '0', '0', '0', NULL, '1', 1, 0, NULL, NULL, 'admin', '管理员', NULL, '2023-11-02 22:01:51', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (4, 'menu', '角色管理', 'RoleManagement', NULL, NULL, 'crown', 'LayoutHeaderSidebar', 5, '0', '0', '0', NULL, '1', 1, 0, NULL, NULL, 'admin', '管理员', NULL, '2023-11-02 21:59:35', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (5, 'menu', '角色管理666', 'RoleManagement666', NULL, NULL, 'crown', 'LayoutHeaderSidebar', 7, NULL, NULL, NULL, NULL, '1', 1, 1, NULL, NULL, 'admin', '管理员', NULL, '2023-11-01 21:15:12', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (6, 'menu', '菜单测试111234', 'sys', NULL, NULL, NULL, 'LayoutSimple', -1, '0', '1', '1', 'asdsddsf', '1', NULL, 0, NULL, NULL, 'admin', '管理员', NULL, '2023-11-02 21:15:35', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (9, 'menu', 'dfgdf', NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', NULL, '1', 4, 1, NULL, NULL, 'admin', '管理员', NULL, '2023-11-02 08:40:06', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (10, 'menu', 'sdf', 'sdf', NULL, NULL, NULL, 'LayoutHeader', NULL, '0', '0', '0', NULL, '1', 4, 1, NULL, NULL, 'admin', '管理员', NULL, '2023-11-02 11:29:01', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (11, 'btn', 'sdf', NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', NULL, '1', 6, 0, NULL, NULL, 'admin', '管理员', NULL, '2023-11-02 20:52:38', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (12, 'btn', 'sdf', NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', NULL, '1', NULL, 1, NULL, NULL, 'admin', '管理员', NULL, '2023-11-02 11:29:12', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (13, 'btn', 'dsf', NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', NULL, '1', 11, 1, NULL, NULL, 'admin', '管理员', NULL, '2023-11-02 11:29:31', NULL);
INSERT INTO `menu` (`id`, `permission_type`, `permission_name`, `menu_code`, `permission_code`, `permission_level`, `icon`, `layout`, `ranking`, `hidden_menu`, `keep_alive`, `external_link`, `external_link_content`, `status`, `parent_id`, `deleted`, `create_by`, `create_by_name`, `update_by`, `update_by_name`, `create_date_time`, `update_date_time`, `comment`) VALUES (14, 'menu', '字典管理', 'DictManagement', NULL, NULL, 'book', 'LayoutHeaderSidebar', 15, '0', '0', '0', NULL, '1', 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_code` varchar(128) NOT NULL COMMENT '角色编码',
  `role_name` varchar(255) NOT NULL COMMENT '角色名称',
  `status` varchar(16) NOT NULL DEFAULT '1' COMMENT '状态：1正常 2禁用',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人账号',
  `create_by_name` varchar(32) DEFAULT NULL COMMENT '创建人名称',
  `create_date_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人账号',
  `update_by_name` varchar(32) DEFAULT NULL COMMENT '更新人名称',
  `update_date_time` datetime DEFAULT NULL COMMENT '更新时间',
  `deleted` tinyint(4) DEFAULT '0' COMMENT '1删除 0正常',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
BEGIN;
INSERT INTO `role` (`id`, `role_code`, `role_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (2, 'admin', '管理员', '1', 'admin', '管理员', '2023-10-26 00:10:46', NULL, NULL, NULL, 0);
INSERT INTO `role` (`id`, `role_code`, `role_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (3, 'test1', '测试角色1', '1', 'admin', '管理员', '2023-11-02 14:14:43', NULL, NULL, NULL, 0);
INSERT INTO `role` (`id`, `role_code`, `role_name`, `status`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`, `deleted`) VALUES (4, 'test2', '测试角色2', '2', 'admin', '管理员', '2023-11-02 14:15:21', 'admin', '管理员', '2023-11-02 14:18:56', 0);
COMMIT;

-- ----------------------------
-- Table structure for role_menu
-- ----------------------------
DROP TABLE IF EXISTS `role_menu`;
CREATE TABLE `role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `menu_id` int(11) NOT NULL COMMENT '菜单id',
  `create_by` varchar(32) DEFAULT NULL,
  `create_by_name` varchar(32) DEFAULT NULL,
  `create_date_time` datetime DEFAULT NULL,
  `update_by` varchar(32) DEFAULT NULL,
  `update_by_name` varchar(32) DEFAULT NULL,
  `update_date_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_menu
-- ----------------------------
BEGIN;
INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (8, 2, 2, 'admin', '管理员', '2023-11-02 22:02:42', NULL, NULL, NULL);
INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (9, 2, 4, 'admin', '管理员', '2023-11-02 22:02:42', NULL, NULL, NULL);
INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (10, 2, 14, 'admin', '管理员', '2023-11-02 22:02:42', NULL, NULL, NULL);
INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (11, 2, 3, 'admin', '管理员', '2023-11-02 22:02:42', NULL, NULL, NULL);
INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (12, 2, 1, 'admin', '管理员', '2023-11-02 22:02:42', NULL, NULL, NULL);
INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (13, 3, 1, 'admin', '管理员', '2023-11-02 22:02:59', NULL, NULL, NULL);
INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (14, 3, 2, 'admin', '管理员', '2023-11-02 22:02:59', NULL, NULL, NULL);
INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (15, 4, 11, 'admin', '管理员', '2023-11-02 22:34:27', NULL, NULL, NULL);
INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (16, 4, 6, 'admin', '管理员', '2023-11-02 22:34:27', NULL, NULL, NULL);
COMMIT;

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
  `sex` varchar(16) DEFAULT '0' COMMENT '性别(0-默认未知,1-男,2-女)',
  `status` varchar(16) DEFAULT '1' COMMENT '用户状态(1-正常,2-冻结)',
  `deleted` tinyint(4) DEFAULT '0' COMMENT '逻辑删除(0-正常,1-删除)',
  `create_by` varchar(32) DEFAULT NULL,
  `create_by_name` varchar(32) DEFAULT NULL,
  `create_date_time` datetime DEFAULT NULL,
  `update_by` varchar(32) DEFAULT NULL,
  `update_by_name` varchar(32) DEFAULT NULL,
  `update_date_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `account`, `password`, `realname`, `email`, `phone`, `profile_photo`, `sex`, `status`, `deleted`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (9, 'jinpengh', '$2b$10$Q76aO4uQ171YWHmiVtsdgOy1ZIkr1dcj/CP1kco1McH6o8m9zStH.', '三年磨一剑', NULL, NULL, NULL, '0', '1', 1, 'admin', '系统管理员', '2023-10-25 22:01:20', 'admin', '管理员', '2023-10-25 22:07:10');
INSERT INTO `user` (`id`, `account`, `password`, `realname`, `email`, `phone`, `profile_photo`, `sex`, `status`, `deleted`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (10, 'admin', '$2b$10$.uqfCcObKd2wwl5EU5bEkun.1U2aVYOQB81sAdTRFdcwMjQtkAJIK', '管理员', NULL, NULL, NULL, '0', '1', 0, 'jinpengh', '三年磨一剑', '2023-10-25 22:02:32', 'test1', '测试用户1', '2023-11-02 17:56:34');
INSERT INTO `user` (`id`, `account`, `password`, `realname`, `email`, `phone`, `profile_photo`, `sex`, `status`, `deleted`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (20, 'test1', '$2b$10$H6bXkryT40Nx18fJcex99.8SLBFu8DKxshUp7TjA86JwbS9a8492S', '测试用户12', NULL, NULL, NULL, '0', '1', 0, 'admin', '管理员', '2023-11-02 15:38:29', 'test1', '测试用户1', '2023-11-02 17:59:07');
COMMIT;

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `create_by` varchar(32) DEFAULT NULL,
  `create_by_name` varchar(32) DEFAULT NULL,
  `create_date_time` datetime DEFAULT NULL,
  `update_by` varchar(32) DEFAULT NULL,
  `update_by_name` varchar(32) DEFAULT NULL,
  `update_date_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_role
-- ----------------------------
BEGIN;
INSERT INTO `user_role` (`id`, `user_id`, `role_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (12, 10, 2, 'test1', '测试用户1', '2023-11-02 17:56:34', NULL, NULL, NULL);
INSERT INTO `user_role` (`id`, `user_id`, `role_id`, `create_by`, `create_by_name`, `create_date_time`, `update_by`, `update_by_name`, `update_date_time`) VALUES (14, 20, 3, 'test1', '测试用户1', '2023-11-02 17:59:07', NULL, NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
