-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: gemmaglass2
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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Ravane'),(2,'Armani'),(3,'Nyol'),(4,'Ralph'),(5,'Diorr'),(16,'See Gato\'s'),(19,'xtremme'),(20,'sertertey'),(22,'terrenio'),(23,'Opalita');
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'Metal'),(2,'Acetato'),(3,'Grilamid'),(4,'Contacto'),(7,'titanium'),(8,'oro 0.5mic'),(9,'oro 1.5 mi'),(10,'carey'),(11,'baquelita'),(12,'niquelado'),(15,'pepe');
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
) ENGINE=InnoDB AUTO_INCREMENT=254 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
INSERT INTO `productimages` VALUES (242,'1639487202592_img_.jpg',116),(243,'1639487202619_img_.jpg',116),(244,'1639487247544_img_.jpg',117),(245,'1639487247561_img_.jpg',117),(246,'1639487290938_img_.jpg',118),(247,'1639487290957_img_.jpg',118),(248,'1639710446792_img_.jpg',120),(249,'1639710446826_img_.jpg',120),(250,'1639710491623_img_.jpg',121),(251,'1639710491666_img_.jpg',121),(252,'1640907012341_img_.jpg',119),(253,'1640907012369_img_.jpg',119);
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
  `description` varchar(255) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (116,'prod 01',1,1,1,1,5.00,15,151512,12.00,NULL,'lentes lentes lentes lentes lentes lentes lentes lenteslenteslentes lentes'),(117,'prod 02',1,1,1,1,5.00,15,54214,14.00,NULL,'anteojos anteojos anteojos anteojos anteojos anteojos anteojos anteojos anteojos '),(118,'prod 3',1,1,7,1,58.00,0,5487,2.00,NULL,'lentes anteojos lentes anteojos lentes anteojos lentes anteojos '),(119,'prueba',1,23,12,103,3.00,20,123,14.00,NULL,'este es una prueba de como se ve un articulo sin foto'),(120,'desde1',1,1,1,1,45.00,0,123123,3.00,NULL,'eresd lolrem\r\n'),(121,'DESDE3',1,1,1,1,43.00,15,12,4.00,NULL,'case case case case case case case case case case case ');
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
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shapes`
--

LOCK TABLES `shapes` WRITE;
/*!40000 ALTER TABLE `shapes` DISABLE KEYS */;
INSERT INTO `shapes` VALUES (1,'Redondo'),(2,'Aviadora'),(3,'Browline'),(4,'Cateye'),(6,'estrella'),(8,'triangular'),(9,'hexagonal'),(44,'Versace'),(101,'femancy'),(103,'specials'),(106,'papa'),(108,'desde'),(109,'fede'),(110,'sasa'),(111,'aseeds');
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
  KEY `users_FK` (`lastProdId`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (34,'jesi','Dillon','jesi@mail.com','$2a$12$2V7BgF.sCNgG.CjPza.jd.GYVISPhL8nUTh.oIWYdTR39mOkU6DUu','1635391917698_img_.jpg',343463546,100,'------',59),(50,'Jesica','Dillon','jesica@mail.com','$2a$12$33VICcp59ttVWmAeVYOlLO9hZf6URHOkEIQ5APjamRScYfjf13jAG','1638126524645_img_.jpg',34234,1,NULL,47),(51,'andres','peraalta','andres@mail.com','$2a$12$/gKghDVvmpfFMLstuJ6sEuVQbseNURHd2P/uSN3Tq9VOqlPhon4rK','1638126809324_img_.jpg',54543,2,NULL,47),(52,'gisela','zarza','gato@mail.com','$2a$12$SN/q8sWVQFoguqeaPxSz6.oD4Y0VuNnoW/v5rCVo0IMApJBhLexmi','1638127081769_img_.png',34453,2,NULL,47),(53,'Fernando','Camanio','camanio@mail.com','$2a$12$XfbD4qPEoilG.CjvYaQTreI769eLVs91v0fWBgTJfw27AYIyit/wm','avatar.png',1231344,1,NULL,47);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gemmaglass2'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-30 23:09:45
