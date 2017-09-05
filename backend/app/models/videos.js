/**
 * Model schema of a video in MongoDB.
 *
 * Created by isilva on 05/09/17.
 */

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var videosSchema = new Schema({
    url: {
        required: true,
        type: String
    },
    likes: {
        required: true,
        type: Number
    }
});

var Videos = mongoose.model('Videos', videosSchema);

module.exports = function(){
    return Videos;
};