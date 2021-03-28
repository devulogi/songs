export const ActionType = {
  SONG_SELECTED: 'SONG_SELECTED',
};

export const selectSong = (song) => {
  return {
    type: ActionType.SONG_SELECTED,
    payload: song,
  };
};
