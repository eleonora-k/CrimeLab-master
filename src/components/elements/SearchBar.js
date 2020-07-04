import React, {useState, useRef} from 'react';
import FontAwesome from 'react-fontawesome';
import {SSearchBar, SSearchBarContent} from '../styles/SSearchBar';

const SearchBar = ({callback}) => {
    const [state, setState] = useState('');
    const timeOut = useRef(null);

    const doSearch = event => {
        const {value} = event.target;

        clearTimeout(timeOut.current);
        setState(value);

        timeOut.current = setTimeout(() => {
            callback(value);
        }, 500);
    }

    return (
        <SSearchBar>
            <SSearchBarContent>
                <FontAwesome className="search" name="search" size="2x"/>
                <input type="text" placeholder="Search movies - maybe something non-criminal for a change?"
                    onChange={doSearch}
                    value={state}/>
            </SSearchBarContent>
        </SSearchBar>
    )
}

export default SearchBar;
