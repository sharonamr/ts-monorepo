import { FC } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Header } from '@ts-monorepo/components/src/Header';

export const App: FC = () => (<div>ts-monorepo<Header /></div>)


const renderApp = () => {
  render(<Router><App /></Router>,
    document.getElementById('root'),
  );
};

renderApp();