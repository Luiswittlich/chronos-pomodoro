//Utilizar PascalCase
//App
//ExemploDeComponente

import { Container } from './components/Container/Index';
import { Logo } from './components/Logo/Index';
import { Menu } from './components/Menu/Index';
import { CountDown } from './components/CountDown/Index';


import './styles/theme.css';
import './styles/global.css';
import { DefaultInput } from './components/DefaultInput';



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

      <Container>
        <form className='form'>
          <div className="formRow">
            <DefaultInput id='input' type='text'/>
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
