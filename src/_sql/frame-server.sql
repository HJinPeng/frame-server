-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: frame-server
-- ------------------------------------------------------
-- Server version	5.7.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dict`
--

DROP TABLE IF EXISTS `dict`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dict`
--

LOCK TABLES `dict` WRITE;
/*!40000 ALTER TABLE `dict` DISABLE KEYS */;
INSERT INTO `dict` VALUES (5,'on-off','开关状态','1','admin','管理员','2023-10-28 19:54:36',NULL,NULL,NULL,0),(6,'menu-btn','菜单按钮类型','1','admin','管理员','2023-11-01 21:57:48',NULL,NULL,NULL,0),(7,'layout','前端布局','1','admin','管理员','2023-11-01 22:10:12',NULL,NULL,NULL,0),(8,'show-hide','菜单显示隐藏','1','admin','管理员','2023-11-01 22:20:11',NULL,NULL,NULL,0),(9,'keep-alive','页面缓存','1','admin','管理员','2023-11-01 22:21:20',NULL,NULL,NULL,0),(10,'external-link','是否外链','1','admin','管理员','2023-11-01 22:24:02',NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `dict` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dict_item`
--

DROP TABLE IF EXISTS `dict_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dict_item`
--

LOCK TABLES `dict_item` WRITE;
/*!40000 ALTER TABLE `dict_item` DISABLE KEYS */;
INSERT INTO `dict_item` VALUES (23,5,'1','启用','1',1,'admin','管理员','2023-10-28 19:54:44','admin','管理员','2023-10-28 20:12:46',0),(24,5,'2','禁用','1',2,'admin','管理员','2023-10-28 19:54:54','admin','管理员','2023-10-28 20:08:39',0),(26,6,'menu','菜单','1',1,'admin','管理员','2023-11-01 21:58:05',NULL,NULL,NULL,0),(27,6,'btn','按钮','1',5,'admin','管理员','2023-11-01 21:58:18',NULL,NULL,NULL,0),(28,7,'LayoutHeader','LayoutHeader','1',5,'admin','管理员','2023-11-01 22:11:26',NULL,NULL,NULL,0),(29,7,'LayoutSimple','LayoutSimple','1',1,'admin','管理员','2023-11-01 22:11:41',NULL,NULL,NULL,0),(30,7,'LayoutHeaderSidebar','LayoutHeaderSidebar','1',10,'admin','管理员','2023-11-01 22:12:01',NULL,NULL,NULL,0),(31,7,'LayoutSidebarHeader','LayoutSidebarHeader','1',15,'admin','管理员','2023-11-01 22:12:19',NULL,NULL,NULL,0),(32,8,'0','显示','1',1,'admin','管理员','2023-11-01 22:20:23',NULL,NULL,NULL,0),(33,8,'1','隐藏','1',10,'admin','管理员','2023-11-01 22:20:33',NULL,NULL,NULL,0),(34,9,'1','缓存','1',10,'admin','管理员','2023-11-01 22:21:34',NULL,NULL,NULL,0),(35,9,'0','不缓存','1',1,'admin','管理员','2023-11-01 22:21:44',NULL,NULL,NULL,0),(36,10,'0','否','1',1,'admin','管理员','2023-11-01 22:24:14',NULL,NULL,NULL,0),(37,10,'1','是','1',10,'admin','管理员','2023-11-01 22:24:22',NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `dict_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'menu','系统管理',NULL,NULL,NULL,'setting',NULL,5,NULL,NULL,NULL,NULL,'1',NULL,0,NULL,NULL,'admin','管理员',NULL,'2023-11-03 11:18:41',NULL),(2,'menu','菜单管理','MenuManagement',NULL,NULL,'menu','LayoutHeaderSidebar',1,'0','0','0',NULL,'1',1,0,NULL,NULL,'admin','管理员',NULL,'2023-11-02 22:00:54',NULL),(3,'menu','用户管理','UserManagement',NULL,NULL,'user','LayoutHeaderSidebar',10,'0','0','0',NULL,'1',1,0,NULL,NULL,'admin','管理员',NULL,'2023-11-02 22:01:51',NULL),(4,'menu','角色管理','RoleManagement',NULL,NULL,'crown','LayoutHeaderSidebar',5,'0','0','0',NULL,'1',1,0,NULL,NULL,'admin','管理员',NULL,'2023-11-02 21:59:35',NULL),(5,'menu','角色管理666','RoleManagement666',NULL,NULL,'crown','LayoutHeaderSidebar',7,NULL,NULL,NULL,NULL,'1',1,1,NULL,NULL,'admin','管理员',NULL,'2023-11-01 21:15:12',NULL),(6,'menu','菜单测试111234','sys',NULL,NULL,NULL,'LayoutSimple',-1,'0','1','1','asdsddsf','1',NULL,0,NULL,NULL,'admin','管理员',NULL,'2023-11-02 21:15:35',NULL),(9,'menu','dfgdf',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0',NULL,'1',4,1,NULL,NULL,'admin','管理员',NULL,'2023-11-02 08:40:06',NULL),(10,'menu','sdf','sdf',NULL,NULL,NULL,'LayoutHeader',NULL,'0','0','0',NULL,'1',4,1,NULL,NULL,'admin','管理员',NULL,'2023-11-02 11:29:01',NULL),(11,'btn','sdf',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','sfsdfdsf','1',6,0,NULL,NULL,'admin','管理员',NULL,'2023-11-03 08:42:51',NULL),(12,'btn','sdf',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0',NULL,'1',NULL,1,NULL,NULL,'admin','管理员',NULL,'2023-11-02 11:29:12',NULL),(13,'btn','dsf',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0',NULL,'1',11,1,NULL,NULL,'admin','管理员',NULL,'2023-11-02 11:29:31',NULL),(14,'menu','字典管理','DictManagement',NULL,NULL,'book','LayoutHeaderSidebar',15,'0','0','0',NULL,'1',1,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'menu','测试专用',NULL,NULL,NULL,'alert',NULL,10,'0','0','0',NULL,'1',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,'menu','页面栈','TestViewStackFirst',NULL,NULL,'ordered-list','LayoutHeaderSidebar',10,'0','0','0',NULL,'1',15,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'menu','SecondView','TestViewStackSecond',NULL,NULL,NULL,'LayoutSidebarHeader',10,'1','1','0',NULL,'1',16,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'menu','Thirdiew','TestViewStackThird',NULL,NULL,NULL,'LayoutSidebarHeader',10,'1','1','0',NULL,'1',17,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'menu','Fourthiew','TestViewStackFourth',NULL,NULL,NULL,'LayoutSidebarHeader',10,'1','0','0',NULL,'1',18,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (2,'admin','管理员','1','admin','管理员','2023-10-26 00:10:46',NULL,NULL,NULL,0),(3,'test1','测试角色1','1','admin','管理员','2023-11-02 14:14:43',NULL,NULL,NULL,0),(4,'test2','测试角色2','1','admin','管理员','2023-11-02 14:15:21','admin','管理员','2023-11-03 08:31:27',1);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_menu`
--

DROP TABLE IF EXISTS `role_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_menu`
--

LOCK TABLES `role_menu` WRITE;
/*!40000 ALTER TABLE `role_menu` DISABLE KEYS */;
INSERT INTO `role_menu` VALUES (13,3,1,'admin','管理员','2023-11-02 22:02:59',NULL,NULL,NULL),(14,3,2,'admin','管理员','2023-11-02 22:02:59',NULL,NULL,NULL),(17,2,3,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL),(18,2,4,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL),(19,2,14,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL),(20,2,2,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL),(21,2,18,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL),(22,2,16,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL),(23,2,15,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL),(24,2,17,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL),(25,2,19,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL),(26,2,1,'admin','管理员','2023-11-03 11:25:06',NULL,NULL,NULL);
/*!40000 ALTER TABLE `role_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (9,'jinpengh','$2b$10$Q76aO4uQ171YWHmiVtsdgOy1ZIkr1dcj/CP1kco1McH6o8m9zStH.','三年磨一剑',NULL,NULL,NULL,'0','1',1,'admin','系统管理员','2023-10-25 22:01:20','admin','管理员','2023-10-25 22:07:10'),(10,'admin','$2b$10$.uqfCcObKd2wwl5EU5bEkun.1U2aVYOQB81sAdTRFdcwMjQtkAJIK','管理员',NULL,NULL,NULL,'0','1',0,'jinpengh','三年磨一剑','2023-10-25 22:02:32','test1','测试用户1','2023-11-02 17:56:34'),(20,'test1','$2b$10$H6bXkryT40Nx18fJcex99.8SLBFu8DKxshUp7TjA86JwbS9a8492S','测试用户12',NULL,NULL,NULL,'0','1',0,'admin','管理员','2023-11-02 15:38:29','admin','管理员','2023-11-03 08:28:29');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (12,10,2,'test1','测试用户1','2023-11-02 17:56:34',NULL,NULL,NULL),(17,20,3,'admin','管理员','2023-11-03 08:28:29',NULL,NULL,NULL);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'frame-server'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-03 17:59:28
