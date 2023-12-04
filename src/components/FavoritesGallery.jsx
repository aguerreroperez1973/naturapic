import { useContext} from "react";
import { FavoriteContext } from "../context/context.jsx";

const Favorites = () => {
 
    const {dataphoto, setDataPhoto} = useContext(FavoriteContext);

    return <div className="gallery grid-columns-5 p-3 ">
          {/*/////////////////////////////////////////////////*/}
                {dataphoto.filter((photo) => photo.liked == true).map((photo, i) => {
                      return (
                          <div key={photo.id}> 
                              <img src={photo.src.original} alt="" width="150" height="150"></img>
                          </div>
                      )
                  }
                )}
          {/*/////////////////////////////////////////////////*/}
         </div>
  };
  export default Favorites;
  