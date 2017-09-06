import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './components/Header';
import VideoGallery from './components/VideoGallery';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<VideoGallery getAllVideos="http://localhost:3030/api/videos" likeUrl="http://localhost:3030/api/videos/"/>, document.getElementById('content'));
registerServiceWorker();
