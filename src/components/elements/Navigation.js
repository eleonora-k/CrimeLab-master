import React from 'react';
import {Link} from '@reach/router';
import {SNavigation} from '../styles/SNavigation';

const Navigation = ({movie}) => (
    <SNavigation>
        <div className="navigation-content">
            <Link to="/">
                <p>Home</p>
            </Link>
            <p>|</p>
            <p>{movie}</p>
        </div>
    </SNavigation>
);

export default Navigation;
