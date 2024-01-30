import "./../../Variables.css";
import "./CardArtist.css"

export default function CardArtist ({result}) {
    

    return (
        <div className="artist-card" id="">
            <div className="card-img">
                <img id="artist-img" src={result.urlImg} className="artist-img" alt=""/>
                <div className="play">
                    <span className="fa fa-solid fa-play"></span>
                </div>
            </div>
            <div className="card-text">
                <a title={result.name} className="vst" href="./">
                    <span className="artist-name" id="artist-name">{result.name}</span>
                    <span className="artist-categorie">Artista</span>
                </a>
            </div>
        </div>
    )
}
