CREATE DATABASE collection
CREATE TABLE User
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Name TEXT NOT NULL,
    Email VARCHAR(200) NOT NULL,
    Password TEXT NOT NULL
);
CREATE UNIQUE INDEX User_Email_uindex ON User (Email);
CREATE UNIQUE INDEX User_Id_uindex ON User (Id);
CREATE TABLE Book
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title TEXT NOT NULL,
    Description TEXT,
    UserId INT(11) NOT NULL,
    Own TINYINT(1) DEFAULT '0' NOT NULL,
    `Read` TINYINT(1) DEFAULT '0' NOT NULL,
    CONSTRAINT Book_User_fk FOREIGN KEY (UserId) REFERENCES User (Id)
);
CREATE UNIQUE INDEX Book_Id_uindex ON Book (Id);
CREATE INDEX Book_User_fk ON Book (UserId);
CREATE TABLE Movies
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title TEXT NOT NULL,
    Description TEXT,
    UserId INT(11) NOT NULL,
    Own TINYINT(1) DEFAULT '0' NOT NULL,
    Watch TINYINT(1) DEFAULT '0' NOT NULL,
    CONSTRAINT Movies_User__fk FOREIGN KEY (UserId) REFERENCES User (Id)
);
CREATE UNIQUE INDEX Movies_Id_uindex ON Movies (Id);
CREATE INDEX Movies_User__fk ON Movies (UserId);
CREATE TABLE Manga
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title TEXT NOT NULL,
    Description TEXT,
    UserId INT(11) NOT NULL,
    IsFinish TINYINT(1) DEFAULT '0' NOT NULL,
    NbTotal INT(11) NOT NULL,
    CONSTRAINT Manga_User_fk FOREIGN KEY (UserId) REFERENCES User (Id)
);
CREATE UNIQUE INDEX Manga_Id_uindex ON Manga (Id);
CREATE INDEX Manga_User_fk ON Manga (UserId);
CREATE TABLE Anime
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title TEXT NOT NULL,
    Description TEXT,
    IsFinish TINYINT(1) DEFAULT '0' NOT NULL,
    NbTotal INT(11) NOT NULL,
    MangaId INT(11),
    CONSTRAINT Anime_Manga__fk FOREIGN KEY (MangaId) REFERENCES Manga (Id)
);
CREATE UNIQUE INDEX Anime_Id_uindex ON Anime (Id);
CREATE INDEX Anime_Manga__fk ON Anime (MangaId);
CREATE TABLE Manga_Item
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Volume INT(11) NOT NULL,
    Own TINYINT(1) DEFAULT '0' NOT NULL,
    `Read` TINYINT(1) DEFAULT '0' NOT NULL,
    MangaId INT(11) NOT NULL,
    CONSTRAINT Manga_Item_Manga_fk FOREIGN KEY (MangaId) REFERENCES Manga (Id)
);
CREATE UNIQUE INDEX Manga_Item_Id_uindex ON Manga_Item (Id);
CREATE INDEX Manga_Item_Manga_fk ON Manga_Item (MangaId);
CREATE TABLE Anime_Item
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title TEXT NOT NULL,
    Own TINYINT(1) DEFAULT '0' NOT NULL,
    Watch TINYINT(1) NOT NULL,
    AnimeId INT(11) NOT NULL,
    CONSTRAINT Anime_Item_Anime__fk FOREIGN KEY (AnimeId) REFERENCES Anime (Id)
);
CREATE INDEX Anime_Item_Anime__fk ON Anime_Item (AnimeId);
CREATE UNIQUE INDEX Anime_Item_Id_uindex ON Anime_Item (Id);
CREATE TABLE Link_Anime_User
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    UserId INT(11) NOT NULL,
    AnimeId INT(11) NOT NULL,
    CONSTRAINT Link_Anime_User_Anime_fk FOREIGN KEY (AnimeId) REFERENCES Anime (Id),
    CONSTRAINT Link_Anime_User_User_fk FOREIGN KEY (UserId) REFERENCES User (Id)
);
CREATE INDEX Link_Anime_User_Anime_fk ON Link_Anime_User (AnimeId);
CREATE UNIQUE INDEX Link_Anime_User_Id_uindex ON Link_Anime_User (Id);
CREATE INDEX Link_Anime_User_User_fk ON Link_Anime_User (UserId);