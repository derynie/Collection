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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Anime`
--

LOCK TABLES `Anime` WRITE;
/*!40000 ALTER TABLE `Anime` DISABLE KEYS */;
INSERT INTO `Anime` VALUES (1,'Death note','Light Yagami is a genius high schooler who discovers the \"Death Note\", a notebook that kills anyone whose name is written in it. After experimenting with the notebook, Light meets the Shinigami Ryuk, the notebook\'s original owner, who dropped the notebook to the human world out of boredom.',1,37,2),(2,'Black Lagoon','The story follows a team of pirate mercenaries known as Lagoon Company, that smuggles goods in and around the seas of Southeast Asia in the early to mid 1990s.Their base of operations is located in the fictional harbor city of Roanapur in southeast Thailand (somewhere in the Amphoe Mueang Trat district, likely on the mainland north/northeast of the Ko Chang island or on the island itself).The island is home to the Yakuza, the Triad, the Russian mafia, the Colombian and French cartels, and a wide assortment of pickpockets, thugs, mercenaries, thieves, prostitutes, assassins, and Gunmen of all sorts. They transport goods in the 80-foot (24 m) Elco-type PT boat Black Lagoon. Lagoon Company does business with various clients, but has a particularly friendly relationship with the Russian crime syndicate Hotel Moscow. The team takes on a variety of missions—which may involve violent firefights, hand-to-hand combat, and nautical battles—in various Southeast Asian locations, even going as far as Phu Quoc island of Vietnam and when not doing much, the members of the Lagoon Company spend much of their down time at The Yellow Flag, a bar in Roanapur which is often destroyed in firefights.',1,12,NULL);
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
  `Number` int(11) NOT NULL,
  `AnimeId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Anime_Item_Id_uindex` (`Id`),
  KEY `Anime_Item_Anime__fk` (`AnimeId`),
  CONSTRAINT `Anime_Item_Anime__fk` FOREIGN KEY (`AnimeId`) REFERENCES `Anime` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Anime_Item`
--

LOCK TABLES `Anime_Item` WRITE;
/*!40000 ALTER TABLE `Anime_Item` DISABLE KEYS */;
INSERT INTO `Anime_Item` VALUES (1,'Rebirth',1,1),(2,'Confrontation',2,1),(3,'Dealings',3,1),(4,'Pursuit',4,1),(6,'Tactics',5,1),(7,'Unraveling',6,1),(8,'Overcast',7,1),(9,'Glare',8,1),(10,'Encounter',9,1),(11,'Doubt',10,1),(12,'Assault',11,1),(13,'Love',12,1),(14,'Confession',13,1),(15,'Friend',14,1),(16,'Wager',15,1),(17,'Decision',16,1),(18,'Execution',17,1),(19,'Ally',18,1),(20,'Matsuda',19,1),(21,'Makeshift',20,1),(22,'Performance',21,1),(23,'Guidance',22,1),(24,'Frenzy',23,1),(25,'Revival',24,1),(26,'Silence',25,1),(27,'Renewal',26,1),(28,'Abduction',27,1),(29,'Impatience',28,1),(30,'Father',29,1),(31,'Justice',30,1),(32,'Transfer',31,1),(33,'Selection',32,1),(34,'Scorn',33,1),(35,'Vigilance',34,1),(36,'Malice',35,1),(37,'1.28',36,1),(38,'New World',37,1);
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
  `Title` varchar(200) NOT NULL,
  `Description` text,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Book_Id_uindex` (`Id`),
  KEY `Book_title_index` (`Title`)
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
-- Table structure for table `Link_Anime_Item`
--

DROP TABLE IF EXISTS `Link_Anime_Item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Link_Anime_Item` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `AnimeItemId` int(11) NOT NULL,
  `Own` tinyint(1) NOT NULL DEFAULT '0',
  `Watch` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Link_Anime_Item_Id_uindex` (`Id`),
  KEY `Link_Anime_Item_User_fk` (`UserId`),
  KEY `Link_Anime_Item_Anime_fk` (`AnimeItemId`),
  CONSTRAINT `Link_Anime_Item_Anime_fk` FOREIGN KEY (`AnimeItemId`) REFERENCES `Anime_Item` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `Link_Anime_Item_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Anime_Item`
--

LOCK TABLES `Link_Anime_Item` WRITE;
/*!40000 ALTER TABLE `Link_Anime_Item` DISABLE KEYS */;
INSERT INTO `Link_Anime_Item` VALUES (1,2,1,1,1),(2,2,2,1,1),(3,2,3,1,1);
/*!40000 ALTER TABLE `Link_Anime_Item` ENABLE KEYS */;
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
  CONSTRAINT `Link_Anime_User_Anime_fk` FOREIGN KEY (`AnimeId`) REFERENCES `Anime` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `Link_Anime_User_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Anime_User`
--

