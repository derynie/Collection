define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "Login",
    "group": "1__Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login example",
          "content": "{ \n  \"email\": \"Someone@sth.com\"\n  \"password\": \"Password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token of the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\": \"You are connected.\",\n  \"Token\": \"Some token\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Didn't find your account\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "1__Login"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "3) Create an User",
    "name": "Create_an_User",
    "group": "2__User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>Token provide by the API.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\": \"User Added !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "2__User"
  },
  {
    "type": "delete",
    "url": "/users/:email",
    "title": "5) Delete an User",
    "name": "Delete_an_User",
    "group": "2__User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>Token provide by the API.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\": \"Deleted the user with email somebody@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "2__User"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "1) Get all User",
    "name": "Get_User_by_Id",
    "group": "2__User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Users",
            "description": "<p>Object of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Users.Id",
            "description": "<p>Id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Users.Name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Users.Email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Users.Password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n      \"Error\": false,\n      \"Message\": \"Success\"\n      \"Users\": [\n         {\n           \"Id\": 1,\n\t      \"Name\": \"Someone\",\n\t      \"Email\": \"Someone@gmail.com\",\n\t      \"Password\": \"your password\"\n         },\n         .....\n       ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "2__User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "2) Get User by Id",
    "name": "Get_all_Users",
    "group": "2__User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>Row of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "User.Id",
            "description": "<p>Id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.Name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.Email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.Password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t{\n\t  \"Error\": false,\n\t  \"Message\": \"Success\",\n\t  \"Users\": [\n\t  {\n\t    \"Id\": 1,\n         \"Name\": \"Someone\",\n         \"Email\": \"Someone@gmail.com\",\n         \"Password\": \"a token\"\n       }\n      ]\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\": \"Success\",\n  \"Users\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "2__User"
  },
  {
    "type": "get",
    "url": "/users/:id/animes",
    "title": "6) Get animes of one User",
    "name": "Get_animes_of_one_User",
    "group": "2__User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Animes_of_user",
            "description": "<p>Object of animes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Animes_of_user.title",
            "description": "<p>Title of the Anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Animes_of_user.description",
            "description": "<p>Description of the Anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Animes_of_user.isFinish",
            "description": "<p>If the Anime is finish.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Animes_of_user.nbTotal",
            "description": "<p>Nombre total d'épisode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Animes_of_user.mangaId",
            "description": "<p>Link to the DataBase on a Manga.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\": \"Success\",\n   \"Animes_of_user\": [\n     {\n       \"title\": \"title\",\n       \"description\": \"description\",\n       \"isFinish\": 1,\n       \"nbTotal\": 37,\n       \"mangaId\": 2\n     },\n     ......\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "2__User"
  },
  {
    "type": "put",
    "url": "/users",
    "title": "4) Update an User",
    "name": "Update_an_User",
    "group": "2__User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>Token provide by the API.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password for the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\"; \"Update the password for email someone@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "2__User"
  },
  {
    "type": "post",
    "url": "/animes",
    "title": "3) Create an Anime",
    "name": "Create_an_Anime",
    "group": "3__Anime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>Token provide by the API.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Anime.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Anime.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isFinish",
            "description": "<p>If the Anime is finish.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbTotal",
            "description": "<p>Number of episode.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mangaId",
            "description": "<p>Link in DB if the Anime has a Manga.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\": \"Anime added !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AnimeNotFound",
            "description": "<p>The anime wasn't found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Error executing MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "3__Anime"
  },
  {
    "type": "delete",
    "url": "/animes/:id",
    "title": "5) Delete an Anime.",
    "name": "Delete_an_Anime",
    "group": "3__Anime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>Token provide by the API.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Anime.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\": \"Deleted the anime with id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AnimeNotFound",
            "description": "<p>The anime wasn't found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Error executing MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "3__Anime"
  },
  {
    "type": "get",
    "url": "/animes/:id",
    "title": "2) Get Anime by Id",
    "name": "Get_Anime_by_Id",
    "group": "3__Anime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Anime.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Anime",
            "description": "<p>Object Anime.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,                                                                                            \n   \"Message\": \"Success\",\n   \"Anime\": [\n     {\n       \"title\": \"title\",\n       \"description\": \"description\",\n       \"isFinish\": 1,\n       \"nbTotal\": 37,\n       \"mangaId\": 2\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AnimeNotFound",
            "description": "<p>The anime wasn't found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Error executing MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "3__Anime"
  },
  {
    "type": "get",
    "url": "/animes",
    "title": "1) Get all Animes",
    "name": "Get_all_Animes",
    "group": "3__Anime",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Animes",
            "description": "<p>All the Anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Animes.title",
            "description": "<p>Title of the Anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Animes.description",
            "description": "<p>Description of the Anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Animes.isFinish",
            "description": "<p>If the Anime is finish.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Animes.nbTotal",
            "description": "<p>Nombre total d'épisode.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Animes.mangaId",
            "description": "<p>Link in database if the Anime has a Manga.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"Error\": false,\n    \"Message\": \"Success\",\n    \"Animes\": [\n      {\n        \"title\": \"title\",\n        \"description\": \"description\",\n        \"isFinish\": 1,\n        \"nbTotal\": 37,\n        \"mangaId\": 2\n      },\n      .....\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "3__Anime"
  },
  {
    "type": "put",
    "url": "/animes",
    "title": "4) Update an Anime.",
    "name": "Update_an_Anime",
    "group": "3__Anime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>Token provide by the API.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Anime.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>(Optional) Title of the Anime.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>(Optional) Description of the Anime.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isFinish",
            "description": "<p>(Optional) If the Anime is finish.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbTotal",
            "description": "<p>(Optional) Number of episode.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mangaId",
            "description": "<p>(Optional) Link in DB if the Anime has a Manga.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Error",
            "description": "<p>State of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\": \"Updated Anime\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AnimeNotFound",
            "description": "<p>The anime wasn't found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Error executing MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../DOC/exemple.js",
    "groupTitle": "3__Anime"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "../DOC/apidoc/main.js",
    "group": "_home_quentin_solo_Collection_DOC_apidoc_main_js",
    "groupTitle": "_home_quentin_solo_Collection_DOC_apidoc_main_js",
    "name": ""
  }
] });