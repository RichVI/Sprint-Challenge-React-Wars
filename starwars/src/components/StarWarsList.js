import React from 'react';
import StarWarsCard from './StarWarsCard';

export default function StarWarsList(props) {

    return (
        <>

          {props.data.map((person)=> {
              return <StarWarsCard key={person.name} person={person} />
          })}

        </>
    )
}
