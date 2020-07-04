import styled from 'styled-components';

export const SGrid = styled.div `
  background: #1c1c1c;
  padding: 10px;
  margin: 0 auto;

  h1 {
    background: #1c1c1c;
    color: #fff;
    font-family: 'Norwester', sans-serif;
    font-size: 42px;
    background: #1c1c1c;
    color: #fff;
    text-align:center;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const SGridContent = styled.div `
  display: grid;
  grid-row-gap: 20px;
  grid-position: relative;
  grid-template-columns: repeat(5, minmax(80px, 1fr));
  grid-gap: 20px;


  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(80px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(80px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(80px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
