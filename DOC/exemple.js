/**
 * @api {post} /login Login
 * @apiName Login
 * @apiGroup 1) Login
 *
 * @apiParam {String} email Email of the User.
 * @apiParam {String} password Password of the User.
 *
 * @apiParamExample {json} Login example
 *   { 
 *     "email": "Someone@sth.com"
 *     "password": "Password"
 *   }
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 * @apiSuccess {Object} Token Token of the API.
 * @apiSuccess {Number} Id Id of the User.
 * @apiSuccess {String} Name Name of the User.
 * @apiSuccess {String} Email Email of the User.
 * @apiSuccess {String} Password Password of the User.
 * @apiSuccess {String} Token Token provide by the API.
 *
 * @apiSuccessExample Success-Response:
 *    {
 *      "Error": false,
 *      "Message": "You are connected.",
 *      "User": {
 *        "Id": 2 ,
 *        "Name": "A name",
 *        "Email": "Someone@gmail.com",
 *        "Password": "A password",
 *        "Token": "A token"
 *      }
 *    }
 *
 * @apiError UserNotFound The user wasn't found
 *
 * @apiErrorExample Error-Response:
 * {
 *   "Error": true,
 *   "Message": "Didn't find your account"
 * }
 *
 */

/**
 * @api {get} /users/ 1) Get all User
 * @apiName Get User by Id
 * @apiGroup 2) User
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 * @apiSuccess {Object} Users Object of User.
 * @apiSuccess {Number} Users.Id Id of the User.
 * @apiSuccess {String} Users.Name Name of the User.
 * @apiSuccess {String} Users.Email Email of the User.
 * @apiSuccess {String} Users.Password Password of the User.
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "Error": false,
 *       "Message": "Success"
 *       "Users": [
 *          {
 *            "Id": 1,
 *	      "Name": "Someone",
 *	      "Email": "Someone@gmail.com",
 *	      "Password": "your password"
 *          },
 *          .....
 *        ]
 *     }
 */

/**
 * @api {get} /users/:id 2) Get User by Id
 * @apiName Get all Users
 * @apiGroup 2) User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 * @apiSuccess {Object} User Row of the User.
 * @apiSuccess {Number} User.Id Id of the User.
 * @apiSuccess {String} User.Name Name of the User.
 * @apiSuccess {String} User.Email Email of the User.
 * @apiSuccess {String} User.Password Password of the User.
 *
 * @apiSuccessExample Success-Response:
 *	{
 *	  "Error": false,
 *	  "Message": "Success",
 *	  "Users": [
 *	  {
 *	    "Id": 1,
 *          "Name": "Someone",
 *          "Email": "Someone@gmail.com",
 *          "Password": "a token"
 *        }
 *       ]
 *      }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *	{
 *	  "Error": false,
 *	  "Message": "Success",
 *	  "Users": []
 *	}
 */

/**
 * @api {post} /users 3) Create an User
 * @apiName Create an User
 * @apiGroup 2) User
 *
 * @apiParam {String} name Name of the User.
 * @apiParam {String} email Email of the User.
 * @apiParam {String} password Password of the User.
 * 
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "Error": false,
 *    "Message": "User Added !"
 *  }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *  {
 *    "Error": true,
 *    "Message": "Error excecuting MySQL query"
 *  }
 *
 */


/**
 * @api {put} /users 4) Update an User
 * @apiName Update an User
 * @apiGroup 2) User
 *
 * @apiParam {String} _token Token provide by the API.
 * @apiParam {String} password New password for the User.
 * @apiParam {String} id Id of the User
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "Error": false,
 *    "Message"; "Update the password for email someone@gmail.com"
 *  }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *  {
 *    "Error": true,
 *    "Message": "Error excecuting MySQL query"
 *  }
 *
 */

