import { Button } from "./Button";
import { Poster } from "./Poster";

export const Albums = ({ albums, posters, loadingPage, loadingPosters, handleClick }) => {
    return (
        <div className="album-blocks">
            { loadingPage || loadingPosters ? 'Loading...' : (
                albums.map((item) => {
                    return (
                        <div className="album-block" key={item.id}>
                            <Poster id={item.id} posters={posters}/>
                            <h3>{item.title}</h3>
                            <Button handleClick={handleClick} id={item.id}/>
                        </div>
                    )
                })
                )
            }
        </div>
    )
}