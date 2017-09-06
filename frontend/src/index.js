import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './components/Header';
import VideoGallery from './components/VideoGallery';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<VideoGallery />, document.getElementById('content'));
registerServiceWorker();