/**
 * @api {delete} /users/:id 5) Delete an User
 * @apiName Delete an User
 * @apiGroup 2) User
 *
 * @apiParam {String} _token Token provide by the API.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "Error": false,
 *    "Message": "Deleted the user with id someId"
 *  }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *  {
 *    "Error": true,
 *    "Message": "Error excecuting MySQL query"
 *  }
 *
 */


/**
 * @api {get} /users/:id/animes 6) Get animes of one User
 * @apiName Get animes of one User
 * @apiGroup 2) User
 *
 * @apiParam {Number} id Id of the User.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 * @apiSuccess {Object} Animes_of_user Object of animes. 
 * @apiSuccess {String} Animes_of_user.title Title of the Anime.
 * @apiSUccess {String} Animes_of_user.description Description of the Anime.
 * @apiSuccess {Boolean} Animes_of_user.isFinish If the Anime is finish.
 * @apiSuccess {String} Animes_of_user.nbTotal Nombre total d'épisode.
 * @apiSuccess {String} Animes_of_user.mangaId Link to the DataBase on a Manga.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "Error": false,
 *    "Message": "Success",
 *     "Animes_of_user": [
 *       {
 *         "title": "title",
 *         "description": "description",
 *         "isFinish": 1,
 *         "nbTotal": 37,
 *         "mangaId": 2
 *       },
 *       ......
 *     ]
 *  }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *  {
 *    "Error": true,
 *    "Message": "Error excecuting MySQL query"
 *  }
 *
 */

/**
 * @api {post} /user/:id/animes 7) Link Anime to User
 * @apiName Link Anime to User
 * @apiGroup 2) User
 *
 * @apiParam {String} _token Token provide by the API.
 * @apiParam {Number} animeId Id of the Anime.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *   {
 *     "Error": false,
 *     "Message": "Anime link to you."
 *   }
 *
 */

/**
 * @api {get} /animes 1) Get all Animes
 * @apiName Get all Animes
 * @apiGroup 3) Anime
 *
 * @apiSUccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 * @apiSuccess {Object} Animes All the Anime.
 * @apiSuccess {String} Animes.title Title of the Anime.
 * @apiSuccess {String} Animes.description Description of the Anime.
 * @apiSuccess {Boolean} Animes.isFinish If the Anime is finish.
 * @apiSuccess {Number} Animes.nbTotal Nombre total d'épisode.
 * @apiSuccess {Number} Animes.mangaId Link in database if the Anime has a Manga.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *      "Error": false,
 *      "Message": "Success",
 *      "Animes": [
 *        {
 *          "title": "title",
 *          "description": "description",
 *          "isFinish": 1,
 *          "nbTotal": 37,
 *          "mangaId": 2
 *        },
 *        .....
 *      ]
 *  }
 *
 *
 *
 */

/**
 * @api {get} /animes/:id 2) Get Anime by Id
 * @apiName Get Anime by Id
 * @apiGroup 3) Anime
 *
 * @apiParam {Number} id Id of the Anime.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 * @apiSuccess {Object} Anime Object Anime.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "Error": false,                                                                                            
 *     "Message": "Success",
 *     "Anime": [
 *       {
 *         "title": "title",
 *         "description": "description",
 *         "isFinish": 1,
 *         "nbTotal": 37,
 *         "mangaId": 2
 *       }
 *     ]
 *  }
 *
 *  @apiError AnimeNotFound The anime wasn't found.
 *
 * @apiErrorExample Error-Response:
 *  {
 *    "Error": true,
 *    "Message": "Error executing MySQL query"
 *  }
 *
 */


/**
 * @api {post} /animes 3) Create an Anime
 * @apiName Create an Anime
 * @apiGroup 3) Anime
 *
 * @apiParam {String} _token Token provide by the API.
 * @apiParam {Number} userId Id of the User.
 * @apiParam {String} title Title of the Anime.
 * @apiParam {String} description Description of the Anime.
 * @apiParam {Boolean} isFinish If the Anime is finish.
 * @apiParam {Number} nbTotal Number of episode.
 * @apiParam {Number} mangaId Link in DB if the Anime has a Manga.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "Error": false,
 *    "Message": "Anime added !"
 *  }
 *
 * @apiError AnimeNotFound The anime wasn't found. 
 *
 * @apiErrorExample Error-Response:
 *  {
 *    "Error": true,
 *    "Message": "Error executing MySQL query"
 *  }
 *
 */

