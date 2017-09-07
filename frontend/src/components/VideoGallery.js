/**
 * Created by isilva on 06/09/17.
 */
import React, {Component} from "react";
import {Button, Grid, Row, Col, PageHeader} from "react-bootstrap";
import ReactPlayer from "react-player";

class VideoGallery extends Component{

    constructor() {
        super();
        this.state = { videos: [], likeAllowed: true };
    }

    componentDidMount() {
        this.fetchVideos();
        this.intervalId = setInterval(this.fetchVideos.bind(this), 1000);
    }

    componentWillMount()
    {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

        if (this.request) {
            this.request.abort();
            this.request = null;
        }
    }

    handleLike(video)
    {
        if((!this.lastLike) || (this.secondsAgo(this.lastLike) > 10)) {
            fetch(this.likeUrl + video._id, {method: "POST"})
                .then(response => {
                        if (!response.ok) {
                            console.error("Error trying to like video");
                            console.error(response);
                        }
                        else {
                            this.lastLike = Math.floor(Date.now() / 1000);
                        }
                    }
                );
            this.state.likeAllowed = true;
        }
        else {
            this.state.likeAllowed = false;
        }
    }

    secondsAgo(likeTime) {
        return Math.round((new Date().getTime() / 1000)) - likeTime;
    }

    fetchVideos()
    {
        fetch(this.getAllVideosUrl)
            .then(result => result.json())
            .then(videos => this.setState({videos}));
    }

    render()
    {
        this.getAllVideosUrl = this.props.getAllVideos;
        this.likeUrl = this.props.likeUrl;
        var alertMessage = (this.state.likeAllowed) ? null :
            <Row>
                <Col xs={6} md={3} />
                <Col xs={12} md={6}>
                    <div className="alert alert-danger">You cannot do more than one like within 10s!</div>
                </Col>
                <Col xs={6} md={3} />
            </Row> ;

        return (
            <div id="videoGallery">
                <Grid>
                    {
                        this.state.videos.map( video=>
                            <div key={video._id.toString()}>
                                <Row>
                                    <Col xs={6} md={3} />
                                    <Col xs={12} md={6}>
                                        <div><PageHeader>Total number of Likes: <small>{video.likes}</small></PageHeader></div>
                                    </Col>
                                    <Col xs={6} md={3} />
                                </Row>
                                <br/>
                                <Row>
                                    <Col xs={6} md={3} />
                                    <Col xs={12} md={6}>
                                        <ReactPlayer width={600} height={360} url={video.url}/>
                                    </Col>
                                    <Col xs={6} md={3} />
                                </Row>
                                <br/>
                                <Row>
                                    <Col xs={6} md={3} />
                                    <Col xs={12} md={6}>
                                        <Button bsStyle="primary" bsSize="large" onClick={()=>{this.handleLike(video)}}>Like me</Button>
                                    </Col>
                                    <Col xs={6} md={3} />
                                </Row>
                                <br/>
                                {alertMessage}
                            </div>
                        )
                    }
                </Grid>
            </div>
        );
    }

}

export default VideoGallery