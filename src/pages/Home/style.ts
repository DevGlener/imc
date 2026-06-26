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
grid-column : 1/3;
grid-row : 1/4;
height:1000px;
padding: 0 48px ;
display: flex;
flex-direction: column;
`

export const Title = styled.h1`
margin-top : 164px;
font-size : 78px;
font-weight : bold;
span{
    color : #1D63FF;
}

`
export const P = styled.p`

font-size : 24px ; 
line-height : 36px;
color: #434656;
margin : 24px 0;
`

export const ContainerCard = styled.div`
width:558px;
height:180px;
display : flex;
justify-content: space-between;
margin : 0 auto; 

`
export const Card = styled.div`
width:170px;
height:180px;
background-color:#fff;
border-radius :24px ;
display: flex;
flex-direction: column-reverse;
justify-content: center;
align-items: center;
padding: 20px;
text-align :center ;

p{
    font-size:16px;
}
img{
    width : 40px ;
    height:63px;
}

`

export const BotaoCalcular = styled.button`

background-color : #054FDA;
color : #fff;
width:340px;
height:72px;
border-radius:18px;
outline:none;
border:none;
margin:62px auto 12px auto;;
font-size:24px;
cursor:pointer;

&:hover{
    background-color: #043799;
    transition: 0.8s;
    transform:scale(0.98);
}
&:active{
    background-color: #1e61de;
    transform:scale(0.98);
    transition: 0.2s;
}

`

export const Text = styled.div`
display:flex;
align-items:center;
height:25px;
width:100%;
justify-content:center ;
gap:4px;
color:#434656;
img{
width:12px;
height:16px;
}

`
export const Aside = styled.div`
grid-column : 3/5;
grid-row : 1/4;
display:block;
margin:auto;
img{   
    width:466;
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
font-size: 12px;
color:#434656;
`

