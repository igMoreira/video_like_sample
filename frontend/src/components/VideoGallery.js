/**
 * Created by isilva on 06/09/17.
 */
import React, {Component} from "react";
import {Button, Grid, Row, Col, PageHeader} from "react-bootstrap";
import ReactPlayer from "react-player";

class VideoGallery extends Component{

    constructor() {
        super();
        this.state = { videos: [] };
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
            fetch('http://localhost:3030/api/videos/' + video._id, {method: "POST"})
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
        }
        else
            alert("YOU CANNOT LIKE BEFORE 10s. Current elpased time : " + this.secondsAgo(this.lastLike));
    }

    secondsAgo(likeTime) {
        return Math.round((new Date().getTime() / 1000)) - likeTime;
    }

    fetchVideos()
    {
        fetch(`http://localhost:3030/api/videos`)
            .then(result => result.json())
            .then(videos => this.setState({videos}));
    }

    render()
    {
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

                                <Row>
                                    <Col xs={6} md={3} />
                                    <Col xs={12} md={6}>
                                        <ReactPlayer width={600} height={360} url={video.url}/>
                                        <Button bsStyle="primary" bsSize="large" onClick={()=>{this.handleLike(video)}}>Like me</Button>
                                    </Col>
                                    <Col xs={6} md={3} />
                                </Row>
                            </div>
                        )
                    }
                </Grid>
            </div>
        );
    }

}

export default VideoGallery