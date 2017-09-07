
export default class MockExternalServices {


    static mockFetchVideos(responseMessage){

        var fetchVideos = (getVideosApi) => {

            var promise = {
                then: () => {
                    return responseMessage;
                }
            };

            return promise;
        }

        return fetchVideos;
    };


    static mockSendLike(responseMessage)
    {
        var sendLike = (sendLikeApi) => {
            var promise = {
                then: () => {
                    return responseMessage;
                }
            }
            return promise;
        };
        return sendLike;
    }

}
