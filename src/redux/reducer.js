export const LOAD_ALBUMS = 'load/albums/success';
export const PRELOAD_ALBUMS = 'load/albums/waiting';
export const LOAD_POSTERS = 'load/posters/success';
export const PRELOAD_POSTERS = 'load/posters/waiting';
export const LOAD_PHOTOS = 'load/photos/success';
export const PRELOAD_PHOTOS = 'load/photos/waiting';

const initialState = {
    albums: [],
    posters: [],
    photos: [],
    loading: false,
    loadingPosters: false,
    loadingPhotos: false
};

export const reducer =(state = initialState, action) => {
    switch(action.type) {
        case PRELOAD_ALBUMS:
            return {
                ...state,
                 loading: true
            }
        case LOAD_ALBUMS:
            return {
                ...state,
                 albums: action.payload,
                 loading: false
            }
        case PRELOAD_POSTERS:
            return {
                ...state,
                 loadingPosters: true
            }
        case LOAD_POSTERS:
            return {
                ...state,
                 posters: action.payload,
                 loadingPosters: false
            }
        case PRELOAD_PHOTOS:
            return {
                ...state,
                 loadingPhotos: true
            }
        case LOAD_PHOTOS:
            return {
                ...state,
                 photos: action.payload,
                 loadingPhotos: false
            }
        default: 
         return state
    }
}