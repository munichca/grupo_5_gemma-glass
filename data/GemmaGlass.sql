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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Reef'),(2,'Armani'),(3,'Nyol'),(4,'Ralph');
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
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
INSERT INTO `productimages` VALUES (92,'1634531293466_img_.jpg',15),(93,'1634531293472_img_.jpg',15),(94,'1634531367781_img_.jpg',5),(95,'1634531367791_img_.jpg',5),(96,'1634684150551_img_.jpg',23),(97,'1634684150589_img_.jpg',23),(98,'1634693060633_img_.jpg',34),(99,'1634693060659_img_.jpg',34);
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
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (5,'prod3',1,2,2,2,4.00,0,44,12.00,NULL,NULL),(6,'dsf',2,2,2,2,5.00,5,5,5.00,NULL,NULL),(7,'dsfa',2,2,2,2,5.00,10,5,5.00,NULL,NULL),(8,'pedro',4,4,3,3,6.00,15,15432,14.00,NULL,NULL),(10,'gete1',3,3,2,1,2.00,15,56,2.00,NULL,NULL),(12,'gete2',3,3,2,1,2.00,20,56,2.00,NULL,NULL),(13,'gete3',3,3,2,1,2.00,10,56,2.00,NULL,NULL),(14,'t4532',1,1,1,1,5.00,0,1234,12.00,NULL,NULL),(15,'prod1',1,3,2,2,6.00,25,25433,14.00,NULL,NULL),(16,'prod2',2,3,3,3,6.00,20,12345,13.00,NULL,NULL),(17,'gete',4,1,1,4,6.00,20,43456,15.00,NULL,NULL),(20,'gete4',1,1,1,1,3.00,5,3,3.00,NULL,NULL),(21,'gete5',1,1,1,1,5.00,20,15000,13.00,NULL,NULL),(22,'prod4',3,1,4,1,1.20,0,1254,1.20,NULL,NULL),(23,'prod6',2,4,1,2,7.00,5,13450,13.00,NULL,NULL),(32,'prod7',1,1,1,1,2.00,5,12500,10.00,NULL,NULL),(33,'prod8',1,1,1,1,2.00,25,12000,12.00,NULL,NULL),(34,'prod9',1,1,1,1,4.00,5,8500,15.00,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shapes`
--

LOCK TABLES `shapes` WRITE;
/*!40000 ALTER TABLE `shapes` DISABLE KEYS */;
INSERT INTO `shapes` VALUES (1,'Redondo'),(2,'Aviador'),(3,'Browline'),(4,'Cateye');
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'2321','1231','jesica1@mail.com','$2a$12$oItU7M5Xd0b6bVeu/0VcqO1qAlxCjnPDijkdZc1b3IzWQ7D5c80S2','1634785377768_img_.jpg',5464,2,'12312',7),(6,'es','','anima@mail.com','$2a$12$DshDvwFB8LWCCi8pIPvstu6wJ6SfV1RpjJcDM/B66TsvYui22IjWy','default-image.png',0,2,'as',NULL),(7,'Jesica','aas','asdas@mail.com','$2a$12$LWu1gthAng1hPh2ZEBJ29.KY.j7Tt2j827XcmxVf6uvtKTOdhlE1K','default-image.png',343,2,'asda',NULL),(8,'xxcxx','aas','asdqwe@ma.com','$2a$12$scq7KRwCWQ7SnCIdxw7kteZYUEPEIyge93ax8Td.t2h1XjiuKSEkK','default-image.png',34534,2,'sdfdsd',NULL),(19,'asdef','asdas','jesica2@mail.com','$2a$12$03O7bQaqeev3BJ450baFWubAMBrl2LJjaNX6.YJ3j7wzWSOy4dToa','1634348342515_img_.jpg',34534534,2,'',7),(20,'jesi','Dillon','jesi@mail.com','$2a$12$tzSu6uiPN.vCSongnWeIOOy3lPlaVU27cz2Aj8G78Q4VNTFDCfdy.','1634362790177_img_.jpg',345346345,1,'aca en casa',6),(22,'antonio','diazfierro','anto@mail.com','$2a$12$oItU7M5Xd0b6bVeu/0VcqO1qAlxCjnPDijkdZc1b3IzWQ7D5c80S2','1634363655789_img_.jpg',55555555,2,'aca tambien',NULL),(23,'srfsdfsd','pirulito','user1@mail.com','$2a$12$xJLE9lcLZxPUNAaxnjyJoujGPsyNHxdnmLRH8mk/SI1mGbdITQz7G','1634364394431_img_.jpg',4534,2,'alla lejos',NULL);
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

-- Dump completed on 2021-10-21  1:05:03
