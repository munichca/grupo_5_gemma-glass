-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: gemmaglass
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(50) DEFAULT NULL,
  `numer` int(11) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `province` varchar(30) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_FK` (`addressId`),
  CONSTRAINT `addresses_FK` FOREIGN KEY (`addressId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Reef'),(2,'Armani'),(3,'Nyol'),(4,'Ralph'),(5,'Oakley'),(6,'Ray-Ban'),(7,'Rusty'),(8,'Vulk'),(9,'3Momi'),(10,'Vogue'),(11,'Acuvue'),(12,'BBlocker'),(13,'Arlyt');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Lentes Recetados'),(2,'Lentes de Sol'),(3,'Lentes de Contacto'),(4,'Lentes Gamer');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'Metal'),(2,'Acetato'),(3,'Grilamid'),(4,'Contacto');
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productimages`
--

DROP TABLE IF EXISTS `productimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productimages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `images` varchar(100) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productimages_FK` (`productId`),
  CONSTRAINT `productimages_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=278 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
INSERT INTO `productimages` VALUES (107,'1638388643274_img_.jpg',5),(108,'1638388643277_img_.jpg',5),(109,'1638388643279_img_.jpg',5),(110,'1638388953792_img_.jpg',15),(111,'1638388953793_img_.jpg',15),(112,'1638388953794_img_.jpg',15),(113,'1638388996284_img_.jpg',6),(114,'1638388996285_img_.jpg',6),(115,'1638388996285_img_.jpg',6),(116,'1638389015942_img_.jpg',7),(117,'1638389015943_img_.jpg',7),(118,'1638389015943_img_.jpg',7),(119,'1638389358367_img_.jpg',37),(120,'1638389358372_img_.jpg',37),(121,'1638389358374_img_.jpg',37),(122,'1638389954420_img_.jpg',39),(123,'1638389954425_img_.jpg',39),(124,'1638389954426_img_.jpg',39),(125,'1638390020022_img_.jpg',40),(126,'1638390020024_img_.jpg',40),(127,'1638390020025_img_.jpg',40),(128,'1638390262172_img_.jpg',42),(129,'1638390262175_img_.jpg',42),(130,'1638390262176_img_.jpg',42),(131,'1638390328563_img_.jpg',43),(132,'1638390328564_img_.jpg',43),(133,'1638390328565_img_.jpg',43),(134,'1638390510215_img_.jpg',44),(135,'1638390510217_img_.jpg',44),(136,'1638390585698_img_.jpg',45),(137,'1638390585699_img_.jpg',45),(138,'1638390585700_img_.jpg',45),(139,'1638390646070_img_.jpg',46),(140,'1638390646072_img_.jpg',46),(141,'1638390646073_img_.jpg',46),(142,'1638390687572_img_.jpg',47),(143,'1638390687573_img_.jpg',47),(144,'1638390763185_img_.jpg',48),(145,'1638390763186_img_.jpg',48),(146,'1638390763187_img_.jpg',48),(147,'1638390802211_img_.jpg',49),(148,'1638390802212_img_.jpg',49),(149,'1638390802213_img_.jpg',49),(150,'1638390826177_img_.jpg',50),(151,'1638390826178_img_.jpg',50),(152,'1638390826179_img_.jpg',50),(153,'1638390882421_img_.jpg',51),(154,'1638390882422_img_.jpg',51),(155,'1638390882423_img_.jpg',51),(156,'1638390909753_img_.jpg',52),(157,'1638390909754_img_.jpg',52),(158,'1638390909764_img_.jpg',52),(159,'1638390961563_img_.jpg',53),(160,'1638390961564_img_.jpg',53),(161,'1638390961565_img_.jpg',53),(162,'1638391010651_img_.jpg',54),(163,'1638391010652_img_.jpg',54),(164,'1638391010653_img_.jpg',54),(165,'1638391228095_img_.jpg',55),(166,'1638391228096_img_.jpg',55),(167,'1638391228097_img_.jpg',55),(168,'1638391257463_img_.jpg',56),(169,'1638391257464_img_.jpg',56),(170,'1638391257465_img_.jpg',56),(171,'1638391291216_img_.jpg',57),(172,'1638391291217_img_.jpg',57),(173,'1638391291218_img_.jpg',57),(174,'1638391341256_img_.jpg',58),(175,'1638391341257_img_.jpg',58),(176,'1638391341258_img_.jpg',58),(177,'1638391374326_img_.jpg',59),(178,'1638391374327_img_.jpg',59),(179,'1638391374328_img_.jpg',59),(180,'1638391414741_img_.jpg',60),(181,'1638391414742_img_.jpg',60),(182,'1638391414743_img_.jpg',60),(183,'1638391460045_img_.jpg',61),(184,'1638391460046_img_.jpg',61),(185,'1638391460048_img_.jpg',61),(186,'1638391496125_img_.jpg',62),(187,'1638391496126_img_.jpg',62),(188,'1638391496126_img_.jpg',62),(189,'1638391531444_img_.jpg',63),(190,'1638391531445_img_.jpg',63),(191,'1638391531445_img_.jpg',63),(192,'1638391567252_img_.jpg',64),(193,'1638391567253_img_.jpg',64),(194,'1638391599262_img_.jpg',65),(195,'1638391599264_img_.jpg',65),(196,'1638391632260_img_.jpg',66),(197,'1638391632261_img_.jpg',66),(198,'1638391632262_img_.jpg',66),(199,'1638391692544_img_.jpg',67),(200,'1638391692545_img_.jpg',67),(201,'1638391692545_img_.jpg',67),(202,'1638391719427_img_.jpg',68),(203,'1638391719428_img_.jpg',68),(204,'1638391719432_img_.jpg',68),(205,'1638391743095_img_.jpg',69),(206,'1638391743097_img_.jpg',69),(207,'1638391743109_img_.jpg',69),(208,'1638391807894_img_.jpg',70),(209,'1638391807895_img_.jpg',70),(210,'1638391807896_img_.jpg',70),(211,'1638391835697_img_.jpg',71),(212,'1638391835697_img_.jpg',71),(213,'1638391835699_img_.jpg',71),(214,'1638391867328_img_.jpg',72),(215,'1638391867330_img_.jpg',72),(216,'1638391867330_img_.jpg',72),(217,'1638391920009_img_.jpg',73),(218,'1638391920010_img_.jpg',73),(219,'1638391957485_img_.jpg',74),(220,'1638391957486_img_.jpg',74),(221,'1638391995238_img_.jpg',75),(222,'1638391995240_img_.jpg',75),(223,'1638392077249_img_.jpg',76),(224,'1638392077251_img_.jpg',76),(225,'1638392077252_img_.jpg',76),(226,'1638392148764_img_.jpg',77),(227,'1638392148765_img_.jpg',77),(228,'1638392148766_img_.jpg',77),(229,'1638392179829_img_.jpg',78),(230,'1638392179830_img_.jpg',78),(231,'1638392179832_img_.jpg',78),(232,'1638392271950_img_.jpg',79),(233,'1638392271952_img_.jpg',79),(234,'1638392271952_img_.jpg',79),(235,'1638392347674_img_.jpg',80),(236,'1638392347675_img_.jpg',80),(237,'1638392347677_img_.jpg',80),(238,'1638392390045_img_.jpg',81),(239,'1638392390046_img_.jpg',81),(240,'1638392434121_img_.jpg',82),(241,'1638392434123_img_.jpg',82),(242,'1638392434123_img_.jpg',82),(243,'1638392461623_img_.jpg',83),(244,'1638392461625_img_.jpg',83),(245,'1638392461625_img_.jpg',83),(246,'1638392555763_img_.jpg',84),(247,'1638392555764_img_.jpg',84),(248,'1638392555765_img_.jpg',84),(249,'1638392604574_img_.jpg',85),(250,'1638392604575_img_.jpg',85),(251,'1638392604592_img_.jpg',85),(252,'1638392630213_img_.jpg',86),(253,'1638392630215_img_.jpg',86),(254,'1638392630215_img_.jpg',86),(255,'1638392661922_img_.jpg',87),(256,'1638392661923_img_.jpg',87),(257,'1638392661925_img_.jpg',87),(258,'1638392709784_img_.jpg',88),(259,'1638392709786_img_.jpg',88),(260,'1638392709787_img_.jpg',88),(261,'1638393138587_img_.jpg',89),(262,'1638393138589_img_.jpg',89),(263,'1638393138590_img_.jpg',89),(264,'1638393182938_img_.jpg',90),(265,'1638393182940_img_.jpg',90),(266,'1638393182960_img_.jpg',90),(267,'1638393631588_img_.png',91),(268,'1638393631602_img_.jpg',91),(269,'1638393682791_img_.png',92),(270,'1638393682798_img_.jpg',92),(271,'1638393741096_img_.jpg',93),(272,'1638393741097_img_.jpg',93),(273,'1638393741098_img_.jpg',93),(274,'1638393793681_img_.jpg',94),(275,'1638394063182_img_.jpg',95),(276,'1638394129866_img_.jfif',98),(277,'1638394165656_img_.jpg',99);
/*!40000 ALTER TABLE `productimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `brandId` int(11) DEFAULT NULL,
  `materialId` int(11) DEFAULT NULL,
  `shapeId` int(11) DEFAULT NULL,
  `height` decimal(10,2) NOT NULL,
  `discount` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `width` decimal(10,2) NOT NULL,
  `stock` int(10) unsigned DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_un` (`name`),
  KEY `products_FK` (`categoryId`),
  KEY `products_FK_1` (`brandId`),
  KEY `products_FK_4` (`materialId`),
  KEY `products_FK_3` (`shapeId`),
  CONSTRAINT `products_FK` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_FK_1` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_FK_3` FOREIGN KEY (`shapeId`) REFERENCES `shapes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_FK_4` FOREIGN KEY (`materialId`) REFERENCES `materials` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (5,'3momi 207 09',1,9,2,7,4.00,0,4400,12.00,NULL,NULL),(6,'3momi 299 06',1,9,2,3,5.00,5,5000,5.00,NULL,NULL),(7,'3momi 299 07',1,9,2,3,5.00,10,5254,5.00,NULL,NULL),(15,'3momi 300 04',1,9,2,7,6.00,25,25433,14.00,NULL,NULL),(37,'3momi 314 04',1,9,2,7,23.00,10,6200,23.00,NULL,NULL),(38,'3momi 315 04',1,9,2,3,23.00,0,6544,77.00,NULL,NULL),(39,'Armani Exchange 1037',1,2,2,7,23.00,10,15200,23.00,NULL,NULL),(40,'Armani Exchange 1035i',1,2,2,10,23.00,10,32000,55.00,NULL,NULL),(41,'Armani Exchange 1035L',1,2,2,10,23.00,0,15200,77.00,NULL,NULL),(42,'Armani Exchange 3028L',1,1,1,1,23.00,0,15200,14.00,NULL,NULL),(43,'Armani Exchange 3047L',1,1,3,1,23.00,0,15200,77.00,NULL,NULL),(44,'Exchange 3114',1,2,2,7,23.00,0,12344,77.00,NULL,NULL),(45,'Nyol 1702 08',1,3,2,8,23.00,0,6250,77.00,NULL,NULL),(46,'Nyol 1706 08',1,3,2,7,23.00,0,12000,77.00,NULL,NULL),(47,'Nyol 1902 03',1,1,1,3,23.00,0,5600,77.00,NULL,NULL),(48,'Nyol 1903 02',1,3,1,1,23.00,0,6500,14.00,NULL,NULL),(49,'Nyol 1904 01',1,3,1,1,23.00,0,7500,77.00,NULL,NULL),(50,'Nyol 1904 02',1,3,1,1,23.00,0,7500,77.00,NULL,NULL),(51,'Nyol 1904 03',1,3,1,1,23.00,0,7500,77.00,NULL,NULL),(52,'Nyol 1905 01',1,3,1,1,23.00,0,8000,77.00,NULL,NULL),(53,'Nyol 1905 02',1,3,1,1,23.00,0,8000,77.00,NULL,NULL),(54,'Nyol 1905 03',1,3,1,1,23.00,0,8000,77.00,NULL,NULL),(55,'Ralph 6046',1,4,1,8,23.00,0,10000,77.00,NULL,NULL),(56,'Ralph 7111',1,4,2,8,23.00,0,10000,77.00,NULL,NULL),(57,'Ralph 7114',1,4,2,7,23.00,0,10000,77.00,NULL,NULL),(58,'Reef 5169',1,1,2,8,23.00,0,12000,14.00,NULL,NULL),(59,'Reef 5204',1,1,2,7,23.00,0,12000,55.00,NULL,NULL),(60,'Reef 5214',1,1,1,7,23.00,0,12000,77.00,NULL,NULL),(61,'Rusty Ahimsa',1,7,1,2,23.00,0,23000,77.00,NULL,NULL),(62,'Rusty Lyen',1,7,1,1,23.00,0,15200,77.00,NULL,NULL),(63,'Rusty Misty',1,7,2,1,23.00,0,15200,77.00,NULL,NULL),(64,'Vogue 2787',1,10,2,10,23.00,0,8000,77.00,NULL,NULL),(65,'Vogue 2998',1,10,2,7,23.00,0,7500,77.00,NULL,NULL),(66,'Vogue 4088',1,10,1,3,23.00,0,12000,77.00,NULL,NULL),(67,'Vulk Alice',1,8,1,8,23.00,0,9200,77.00,NULL,NULL),(68,'Vulk Be Again',1,8,2,7,23.00,0,8200,77.00,NULL,NULL),(69,'Vulk Korna',1,1,2,8,23.00,0,9200,77.00,NULL,NULL),(70,'Nyol 1905 01 SG',2,3,1,1,23.00,0,15200,77.00,NULL,NULL),(71,'Nyol 1908 02 SG',2,3,1,2,23.00,0,15200,77.00,NULL,NULL),(72,'Nyol 1908 03 SG',2,3,1,2,23.00,0,23000,77.00,NULL,NULL),(73,'Oakley Enduro 03',2,5,2,9,23.00,0,15200,77.00,NULL,NULL),(74,'Oakley Holbrook 01',2,5,2,9,23.00,0,23653,77.00,NULL,NULL),(75,'Oakley Holbrook 05',2,5,2,9,23.00,0,23650,77.00,NULL,NULL),(76,'Ralph 5150',2,4,2,8,23.00,0,15200,77.00,NULL,NULL),(77,'Ralph 5151',2,4,2,8,23.00,0,15200,77.00,NULL,NULL),(78,'Ralph 5160',2,4,2,8,23.00,0,12650,77.00,NULL,NULL),(79,'Ray-Ban 3647n',2,6,1,1,23.00,0,70000,77.00,NULL,NULL),(80,'Ray-Ban Aviator L',2,6,1,2,23.00,0,120000,77.00,NULL,NULL),(81,'Ray-Ban Blaze Clubmaster 153',2,6,1,3,23.00,0,120000,77.00,NULL,NULL),(82,'Reef 223 05',2,1,2,7,23.00,0,32000,77.00,NULL,NULL),(83,'Reef 224 02',2,1,2,7,23.00,0,10000,77.00,NULL,NULL),(84,'Reef 224 08',2,1,1,7,23.00,0,15200,77.00,NULL,NULL),(85,'Rusty Ayerid',2,7,1,10,23.00,0,15200,77.00,NULL,NULL),(86,'Rusty Cake',2,7,1,2,23.00,0,15200,55.00,NULL,NULL),(87,'Rusty Fumzer',2,7,2,7,23.00,0,15200,77.00,NULL,NULL),(88,'Vulk 1973 G2',2,8,1,2,23.00,0,23650,77.00,NULL,NULL),(89,'Vulk Aladdin Sane',2,8,1,2,23.00,0,500000,77.00,NULL,NULL),(90,'Vulk Angers',2,8,1,8,23.00,0,15200,77.00,NULL,NULL),(91,'Blue Blocker Cristal 450',4,12,3,1,15.00,0,4500,23.00,NULL,NULL),(92,'Blue Blocker Cristal 527',4,12,3,1,23.00,0,4500,23.00,NULL,NULL),(93,'Blue Blocker Main 600',4,12,2,1,23.00,0,4500,77.00,NULL,NULL),(94,'Acuvue Oasys with transitions',3,1,4,1,23.00,0,12000,77.00,NULL,NULL),(95,'Biomedics 55 evolution',3,1,4,1,23.00,0,15200,77.00,NULL,NULL),(98,'Limpiador + Paño de Microfibra',1,13,1,1,23.00,0,750,77.00,NULL,NULL),(99,'Limpiador Arlyt 35ml',1,1,1,1,23.00,0,500,77.00,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shapes`
--

DROP TABLE IF EXISTS `shapes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shapes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shapes`
--

LOCK TABLES `shapes` WRITE;
/*!40000 ALTER TABLE `shapes` DISABLE KEYS */;
INSERT INTO `shapes` VALUES (1,'Round'),(2,'Aviador'),(3,'Browline'),(7,'Cuadrado'),(8,'Cateye'),(9,'Deportivo'),(10,'Rectangulo');
/*!40000 ALTER TABLE `shapes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `phone` int(11) NOT NULL,
  `rol` int(11) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `lastProdId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`),
  KEY `users_FK` (`lastProdId`),
  CONSTRAINT `users_FK` FOREIGN KEY (`lastProdId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'2321','1231','jesica1@mail.com','$2a$12$oItU7M5Xd0b6bVeu/0VcqO1qAlxCjnPDijkdZc1b3IzWQ7D5c80S2','1634785377768_img_.jpg',5464,2,'12312',7),(6,'es','','anima@mail.com','$2a$12$DshDvwFB8LWCCi8pIPvstu6wJ6SfV1RpjJcDM/B66TsvYui22IjWy','default-image.png',0,2,'as',NULL),(7,'Jesica','aas','asdas@mail.com','$2a$12$LWu1gthAng1hPh2ZEBJ29.KY.j7Tt2j827XcmxVf6uvtKTOdhlE1K','default-image.png',343,2,'asda',NULL),(8,'xxcxx','aas','asdqwe@ma.com','$2a$12$scq7KRwCWQ7SnCIdxw7kteZYUEPEIyge93ax8Td.t2h1XjiuKSEkK','default-image.png',34534,2,'sdfdsd',NULL),(19,'asdef','asdas','jesica2@mail.com','$2a$12$03O7bQaqeev3BJ450baFWubAMBrl2LJjaNX6.YJ3j7wzWSOy4dToa','1634348342515_img_.jpg',34534534,2,'',7),(20,'jesi','Dillon','jesi@mail.com','$2a$12$tzSu6uiPN.vCSongnWeIOOy3lPlaVU27cz2Aj8G78Q4VNTFDCfdy.','1638224884503_img_.jpg',345346345,1,'aca en casa',6),(22,'antonio','diazfierro','anto@mail.com','$2a$12$oItU7M5Xd0b6bVeu/0VcqO1qAlxCjnPDijkdZc1b3IzWQ7D5c80S2','1634363655789_img_.jpg',55555555,2,'aca tambien',NULL),(23,'srfsdfsd','pirulito','user1@mail.com','$2a$12$xJLE9lcLZxPUNAaxnjyJoujGPsyNHxdnmLRH8mk/SI1mGbdITQz7G','1634364394431_img_.jpg',4534,2,'alla lejos',NULL),(31,'Daiana','Munich','jaksldjaslkdja@mailto.com','$2a$12$x3b9GfpiQ60dbtFnT7LL9eb6W.z0xM19L88bURJkGlmeVd7z74Rpq','1637883392999_img_.jpg',1162,2,'',5),(32,'Renata','Perro','renata@perro.com','$2a$12$5D8J26Uw3nmXK.5gkB7jCu6wEJQ6.CXBFkGy.caFQ40n2q4wYRRqW','1637884323891_img_.jpg',12312,2,NULL,5),(33,'Evelyn','Gerez','mail@maila.com','$2a$12$k0.P3nce7DWYEWTTUh0r7emzFva0Hhy/dFBIJkYT/i68COdwmnCaS','1638019069939_img_.jpg',12345,2,'',5),(34,'Christian','Munich','munich.christianariel@gmail.com','$2a$12$Hjkj06Lqa72bFwzj4EZquOTvfy12fvTlTa2OZI6fX.F.UASXM2DzW','avatar.png',12345,1,NULL,5);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gemmaglass'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-01 18:52:30
