/**
 * Handlers for all Videos operations.
 *
 * Created by isilva on 05/09/17.
 */

class VideosController {

    constructor(model)
    {
        this.model = model;
    }

    /**
     * Get all videos.
     * @param req
     * @param res
     */
    allVideos(req, res)
    {
        this.model.find({}, function (err, results) {
            if (err)
            {
                console.error(err);
                res.status(500).json(err);
            }
            else
                res.json(results);
        });
    }

    /**
     * Get video by Id.
     *
     * @param req
     * @param res
     */
    videoById(req, res)
    {
        var _id = req.params.id;
        if (_id) {
            this.model.findById(_id, function (err, results) {
                if(err)
                {
                    console.error(err);
                    res.status(500).json(err);
                }
                else {
                    if (results)
                        res.send(results);
                    else
                        res.status(404).send("Video " + _id + " not found");
                }
            });
        }
        else {
            res.send("A valid video ID must be given");
        }
    }

    /**
     * increment likes of video.
     *
     * @param req
     * @param res
     */
    likeVideo(req, res)
    {
        var _id = req.params.id;
        if (_id){
            this.model.findByIdAndUpdate(_id, { $inc : { "likes" : 1 } }, {new:true}, function (err, results) {
                if (err)
                {
                    console.error(err);
                    res.status(500).json(err);
                }
                else {
                    if (results)
                        res.send(results);
                    else
                        res.status(404).send("Video " + _id + " not found");
                }
            } );
        }
        else {
            res.send("A valid video ID must be given");
        }
    }

}


module.exports = function (app) {
    var controller = new VideosController(app.models.videos);
    return controller;
};