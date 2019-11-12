import Link from 'next/link';

// Style imports
import styled from 'styled-components';

// Components
import Page from 'global/layouts/DefaultLayout';
import IncrementTool from 'components/IncrementTool/IncrementTool';
import IncrementVisual from 'components/IncrementVisual/IncrementVisual';

const Container = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;

const Index = () => {
  return (
    <Page>
      <Container>
        <h1>NEXT.js BOILERPLATE</h1>
        <IncrementVisual />
        <IncrementTool />
        <Link href="/slowpage">
          <a>Slow page</a>
        </Link>
      </Container>
    </Page>
  );
}

export default Index;
