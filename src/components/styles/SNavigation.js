import styled from 'styled-components';

export const SNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #353535;
  color: #fff;

    p {
      font-family: 'Monserrat Classic', sans-serif;
      font-size: 22px;
      float: left;
      color: #fff;
      padding-right: 10px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }

    }

    .navigation-content {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
  }
`;