/**
 * @api {put} /animes 4) Update an Anime.
 * @apiName Update an Anime
 * @apiGroup 3) Anime
 *
 * @apiParam {String} _token Token provide by the API.
 * @apiParam {Number} userId Id of the User.
 * @apiParam {Number} id Id of the Anime.
 * @apiParam {String} title (Optional) Title of the Anime.
 * @apiParam {String} description (Optional) Description of the Anime.
 * @apiParam {Boolean} isFinish (Optional) If the Anime is finish.
 * @apiParam {Number} nbTotal (Optional) Number of episode.
 * @apiParam {Number} mangaId (Optional) Link in DB if the Anime has a Manga.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "Error": false,
 *    "Message": "Updated Anime"
 *  }
 *
 * @apiError AnimeNotFound The anime wasn't found.
 *
 * @apiErrorExample Error-Response:
 *   {
 *     "Error": true,
 *     "Message": "Error executing MySQL query"
 *   }
 *
 */

/**
 * @api {delete} /animes/:id 5) Delete an Anime.
 * @apiName Delete an Anime
 * @apiGroup 3) Anime
 *
 * @apiParam {String} _token Token provide by the API.
 * @apiParam {Number} userId Id of the User.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *   {
 *     "Error": false,
 *     "Message": "Deleted the anime with id 2"
 *   }
 *
 * @apiError AnimeNotFound The anime wasn't found.
 *
 * @apiErrorExample Error-Response:
 *   {
 *     "Error": true,
 *     "Message": "Error executing MySQL query"
 *   }
 *
 */

/**
 * @api {get} /animes/:id/animeItems 6) Get AnimeItem with AnimeId
 * @apiName Get AnimeItem with AnimeId
 * @apiGroup 3) Anime
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 * @apiSuccess {Object} AnimeItems Item of the Anime.
 * @apiSuccess {String} AnimeItems.AnimeTitle Title of the Anime.
 * @apiSuccess {String} AnimeItems.ItemTitle Title of the Item.
 * @apiSuccess {Number} AnimeItems.Number Number of the Episode.
 * @apiSuccess {Number} AnimeItems.NbTotal Number total of Episode.
 * @apiSuccess {Boolean} AnimeItems.Watch Have watch this Episode.
 * @apiSuccess {Boolean} AnimeItems.Own Own this Episode.
 *
 * @apiSuccessExample Success-Response:
 *   {
 *     "Error": false,
 *     "Message": "Deleted the anime with id 2"
 *     "AnimeItems": [
 *       {
 *         "AnimeTitle": "Title of the Anime",
 *         "ItemTitle": "Title of the Episode",
 *         "Number" : 2,
 *         "NbTotal": 27,
 *         "Watch": 1,
 *         "Own": 0
 *       },
 *       .......
 *     ]
 *   }
 *
 * @apiError AnimeNotFound The anime wasn't found.
 *
 * @apiErrorExample Error-Response:
 *   {
 *     "Error": true,
 *     "Message": "Error executing MySQL query"
 *   }
 *
 */

/**
 * @api {get} /animeItems 1) Get All AnimeItem.
 * @apiName Get all AnimeItem
 * @apiGroup 4) AnimeItem
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 * @apiSuccess {Object} Anime_Items All the Items.
 * @apiSuccess {Number} Anime_Items.Id Id of the AnimeItem.
 * @apiSuccess {String} Anime_Items.Title Title of the AnimeItem.
 * @apiSuccess {Number} Anime_Items.Number Numero of the episode.
 * @apiSuccess {Boolean} Anime_Items.Own Own the episode.
 * @apiSuccess {Boolean} Anime_Items.Watch Have watch this episode.
 * @apiSuccess {Number} Anime_Items.AnimeId The anime of this episode.
 *
 * @apiSuccessExample Success-Response:
 *   {
 *     "Error": false,
 *     "Message": "Succes",
 *     "Anime_Items": [
 *       {
 *         "Id": 1,
 *         "Title": "Rebirth",
 *         "Number": 1,
 *         "Own": 1,
 *         "Watch": 1,
 *         "AnimeId": 1
 *       },
 *       .....
 *     ]
 *   }
 *
 */

