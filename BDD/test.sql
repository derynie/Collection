-- MySQL dump 10.13  Distrib 5.5.49, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: collection
-- ------------------------------------------------------
-- Server version	5.5.49-0ubuntu0.14.04.1

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
-- Current Database: `collection`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `collection` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `collection`;

--
-- Table structure for table `Anime`
--

DROP TABLE IF EXISTS `Anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Anime` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` text NOT NULL,
  `Description` text,
  `IsFinish` tinyint(1) NOT NULL DEFAULT '0',
  `NbTotal` int(11) NOT NULL,
  `MangaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Anime_Id_uindex` (`Id`),
  KEY `Anime_Manga__fk` (`MangaId`),
  CONSTRAINT `Anime_Manga__fk` FOREIGN KEY (`MangaId`) REFERENCES `Manga` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Anime`
--

LOCK TABLES `Anime` WRITE;
/*!40000 ALTER TABLE `Anime` DISABLE KEYS */;
INSERT INTO `Anime` VALUES (1,'Death note','Light Yagami is a genius high schooler who discovers the \"Death Note\", a notebook that kills anyone whose name is written in it. After experimenting with the notebook, Light meets the Shinigami Ryuk, the notebook\'s original owner, who dropped the notebook to the human world out of boredom.',1,37,2);
/*!40000 ALTER TABLE `Anime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Anime_Item`
--

DROP TABLE IF EXISTS `Anime_Item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Anime_Item` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` text NOT NULL,
  `Own` tinyint(1) NOT NULL DEFAULT '0',
  `Watch` tinyint(1) NOT NULL,
  `AnimeId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Anime_Item_Id_uindex` (`Id`),
  KEY `Anime_Item_Anime__fk` (`AnimeId`),
  CONSTRAINT `Anime_Item_Anime__fk` FOREIGN KEY (`AnimeId`) REFERENCES `Anime` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Anime_Item`
--

LOCK TABLES `Anime_Item` WRITE;
/*!40000 ALTER TABLE `Anime_Item` DISABLE KEYS */;
INSERT INTO `Anime_Item` VALUES (1,'Découverte',1,1,1),(2,'Utilisation',1,1,1),(3,'Mort',1,1,1);
/*!40000 ALTER TABLE `Anime_Item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Book`
--

DROP TABLE IF EXISTS `Book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Book` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` text NOT NULL,
  `Description` text,
  `UserId` int(11) NOT NULL,
  `Own` tinyint(1) NOT NULL DEFAULT '0',
  `Read` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Book_Id_uindex` (`Id`),
  KEY `Book_User_fk` (`UserId`),
  CONSTRAINT `Book_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book`
--

LOCK TABLES `Book` WRITE;
/*!40000 ALTER TABLE `Book` DISABLE KEYS */;
/*!40000 ALTER TABLE `Book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Link_Anime_User`
--

DROP TABLE IF EXISTS `Link_Anime_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Link_Anime_User` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `AnimeId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Link_Anime_User_Id_uindex` (`Id`),
  KEY `Link_Anime_User_User_fk` (`UserId`),
  KEY `Link_Anime_User_Anime_fk` (`AnimeId`),
  CONSTRAINT `Link_Anime_User_Anime_fk` FOREIGN KEY (`AnimeId`) REFERENCES `Anime` (`Id`) ON UPDATE CASCADE,
  CONSTRAINT `Link_Anime_User_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Anime_User`
--

LOCK TABLES `Link_Anime_User` WRITE;
/*!40000 ALTER TABLE `Link_Anime_User` DISABLE KEYS */;
INSERT INTO `Link_Anime_User` VALUES (1,1,1);
/*!40000 ALTER TABLE `Link_Anime_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Manga`
--

DROP TABLE IF EXISTS `Manga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Manga` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` text NOT NULL,
  `Description` text,
  `UserId` int(11) NOT NULL,
  `IsFinish` tinyint(1) NOT NULL DEFAULT '0',
  `NbTotal` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Manga_Id_uindex` (`Id`),
  KEY `Manga_User_fk` (`UserId`),
  CONSTRAINT `Manga_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Manga`
--

LOCK TABLES `Manga` WRITE;
/*!40000 ALTER TABLE `Manga` DISABLE KEYS */;
INSERT INTO `Manga` VALUES (2,'Death note','Light found a note. If light write a name on it, this person will die.',1,1,12);
/*!40000 ALTER TABLE `Manga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Manga_Item`
--

DROP TABLE IF EXISTS `Manga_Item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Manga_Item` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Volume` int(11) NOT NULL,
  `Own` tinyint(1) NOT NULL DEFAULT '0',
  `Read` tinyint(1) NOT NULL DEFAULT '0',
  `MangaId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Manga_Item_Id_uindex` (`Id`),
  KEY `Manga_Item_Manga_fk` (`MangaId`),
  CONSTRAINT `Manga_Item_Manga_fk` FOREIGN KEY (`MangaId`) REFERENCES `Manga` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Manga_Item`
--

LOCK TABLES `Manga_Item` WRITE;
/*!40000 ALTER TABLE `Manga_Item` DISABLE KEYS */;
INSERT INTO `Manga_Item` VALUES (1,1,1,1,2),(2,2,1,1,2),(3,3,1,1,2),(4,4,1,1,2),(5,5,1,1,2),(6,6,1,1,2),(7,7,1,1,2),(8,8,1,1,2),(9,9,1,1,2),(10,10,1,1,2),(11,11,1,1,2),(12,12,1,1,2);
/*!40000 ALTER TABLE `Manga_Item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movies`
--

DROP TABLE IF EXISTS `Movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Movies` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` text NOT NULL,
  `Description` text,
  `UserId` int(11) NOT NULL,
  `Own` tinyint(1) NOT NULL DEFAULT '0',
  `Watch` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Movies_Id_uindex` (`Id`),
  KEY `Movies_User__fk` (`UserId`),
  CONSTRAINT `Movies_User__fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movies`
--

LOCK TABLES `Movies` WRITE;
/*!40000 ALTER TABLE `Movies` DISABLE KEYS */;
/*!40000 ALTER TABLE `Movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Password` text NOT NULL,
  `Token` text,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `User_Id_uindex` (`Id`),
  UNIQUE KEY `User_Email_uindex` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'Quentin','derynie@hotmail.com','5fee5ae1c5da17ee54b56abaa45e9355',NULL),(2,'Quentin','qjournet@gmail.com','5fee5ae1c5da17ee54b56abaa45e9355','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImp0aSI6IjczMTIxZmFmLTcwYTktNGM4MC04ZjE0LTI1Y2Q4Nzk4ODU0MyIsImlhdCI6MTQ2MjE2OTczMiwiZXhwIjoxNDYyMTczMzMyfQ.Sm3J0hzrr_jKSW3Ly9zMxofIBuK3ld23Og5o3u2XX0o');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-02 14:24:05
