import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {

const [dataphoto, setDataPhoto] = useState([]);
const [select, setSelect] = useState(false); // seleccionada o no seleccionada.
//const [favoritos, setFavoritos] = useState ([]); // dato imagen favorita.

useEffect(() => {
  consultarApi();
}, []);

 {/*/////////////////////////////////////////////////*/}
const consultarApi = async () => {

const url = "../../public/photos.json";
const response = await fetch(url);

if (response.ok) {
    const datos = await response.json();
      //console.log(datos.photos);
        setDataPhoto(datos.photos);
        } else {
          //setCargando(false)
    }
};
 {/*/////////////////////////////////////////////////*/}
 
  return (
            <FavoriteContext.Provider value={{dataphoto, setDataPhoto}}> {children} </FavoriteContext.Provider>
  )
}

export default  FavoriteProvider