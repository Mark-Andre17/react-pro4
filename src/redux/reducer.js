export const LOAD_ALBUMS = 'load/albums/success';
export const PRELOAD_ALBUMS = 'load/albums/waiting';
export const LOAD_POSTERS = 'load/posters/success';
export const PRELOAD_POSTERS = 'load/posters/waiting';
export const LOAD_PHOTOS = 'load/photos/success';
export const PRELOAD_PHOTOS = 'load/photos/waiting';
export const GET_ALBUM_ID = 'get/album/id';

const initialState = {
    albums: [],
    posters: [],
    albumID: null,
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
        case GET_ALBUM_ID:
            return {
                ...state,
                 albumID: action.payload
            }
        // case PRELOAD_PHOTOS:
        //     return {
        //         ...state,
        //          loadingPhotos: true
        //     }
        // case LOAD_PHOTOS:
        //     return {
        //         ...state, 
        //         photos: posters.filter((photo) => photo.albumId === albumID)
        //     }
        // case PRELOAD_ALBUMS:
        // case PRELOAD_PHOTOS:
        //     return {
        //         ...state,
        //          loadingPhotos: true
        //     }
        // case LOAD_PHOTOS:
        //     return {
        //         ...state,
        //          photos: action.payload,
        //          loadingPhotos: false
        //     }
        default: 
         return state
    }
}