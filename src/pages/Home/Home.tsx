import * as assets from "../../assets";
import { ImageAnimation } from "./home";

function Home() {
  return (
    <>
      <ImageAnimation
        src={assets.animacao}
        alt="Imagem de uma pessoa medindo o imc"
      />
    </>
  );
}

export default Home;
