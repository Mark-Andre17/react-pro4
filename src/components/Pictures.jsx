
export const Pictures = ({ loadingPhotos, posters, albumId }) => {
    const filteredPhotos = posters.filter(photos => photos.albumId === albumId);
    return (
        <div className="pictures-block">
            {loadingPhotos ? 'Loading...' : (
                    filteredPhotos.map(photo => (
                    <div key={photo.id} className="picture-card">
                        <img src={photo.url} alt={photo.title} />
                    </div>
                    ))
            )}
        </div>
    )
}