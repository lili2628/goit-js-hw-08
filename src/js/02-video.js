import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VIDEO_STORAGE_KEY = 'videoplayer-current-time';
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

onGetTimePause();

player.on('timeupdate', throttle(onRememberTimeOfPause, 1000));

function onRememberTimeOfPause(data) {
    const dataString = JSON.stringify(data);

    localStorage.setItem(VIDEO_STORAGE_KEY, dataString);
}

function onGetTimePause() {
    const timeOfPause = localStorage.getItem(VIDEO_STORAGE_KEY);

    if (timeOfPause) {
        const parsedTimeOfPause = JSON.parse(timeOfPause);

        player.setCurrentTime(parsedTimeOfPause.seconds);
    }
}







   






