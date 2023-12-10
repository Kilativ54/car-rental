import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import { Container, Main, MainWrapper } from './Layout.styled';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

function Layout() {
  return (
    <MainWrapper>
      <ScrollToTop />
      {/* <Container> */}
      <Header />
      {/* </Container> */}
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
         </MainWrapper>
  );
}

export default Layout;
