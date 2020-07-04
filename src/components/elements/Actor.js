import React from 'react';
import NoImage from '../images/no_image.jpg';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import {SActor} from '../styles/SActor';

const Actor = ({actor}) => (
    <SActor>
        <img src={
                actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                    actor.profile_path
                }` : NoImage
            }
            alt="photo of the actor"/>
        <span className="actor-name">
            {
            actor.name
        }</span>
        <span className="actor-role">
            {
            actor.character
        }</span>
    </SActor>
);

export default Actor;
