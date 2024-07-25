import { useState,useEffect } from "react";


export const Pictures = ({ loadingPhotos, posters, albumId }) => {
    return (
        <div className="pictures-block">
            {loadingPhotos ? 'Loading...' : (
                    posters.map(photo => photo.albumId === albumId ? (
                    <div key={photo.id} className="picture-card">
                        <img src={photo.url} alt={photo.title} />
                    </div>
                    ) : false)
            )}
        </div>
    )
}