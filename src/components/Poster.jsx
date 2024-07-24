
export const Poster = ({ id, posters }) => {
    const poster = posters.find((item) => item.albumId === id);
    return(
        <div className="poster-block">
            <img src={poster.url} alt={poster.title} />
        </div>
    )
}