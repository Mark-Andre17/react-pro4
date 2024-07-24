import { LOAD_ALBUMS, LOAD_POSTERS,PRELOAD_ALBUMS,PRELOAD_POSTERS, PRELOAD_PHOTOS, LOAD_PHOTOS } from "./reducer"

export const loadAlbums = () => {
    return (dispatch) => {
        dispatch({type: PRELOAD_ALBUMS});

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((responce) => responce.json())
            .then((albums) => dispatch({type: LOAD_ALBUMS, payload: albums}));
    }
}

export const loadPosters = () => {
    return (dispatch) => {
        dispatch({type: PRELOAD_POSTERS});

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((responce) => responce.json())
        .then((posters) => dispatch({type: LOAD_POSTERS, payload: posters}));
    }
}

export const loadPhotos = (id) => {
    return (dispatch) => {
        dispatch({type: PRELOAD_PHOTOS});

        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((responce) => responce.json())
        .then((data) => data.filter(photo => photo.albumId === id))
        .then((photo) => dispatch({type: LOAD_PHOTOS, payload: photo}));
    }
}