/**
 * @api {get} /animeItems/:id 2) Get AnimeItem by Id.
 * @apiName Get AnimeItem by Id
 * @apiGroup 4) AnimeItem
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 * @apiSuccess {Object} Anime_Item All the Items.
 * @apiSuccess {Number} Anime_Items.Id Id of the AnimeItem.
 * @apiSuccess {String} Anime_Items.Title Title of the AnimeItem.
 * @apiSuccess {Number} Anime_Items.Number Numero of the episode.
 * @apiSuccess {Boolean} Anime_Items.Own Own the episode.
 * @apiSuccess {Boolean} Anime_Items.Watch Have watch this episode.
 * @apiSuccess {Number} Anime_Items.AnimeId The anime of this episode.
 *
 * @apiSuccessExample Success-Response:
 *   {
 *     "Error": false,
 *     "Message": "Succes",
 *     "Anime_Item": [
 *       {
 *         "Id": 1,
 *         "Title": "Rebirth",
 *         "Number": 1,
 *         "Own": 1,
 *         "Watch": 1,
 *         "Watch": 1,
 *         "AnimeId": 1
 *       }
 *     ]
 *   }
 *
 */

/**
 * @api {post} /animeItems 3) Create an AnimeItem
 * @apiName  Create an AnimeItem
 * @apiGroup 4) AnimeItem
 *
 * @apiParam {string} _token Token provide by the API.
 * @apiParam {Number} userId Id of the User.
 * @apiParam {String} title Title of the episode.
 * @apiParam {Number} number Number of the episode.
 * @apiParam {Boolean} own Owned the episode.
 * @apiParam {Boolean} Watch Have watch the episode.
 * @apiParam {Number} animeId Id of the Anime.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *   {
 *     "Error": false,
 *     "Message": "Anime Item added !"
 *   }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *   {
 *     "Error": true,
 *     "Message": "Error excecuting MySQL query"
 *   }
 *
 */

/**
 * @api {put} /animeItems 4) Update an AnimeItem
 * @apiName Update an AnimeItem
 * @apiGroup 4) AnimeItem
 *
 * @apiParam {String} _token Token provide by the API.
 * @apiParam {Number} userId Id of the User.
 * @apiParam {String} title (Optional) Title of the episode.
 * @apiParam {Number} number (Optional) Number of the episode.
 * @apiParam {Boolean} own (Optional) Owned the episode.
 * @apiParam {Boolean} Watch Have watch the episode.
 * @apiParam {Number} animeId Id of the Anime.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *   {
 *     "Error": false,
 *     "Message"; "Updated Anime"
 *   }
 *
 * @apiError AnimeNotFound The anime wasn't found.
 *
 * @apiErrorExample Error-Response:
 *   {
 *     "Error": true,
 *     "Message": "Error executing MySQL query"
 *   }
 *
 */

/**
 * @api {delete} /animeItems/:id 5) Delete an AnimeItem
 * @apiName Delete an AnimeItem
 * @apiGroup 4) AnimeItem
 *
 * @apiParam {String} _token Token provide by the API.
 * @apiParam {Number} userId Id of the User.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *   {
 *     "Error": false,
 *     "Message": "Deleted the animeItem with id 2"
 *   }
 *
 * @apiError AnimeNotFound The anime wasn't found.
 *
 * @apiErrorExample Error-Response:
 *   {
 *     "Error": true,
 *     "Message": "Error executing MySQL query"
 *   }
 *
 */
