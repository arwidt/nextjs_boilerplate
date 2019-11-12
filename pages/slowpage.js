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

const SlowPage = ({title}) => {

  return (
    <Page>
      <Container>
        <h1>{title}</h1>
        <IncrementVisual />
        <IncrementTool />
        <Link href="/">
          <a>INDEX</a>
        </Link>
      </Container>
    </Page>
  );
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

SlowPage.getInitialProps = async ({ req }) => {
  await sleep(5000);
  return {title: 'SLOW PAGE'};
}


export default SlowPage;
