import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import VideoGallery from './VideoGallery';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('header'));
ReactDOM.render(<VideoGallery src="https://www.youtube.com/embed/4gvmyfA7Z5M" totalLikes={0} />, document.getElementById('content'));
registerServiceWorker();
