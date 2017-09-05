/**
 * Isolates db settings.
 *
 * Created by isilva on 05/09/17.
 */

module.exports = function (config) {

    return {
        getDbConnectionString: function () {
            return "mongodb://" + config.dbUser + ":" + config.dbPass + "@" + config.dbHost + ":"+ config.dbPort +"/" + config.dbName;
        }
    }

};