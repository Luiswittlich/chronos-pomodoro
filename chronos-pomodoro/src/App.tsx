//Utilizar PascalCase
//App
//ExemploDeComponente

import { Container } from './components/Container/Index';
import { Logo } from './components/Logo/Index';
import { Menu } from './components/Menu/Index';
import { CountDown } from './components/CountDown/Index';


import './styles/theme.css';
import './styles/global.css';



export function App() {
  return (
    //Podemos utilizar <Fragment> </Fragment> como elemento pai também, mesma coisa que <> </>.
    <>
      <Container>
        <Logo />
      </Container>
      
      <Container>
        <Menu/>
      </Container>
      
      <Container>
        <CountDown/>
      </Container>
    </>
  );
}
