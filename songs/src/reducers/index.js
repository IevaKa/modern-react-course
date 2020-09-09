import { combineReducers } from "redux";

// static list of song
const songsReducer = () => {
  return [
    {
      title: "Bad News",
      duration: "4:05",
    },
    {
      title: "Homecoming",
      duration: "3:55",
    },
    {
      title: "Heartless",
      duration: "5:05",
    },
  ];
};

// select a specific song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
