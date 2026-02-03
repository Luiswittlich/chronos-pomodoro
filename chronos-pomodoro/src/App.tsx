//Utilizar PascalCase
//App
//ExemploDeComponente

import { Container } from './components/Container/Index';
import { Logo } from './components/Logo/Index';
import { Menu } from './components/Menu/Index';
import { CountDown } from './components/CountDown/Index';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer/Index';


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

      <Container>
        <form className='form'>
          <div className="formRow">
            <DefaultInput labelText='Task:' id='input' type='text' placeholder='Digite algo...' />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton color='green' icon={<PlayCircleIcon/>}/>
          </div>
        </form>
      </Container>

      <Container>
        <Footer/>
      </Container>
    </>
  );
}
