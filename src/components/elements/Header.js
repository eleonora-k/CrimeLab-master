import React from 'react';
import {Link} from '@reach/router';
import Logo from '../images/CrimeLab_logo.png';
import {SHeader, SLogo} from '../styles/SHeader';

const Header = () => (
    <SHeader>
        <div className="header-content">
            <Link to="/">
                <SLogo src={Logo}
                    alt="crime-lab-logo"/>
            </Link>
        </div>
    </SHeader>
)

export default Header;
