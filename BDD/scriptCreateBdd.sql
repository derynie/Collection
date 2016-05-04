CREATE TABLE User
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Name TEXT NOT NULL,
    Email VARCHAR(200) NOT NULL,
    Password TEXT NOT NULL,
    Token TEXT
);
CREATE UNIQUE INDEX User_Email_uindex ON User (Email);
CREATE UNIQUE INDEX User_Id_uindex ON User (Id);
CREATE TABLE Book
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title VARCHAR(200) NOT NULL,
    Description TEXT
);
CREATE UNIQUE INDEX Book_Id_uindex ON Book (Id);
CREATE INDEX Book_title_index ON Book (Title);
CREATE TABLE Manga
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title TEXT NOT NULL,
    Description TEXT,
    IsFinish TINYINT(1) DEFAULT '0' NOT NULL,
    NbTotal INT(11) NOT NULL
);
CREATE UNIQUE INDEX Manga_Id_uindex ON Manga (Id);
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
CREATE TABLE Anime_Item
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title TEXT NOT NULL,
    Number INT(11) NOT NULL,
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
CREATE TABLE Link_Movies_User
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    UserId INT(11) NOT NULL,
    MoviesId INT(11),
    Own TINYINT(1) DEFAULT '0' NOT NULL,
    Watch TINYINT(1) DEFAULT '0' NOT NULL,
    CONSTRAINT Link_Movies_User_Movies_User_fk FOREIGN KEY (UserId) REFERENCES User (Id),
    CONSTRAINT Link_Movies_User_User_Movies_fk FOREIGN KEY (MoviesId) REFERENCES Movie (Id)
);
CREATE UNIQUE INDEX Link_Movies_User_Id_uindex ON Link_Movies_User (Id);
CREATE INDEX Link_Movies_User_Movies_User_fk ON Link_Movies_User (UserId);
CREATE INDEX Link_Movies_User_User_Movies_fk ON Link_Movies_User (MoviesId);
CREATE TABLE Movie
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title TEXT NOT NULL,
    Description TEXT
);
CREATE UNIQUE INDEX Movies_Id_uindex ON Movie (Id);
CREATE TABLE Link_Anime_Item
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    UserId INT(11) NOT NULL,
    AnimeItemId INT(11) NOT NULL,
    Own TINYINT(1) DEFAULT '0' NOT NULL,
    Watch TINYINT(1) DEFAULT '0' NOT NULL,
    CONSTRAINT Link_Anime_Item_Anime_fk FOREIGN KEY (AnimeItemId) REFERENCES Anime_Item (Id),
    CONSTRAINT Link_Anime_Item_User_fk FOREIGN KEY (UserId) REFERENCES User (Id)
);
CREATE INDEX Link_Anime_Item_Anime_fk ON Link_Anime_Item (AnimeItemId);
CREATE UNIQUE INDEX Link_Anime_Item_Id_uindex ON Link_Anime_Item (Id);
CREATE INDEX Link_Anime_Item_User_fk ON Link_Anime_Item (UserId);
CREATE TABLE Link_Book_User
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    UserId INT(11) NOT NULL,
    BookId INT(11) NOT NULL,
    Own TINYINT(1) DEFAULT '0' NOT NULL,
    `Read` TINYINT(1) DEFAULT '0' NOT NULL,
    CONSTRAINT Link_Book_User_Book__fk FOREIGN KEY (BookId) REFERENCES Book (Id),
    CONSTRAINT Link_Book_User_User_fk FOREIGN KEY (UserId) REFERENCES User (Id)
);
CREATE INDEX Link_Book_User_Book__fk ON Link_Book_User (BookId);
CREATE UNIQUE INDEX Link_Book_User_Id_uindex ON Link_Book_User (Id);
CREATE INDEX Link_Book_User_User_fk ON Link_Book_User (UserId);
CREATE TABLE Link_Manga_User
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    UserId INT(11) NOT NULL,
    MangaId INT(11) NOT NULL,
    CONSTRAINT Link_Manga_User_Manga_fk FOREIGN KEY (MangaId) REFERENCES Manga (Id),
    CONSTRAINT Link_Manga_User_User_fk FOREIGN KEY (UserId) REFERENCES User (Id)
);
CREATE UNIQUE INDEX Link_Manga_User_Id_uindex ON Link_Manga_User (Id);
CREATE INDEX Link_Manga_User_Manga_fk ON Link_Manga_User (MangaId);
CREATE INDEX Link_Manga_User_User_fk ON Link_Manga_User (UserId);
CREATE TABLE Link_Maga_Item_User
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    UserId INT(11) NOT NULL,
    MangaItemId INT(11) NOT NULL,
    Own TINYINT(1) DEFAULT '0' NOT NULL,
    `Read` TINYINT(1) NOT NULL,
    CONSTRAINT Link_Maga_Item_User_Manga_Item_fk FOREIGN KEY (MangaItemId) REFERENCES Manga_Item (Id),
    CONSTRAINT Link_Maga_Item_User_User_fk FOREIGN KEY (UserId) REFERENCES User (Id)
);
CREATE UNIQUE INDEX Link_Maga_Item_User_Id_uindex ON Link_Maga_Item_User (Id);
CREATE INDEX Link_Maga_Item_User_Manga_Item_fk ON Link_Maga_Item_User (MangaItemId);
CREATE INDEX Link_Maga_Item_User_User_fk ON Link_Maga_Item_User (UserId);
CREATE TABLE Manga_Item
(
    Id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Title TEXT NOT NULL,
    Volume INT(11) NOT NULL,
    MangaId INT(11) NOT NULL,
    CONSTRAINT test_Manga_fk FOREIGN KEY (MangaId) REFERENCES Manga (Id)
);
CREATE UNIQUE INDEX test_Id_uindex ON Manga_Item (Id);
CREATE INDEX test_Manga_fk ON Manga_Item (MangaId);
