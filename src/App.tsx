import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { DefaultLayout } from './layouts/DefaultLayout';
import { ArtworkList } from './components/ArtworkList';
import { ArtworkDetail } from './components/ArtworkDetail';

let router = createBrowserRouter([
  {
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: ArtworkList,
      },
      {
        path: ':id',
        Component: ArtworkDetail,
      },
    ],
  },
]);

const App = () => (
  <>
    <RouterProvider router={router} />

    <GlobalStyle />
  </>
);

const GlobalStyle = createGlobalStyle`
 body {
    color: white;
    font-family: sans-serif;
    background-color: #101010;
  }

  a {
    color: white;
  }
`;

export default App;
