-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: collection
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

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
  `Picture` text,
  `BeginDate` date DEFAULT NULL,
  `EndDate` date DEFAULT NULL,
  `IsFinish` tinyint(1) NOT NULL DEFAULT '0',
  `NbTotal` int(11) NOT NULL,
  `MangaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Anime_Id_uindex` (`Id`),
  KEY `Anime_Manga__fk` (`MangaId`),
  CONSTRAINT `Anime_Manga__fk` FOREIGN KEY (`MangaId`) REFERENCES `Manga` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Anime`
--

LOCK TABLES `Anime` WRITE;
/*!40000 ALTER TABLE `Anime` DISABLE KEYS */;
INSERT INTO `Anime` VALUES (1,'Death note','https://ib4.hulu.com/user/v3/artwork/9065c6f1-4d2d-4150-a1ef-58bced498809?base_image=65ae8036-f9ae-4187-b6ad-878a174a1a1f&base_image_bucket_name=hummus&size=400x600&format=jpeg','2007-07-07','2011-12-23',1,37,2),(2,'Black Lagoon','data:image/jpeg;base64,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',NULL,NULL,1,12,NULL),(3,'Dragon Ball Super','https://upload.wikimedia.org/wikipedia/fr/thumb/6/64/Dragon_Ball_Super_Logo.svg/260px-Dragon_Ball_Super_Logo.svg.png','2015-07-05','2018-03-25',1,131,NULL),(4,'Fullmetal Alchemist: Brotherhood','https://upload.wikimedia.org/wikipedia/fr/thumb/f/f9/FMA_Brotherhood.png/220px-FMA_Brotherhood.png','2009-04-05','2010-07-04',1,64,NULL),(5,'Naruto Shippuden','https://upload.wikimedia.org/wikipedia/fr/thumb/1/15/Logo_Naruto_Shipp%C5%ABden.svg/220px-Logo_Naruto_Shipp%C5%ABden.svg.png','2007-02-15','2017-03-23',1,500,NULL),(6,'Kill la Kill','https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kill_la_Kill_logo.svg/220px-Kill_la_Kill_logo.svg.png','2013-10-03','2015-03-04',1,24,NULL),(7,'Code Geass: Lelouch of the Rebellion','https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Logo_Code_Geass.png/220px-Logo_Code_Geass.png','2006-10-05','2007-07-28',1,25,NULL),(8,'Psycho-Pass','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Psycho-Pass_logo.jpg/220px-Psycho-Pass_logo.jpg','2012-10-12','2014-12-18',1,33,NULL),(9,'Dragon Ball Z','https://upload.wikimedia.org/wikipedia/fr/thumb/f/f2/Dragon_Ball_Z_Logo.svg/220px-Dragon_Ball_Z_Logo.svg.png','1989-04-26','1996-01-31',1,291,NULL),(10,'Samurai champloo',NULL,'2004-05-20','2005-03-19',1,26,NULL),(11,'Hunter × Hunter','https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/Logo_Hunter_x_Hunter.svg/220px-Logo_Hunter_x_Hunter.svg.png','2011-10-02','2014-09-23',1,148,NULL),(12,'Gurren Lagann','https://upload.wikimedia.org/wikipedia/fr/thumb/3/31/Tengen_Toppa_Gurren_Lagann_logo.png/220px-Tengen_Toppa_Gurren_Lagann_logo.png','2007-04-01','2007-09-30',1,27,NULL),(13,'Bleach','https://upload.wikimedia.org/wikipedia/fr/thumb/6/64/Logo_Bleach.svg/220px-Logo_Bleach.svg.png','2004-10-05','2012-03-27',1,366,NULL),(14,'Cowboy Bebop','https://upload.wikimedia.org/wikipedia/fr/thumb/d/db/Cowboy_Bebop.svg/220px-Cowboy_Bebop.svg.png','1998-04-03','1999-04-23',1,26,NULL),(15,'One Piece','https://upload.wikimedia.org/wikipedia/fr/thumb/1/1a/Logo_One_piece.svg/220px-Logo_One_piece.svg.png','1999-10-20',NULL,0,867,NULL);
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
-- Table structure for table `Language`
--

DROP TABLE IF EXISTS `Language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Language` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Label` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Language_Label_uindex` (`Label`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Language`
--

