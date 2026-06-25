import styled from "styled-components";
import background from '../../assets/background.svg'

export const Container = styled.div`
background-image:url(${background});
background-repeat:no-repeat;
background-size:cover;
height: 1080px;
display : grid ; 
grid-template-columns : repeat(4, 1fr) ; 
grid-template-rows: repeat(4, 1fr ) ;

`
export const Section = styled.div`

/* background-color : yellow; */
grid-column : 1/3;
grid-row : 1/4;
height:1000px;
padding:20px;
`

export const Aside = styled.div`

/* background-color : black ;  */
grid-column : 3/5;
grid-row : 1/4;
img{
    display:block ;
    margin:212px auto;
    width:464;
    height:472px;
}
`
export const Footer = styled.div`
grid-column : 1/5;
grid-row : 4/5;
height:80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    font-size: 20px;
`

