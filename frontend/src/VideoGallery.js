/**
 * Created by isilva on 06/09/17.
 */

import React, { Component } from 'react';
import { Button , Grid, Row, Col, PageHeader} from 'react-bootstrap';

class VideoGallery extends Component{

    render()
    {
        var { totalLikes, src} = this.props;

        return (
            <div id="videoGallery">
                <Grid>

                    <Row>
                        <Col xs={6} md={3} />
                        <Col xs={12} md={6}>
                            <div><PageHeader>Total number of Likes: <small>{totalLikes}</small></PageHeader></div>
                        </Col>
                        <Col xs={6} md={3} />
                    </Row>

                    <Row>
                        <Col xs={6} md={3} />
                        <Col xs={12} md={6}>
                            <iframe width="600" height="360" src={src} frameborder="0" allowfullscreen/>
                            <Button bsStyle="primary" bsSize="large">Like me</Button>
                        </Col>
                        <Col xs={6} md={3} />
                    </Row>

                </Grid>
            </div>
        );
    }

}

export default VideoGallery