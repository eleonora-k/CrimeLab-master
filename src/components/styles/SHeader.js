import styled from 'styled-components';

export const SHeader = styled.div `
  background: #1c1c1c;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    box-sizing: border-box;
    margin: 0 auto;
  }
`;

export const SLogo = styled.img `
  @media screen and (max-width: 200px) {
    width: 400px;
    height: 150px;
    margin-top: 5px;
  }
`;
