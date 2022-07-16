import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EpisodeCards from "./Episodescards";

const API_URL = "https://rickandmortyapi.com/api";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        fetch(API_URL + "/episode")
            .then((response) => response.json())
            .then((data) => setEpisodes(data.results));
    }, []);
    console.log(episodes);
    return (
        <>
            {episodes.map((e, i) => (
                <EpisodeCards
                    key={i}
                    name={e.name}
                    episode={e.episode}
                    airDate={e.air_date}
                    tipo='/episodios/'
                />
            ))}
        </>
    );
};

export default Episodes;
