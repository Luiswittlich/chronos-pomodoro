//Utilizar PascalCase
//App
//ExemploDeComponente

import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App() {

  return (//Podemos utilizar <Fragment> </Fragment> como elemento pai também, mesma coisa que <> </>.
    <> 
      <Heading>
        Olá, Mundo! 
        <button><TimerIcon/></button>
      </Heading>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolores
        iusto similique ipsam non modi placeat voluptates repellat itaque,
        maxime hic in temporibus ab voluptatum libero voluptatem consectetur
        sapiente saepe!
      </p>
      <p>Realizando testes!!</p>
    </>
  );
}
