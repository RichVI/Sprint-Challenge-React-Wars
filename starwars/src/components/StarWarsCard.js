import React from 'react'
import {Card, CardText} from 'reactstrap';
import './StarWars.css';
import styled from 'styled-components';

const Wrapper= styled.div`
margin-right: 32%;
margin-left: 32%;
`


export default function StarWarsCard(props) {

    

    return (
        <Wrapper>
            <Card className='card'>
            <CardText className='text'>Name { props.person.name}</CardText>
            <CardText className='text'>Height { props.person.height}</CardText>
            <CardText className='text'>Gender { props.person.gender}</CardText>
            <CardText className='text'>Mass { props.person.mass}</CardText>
            <CardText className='text'>Hair Color { props.person.hair_color}</CardText>
            <CardText className='text'>Skin Color { props.person.skin_color}</CardText>
            <CardText className='text'>Eye Color { props.person.eye_color}</CardText>
            <CardText className='text'>Birth Year { props.person.birth_year}</CardText>
            </Card>
        </Wrapper>
    )
}
