//Utilizar PascalCase
//App
//ExemploDeComponente

import { Container } from './components/Container/Index';
import { Heading } from './components/Heading/Index';
import { Logo } from './components/Logo/Index';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    //Podemos utilizar <Fragment> </Fragment> como elemento pai também, mesma coisa que <> </>.
    <>
      <Container>
        <Logo/>
      </Container>
      <Container>
        <Heading>MENU</Heading>
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
