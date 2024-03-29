import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'Makarena', duration: '2:30'},
        {title: 'All star', duration: '3:30'},
        {title: 'I want it that way', duration: '5:10'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};



export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});