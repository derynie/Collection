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
 *      "Token": "Some token"
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
 * @api {delete} /users/:email 5) Delete an User
 * @apiName Delete an User
 * @apiGroup 2) User
 *
 * @apiParam {String} _token Token provide by the API.
 * @apiParam {String} email Email of the User.
 *
 * @apiSuccess {Boolean} Error State of the request.
 * @apiSuccess {String} Message Message of the request.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "Error": false,
 *    "Message": "Deleted the user with email somebody@gmail.com"
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
 * @apiParam {Number} id Id of the Anime.
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
