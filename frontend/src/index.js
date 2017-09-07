import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './components/Header';
import VideoGallery from './components/VideoGallery';
import registerServiceWorker from './registerServiceWorker';
import ExternalServices from './api/videos_api';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<VideoGallery getAllVideosUrl="http://localhost:3030/api/videos" likeUrl="http://localhost:3030/api/videos" fetchVideos={ExternalServices.fetchVideos} sendLike={ExternalServices.sendLike}/>, document.getElementById('content'));
registerServiceWorker();
