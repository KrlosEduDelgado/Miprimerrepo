import { createContext, useEffect, useState } from "react";
import listaCanciones from "../assets/listaCanciones.json";

// 1. crear el contexto
const SongContext= createContext();

//2. crear el provider del contexto para que todos los componentes tengan acceso al contexto
const SongProvider = ({children}) => {

    const [songList, setSongList] = useState([]);
    const [selectedSong, setSelectedSong] = useState('');
    const [loading, setLoading] = useState(true);

// Simulando una peticion a una API

useEffect(() => {
    setTimeout(() => {
        setSongList(listaCanciones);
        setLoading(false);
    }, 2000);
}, []);

    const data = {
        songList, 
        selectedSong,
        setSelectedSong,
        loading 
    }

    return (
        <SongContext.Provider value = {data}>
            {children}
        </SongContext.Provider>
    )
}
export  {SongContext, SongProvider}