LOCK TABLES `Link_Anime_User` WRITE;
/*!40000 ALTER TABLE `Link_Anime_User` DISABLE KEYS */;
INSERT INTO `Link_Anime_User` VALUES (1,1,1),(2,2,1);
/*!40000 ALTER TABLE `Link_Anime_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Link_Book_User`
--

DROP TABLE IF EXISTS `Link_Book_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Link_Book_User` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `BookId` int(11) NOT NULL,
  `Own` tinyint(1) NOT NULL DEFAULT '0',
  `Read` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Link_Book_User_Id_uindex` (`Id`),
  KEY `Link_Book_User_User_fk` (`UserId`),
  KEY `Link_Book_User_Book__fk` (`BookId`),
  CONSTRAINT `Link_Book_User_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`),
  CONSTRAINT `Link_Book_User_Book__fk` FOREIGN KEY (`BookId`) REFERENCES `Book` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Book_User`
--

LOCK TABLES `Link_Book_User` WRITE;
/*!40000 ALTER TABLE `Link_Book_User` DISABLE KEYS */;
/*!40000 ALTER TABLE `Link_Book_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Link_Maga_Item_User`
--

DROP TABLE IF EXISTS `Link_Maga_Item_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Link_Maga_Item_User` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `MangaItemId` int(11) NOT NULL,
  `Own` tinyint(1) NOT NULL DEFAULT '0',
  `Read` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Link_Maga_Item_User_Id_uindex` (`Id`),
  KEY `Link_Maga_Item_User_User_fk` (`UserId`),
  KEY `Link_Maga_Item_User_Manga_Item_fk` (`MangaItemId`),
  CONSTRAINT `Link_Maga_Item_User_Manga_Item_fk` FOREIGN KEY (`MangaItemId`) REFERENCES `Manga_Item` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `Link_Maga_Item_User_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Maga_Item_User`
--

LOCK TABLES `Link_Maga_Item_User` WRITE;
/*!40000 ALTER TABLE `Link_Maga_Item_User` DISABLE KEYS */;
/*!40000 ALTER TABLE `Link_Maga_Item_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Link_Manga_User`
--

DROP TABLE IF EXISTS `Link_Manga_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Link_Manga_User` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `MangaId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Link_Manga_User_Id_uindex` (`Id`),
  KEY `Link_Manga_User_User_fk` (`UserId`),
  KEY `Link_Manga_User_Manga_fk` (`MangaId`),
  CONSTRAINT `Link_Manga_User_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`),
  CONSTRAINT `Link_Manga_User_Manga_fk` FOREIGN KEY (`MangaId`) REFERENCES `Manga` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Manga_User`
--

LOCK TABLES `Link_Manga_User` WRITE;
/*!40000 ALTER TABLE `Link_Manga_User` DISABLE KEYS */;
/*!40000 ALTER TABLE `Link_Manga_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Link_Movies_User`
--

DROP TABLE IF EXISTS `Link_Movies_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Link_Movies_User` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `MoviesId` int(11) DEFAULT NULL,
  `Own` tinyint(1) NOT NULL DEFAULT '0',
  `Watch` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Link_Movies_User_Id_uindex` (`Id`),
  KEY `Link_Movies_User_Movies_User_fk` (`UserId`),
  KEY `Link_Movies_User_User_Movies_fk` (`MoviesId`),
  CONSTRAINT `Link_Movies_User_User_Movies_fk` FOREIGN KEY (`MoviesId`) REFERENCES `Movie` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `Link_Movies_User_Movies_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Movies_User`
--

LOCK TABLES `Link_Movies_User` WRITE;
/*!40000 ALTER TABLE `Link_Movies_User` DISABLE KEYS */;
/*!40000 ALTER TABLE `Link_Movies_User` ENABLE KEYS */;
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
  `IsFinish` tinyint(1) NOT NULL DEFAULT '0',
  `NbTotal` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Manga_Id_uindex` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Manga`
--

LOCK TABLES `Manga` WRITE;
/*!40000 ALTER TABLE `Manga` DISABLE KEYS */;
INSERT INTO `Manga` VALUES (2,'Death note','Light found a note. If light write a name on it, this person will die.',1,12);
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
  `Title` text NOT NULL,
  `Volume` int(11) NOT NULL,
  `MangaId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `test_Id_uindex` (`Id`),
  KEY `test_Manga_fk` (`MangaId`),
  CONSTRAINT `test_Manga_fk` FOREIGN KEY (`MangaId`) REFERENCES `Manga` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Manga_Item`
--

LOCK TABLES `Manga_Item` WRITE;
/*!40000 ALTER TABLE `Manga_Item` DISABLE KEYS */;
/*!40000 ALTER TABLE `Manga_Item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movie`
--

DROP TABLE IF EXISTS `Movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Movie` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` text NOT NULL,
  `Description` text,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Movies_Id_uindex` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movie`
--

LOCK TABLES `Movie` WRITE;
/*!40000 ALTER TABLE `Movie` DISABLE KEYS */;
INSERT INTO `Movie` VALUES (1,'La grande vadrouille','De Funes et Bourvil s\'en vont en guerre');
/*!40000 ALTER TABLE `Movie` ENABLE KEYS */;
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
INSERT INTO `User` VALUES (1,'Quentin','derynie@hotmail.com','5fee5ae1c5da17ee54b56abaa45e9355',NULL),(2,'Quentin','qjournet@gmail.com','5fee5ae1c5da17ee54b56abaa45e9355','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImp0aSI6IjE5NzRjNmRkLTUyZWEtNGM5NS1hZDQwLTRiMWNiYjFiZjNkMCIsImlhdCI6MTQ2MjM2NDkxMCwiZXhwIjoxNDYyMzY4NTEwfQ.G6UpBKSGQY0YOqmALC9R9_dzzzaMfKvoNSVZmovWeU0');
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

-- Dump completed on 2016-05-04 21:10:56
