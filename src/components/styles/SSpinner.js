import styled from 'styled-components';

export const SSpinner = styled.div `
  border: 5px solid #f3f3f3; 
  border-top: 5px solid #865044;
  margin: 20px auto;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
