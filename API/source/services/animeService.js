var Promise = require('promise');

var animeService = function () {

    //function anime(title: string)

};

animeService.instance = null;

animeService.getInstance = function () {
    if (this.instance === null) {
        this.instance = new animeService();
    }

    return this.instance;
};

module.exports = animeService.getInstance();