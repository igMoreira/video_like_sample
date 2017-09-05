/**
 * Routes configuration for VideosAPI
 *
 * Created by isilva on 05/09/17.
 */


module.exports = function (app) {

    var controller = app.controllers.videos;

    app.get(app.config.urls.videos.getAll, controller.allVideos.bind(controller));
    app.get(app.config.urls.videos.getById, controller.videoById.bind(controller));
    app.post(app.config.urls.videos.likeVideo, controller.likeVideo.bind(controller));

};
