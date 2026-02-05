import { Container } from '../../components/Container/Index';
import { Logo } from '../../components/Logo/Index';
import { Menu } from '../../components/Menu/Index';
import { Footer } from '../../components/Footer/Index';

type MainTemplateProps={
    children: React.ReactNode;
}


export function MainTemplate({ children }:MainTemplateProps) {
  return (
    //Podemos utilizar <Fragment> </Fragment> como elemento pai também, mesma coisa que <> </>.
    <>
      <Container>
        <Logo />
      </Container>
      
      <Container>
        <Menu/>
      </Container>
      
      {children}

      <Container>
        <Footer/>
      </Container>
    </>
  );
}