import React from 'react';
import {SLoadMoreBtn, SLoadMoreBtnContainer} from '../styles/SLoadMoreBtn';

const LoadMoreBtn = ({text, callback}) => (
    <SLoadMoreBtnContainer>
        <SLoadMoreBtn type="button"
            onClick={callback}>
            {text} </SLoadMoreBtn>
    </SLoadMoreBtnContainer>
)

export default LoadMoreBtn;
