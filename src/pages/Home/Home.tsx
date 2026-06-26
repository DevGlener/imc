import { Container, Section, Footer, Aside, ContainerCard, Title, P, Card, BotaoCalcular , Text } from "./style";
import animacao from '../../assets/animacao.svg'
import icon from '../../assets/Icon.svg'
import CardContent from "../../components/CardContent";
import iconeRaio from "../../assets/icone-raio.svg"
import iconeBalanca from "../../assets/icone-balanca.svg"
import iconeCoracao from "../../assets/icone-coracao.svg"

function Home() {
  return (
    <>
      <Container>
        <Section>
          <Title>
            Seu bem-estar começa no <span>equilíbrio.</span>
          </Title>
          <P>Estar no peso ideal para sua altura é um passo simples
            que transforma seu dia a dia.
          </P>
          <ContainerCard>
            <Card>
              <CardContent 
              
              avatar={iconeRaio}
              text="Mais energia para o dia a dia"
              
              />
            </Card>
            <Card>

            <CardContent 
              
              avatar={iconeBalanca}
              text="Escolhas leves,resultados reais"
              
              />

            </Card>
            <Card>

              <CardContent 
              
              avatar={iconeCoracao}
              text="Cuidar de você é prioridade"
              
              />

            </Card>
          </ContainerCard>
          <BotaoCalcular>Calcular meu IMC </BotaoCalcular>
          <Text>
            <p>
              Rápido, seguro e confidencial
            </p>
            <img src={icon} alt="imagem de cadeado" />
          </Text>
        </Section>
        <Aside>
          <img src={animacao} alt="imagem de animação" />
        </Aside>
        <Footer>
          <p>
            © 2026 . All rights reserved.
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
