import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container/Index';
import { Heading } from '../../components/Heading/Index';

export function NotFound() {
  return (
    <MainTemplate>
        <Container>
          <Heading>
            <h1>Page NotFound</h1>
            </Heading>
        </Container>
    </MainTemplate>
  );
}