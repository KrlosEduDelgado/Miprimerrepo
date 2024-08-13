import SongDetail from "../components/SongDetail/SongDetail";
import SongList from "../components/SongList/SongList";
import { SongProvider } from "../context/useSongContex";
import "./home.css"

const Home = () => {
    return (
        <>
            <SongProvider>
                <div className="home-container">
                    <div className="izquierdo">
                        <SongList></SongList>                   
                    </div>
                    <div className="derecho">
                        <SongDetail></SongDetail>
                    </div>
                </div>
            </SongProvider>
        </>
    )
}

export default Home