import { Link, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import { Logo } from '../components/Logo';

export const DefaultLayout = () => (
  <Wrapper>
    <Link to={'/'}>
      <Logo />
    </Link>

    <Outlet />
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;
