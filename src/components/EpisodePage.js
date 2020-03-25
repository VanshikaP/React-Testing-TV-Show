import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import {fetchShow} from '../api/fetchShow'

const EpisodePage = () => {
    const [episode, setEpisode] = useState({});
    const { seasonID, episodeID } = useParams();
    
    useEffect(() => {
        fetchShow()
        .then(res => {
            const currEpisode = res._embedded.episodes.filter(e => e.number === episodeID)
            const episodes
            console.log('&&&', res._embedded.episodes[0])
            console.log('***', currEpisode);
            // setEpisode(currEpisode);
        })
        .catch(err => console.log(err))

    }, [seasonID, episodeID])

    return <h2> Episode here </h2>
}

export default EpisodePage