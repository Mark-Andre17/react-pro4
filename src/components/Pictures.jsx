
export const Pictures = ({ loadingPhotos, photos }) => {
    return (
        <div className="pictures-block">
            {loadingPhotos ? 'Loading...' : (
                    photos.map(photo => (
                        <div key={photo.id} className="picture-card">
                            <img src={photo.url} alt={photo.title} />
                        </div>
                    ))
            )}
        </div>
    )
}