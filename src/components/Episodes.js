import React from 'react';
import parse from 'html-react-parser';

import {Link} from 'react-router-dom';

export default function Episodes(props) {
  // console.log('PROPS HERE', props.episodes)
  return (
    <div className="episodes">
      {props.episodes.map(e => (
        <div data-testid="episode-list" className="episode" key={e.id}>
          {e.image && (
            <img className="episode-image" src={e.image.medium} alt={e.name} />
          )}
          <div className="episode-info">
            <p className="episode-number">
              Season {e.season}, Episode {e.number}
            </p>
            <Link to={`/${e.season}/${e.number}`}>{e.name}</Link>
            {e.summary && parse(e.summary)}
            <div className="flex-spacer" />
            <p className="episode-runtime">{e.runtime} minutes</p>
          </div>
        </div>
      ))}
    </div>
  );
}


/* Tests

1. Test that component renders with empty props (when component mounts)
  - props.episodes: []

//Happy Path
2. Test that episodes list is rendered when there is no error, and when props.missions has data
  
*/