LOCK TABLES `Language` WRITE;
/*!40000 ALTER TABLE `Language` DISABLE KEYS */;
INSERT INTO `Language` VALUES (1,'FR'),(2,'US');
/*!40000 ALTER TABLE `Language` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
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
-- Table structure for table `Link_Anime_Translation`
--

DROP TABLE IF EXISTS `Link_Anime_Translation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Link_Anime_Translation` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `AnimeId` int(11) NOT NULL,
  `TranslationId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Link_Anime_Translation_Anime_Id_fk` (`AnimeId`),
  KEY `Link_Anime_Translation_Translation_Id_fk` (`TranslationId`),
  CONSTRAINT `Link_Anime_Translation_Anime_Id_fk` FOREIGN KEY (`AnimeId`) REFERENCES `Anime` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `Link_Anime_Translation_Translation_Id_fk` FOREIGN KEY (`TranslationId`) REFERENCES `Translation` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Anime_Translation`
--

LOCK TABLES `Link_Anime_Translation` WRITE;
/*!40000 ALTER TABLE `Link_Anime_Translation` DISABLE KEYS */;
INSERT INTO `Link_Anime_Translation` VALUES (1,1,1),(2,1,2);
/*!40000 ALTER TABLE `Link_Anime_Translation` ENABLE KEYS */;
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
  CONSTRAINT `Link_Book_User_Book__fk` FOREIGN KEY (`BookId`) REFERENCES `Book` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `Link_Book_User_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
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
  CONSTRAINT `Link_Manga_User_Manga_fk` FOREIGN KEY (`MangaId`) REFERENCES `Manga` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `Link_Manga_User_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
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
  CONSTRAINT `Link_Movies_User_Movies_User_fk` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`),
  CONSTRAINT `Link_Movies_User_User_Movies_fk` FOREIGN KEY (`MoviesId`) REFERENCES `Movie` (`Id`) ON DELETE CASCADE
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
-- Table structure for table `Translation`
--

DROP TABLE IF EXISTS `Translation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Translation` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Label` text,
  `LanguageId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `table_name_Language_Id_fk` (`LanguageId`),
  CONSTRAINT `table_name_Language_Id_fk` FOREIGN KEY (`LanguageId`) REFERENCES `Language` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Translation`
--

LOCK TABLES `Translation` WRITE;
/*!40000 ALTER TABLE `Translation` DISABLE KEYS */;
INSERT INTO `Translation` VALUES (1,'Light Yagami is a genius high schooler who discovers the \"Death Note\", a notebook that kills anyone whose name is written in it. After experimenting with the notebook, Light meets the Shinigami Ryuk, the notebook\'s original owner, who dropped the notebook to the human world out of boredom.',2),(2,'Light Yagami est un lycéen surdoué qui juge le monde actuel criminel, pourri et corrompu. Sa vie change du tout au tout le jour où il ramasse par hasard un mystérieux cahier intitulé « Death Note ». Son mode d\'emploi indique que « la personne dont le nom est écrit dans ce cahier meurt ». D\'abord sceptique, Light décide toutefois de tester le carnet et découvre que son pouvoir est bien réel. Il rencontre l\'ancien propriétaire du Death Note, un dieu de la mort nommé Ryûk. Celui-ci déclare avoir volontairement laissé tomber son carnet dans le but de se divertir. ',1);
/*!40000 ALTER TABLE `Translation` ENABLE KEYS */;
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
  `CreateAt` date DEFAULT NULL,
  `UpdateAt` date DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `User_Id_uindex` (`Id`),
  UNIQUE KEY `User_Email_uindex` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'Quentin','derynie@hotmail.com','5fee5ae1c5da17ee54b56abaa45e9355',NULL,NULL,NULL),(2,'Quentin','qjournet@gmail.com','5fee5ae1c5da17ee54b56abaa45e9355','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImp0aSI6IjE5NzRjNmRkLTUyZWEtNGM5NS1hZDQwLTRiMWNiYjFiZjNkMCIsImlhdCI6MTQ2MjM2NDkxMCwiZXhwIjoxNDYyMzY4NTEwfQ.G6UpBKSGQY0YOqmALC9R9_dzzzaMfKvoNSVZmovWeU0',NULL,NULL),(3,'quentinTest','quentin.test@test.com','testPassword',NULL,'2018-12-24','2018-12-24'),(4,'quentinTest2','test@email.com','pqsswordTest',NULL,'2018-12-24','2018-12-24'),(5,'quentinTest3','test3@email.com','$2b$10$i3SKFItdMuD5g9cqaKS0LequU1RcIMJ6KfGO.fRnjd1.BVo.F9KjC',NULL,'2018-12-30','2018-12-30'),(6,'quentinTest4','quentinTest4@email.com','$2b$10$CULX6pQ0elkslu4ZMWjJMOLAO2Pgc/0ASD08xbXvSCprusgBycIo6',NULL,'2019-01-01','2019-01-01');
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

-- Dump completed on 2019-07-05  1:47:07
