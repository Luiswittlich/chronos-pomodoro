//Utilizar PascalCase
//App
//ExemploDeComponente

import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container';
import { Heading } from './components/Heading';

export function App() {

  return (//Podemos utilizar <Fragment> </Fragment> como elemento pai também, mesma coisa que <> </>.
    <> 
      <Container>
          <Heading>Testando Meu componente Heading</Heading>
          <section>LOGO</section>
        </Container>
      <Container>
          <section>MENU</section>
        </Container>
      <Container>
          <section>FORM</section>
        </Container>
      <Container>
          <section>FORM</section>
        </Container>
    </>
  );
}
