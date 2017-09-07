
export default class ExternalServices {

    static fetchVideos (getVideosApi) {

        return fetch(getVideosApi)
            .then(result => result.json());

    }

    static sendLike (sendLikeApi, video){

        return fetch(this.likeUrl + '/' + video._id, {method: "POST"})
            .then(result => result.json());

    }

}
