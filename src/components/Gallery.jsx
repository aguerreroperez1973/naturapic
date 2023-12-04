import { useContext} from "react";
import { FavoriteContext } from "../context/context.jsx";
import IconHeart from "../components/IconHeart.jsx"

const Gallery = () => {

  const {dataphoto, setDataPhoto} = useContext(FavoriteContext);
 
  const Select = (id) => {
    const actualizaDataphoto = dataphoto.map((photo) => {
        if (id == photo.id)
            photo.liked = photo.liked==true ? false : true
          return photo; 
    })
      setDataPhoto(actualizaDataphoto)
  }
 
  return <div className="gallery grid-columns-5 p-3">
          {/*/////////////////////////////////////////////////*/}
            {dataphoto.map((photo, i) => {
                return (
                    <div key={photo.id} className="image-pic" style={{backgroundImage:`url(${photo.src.original})`, backgroundSize:'cover',height:'150px' }}>
                        
                        <div style={{textAlign:'right', width:'100%'}} onClick={() => Select(photo.id)} role="button"> 
                          <IconHeart filled={photo.liked}></IconHeart>
                          </div>
                          <div style={ {color:'white'} }>
                            <p>{photo.alt}</p>
                          </div>
                    </div>
                 )
               }
            )}
          {/*/////////////////////////////////////////////////*/}
        </div>;
};
export default Gallery;
