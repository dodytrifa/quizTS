import styled, {createGlobalStyle} from 'styled-components';
import BGImage from './img/image.jpg'; 

export const GlobalStyle = createGlobalStyle `

html {
  height: 100%;
}

body {
  background-image: url(${BGImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: 'Calibri'
}

`;

export const Wrap = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .start, 
  .next {
    cursor: pointer;
    border: 2px solid gray;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
`



