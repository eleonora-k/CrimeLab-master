import React from 'react';

import {SGrid, SGridContent} from '../styles/SGrid';

const Grid = ({header, children}) => (
    <SGrid>
        <h1>{header}</h1>
        <SGridContent>{children}</SGridContent>
    </SGrid>
)

export default Grid;
