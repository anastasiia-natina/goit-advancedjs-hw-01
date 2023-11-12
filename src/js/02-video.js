
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerElement = document.getElementById('vimeo-player');
const player = new Player(playerElement);

const STORAGE_KEY = 'videoplayer-current-time';

const savePlaybackTime = throttle(async () => {
  try {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem(STORAGE_KEY, currentTime);
  } catch (error) {
    console.error('Error saving playback time:', error);
  }
}, 1000); 

const restorePlaybackTime = async () => {
  const storedTime = localStorage.getItem(STORAGE_KEY);
  if (storedTime) {
    try {
      await player.setCurrentTime(parseFloat(storedTime));
    } catch (error) {
      console.error('Error restoring playback time:', error);
    }
  }
};

player.on('timeupdate', savePlaybackTime);
player.on('play', savePlaybackTime);

player.ready().then(() => {
  restorePlaybackTime();
});   