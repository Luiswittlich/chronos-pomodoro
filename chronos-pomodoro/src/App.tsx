//Utilizar PascalCase
//App
//ExemploDeComponente
import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/theme.css';
import './styles/global.css';
import { MessageContainer } from './components/MessagesContainer';

export function App() {
  return (
  <TaskContextProvider>
    <MessageContainer>
    <Home/>
    </MessageContainer>
  </TaskContextProvider>
  )
}
