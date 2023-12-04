import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../context/context.jsx";


const Gallery = () => {

  //apikey = "C3cV5XDcuwX9xFSBYasaZLJX3IrbnyL8WyekvQtUoUOrwU7oS75NWyXx"

  const {setFavoritos, select, setSelect} = useContext(FavoriteContext);
  const [dataphoto, setDataPhoto] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);
  
  const consultarApi = async () => {
  const url = "../../public/photos.json";
  const response = await fetch(url);
  
  if (response.ok) {
      const datos = await response.json();
          console.log(datos.photos);
          setDataPhoto(datos.photos)
          //setCargando(true)
          } else {
            //setCargando(false)
      }
  };

  return <div className="gallery grid-columns-5 p-3">
          {dataphoto.map((photo, i) => {
                return (
                    <div key={photo.id}> 
                        {/*<img src={photo.url} alt="foto 1" ></img>*/}

                        <img src="../../src/assets/img/pexels-pixabay-373543.jpg" alt="foto 2" width="150"></img>
                    </div>
                )
            }
          )}
        </div>;
};
export default Gallery;
