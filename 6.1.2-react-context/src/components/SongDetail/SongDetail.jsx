import { useContext } from "react";
import { SongContext } from "../../context/useSongContex";

const SongDetail = () => {
    return (
        <div>
            {SongContext.selectedSong}
        </div>
    )
}

export default SongDetail;