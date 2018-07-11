-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 laughing 的数据库结构
DROP DATABASE IF EXISTS `laughing`;
CREATE DATABASE IF NOT EXISTS `laughing` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `laughing`;


-- 导出  表 laughing.list 结构
DROP TABLE IF EXISTS `list`;
CREATE TABLE IF NOT EXISTS `list` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(50) NOT NULL,
  `discou` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `prime` varchar(50) NOT NULL,
  `imgurl1` varchar(50) DEFAULT NULL,
  `imgurl2` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- 正在导出表  laughing.list 的数据：~50 rows (大约)
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
REPLACE INTO `list` (`indexid`, `imgUrl`, `discou`, `name`, `type`, `price`, `prime`, `imgurl1`, `imgurl2`) VALUES
	(1, './images/tu12.jpg', '限时抢购108', 'Belle/百丽夏季专柜同款黑色粗跟皮', '凉鞋BLAA1BL7', '108', '188', NULL, NULL),
	(2, './images/tu6.jpg', '限时抢购108', 'Belle/百丽2018夏新专柜同款米白珠光', '凉鞋BLAC2BL8', '488', '588', NULL, NULL),
	(3, './images/tu6.jpg', '限时抢购108', 'Belle/百丽专柜同款夏白色牛皮革女皮', '凉鞋BGFA2BL7', '388', '699', NULL, NULL),
	(4, './images/tu5.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白色时尚舒适', '凉拖R5K1DBT7', '199', '299', NULL, NULL),
	(5, './images/tu1.jpg', '限时抢购108', 'Belle/百丽2018夏专柜新款枪色羊', '凉鞋01668BL8', '499', '799', NULL, NULL),
	(6, './images/tu2.jpg', '限时抢购108', 'Belle/百丽夏专柜同款黑色羊绒皮', '鞋BLWA5BL7', '399', '499', NULL, NULL),
	(7, './images/tu3.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白/黑白羊皮粗跟', '型女凉鞋BLA39BL7', '299', '399', NULL, NULL),
	(8, './images/tu4.jpg', '限时抢购108', 'Belle/百丽春专柜同款黑时尚英伦油皮', '皮女单鞋BLNA1AM7', '439', '599', NULL, NULL),
	(9, './images/tu5.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白色时尚舒适羊皮', '凉拖R5K1DBT7', '199', '299', NULL, NULL),
	(10, './images/tu6.jpg', '限时抢购108', 'Belle/百丽专柜同款夏白色牛皮革女皮', '凉鞋BGFA2BL7', '388', '699', NULL, NULL),
	(11, './images/tu7.jpg', '限时抢购108', 'Belle/百丽春黑色时尚穆勒鞋漆皮牛皮女', '凉鞋BNUA3AH7', '699', '799', NULL, NULL),
	(12, './images/tu8.jpg', '限时抢购108', 'Belle/百丽2018夏季专柜羊皮革/超纤女皮', '凉鞋S7X1DBH8', '288', '688', NULL, NULL),
	(13, './images/tu7.jpg', '限时抢购108', 'Belle/百丽2018夏新专柜同款米白珠光绵', '凉鞋BLAC2BL8', '488', '588', NULL, NULL),
	(14, './images/tu10.jpg', '限时抢购108', 'Belle/百丽2018夏季新款印花布/牛皮', '凉鞋BON3DBL8', '389', '489', NULL, NULL),
	(15, './images/tu11.jpg', '限时抢购108', 'Belle/百丽2018春新品专柜同款酒红漆皮', '女单鞋S2R1DAQ8', '588', '789', NULL, NULL),
	(16, './images/tu12.jpg', '限时抢购108', 'Belle/百丽夏季专柜同款黑色粗跟皮', '凉鞋BLAA1BL7', '108', '188', NULL, NULL),
	(17, './images/tu13.jpg', '限时抢购108', 'Belle/百丽2018夏新品专柜同款米/绿绵羊', '凉鞋BPT34BH8', '108', '188', NULL, NULL),
	(18, './images/tu13.jpg', '限时抢购108', 'Belle/百丽2018夏新品专柜同款米/', '凉鞋BPT34BH8', '108', '188', NULL, NULL),
	(19, './images/tu10.jpg', '限时抢购108', 'Belle/百丽2018夏季新款印花布/牛皮革', '凉鞋BON3DBL8', '389', '489', NULL, NULL),
	(20, './images/tu2.jpg', '限时抢购108', 'Belle/百丽夏专柜同款黑色羊绒皮革女', '鞋BLWA5BL7', '399', '499', NULL, NULL),
	(21, './images/tu4.jpg', '限时抢购108', 'Belle/百丽春专柜同款黑时尚英伦油皮', '皮女单鞋BLNA1AM7', '439', '599', NULL, NULL),
	(22, './images/tu4.jpg', '限时抢购108', 'Belle/百丽春专柜同款黑时尚英伦油皮', '皮女单鞋BLNA1AM7', '439', '599', NULL, NULL),
	(23, './images/tu5.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白色时尚舒适羊', '凉拖R5K1DBT7', '199', '299', NULL, NULL),
	(24, './images/tu1.jpg', '限时抢购108', 'Belle/百丽2018夏专柜新款枪色羊皮革', '凉鞋01668BL8', '499', '799', NULL, NULL),
	(26, './images/tu10.jpg', '限时抢购108', 'Belle/百丽2018夏季新款印花布/牛皮', '凉鞋BON3DBL8', '389', '489', NULL, NULL),
	(27, './images/tu13.jpg', '限时抢购108', 'Belle/百丽2018夏新品专柜同款米/', '凉鞋BPT34BH8', '108', '188', NULL, NULL),
	(28, './images/tu7.jpg', '限时抢购108', 'Belle/百丽春黑色时尚穆勒鞋漆', '凉鞋BNUA3AH7', '699', '799', NULL, NULL),
	(29, './images/tu3.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白/黑白羊皮粗跟', '型女凉鞋BLA39BL7', '299', '399', NULL, NULL),
	(30, './images/tu3.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白/黑白羊皮粗跟', '型女凉鞋BLA39BL7', '299', '399', NULL, NULL),
	(31, './images/tu1.jpg', '限时抢购108', 'Belle/百丽2018夏专柜新款枪色羊皮革', '凉鞋01668BL8', '499', '799', NULL, NULL),
	(32, './images/tu3.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白/黑白羊皮粗跟', '型女凉鞋BLA39BL7', '299', '399', NULL, NULL),
	(33, './images/tu4.jpg', '限时抢购108', 'Belle/百丽春专柜同款黑时尚英伦', '皮女单鞋BLNA1AM7', '439', '599', NULL, NULL),
	(34, './images/tu10.jpg', '限时抢购108', 'Belle/百丽2018夏季新款印花布/牛女', '凉鞋BON3DBL8', '389', '489', NULL, NULL),
	(35, './images/tu13.jpg', '限时抢购108', 'Belle/百丽2018夏新品专柜同款米/绿绵羊', '凉鞋BPT34BH8', '108', '188', NULL, NULL),
	(36, './images/tu7.jpg', '限时抢购108', 'Belle/百丽2018夏新专柜同款米白珠光绵', '凉鞋BLAC2BL8', '488', '588', NULL, NULL),
	(37, './images/tu7.jpg', '限时抢购108', 'Belle/百丽春黑色时尚穆勒鞋漆皮牛皮女', '凉鞋BNUA3AH7', '699', '799', NULL, NULL),
	(38, './images/tu4.jpg', '限时抢购108', 'Belle/百丽春专柜同款黑时尚英伦', '皮女单鞋BLNA1AM7', '439', '599', NULL, NULL),
	(39, './images/tu3.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白/黑白羊皮粗跟', '型女凉鞋BLA39BL7', '299', '399', NULL, NULL),
	(40, './images/tu6.jpg', '限时抢购108', 'Belle/百丽专柜同款夏白色牛皮革女皮', '凉鞋BGFA2BL7', '388', '699', NULL, NULL),
	(41, './images/tu6.jpg', '限时抢购108', 'Belle/百丽2018夏新专柜同款米白珠光', '凉鞋BLAC2BL8', '488', '588', NULL, NULL),
	(42, './images/tu13.jpg', '限时抢购108', 'Belle/百丽2018夏新品专柜同款米/', '凉鞋BPT34BH8', '108', '188', NULL, NULL),
	(43, './images/tu13.jpg', '限时抢购108', 'Belle/百丽2018夏新品专柜同款米', '凉鞋BPT34BH8', '108', '188', NULL, NULL),
	(44, './images/tu2.jpg', '限时抢购108', 'Belle/百丽夏专柜同款黑色羊绒皮革', '鞋BLWA5BL7', '399', '499', NULL, NULL),
	(45, './images/tu13.jpg', '限时抢购108', 'Belle/百丽2018夏新品专柜同款米/绿绵羊', '凉鞋BPT34BH8', '108', '188', NULL, NULL),
	(46, './images/tu5.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白色时尚舒适羊', '凉拖R5K1DBT7', '199', '299', NULL, NULL),
	(47, './images/tu11.jpg', '限时抢购108', 'Belle/百丽2018春新品专柜同款酒红漆皮', '女单鞋S2R1DAQ8', '588', '789', NULL, NULL),
	(48, './images/tu4.jpg', '限时抢购108', 'Belle/百丽春专柜同款黑时尚英伦油皮绵羊', '皮女单鞋BLNA1AM7', '439', '599', NULL, NULL),
	(49, './images/tu3.jpg', '限时抢购108', 'Belle/百丽夏专柜同款白/黑白羊皮粗跟 ', '皮女单鞋BLNA1AM7', '299', '399', NULL, NULL),
	(50, './images/tu10.jpg', '限时抢购108', 'Belle/百丽2018夏季新款印花布/牛皮 ', '凉鞋BON3DBL8', '389', '489', NULL, NULL),
	(51, './images/tu6.jpg', '限时抢购108', 'Belle/百丽专柜同款夏白色牛皮革女皮', '凉鞋BGFA2BL7', '388', '699', NULL, NULL);
/*!40000 ALTER TABLE `list` ENABLE KEYS */;


-- 导出  表 laughing.users 结构
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- 正在导出表  laughing.users 的数据：~5 rows (大约)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`indexid`, `username`, `password`) VALUES
	(1, 'aa', '123'),
	(4, 'abc', '123'),
	(9, '', ''),
	(17, '3', '3'),
	(18, 'dd', '123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
