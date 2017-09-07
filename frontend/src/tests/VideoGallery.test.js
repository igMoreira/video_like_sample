import React from 'react';
import TestUtils from 'react-dom/test-utils';

import VideoGallery from '../components/VideoGallery';
import expect from 'expect.js';

import MockExternalServices from './testHelper';


describe('VideoGallery Component test set', () => {

    var videos = [
        {
            _id: "abc",
            url: "blabla",
            likes: 10
        }
    ];

    it('Tests rendering a non empty list of videos', () =>{

        var renderer = TestUtils.createRenderer();

        renderer.render(<VideoGallery getAllVideosUrl="http://test.com/api/videos" likeUrl="http://test.com/api/videos"
                                      fetchVideos={MockExternalServices.mockFetchVideos(videos)}
                                      sendLike={MockExternalServices.mockSendLike({body:"TEST RESPONSE", ok:true})} />);
        var component = renderer.getRenderOutput();

        expect(component.type).to.be.eql('div');
    });

});