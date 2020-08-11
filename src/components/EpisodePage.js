import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import {fetchShow} from '../api/fetchShow'
import parse from 'html-react-parser'

const EpisodePage = () => {
    const [episode, setEpisode] = useState({});
    const { seasonID, episodeID } = useParams();
    
    useEffect(() => {
        fetchShow()
        .then(res => {
            const episodes = res._embedded.episodes;
            const currEpisode = episodes.filter(e => e.season == seasonID && e.number == episodeID)
            console.log('&&&', episodeID, seasonID, res._embedded.episodes[0])
            console.log('***', currEpisode);
            setEpisode(currEpisode[0]);
        })
        .catch(err => console.log(err))

    }, [seasonID, episodeID])

    return !episode 
        ? <h2>...Episode Loading</h2>
        : (
            <div className='episode-full' key={episode.id}>
                {episode.image && (
                <img className="episode-image" src={episode.image.medium} alt={episode.name} />
                )}
                <div className="episode-info">
                    <p className="episode-number">
                    Season {episode.season}, Episode {episode.number}
                    </p>
                    <h3>{episode.name}</h3>
                    {episode.summary && parse(episode.summary)}
                    <div className="flex-spacer" />
                    <p className="episode-runtime">{episode.runtime} minutes</p>
                </div>
            </div>
        )
}

export default EpisodePage