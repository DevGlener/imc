import { Container , Section , Footer , Aside } from "./style";
import animacao from '../../assets/animacao.svg'
function Home() {
  return (
    <>
      <Container>
        <Section></Section>
        <Aside>
          <img src={animacao} alt="imagem de animação" />
        </Aside>
        <Footer>
         <p> 
          © 2024 . All rights reserved. 
         </p>
         <p>
         | dev_glener | Privacy Policy | Terms of Service | Contact Support 
        </p> 
        </Footer>
      </Container>
    </>
  );
}

export default Home;
