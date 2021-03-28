import { combineReducers } from 'redux';
import { ActionType } from './action';

const songs = [
  {
    title: 'Someday My Prince Will Come',
    artist: 'Evynne Hollens',
    duration: '3:12',
  },
  {
    title: 'A Dream Is a Wish Your Heart Makes',
    artist: 'Evynne Hollens',
    duration: '4:31',
  },
  {
    title: 'Part Of Your World',
    artist: 'Evynne Hollens',
    duration: '3:15',
  },
];

const songListReducer = () => {
  return songs;
};

const songSelectedReducer = (selectedSong = songs[0], action) => {
  if (action.type === ActionType.SONG_SELECTED) {
    selectedSong = action.payload;
    return selectedSong;
  }
  return selectedSong;
};

export default combineReducers({
  songList: songListReducer,
  songSelected: songSelectedReducer,
});
