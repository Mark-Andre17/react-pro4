import { Albums } from './Albums';
import { Pictures } from './Pictures';
import { Header } from './Header';
import { useSelector, useDispatch } from'react-redux';
import { useEffect } from 'react';
import { loadAlbums, loadPosters, loadPhotos } from '../redux/action';


function App() {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums);
  const posters = useSelector(state => state.posters);
  const loadingPage = useSelector(state => state.loading);
  const loadingPosters = useSelector(state => state.loadingPosters);
  const loadingPhotos = useSelector(state => state.loadingPhotos);
  const photos = useSelector(state => state.photos);


  useEffect(() => {
    dispatch(loadAlbums());
    dispatch(loadPosters());
  }, []);

  const handleClick = (id) => {
    dispatch(loadPhotos(id))
  }

  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Albums 
          albums={albums} 
          posters={posters} 
          loadingPage={loadingPage} 
          loadingPosters={loadingPosters} 
          handleClick={handleClick}
        />
        <Pictures loadingPhotos={loadingPhotos} photos={photos}/>
      </div>
    </div>
  );
}

export default App;
