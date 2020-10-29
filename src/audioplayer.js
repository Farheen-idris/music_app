
import ReactMusicPlayer from 'react-music-player';

var songs = [
    {
      url: 'path/to/mp3',
      cover: 'path/to/jpeg',
      artist: {
        name: 'Metallica',
        song: 'Fuel'
      }
    },
    {
      url: 'path/to/your/mp3',
      artist: {
        name: 'X Japan',
        song: 'Art of Life'
      }
    }
  ];
  

<ReactMusicPlayer songs={songs} autoplay />