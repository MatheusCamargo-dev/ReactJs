import styled, { createGlobalStyle } from 'styled-components';
// import { primaryColor, primaryDarkColor } from '../config/colors';
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
    .post{
        transition: transform 100ms ease-in-out;
    }
    .post:hover{
        transform: scale(1.05);
    }
  
`;

export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    margin: 30px auto;
`;